---
marp: true
lang: en
title: Shipping with AI Without Shipping Regret
description: Pair AI coding speed with release-engineering discipline, from curated context to a rehearsed rollback.
theme: custom-default
paginate: true
math: mathjax
transition: strip
footer: 'Chris Ayers - https://chris-ayers.com'
---

<!-- _class: invert cover -->
<!-- _paginate: skip -->
<!-- _footer: "" -->

<div class="cover-runway">
<div class="strip strip-cover" data-holder="green">
<b><span>SHIP-AI</span><small>Agent + human</small><small>Ring 0 to broad</small></b>
<div class="strip-title">

# Shipping with AI<br>Without Shipping Regret

</div>
<div class="strip-fields"><i>Spec</i><i>Tests</i><i>Review</i><i>Rollout</i><em class="grease">Clr · CA</em></div>
</div>
<div class="hold-line" aria-hidden="true"><span class="sign hold">Prod</span></div>
</div>

<p class="cover-byline"><strong>Chris Ayers</strong><span>Principal Software Engineer</span><span>Microsoft</span></p>

<script src="assets/flight-strip.js" defer></script>

<!--
The strip is the talk's thesis: a change does not move until someone writes the evidence on it.

In the HTML deck the title strip prints, gets four grease-pencil ticks (spec, tests, review,
rollout), a clearance initialed CA, and only then crosses the hold line at the red PROD sign.
On an airfield, a red mandatory sign marks where you stop and wait for a clearance.

The visual language is the air traffic control flight progress strip: one strip per flight,
moved from bay to bay as clearances are given. Every board, change, and number in this deck is
illustrative. No real model, repository, pipeline, or production traffic is connected.
-->

---

![bg left:40%](./img/portrait.png)

## Chris Ayers

_Principal Software Engineer_\
_Azure EngOps AzRel_\
_Microsoft_

