# Testing workflow

- Version: 1.0
- Date: 2026-10-09
- Model: checks during authoring, followed by manual user review

## During authoring

Codex or Claude checks each section as it is authored: technical claims and references, scene/slide/narration consistency, course-spine continuity, types, registry links, build behavior, and visual rendering when a preview is available. Execute commands only in an authorized isolated environment. Record what actually ran and what remains unverified in `04-implementation/authoring-progress.md`.

The sample provides `npm run check`, `npm run build`, and `npm run check:preview`. Adapt its checks to the subject’s plan and runtime; do not assume a release guard exists or equate structural validation with review. AI review and successful compilation alone do not prove technical correctness.

## Manual user review

The user reviews the authored website and generated videos for clarity, accurate explanations, readable scenes/code/slides, correct section order, navigation, audio quality, caption accuracy when captions exist, and continuity with the learning-path and course spines. Review desktop and mobile presentation as relevant.

Record review findings by course/section ID. Codex or Claude corrects reported issues and checks affected content. The user can then review the corrections. Do not mark a review as complete without the user's actual review.

## Records and handoff

Keep authoring checks, user review, and remaining issues distinguishable. Record release-blocking findings before publishing. This workflow does not add learner exercises, grading, or formal assessments to the course plan.

There is no testing AI prompt in this folder. Testing instructions are part of the implementation authoring prompt; this document explains the human review process.
