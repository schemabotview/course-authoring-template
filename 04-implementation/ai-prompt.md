# Prompt: Author a course, section by section

## Invocation

Use in ChatGPT or Claude. Supply a course name/ID (for example `foundations`) or a section name/ID (for example `reading-a-command`). If no target is supplied, choose the first unfinished course in approved plan order and state that choice. Do not ask the user to repeat course context.

With filesystem access, inspect and edit the actual repository. Without it, request the relevant source files and return clearly labeled replacement file contents; do not claim to save, execute, or commit anything.

## Inputs

- ../01-requirements/requirements.md and subsequent explicit user decisions.
- ../02-planning/course-plan.md, including central question, story, course spines, and section references.
- ../03-design/design.md.
- implementation.md and authoring-progress.md in this folder.
- Actual package.json, lockfile, section/scene registries, selected installed-library public types, and target source files.
- Optional `examples/sample-app`: composition/integration reference only; its fictional subject, outputs, and verification records are not the new course’s facts.

Explicit user instructions override older documents. Keep the approved courses → sections hierarchy; do not introduce topics, lessons, exercises, assessments, or evidence fields into the curriculum. Validation records are production metadata, not learner curriculum levels.

## Workflow

1. Inspect the requested course's purpose, prerequisites, driving question, destination, sequence, and all section descriptions. Check current source and progress records; preserve user edits and reviewed work. Resolve discrepancies before overwriting anything.
2. For a course request, author its sections in order. For a section request, author only that section and necessary registry/metadata updates. Resume partial work rather than regenerating completed material. Do not require approval after every section unless requested or a material decision depends on it.
3. Build a compact section explanation within approved scope. Connect it to the recurring story and prior knowledge. Maintain shared example identities; record selected users, paths, hosts, services, and datasets in the progress document's continuity notes.
4. Verify technical claims against relevant primary documentation, using plan links as starting points. Choose specific chapters/pages and record source URLs, supported claims, versions, and actual checking dates. Mark inaccessible or unchecked references honestly. Do not invent documentation or use model agreement as proof.
5. Choose the appropriate canonical scene pattern. Replace placeholder scene data using only installed public engine capabilities. Use meaningful grouped containers, code cards for short command/results, and tables for comparisons. Inspect actual installed icon names; unsupported strings can silently fall back. For edge-based container layout set `flow: 'LR'` when relationships belong side by side; `cols` alone does not set edge direction. If sections share a system, reuse master-map labels and semantic colors, expanding only relevant detail in each view. Keep a full overview in a separate reference registry rather than adding a curriculum level. Let the engine compute positions. Use descriptive course/section IDs and filenames, preserving them once adopted. Preserve stable IDs and valid scene/focus references; do not edit shared libraries or introduce arbitrary CSS workarounds.
6. Write concise slide Markdown and natural narration that explains the same idea without simply reading the slide. The scene shows; the slide anchors; narration explains. Keep one scene, slide, and narration per section unless the runtime contract is explicitly changed. Do not describe unsupported progressive reveals or live terminal execution.
7. Store source references, environment assumptions, authoring status, and known limitations in a structured comment in the section source. Decide learner-facing links with the user: link-free slides and concise source links are both valid; keep full sources in metadata either way. Keep substantive reference details in source; do not claim the shell has a dedicated references UI.
8. Run available type/structure checks. Verify commands only in an authorized isolated environment; record environment and actual results. Label sample output illustrative unless captured. If the environment is absent, record pending checks and continue independent drafting without claiming technical verification.
9. Preview the changed section at relevant desktop/mobile sizes and capture layout when available. Inspect scene and slide panes separately: readable code/labels, meaningful space use, header/footer clearance, diagram semantics, navigation, and slide/narration agreement. Check portrait with the drawer closed and open. Edit overfull slides rather than shrinking text; do not add filler simply to occupy space. Dense scenes are an authoring choice; whole-scene fitting can make mobile detail too small. Check long concept/course names for toggle overlap. Use native ui-shell course-title headers when available and record any dependency/release constraints. If preview is unavailable, mark visual review pending. A build alone is not visual approval.
10. Update authoring-progress.md with changed section IDs, status, sources, checks actually run, findings, and remaining work. Commit related edits when authorized; push only when authorized by the task/session. Never publish or generate audio/video as an implicit side effect.
11. After all sections in the target course are authored, review the complete course for coverage, repetition, terminology, narrative continuity, and its answer to the driving question. Mark pending independent review separately from author checks. Continue within the requested course scope; do not automatically author the next course.

## Output and completion rules

Update the actual section and scene files, supporting registries only where necessary, and progress metadata. implementation.md documents the pipeline; do not replace it with generated course content. Report sections authored, checks performed, unresolved issues, and next unfinished section concisely.

Suggested progress states: Scaffold, Drafted, Author-checked, Reviewed. Record runtime verification and visual review independently, with actual evidence or Pending status. Reviewed means a real recorded review occurred; it does not imply publication approval. Never mark a course release-ready while required checks remain pending.

Do not add mandatory formal assessments or exercises. Do not silently remove older course-wide requirements; flag remaining document-alignment decisions. Ask only when missing information blocks dependent work or changes approved scope, and continue useful independent work.

## Testing and production handoff

Follow `../05-test/testing.md`: check authored content during implementation, then record actual manual user review. Audio manifest generation, a selected Colab audio run, and course recording belong to implementation production, after content review and when authorized. Website publication and YouTube upload belong to deployment; do not assume either destination is already enabled. Learner feedback is manually collected as described in `../07-feedback/feedback.md`.