<i class="fa-brands fa-bluesky" aria-hidden="true"></i> BlueSky: [@chris-ayers.com](https://bsky.app/profile/chris-ayers.com)\
<i class="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn: [chris\-l\-ayers](https://linkedin.com/in/chris-l-ayers/)\
<i class="fa fa-window-maximize" aria-hidden="true"></i> Blog: [https://chris-ayers\.com/](https://chris-ayers.com/)\
<i class="fa-brands fa-github" aria-hidden="true"></i> GitHub: [Codebytes](https://github.com/codebytes)\
<i class="fa-brands fa-mastodon" aria-hidden="true"></i> Mastodon: [@Chrisayers@hachyderm.io](https://hachyderm.io/@Chrisayers)\
~~<i class="fa-brands fa-twitter" aria-hidden="true"></i> Twitter: @Chris_L_Ayers~~

---

<!-- _transition: strip -->

## Writing code got cheap. Knowing it works didn't.

<div class="board shift-board">
<div class="bay" data-label="Printed by agents">
<div class="pile" role="group" aria-label="Seven agent-written changes waiting for evidence">
<div class="strip mini"><b>AI-0142</b><span><strong>Keyboard nav for search</strong></span></div>
<div class="strip mini"><b>AI-0143</b><span><strong>Retry on HTTP 503</strong></span></div>
<div class="strip mini"><b>AI-0151</b><span><strong>CSV export for reports</strong></span></div>
<div class="strip mini"><b>AI-0157</b><span><strong>Refactor checkout totals</strong></span></div>
<div class="strip mini"><b>AI-0158</b><span><strong>Fix flaky date test</strong></span></div>
<div class="strip mini"><b>AI-0160</b><span><strong>Rename config keys</strong></span></div>
<div class="strip mini"><b>AI-0162</b><span><strong>Paginate the audit log</strong></span></div>
</div>
</div>
<div class="bay cleared" data-label="Cleared for production">
<div class="strip mini" data-holder="green"><b>AI-0131</b><span><strong>Cache warm-up</strong></span><i class="ok">Clr</i></div>
<div class="strip mini" data-holder="green"><b>AI-0138</b><span><strong>Null-safe parser</strong></span><i class="ok">Clr</i></div>
<div class="slot">Awaiting evidence</div>
</div>
</div>

<p class="takeaway">Throughput is set by clearances, not by printing.</p>

<!--
Agents print strips fast. Clearances still take evidence, and evidence still takes people.
The pile on the left lands in under a second in the HTML deck; the cleared bay fills slowly.

This board is a metaphor, not measured data. Seven printed and two cleared is illustrative.

Kent Beck draws the line between vibe coding and augmented coding: in augmented coding
"you care about the code, its complexity, the tests, & their coverage."
Source: https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes
-->

---

## Regret is change you can't explain, verify, or undo.

<div class="regret">
<div class="strip cocked" data-holder="red"><b>WHY?<small>No context</small></b><span><strong>Can't explain it</strong><small>Nobody can say why the diff looks like this.</small></span><i class="hold">Hold</i></div>
<div class="strip cocked" data-holder="red"><b>PROOF?<small>No evidence</small></b><span><strong>Can't verify it</strong><small>The tests were edited until they passed.</small></span><i class="hold">Hold</i></div>
<div class="strip cocked" data-holder="red"><b>UNDO?<small>No way back</small></b><span><strong>Can't undo it</strong><small>It went to everyone at once.</small></span><i class="hold">Hold</i></div>
</div>

<p class="takeaway">Every practice that follows removes one of these.</p>

<!--
Controllers sometimes offset ("cock") a strip in its bay as a reminder that it needs attention.
These three strips are cocked on purpose.

- Can't explain it: fixed by standing instructions, a spec, and readback (next slides).
- Can't verify it: fixed by tests as the contract and a human clearance.
- Can't undo it: fixed by rings and a rehearsed rollback.
-->

---

<!-- _transition: handoff -->

## Every session checks in with the same information.

<div class="atis">
<div class="sheet">
<p class="sheet-title"><span>Information Alpha</span><span>AGENTS.md</span></p>
<dl>
<dt>Build</dt><dd>npm run build, then npm test</dd>
<dt>Style</dt><dd>Match .editorconfig and existing patterns</dd>
<dt>Practice</dt><dd>Tests first; the smallest change that passes</dd>
<dt>Never</dt><dd>Edit a test to make it pass</dd>
<dt>Ask first</dt><dd>New dependencies and schema changes</dd>
<dt>Decisions</dt><dd>Read docs/adr before redesigning</dd>
</dl>
</div>
<div class="atis-notes">

- Commands, conventions, and the hard rules
- Checked in and reviewed like code
- Short: link to docs, load procedures on demand

<p class="files-label">Same idea, different file names:</p>
<p class="files"><code>AGENTS.md</code><code>CLAUDE.md</code><code>.github/copilot-instructions.md</code></p>
</div>
</div>

<p class="takeaway">If every session needs it, write it down once.</p>

<!--
ATIS (Automatic Terminal Information Service) is a recorded broadcast of an airport's current
information, identified by a letter. Pilots report "with information Alpha" on first contact so
the controller knows they have it. An instructions file does the same job: every agent session
starts from it, so context stops getting lost between sessions.

What goes in: build and test commands, conventions, hard rules ("never edit a test to make it
pass"), when to ask first, and links to decisions instead of pasting them.

File names: AGENTS.md is the cross-tool convention. GitHub Copilot reads
.github/copilot-instructions.md, path-specific .github/instructions/*.instructions.md, and
AGENTS.md. Claude Code reads CLAUDE.md, and reads AGENTS.md when a project has no CLAUDE.md.

Keep it lean: encode what a new teammate would be told on day one, commit the agent's
configuration folder, and restart sessions at a stopping point instead of letting the context
window fill up.
-->

---

<!-- _transition: handoff -->

## File the flight plan before anyone writes code.

<div class="route">
<div class="bay" data-label="Spec"><div class="strip" data-morph="hero"><b>AI-0142<small>Search</small></b><i class="ok fresh">Spec</i><i>Test</i><i>Rev</i></div></div>
<div class="bay" data-label="Build"><div class="slot">Next</div></div>
<div class="bay" data-label="Review"><div class="slot"></div></div>
</div>

<div class="route-detail">
<div>

- An analyst interviews you until nothing is ambiguous
- An architect turns that into a spec and small tasks
- Readback: the agent restates the plan before any code

</div>
<div class="sheet">
<p class="sheet-title">Flight plan: add-keyboard-nav</p>
<dl>
<dt>Given</dt><dd>Search results are showing</dd>
<dt>When</dt><dd>I press the down arrow</dd>
<dt>Then</dt><dd>The next result is selected</dd>
<dt>Tasks</dt><dd>Four, each one a reviewable change</dd>
</dl>
</div>
</div>

<p class="takeaway">Decide in the spec, not in the diff.</p>

<!--
Spec-driven development: agree on a written, reviewable spec with the agent before any code
exists. Vibe coding loses requirements between sessions; a spec keeps them in the repo.

Tool-neutral options: OpenSpec (explore, propose, apply, archive) and GitHub Spec Kit
(constitution, specify, plan, tasks, implement). Both install into many agents, including
GitHub Copilot and Claude Code; slides 11 and 12 show where each piece lives. A plain spec.md and tasks.md in the
repo works too.

Try it as two personas: an analyst that interviews you until nothing is ambiguous
(requirements.md), then an architect that writes the spec and breaks it into phases and tasks.
Readback: in aviation a pilot reads a clearance back so mistakes surface before the aircraft
moves. Ask the agent to restate the plan and correct it before code exists.

Slides 6 to 8 share one strip, AI-0142. It morphs from bay to bay as you advance.
-->

---

<!-- _transition: handoff -->

## Small steps. The tests are the contract.

<div class="route">
<div class="bay" data-label="Spec"><div class="slot"></div></div>
<div class="bay" data-label="Build"><div class="strip" data-morph="hero"><b>AI-0142<small>Search</small></b><i class="ok">Spec</i><i class="ok fresh">Test</i><i>Rev</i></div></div>
<div class="bay" data-label="Review"><div class="slot">Next</div></div>
</div>

<div class="route-detail">
<div>

- One task, one branch, one reviewable diff
- Tests first, and green between steps
- The worker proposes code, not new expectations

</div>
<div class="sheet">
<p class="sheet-title">Contract: search.spec.ts</p>
<ul class="locks">
<li>Arrow keys move the selection<b>Pass</b></li>
<li>Escape closes the results<b>Pass</b></li>
<li>Focus returns to the input<b>Pass</b></li>
</ul>
<p><em class="grease">Agent edits a test? Hold.</em></p>
</div>
</div>

<p class="takeaway">A test the agent rewrote to pass is not evidence.</p>

<!--
Kent Beck's augmented-coding prompt: find the next test, implement it, then "implement only
enough code to make that test pass." Red, green, refactor, with a person reading each step.

His warning signs that the agent is off track: loops, functionality he didn't ask for, and
"any indication that the genie was cheating, for example by disabling or deleting tests."
Source: https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes

Work in the smallest increments you can review like a colleague's pull request: one task, one
branch. If the agent makes a mess, reset the branch and start a fresh session.

Treat the existing tests as the contract. A change to an assertion is a change to the
requirements, so it needs its own review.
-->

---

<!-- _transition: handoff -->

## Agents propose. People clear.

<div class="route">
<div class="bay" data-label="Spec"><div class="slot"></div></div>
<div class="bay" data-label="Build"><div class="slot"></div></div>
<div class="bay" data-label="Review"><div class="strip" data-morph="hero" data-holder="green"><b>AI-0142<small>Search</small></b><i class="ok">Spec</i><i class="ok">Test</i><i class="fresh">Rev<em class="grease">CA</em></i></div></div>
</div>

<div class="review-loop" role="img" aria-label="The worker commits. A fresh reviewer returns comments until the build is clean and every test passes. Then you clear the change.">
<div class="station"><b>Worker</b><small><i>Pilot flying</i>One task, tests first, on its own branch</small></div>
<svg viewBox="0 0 160 132" aria-hidden="true"><path class="lane" d="M4 44H146"/><path class="head" d="M156 44l-12-6v12z"/><path class="lane lane-back" d="M156 88H16"/><path class="head head-back" d="M4 88l12-6v12z"/><text x="80" y="30" text-anchor="middle">commit</text><text class="back" x="80" y="117" text-anchor="middle">comments.md</text></svg>
<div class="station"><b>Reviewer</b><small><i>Pilot monitoring</i>Fresh context: reads the code and the tests</small></div>
<svg viewBox="0 0 176 132" aria-hidden="true"><path class="lane lane-clean" d="M4 66H162"/><path class="head head-clean" d="M172 66l-12-6v12z"/><text class="clean" x="88" y="48" text-anchor="middle">clean build</text><text class="clean" x="88" y="94" text-anchor="middle">all tests pass</text></svg>
<div class="station station-you"><b>You</b><small><i>Controller</i>Nothing merges until you clear it</small><em class="grease">CA</em></div>
<span class="loop-token" aria-hidden="true">AI-0142</span>
</div>

<p class="clear-checks"><b>Before you initial it:</b><span>Intent matches the diff</span><span>Tests prove behavior</span><span>Blast radius known</span><span>Rollback ready</span></p>

<p class="takeaway">If you can't explain the diff out loud, you can't clear it.</p>

<!--
Two pilots: one flies, one monitors. Give the agent the same split. The worker implements one
task with tests on its own branch. A reviewer with a fresh context (a new session or a separate
reviewer agent) reads the diff, the code and the tests, and writes findings to a comments.md
file. The worker addresses them. Repeat until the build is clean and every test passes.

Then a person clears it, after checking the four tags on the slide: the intent matches the diff,
the tests prove behavior rather than just pass, the blast radius is known, and the rollback is ready.

In tools with custom agents or subagents, a main session can orchestrate the crew: you as
product owner, an orchestrator, a worker, and a reviewer, with nothing committed until you say
so. GitHub Copilot custom agents and Claude Code subagents can both hold these role prompts.
When a repository requires approvals, your approval of a Copilot coding agent pull request does
not count: someone else must approve.

Explaining a change out loud, to a person, a rubber duck, or an AI, is how you find out whether
you understand it.
Source: https://chris-ayers.com/posts/copilot-or-rubber-ducky/
-->

---

<!-- _class: lab-slide -->

## Ship to a few, then to everyone.

<div class="fs-lab" data-release-board role="group" aria-label="Interactive release board simulation with three fictional changes">
<div class="fs-lab-head"><b>Release board</b><span class="fs-static">Static snapshot: Evidence first, fictional changes</span><span class="fs-dynamic" data-board-state>Ready / Evidence first</span></div>
<div class="fs-lab-cols" aria-hidden="true"><span>Change</span><span></span><span data-col="tests">Tests</span><span data-col="review">Review</span><span data-col="ring0">Ring 0<small>team</small></span><span data-col="ring1">Ring 1<small>1%</small></span><span data-col="ring2">Ring 2<small>10%</small></span><span data-col="broad">Broad<small>100%</small></span><span>Outcome</span></div>
<div class="strip" data-change="a" data-holder="green" data-outcome="landed"><b>AI-0142<small>Agent</small></b><span><strong>Keyboard nav for search</strong></span><i data-stage="tests" data-mark="pass"><span class="sr">Tests: </span><em>Pass</em></i><i data-stage="review" data-mark="clear"><span class="sr">Review: </span><em>CA</em></i><i data-stage="ring0" data-mark="pass"><span class="sr">Ring 0: </span><em>Pass</em></i><i data-stage="ring1" data-mark="pass"><span class="sr">Ring 1: </span><em>Pass</em></i><i data-stage="ring2" data-mark="pass"><span class="sr">Ring 2: </span><em>Pass</em></i><i data-stage="broad" data-mark="landed"><span class="sr">Broad: </span><em>Landed</em></i><output>Landed<small>100% exposed</small></output></div>
<div class="strip" data-change="b" data-holder="red" data-outcome="held"><b>AI-0157<small>Agent</small></b><span><strong>Refactor checkout totals</strong></span><i data-stage="tests" data-mark="warn"><span class="sr">Tests: </span><em>Pass*</em></i><i data-stage="review" data-mark="hold"><span class="sr">Review: </span><em>Hold</em></i><i data-stage="ring0" data-mark=""><span class="sr">Ring 0: </span><em>Not run</em></i><i data-stage="ring1" data-mark=""><span class="sr">Ring 1: </span><em>Not run</em></i><i data-stage="ring2" data-mark=""><span class="sr">Ring 2: </span><em>Not run</em></i><i data-stage="broad" data-mark=""><span class="sr">Broad: </span><em>Not run</em></i><output>Held<small>0% exposed</small></output></div>
<div class="strip" data-change="c" data-holder="red" data-outcome="rollback"><b>PR-0161<small>Human</small></b><span><strong>Bump the auth library</strong></span><i data-stage="tests" data-mark="pass"><span class="sr">Tests: </span><em>Pass</em></i><i data-stage="review" data-mark="clear"><span class="sr">Review: </span><em>CA</em></i><i data-stage="ring0" data-mark="pass"><span class="sr">Ring 0: </span><em>Pass</em></i><i data-stage="ring1" data-mark="rollback"><span class="sr">Ring 1: </span><em>Back</em></i><i data-stage="ring2" data-mark=""><span class="sr">Ring 2: </span><em>Not run</em></i><i data-stage="broad" data-mark=""><span class="sr">Broad: </span><em>Not run</em></i><output>Rolled back<small>1% exposed</small></output></div>
<div class="fs-console"><b aria-hidden="true">&gt;</b><span data-board-summary role="status" aria-live="polite" aria-atomic="true">Evidence first: one landed, one held before anyone saw it, one rolled back after reaching 1%.</span><span class="console-next" data-board-next></span><progress data-board-progress max="1" value="1" aria-label="Board progress"></progress></div>
<div class="fs-controls" hidden>
<button type="button" class="fs-primary" data-board-action="toggle">Run board</button>
<button type="button" data-board-action="step">Step</button>
<button type="button" data-board-action="replay">Replay</button>
<button type="button" class="fs-clear" data-board-action="clear" disabled>Write clearance</button>
<label>Scenario <select data-board-scenario><option value="evidence">Evidence first</option><option value="vibe">Vibe shipping</option></select></label>
<label>Speed <select data-board-speed><option value="1">1x</option><option value="2">2x</option></select></label>
</div>
</div>

<div class="lab-compare fs-static" role="group" aria-label="Vibe shipping: the same changes with no review gate and no rings"><span class="sign hold">Vibe shipping</span><div class="strip mini" data-holder="green"><b>AI-0142</b><span><strong>Landed, 100%</strong></span></div><div class="strip mini" data-holder="red"><b>AI-0157</b><span><strong>Incident, 100%</strong></span></div><div class="strip mini" data-holder="red"><b>PR-0161</b><span><strong>Incident, 100%</strong></span></div></div>
<p class="lab-hint fs-dynamic"><b>Then try Vibe shipping:</b> no review gate and no rings, so every change goes straight to 100%.</p>
<p class="takeaway lab-outcome fs-dynamic" data-board-outcome>One landed. One held before anyone saw it. One rolled back after reaching 1%.</p>

<!--
Interactive in the HTML deck, in the audience window. Nothing autoplays.

1. Run board. Tests pass on all three strips, but AI-0157 only passes because the agent
   edited an assertion.
2. The board stops at review. Click Write clearance: AI-0142 and PR-0161 are cleared,
   AI-0157 is held before any user sees it.
3. Rings widen exposure: team, 1%, 10%, everyone. PR-0161 raises errors at 1% and the
   health gate rolls it back. AI-0142 lands.
4. Switch the scenario to Vibe shipping and run again: review is a rubber stamp, rings are
   skipped, and two changes become incidents at 100%.

Step advances one bay but never skips the clearance. Changes, timings, and percentages are
fictional and illustrative. The PDF shows the Evidence first outcome, with a one-line Vibe shipping
comparison underneath.
-->

---

## A go-around is a procedure, not a failure.

<div class="goaround">
<div>
<div class="board">
<div class="bay" data-label="Ring 1: 1% of users"><div class="slot">Health gate tripped</div></div>
<div class="bay bay-hold mandatory" data-label="Hold"><div class="strip" data-holder="red"><b>PR-0161<small>Human / PR</small></b><span><strong>Bump the auth library</strong><small>Errors up at 1%</small></span><i class="ok">Ring 0</i><i class="no">Ring 1</i><i>Ring 2</i></div></div>
</div>
<p class="ga-note"><em class="grease">Back in hold.</em> Nobody past ring 1 saw it.</p>
</div>
<div>

- Flags turn behavior off without a deploy
- Immutable artifacts: the last good build is one step back
- Health gates trigger the rollback, not a meeting
- Rehearse the path before release day

</div>
</div>

<p class="takeaway">Decide the rollback before you need it.</p>

<!--
In aviation, a go-around (abandoning an approach and climbing away to try again) is a
standard, trained procedure. Nobody treats it as a failure; it is the safe outcome.

Make rollback just as boring: feature flags, immutable artifacts so the last good build is
one step back, health gates that trigger automatically, and a path you have rehearsed.

PR-0161 is the same fictional change from the release board. The 1% exposure is illustrative.
-->

---

<!-- _class: map-slide -->

## Same practices, any agent.

<div class="tool-map" role="table" aria-label="Where instructions, specs, roles, and skills live in GitHub Copilot and Claude Code">
<div class="tool-map-cols" role="row"><span role="columnheader">Practice</span><span role="columnheader">Open convention</span><span role="columnheader">GitHub Copilot</span><span role="columnheader">Claude Code</span></div>
<div class="strip" role="row"><b role="rowheader">Instructions</b><span role="cell"><code>AGENTS.md</code></span><span role="cell"><code>.github/copilot-instructions.md</code><small>Also reads AGENTS.md</small></span><span role="cell"><code>CLAUDE.md</code><small>Or AGENTS.md if there is no CLAUDE.md</small></span></div>
<div class="strip" role="row"><b role="rowheader">Specs</b><span role="cell"><em>OpenSpec, Spec Kit</em></span><span role="cell"><code>/opsx-propose</code><code>/speckit-specify</code></span><span role="cell"><code>/opsx:propose</code><code>/speckit-specify</code></span></div>
<div class="strip" role="row"><b role="rowheader">Roles</b><span role="cell"><em>A role prompt per agent</em></span><span role="cell"><code>.github/agents/</code><small>Custom agents</small></span><span role="cell"><code>.claude/agents/</code><small>Subagents</small></span></div>
<div class="strip" role="row"><b role="rowheader">Skills</b><span role="cell"><code>SKILL.md</code><small>Agent Skills</small></span><span role="cell"><code>.github/skills/</code><small>Also reads .claude/skills</small></span><span role="cell"><code>.claude/skills/</code></span></div>
</div>

<!--
The practices are the point; the file names are just where each tool keeps them. Several tools
read each other's files: Copilot CLI and the cloud agent also accept CLAUDE.md, Copilot reads
.claude/skills, and Claude Code reads AGENTS.md when a project has no CLAUDE.md.

- Instructions: AGENTS.md is the cross-tool convention. Copilot adds path-specific
  .github/instructions/*.instructions.md files.
- Specs: OpenSpec runs explore, propose, apply, archive; the command spelling differs by tool
  (/opsx:propose in Claude Code, /opsx-propose in Copilot). Spec Kit installs skills such as
  /speckit-specify, /speckit-plan, /speckit-tasks, and /speckit-implement for both tools.
- Roles: Copilot custom agents live in .github/agents/ (VS Code uses .agent.md files); Claude
  Code subagents live in .claude/agents/.
- Skills: SKILL.md folders follow the Agent Skills specification in both tools.
Sources are listed on the next slide's notes.
-->

---

<!-- _class: map-slide -->

## Same guardrails, any agent.

<div class="tool-map" role="table" aria-label="Where tools, hooks, and clearance live in GitHub Copilot and Claude Code">
<div class="tool-map-cols" role="row"><span role="columnheader">Practice</span><span role="columnheader">Open convention</span><span role="columnheader">GitHub Copilot</span><span role="columnheader">Claude Code</span></div>
<div class="strip" role="row"><b role="rowheader">Tools</b><span role="cell"><em>MCP servers</em></span><span role="cell"><code>.vscode/mcp.json</code><small>Cloud agent: repository settings</small></span><span role="cell"><code>.mcp.json</code></span></div>
<div class="strip" role="row"><b role="rowheader">Hooks</b><span role="cell"><em>No shared standard yet</em></span><span role="cell"><code>.github/hooks/*.json</code><small>CLI and cloud agent</small></span><span role="cell"><code>.claude/settings.json</code><small>A hooks block</small></span></div>
<div class="strip" role="row"><b role="rowheader">Clearance</b><span role="cell"><em>Required reviews on protected branches</em></span><span role="cell"><em>The agent opens a pull request; someone else approves it</em></span><span role="cell"><em>Permission modes decide what it may do alone</em></span></div>
</div>

<p class="tool-map-note">Checked against vendor documentation in October 2026. These names change quickly, so verify before copying.</p>

<!--
- Tools: MCP is the open protocol. Copilot's cloud agent and code review take MCP servers from
  repository settings on GitHub; Copilot CLI keeps user-level servers in ~/.copilot/mcp-config.json.
  Load few servers: each one spends context.
- Hooks: Copilot hooks run in the CLI and the cloud agent; Claude Code hooks live in settings files.
- Clearance: when a repository requires approvals, your approval of a Copilot pull request does
  not count; another reviewer must approve it. Claude Code permission modes range from plan mode
  (read only) to asking before each edit.

Check current vendor docs before presenting:
https://docs.github.com/en/copilot/reference/customization-cheat-sheet
https://code.claude.com/docs/en/overview
-->

---

## Read it aloud, every change.

<div class="preflight">
<div class="sheet checklist-card">
<p class="sheet-title">Before departure</p>
<ol class="checklist" data-checklist aria-label="Before departure checklist">
<li><span>Instructions</span><b>Current</b></li>
<li><span>Flight plan</span><b>Filed</b></li>
<li><span>Step size</span><b>Small</b></li>
<li><span>Tests</span><b>Prove behavior</b></li>
<li><span>Review</span><b>Human cleared</b></li>
<li><span>Exposure</span><b>Staged</b></li>
<li><span>Rollback</span><b>Rehearsed</b></li>
</ol>
<p class="checklist-meta fs-dynamic" data-checklist-count>0 of 7 confirmed</p>
</div>
<div class="preflight-notes">
<p>One person reads the challenge. Another confirms the response.</p>
<p>Pilots run the same checklist on every flight, however experienced they are.</p>
</div>
</div>

<p class="takeaway">Speed is the agent's job. Evidence is ours.</p>

<!--
A challenge-and-response checklist: one person reads the item, the other confirms the state.
In the HTML deck, click each line to tick it in grease pencil; all seven clears the card.
The PDF prints a blank card people can keep.

Recap: current instructions, a filed spec, small steps, tests that prove behavior, a human
clearance, staged exposure, and a rehearsed rollback.
-->

---

<!-- _class: questions -->
<!-- _paginate: skip -->
<!-- _footer: "" -->

# Questions?

![bg right:45%](./img/questions.jpg)

---

<!-- _class: small thanks -->
<!-- _paginate: skip -->
<!-- _footer: "" -->

<style scoped>
section { font-size: 25px; }
</style>

# Thank You!

<div class="columns">
<div>

## References

- [Rubber Duck Debugging in the Age of AI](https://chris-ayers.com/posts/copilot-or-rubber-ducky/)
- [Augmented Coding: Beyond the Vibes](https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes)
- [Context Engineering for Coding Agents](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html)

</div>
<div>

## Chris Ayers

_Principal Software Engineer_\
_Azure EngOps AzRel_\
_Microsoft_

<i class="fa-brands fa-bluesky" aria-hidden="true"></i> BlueSky: [@chris-ayers.com](https://bsky.app/profile/chris-ayers.com)\
<i class="fa-brands fa-linkedin" aria-hidden="true"></i> LinkedIn: [chris\-l\-ayers](https://linkedin.com/in/chris-l-ayers/)\
<i class="fa fa-window-maximize" aria-hidden="true"></i> Blog: [https://chris-ayers\.com/](https://chris-ayers.com/)\
<i class="fa-brands fa-github" aria-hidden="true"></i> GitHub: [Codebytes](https://github.com/codebytes)\
<i class="fa-brands fa-mastodon" aria-hidden="true"></i> Mastodon: [@Chrisayers@hachyderm.io](https://hachyderm.io/@Chrisayers)\
~~<i class="fa-brands fa-twitter" aria-hidden="true"></i> Twitter: [@Chris_L_Ayers](https://twitter.com/Chris_L_Ayers)~~

</div>
</div>
