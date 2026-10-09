# Course authoring template

Use this workflow for Linux, Python, Java, React, SQL, Spark, dbt, Terraform, cloud platforms, ML, AI, and other technology courses.

## Start a course

1. Copy this entire template into a separate course directory, such as `linux-fundamentals`. Keep the original template reusable.
2. Open `01-requirements/ai-prompt.md`, supply only the course topic, and run it in ChatGPT or Claude. It will propose default audience, prerequisites, outcomes, and scope for your confirmation before generating requirements.
3. Save the response as the stage output listed below. Review it before using it as input to the next stage.
4. Continue in order, attaching the earlier documents requested by each prompt. A chat cannot read a local path unless filesystem access is actually available.
5. Use the other model to review major drafts against their completion checklists. Resolve findings using sources and technical checks; model agreement alone does not establish correctness.
6. Approve the course brief and review representative sections before scaling production. Record release approval before publishing.
7. Use feedback to propose a revised requirements document and repeat affected stages.

| Folder | Prompt | Generated document |
|---|---|---|
| 01-requirements | ai-prompt.md | requirements.md |
| 02-planning | ai-prompt.md | course-plan.md |
| 03-design | Adopted design; no AI prompt | design.md |
| 04-implementation | ai-prompt.md authors courses section by section | implementation.md + source files + authoring-progress.md |
| 05-test | Manual user review + checks during authoring | testing.md |
| 06-deployment | Publishing procedure; no AI prompt | deployment.md |
| 07-feedback | Manual user feedback; no AI prompt | feedback.md |

## Working conventions

- Prompts are reusable instructions; generated documents are course-specific artifacts. Design and implementation guidance are reusable; implementation records and progress must be populated with actual subject-project results.
- Use descriptive course/section IDs and filenames. Preserve adopted identifiers across revisions; record deliberate migrations. Requirement/outcome IDs can remain traceability labels.
- Record input revisions, assumptions, and Draft/Approved status. An AI-generated checklist is not evidence that its checks ran.
- Author courses section by section after reviewing the curriculum and adopted design; `implementation.md` describes their production process.
- Website content and video scripts should derive from the same approved section source.
- Keep credentials and personal learner information out of prompts and the public repository.
- The deployment document records website and YouTube publishing. Audio generation and recording belong to implementation; actual publication is separate.

## Context is entered once

Stage 01 establishes the confirmed course brief. Stages 02–07 inherit it from the requirements document and approved stage outputs. There are no repeated course-context forms. Each stage proposes its own relevant decisions, and material changes to the approved brief require confirmation.

## Design and implementation documentation

Stage 03 records the adopted GraphL design in `03-design/design.md`; it has no generation prompt. Stage 04 documents implementation separately from authoring. Use `04-implementation/ai-prompt.md` for a target course or section, and record progress in `04-implementation/authoring-progress.md`.

Testing, deployment, and feedback use workflow documents rather than AI prompts. See `05-test/testing.md`, `06-deployment/deployment.md`, and `07-feedback/feedback.md`.

## Runnable app example

See [examples/sample-app](examples/sample-app/README.md) for a three-section React/TypeScript/Vite
app using ui-shell and ui-flow. It demonstrates a grouped shared map, focused command/result
and table scenes, descriptive names, supported icons, slides, narration, metadata, and structural/
preview checks. Copy only the app source/configuration when starting a subject repository; then
choose that subject’s dependencies, base path, curriculum, story, sources, and verification process.
Do not copy generated outputs or pretend sample UI checks validated subject content.

The sample consumes the local ui-shell checkout using a documented relative file dependency.
The shared-header change was reverted at the user’s request; current shell 0.9.0 displays
concept · descriptive course ID. Use a pinned registry version when available.
The sample README explains both workspace layout and copying into a subject repository.

Reusable conventions live in these prompts/design documents. Shared shell behavior (headers,
wrapping, navigation, slide layout) belongs in ui-shell; scene rendering/icons belong in ui-flow.
A subject master map, narration, citations, and actual verification history stay with that subject.
Dense scenes and link-free slides are choices, not universal template requirements.
