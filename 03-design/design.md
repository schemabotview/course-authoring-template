# Adopted course UI and content design

- Version: 1.0
- Date: 2026-10-09
- Status: Adopted architecture; individual section compositions await authoring and visual review
- Decision: reuse GraphL's existing UI rather than generate a new design

## Architecture and references

Use [ui-shell](https://github.com/schemabotview/ui-shell) for the application shell and [ui-flow](https://github.com/schemabotview/ui-flow) for declarative scene rendering. The [SQL app](https://github.com/schemabotview/sql) supplies the application-structure reference, not subject content to copy.

The learning hierarchy remains concept → courses → sections. A section's scene, slide, and narration are representations of that section, not additional topics or curriculum levels. Preserve course and section IDs from the course plan.

| Layer | Responsibility |
|---|---|
| ui-shell | Catalog, hash routing, section composition, slide rendering, navigation, narration controls, theme controls, and capture tooling |
| ui-flow | Scene model, deterministic layout, nodes, edges, nesting, code cards, tables, and visual rendering |
| Subject app | Course/section data, scene registry, subject identity, brand tokens, references, and narration assets |

Consume public package exports. Do not copy shared renderers into subject repositories or introduce per-section CSS overrides to fix content density. Preserve engine → shell → subject-theme stylesheet order and pass the consuming app's base URL to the shell.

## Section teaching contract

| Representation | Purpose | Authoring rule |
|---|---|---|
| Scene | Make a mechanism, relationship, command, or state understandable | Choose the representation that matches the idea; avoid decorative graphs |
| Slide | State the core explanation and essential qualifications | Keep concise enough to remain readable without clipping |
| Narration | Explain the scene and connect it to the course story | Use natural speech; do not merely read every slide bullet |

The shared Section type contains id, title, scene, optional focus, slide, and narration. Course contains id, title, and sections. Source references, review status, driving questions, and environment assumptions require authoring metadata; the current shell has no dedicated fields for them. Retain them in the section source and progress records. Source links on slides are optional per-course choices; complete references remain inspectable in source even when learner-facing links are omitted. A richer learner-facing reference view is deferred, not claimed implemented.

## Canonical scene patterns

| Pattern | Use |
|---|---|
| System map | Components, boundaries, and relationships |
| Hierarchy | Filesystem or process structure |
| Command and result | A short command, relevant output, and interpretation |
| Before and after | A focused change in state or access |
| Diagnostic path | Symptom, observations, explanation, correction, and verification |

Use only capabilities available in the installed engine. Node positions belong to the engine. Keep labels, edges, and nesting meaningful; validate diagram semantics as well as geometry. Commands displayed in scenes are explanations, not an executable terminal.

## Spine and continuity

Read the learning-path central question, evolving story, and each course's driving question before authoring. Keep recurring example names and system entities consistent across sections. Explain why the current section follows the previous one and what it contributes to the destination. Carry that connection through the scene, slide, and narration without adding introductory or recap sections outside the approved plan.

Maintain the approved subject’s story and a compact continuity record of recurring identities, systems, paths, services, and sample data as selected. The sample app’s fictional queue illustrates consistency; it is not a default story to impose on other subjects.

## Website and video composition

The existing section view places a scene beside a slide in landscape and exposes the slide through a drawer in portrait. Navigation and audio controls belong to interactive mode; capture mode suppresses interactive chrome. Verify the actual installed version rather than relying on comments alone.

One section currently supplies one scene, one slide, and one narration clip. The recorder can loop a short scene capture over narration; this is appropriate for stable diagrams, not evidence of timed terminal execution or synchronized progressive reveals. Timed visual changes would require explicit shared-library work and are outside the scaffold.

A section does not automatically prescribe a separate YouTube video. Existing course recording can assemble section clips into a course video; final video packaging belongs to deployment decisions.

## Quality criteria

- Scene, slide, and narration explain the same idea and respect the approved scope.
- Text and code remain legible at desktop, mobile, and capture sizes; no cropped labels or overflowing slides.
- Relationships, outputs, and transitions are technically correct and supported by appropriate sources.
- Interactive controls remain usable by keyboard; assess focus, contrast, diagram alternatives, transcripts, and reduced motion during testing.
- Dense content is edited for clarity rather than made readable only by shrinking it.
- References distinguish source support from successful runtime execution; unverified versions and examples are labeled.

These are review criteria, not claims that full accessibility or visual QA has passed.

## Decisions still open

Final section compositions, subject environment, finished palette, reference presentation, audio generation, captions, video packaging, and any progressive scene behavior. The scaffolding does not settle these decisions.

## Reusable composition conventions

Use descriptive course/section IDs and filenames, following the SQL app (`foundations/system-roles.ts`).
Keep the course order in its registry and section order in the course index. ui-shell owns the route
contract `<course-id>-<section-id>`; IDs are routing/audio identity, not display titles. The current ui-shell header uses concept · course ID, so descriptive IDs produce useful labels.
Full course-title headers are not a current native capability: the user requested reverting that
shared change. Do not claim `courseLabel` is supported. Any subject-specific header adaptation
must remain local and be verified against its pinned dependency.

Canonical patterns can use nested bands, short lists, code cards, or tables rather than generic
prose-node chains. Use a master map only when a shared vocabulary benefits multiple sections.
Keep its complete overview separate from curricular scenes. Focus each section on the layers it
teaches; do not repeat every subsystem in the introduction. The sample demonstrates an LR
relationship container: edge layout uses `flow`, whereas edge-free card grids use `cols`.

Choose installed icon keys deliberately: memory, cpu, folder, terminal, network, and so on.
Type `string` does not establish that a requested icon exists. Check rendered glyphs and avoid
inherited storage/database icons where the node represents a directory.

Measure both panes at representative desktop/mobile sizes. Aim for useful space use, rather than
maximum density. Preserve header/footer clearance, short code lines, and readable slides. Whole-scene
fitting without exposed zoom makes dense phone diagrams small; record that limit honestly. Avoid
per-section CSS workarounds. Shared header/layout improvements belong in ui-shell; rendering and
new diagram capabilities belong in ui-flow. Subject content belongs in its own repository.

`examples/sample-app` is a small runnable reference, not a complete course or release approval.
Its density and link-free slides are configurable choices. Do not copy its fictional commands,
source claims, or actual-check record into a new subject as if validated there.
