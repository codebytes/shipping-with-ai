---
name: Shipping with AI
description: "Shipping with AI Without Shipping Regret, illustrated with the release tooling the audience already trusts: checks, pull requests, boards and deployment rings, shown crisp and large on a light canvas."
colors:
  accent: "#0a5bc4"
  accent-solid: "#0969da"
  pass: "#116329"
  pass-solid: "#1a7f37"
  pass-tint: "#dafbe1"
  pass-line: "#aceebb"
  merge: "#1f883d"
  hold: "#7d4e00"
  hold-solid: "#9a6700"
  spin: "#bf8700"
  hold-tint: "#fff8c5"
  hold-line: "#eed888"
  back: "#a40e26"
  back-solid: "#cf222e"
  back-tint: "#ffebe9"
  back-line: "#ffcecb"
  agent: "#6639ba"
  agent-tint: "#fbefff"
  agent-line: "#e4d0ff"
  canvas: "#f4f6f9"
  canvas-wash: "#e6eefa"
  surface: "#ffffff"
  subtle: "#f6f8fa"
  well: "#e9edf2"
  code-fill: "#eef1f4"
  avatar-tint: "#dbe8f8"
  line: "#d0d7de"
  line-soft: "#e3e8ee"
  line-strong: "#8c959f"
  ink: "#1f2328"
  ink-2: "#57606a"
typography:
  display:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "74px"
    fontWeight: 690
    lineHeight: 1.03
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 104"
  headline:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "48px"
    fontWeight: 690
    lineHeight: 1.1
    letterSpacing: "-0.027em"
    fontVariation: "'wdth' 104"
  takeaway:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "30px"
    fontWeight: 650
    lineHeight: 1.25
    letterSpacing: "-0.012em"
  body:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "26px"
    fontWeight: 430
    lineHeight: 1.45
    letterSpacing: "-0.004em"
  body-side:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "24px"
    fontWeight: 430
    lineHeight: 1.4
  title:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "22px"
    fontWeight: 650
    lineHeight: 1.3
  row:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "22px"
    fontWeight: 430
    lineHeight: 1.3
  panel-head:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "21px"
    fontWeight: 430
    lineHeight: 1.25
  meta:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.3
  label:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0"
  caption:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "18px"
    fontWeight: 430
    lineHeight: 1.3
  id:
    fontFamily: "SW Mono, Monaspace Neon, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "18px"
    fontWeight: 400
    letterSpacing: "0"
  code:
    fontFamily: "SW Mono, Monaspace Neon, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "0.76em"
    fontWeight: 400
    letterSpacing: "0"
  chrome:
    fontFamily: "SW Sans, Mona Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0"
rounded:
  pill: "999px"
  circle: "50%"
  panel: "14px"
  card: "12px"
  control: "8px"
  box: "7px"
  code: "6px"
spacing:
  margin: "72px"
  top: "50px"
  chrome-bottom: "28px"
  takeaway-bottom: "82px"
  heading-gap: "28px"
  column-gap: "48px"
  gap: "18px"
  panel-x: "20px"
  panel-head-y: "12px"
  item: "12px"
