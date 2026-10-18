---
name: Change Order
description: "Shipping with AI Without Shipping Regret, drawn as a revision-controlled drawing set on drafting film."
colors:
  red: "#d23b2f"
  red-ink: "#b42d22"
  amber-ink: "#8a5d00"
  amber-wash: "rgb(226 166 43 / 0.24)"
  green-ink: "#276b48"
  guide: "#8fc0d9"
  film: "#eef0ec"
  ink: "#23272b"
  ink-soft: "#4a5157"
  rule: "rgb(35 39 43 / 0.25)"
typography:
  display:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "88px"
    fontWeight: 700
    lineHeight: "93px"
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: "54px"
    letterSpacing: "-0.005em"
  title:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.1
  note:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0"
  body-sm:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.3
  caption:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.25
  part-title:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.06em"
  label:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.07em"
  block-entry:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1
  stamp:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.14em"
  stamp-sm:
    fontFamily: "CO Saira, Saira Semi Condensed, Arial Narrow, sans-serif"
    fontSize: "19px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.1em"
  hand:
    fontFamily: "CO Hand, Architects Daughter, cursive"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1.25
  code:
    fontFamily: "CO Mono, Overpass Mono, ui-monospace, monospace"
    fontSize: "0.84em"
    fontWeight: 400
rounded:
  none: "0px"
  control: "2px"
  ring: "50%"
spacing:
  frame: "28px"
  frame-inner: "30.5px"
  block-height: "78px"
  margin: "76px"
  note-gap: "16px"
  item: "10px"
  gap: "14px"
  cell-x: "16px"
  heading-gap: "26px"
  column-gap: "48px"
components:
  title-block:
    backgroundColor: "{colors.film}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    height: "{spacing.block-height}"
    width: "494px"
  sheet-note:
    textColor: "{colors.ink}"
    typography: "{typography.note}"
  delta-tag:
    backgroundColor: "{colors.film}"
    textColor: "{colors.red-ink}"
    width: "44px"
    height: "40px"
  initials:
    textColor: "{colors.red-ink}"
    typography: "{typography.hand}"
    rounded: "{rounded.ring}"
    padding: "6px 9px 3px"
  stamp-preliminary:
    textColor: "{colors.amber-ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.none}"
    padding: "7px 16px 5px"
  stamp-hold:
    backgroundColor: "{colors.amber-wash}"
    textColor: "{colors.amber-ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.none}"
    padding: "7px 16px 5px"
  stamp-issued:
    textColor: "{colors.green-ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.none}"
    padding: "7px 16px 5px"
  stamp-withdrawn:
    textColor: "{colors.red-ink}"
    typography: "{typography.stamp}"
    rounded: "{rounded.none}"
    padding: "7px 16px 5px"
  stamp-sm:
    typography: "{typography.stamp-sm}"
    rounded: "{rounded.none}"
    padding: "5px 10px 3px"
  drawing-schedule:
    backgroundColor: "{colors.film}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "10px 16px 8px"
  change-tag:
    backgroundColor: "{colors.film}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "58px"
  button-default:
    backgroundColor: "{colors.film}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 14px 6px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.film}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 14px 6px"
  button-approve:
    backgroundColor: "{colors.film}"
    textColor: "{colors.red-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 14px 6px"
  chip-file:
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.none}"
    padding: "4px 10px 2px"
  chip-check:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "7px 14px 5px 8px"
  checklist-row:
    textColor: "{colors.ink}"
    height: "42px"
    padding: "0 18px"
---

# Design System: Change Order

## Overview

**Creative North Star: "The Change Order"**

Every AI-written change is a drawing revision: clouded where it changed, and not issued until someone checks and approves it. The deck is a drawing set on drafting film. Each slide is a sheet with a drawn frame and zone references, a title block that numbers it, and graphite lettering set on non-photo-blue guide lines. Change is marked the way a checker marks a drawing, with red revision clouds, delta tags, strike-throughs and initials, and status is applied with rubber stamps.

Density is a working drawing, not a poster. A sheet carries one lettered statement, one drawn part (a register, a schedule, a spec sheet, a checklist) and one note. Caps labels letter the parts at 18px; anything read as a sentence stays large enough for the back of a conference room. Graphite carries the content, and color always means something: red for change and decision, stamp inks for status. The world refuses the neon AI-talk deck, the white corporate template, and borrowed aviation.

