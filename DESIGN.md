---
name: Flight Strip Board
description: "A night tower cab for the talk Shipping with AI Without Shipping Regret: every change is a flight strip that moves only when a person writes its clearance."
colors:
  sign-yellow: "#f6c21c"
  sign-black: "#121416"
  sign-red: "#c8102e"
  sign-white: "#ffffff"
  grease: "#b8281a"
  grease-lamp: "#ff8a6b"
  amber: "#e2a33a"
  green: "#3f9a6b"
  red: "#c9402b"
  pass-ink: "#23663f"
  edge-light: "#8fc4ff"
  blue: "#4a7cc0"
  console: "#1b2023"
  console-night: "#111416"
  console-deep: "#121618"
  console-raised: "#242b2f"
  rail: "#3a444a"
  rail-light: "#56636a"
  lamp: "#ebe5d5"
  dim: "#a9b1ad"
  paper: "#efe6cc"
  paper-shade: "#e3d7b5"
  paper-line: "#c4b48b"
  ink: "#1a2540"
  ink-soft: "#485166"
typography:
  display:
    fontFamily: "FS Overpass, Overpass, Segoe UI, system-ui, sans-serif"
    fontSize: "80px"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "FS Overpass, Overpass, Segoe UI, system-ui, sans-serif"
    fontSize: "50px"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  title:
    fontFamily: "FS Overpass, Overpass, Segoe UI, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "FS Overpass, Overpass, Segoe UI, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "0"
  body-dense:
    fontFamily: "FS Overpass, Overpass, Segoe UI, system-ui, sans-serif"
    fontSize: "25px"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "0"
  takeaway:
    fontFamily: "FS Overpass, Overpass, Segoe UI, system-ui, sans-serif"
    fontSize: "27px"
    fontWeight: 800
    lineHeight: 1.18
    letterSpacing: "-0.005em"
  sign:
    fontFamily: "FS Overpass, Overpass, Segoe UI, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.06em"
  label:
    fontFamily: "FS Overpass, Overpass, Segoe UI, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.06em"
  data-id:
    fontFamily: "FS B612 Mono, B612 Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.01em"
  data-label:
    fontFamily: "FS B612 Mono, B612 Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "18px"
    fontWeight: 700
    letterSpacing: "0.06em"
  code:
    fontFamily: "FS Overpass Mono, Overpass Mono, ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.3
  hand:
    fontFamily: "FS Marker, Permanent Marker, Marker Felt, Comic Sans MS, cursive"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.01em"
rounded:
  sign: "3px"
  card: "4px"
  holder: "6px"
  panel: "8px"
spacing:
  slide-top: "60px"
  slide-x: "72px"
  slide-bottom: "70px"
  block: "18px"
  stack: "12px"
  bay-gap: "26px"
  gutter: "40px"
components:
  strip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.data-id}"
    rounded: "{rounded.holder}"
    padding: "4px 5px 4px 18px"
  strip-holder:
    backgroundColor: "{colors.amber}"
    rounded: "{rounded.holder}"
  strip-holder-cleared:
    backgroundColor: "{colors.green}"
    rounded: "{rounded.holder}"
  strip-holder-held:
    backgroundColor: "{colors.red}"
    rounded: "{rounded.holder}"
  sign-mandatory:
    backgroundColor: "{colors.sign-red}"
    textColor: "{colors.sign-white}"
    typography: "{typography.sign}"
    rounded: "{rounded.sign}"
    padding: "0.3em 0.55em 0.18em"
  sign-location:
    backgroundColor: "{colors.sign-black}"
    textColor: "{colors.sign-yellow}"
    typography: "{typography.sign}"
    rounded: "{rounded.sign}"
    padding: "9px 13px 6px"
  sign-direction:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.sign-black}"
    typography: "{typography.sign}"
    rounded: "{rounded.sign}"
    padding: "0.3em 0.55em 0.18em"
  takeaway:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.sign-black}"
    typography: "{typography.takeaway}"
    rounded: "{rounded.card}"
    padding: "13px 24px 10px 18px"
  pagination:
    backgroundColor: "{colors.sign-black}"
    textColor: "{colors.sign-yellow}"
    typography: "{typography.sign}"
    rounded: "{rounded.sign}"
    padding: "3px 12px 0"
    height: "34px"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "18px 24px 20px"
  sheet-title:
    backgroundColor: "{colors.sign-black}"
    textColor: "{colors.sign-white}"
    typography: "{typography.label}"
    padding: "9px 24px 6px"
  chip-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "9px 12px 7px"
  slot:
    textColor: "{colors.dim}"
    rounded: "{rounded.holder}"
  console-key:
    textColor: "{colors.lamp}"
    rounded: "{rounded.holder}"
    padding: "9px 15px 6px"
    height: "42px"
  console-key-clear:
    backgroundColor: "{colors.sign-yellow}"
    textColor: "{colors.sign-black}"
    rounded: "{rounded.holder}"
    padding: "9px 15px 6px"
    height: "42px"