components:
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
  panel-head:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink}"
    typography: "{typography.panel-head}"
    padding: "12px 20px"
  chip:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "0 12px"
  chip-pass:
    backgroundColor: "{colors.pass-tint}"
    textColor: "{colors.pass}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "0 12px 0 10px"
  chip-hold:
    backgroundColor: "{colors.hold-tint}"
    textColor: "{colors.hold}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "0 12px 0 10px"
  chip-agent:
    backgroundColor: "{colors.agent-tint}"
    textColor: "{colors.agent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "0 12px 0 10px"
  chip-human:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "0 12px 0 10px"
  status-icon:
    backgroundColor: "{colors.pass-solid}"
    rounded: "{rounded.circle}"
    size: "26px"
  status-icon-hold:
    backgroundColor: "{colors.hold-solid}"
    rounded: "{rounded.circle}"
    size: "26px"
  status-icon-fail:
    backgroundColor: "{colors.back-solid}"
    rounded: "{rounded.circle}"
    size: "26px"
  status-icon-person:
    backgroundColor: "{colors.avatar-tint}"
    rounded: "{rounded.circle}"
    size: "32px"
  id:
    textColor: "{colors.ink-2}"
    typography: "{typography.id}"
  code-inline:
    backgroundColor: "{colors.code-fill}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.code}"
    padding: "0.1em 0.38em"
  takeaway:
    textColor: "{colors.accent}"
    typography: "{typography.takeaway}"
  footer:
    textColor: "{colors.ink-2}"
    typography: "{typography.chrome}"
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "38px"
    padding: "0 14px"
  button-hover:
    backgroundColor: "#f3f4f6"
  button-disabled:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.line-strong}"
  button-primary:
    backgroundColor: "{colors.merge}"
    textColor: "#ffffff"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    height: "38px"
    padding: "0 14px"
  button-primary-hover:
    backgroundColor: "{colors.pass-solid}"
  segmented:
    backgroundColor: "{colors.well}"
    rounded: "10px"
    padding: "3px"
  segmented-option:
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.box}"
    height: "32px"
    padding: "0 12px"
  segmented-option-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  check-run:
    backgroundColor: "{colors.surface}"
    rounded: "18px"
    padding: "24px 28px 26px"
    width: "468px"
  lane:
    backgroundColor: "{colors.well}"
    rounded: "16px"
    padding: "10px 12px 12px"
  change-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.card}"
    padding: "12px 16px 14px"
  board-mark:
    backgroundColor: "{colors.subtle}"
    textColor: "{colors.ink-2}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "32px"
    padding: "0 10px 0 8px"
  board-mark-pass:
    backgroundColor: "{colors.pass-tint}"
    textColor: "{colors.pass}"
  board-mark-hold:
    backgroundColor: "{colors.hold-tint}"
    textColor: "{colors.hold}"
  board-mark-back:
    backgroundColor: "{colors.back-tint}"
    textColor: "{colors.back}"
  board-mark-active:
    backgroundColor: "{colors.hold-tint}"
    rounded: "{rounded.pill}"
    height: "32px"
    width: "44px"
  checklist-row:
    textColor: "{colors.ink}"
    height: "49px"
    padding: "0 20px"
  checklist-box:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.box}"
    size: "24px"
  checklist-box-checked:
    backgroundColor: "{colors.pass-solid}"
    rounded: "{rounded.box}"
    size: "24px"
---

# Design System: Shipping with AI

## Overview

**Creative North Star: "The Tooling Is the Illustration"**

There is no governing metaphor, and the North Star says so on purpose. Every picture in the deck is a piece of release tooling the audience already trusts: a check run, a pull-request queue, a project board, an instructions file, a deployment timeline, a checklist. Each is redrawn crisp and large for a 1280×720 slide. The talk argues that a change needs evidence before it ships, so the illustrations are the evidence surfaces themselves. The deck refuses costume worlds and the dark neon AI deck.

The material is a light product UI, enlarged for a room. A cool off-white canvas carries a faint blue wash from the top-right corner. White panels have hairline borders and soft, ink-tinted offset shadows. Mona Sans sets every word, and Monaspace Neon appears only where the audience reads a literal string. Color stays neutral until something has a state: four status hues with fixed meanings, each paired with a glyph, and one blue saved for the slide's takeaway, links and focus. Density is GitHub-scale (rows, chips, counts, IDs), but every size is lifted for the back of the room.

Each slide has one authored moment: the cover's checks turning green, two queues filling at different rates, three checks failing, a file written line by line, one more check on each board slide, a review loop that ends in a merge box, an error line crossing the health gate, a table filling, a checklist cascade. The finished state is the markup. Motion only replays how the slide got there, once, on the live audience slide. It uses two easings: `cubic-bezier(0.16, 1, 0.3, 1)` for arrivals and an overshooting `cubic-bezier(0.34, 1.56, 0.64, 1)` for results that pop.

**Key Characteristics:**
- Cool off-white canvas, white hairline panels, soft offset shadows; panels never nest.
- Mona Sans throughout, in a slightly widened heavy cut for headings; Monaspace Neon only for literal strings.
- Four status hues with fixed meanings, each paired with a glyph; one blue for takeaways, links and focus.
- Pills report state, circles report checks, and rounded rectangles are controls or literal tokens.
- One authored moment per slide, played once and settled by 4.95s; the static slide is already complete.
- Simulated material is labeled illustrative on the slide itself.

