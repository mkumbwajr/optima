# Screenshot-to-prototype coverage

Source: 17 images in `Screenshots/`, all reviewed before implementation. Screenshot filenames begin `Screenshot_11-9-2026_` and end `_optima.crdbbank.co.tz.jpeg`.

| Screenshot time | Observed function | Prototype |
|---|---|---|
| 142157 | User ID / password sign-in | `#signin`, separate demo-only form |
| 142240 | OTP verification | `#verify`, fixed sample code, no real authentication |
| 14244 / 142445 | Dashboard, status summaries, full module navigation | `#dashboard`, consolidated actionable summary and module counts |
| 142510 | Business case submenus: review, history, drafts, received, reports, archive, new, under review, returned | Business Case list with status tabs, history/export, creation |
| 142559 | Business case owner, date, classification, To, From, Ufs, subject, rich body, save | Full document editor retaining observed fields, plus local submission simulation |
| 142615 | Business case review table, search, sorting, paging | Searchable and sortable document list, detail view and review actions |
| 142844 | Date/action filters, copy/PDF/CSV history exports | Filter dialog, copy and CSV export, browser Print/Save PDF |
| 142925 | Memo review and creation | Internal Memo module and shared editor |
| 14311 / 143216 / 143324 | Uniform listing, reference/status, summary and print/save | Uniform list, summary, print/save, simplified proposed request form |
| 14343 | Profile, department, position, PF and account data | Profile dialog. Sensitive PF/account values deliberately omitted from sample data |
| 143324 / 143511 | Ideas in review, returned and drafted, categories/segments/status | Ideas list, category/segment/assignee columns and create/edit form |
| 143546 | Finance forwarded approved report, vendor/contact/PO/invoice/date/amount/VAT | Supplier invoice module, correct report columns and detail, filters/exports |
| 143736 / 143750 | Thank you cards listing/create/view; title, colleague, 3000 character description | E-Certificates list, editable card, saved preview and print |

## Evidence boundaries

- Only screenshots are available. No production source, route definitions, data schemas, APIs, role matrix, or workflow rules have been supplied.
- The visible navigation retains every observed module. Full layouts for Duties, other certificate categories, uniform measurement fields below the captured area, and most letter/motivation screens were not supplied. Those use shared layouts or a clearly empty list and require validation.
- Review/return/withdraw/archive are prototype assumptions, not a claim to reproduce the production approval engine.
- Sample records are fabricated demonstration content. Do not treat counts, owner names or dates as bank operational data.
- The document editor supports basic rich text. The original screenshot's advanced editor menus, full table editing and additional plugins require an editor integration during production work.
- Attachments retain filenames only in this first version, and are not uploaded or downloaded. The prototype states this beside the file field and document attachment.
- Uniform sizing is a proposed simplified interaction. The actual measurement schema and form below the visible screenshot must be confirmed.
- Production authentication and OTP, server-enforced roles, reviewer routing, durable storage, audit trails, file storage and notification delivery remain integration work.

## Intended HOD walkthrough

1. Open Overview and show consolidated document queues.
2. Open a review item, approve it or return it with feedback, and show the count update.
3. Create a business case, save it, reopen it and submit it for review.
4. Filter a module and export the current view.
5. Create and print a thank you card, then preview sign-in from the profile dialog.
