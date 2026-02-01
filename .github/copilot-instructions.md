# Copilot instructions — Accessible UI Internship

This repository is a tiny static website of accessible UI examples. These instructions give an AI coding agent immediate, actionable context so it can make safe, consistent edits.

Summary
- Project type: static HTML/CSS/JS site (no build system).
- Entry point: [partnerships.html](partnerships.html) (root file present; there is no `index.html`).
- Static assets: [css/](css/) and [js/](js/) directories.

What to expect
- Very small JavaScript surface: interactive code lives in [js/main.js](js/main.js) (currently minimal/empty) and is included with `defer`.
- Styles live in [css/styles.css](css/styles.css) (currently minimal/empty); focus and visible focus styles live here.
- The project emphasizes semantic HTML, keyboard navigation, and screen-reader friendliness.

Developer workflows (how to run/test locally)
- No build step: open [partnerships.html](partnerships.html) in a browser for quick checks.
- To serve files locally (recommended for realistic testing):

```bash
# Node (recommended):
npx http-server -c-1 . -p 8080

# Python 3:
python -m http.server 8080
```

- Use browser DevTools, Lighthouse, and keyboard-only testing for accessibility verification.

Repository-specific conventions & patterns
- Keep interactive behavior in [js/main.js](js/main.js); scripts should be small, idempotent, and avoid global state.
- Keep visual and focus rules in [css/styles.css](css/styles.css); when changing focus management, update styles here to preserve visible focus.
- Prefer semantic elements (headings, `nav`, `main`, `footer`) in [partnerships.html](partnerships.html). Add ARIA only to supplement missing semantics and document why.

Integration & external deps
- There is no `package.json` or build system. If you add dev tooling (linters/formatters), add a `package.json`, update [README.md](README.md), and document install/run commands.

Editing guidance for AI agents
- Make small, focused commits: aim for one user-visible change per PR.
- When changing accessibility or focus behavior, include a short regression checklist in the PR: steps to reproduce, keyboard navigation steps, and expected screen-reader text.
- Preserve existing semantic markup; prefer adding minimal, well-documented ARIA attributes when necessary.

Where to look for context
- Entry/structure: [partnerships.html](partnerships.html)
- JS behavior: [js/main.js](js/main.js)
- Styles/focus rules: [css/styles.css](css/styles.css)
- Project notes: [README.md](README.md)

Merge guidance
- If updating this file, preserve the repository-specific examples and concrete commands above. Avoid adding high-level aspirational rules — document only discoverable, testable patterns.

Quick examples
- How scripts are included in pages:

```html
<link rel="stylesheet" href="css/styles.css">
<script src="js/main.js" defer></script>
```

- Local dev server command (Node): `npx http-server -c-1 . -p 8080`

Questions for maintainers
- If you want CI, linters, or formatting rules enforced, add them to [README.md](README.md) or reply in the PR so agents can update docs and tooling accordingly.

---
If you'd like, I can also: update `README.md` with these local-run commands, scaffold a minimal `package.json` for dev tools, or run a small accessibility smoke-check. Which should I do next?
