import { writeFile } from 'node:fs/promises'

const response = await fetch('http://127.0.0.1:9222/json/new?http://127.0.0.1:5173/fund', { method: 'PUT' })
const page = await response.json()
const socket = new WebSocket(page.webSocketDebuggerUrl)
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true })
  socket.addEventListener('error', reject, { once: true })
})

let id = 0
const pending = new Map()
const runtimeErrors = []
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data)
  if (message.method === 'Runtime.exceptionThrown') runtimeErrors.push(message.params.exceptionDetails.text)
  if (!message.id) return
  const request = pending.get(message.id)
  if (!request) return
  pending.delete(message.id)
  if (message.error) request.reject(new Error(message.error.message))
  else request.resolve(message.result)
})

function send(method, params = {}) {
  const requestId = ++id
  socket.send(JSON.stringify({ id: requestId, method, params }))
  return new Promise((resolve, reject) => pending.set(requestId, { resolve, reject }))
}

async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text)
  return result.result.value
}

async function inspect(width, height, screenshotPath) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 801 })
  await send('Page.navigate', { url: 'http://127.0.0.1:5173/fund' })
  await new Promise((resolve) => setTimeout(resolve, 600))
  await evaluate(`(async () => {
    await document.fonts.ready
    document.documentElement.style.scrollBehavior = 'auto'
    const style = document.createElement('style')
    style.textContent = '*,*::before,*::after{animation:none!important;transition:none!important}'
    document.head.append(style)
    scrollTo(0, 0)
    return true
  })()`)

  if (screenshotPath) {
    const { contentSize } = await send('Page.getLayoutMetrics')
    const screenshot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: { x: 0, y: 0, width: contentSize.width, height: contentSize.height, scale: 1 },
    })
    await writeFile(screenshotPath, Buffer.from(screenshot.data, 'base64'))
  }

  return evaluate(`(() => {
    const all = [...document.querySelectorAll('body *')]
    const overflowing = all
      .map((element) => ({ tag: element.tagName, text: element.textContent.trim().slice(0, 60), rect: element.getBoundingClientRect().toJSON() }))
      .filter(({ rect }) => rect.right > innerWidth + 0.5 || rect.left < -0.5)
      .slice(0, 12)
    const undersizedTargets = [...document.querySelectorAll('a, button')]
      .map((element) => ({ text: element.textContent.trim().slice(0, 60), rect: element.getBoundingClientRect().toJSON() }))
      .filter(({ rect }) => rect.width < 44 || rect.height < 44)
    const externalLinks = [...document.querySelectorAll('a[target="_blank"]')].map((link) => ({
      text: link.textContent.trim(),
      href: link.href,
      rel: link.rel,
    }))
    return {
      viewport: { width: innerWidth, height: innerHeight },
      document: { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight },
      headings: [...document.querySelectorAll('h1,h2,h3')].map((heading) => ({ level: heading.tagName, text: heading.textContent.trim() })),
      overflowing,
      undersizedTargets,
      externalLinks,
      flowSteps: document.querySelectorAll('ol[aria-label="Planned sponsorship flow"] > li').length,
      tierNames: [...document.querySelectorAll('section[aria-labelledby="tiers-heading"] h3')].map((heading) => heading.textContent.trim()),
      boundaryItems: [...document.querySelectorAll('section[aria-labelledby="boundary-heading"] li')].map((item) => item.textContent.trim()),
      status: document.querySelector('aside').textContent.replace(/\\s+/g, ' ').trim(),
      canvases: document.querySelectorAll('canvas').length,
      title: document.title,
    }
  })()`)
}

await send('Page.enable')
await send('Runtime.enable')
const results = {}
for (const width of [320, 375, 768, 1440]) {
  results[width] = await inspect(
    width,
    width < 801 ? 900 : 1000,
    width === 1440 ? '.impeccable/review/fund-desktop.png' : undefined,
  )
}
results[390] = await inspect(390, 900, '.impeccable/review/fund-mobile.png')
console.log(JSON.stringify({ results, runtimeErrors }, null, 2))
socket.close()
