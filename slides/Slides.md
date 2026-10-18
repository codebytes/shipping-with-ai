---
marp: true
lang: en
title: Shipping with AI Without Shipping Regret
description: Pair AI coding speed with release-engineering discipline, from curated context to a rehearsed rollback.
theme: custom-default
paginate: true
math: mathjax
transition: sheet
header: '<span class="tb" aria-hidden="true"><i class="sig ck">Checked</i><i class="sig ap">Approved</i><i class="rev">Rev</i><i class="sheet">Sheet</i></span>'
footer: 'Chris Ayers - https://chris-ayers.com'
---

<!-- _class: cover -->
<!-- _paginate: skip -->
<!-- _footer: "" -->
<!-- _header: "" -->

<table class="revtable" aria-label="Revision record for this change"><thead><tr><th>Rev</th><th>Description</th><th>By</th><th>Appd</th></tr></thead><tbody><tr><td>A</td><td>Spec agreed</td><td>Agent</td><td><span class="hand">CA</span></td></tr><tr><td>B</td><td>Tests pass, review cleared</td><td>Agent</td><td><span class="hand">CA</span></td></tr><tr><td>C</td><td>Issued to team, 1%, 10%, 100%</td><td>CA</td><td><span class="hand">CA</span></td></tr></tbody></table>

<h1><span class="ln">Shipping <span class="cl clouded">with AI<span class="delta">A</span><span class="co-note">AI-written. Checked and approved before it was issued.</span></span></span><br><span class="ln">Without Shipping Regret</span></h1>

<div class="stamps"><span class="stamp prelim struck">Preliminary</span><span class="stamp issued">Issued for production</span></div>

<div class="tblock"><div class="drawn"><b>Drawn</b><span>Chris Ayers</span><small>Principal Software Engineer, Microsoft</small></div><div><b>Checked</b><span class="hand">CA</span></div><div><b>Approved</b><span class="hand">CA</span></div><div><b>Rev</b><span>C</span></div></div>

<script src="assets/change-order.js" defer></script>

<!--
The cover is the talk's thesis: an AI-written change is a revision. It is clouded where it
changed, and it is not issued until someone checks and approves it.

In the HTML deck the title is lettered on its guide lines, the AI part is clouded as revision A,
the revision table fills in (spec, tests and review, then issue to the team, 1%, 10%, and
everyone), the checker initials the title block, PRELIMINARY is struck, and ISSUED FOR
PRODUCTION is stamped.

The visual language is the engineering drawing: revision clouds, delta tags, title blocks, and
rubber stamps. Every board, change, and number in this deck is illustrative. No real model,
repository, pipeline, or production traffic is connected.
-->

---

<!-- _class: bio -->

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

<!-- _class: cheap -->

## Writing code got cheap. Knowing it works didn't.

<div class="registers">
<table class="register drafted"><caption>Drafted by agents</caption><colgroup><col style="width:104px"><col><col style="width:112px"></colgroup><thead><tr><th>Change</th><th>Title</th><th>Status</th></tr></thead><tbody><tr><td>AI-0142</td><td>Keyboard nav for search</td><td><span class="stamp sm prelim">Draft</span></td></tr><tr><td>AI-0143</td><td>Retry on HTTP 503</td><td><span class="stamp sm prelim">Draft</span></td></tr><tr><td>AI-0151</td><td>CSV export for reports</td><td><span class="stamp sm prelim">Draft</span></td></tr><tr><td>AI-0157</td><td>Refactor checkout totals</td><td><span class="stamp sm prelim">Draft</span></td></tr><tr><td>AI-0158</td><td>Fix flaky date test</td><td><span class="stamp sm prelim">Draft</span></td></tr><tr><td>AI-0160</td><td>Rename config keys</td><td><span class="stamp sm prelim">Draft</span></td></tr><tr><td>AI-0162</td><td>Paginate the audit log</td><td><span class="stamp sm prelim">Draft</span></td></tr></tbody></table>
<table class="register issued-reg"><caption>Issued for production</caption><colgroup><col style="width:104px"><col><col style="width:112px"></colgroup><thead><tr><th>Change</th><th>Title</th><th>Status</th></tr></thead><tbody><tr><td>AI-0131</td><td>Cache warm-up</td><td><span class="stamp sm issued">Issued</span></td></tr><tr><td>AI-0138</td><td>Null-safe parser</td><td><span class="stamp sm issued">Issued</span></td></tr><tr class="awaiting"><td></td><td>Awaiting evidence</td><td></td></tr><tr class="awaiting"><td></td><td></td><td></td></tr><tr class="awaiting"><td></td><td></td><td></td></tr><tr class="awaiting"><td></td><td></td><td></td></tr><tr class="awaiting"><td></td><td></td><td></td></tr></tbody></table>
</div>

