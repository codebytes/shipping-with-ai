- All slides must be written in Markdown format and use the [Marp](https://marp.app/) framework.
- Each slide deck must include the following frontmatter:
  ```yaml
  ---
  marp: true
  theme: custom-default
  paginate: true
  math: mathjax
  ---
  ```
- Use HTML comments (`<!-- -->`) for speaker notes.
- Use local directives for slide-specific settings:
  - `<!-- _class: lead -->` for title slides
  - `<!-- _class: invert -->` for dark slides
  - `<!-- _class: columns -->` for two-column layout
  - `<!-- _class: small -->` for dense content
  - `<!-- _paginate: skip -->` to hide page number
- `custom-default` is the Change Order theme: an engineering drawing sheet. Build its components
  from the HTML used in `slides/Slides.md` (title blocks, revision clouds, delta tags, stamps,
  schedules, checklists), and load `slides/assets/change-order.js` once on the first slide.
  Exports need `--html`.
  `DESIGN.md` records its tokens, type floor, and named rules; follow it for new slides.
- Keep motion finite and in the theme: effects settle within five seconds, respect
  `prefers-reduced-motion`, and every slide stays complete in the PDF and without JavaScript.
- Label simulated data as illustrative; never present invented metrics as real.
- Include the Mermaid script tag when using diagrams:
  ```html
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true });
  </script>
  ```
- Store slide decks in the `slides/` directory.
- Store custom themes in `slides/themes/`.
- Store images in `slides/img/`.
- Use CSS variables for theme customization (see `slides/themes/custom-default.css`).
- Ensure compatibility with Marp CLI v4 for PDF and presentation generation.
- Before presenting or publishing, review decks for content overflow with the
  `marp-slide-review` skill (`.github/skills/marp-slide-review/`).
- For editable architecture/flowchart figures, create `.drawio.svg` files with the
  `drawio-diagrams` skill (`.github/skills/drawio-diagrams/`) and embed them like
  images; prefer Mermaid for quick inline diagrams.
