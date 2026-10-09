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
- Give each course a stable descriptive ID (`foundations`, `scripting`, etc.), title, short purpose, and prerequisites.
- Give each section a stable descriptive ID (`system-roles`, `reading-a-command`, etc.), descriptive title, and a short paragraph explaining what it covers. Section IDs must be unique across the learning path.
- Arrange courses and sections in prerequisite order. Introduce fundamentals before advanced applications, and revisit earlier skills naturally in later sections.
- Keep sections coherent and manageable. Include practical demonstration coverage in descriptions where useful, without creating additional content levels.

Do not create topics, subtopics, modules, lessons, video lists, exercises, independent practice, assessments, grading rubrics, expected-evidence fields, capstones as a separate level, production backlogs, or detailed traceability matrices in this course plan. Do not prescribe video counts or durations; video packaging belongs to design.

## Document format

1. Title and metadata: topic, version, Draft status, date if known, input revisions, and relevant user-approved changes.
2. A brief learning-path overview and summary table of course IDs, titles, and section counts.
3. Courses in order. Under each course, include purpose, prerequisites, driving question, destination, spine connection, sequence rationale, and a table with section ID, title, coverage description, and references. Do not nest further lists beneath sections.
4. Brief assumptions, deferred decisions, and review status. Keep these administrative notes outside the curriculum hierarchy.

Preserve approved scope and avoid promising expertise solely from course completion. Flag curriculum changes against older requirements as document-alignment notes; do not silently claim older requirements have been revised. Mark time-sensitive technical details as unverified unless checked against authoritative documentation. Do not fabricate approvals or execution evidence.

Return a complete Markdown document without enclosing it in a code fence. If authorized filesystem access is available, save it to the target path; otherwise return its contents for saving. Keep this prompt separate from generated output.

## Coherence and reference requirements

Keep the curriculum at courses → sections only. Add these fields within that structure:

- At learning-path level: one central question, an evolving example or connecting story, and an explicit progression explaining how courses build toward the overall purpose.
- At course level: a driving question, connection to the overall spine, a clear destination, and a short sequence rationale showing why sections appear in this order.
- At section level: coverage that explains its contribution to the shared story and why it belongs at this point, plus relevant primary references. Preserve stable IDs when revising an existing plan.
- Choose a story appropriate to the subject; do not force every subject into a system-administration scenario. The story supports demonstrations and explanations without introducing mandatory exercises or assessments.
- Ground curriculum rationale in identifiable educational guidance and compare scope against an established syllabus when available. State important differences and do not imply endorsement, certification alignment, or validation of this exact sequence without evidence.
- Prefer official project manuals, standards, and selected-platform documentation for technical references. Link to specific relevant sections or manual pages when possible; label broad documentation indexes as starting points requiring more precise links during authoring.
- Distinguish curriculum rationale, technical reference material, and execution validation. References do not prove examples have run successfully or that learners have achieved proficiency.
- Record source titles, URLs, supported scope, and actual verification status/date. Never label an inaccessible or unchecked reference as verified. Resolve version-sensitive references against the selected implementation environment later.

In the output, add reference links to section tables and a concise source register outside the curriculum hierarchy. Do not create topics, lessons, or other additional curriculum levels. Clearly distinguish the author's proposed narrative from source-supported facts.
