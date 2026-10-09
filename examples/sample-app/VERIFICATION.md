# Sample verification — 2026-10-09

These are actual checks of this example, not certification of a new subject course.

- Installed cached dependencies with `npm install --offline --ignore-scripts`; local shell 0.10.0,
  flow 1.2.0, React 19.3.0, Vite 6.4.4, TypeScript 5.7.3, Node 25.1.0 on macOS.
- `npm run build` passed TypeScript, structure checks (one course, three sections, one reference
  scene), and production build. Vite's large-bundle warning remains (~1.09 MB minified).
- `PREVIEW_URL=http://127.0.0.1:5183/sample-app/ REVIEW_OUT=/tmp/template-sample-review npm run check:preview`
  passed six section/viewport combinations at 1440×900 and 390×844. Checked expected nodes,
  zero slide links (this sample's choice), slide/header clearance, horizontal overflow, native
  course-title header, Next, Shift+Left, direct reference view, Back, and no browser errors.
- Visually inspected system-map and command desktop captures and the table mobile scene capture.
  Whole-scene fitting makes the mobile table detail small; it is not a mobile-legibility or
  accessibility approval. The slide supplies the reading companion. Complete local captures
  were generated under `/tmp/template-sample-review`; compact results and two representative
  screenshots are retained in `checks/`.
- Shared shell's formatter checks passed title/default, legacy ID, custom prefix, repeated
  subject, and whitespace cases. Shared build passed. No new ui-flow capability was required.
- No fictional queue command was executed; it has no implementation. No subject runtime or
  manual learner review is claimed. No audio, recording, or publication occurred.

The UI sample is author-checked. Independent human review and comprehensive accessibility review
remain pending. A new subject must start its own check record and technical-source verification.

## Shared-header rollback — 2026-10-09

The original 0.10.0 checks above are historical. User requested reverting that shared-shell
change; source is back to 0.9.0, and the local sample dependency/lockfile follows it. The sample
still displays `WORKSHOP · FOUNDATIONS` because its course ID is descriptive (`foundations`).
It does not require native full-title headers or the removed courseLabel prop. Rebuilt sample
and reran browser checks against the reverted build; separate rollback results are retained in
`checks/preview-after-shell-revert.json`. Authoring examples and guidance remain in place.
