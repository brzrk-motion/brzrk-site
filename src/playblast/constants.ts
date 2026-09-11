export const LINKS = {
  github: 'https://github.com/brzrk-motion/Playblast',
  installGuide: 'https://brzrk-motion.github.io/Playblast/deployment/install-linux-nas',
  issues: 'https://github.com/brzrk-motion/Playblast/issues',
  sponsorsDoc: 'https://github.com/brzrk-motion/Playblast/blob/development-mvp/SPONSORS.md',
  marketingLp: 'https://brzrk-motion.github.io/playblast-lp/',
} as const

const BASE = import.meta.env.BASE_URL
export const SCREENSHOTS = [
  {
    src: `${BASE}screenshots/clients.png`,
    alt: 'Playblast client management with client list, retainer cycle utilization, and lifetime value on the selected record',
    caption: 'Clients, retainers, and lifetime value in one record',
    code: 'CLIENTS / 01',
  },
  {
    src: `${BASE}screenshots/invoices.png`,
    alt: 'Playblast project invoices list with outstanding balance and payment status per invoice',
    caption: 'Invoices stay with the project',
    code: 'INVOICES / 02',
  },
  {
    src: `${BASE}screenshots/review.png`,
    alt: 'Playblast review player showing a deliverable cut with timestamped comments in the sidebar',
    caption: 'Timestamped comments stay attached to the version',
    code: 'REVIEW / 03',
  },
  {
    src: `${BASE}screenshots/compare.png`,
    alt: 'Playblast compare view with two versions in synced side-by-side playback',
    caption: 'Versions align in synced side-by-side playback',
    code: 'COMPARE / 04',
  },
] as const

export const SPONSORSHIP_TIERS = [
  { name: 'Friend', amount: '$10', period: '/ month', recognition: 'Name on sponsors list' },
  { name: 'Studio', amount: '$50', period: '/ month', recognition: 'Name + link' },
  { name: 'Production', amount: '$150', period: '/ month', recognition: 'Logo and link on the sponsors page and marketing site' },
  { name: 'Anchor', amount: '$500', period: '/ month', recognition: 'Larger logo. Named in the quarterly public report.' },
  { name: 'Founding partner', amount: '$1000', period: '/ month', recognition: 'Top placement. Optional case study or quote with written permission.' },
] as const
export const LOOP_STEPS = [
  { title: 'Set up', body: 'Run Playblast with Docker on a NAS or Linux host. One studio per instance. Media stays on your disks.' },
  { title: 'Set up a project', body: 'Create a project with deliverables for a client job or internal piece.' },
  { title: 'Upload versions', body: 'Add iterations as they land. Every version lives on your server.' },
  { title: 'Leave frame-aware feedback', body: 'Timestamped comments and frame annotations tie notes to the exact moment in the version.' },
  { title: 'Compare side by side', body: 'Line up versions to see what changed, without exporting comparison reels by hand.' },
  { title: 'Approve and track history', body: 'Move deliverables through approval states. Review history shows what was signed off and when.' },
] as const
export const YOU_GET = [
  'Projects, deliverables, and versions',
  'Timestamped comments and frame annotations',
  'Side-by-side version comparison',
  'Approval states and review history',
  'Clients, leads, retainers, and lifetime value',
  'Project invoices, estimates, and services',
  'Admin, Creative, and Proofing roles',
  'Documentation and public issue tracker',
] as const

export const CLIENT_FINANCE_FEATURES = [
  'Clients and leads with contact history in one record',
  'Retainers with cycle hours and utilization',
  'Lifetime value estimates per client',
  'Project estimates built from attached services',
  'Invoices generated and tracked on the project',
  'Services catalog linked to project billing',
] as const
