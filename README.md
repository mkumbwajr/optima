# Optima employee portal redesign

An interactive local UI/UX prototype based on the 17 supplied screenshots. The redesign preserves the observed module names and fields while simplifying navigation and bringing pending work to the dashboard.

## Run locally

Requires Node.js 20 or newer. No package installation or external network connection is required.

```sh
npm start
```

Open http://127.0.0.1:4173. The server binds to localhost and serves only `public/`, not the screenshots or project files. Use `PORT=4174 npm start` to select another port.

```sh
npm run check
npm test
```

## Included

- Responsive overview with document queues, activity, quick creation and per-module summaries.
- All observed modules in the navigation.
- Document search, date/status filters, sorting, paging, CSV/copy exports and print/save as PDF.
- Business case and shared document editor with owner, date, classification, To, From, Ufs, subject and basic rich text.
- Local draft save/edit, submit, approve, return with feedback, withdraw and archive flows.
- Ideas, uniform request summary, invoice reports, thank you cards and profile views.
- CRDB HQ sign-in hero, official logo treatment and the supplied Tembolic typeface.
- Time-aware greeting, light/dark appearance and English/Kiswahili interface controls.
- Stephen Kagaruki profile and prototype sign-in: user ID `skagaruki`, password `1234`, demo OTP code `123456`.
- Reusable internal memo templates for the SimBanking release, Optima revamp and digital release readiness.
- Sample data saved to this browser. Reset it from the “Design preview” footer control.

## Prototype boundaries

This is a front-end proposal, not a replacement for the bank’s running portal. Production authentication, permissions, routing, backend persistence, secure attachments, notifications and approvals have not been connected. Screenshot-inferred features and unobserved screens are documented in `docs/SCREENSHOT_MAP.md`.

Sample records illustrate the experience. Personal financial identifiers from screenshots are not included. Files selected in the attachment field retain their filename only. Draft body formatting is sanitised before storage and display.

The app uses native HTML/CSS/JavaScript modules and a Node static server, with vendored Lucide icons (license in `public/vendor/`). Brand assets and fonts are served locally. There are no remote analytics, fonts or image requests.

## Files

- `public/app.js`: views and interaction handling.
- `public/model.js`: module definitions, sample records, filters and transitions.
- `public/styles.css`: design system, desktop/mobile and print layouts.
- `docs/DESIGN.md`: visual direction and rationale.
- `docs/SCREENSHOT_MAP.md`: observed features and integration gaps.
- `tests/`: workflow unit tests and browser checks.