Motion draws the sheet while the audience watches, then holds still: lettering inks in from the left, clouds trace around their box, stamps land with a press, and the checker's initials go on last. The authored markup is always the finished drawing.

**Key Characteristics:**
- Flat graphite ink on pale drafting film; no cast shadows and no glow.
- A drawn sheet frame with zone references, and a title block (Checked, Approved, Rev, Sheet) on every interior sheet.
- One condensed engineering face for all lettering, a felt-pen hand only for the checker, and a mono only for files and commands.
- Red is the checker's pen: clouds, deltas, strikes, initials, withdrawals.
- Rubber stamps in amber (not yet), green (issued) and red (withdrawn).
- Finite motion on the live audience sheet only; every static view is complete.

### Named Rules
**The Static Sheet Rule.** The authored markup is the finished drawing; motion only reveals it. Effects play once on the live audience sheet (`section.co-live`), fill backwards, and settle within 4.95s. Print, reduced-motion, presenter and no-script views show the same complete sheet. The one infinite motion is the active-cell pulse while a presenter-started schedule runs.

**The Honest Sheet Rule.** Simulated data is labeled on the sheet itself, in label lettering ("Illustrative: ...", "Fictional changes, illustrative only"), never only in speaker notes.

## Colors

Monochrome graphite on drafting film, with one red pen for change and decision, three stamp inks for status, and non-photo blue kept for 1px lettering guides.

