export const LINKS = {
  github: 'https://github.com/brzrk-motion/Playblast',
  installGuide: 'https://brzrk-motion.github.io/Playblast/deployment/install-linux-nas',
  issues: 'https://github.com/brzrk-motion/Playblast/issues',
  sponsorsDoc: 'https://github.com/brzrk-motion/Playblast/blob/development-mvp/SPONSORS.md',
  marketingLp: 'https://brzrk-motion.github.io/playblast-lp/',
} as const

const BASE = import.meta.env.BASE_URL
export const SCREENSHOTS = [
  { src: `${BASE}screenshots/review.png`, alt: 'Playblast review player showing a deliverable cut with timestamped comments in the sidebar', caption: 'Timestamped comments stay attached to the cut', code: 'REVIEW / 01' },
  { src: `${BASE}screenshots/compare.png`, alt: 'Playblast compare view with two versions in synced side-by-side playback', caption: 'Versions align in synced side-by-side playback', code: 'COMPARE / 02' },
  { src: `${BASE}screenshots/annotate.png`, alt: 'Playblast review player with frame annotation markup on a video frame', caption: 'Frame annotations make visual notes explicit', code: 'ANNOTATE / 03' },
] as const

export const SPONSORSHIP_DISCLAIMER = 'Sponsorship funds general maintenance and development of Playblast. It does not purchase private support, response times, roadmap control, hosting, installation, or priority security treatment. You run your own instance.'
export const SPONSORSHIP_TIERS = [
  { name: 'Friend', amount: '$10', period: '/ month', recognition: 'Name on sponsors list' },
  { name: 'Studio', amount: '$50', period: '/ month', recognition: 'Name + link' },
  { name: 'Production', amount: '$150', period: '/ month', recognition: 'Logo + link (sponsors page + LP)' },
  { name: 'Anchor', amount: '$500', period: '/ month', recognition: 'Larger logo; named in quarterly public report' },
  { name: 'Founding partner', amount: '$1000', period: '/ month', recognition: 'Top placement; optional case-study/quote with written permission' },
] as const
export const LOOP_STEPS = [
  { title: 'Install on your infrastructure', body: 'Deploy with Docker on NAS or Linux. One studio per instance — media stays on hardware you control.' },
  { title: 'Set up a project', body: 'Create a project with deliverables for a job, reel, or internal piece.' },
  { title: 'Upload versions', body: 'Add cuts and iterations as they land. Every version lives on your server.' },
  { title: 'Leave frame-aware feedback', body: 'Timestamped comments and frame annotations tie notes to the exact moment in the cut.' },
  { title: 'Compare side by side', body: 'Line up versions to see what changed — without exporting comparison reels by hand.' },
  { title: 'Approve and track history', body: 'Move deliverables through approval states. Review history shows what was signed off and when.' },
] as const
export const YOU_GET = ['Projects, deliverables, and versions', 'Timestamped comments and frame annotations', 'Side-by-side version comparison', 'Approval states and review history', 'Admin, Creative, and Proofing roles', 'Docs and public issues as the support boundary'] as const
export const YOU_DONT_GET = ['Hosted SaaS — brzrk does not run your instance', 'Founder install or white-glove onboarding', 'Support SLA or managed operations from brzrk', 'CRM, invoicing, or studio ops suite', 'Guest or client share links (deferred)', 'Every pro codec, mobile app, or timecode/scrub feature as a pitch'] as const
