# Implementation record template

- Status: Template — populate for each subject project; no app implementation is claimed here

## Record the actual setup

Document the adopted design, source-of-truth contract, source repository structure, installed package versions, lockfile, rendering configuration, deployment base path, and any difference between cloned library source and published packages.

## Record operating instructions

Document working install, preview, validation, build, and recording commands. Separate commands available from commands actually exercised. Keep generation, capture, and publication as distinct operations.

## Authoring process

Use ai-prompt.md to author one course section by section. Keep courses → sections as the only curriculum levels. Update authoring-progress.md alongside content; retain source references and technical/visual review status. Preserve the course and overall concept spines.

## Verification and limitations

Record checks actually performed, their environments/results, pending reviews, and known limits. Do not copy Linux's scaffold results into a new subject as if they ran there. A successful build does not prove technical correctness, accessibility, or publication readiness.

## Audio and video production belong to implementation

After section narration is authored and reviewed, generate the audio manifest with `npm run gen:audio`. Run the chosen Colab audio-generation notebook against that manifest and return the generated WAV files to `public/audio/<course-id>/<section-id>.wav`. Check that every clip matches the reviewed narration and intended section. Handle model access credentials in the runtime, never in committed notebook output or content.

The supplied SQL example includes a Colab notebook, but it was not copied into linux-authoring. Selecting/adapting the Linux Colab notebook and its input/output transfer process remains pending. Do not claim that a Colab run or audio generation has occurred.

Once audio and visuals are reviewed, use the shared `npm run record -- <course-id>` command to produce course video assets. Recording requires the toolchain's actual browser/media prerequisites; inspect its supported arguments before adding flags. Review the resulting audio/video and captions when produced. No narration audio or video has been generated yet.

Manifest generation, Colab audio generation, and video recording are implementation production steps. Uploading the finished video to YouTube and publishing website assets are deployment steps. These production actions run only when requested or authorized; authoring a section does not automatically trigger them.
