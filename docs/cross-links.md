# Cross-links — brzrk social profiles

Canonical handles after the X rebrand (BRZ-196, BRZ-204). Source of truth for site footer: `src/lib/socialLinks.ts`.

| Platform | URL | Handle / name |
|----------|-----|---------------|
| **Website** | https://brzrkmotion.com | — |
| **X** | https://x.com/brzrkmotion | @brzrkmotion |
| **Instagram** | https://www.instagram.com/brzrkmotion/ | @brzrkmotion |
| **LinkedIn** | https://www.linkedin.com/company/brzrk-motion-studio | BRZRK Motion Studio |
| **GitHub org** | https://github.com/brzrk-motion | brzrk-motion |
| **Email** | mailto:brzrk@brzrkmotion.com | brzrk@brzrkmotion.com |

## Audit (2026-09-18)

| Surface | JamesAbels / old link found? | Action |
|---------|------------------------------|--------|
| **brzrkmotion.com** (site + fund) | No — no social links before this pass | Added Connect footer with @brzrkmotion links |
| **GitHub org profile** | No profile README existed | Added `.github` org profile README |
| **Playblast repo** | No JamesAbels references | None |
| **Instagram** (`brzrkmotion`) | Manual check — verify bio/website do not link @JamesAbels | James login — update bio website to brzrkmotion.com if needed |
| **LinkedIn** (`BRZRK Motion Studio`) | Manual check — verify company page links | James login — point website/social to @brzrkmotion |
| **Email signatures** | No shared template existed | Use template below |

**Retired:** @JamesAbels (personal X). Do not link from brzrk properties after rename completes (BRZ-202).

## Email signature template

Plain text (Gmail, Apple Mail):

```
—
brzrk · Tools for the work behind the work
https://brzrkmotion.com/playblast
X @brzrkmotion · Instagram @brzrkmotion
```

HTML (optional):

```html
<p style="margin:0 0 4px;font-family:system-ui,sans-serif;font-size:13px;color:#111;">
  <strong>brzrk</strong> · Tools for the work behind the work
</p>
<p style="margin:0;font-family:system-ui,sans-serif;font-size:12px;color:#555;">
  <a href="https://brzrkmotion.com/playblast">Playblast</a> ·
  <a href="https://x.com/brzrkmotion">@brzrkmotion</a> ·
  <a href="https://www.instagram.com/brzrkmotion/">Instagram</a>
</p>
```
