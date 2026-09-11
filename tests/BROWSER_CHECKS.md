# Browser verification

Verified in the Codex browser on 11 September 2026, at desktop and 390px mobile viewport widths.

- Dashboard rendered with all observed navigation modules.
- Empty submission showed field-specific validation and focused the first missing field.
- New business case: entered subject, recipient and rich body, saved a draft, reloaded the page, reopened and submitted the persisted draft. Confirmed status and history changed.
- Review: approved a sample business case after its confirmation dialog. Confirmed module status and pending-review counter updated.
- Module search returned only matching records. Status filtering, clearing filters and CSV export worked.
- Mobile: navigation opened and closed through module selection. Document table scrolls inside its container. Document width and viewport both measured 390px.
- Created and saved a thank you card on mobile. Confirmed the recipient and description rendered in the card.
- Sign-in preview continued to verification and returned to the dashboard with sample code 123456.
- No browser console warnings or errors were recorded during these checks.

Unit checks cover filtering, immutable state transitions, required feedback, valid submissions, rich-text empty states, the 3000-character card limit, numeric sorting and CSV formula escaping.

Not verified: actual bank authentication, permissions, integrations, production approval rules, actual file storage and download. These are outside this UI prototype. PDF uses the browser’s native print flow; no production PDF renderer is integrated.