<p class="label illus">Illustrative: seven drafted and two issued is not measured data</p>

<p class="takeaway">Throughput is set by approvals, not by drafting.</p>

<!--
Agents draft fast. Approvals still take evidence, and evidence still takes people.
The drafts fill their register in under a second in the HTML deck; the issued sheets arrive slowly.

These registers are a metaphor, not measured data. Seven drafted and two issued is illustrative.

Kent Beck draws the line between vibe coding and augmented coding: in augmented coding
"you care about the code, its complexity, the tests, & their coverage."
Source: https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes
-->

---

<!-- _class: regret -->

## Regret is change you can't explain, verify, or undo.

<div class="ncs">
<div class="nc clouded" style="--cloud: var(--cloud-a)"><p class="cue"><span class="delta">A</span><span class="hand">Why? (No context)</span></p><strong>Can't explain it</strong><p class="line">Nobody can say why the diff looks like this.</p></div>
<div class="nc clouded" style="--cloud: var(--cloud-b)"><p class="cue"><span class="delta">B</span><span class="hand">Proof? (No evidence)</span></p><strong>Can't verify it</strong><p class="line">The tests were edited until they passed.</p></div>
<div class="nc clouded" style="--cloud: var(--cloud-c)"><p class="cue"><span class="delta">C</span><span class="hand">Undo? (No way back)</span></p><strong>Can't undo it</strong><p class="line">It went to everyone at once.</p></div>
</div>

<p class="nfi"><span class="stamp prelim">Not for issue</span></p>

<p class="takeaway">Every practice that follows removes one of these.</p>

<!--
Each regret is clouded like a nonconformance on a drawing: marked for attention, not yet fixed.
The sheet's Checked and Approved boxes are still empty.

- Can't explain it: fixed by standing instructions, a spec, and a read-back (next slides).
- Can't verify it: fixed by tests as the contract and a human approval.
- Can't undo it: fixed by rings and a rehearsed rollback.
-->

---

<!-- _class: notes -->

## Every session starts from the same general notes.

<div class="gen-notes">
<p class="gn-title"><span>General notes</span><code>AGENTS.md</code></p>
<dl>
<dt>Build</dt><dd>npm run build, then npm test</dd>
<dt>Style</dt><dd>Match .editorconfig and existing patterns</dd>
<dt>Practice</dt><dd>Tests first; the smallest change that passes</dd>
<dt>Never</dt><dd>Edit a test to make it pass</dd>
<dt>Ask first</dt><dd>New dependencies and schema changes</dd>
<dt>Decisions</dt><dd>Read docs/adr before redesigning</dd>
</dl>
</div>

<div class="gn-side">

- Commands, conventions, and the hard rules
- Checked in and reviewed like code
- Short: link to docs, load procedures on demand

<p class="files-label">Same idea, different file names</p>
<p class="files"><code>AGENTS.md</code><code>CLAUDE.md</code><code>.github/copilot-instructions.md</code></p>
</div>

<p class="takeaway">If every session needs it, write it down once.</p>

<!--
On a drawing set, the general notes apply to every sheet, so nobody repeats them sheet by sheet.
An instructions file does the same job for agents: every session starts from it, so context
stops getting lost between sessions.

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

<!-- _class: route-slide rev-a -->
<!-- _transition: handoff -->

## Agree the spec before anyone writes code.

<div class="route">
<div class="station" data-label="Spec"><div class="change-tag" data-morph="hero"><span class="delta">A</span><b>AI-0142<small>Search</small></b><i class="ok fresh">Spec</i><i>Test</i><i>Rev</i></div></div>
<div class="station" data-label="Build"><span class="slot">Next</span></div>
<div class="station" data-label="Review"><span class="slot"></span></div>
</div>

<div class="route-detail">
<div>

- An analyst interviews you until nothing is ambiguous
- An architect turns that into a spec and small tasks
- Read-back: the agent restates the plan before any code

