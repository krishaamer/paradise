Paradise Monorepo

- paradise-meteor: Legacy Meteor app (Meteor 1.4.4.6 upgrade target) preserved for reference.
- paradise-next: Next.js reimplementation with the same visuals and content.

Getting Started

- Next.js (pnpm)
  - cd `paradise-next`
  - `pnpm install`
  - `pnpm dev`
  - Open http://localhost:3000

- Meteor (legacy)
  - cd `paradise-meteor`
  - `meteor run`
  - See `paradise-meteor/RUNNING-OLD-METEOR.md` for Docker/legacy toolchain.

Notes

- The Next.js site uses Bootstrap 2.3, Font Awesome 3.2, animate.css, and Leaflet via CDN to match legacy visuals.
- Language toggle (EN/PT/EE) uses strings ported from the original smart.json i18n messages; some EN/PT chapter texts are intentionally blank to reflect the legacy data.
- Private Area appears when you click Login in the navbar (client-only). It mirrors the original tabs and content (Watch Movie, Story/Chapters, Budget, TEDx, Payments, Messages).

