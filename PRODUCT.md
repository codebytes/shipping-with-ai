# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mixed conference room of developers and engineering leads. The developers
already write code with AI assistants and coding agents; the leads decide how
their teams adopt them. Both should leave with a practice they can apply on
Monday, not a tool pitch.

Chris Ayers presents the deck live, then shares the published HTML and PDF.

## Product Purpose

"Shipping with AI Without Shipping Regret" is a talk by Chris Ayers. Its
argument: AI makes code cheap to write; regret comes from shipping change nobody
can verify. So pair agent speed with release-engineering discipline: curated
context, small steps, tests as the contract, human review, then progressive
rollout with fast rollback.

Success: people can name the evidence a change needs before it ships, and can
spot where AI-assisted work skips that evidence.

## Positioning

The speaker works in Azure release engineering (Principal Software Engineer,
Azure EngOps AzRel, Microsoft). The talk brings production release practice to
AI-assisted development instead of treating AI as a coding novelty.

The deck demonstrates its own argument with animated, interactive simulations
built from plain Markdown, theme CSS, SVG, and small local scripts, using the
techniques Chris proved in codebytes/marp-demo.

## Operating Context

- Presented live from a browser with the arrow keys or a clicker. Interactive
  controls are used in the audience window; Marp's presenter view stays static.
- Hosted on GitHub Pages as HTML plus a PDF, with both linked from the README.
- Built by the GitHub Actions workflow with Marp CLI on pushes to `main`.
- Authored in VS Code with the Marp extension, whose preview does not run deck
  scripts.

## Capabilities and Constraints

- Marp Markdown. Decks live in `slides/`, themes in `slides/themes/`, images in
  `slides/img/`. Front matter uses `theme: custom-default`, `paginate: true`,
  and `math: mathjax` (repository instructions).
- Marp CLI v4: HTML export needs `--html`; PDF export uses `--allow-local-files`.
- HTML and PDF tell the same story. PDF pages show complete, static states,
  never mid-animation frames.
- Reduced-motion, print/PDF, presenter, and no-JavaScript views stay complete
  and readable.
- Simulations are illustrative. No real model, repository, CI system, or
  production traffic is connected.
- Contact icons load Font Awesome from a CDN. New runtime assets (scripts and
  fonts) ship locally beside the deck, following marp-demo (inferred practice,
  not separately confirmed).

## Brand Commitments

- Speaker: Chris Ayers, Principal Software Engineer, Azure EngOps AzRel,
  Microsoft. Footer: "Chris Ayers - https://chris-ayers.com".
- The contact blocks on the bio and Thank You slides stay exactly as authored,
  including the struck-through Twitter line. They were deliberately restored
  (commit 7bfa7ee).
- Animation and interaction techniques come from codebytes/marp-demo, also by
  Chris Ayers under the MIT license.

## Evidence on Hand

- References: "Rubber Duck Debugging in the Age of AI" (chris-ayers.com),
  "Augmented Coding: Beyond the Vibes" (Kent Beck), and "Context Engineering
  for Coding Agents" (martinfowler.com).
- Images: `slides/img/portrait.png` and `slides/img/questions.jpg`.
- There are no measured data, incident statistics, customer stories, or
  benchmarks for this talk. Do not invent them; any number inside a simulation
  is labeled illustrative.

## Product Principles

1. Evidence before promotion: a slide about shipping shows what proves a change
   is safe, not only what produced it.
2. Show the mechanism: animate the relationship the audience should remember;
   motion that only decorates gets cut.
3. Complete without motion: every animated idea also reads as a static slide and
   PDF page.
4. The speaker leads: slides support a live talk, and detail belongs in speaker
   notes.
5. Honest demos: simulations say what they are and never imply real telemetry.

## Accessibility & Inclusion

Carried over from marp-demo's standards:

- WCAG 2.2 AA text contrast, with type sized to read from the back of a
  conference room.
- Respect `prefers-reduced-motion`. Decorative motion settles within five
  seconds (WCAG 2.2.2). Interactive controls are keyboard operable and labeled.