</div>
<div class="spec-sheet">
<p class="ss-title">Spec: <code>add-keyboard-nav</code></p>
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
GitHub Copilot and Claude Code; slides 11 and 12 show where each piece lives. A plain spec.md
and tasks.md in the repo works too.

Try it as two personas: an analyst that interviews you until nothing is ambiguous
(requirements.md), then an architect that writes the spec and breaks it into phases and tasks.
Read-back: ask the agent to restate the plan, and correct it before code exists, while mistakes
are still cheap.

Slides 6 to 8 share one change tag, AI-0142. It moves from sheet to sheet as you advance, its
revision letter follows the cover's revision table (A, then B), and the cell that changed is clouded.
-->

---

<!-- _class: route-slide rev-b -->
<!-- _transition: handoff -->

## Small steps. The tests are the contract.

<div class="route">
<div class="station" data-label="Spec"><span class="slot"></span></div>
<div class="station" data-label="Build"><div class="change-tag" data-morph="hero"><span class="delta">B</span><b>AI-0142<small>Search</small></b><i class="ok">Spec</i><i class="ok fresh">Test</i><i>Rev</i></div></div>
<div class="station" data-label="Review"><span class="slot">Next</span></div>
</div>

<div class="route-detail">
<div>

- One task, one branch, one reviewable diff
- Tests first, and green between steps
- The worker proposes code, not new expectations

</div>
<div class="spec-sheet">
<p class="ss-title">Contract: <code>search.spec.ts</code></p>
<ul class="locks">
<li>Arrow keys move the selection<b>Pass</b></li>
<li>Escape closes the results<b>Pass</b></li>
<li>Focus returns to the input<b>Pass</b></li>
</ul>
<p class="redline hand">Agent edits a test? Hold.</p>
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

<!-- _class: route-slide review approved rev-b -->

## Agents propose. People approve.

<div class="route">
<div class="station" data-label="Spec"><span class="slot"></span></div>
<div class="station" data-label="Build"><span class="slot"></span></div>
<div class="station" data-label="Review"><div class="change-tag" data-morph="hero"><span class="delta">B</span><b>AI-0142<small>Search</small></b><i class="ok">Spec</i><i class="ok">Test</i><i class="fresh">Rev<span class="hand">CA</span></i></div></div>
</div>

<div class="review-loop" role="img" aria-label="The worker commits. A fresh reviewer returns comments until the build is clean and every test passes. Then you approve the change.">
<p class="desk"><b>Drawn</b><strong>Worker</strong><small>One task, tests first, on its own branch</small></p>
<svg viewBox="0 0 129 150" aria-hidden="true"><path pathLength="1" d="M8 52H112"/><path class="head" d="M122 52l-12-6v12z"/><path class="redline" pathLength="1" d="M121 100H17"/><path class="head redline" d="M7 100l12-6v12z"/><text x="64" y="38" text-anchor="middle">commit</text><text class="redline" x="64" y="132" text-anchor="middle">comments.md</text></svg>
<p class="desk"><b>Checked</b><strong>Reviewer</strong><small>Fresh context: reads the code and the tests</small></p>
<svg class="lane-clean" viewBox="0 0 129 150" aria-hidden="true"><path pathLength="1" d="M8 76H112"/><path class="head" d="M122 76l-12-6v12z"/><text x="64" y="58" text-anchor="middle">clean build</text><text x="64" y="106" text-anchor="middle">all tests pass</text></svg>
<p class="desk"><b>Approved</b><strong>You</strong><small>Nothing merges until you approve it</small><span class="hand">CA</span></p>
<span class="loop-token" aria-hidden="true">AI-0142</span>
</div>

<p class="clear-checks"><b>Before you initial it</b><span>Intent matches the diff</span><span>Tests prove behavior</span><span>Blast radius known</span><span>Rollback ready</span></p>

<p class="takeaway">If you can't explain the diff out loud, you can't approve it.</p>

<!--
On a drawing, whoever drew a sheet doesn't check it. Give the agent the same split. The worker
implements one task with tests on its own branch. A reviewer with a fresh context (a new session
or a separate reviewer agent) reads the diff, the code and the tests, and writes findings to a
comments.md file. The worker addresses them. Repeat until the build is clean and every test passes.