### Named Rules
**The Complete Without Motion Rule.** The authored markup is the finished slide; motion only replays the path to it. deck.js adds `sw-live` to a slide only in the audience window, while that slide is active, the page is visible and not printing, and no reduced-motion preference is set. Every effect sits inside `prefers-reduced-motion: no-preference`, fills `backwards` from a visible default, and settles by 4.95s (the review slide is the longest). The one infinite animation is the release board's stage spinner while a speaker-started run is going.

**The Static Twin Rule.** Anything that only makes sense live has a static twin. `.sw-static` shows until its section is `data-enhanced="true"`, and `.sw-dynamic` only after. `.live-only` text stays hidden and appears only inside a finite `transient` animation. Print turns off all animation and transitions and hides dynamic twins and board controls. The release board's authored markup is its PDF snapshot, and the script restores it whenever the slide leaves the audience view.

**The Illustrative Label Rule.** Every simulated change, count, rate or board says so on the slide in an 18px Secondary Ink line ("Fictional change, illustrative only", "Illustrative: seven drafted and two shipped is not measured data"), never only in the speaker notes.

## Colors

GitHub's light product palette at slide scale: cool grays carry structure, four status families carry meaning, and one blue carries the point.

### Primary
- **Takeaway Blue** (#0a5bc4): the slide's one-line takeaway and links (1.5px underline at 40% alpha, 4px offset). 5.9:1 on the canvas.
- **Focus Blue** (#0969da): the 2px focus outline on buttons, the scenario switch and checklist rows.

### Secondary
The release states. Each family has four steps: an **ink** for letters (at least 6.5:1 on its own tint), a **solid** for discs, bars and strokes (white glyphs on it hold at least 4.8:1), a **tint** for chip and row fills, and a **line** for chip borders.
- **Pass Green** (#116329 ink, #1a7f37 solid, #dafbe1 tint, #aceebb line): agreed, passed, approved, shipped, landed; completed rings, connectors, meters and progress.
- **Merge Green** (#1f883d): the one filled action, drawn from the merge button: the release board's Approve and the review slide's "Merge pull request". Hover darkens it to Pass Green's solid. White 18px/600 on it is 4.5:1, so its label never drops below weight 600.
- **Hold Amber** (#7d4e00 ink, #9a6700 solid, #fff8c5 tint, #eed888 line): in progress, waiting on a person, held, and suspect ("Pass*", a test edited until it passed).
- **Spinner Amber** (#bf8700): only the rotating arcs of work in progress and the progress bar while a run is underway.
- **Back Red** (#a40e26 ink, #cf222e solid, #ffebe9 tint, #ffcecb line): failed checks, errors, incidents, the health gate and rollbacks.

### Tertiary
- **Agent Violet** (#6639ba ink, #fbefff tint, #e4d0ff line): authorship, not state. The Agent chip, the bot glyph and the AI-0142 token that travels the review loop.

### Neutral
- **Cool Canvas** (#f4f6f9) with **Canvas Wash** (#e6eefa): every slide's ground, a radial ellipse (62% × 70%) of wash from the top-right corner that has faded into the canvas by 72%. deck.js paints the page itself in the canvas color, so transitions never flash black.
- **Panel White** (#ffffff): panels, cards, actor boxes, the check run, default buttons.
- **Subtle Gray** (#f6f8fa): panel head bars, neutral chips, the board bar, table header rows, disabled buttons.
- **Well Gray** (#e9edf2): recessed ground. Board lanes, counts, the scenario switch track, the board's state pill at rest.
- **Code Fill** (#eef1f4): inline code.
- **Avatar Tint** (#dbe8f8): behind the speaker's avatar and the bio portrait.
- **Hairline** (#d0d7de), **Soft Hairline** (#e3e8ee), **Strong Line** (#8c959f): panel and chip borders; row dividers and head-bar bottoms; bullets, hollow rings, arrows and the file's line numbers. Strong Line holds 3:1, so it is for strokes and gutter numbers, never reading text (disabled labels aside).
- **Ink** (#1f2328) and **Secondary Ink** (#57606a): headings and body; meta, captions, IDs, column headers and the footer. Secondary Ink holds at least 5.4:1 on the canvas, panels, head bars and wells.

The `invert` template class remaps every role to its GitHub dark-mode equivalent. This deck sets every slide light.

### Named Rules
**The Fixed Meaning Rule.** A status hue means one thing everywhere: on chips, status discs, board marks, timeline outcomes and the colored words of a takeaway. Green is passed, amber is in progress or held, red is failed or rolled back, violet is an agent. A landed or merged change is green, never GitHub's purple, because violet already means agent. No hue carries a status alone: a glyph (check, pause, undo, x, bot, person) or the word itself says the same thing.

**The Ink and Solid Rule.** Letters use a family's ink step. Discs, bars, connectors and strokes use its solid step. Chips sit on the tint with the line as their border. Never set text in a solid or fill a disc with an ink.

**The One Blue Rule.** The accent is the takeaway, the link and the focus ring. It never marks a status, fills a surface or colors a heading. Brand marks are not the accent: the contact icons keep their own brand colors.

## Typography

**Display Font:** Mona Sans, bundled as "SW Sans" (variable weight 200–900, width 75–125%), with a system UI sans fallback
**Body Font:** Mona Sans, the same family
**Label/Mono Font:** Monaspace Neon, bundled as "SW Mono" (400 and 600), with a system monospace fallback

**Character:** One grotesque in many weights, the way the product UI the deck depicts is set. Headings use a heavy, slightly widened cut (690 weight, 104% width) with tight tracking, reading text uses an in-between 430, and labels use 600. Monaspace Neon is the sound of a literal string.

### Hierarchy
- **Display** (690, 74px, 1.03): the cover title, in a two-line left column. The theme's base h1 is 76px; the closing slides scale the same cut to 96px ("Questions?") and 64px ("Thank You!").
- **Headline** (690, 48px, 1.1): one claim per content slide, at most 1080px wide with balanced wrapping. The bio name sits at 56px.
- **Takeaway** (650, 30px, 1.25): the closing line of an argument slide, in Takeaway Blue.
- **Body** (430, 26px, 1.45): the theme's base for un-classed slides; the byline name and the check run's title sit at this size in bold. This deck's composed slides set prose smaller: 25px for the bio and checklist notes, Body Side beside panels.
- **Body Side** (430, 24px, 1.4): prose beside a panel or under the board.
- **Title** and **Row** (650 and 430, 22px, 1.3): term-and-definition pairs inside panels, row titles, change titles, timeline steps, table row heads.
- **Panel Head** (21px, 1.25; the name inside it at 650): the head bar of every panel.
- **Meta** (600, 19px, 1.3): lane names, check names, counts, the pill rows under a slide. Lane names and counts step up to 650.
- **Label** (600, 18px, 1, no tracking): chips, buttons, board marks.
- **Caption** (430, 18px, 1.3): step, actor, timeline and table notes. Exposure lines and ring subtitles use 450; the illustrative label and the board's foot use 500.
- **ID** and **Code** (Monaspace Neon 400, 18px and 0.76em): change IDs (AI-0142, PR-0161), file names, paths, commands.
- **Chrome** (500, 17px): the footer. The page number is Monaspace Neon 400 at 17px.

The ramp is a dense UI band from 17 to 23px in near-single-pixel steps (status words, step names, the board console and checklist rows take the 20 and 23px steps), a reading band at 24–26px, then jumps to 30, 48 and 74.

### Named Rules
**The Mono Means Literal Rule.** Monaspace Neon sets only what the audience would type or search for: change IDs, file names, paths, commands, inline code, the file's line numbers and the page number. Headings, labels, column heads and prose are Mona Sans.

**The Floor Rule.** At 1280×720, argument text (bullets, side notes, definitions, step names) is 22px or larger. Panel UI text sits at 19–21px: panel heads, table cells, the board console, panel footers and the source note under a table. Labels and captions never go below 18px, and the footer and page number are 17px chrome. Known exceptions, not precedents: the Agent and Human chips inside release-board rows (16px), the change IDs in those rows and in the comparison line (17px), and the moving AI-0142 token (17px mono).

**The Bundled Type Rule.** Both families ship beside the deck (`slides/assets/fonts/`, OFL-1.1) with `font-display: block`, and deck.js loads every face before the first transition, so a slide never captures invisible or fallback text.

## Layout

A fixed 1280×720 canvas, padded 50px at the top and 72px at the sides, with nothing at the bottom. The 72px margin is the spine: the footer and page number sit 28px from the bottom edge on it, the takeaway runs margin to margin 82px from the bottom, and positioned panels start on it.

- **Bookends** (cover, Questions): a two-column grid, text left and object right (the check run in a 468px column, the photo in 608px), 48px apart and vertically centered. The cover, Questions and Thank You slides drop the footer and page number.
- **Bio**: the portrait as a left 40% background over Avatar Tint, the text centered vertically.
- **Content**: headline at the top, the tooling object beneath, takeaway pinned at the bottom. The object takes one of four forms:
  - Panel left, prose right: a 600–664px panel on the left margin, 132–134px from the top, with prose starting 40–50px to its right.
  - Two queues side by side, 36px apart.
  - Board slides: three lanes 18px apart, then a detail grid of prose and a 600px panel, 40px apart.
  - One full-width panel: the regret list, the release board, the tool map.
- **Thank You**: two columns 56px apart, references and contact, under 32px column heads.

Rhythm: list items 12px apart (14–16px in side columns), panel rows divided by Soft Hairlines rather than gaps, list rows 47–49px tall, board rows 72px, panel content 20px from the panel's sides. Template classes from the theme: `lead` centers a slide, `columns` makes two columns 48px apart, `small` drops the body to 22px and h2 to 40px.

### Named Rules
**The 72px Margin Rule.** Everything that anchors to an edge anchors to the 72px margin: the footer, the page number, the takeaway, positioned panels and the release board's static comparison line.

**The One Takeaway Rule.** An argument slide ends with at most one takeaway line, pinned 82px from the bottom, entering only after the slide's moment completes (each slide sets its own `--td`). On the release board the takeaway is the outcome sentence: it's set in Ink with each outcome word in its status ink, and it appears only when a run completes.

## Elevation & Depth

Two levels and a recess. The canvas is the floor. Panels float one step above it, with a hairline border and a soft, ink-tinted offset shadow. Gray wells (board lanes, counts, the switch track) sit recessed with no shadow. The two hero objects, the cover's check run and the Questions photo, lift one step higher. Depth never comes from colored glow or blur.

### Shadow Vocabulary
- **Panel** (`box-shadow: 0 1px 2px rgb(31 35 40 / 0.06), 0 12px 28px -14px rgb(31 35 40 / 0.2)`): panels, actor boxes, change cards, the loop token.
- **Lift** (`box-shadow: 0 2px 4px rgb(31 35 40 / 0.05), 0 22px 44px -18px rgb(31 35 40 / 0.28)`): the cover's check run and the Questions photo only.
- **Control** (`box-shadow: 0 1px 0 rgb(31 35 40 / 0.04)`): resting buttons.
- **Selected segment** (`box-shadow: 0 1px 2px rgb(31 35 40 / 0.14), 0 0 0 1px #d0d7de`): the selected option in the scenario switch.
- **Hollow ring** (`box-shadow: inset 0 0 0 2px #8c959f`): queued status discs and lane dots the change hasn't reached.
- **Badge cutout** (`box-shadow: 0 0 0 2px #ffffff`): separates a check badge from the avatar it sits on.

### Named Rules
**The One Surface Rule.** Panels never nest. Inside a panel, structure is a head bar, a Soft Hairline or a tinted footer row. A white card may sit in a gray well (the change card in its lane), never in another panel.

**The Lift Is for Heroes Rule.** Only the cover's check run and the Questions photo take the Lift shadow. Everything else that floats takes the Panel shadow.

## Shapes

Radius grows with the object: 6px inline code, 7px checkboxes and switch options, 8px buttons and the moving token, 10px the switch track, 12px change cards and empty slots, 14px panels and actor boxes, 16px board lanes, 18px the cover's check run, 22px the Questions photo. State takes two pure forms: pills for chips, counts, stage marks, the regret cues and the pill rows, and circles for status discs, avatars, the bot and lane dots. Borders are 1px hairlines. Placeholders are dashed: the empty "Next" slot, draft discs, stages that never ran, the "LGTM" rubber-stamp mark. The health gate is a dashed red line.

Icons are drawn once, as inline SVG data URIs in the theme (check, x, pause, undo, play, step, replay, bot, person, file), and tinted with `currentColor` through CSS masks. Strokes are round-capped, mostly 2 to 2.3 units on a 16-unit grid. Font Awesome appears only in the contact blocks, and each mark keeps its brand color: Bluesky #1185fe, LinkedIn #0a66c2, blog #0366d6, GitHub #333333 (Ink under `invert`), Mastodon #6364ff, Twitter #1da1f2.

### Named Rules
**The Pill Means State Rule.** A pill reports a state; a rounded rectangle is something you press or a literal string. Buttons, the scenario switch, the merge button and the AI-0142 token are rectangles; chips, counts, stage marks and outcome rows are pills.

**The Circle Means a Check Rule.** A circle is a check's state. It's filled with a white glyph when done, a hollow ring when queued, a dashed ring when drafted, amber arcs while running, and the person's face with a green badge when a person approved. Checklist boxes are rounded squares because the speaker ticks them.

## Components

### Panels (cards and containers)
The white box every tool already uses.
- **Corner Style:** 14px.
- **Background:** Panel White, with a 1px Hairline border.
- **Shadow Strategy:** Panel (see Elevation & Depth).
- **Head bar:** Subtle Gray with a Soft Hairline bottom, 12px 20px padding, 21px text: the name at 650, a slug or file name in Monaspace Neon, and a chip or count at the far end.
- **Internal Padding:** rows 20px from the sides, divided by Soft Hairlines; definition lists pair a Title term with a Row definition.
- **Footers:** a Hold-tinted warning row with a Hold-line top ("Agent edits a test? Hold."), or a plain foot with a Soft Hairline top.
- The panel family is the spec, the test run, the queues, the regret list, the instructions file (with a mono gutter of line numbers), the context meter, the role cards, the change folder, the session log, the branch graph, the agent lanes, the review queue, the permissions list, the untrusted-text panel, the extension map, the DORA cards, the release board, the deploy timeline, the tool map and the checklist card.

### Chips
- **Style:** a 32px pill, Label type, a 15px glyph before the word in `currentColor`. The neutral chip is Subtle Gray with a Hairline border and Secondary Ink.
- **State:** pass (check), hold (pause), agent (bot), human (person, on the neutral chip), deny (x on Back tint: Blocked) and ask (person on Hold tint: Ask first). The theme also defines a back chip (undo) that this deck doesn't use. Chips drop to 28–30px inside dense heads and pull-request rows.
- **Who decides:** on the extension map, the same pill names who runs an extension: violet bot for the model, the neutral person for you, and solid Ink with a check for code (hooks), the one chip that is filled.

### Status discs (signature)
- **Shape:** a 26px circle in a family's solid with a white glyph at 62%: pass check, hold pause, fail x, back undo. A queued disc is a hollow Strong Line ring, a draft disc is a dashed ring, and a person's approval is their 32px avatar with a 17px green check badge.
- **Choreography:** every disc has a moment, `--t`. Amber arcs spin for 640ms ending at `--t`, the disc settles from a hollow ring (420ms, overshoot easing), and the glyph wipes in 90ms later (320ms). The cover, the queues, the regrets, the board checks, the test run, the merge checks and the rollback timeline all reuse this beat.

### Buttons
- **Shape:** an 8px rectangle, 38px tall, padded 0 14px, with a 14px masked glyph before a Label.
- **Default:** Panel White, Hairline border, Ink, Control shadow. A pressed toggle (2×) turns Well Gray with a Secondary Ink border.
- **Primary:** Merge Green with a white label and a 15% ink border (Approve).
- **Hover / Focus:** default buttons go to #f3f4f6 and primary to Pass Green's solid; focus draws a 2px Focus Blue outline 2px outside.
- **Disabled:** Subtle Gray, Soft Hairline border, Strong Line text, no shadow.
- **Behavior:** the run button's glyph follows the board: play, pause while running, replay when complete. A control waiting on the speaker (Run when idle, Approve at the gate) breathes a green 5px ring twice, 1200ms each, then stops. Arrow keys and clickers pressed on a focused control release it and advance the deck.

### Navigation: the scenario switch
- **Style:** a Well Gray track (Hairline border, 10px radius, 3px padding) holding 32px options at 7px radius in Label type and Secondary Ink.
- **Selected:** Panel White, Ink and the Selected-segment shadow, exposed as `aria-pressed`. **Hover:** #f3f4f6 on unselected options. **Focus:** the same Focus Blue outline as buttons.

### Check run (signature, cover)
The talk in one picture. A 468px card at 18px radius with the Lift shadow, padded 24px 28px 26px. It holds a 26px/650 title; a meta row with the mono ID, the Agent chip and a status that swaps from In progress (amber) to Landed (green); four steps on a 2px connector that fills green top-down as each step settles; and the rollout as four 6px ring bars filling left to right (team, 1%, 10%, 100%). Its caption, "Fictional change, illustrative only", hangs below the card.

### Board lanes and the change card (signature)
- **Lanes:** Spec, Build and Review in Well Gray at 16px radius with a soft border. Lane names are Meta at 650, after a dot that fills Pass Green once the change has reached that lane. The next empty lane shows a dashed "Next" slot.
- **Change card:** Panel White, 12px radius, Panel shadow, holding the ID and Agent chip, a Title, and three checks with 22px discs. It carries `view-transition-name: sw-hero`, so under the `handoff` transition it moves column to column across the Spec, Build and Review slides, with one more check completing on each slide.

### Release board (signature, interactive)
- **Structure:** one full-width panel. A Subtle Gray bar (title, state pill, controls), a column head (Change, six stages with ring subtitles, Outcome), three 72px rows, a foot and a console with a 4px progress bar along its bottom edge.
- **Stage marks:** 32px pills in Label type with a 14px glyph. Pass, CA and Landed are green checks. Pass* is an amber check (it passed, but the test was edited). Hold is an amber pause. Rolled back is a red undo, Errors and Incident a red x. LGTM is a dashed neutral check, for review as a rubber stamp. Queued is a 14px hollow ring. Active is a 44px amber pill with a spinner, which becomes a person glyph while awaiting approval and a pause glyph when paused. Stages that never ran merge into one dashed pill across their columns ("Not run", "Skipped").
- **Outcome:** an 18px glyph and a 20px/650 word in its status ink, with the exposure as a caption beneath. A row flashes Back tint (1400ms) when it rolls back or becomes an incident.
- **States:** static (the authored snapshot, used for print, presenter and no-script), idle (Ready), running (amber state pill, amber progress, spinning stage), paused, awaiting (waits for Approve; Step never skips the gate) and complete (green state pill; the outcome takeaway arrives). Nothing autoplays. A 2× toggle doubles the speed.
- **Static twin:** a "Static snapshot: Evidence first" label, and a one-line Vibe-shipping comparison in pass and back pills, stand in for the controls and the outcome takeaway.

### Review loop
Three actor boxes (Worker and Reviewer with the violet bot, You with the avatar) joined by SVG arrows in Strong Line, with the return path ("comments.md") in Hold amber. The AI-0142 token, an 8px violet-bordered mono label, travels the loop once (3.8s) into the merge box. There, "Waiting for your approval" gives way to "Approved", and the Merge pull request button turns from disabled to Merge Green.

### Checklist (signature, interactive)
- **Rows:** challenge and response, 49px tall: a 23px/560 item and a 20px response in Secondary Ink, after a 24px rounded-square box (7px radius, 2px Strong Line border).
- **Checked:** the box fills Pass Green's solid with a white check (a 280ms pop) and the response turns Pass ink. A 5px green meter grows with the count. At seven of seven the card border goes Pass line, and the head goes Pass tint with a check before "All 7 checked. Ready to ship."
- **Focus:** a 2px Focus Blue outline 3px inside the row. Print shows a blank list to keep.

### Flow pieces (expansion slides)
- **Context meter:** a 44px rounded bar per session in Subtle Gray. Segments fill left to right: Well-toned slate for what loads every session, a violet tint for the task, a 4% Secondary Ink sliver for `progress.md`. A dashed red zone with Back tint hatching marks where quality drops, and a 3px Ink tick marks the natural break. Captions sit under their segments.
- **Role relay:** four role cards (bot, name, job, and the file each hands off) joined by gray arrows. Each arrow carries your avatar with a green check, the approval gate. An amber path returns from the Reviewer to the Worker.
- **Agent and skill examples:** a 656px file panel beside 24px supporting prose, using the existing file head and a complete Markdown example at 20px mono. The source is one white surface, not a nested code panel; an 18px caption labels it illustrative. Optional skill resources use literal folder names with 22px descriptions.
- **Progressive disclosure:** three relay cards for discovery, activation and execution, joined by neutral arrows without approval gates. Each pairs 22px loading guidance with literal metadata or file names and its loading condition. Cards arrive in order; the complete static sequence is always readable.
- **Change lifecycle:** four steps on a green connector, each a 28px status disc over a 25px/650 name, its command in Code type, and a 20px note; the change folder below is a file list with the mono path in the head and an Archived chip that replaces In progress.
- **Branch graph:** commits as 16px discs on a gray line, an Ink HEAD tag that walks forward onto the bad commits and back, and dropped commits as hollow rings at 55% opacity with a red strike.
- **Agent lanes and review queue:** violet progress bars of different lengths ending in mono pull-request pills, beside a queue of status discs (approved green, waiting amber).

### Lists, links, code and charts
- **Bullets:** 9px Strong Line dots with a 30px indent.
- **Links:** Takeaway Blue with a 1.5px underline at 40% alpha, 4px offset.
- **Inline code:** Code type on Code Fill with a Soft Hairline border at 6px radius; it never wraps.
- **Deploy timeline:** 26px discs on a 2px connector, a 22px/640 step, an 18px note, and the outcome word right-aligned in its status ink.
- **Error chart:** a 3px Ink line against a dashed red health gate, with a red trip dot where it crosses.

### Transitions
- **lift** (default): the next slide rises 22px and fades in over 620ms while the outgoing slide is gone by 60%.
- **handoff** (Spec, Build and Review slides): a 900ms cross-fade whose incoming slide waits until 45%, so the change card's view transition reads as the card moving. Print and reduced motion drop the view-transition name.

## Do's and Don'ts

### Do:
- **Do** draw each argument as the tool that proves it (a check run, a pull-request queue, a board, an instructions file, a deploy timeline, a checklist), built from panels, chips and status discs.
- **Do** give every status its fixed hue and its glyph: check for pass, pause for hold, undo for rollback, x for failure or incident, bot for agent, person for human.
- **Do** set status words in the ink step and draw discs, bars, connectors and strokes in the solid step.
- **Do** end an argument slide with one Takeaway line, 82px from the bottom, entering only after the slide's moment (`--td`).
- **Do** author the finished state in markup and let motion replay the path to it: `backwards` fills, gated on `section.sw-live` and `prefers-reduced-motion: no-preference`, settled by 4.95s.
- **Do** give anything live-only a static twin (`.sw-static` / `.sw-dynamic`, or `.live-only` revealed by a finite `transient`) so the PDF, presenter, reduced-motion and no-script views read complete.
- **Do** label every simulated change, count, rate and board on the slide itself, in an 18px Secondary Ink line.
- **Do** show a person's approval as their avatar with a green check badge, and an agent's work with the violet bot and the Agent chip.
- **Do** keep a 2px Focus Blue outline on every control (2px outside buttons and switch options, 3px inside checklist rows), and let arrow keys and clickers advance the deck from a focused control.
- **Do** keep the bio and Thank You contact blocks exactly as authored, including the Font Awesome icons in their brand colors and the struck-through Twitter line in Secondary Ink.

### Don't:
- **Don't** use Takeaway Blue or Focus Blue for a status, a fill or a heading.
- **Don't** spend a status hue on decoration or a second meaning; a landed or merged change is green, never purple, because violet means agent.
- **Don't** nest a panel in a panel, or give anything but the cover's check run and the Questions photo the Lift shadow.
- **Don't** set prose, headings or labels in Monaspace Neon.
- **Don't** set argument text below 22px or labels below 18px; the board rows' 16px chips, their 17px IDs and the 17px loop token are exceptions, not precedents.
- **Don't** crowd a slide: one diagram or panel pair, at most one supporting line, then the takeaway. Detail and sources go in the speaker notes.
- **Don't** shape a button as a pill or a status chip as a rectangle.
- **Don't** add looping or autoplaying motion; the board's stage spinner is the only infinite animation, and it runs only after the speaker presses Run.
- **Don't** add colored or blurred glows or tinted shadows; shadows are Ink at low alpha, and the only colored halo is the zero-blur nudge on a control waiting for the speaker.
- **Don't** dress the deck in a costume world or the dark neon AI look; the release tooling is the only illustration.
- **Don't** present a number, chart or change as real; nothing on a slide is connected to a real model, repository, pipeline or production traffic.
