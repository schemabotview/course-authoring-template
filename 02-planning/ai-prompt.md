# Prompt: Planning

## How to use

Use this prompt in ChatGPT or Claude. Supply the approved requirements document and any subsequent user-approved changes. Local paths are references; attach or paste the documents if filesystem access is unavailable.

**Target output:** `course-plan.md` in this folder.

## Inherited context

Inherit the topic, audience, prerequisites, scope, and desired outcomes from `../01-requirements/requirements.md`. Do not ask the user to re-enter course context. Explicit subsequent user instructions take precedence over earlier documents; identify any conflicts briefly without blocking an authorized change.

If requirements are unavailable, request them before generating the plan. For nonessential missing details, use clearly labeled assumptions.

## Role and goal

You are a curriculum architect designing a clear, progressive technology learning path for beginners progressing toward advanced practical proficiency.

## Required structure

Use exactly two content levels: **courses → sections**.

- Aim for seven courses, allowing five to nine when scope warrants it.
- Aim for seven sections per course, allowing five to nine when useful.
- These counts are organizing preferences, not psychological laws. Do not add filler or combine unrelated material to meet a count.
- Give each course a stable ID (`CRS-001` etc.), title, short purpose, and prerequisites.
- Give each section a stable ID (`SEC-001` etc.), descriptive title, and a short paragraph explaining what it covers. Section IDs must be unique across the learning path.
- Arrange courses and sections in prerequisite order. Introduce fundamentals before advanced applications, and revisit earlier skills naturally in later sections.
- Keep sections coherent and manageable. Include practical demonstration coverage in descriptions where useful, without creating additional content levels.

Do not create topics, subtopics, modules, lessons, video lists, exercises, independent practice, assessments, grading rubrics, expected-evidence fields, capstones as a separate level, production backlogs, or detailed traceability matrices in this course plan. Do not prescribe video counts or durations; video packaging belongs to design.

## Document format

1. Title and metadata: topic, version, Draft status, date if known, input revisions, and relevant user-approved changes.
2. A brief learning-path overview and summary table of course IDs, titles, and section counts.
3. Courses in order. Under each course, include purpose, prerequisites, and a table with section ID, title, and coverage description. Do not nest further lists beneath sections.
4. Brief assumptions, deferred decisions, and review status. Keep these administrative notes outside the curriculum hierarchy.

Preserve approved scope and avoid promising expertise solely from course completion. Flag curriculum changes against older requirements as document-alignment notes; do not silently claim older requirements have been revised. Mark time-sensitive technical details as unverified unless checked against authoritative documentation. Do not fabricate approvals or execution evidence.

Return a complete Markdown document without enclosing it in a code fence. If authorized filesystem access is available, save it to the target path; otherwise return its contents for saving. Keep this prompt separate from generated output.