### Primary
- **Redline** (#d23b2f): the checker's pen as line work. Revision clouds, delta triangles, strike-throughs, leader lines and arrowheads, link underlines (2px), the running column's underbar and dot, the schedule's 4px progress rule, focus outlines (3px), and the Approve control's border.
- **Redline Ink** (#b42d22): red as letters. The hand face, initials, delta letters, the Withdrawn, Incident and Void stamps, the active column label, and the tick a checker puts in a box.

### Secondary
- **Stamp Amber Ink** (#8a5d00): "not yet." Preliminary, Draft, Not for issue, Hold and On hold.
- **Stamp Amber Wash** (rgb(226 166 43 / 0.24)): the only tint fill in the system, behind Hold and On hold stamps.
- **Stamp Green Ink** (#276b48): Issued, and Approved for issue.

### Tertiary
- **Non-Photo Blue** (#8fc0d9): construction lines under lettering, always 1px. At about 1.7:1 on film it is meant to be barely there; it never carries text, fills or borders.

### Neutral
- **Drafting Film** (#eef0ec): the ground of every sheet and the fill of every drawn part, so parts sit cleanly over the frame.
- **Graphite Ink** (#23272b): all lettering, the frame, outlines, ticks and list dashes.
- **Graphite Soft** (#4a5157): label lettering, captions, signature lines, struck text, and the empty rows of a register.
- **Hairline Rule** (rgb(35 39 43 / 0.25)): row rules inside tables and schedules; graphite at 25%.

### Named Rules
**The Redline Rule.** Red marks only what changed, what was decided, and where attention goes next (the running stage, the focus ring, a link's underline). It never fills a surface and never sets headings or prose.

**The Two Reds Rule.** Red strokes use Redline; red letters use Redline Ink, which holds about 5.5:1 on film where Redline holds about 4.2:1.

**The Stamp Ink Rule.** Each stamp ink has one meaning: amber is not yet, green is issued, red is withdrawn, void or incident. Stamp inks color stamps and the schedule's outcome marks, and nothing else.

## Typography

**Display Font:** CO Saira, the bundled Saira Semi Condensed (400 to 800), with Arial Narrow and sans-serif
**Body Font:** CO Saira (the same family)
**Label/Mono Font:** CO Mono, the bundled Overpass Mono (400, 700), for file names, paths and commands; CO Hand, the bundled Architects Daughter, for the checker's markup

**Character:** One condensed engineering grotesque letters every sheet, from the 88px title down to 18px caps, the way one drafter letters a whole set. A felt-pen hand appears only when the checker writes; a mono appears only when the sheet quotes a file or a command.

All three faces ship beside the deck (`slides/assets/fonts/`) with `font-display: block`, and the runtime preloads them so a transition never captures text that has not loaded.

### Hierarchy
- **Display** (700, 88px, 93px line, -0.005em): the cover title, lettered on a cap guide and a baseline guide. The closing sheets letter their single heading on the same construction, from 64px to 104px.
- **Headline** (700, 48px, 54px line, -0.005em): one per sheet, balanced, up to 1080px wide, on its baseline guide. Sub-heads on the closing sheet drop to 34px on a 40px line, guide in the same place.
- **Title** (700, 28px, 1.1): names inside drawn parts, such as reviewer desks and schedule row heads (27px); the regret cards' heads go to 34px.
- **Note** (600, 28px, 1.25): the one note at the foot of a sheet.
- **Body** (500, 26px, 1.35): sentences on the sheet and list items.
- **Body Small** (500, 22px, 1.3): table cells, schedule entries and definitions (22 to 24px).
- **Caption** (500, 20px, 1.25, Graphite Soft): one-line supporting text under a bold name: a role, an exposure, a tool note (20 to 21px). Never a paragraph.
- **Part Title** (700, 20px, 1.2, 0.06em, uppercase): the title strip of a drawn part and checklist responses (20 to 22px).
- **Label** (600, 18px, 1.1, 0.07em, uppercase, Graphite Soft): field labels, column heads, title-block cells, the NOTE marker, the author line (at 0.02em), and illustrative-data labels.
- **Block Entry** (600, 26px, 1): the Rev letter in the title block; the sheet number sets at 700.
- **Stamp** (800, 26px, 0.14em, uppercase) and **Stamp Small** (800, 19px, 0.1em): rubber stamps. Stamps inside schedule cells set at 18px, 0.08em.
- **Hand** (CO Hand 400, 26px, 1.25, Redline Ink): the checker's notes and initials, 22 to 34px by context.
- **Code** (CO Mono 400, 0.84em): file names and commands inline; 20 to 22px in chips, titles and tables.

### Named Rules
**The Three Pens Rule.** Saira letters everything typeset. The hand face is only the checker's red pen: markup, initials, the asterisk on a weakened test. The mono face is only file names, paths and commands. If a line is neither the checker's markup nor a literal path or command, it is Saira.

**The Lettering Guide Rule.** Headings sit on non-photo-blue guides, the way a drafter letters a sheet. A headline gets one 1px guide at its baseline (41px down a 54px line); a display heading gets a cap guide and a baseline guide. Guides start 10px before the first letter and run 26px past the last.

**The Floor Rule.** At 1280x720, label lettering is never below 18px and anything read as a sentence is never below 22px; one-line captions may sit at 20 to 21px. The change tag's cell captions (16px), its small delta, and the schedule's outcome stamps (17px) sit below the floor inside compact drawn parts. They are known exceptions, not precedents.

## Layout

The sheet is fixed at 1280x720 with no breakpoints; the HTML deck and the PDF show the same sheet.

- **Frame.** One drawn image (`assets/sheet.svg`) puts a 2.5px graphite frame line 28px in from every edge, 1.5px zone ticks in the margin, and zone references 8 to 1 across and D to A down. It is a background image, so every sheet, photo sheets included, carries the same border. Photographs are clipped to the frame.
- **Content column.** 76px side margins give a 1128px column; the heading starts 62px from the top edge.
- **Title block.** Bottom right, hung on the frame's inner edge (30.5px): 78px tall, with cells of 150, 150, 90 and 104px for Checked, Approved, Rev and Sheet, a 2.5px top and left edge, and 1.5px dividers. The sheet number (n / total) is the pagination. The author line, "Chris Ayers - https://chris-ayers.com", sits outside the block at the bottom left.
- **Sheet note.** Spans the column, 16px above the title block (124px from the bottom edge).
- **Composition.** A heading, one drawn part, a note. Two-part sheets put the drawing on the left (580 to 610px wide) and short notes on the right (about 470px). Drawn parts are placed on the 1128px measure inside the frame.
- **Rhythm.** 10px between list items; 14px between a mark and its text; cells padded 10px top, 8px bottom and 14 to 16px at the sides; 26px from a heading down to its drawing; 48px between columns.

### Named Rules
**The Frame Rule.** Nothing crosses the frame line. The 28px margin holds only zone ticks and references; photos, tables and stamps stay inside the frame and clear of the title block.

**The Title Block Rule.** Every interior sheet carries the title block. Its signatures start as blank dotted lines, and only the sheet's state fills them: checked, approved, and revision A, B or C (`checked`, `approved`, `rev-a/b/c`). A sheet that has not earned a signature shows the empty line.

**The One Note Rule.** A content sheet ends with one note at most: a NOTE label and one line in Note lettering, 16px above the title block. Reference sheets may put a plain 22px source line in the same place instead.

## Elevation & Depth

Flat. Drawings are ink on film, so depth comes from drawing order and line weight: a drawn part is filled with film and outlined in heavy line, and that is all that separates it from the sheet. There are no blurred or cast shadows anywhere. Where the build uses `box-shadow`, it draws zero-blur line work. Photographs are printed onto the film with a multiply blend inside an ink border rather than laid over it.

### Shadow Vocabulary
- **Stamp double ring** (`box-shadow: inset 0 0 0 2.5px var(--film), inset 0 0 0 4px currentColor`): the inner ring of a rubber stamp, inside its 3.5px border (2px and 3px on small stamps).
- **Running column underbar** (`box-shadow: inset 0 -4px 0 var(--red)`): marks the schedule column now in progress.
- **Control shade line** (`box-shadow: 0 2px 0 var(--ink)`, Redline on Approve): a heavier drafting line along a control's bottom edge.

### Named Rules
**The Flat Ink Rule.** No blur and no glow. A box-shadow with a blur radius is not part of this world; zero-blur rings, underbars and shade lines are line work and belong.

## Shapes

Square-cornered drafting geometry, drawn in a strict set of line weights.

- **Line weights:** heavy 2.5px graphite for the frame, the title block's outer edges and the outline of every drawn part; medium 1.5px for cell dividers, title-strip rules and chips; 1px Hairline Rule between rows; 2px for compact parts (the change tag, controls, checkboxes) and for dotted signature lines and leaders; Redline markup at 2.2 to 2.6px; guides at 1px.
- **Corners:** square. Controls soften to 2px. The only round forms are made by hand: the ring around the checker's initials (an ellipse) and the dot on a running stage.
- **Revision clouds:** drawn SVG assets (`assets/clouds/`) of scalloped arcs with a 2.2 to 2.6px Redline stroke that does not scale with the box. One cloud per change, hung 16 to 26px outside a fixed-size box.
- **Delta tag:** a Redline triangle (2.6px stroke) filled with film, 44x40px, carrying the revision letter in Redline Ink at 700 20px.
- **Ticks:** one drawn check glyph. In graphite it records evidence (tests passed, a ring held, a contract locked); in a 2px box and in Redline Ink it is the checker's own tick.
- **Lean:** hand-applied marks are rotated. Stamps lean -4 to -8 degrees (the schedule's stamp mark leans +6), initials -4, strike-throughs -1.5 to -4, outcome stamps -2.5.

### Named Rules
**The Drawn Cloud Rule.** A revision cloud is always a drawn asset, never a CSS border, radius or dash pattern. Masks never load from asset files, because Chrome drops them from PDF export; inline data-URI and gradient masks are fine.

**The Hand-Placed Lean Rule.** Only what a person applies by hand is rotated: stamps, initials, strike-throughs. Typeset lettering, frames and drawn parts stay square.

**The Two Ticks Rule.** A graphite tick is recorded evidence; a red tick in a box is the checker's. Never swap them.

## Components

### Sheet Chrome (signature)
The drawing's own furniture, on every sheet.
- **Frame and zones:** see Layout.
- **Title block:** Label lettering in each cell; the Rev letter in Block Entry; the sheet number at 700 26px, centered in the Sheet cell. Signatures are 2px dotted Graphite Soft lines until filled with the initials "CA" in the hand face at 30px.
- **States:** on the live issue schedule, Approved stays blank until someone passes the review gate; completing the checklist initials the block. Live, a signature inks in after the sheet's content (450ms).
- **Cover variant:** the cover drops the header block for a full title block (Drawn across the top with the author at 30px and role in Caption; then Checked, Approved and Rev in 160px cells) and hangs a revision table (Rev, Description, By, Appd; 21px cells, Label heads, initials in the hand face) from the top-right corner of the frame.

### Revision Cloud and Delta (signature)
The mark of a change.
- **Use:** a cloud goes around exactly what changed: a phrase in the title, a 300x196px regret card, a schedule cell, a withdrawn table row, a change-tag cell. A delta tag beside it carries the revision letter (A, B, C) that matches the revision table.
- **Annotation:** a hand note may hang off a cloud on a 2px Redline leader ending in an arrowhead.
- **Motion:** the cloud traces around its box (a conic mask sweep, 700 to 1100ms, linear); the delta pops in (300ms, slight overshoot). The full cloud is the resting state.

### Checker's Markup
- **Notes:** the hand face in Redline Ink, 22 to 34px, short and direct ("Agent edits a test? Hold.").
- **Initials:** "CA" in a 2px Redline ellipse, padding 6px 9px 3px, leaning -4 degrees.
- **Strike-throughs:** a Redline bar (2.5px through text, 3.5px through a stamp) that leaves the struck word readable; struck text turns Graphite Soft. The struck line in the contact blocks is authored and stays.
- **Motion:** markup inks in after the content it marks; strikes draw from the left (300ms).

### Rubber Stamps (signature)
Status, applied by hand.
- **Shape:** 3.5px border in the stamp's ink with an inner ring (see Elevation), square, padding 7px 16px 5px, Stamp lettering, leaning -6 degrees by default.
- **Small:** 2.5px border, Stamp Small lettering, padding 5px 10px 3px, for register status and scenario names; 18px inside schedule cells.
- **Inks:** Preliminary, Draft and Not for issue in Amber; Hold and On hold in Amber on the Amber Wash; Issued and Approved for issue in Green; Withdrawn, Incident and Vibe shipping in Red.
- **Motion:** stamps land with a press: from 150% scale and transparent, overshooting to 95%, then rest (300 to 320ms).

### Drawing Schedules (cards and containers)
Registers, general notes, spec sheets, withdrawal records, tool maps, the issue schedule and the check card share one construction.
- **Corner Style:** square.
- **Background:** Drafting Film, so the part covers the sheet frame and guides.
- **Shadow Strategy:** none (see Elevation).
- **Border:** 2.5px graphite outline; 1.5px column dividers and title-strip rule; 1px Hairline Rule rows, 42 to 66px tall.
- **Internal Padding:** cells 10px 16px 8px; title strip in Part Title lettering with a mono file name or a label at the right.
- **Definitions:** a fixed first column (96 to 128px) of Label lettering beside 23px entries.
- **Empty rows** stay drawn in Graphite Soft, so a register shows its unused capacity.
- **Motion:** rows fade or ink in one at a time, top to bottom.

### Change Tag (signature)
One change, AI-0142, carried from sheet to sheet.
- **Shape:** a 58px tag with a 2px graphite outline on film: a small delta (34x31px), the ID at 700 22px over a Caption subtitle, then three 58px cells (Spec, Test, Rev) with label captions above a graphite tick or the checker's initials.
- **Revision:** the cell that changed on this sheet is clouded, and the delta letter follows the revision table (A, then B).
- **Morph:** with the handoff transition the tag keeps its identity across sheets (`view-transition-name`), so the change visibly moves from spec to build to review. Morphs are off in print and reduced motion.

### Issue Schedule (interactive)
A drawing schedule the presenter runs live.
- **Grid:** a 280px change column, six 100px stage columns (Tests, Review, Ring 0 team, Ring 1 1%, Ring 2 10%, Broad 100%), and an outcome column; rows 66px.
- **Cell marks:** graphite tick (pass, landed); clouded tick with a hand asterisk (passed on an edited test); faded tick with a Redline slash and a hand "Back" (rolled back); initials (cleared by review); stamps (Hold, Incident); a struck label (skipped); a 22px dash (not run); a 14px Redline dot (running, pulsing only while the schedule runs).
- **Outcome:** a small stamp (Issued, On hold, Withdrawn, Incident) above a 20px bold result.
- **Console:** a NOTE label and a live status line, a 4px Redline progress rule along the bottom edge, and a hand-lettered next step when the run completes.
- **Honesty:** the key line reads "Fictional changes, illustrative only".
- **Static state:** controls show only in the live audience window. The static and PDF sheet shows the finished Evidence-first outcome with a one-line Vibe-shipping comparison beneath it.

### Buttons
Schedule controls, drawn like the parts around them.
- **Shape:** square with 2px corners, a 2px graphite border and a 2px graphite shade line along the bottom edge.
- **Default (Step, Replay):** film fill, graphite Label lettering, padding 8px 14px 6px.
- **Primary (Run board):** graphite fill, film lettering.
- **Approve:** Redline border and shade line, Redline Ink lettering. While a decision is awaited it nudges twice (lifts 3px, shade line to 5px, 900ms).
- **Selects** match the default button, with a drawn chevron and sentence-case lettering.
- **Hover / Focus:** no hover treatment; focus is a 3px Redline outline at 2px offset. Disabled controls drop to 42% opacity. Arrow and page keys pressed on a focused control return to the deck.

### Chips
- **File chips:** mono at 21px in a 1.5px graphite box, padding 4px 10px 2px, 8 to 10px apart.
- **Check chips:** a 1.5px box holding a 22px checkbox with a Redline Ink tick and a 21px label, padding 7px 14px 5px 8px. Live, the ticks pop in one after another.

### Checklist
Challenge and response, ticked by a checker.
- **Rows:** 42px tall, padding 0 18px: a 26px checkbox with a 2px graphite border, the challenge at 24px, a 2px dotted Graphite Soft leader, then the response in Part Title lettering.
- **State:** each row is a toggle button; a checked row takes the red tick (pops in, 220ms). When every row is checked, the card's Approved for issue stamp lands and the title block is initialed. The PDF prints a blank card.

### Lists and Links
- **Bullets** are 10x2.5px graphite dashes with a 30px indent; numbered items use a bold numeral and period with a 38px indent; 10px between items.
- **Links** keep the text color with a 2px Redline underline, offset 4px.

### Detail Views (photographs)
- A photo is a detail on the sheet: inside the frame, in a 2.5px graphite border on film, printed with a multiply blend, and labeled in Label lettering ("Detail A"). The bio portrait is a background photo clipped to the frame; live, it develops from grayscale (1600ms).

### Sheet Note
- A NOTE marker in Label lettering, then one line in Note lettering, on a two-column grid with a 14px gap. Live, it fades in at 400ms.

### Transitions
- **Sheet** (the default): the next sheet is laid on the set in 650ms; the incoming sheet slides 56px and fades in while the outgoing one slides 28px away.
- **Handoff:** a 900ms cross-fade with a gap in the middle (the outgoing sheet is gone by 40%, the incoming one appears from 55%), so the change tag can morph between sheets.

## Do's and Don'ts

### Do:
- **Do** letter each sheet's headline at 48px on a 54px line with its 1px non-photo-blue baseline guide.
- **Do** cloud exactly what changed with a drawn cloud asset, and tag it with the delta letter that matches the revision table.
- **Do** fill title-block signatures only from the sheet's state (`checked`, `approved`, `rev-a/b/c`), and leave the dotted line empty until the sheet earns it.
- **Do** end a content sheet with one note, 16px above the title block.
- **Do** label simulated data on the sheet itself, in Label lettering.
- **Do** build new drawn parts from film fill, a 2.5px graphite outline, 1.5px dividers and 1px Hairline Rule rows.
- **Do** author the static sheet first: anything the runtime changes gets a static twin that prints (`co-static`) and a live twin shown only in the audience window (`co-dynamic`).
- **Do** gate motion to the live audience sheet (`section.co-live`) inside a no-preference reduced-motion query, with backwards fills, finished by 4.95s.

### Don't:
- **Don't** use red for anything that did not change, was not decided, and is not the next point of attention: no red headings, red emphasis or decorative red rules.
- **Don't** set any text in non-photo blue, or draw it heavier than 1px.
- **Don't** set prose in the hand face, or anything but file names, paths and commands in the mono.
- **Don't** add blurred shadows or glows.
- **Don't** fake a revision cloud with a CSS border, radius or dash pattern, or load a mask from an asset file.
- **Don't** rotate typeset lettering, frames or drawn parts; only stamps, initials and strikes lean.
- **Don't** add looping motion; the only loop is the running-cell pulse while a presenter-started schedule runs.
- **Don't** put content in the 28px zone margin or over the title block.
- **Don't** drift toward the neon AI-talk deck, a white corporate template, or borrowed aviation.
- **Don't** letter below the floor (18px labels, 22px sentences) to fit content onto a sheet.
- **Don't** reach for the template's layout classes (`lead`, `invert`, `columns3`) when a drawn part fits; they stay only for template compatibility.