Then a person approves it, after checking the four boxes on the slide: the intent matches the
diff, the tests prove behavior rather than just pass, the blast radius is known, and the rollback
is ready.

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

<!-- _class: lab approved rev-c -->

## Ship to a few, then to everyone.

<div class="co-lab" data-release-board role="group" aria-label="Interactive issue schedule with three fictional changes">
<div class="lab-head"><b>Issue schedule</b><span class="co-static">Static snapshot: Evidence first</span><span class="co-dynamic" data-board-state>Ready / Evidence first</span></div>
<div class="lab-cols" aria-hidden="true"><span>Change</span><span data-col="tests">Tests</span><span data-col="review">Review</span><span data-col="ring0">Ring 0<small>team</small></span><span data-col="ring1">Ring 1<small>1%</small></span><span data-col="ring2">Ring 2<small>10%</small></span><span data-col="broad">Broad<small>100%</small></span><span>Outcome</span></div>
<div class="lab-row" data-change="a" data-holder="green" data-outcome="landed"><b><span>AI-0142<small>Agent</small></span><span>Keyboard nav for search</span></b><i data-stage="tests" data-mark="pass"><span class="sr">Tests: </span><em>Pass</em></i><i data-stage="review" data-mark="clear"><span class="sr">Review: </span><em>CA</em></i><i data-stage="ring0" data-mark="pass"><span class="sr">Ring 0: </span><em>Pass</em></i><i data-stage="ring1" data-mark="pass"><span class="sr">Ring 1: </span><em>Pass</em></i><i data-stage="ring2" data-mark="pass"><span class="sr">Ring 2: </span><em>Pass</em></i><i data-stage="broad" data-mark="landed"><span class="sr">Broad: </span><em>Landed</em></i><output>Landed<small>100% exposed</small></output></div>
<div class="lab-row" data-change="b" data-holder="red" data-outcome="held"><b><span>AI-0157<small>Agent</small></span><span>Refactor checkout totals</span></b><i data-stage="tests" data-mark="warn"><span class="sr">Tests: </span><em>Pass*</em></i><i data-stage="review" data-mark="hold"><span class="sr">Review: </span><em>Hold</em></i><i data-stage="ring0" data-mark="notrun"><span class="sr">Ring 0: </span><em>Not run</em></i><i data-stage="ring1" data-mark="notrun"><span class="sr">Ring 1: </span><em>Not run</em></i><i data-stage="ring2" data-mark="notrun"><span class="sr">Ring 2: </span><em>Not run</em></i><i data-stage="broad" data-mark="notrun"><span class="sr">Broad: </span><em>Not run</em></i><output>Held<small>0% exposed</small></output></div>
<div class="lab-row" data-change="c" data-holder="red" data-outcome="rollback"><b><span>PR-0161<small>Human</small></span><span>Bump the auth library</span></b><i data-stage="tests" data-mark="pass"><span class="sr">Tests: </span><em>Pass</em></i><i data-stage="review" data-mark="clear"><span class="sr">Review: </span><em>CA</em></i><i data-stage="ring0" data-mark="pass"><span class="sr">Ring 0: </span><em>Pass</em></i><i data-stage="ring1" data-mark="rollback"><span class="sr">Ring 1: </span><em>Back</em></i><i data-stage="ring2" data-mark="notrun"><span class="sr">Ring 2: </span><em>Not run</em></i><i data-stage="broad" data-mark="notrun"><span class="sr">Broad: </span><em>Not run</em></i><output>Rolled back<small>1% exposed</small></output></div>
<p class="lab-key"><span class="label">Fictional changes, illustrative only</span><span class="hand">* Pass* means the tests were edited until they passed</span></p>
<div class="lab-console"><b aria-hidden="true">Note</b><span data-board-summary role="status" aria-live="polite" aria-atomic="true">Evidence first: one landed, one held before anyone saw it, one rolled back after reaching 1%.</span><span class="console-next" data-board-next></span><progress data-board-progress max="1" value="1" aria-label="Schedule progress"></progress></div>
<div class="lab-controls" hidden>
<button type="button" class="primary" data-board-action="toggle">Run board</button>
<button type="button" data-board-action="step">Step</button>
<button type="button" data-board-action="replay">Replay</button>
<button type="button" class="approve" data-board-action="clear" disabled>Approve</button>
<label>Scenario <select data-board-scenario><option value="evidence">Evidence first</option><option value="vibe">Vibe shipping</option></select></label>
<label>Speed <select data-board-speed><option value="1">1x</option><option value="2">2x</option></select></label>
</div>
</div>

