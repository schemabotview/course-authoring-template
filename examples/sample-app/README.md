# Runnable composition sample

Three sections demonstrate descriptive course/section filenames, concept · descriptive course-ID headers,
a shared map and focused bands, an LR container, meaningful supported icons, short code and
table cards, slides, narration, and source/verification metadata. `queue inspect` is fictional;
it must not be presented as a command to execute. This sample is not a validated subject course.

## Local setup

Clone `ui-shell` beside `course-authoring-template` in one workspace. Build ui-shell first
(`npm install`, then `npm run build` in that repository). This sample's shell dependency is
`file:../../../ui-shell`, consuming the local shell build (currently 0.9.0 after the header-change revert). In this
folder run `npm install`, `npm run check`, `npm run build`, and `npm run dev`.
Open `http://localhost:5183/sample-app/#/foundations-system-roles`.
Run `PREVIEW_URL=http://localhost:5183/sample-app/ npm run check:preview` for desktop/mobile checks.
Chrome's default macOS path can be replaced with `CHROME_PATH`.

When copying these app files into a subject repository, choose the subject, brand tokens,
base path, curriculum, sources, and library versions. Replace the local shell dependency with
an available pinned registry version, or adjust its local path to the new checkout.
The shell uses `WORKSHOP · FOUNDATIONS` from the concept and descriptive course ID;
full course titles are not a supported native header option in 0.9.0. Generate that subject's own lockfile. Do not copy node_modules,
dist, screenshots, verification claims, or fictional narration as real course material.

## Choices, not universal requirements

This sample uses moderate diagram density and link-free slides. A new course should decide
those deliberately. Keep complete source references in metadata either way. A master map is
useful when sections share a system vocabulary; it is not necessary for every course.
Do not cram content into a pane just to fill it. Review header/footer clearance and readable
labels; whole-scene fitting can make dense phone diagrams too small. The installed engine
exposes no zoom through SceneView. Human review, accessibility review, and subject runtime
verification are distinct from these sample UI checks. No audio, recording, or publication
runs are included in sample scripts.
