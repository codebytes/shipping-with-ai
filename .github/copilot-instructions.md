<!-- Keep in sync with AGENTS.md at the repository root. -->

# Agent instructions: Shipping with AI Without Shipping Regret

This repository holds the slides for Chris Ayers' talk **Shipping with AI Without Shipping Regret**. The deck is published to <https://chris-ayers.com/shipping-with-ai/>.

## Repository layout

- `slides/`: Marp deck, `slides/assets/deck.js` (loaded once on the first slide), images in `slides/img/`, themes in `slides/themes/`.
- `DESIGN.md`: theme tokens, type floor, and named design rules. `PRODUCT.md`: the talk's audience and goals.
- `.github/skills/` and `.github/agents/`: repository-local skills and agents for this deck.

## Slides

- Write the deck in Markdown with [Marp](https://marp.app/). `slides/Slides.md` is the source; `build/` is generated output and is never edited or committed.
- Keep the frontmatter at the top of the deck:

  ```yaml
  ---
  marp: true
  theme: custom-default
  paginate: true
  math: mathjax
  ---
  ```

- Store themes in `slides/themes/` and images and diagram sources in `slides/img/`. Prefer theme classes and CSS variables over inline styles.
- Write speaker notes as HTML comments (`<!-- -->`).
- Render locally with the Marp CLI version the Pages workflow uses (latest):

  ```bash
  npx @marp-team/marp-cli --theme-set slides/themes --html -o build/index.html -- slides/Slides.md
  npx @marp-team/marp-cli --theme-set slides/themes --html --pdf --allow-local-files -o build/Slides.pdf -- slides/Slides.md
  ```

- `.github/workflows/marp-pages.yml` builds the HTML deck and `Slides.pdf` and publishes both to GitHub Pages. If you add slide assets outside `slides/img/` and `slides/themes/`, add them to the workflow's copy step.

## Shared skills

- This repository keeps its own skills in `.github/skills/`: use `marp-slide-review` to check for overflow before presenting or publishing, and `drawio-diagrams` for editable `.drawio.svg` figures.
- For anything those don't cover, use the shared skills from [codebytes/skills](https://github.com/codebytes/skills) (`marp-authoring`, `marp-visuals`).

## Talk-specific rules

- Use local directives for slide-specific settings: `<!-- _class: lead -->` (title), `<!-- _class: invert -->` (dark), `<!-- _class: columns -->` (two columns), `<!-- _class: small -->` (dense content), `<!-- _paginate: skip -->` (hide page number).
- `custom-default` is a light release-tooling theme: white panels, status chips, and status icons, with checks, boards, and deployment rings as the illustrations. Build its components from the HTML already used in `slides/Slides.md` (check runs, chips, board lanes, the release board, checklists). Exports need `--html`. Follow `DESIGN.md` for new slides.
- Keep motion finite and in the theme: effects settle within five seconds, respect `prefers-reduced-motion`, and every slide stays complete in the PDF and without JavaScript.
- Label simulated data as illustrative; never present invented metrics as real.
- Include the Mermaid script tag when using diagrams:

  ```html
  <script type="module">
    import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
    mermaid.initialize({ startOnLoad: true });
  </script>
  ```

- Prefer Mermaid for quick inline diagrams and `.drawio.svg` files (via `drawio-diagrams`) for editable architecture figures.

## Readme

- Keep the readme sections in this order: Slides, Recordings, Resources, Contact.
- When a new recording of the talk is published, add it at the top of `## Recordings` as `- [Event Year](https://www.youtube.com/watch?v=VIDEO_ID)`. When the video's title differs from the talk's, add an em dash and the recorded title after the event. Keep the list newest first.
- The talk also appears on <https://chris-ayers.com/speaking/> (source: `content/speaking.md` in [codebytes/codebytes.github.io](https://github.com/codebytes/codebytes.github.io)); new events and recordings belong there too.

## General

- Keep changes scoped to the request; don't reformat unrelated slides or code.
- Never commit secrets, keys, or connection strings. Demo placeholders must be obviously fake.