<div class="lab-compare co-static" role="group" aria-label="Vibe shipping: the same changes with no review gate and no rings"><span class="stamp sm void">Vibe shipping</span><span class="sheetlet"><b>AI-0142</b><span>Landed, 100%</span></span><span class="sheetlet"><b>AI-0157</b><span>Incident, 100%</span></span><span class="sheetlet"><b>PR-0161</b><span>Incident, 100%</span></span></div>
<p class="takeaway lab-outcome co-dynamic" data-board-outcome>One landed. One held before anyone saw it. One rolled back after reaching 1%.</p>

<!--
Interactive in the HTML deck, in the audience window. Nothing autoplays.

1. Run board. Tests pass on all three changes, but AI-0157 only passes because the agent
   edited an assertion.
2. The schedule stops at review. Click Approve: AI-0142 and PR-0161 are approved,
   AI-0157 is held before any user sees it.
3. Rings widen exposure: team, 1%, 10%, everyone. PR-0161 raises errors at 1% and the
   health gate withdraws it. AI-0142 lands.
4. Switch the scenario to Vibe shipping and run again: review is a rubber stamp, rings are
   skipped, and two changes become incidents at 100%.

Step advances one stage but never skips the approval. Changes, timings, and percentages are
fictional and illustrative. The PDF shows the Evidence first outcome, with a one-line Vibe
shipping comparison underneath.
-->

---

<!-- _class: rollback approved rev-c -->

## A rollback is a procedure, not a failure.

<div class="withdrawal">
<p class="wd-title"><span>PR-0161</span><span>Bump the auth library</span><span class="label">Human</span></p>
<table class="wd-table" aria-label="Revision record for PR-0161"><thead><tr><th>Rev</th><th>Issued to</th><th>Status</th></tr></thead><tbody><tr><td>A</td><td>Ring 0, team</td><td><span class="tick" role="img" aria-label="Healthy"></span></td></tr><tr><td>B</td><td>Ring 1, 1% of users</td><td><span class="hand">Errors up at 1%</span></td></tr><tr><td>C</td><td>Withdrawn to hold</td><td>Health gate</td></tr></tbody></table>
<span class="wd-cloud clouded" aria-hidden="true"></span>
</div>

<p class="wd-note hand">Back in hold. Nobody past ring 1 saw it.</p>
<p class="wd-stamp"><span class="stamp void">Withdrawn</span></p>

<div class="wd-side">

- Flags turn behavior off without a deploy
- Immutable artifacts: the last good build is one step back
- Health gates trigger the rollback, not a meeting
- Rehearse the path before release day

<p class="label wd-illus">Fictional change, illustrative only</p>
</div>

<p class="takeaway">Decide the rollback before you need it.</p>

<!--
Withdrawing a sheet is routine document control: the revision is recorded, the sheet goes back
to hold, and nobody treats it as a failure. Make rollback just as boring: feature flags,
immutable artifacts so the last good build is one step back, health gates that trigger
automatically, and a path you have rehearsed.

PR-0161 is the same fictional change from the issue schedule. The 1% exposure is illustrative.
-->

---

<!-- _class: map checked -->

## Same practices, any agent.

<div class="tool-map" role="table" aria-label="Where instructions, specs, roles, and skills live in GitHub Copilot and Claude Code">
<div role="row"><span role="columnheader">Practice</span><span role="columnheader">Open convention</span><span role="columnheader">GitHub Copilot</span><span role="columnheader">Claude Code</span></div>
<div role="row"><b role="rowheader">Instructions</b><span role="cell"><code>AGENTS.md</code></span><span role="cell"><code>.github/copilot-instructions.md</code><small>Also reads AGENTS.md</small></span><span role="cell"><code>CLAUDE.md</code><small>Or AGENTS.md if there is no CLAUDE.md</small></span></div>
<div role="row"><b role="rowheader">Specs</b><span role="cell"><em>OpenSpec, Spec Kit</em></span><span role="cell"><code>/opsx-propose</code><code>/speckit-specify</code></span><span role="cell"><code>/opsx:propose</code><code>/speckit-specify</code></span></div>
<div role="row"><b role="rowheader">Roles</b><span role="cell"><em>A role prompt per agent</em></span><span role="cell"><code>.github/agents/</code><small>Custom agents</small></span><span role="cell"><code>.claude/agents/</code><small>Subagents</small></span></div>
<div role="row"><b role="rowheader">Skills</b><span role="cell"><code>SKILL.md</code><small>Agent Skills</small></span><span role="cell"><code>.github/skills/</code><small>Also reads .claude/skills</small></span><span role="cell"><code>.claude/skills/</code></span></div>
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