---

# Design System: Flight Strip Board

## Overview

**Creative North Star: "The Night Tower Cab"**

The deck is a night tower cab seen from the controller's seat: a graphite strip console under one warm lamp, buff card-stock flight strips in amber, green, and red plastic holders, red grease-pencil marks, and airfield signs. Every AI-written change is a strip, and a strip moves to the next bay only when a person writes its clearance. Every visual device is an object that cab would contain, and the slides argue for release discipline by handling those objects, not by decorating a page.

Density is that of a working board on a fixed 1280×720 frame: one claim per slide, stated as the headline; one composed board, sheet, or strip stack under it; and at most one direction-sign takeaway pinned to the bottom. Material carries the hierarchy. The lit console is the room's voice, card stock holds evidence and documents, signs give instructions, and grease records human decisions. Type is sized for the back of a conference room.

The direction rejects two things by name: the neon AI-talk deck and the white corporate template. Motion is the mechanism, never ornament. Strips print, slot into bays, get cocked or ringed, collect grease ticks, change holder, and cross the hold line. Each slide's motion is finite, plays only on the live audience slide, and animates into a finished state that the markup already holds.

**Key Characteristics:**
- Two lit materials: graphite console with lamp-colored text, and buff card stock with navy ink.
- Saturated color only where it means something: airfield signs, holder states, grease marks, real lights.
- Overpass for words and signs, B612 Mono for strip data, Overpass Mono for code and paths, Permanent Marker for grease only.
- Physical depth from one overhead lamp: a hard contact line plus a soft cast, always straight down.
- Finite motion that settles within 4.7 seconds into an authored static state, so print, PDF, and reduced motion lose nothing.

## Colors

Two lit materials carry the deck, and saturated color appears only where it means something in the cab: a sign, a holder, a grease mark, or a real light.

