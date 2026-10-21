---
version: 1
slug: "slides-slides-md"
primary_target: "slides/Slides.md"
related_targets: ["slides/themes/custom-default.css","slides/assets/deck.js"]
---

## Scope and mode

The talk deck `slides/Slides.md`: Persuade. A mixed room of developers and leads should leave able
to name the evidence a change needs before it ships, in whatever coding agent they use.

## Audience, job, proof, constraints

- Presented live from GitHub Pages HTML; read later as HTML or PDF.
- Proof is demonstrated, not claimed: the release board simulation shows rings, a human
  approval gate, and a rollback. All boards, changes, and percentages are illustrative.
- Tool-neutral: practices map across GitHub Copilot, Claude Code, and open conventions
  (AGENTS.md, Agent Skills, MCP, OpenSpec, Spec Kit). Claude-only framing is out.
- Bookend contact blocks stay exactly as authored.
- Normal teaching slides carry one idea. Implementation examples belong on the main slides;
  supporting explanation belongs in speaker notes.
  Keep only the release-board demo and consolidated cross-tool reference intentionally dense.
  Split overloaded slides instead of shrinking type; there is no target slide count.
- The main flow is preparation, meeting follow-up, reviewed ticket updates, research,
  worktree experiments, implementation, verification, and safe release. Use the recurring
  questions: explain the change, verify it, and recover safely.
- Introduce the meeting/request and draft ticket before the setup detail. Planning artifacts
  precede agreement; worker and parallel-delivery setup precede implementation; reviewer
  configuration and evidence precede the green approval checkpoint.
- User-directed: weave the implementations into the main flow at the point each practice is
  used. Do not move setup examples after the conclusion. This is a 60-minute practical talk,
  not a high-level AI overview.
- Do not imply every change needs four agents or every Copilot has meeting and ticket access.

## Direction and memorable moment

The category standard, light (seed e24629bc, re-roll 1). After seeing six rendered worlds, the
speaker turned down metaphor worlds (Flight Strip Board, then Change Order) and chose the familiar
release-tooling deck, set light. Craft bar: the speaker's marp-demo decks and GitHub Universe
keynotes. The cover runs AI-0142's checks green one by one (spec, tests, a human approval, rings
to 100%) before it reads Landed. The main story follows AI-0142 from a proposed requirement
through research and alternative experiments to the Spec, Build, and Review lanes. Adjacent
board slides can use native morphs; narrative order takes precedence over transitions.

## Source policy

- Preserve the author's further-reading links. Cite workflow-specific documentation in the
  relevant notes and README. Do not publish real meeting content or work-item data in examples.