<!-- _class: map checked -->

## Same guardrails, any agent.

<div class="tool-map" role="table" aria-label="Where tools, hooks, and approval live in GitHub Copilot and Claude Code">
<div role="row"><span role="columnheader">Practice</span><span role="columnheader">Open convention</span><span role="columnheader">GitHub Copilot</span><span role="columnheader">Claude Code</span></div>
<div role="row"><b role="rowheader">Tools</b><span role="cell"><em>MCP servers</em></span><span role="cell"><code>.vscode/mcp.json</code><small>Cloud agent: repository settings</small></span><span role="cell"><code>.mcp.json</code></span></div>
<div role="row"><b role="rowheader">Hooks</b><span role="cell"><em>No shared standard yet</em></span><span role="cell"><code>.github/hooks/*.json</code><small>CLI and cloud agent</small></span><span role="cell"><code>.claude/settings.json</code><small>A hooks block</small></span></div>
<div role="row"><b role="rowheader">Approval</b><span role="cell"><em>Required reviews on protected branches</em></span><span role="cell"><em>The agent opens a pull request; someone else approves it</em></span><span role="cell"><em>Permission modes decide what it may do alone</em></span></div>
</div>

<p class="map-note">Checked against vendor documentation in October 2026. These names change quickly, so verify before copying.</p>

<!--
- Tools: MCP is the open protocol. Copilot's cloud agent and code review take MCP servers from
  repository settings on GitHub; Copilot CLI keeps user-level servers in ~/.copilot/mcp-config.json.
  Load few servers: each one spends context.
- Hooks: Copilot hooks run in the CLI and the cloud agent; Claude Code hooks live in settings files.
- Approval: when a repository requires approvals, your approval of a Copilot pull request does
  not count; another reviewer must approve it. Claude Code permission modes range from plan mode
  (read only) to asking before each edit.

Check current vendor docs before presenting:
https://docs.github.com/en/copilot/reference/customization-cheat-sheet
https://code.claude.com/docs/en/overview
-->

---

<!-- _class: check -->

## Read it aloud, every change.

<div class="check-card">
<p class="cc-title"><span>Before issue</span><span class="label">Checker's list</span></p>
<ol class="checklist" data-checklist aria-label="Before issue checklist">
<li><span>Instructions</span><b>Current</b></li>
<li><span>Spec</span><b>Agreed</b></li>
<li><span>Step size</span><b>Small</b></li>
<li><span>Tests</span><b>Prove behavior</b></li>
<li><span>Review</span><b>Human approved</b></li>
<li><span>Exposure</span><b>Staged</b></li>
<li><span>Rollback</span><b>Rehearsed</b></li>
</ol>
<p class="cc-count co-dynamic" data-checklist-count>0 of 7 checked</p>
<span class="stamp issued check-stamp co-dynamic">Approved for issue</span>
</div>

<div class="check-notes">
<p>One person reads the challenge. Another confirms the response.</p>
<p>A checker runs the same list on every drawing, however experienced the drafter.</p>
</div>

<p class="takeaway">Speed is the agent's job. Evidence is ours.</p>

<!--
A challenge-and-response checklist: one person reads the item, the other confirms the state.
In the HTML deck, click each line to tick it in red; all seven approves the card for issue.
The PDF prints a blank card people can keep.

Recap: current instructions, an agreed spec, small steps, tests that prove behavior, a human
approval, staged exposure, and a rehearsed rollback.
-->

---

<!-- _class: questions -->
<!-- _paginate: skip -->
<!-- _footer: "" -->

# Questions?

<div class="detail" aria-hidden="true"><img src="./img/questions.jpg" alt=""></div>
<p class="view-label detail-label">Detail A</p>

---

<!-- _class: small thanks approved -->
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