### Primary
- **Sign Yellow** (#f6c21c): the airfield-sign accent and the most-used accent in the deck. It is the legend and inset border of location signs (bay labels, page numbers, station placards, table headers), the face of direction signs (every takeaway), list bullets and ordered-list numerals, and the release board's active column and state readout. It reads at 9.9:1 on the console.
- **Sign Black** (#121416): the face of location signs, the 2px rim around mandatory and direction signs, and the title bar of paper sheets.
- **Mandatory Red** (#c8102e): mandatory-instruction signs only, meaning stop here until cleared. It appears on the PROD hold sign, a hold bay's label, and the release board's awaiting-clearance readout.
- **Legend White** (#ffffff): legends on Mandatory Red and on a sheet's black title bar (5.9:1 on red). It is never a surface.

### Secondary
- **Grease Pencil** (#b8281a): a person's marks on card stock, meaning ticks, rings, strikes, initials, and short handwritten notes, plus the held and rolled-back readouts those marks cause (5.0:1 on paper).
- **Grease Under Lamp** (#ff8a6b): the same mark written on the console, lifted for contrast (7.1:1 on graphite). It is also used for the Questions underline, the Thank You tick, and the review loop's return lane.

### Tertiary
- **Amber Holder** (#e2a33a): the default, in-progress holder, and the tint of the box being worked on the release board.
- **Green Holder** (#3f9a6b): a cleared strip.
- **Red Holder** (#c9402b): a held or rolled-back strip, and the incident ring.
- **Pass Ink** (#23663f): printed PASS and LANDED readouts on card stock, where the green holder itself would be too light to read (5.5:1 on paper).
- **Edge Light** (#8fc4ff): links, code titles, and keyboard focus rings on the console. It is the console's one cool light, and at 5% it tints the faint glow in the far corner.
- **Holder Blue** (#4a7cc0): the focus ring on card stock (3.4:1 against paper). The theme also keeps blue and grey holder hooks, but strips in this deck use only the three state holders.

### Neutral
- **Graphite Console** (#1b2023): the canvas of every slide, with a warm lamp pool falling from the top left. Marp's own background variables map to it, so slide transitions never flash black.
- **Night Console** (#111416): the darker cab of `invert` slides, used on the cover.
- **Deep Well** (#121618): recessed wells such as code blocks and review-loop stations.
- **Raised Graphite** (#242b2f): inline code chips and alternate table rows.
- **Rack Rail** (#3a444a): bay uprights, panel borders, and rules between rows on the console.
- **Lit Rail** (#56636a): the dashes of an empty slot and the review loop's lanes.
- **Lamp Light** (#ebe5d5): primary text on the console (13:1).
- **Dimmed Lamp** (#a9b1ad): secondary text, column heads, captions, and the footer (7.5:1).
- **Buff Card Stock** (#efe6cc): strips, sheets, quotes, and chips. It is the lightest surface in the system.
- **Shaded Card Stock** (#e3d7b5): the lower edge of every card gradient, and raised rows on paper.
- **Printed Rule** (#c4b48b): the 2px rules printed between strip fields and the 1px rules between sheet rows.
- **Strip Ink** (#1a2540): navy ink for all text on card stock (12.2:1).
- **Faded Ink** (#485166): printed captions, row keys, and secondary text on card stock (6.4:1).

### Named Rules
**The Real Objects Rule.** Saturated color always means something in the world: a sign's instruction, a holder's state, a person's mark, or a real light. It is never decoration. Edge Light marks links and focus, and the brand icons in the contact blocks keep their tuned colors. Light comes only from the overhead lamp, the faint edge light in the far corner, and real lights such as the stop bar on the cover.

**The Three Reds Rule.** Mandatory Red is a sign, Red Holder is a strip state, and Grease Pencil is a person's mark. Each red keeps its job, so never swap them.

**The Holder Is State Rule.** A holder's color changes only when the strip's state changes: amber means in progress, green means cleared, and red means held. A holder color is never picked for variety.

## Typography

**Display Font:** FS Overpass, the bundled Overpass in weights 400, 600, and 800 plus 400 italic (falls back to Overpass, Segoe UI, system-ui)
**Body Font:** FS Overpass
**Label/Mono Font:** FS B612 Mono, bundled at 400 and 700, for strip data. FS Overpass Mono, bundled at 400 and 700, for code and paths. FS Marker (Permanent Marker) for grease handwriting only.

**Character:** Overpass descends from Highway Gothic road signage, so headings, body, and signs share one public-infrastructure voice. B612 Mono, drawn for cockpit displays, prints the strip data. Permanent Marker is the controller's hand. All four faces ship beside the deck and load before the first transition, so nothing renders in a fallback mid-slide. Theme text uses only these four families. The Helvetica in Marp's presenter chrome belongs to Marp, not to the theme.

### Hierarchy
- **Display** (800, 80px, 0.98, −0.015em): deck and bookend titles (h1). Title slides with the `lead` class set it at 88px. On the cover it is printed on the title strip in Strip Ink.
- **Headline** (800, 50px, 1.06, −0.015em): every content slide's title (h2), written as the claim in one sentence. The two densest compositions step it down to 44–48px.
- **Title** (600, 32px, 1.15, −0.01em): sub-heads (h3). An h4 is an uppercase Dimmed Lamp eyebrow (800, 20px, +0.08em).
- **Body** (400, 28px, 1.38): the slide's base size. Bullet columns beside a strip or sheet use Body Dense (400, 25px, 1.38). The `small` class drops the base to 23px.
- **Takeaway** (800, 27px, 1.18, −0.005em): the single sentence on a direction sign.
- **Sign** (800, 19px, 1.1, +0.06em, uppercase): bay labels, page numbers, and station placards.
- **Label** (800, 18px, 1.2, +0.06em, uppercase): column heads, sheet title bars, and station roles.
- **Data ID** (B612 Mono 700, 26px, 1): strip callsigns such as AI-0142. Data Label (B612 Mono 700, 18px, +0.06em, uppercase) sets row keys and field captions.
- **Code** (Overpass Mono 700, 20px, 1.3): file names, paths, and commands inside strips and tables. Code blocks run at 22px/1.5.
- **Hand** (Permanent Marker 400, 26px in a strip box, 1.1): initials, short notes, and the opening mark of a quote, tilted −4° to −10°.

### Named Rules
**The Back Row Rule.** At 1280×720, labels are about 18px or more and sentences about 22px or more. A few built sizes run under this floor (13–17px): printed captions in the base strip, empty-slot legends, the footer, and the release board's keys, column heads, and readouts. They are not steps on the scale, so never reuse them for new text.

**The Right Mono Rule.** B612 Mono prints strip data only: callsigns, field captions, and readouts. Its period renders left-shifted, so file names, paths, and anything else with a period go in Overpass Mono. Overpass's middle dot is also left-shifted, so `·` never appears in Overpass text. Separate items with the small Sign Yellow square used in the cover byline.

**The Hand Is Grease Rule.** Permanent Marker appears only as a person's handwriting: short, slightly tilted, and in Grease Pencil or Grease Under Lamp. The one exception is the release board's rubber-stamp LGTM, written in Faded Ink. The face is never used for headings or body text.

## Layout

The frame is a fixed 1280×720 Marp slide, exported as bespoke HTML and as PDF. It is not responsive. There are no breakpoints and no fluid type, and both exports show the same frame.

- **Slide box:** padding is 60px top, 72px sides, and 70px bottom, in a flex column. Content slides, meaning those with an h2, read from the top. Title, question, and split-photo slides center.
- **The spine of a content slide:** the headline comes first, then the composition 26–30px below it, then the takeaway. An auto top margin pins the takeaway to the bottom left. The composition must end with clear air above that sign.
- **Rhythm:** 18px separates paragraphs, lists, tables, and the element after a heading. Strips in a bay stack 12px apart, and list items 0.3em apart.
- **Compositions:** two-column grids are weighted toward the evidence object, at 1.1–1.35fr to 1fr, with 40–48px gutters. A board is a row of equal bays 26px apart. The route band is three bays (Spec, Build, Review) 20px apart, and it repeats across consecutive slides so the hero strip appears to travel.
- **Chrome:** the footer sits bottom left (72px in, 28px up) in Dimmed Lamp. The page number is a location sign at the bottom right (72px in, 22px up). Bookend slides hide both.
- **Photos:** photos enter as split backgrounds 40–45% wide. They are dimmed and warmed (brightness 0.86, sepia 0.12) to sit in the lamp light.
- **Slide classes:** `lead` centers a title slide. `invert` darkens the cab. `paper` turns the whole slide into card stock with Strip Ink text. `small` tightens type for dense slides. `columns` and `columns3` lay out section grids, and the `columns`, `columns3`, and `split` divs lay out two- and three-up groups.

## Elevation & Depth

One warm lamp hangs over the console, so depth is physical rather than tonal. Strips, sheets, chips, and keys lie on the board, so each has a hard 2–3px contact line with no blur under a soft black cast. Signs cast without a contact line. Wells such as code blocks, the release-board panel, and console stations are recessed, with a faint inset top highlight. Bays are open racks with a darkened floor, not raised cards. Lift is a longer, darker cast.

### Shadow Vocabulary
- **Sign cast** (`box-shadow: 0 0 0 2px #121416, 0 6px 14px rgba(0, 0, 0, 0.35)`): mandatory and direction signs, with their black rim. Location signs and page numbers use the same cast without the rim, and draw their yellow border as an inset outline.
- **Strip in holder** (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35), 0 2px 0 rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.32)`): the plastic lip highlight, the contact line, and the cast.
- **Paper on the board** (`box-shadow: 0 3px 0 rgba(0, 0, 0, 0.28), 0 16px 30px rgba(0, 0, 0, 0.32)`): sheets. Quotes use a slightly lighter version.
- **Chip** (`box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.25)`): small paper tags.
- **Takeaway** (`box-shadow: 0 0 0 3px #121416, 0 12px 26px rgba(0, 0, 0, 0.4)`): the heaviest sign on the slide.
- **Console key** (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 3px 0 #0b0d0e, 0 8px 14px rgba(0, 0, 0, 0.35)`): a raised cap. When pressed, it travels 2px and its contact line shrinks to 1px.
- **Recessed well** (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 10px 24px rgba(0, 0, 0, 0.28)`): code blocks. The release-board panel deepens the cast to 18px 34px.
- **In flight** (`box-shadow: 0 34px 50px rgba(0, 0, 0, 0.55)`): a strip lifted off the board during a go-around. The cover's title strip rests on a similar deep cast.

### Named Rules
**The Lamp Overhead Rule.** All shadows fall straight down from the one lamp, with zero x-offset and black only. Objects lying on the board add a hard contact line under the soft cast. Lift is a longer cast, never a glow. Rings (a black sign rim, a yellow lit-position ring, a red incident ring) are outlines, not light.

## Shapes

The form language is the hardware of a strip board: square-ish, printed, and handled.

- **Corners by object:** signs are 3px, card stock and takeaways 4px, holders, slots, keys, and code blocks 6px, and large panels 8px (the cover strip and the release board). Console stations are nearly square, at 2px with corner rivets. Nothing is pill-shaped.
- **The strip silhouette:** a long horizontal bar. On the left is a ribbed 18px grip where the holder shows; then the ID cell, the title cell, and a row of square printed field boxes. Each part is divided by a 2px rule printed on the card in Printed Rule tan.
- **Sign silhouettes:** location signs are black rectangles with a 2px yellow border inset 5–6px from the edge. Mandatory and direction signs carry a 2px black rim. The direction sign leads or ends with a solid arrow glyph.
- **Grease marks:** hand-drawn strokes with round caps: a tick, an oval ring, a crossed strike, and an underline. Each is written left to right.
- **Rotation means attention:** a cocked strip shifts 26px and tilts −1.4°. Grease writing tilts −4° to −10°, and a pile of fresh strips scatters within ±2.2°. Everything else sits square to the board.
- **Markers:** list bullets are small Sign Yellow squares with a 2px black rim, like miniature signs. Ordered lists use bold yellow numerals, and sheet lists use ink squares.
- **Empty positions:** a 2px dashed Lit Rail outline with 6px corners, the same height as the strip it would hold.
- **Bays:** open racks with 3px rails on the left and right under a sign plate. A bay is never a closed box.

## Components

Every component is a physical thing on the board. It is printed, held, signed, or written on, and it behaves the way that thing would.

### Flight Strip (signature)
The evidence object: printed card stock in a plastic holder.
- **Construction:** three stacked backgrounds on one element. The card-stock gradient is clipped to the content box, a ribbed 18px grip shows at the left, and the holder gradient fills the border box, mixed 70% with white at the top and 78% with black at the bottom. The strip has 6px corners and the strip-in-holder cast.
- **Cells:** the ID cell holds a B612 callsign (which never wraps) and an uppercase sub-ID. The title cell holds an Overpass 800 title and a detail line. The printed field boxes are at least 96px wide with a caption at the top left.
- **Holder states:** set with `data-holder`. Amber is the default, green means cleared, and red means held. A registered color property animates the holder over 400ms when state changes.
- **Marks in a box:** a grease tick means done, a grease ring means held for attention, a grease strike means not this way, and handwritten initials (CA) mean cleared by a person.
- **Variants:** a cocked strip is offset and tilted to flag it. The mini strip (54px tall, 112px ID cell) is for piles and comparisons. The cover strip stacks its rows, uses 8px corners, and prints the deck title in Display type.

**The Real Holder Rule.** A holder is a carrier the card sits in, built from layered backgrounds. Never fake one with a colored left border or a tinted card. The 2px tan rules between printed fields are print on the card and stay.

### Airfield Signs
Fixed instructions in the world's public voice. They are uppercase Overpass 800, tracked +0.04–0.06em, and never wrap.
- **Mandatory** (Mandatory Red, Legend White, black rim): stop here until cleared. It marks the PROD hold line, hold bays, the board's awaiting-clearance state, and the unsafe comparison row.
- **Location** (Sign Black, Sign Yellow legend, inset yellow border): you are here. It labels bays, page numbers, and review-loop stations. Table header rows use the same sign, with a 3px yellow underline.
- **Direction** (Sign Yellow, black legend and arrow, black rim): the way to go. Every takeaway is a direction sign.

**The Fixed Infrastructure Rule.** Signs never move. They are the infrastructure the strips move past, so they get no entrance animation, no hover, and no lift.

### Takeaway
- At most one per slide, as the last element. It is one sentence on a direction sign, with the arrow first, pinned bottom left by an auto top margin.
- On the release board, the outcome sentence becomes the takeaway only after the board completes.

### Bays, Boards, and Slots
- **Board:** a row of equal bays.
- **Bay:** an open rack with Rack Rail uprights and a faint dark floor, under a location-sign label plate. A hold bay takes the mandatory sign instead.
- **Slot:** an empty position. It may carry a short uppercase legend ("Next").
- **Route band:** the Spec, Build, and Review bays repeat on consecutive slides with a shared morph name, so one hero strip (AI-0142) travels bay to bay.

### Paper Sheets
Flight plans, test contracts, and the standing-information broadcast.
- **Body:** a top-lit card-stock gradient with 4px corners, the paper cast, and Strip Ink text.
- **Title bar:** a Sign Black bar flush with the top edge, with Legend White label caps tracked +0.1em. A second span on the right can carry a file name in Overpass Mono and Sign Yellow.
- **Rows:** definition rows divided by 1px Printed Rule. Keys are in B612 Mono caps in Faded Ink, and values are in Overpass 600 in Strip Ink.
- **Lists:** bullets on a sheet are ink squares. A lock list pairs a padlock glyph with a PASS readout in Pass Ink.

### Challenge-and-Response Checklist
- **Line:** each line has a 28px ink-bordered box (3px corners), the challenge in Overpass 600 at 25px, a 3px dotted Faded Ink leader, and the response in B612 Mono caps.
- **Behavior:** the runtime wraps each line in a toggle button with `aria-pressed`. A checked line gets a grease tick written over its box, and a B612 counter beneath reads "0 of 7 confirmed".
- **Focus:** a 3px Holder Blue outline, offset 6px.
- **Print:** a blank card that people can keep.

### Release Board (interactive)
- **Panel:** a recessed 8px panel with a Rack Rail border. Its header carries a B612 state readout in Sign Yellow, which becomes a mandatory sign while the board waits for a human clearance.
- **Rows and columns:** the column heads are uppercase Overpass 800, and the active column turns Sign Yellow (Grease Under Lamp while waiting). Strips are the rows, with 80px stage boxes.
- **Marks:** a grease tick means pass or clear, a ring means hold or rollback, a tilted Faded Ink stamp means a rubber-stamp review, a faint slash means skipped, and a red tint means an incident.
- **Outcome column:** Pass Ink when landed, and Grease Pencil when held, rolled back, or an incident.
- **Console line:** a live region announces each step under the strips.
- **Static state:** print and no-JavaScript views show the authored Evidence-first snapshot, with a one-line Vibe-shipping comparison of mini strips.

### Buttons (console keys)
- **Shape:** raised graphite caps with 6px corners, 42px tall, padding 9px 15px 6px, and legends in uppercase Overpass 800 tracked +0.06em.
- **Default:** a graphite gradient with a Lamp Light legend.
- **Primary:** a pale card-stock cap with a Sign Black legend.
- **Clear:** a Sign Yellow cap ringed in black and then yellow, like a direction sign made into a key. It is the human gate, and it is disabled until the board reaches review.
- **Hover / Focus / Active:** hover brightens by 12%. Pressing makes the key travel 2px and shrinks its contact line. Focus is a 3px Edge Light outline offset 3px. A disabled key is 60% opacity with a not-allowed cursor.
- **Selects:** selects use the same caps with a Lamp Light chevron.

### Chips
- **Style:** paper tags on the console, in card stock with Strip Ink, 4px corners, and the chip cast. File-name chips use Overpass Mono 700. Evidence tags such as "Intent matches the diff" use Overpass 600.

### Code, Tables, and Quotes
- **Inline code:** Overpass Mono at 0.8em on Raised Graphite, with 4px corners.
- **Code blocks:** a Deep Well with a 1px Rack Rail border and 6px corners. Keywords are Sign Yellow, titles are Edge Light, and comments are Dimmed Lamp italic.
- **Tables:** the header row is a location sign. Body rows are ruled in Rack Rail with Raised Graphite zebra rows.
- **Quotes:** a card-stock note opened by a grease-pencil quotation mark in Permanent Marker.

### Grease Pencil (inline)
- **Style:** initials or a short note in Permanent Marker, tilted −4°. Use Grease Pencil on paper and Grease Under Lamp on the console.
- **Bookend marks:** the bookends carry their own marks: a grease underline under "Questions?" and a clearance tick after "Thank You!".

### Navigation
- **Deck navigation:** Marp's arrow keys and clicker drive the deck, and the page-number location sign is the only navigation chrome.
- **Interactive controls:** controls keep their own keys. A navigation key pressed on a focused button releases focus and goes back to the deck, so a presenter's clicker never gets stuck.

### Motion Verbs
Motion belongs to the objects above. The house ease is a fast-out, long-settle curve, `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Slot:** a strip or list item slides in from 56px to the right, at 560–900ms with a 70–160ms stagger.
- **Print:** a strip or sheet is revealed top-down while dropping 28px, at 800–900ms.
- **Drop:** a pile lands from 46px above.
- **Ink:** a grease mark reveals left to right, at 380–700ms, after its object lands.
- **Cock:** the strip shifts out of line.
- **Clear:** the holder turns green or red at the end of the sequence.
- **Cross:** a cleared strip crosses the hold line.
- **Go-around:** a strip lifts with a deep cast and falls back into hold.
- **Handoff:** the review token travels worker, reviewer, worker, reviewer, you, and its holder changes with each pass.
- **Transitions:** `strip` is a 650ms push, and the outgoing slide dims to 55%. `handoff` is a 900ms clear-then-arrive, so only the morphing strip is visible mid-flight.
- **Morphs:** one `fs-hero` per slide, plus the `fs-route` band.

**The Complete Without Motion Rule.** The authored markup is the finished state. Motion only animates into it, with backwards fills, so nothing lingers. Every effect is gated by the live audience slide (`fs-live`: visible tab, not printing, no reduced-motion preference) and settles within 4.7 seconds. Print restores the authored snapshot, and runtime-only content has a static twin.

## Do's and Don'ts

### Do:
- **Do** put every slide on Graphite Console (#1b2023) with Lamp Light text, and put evidence (strips, sheets, chips, quotes) on Buff Card Stock (#efe6cc) in Strip Ink (#1a2540).
- **Do** end a content slide with at most one takeaway: a direction sign pinned bottom left, with clear air between it and the composition above.
- **Do** show a change's state with its holder (amber in progress, green cleared, red held) and a person's decision with grease (tick, ring, strike, initials).
- **Do** set callsigns, field captions, and readouts in B612 Mono, and file names, paths, and commands in Overpass Mono.
- **Do** keep labels at about 18px or more and sentences at about 22px or more at 1280×720.
- **Do** keep every motion finite. Play it only on the live audience slide, use backwards fills, and let it settle within 4.7 seconds.
- **Do** author the finished state in markup, so reduced-motion, print and PDF, presenter, and no-JavaScript views show a complete slide, and give runtime-only content a static twin.
- **Do** carry one strip across consecutive slides with the shared hero morph name, one hero per slide.
- **Do** label illustrative boards, changes, and percentages as fictional or illustrative on the slide itself.

### Don't:
- **Don't** use the neon AI-talk look or a white corporate template. The lightest surface is buff card stock, and light comes only from the lamp, the faint edge light, and real signal lights.
- **Don't** fake a holder with a colored left border or a tinted card. Build it from layered backgrounds, and keep the 2px printed field rules inside the card.
- **Don't** swap the reds. Mandatory Red goes only on signs, Red Holder only on strips, and Grease only on a person's marks and the holds they cause.
- **Don't** pick holder colors for variety or give the deck's strips a fourth state color.
- **Don't** set file paths or anything with a period in B612 Mono, and don't put `·` in Overpass text.
- **Don't** animate signs or loop motion. The only repeating motion is the active-box pulse while a presenter-started board runs.
- **Don't** suggest lift with x-offset shadows, colored shadows, or glows. Lengthen the cast instead.
- **Don't** reuse the sub-floor sizes (13–17px) of strip captions, slot legends, and release-board controls as a scale step for new text.
