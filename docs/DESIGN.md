# Optima design direction

Purpose: let an employee find, create, review and track work without navigating a long sequence of nearly identical menus.

Palette: bank green #006747, action green #008657, lime #B8D96B, canvas #F4F7F6, ink #183B32, white #FFFFFF. Green provides navigation and action hierarchy. Lime is reserved for a quiet accent, not document status. Blue, amber and red statuses also have explicit text.

Typography: locally available Avenir Next with system sans-serif fallbacks. 32px page title, 20px section headings, 14px controls, 13px supporting text. No external font or image calls.

Layout: stable forest-green left navigation, quiet white toolbar, spacious left-aligned work area. The dashboard places actionable work above summaries. Consolidate repeated status menus into module-level tabs. On mobile, the navigation becomes a drawer and tables retain all columns in a scrollable container.

```
Navigation | Search, workspace context, account
           | Greeting / page title          Create
           | Review / Draft / Returned / In review
           | Priority work list        | Quick create
           | Document activity         | Module summary
```

Brief review: the first idea was a generic metrics dashboard. Replaced analytics charts and invented bank news with actual document tasks and shortcuts drawn from the screenshots. Preserve module vocabulary. The main visual distinction is the green navigation paired with a concise task list, rather than oversized empty metric cards. Forms retain the fields observed in the screenshots.

Accessibility: semantic buttons and navigation, visible focus, native dialog focus trapping, labelled inputs, error summaries, reduced motion, responsive layout and non-colour status labels.
