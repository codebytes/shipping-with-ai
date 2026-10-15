(() => {
  "use strict";

  const deckKeys = new Set(["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"]);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const printMedia = window.matchMedia("print");

  // Marp's audience, presenter, and next-slide windows have separate DOMs; only the audience window plays.
  function audienceView() {
    return document.body.getAttribute("data-bespoke-view") === "";
  }

  // Load every bundled face up front, so a slide transition never captures text that is still invisible.
  function preloadFonts() {
    if (!document.fonts) return;
    for (const face of document.fonts) {
      if (face.family.replace(/["']/g, "").startsWith("FS ") && face.status === "unloaded") {
        face.load().catch((error) => console.warn("Flight Strip could not load a bundled font:", error));
      }
    }
  }

  // Keys stay with the controls, but navigation keys on a focused button release it and go back to the
  // deck: Marp ignores keys aimed at buttons, and presenters expect arrows and clickers to keep working.
  function shieldControls(container) {
    container.addEventListener("keydown", (event) => {
      event.stopPropagation();
      if (event.target.tagName !== "BUTTON" || !deckKeys.has(event.key) || event.altKey || event.ctrlKey || event.metaKey) return;
      event.preventDefault();
      event.target.blur();
      document.dispatchEvent(new KeyboardEvent("keydown", { key: event.key, code: event.code, shiftKey: event.shiftKey, bubbles: true, cancelable: true }));
    });
    for (const name of ["touchstart", "touchend"]) {
      container.addEventListener(name, (event) => event.stopPropagation());
    }
  }

  /* ---------- Challenge and response checklist ---------- */

  function createChecklist(list) {
    const count = list.closest("section")?.querySelector("[data-checklist-count]");
    const items = [...list.children].filter((item) => item.tagName === "LI");
    const buttons = items.map((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "fs-check";
      button.setAttribute("aria-pressed", "false");
      button.append(...item.childNodes);
      item.append(button);
      button.addEventListener("click", () => {
        const checked = button.getAttribute("aria-pressed") !== "true";
        button.setAttribute("aria-pressed", String(checked));
        item.dataset.checked = String(checked);
        render();
      });
      return button;
    });
    shieldControls(list);

    function render() {
      const done = buttons.filter((button) => button.getAttribute("aria-pressed") === "true").length;
      if (count) {
        count.textContent = done === buttons.length
          ? `All ${done} confirmed. Cleared for departure.`
          : `${done} of ${buttons.length} confirmed`;
      }
    }
    render();

    return {
      update(enhanced) {
        for (const button of buttons) button.disabled = !enhanced;
      },
    };
  }

  /* ---------- Release board ---------- */

  const STAGES = ["tests", "review", "ring0", "ring1", "ring2", "broad"];
  const STOPS = new Set(["hold", "rollback", "incident"]);
  const QUIET = { "": "Queued", active: "In progress", skip: "Skipped" };
  const SCENARIOS = {
    evidence: {
      label: "Evidence first",
      gate: "review",
      next: "Next: switch the scenario to Vibe shipping and run the same changes.",
      durations: { tests: 1700, review: 1500, ring0: 1500, ring1: 2000, ring2: 1500, broad: 1700 },
      marks: {
        a: { tests: ["pass", "Pass"], review: ["clear", "CA"], ring0: ["pass", "Pass"], ring1: ["pass", "Pass"], ring2: ["pass", "Pass"], broad: ["landed", "Landed"] },
        b: { tests: ["warn", "Pass*"], review: ["hold", "Hold"] },
        c: { tests: ["pass", "Pass"], review: ["clear", "CA"], ring0: ["pass", "Pass"], ring1: ["rollback", "Back"] },
      },
      outcomes: { a: ["landed", "Landed", "100% exposed"], b: ["held", "Held", "0% exposed"], c: ["rollback", "Rolled back", "1% exposed"] },
      messages: {
        idle: "Evidence first. Three fictional changes wait at the board. Run it, or Step one bay at a time.",
        start: "Tests are running on all three strips.",
        tests: "Tests pass. AI-0157 passes only because the agent edited an assertion.",
        gate: "Review needs a person. Read each diff, then write the clearance.",
        review: "Cleared: AI-0142 and PR-0161. Held: AI-0157, because a weakened test is not evidence.",
        ring0: "Ring 0: the team runs both changes first. Health holds.",
        ring1: "Ring 1 at 1%: PR-0161 raises errors, so the health gate rolls it back.",
        ring2: "Ring 2 at 10%: only AI-0142 continues.",
        broad: "Broad: AI-0142 reaches everyone, with evidence at every bay.",
        complete: "One landed. One held before anyone saw it. One rolled back after reaching 1%.",
      },
    },
    vibe: {
      label: "Vibe shipping",
      gate: null,
      next: "Next: switch back to Evidence first and compare the outcomes.",
      durations: { tests: 1500, review: 900, ring0: 450, ring1: 450, ring2: 450, broad: 2200 },
      marks: {
        a: { tests: ["pass", "Pass"], review: ["stamp", "LGTM"], ring0: ["skip", ""], ring1: ["skip", ""], ring2: ["skip", ""], broad: ["landed", "Landed"] },
        b: { tests: ["warn", "Pass*"], review: ["stamp", "LGTM"], ring0: ["skip", ""], ring1: ["skip", ""], ring2: ["skip", ""], broad: ["incident", "Errors"] },
        c: { tests: ["pass", "Pass"], review: ["stamp", "LGTM"], ring0: ["skip", ""], ring1: ["skip", ""], ring2: ["skip", ""], broad: ["incident", "Errors"] },
      },
      outcomes: { a: ["landed", "Landed", "100% exposed"], b: ["incident", "Incident", "100% exposed"], c: ["incident", "Incident", "100% exposed"] },
      messages: {
        idle: "Vibe shipping. The same three changes, with no review gate and no rings. Run the board.",
        start: "Tests are running on all three strips.",
        tests: "Tests pass. AI-0157 passes because the agent edited an assertion.",
        review: "Review is a rubber stamp: LGTM on every strip, and nobody reads the diffs.",
        ring0: "No ring 0. The team never sees these changes first.",
        ring1: "No 1% ring, so nothing limits the blast radius.",
        ring2: "No 10% ring either.",
        broad: "Broad at 100%: checkout totals and sign-in both break, for everyone.",
        complete: "One landed. Two incidents reached 100% of users. That's the regret.",
      },
    },
  };

  function createBoard(root) {
    const section = root.closest("section");
    const controls = root.querySelector(".fs-controls");
    const toggle = root.querySelector('[data-board-action="toggle"]');
    const stepButton = root.querySelector('[data-board-action="step"]');
    const clearButton = root.querySelector('[data-board-action="clear"]');
    const stateLabel = root.querySelector("[data-board-state]");
    const summary = root.querySelector("[data-board-summary]");
    const progress = root.querySelector("[data-board-progress]");
    const outcomeSign = section?.querySelector("[data-board-outcome]");
    const nextStep = root.querySelector("[data-board-next]");
    const columns = [...root.querySelectorAll("[data-col]")];
    const strips = [...root.querySelectorAll("[data-change]")].map((strip) => ({
      strip,
      id: strip.dataset.change,
      output: strip.querySelector("output"),
      boxes: Object.fromEntries([...strip.querySelectorAll("[data-stage]")].map((box) => [box.dataset.stage, box])),
    }));
    // The authored markup is the static snapshot; print, presenter, and no-JavaScript views keep it.
    const authored = {
      summary: summary.textContent,
      progress: progress.value,
      strips: strips.map(({ strip, output, boxes }) => ({
        holder: strip.dataset.holder || "",
        outcome: strip.dataset.outcome || "",
        output: output.innerHTML,
        boxes: Object.fromEntries(Object.entries(boxes).map(([stage, box]) => [stage, [box.dataset.mark || "", box.querySelector("em").textContent]])),
      })),
    };

    let scenario = "evidence";
    let done = 0;
    let elapsed = 0;
    let mode = "idle";
    let speed = 1;
    let visible = false;
    let enhanced = false;
    let frame = null;
    let lastTime = null;
    let fresh = new Set();
    let effects = new Map();

    const scene = () => SCENARIOS[scenario];

    // The index of the bay where a change stops, or the last bay if it flies all the way.
    function stopIndex(id) {
      const marks = scene().marks[id];
      const index = STAGES.findIndex((stage) => marks[stage] && STOPS.has(marks[stage][0]));
      return index === -1 ? STAGES.length - 1 : index;
    }

    function boxState(id, index) {
      if (index > stopIndex(id)) return ["", done > stopIndex(id) || mode === "complete" ? "Not run" : ""];
      if (index < done) return scene().marks[id][STAGES[index]] || ["", ""];
      if (index === done && ["running", "paused", "awaiting"].includes(mode)) return ["active", ""];
      return ["", ""];
    }

    function message() {
      const { messages } = scene();
      if (mode === "idle" || mode === "complete") return messages[mode];
      if (mode === "awaiting") return messages.gate;
      const text = done === 0 ? messages.start : messages[STAGES[done - 1]];
      return mode === "paused" ? `Paused. ${text}` : text;
    }

    function renderProgress() {
      const duration = done < STAGES.length ? scene().durations[STAGES[done]] : 1;
      progress.value = mode === "complete" ? 1 : (done + Math.min(elapsed / duration, 1)) / STAGES.length;
    }

    function render() {
      const data = scene();
      root.dataset.state = mode;
      root.dataset.scenario = scenario;
      for (const column of columns) {
        const index = STAGES.indexOf(column.dataset.col);
        column.dataset.state = mode !== "idle" && (index < done || mode === "complete") ? "done"
          : mode !== "idle" && index === done ? "active" : "queued";
      }
      for (const { strip, id, output, boxes } of strips) {
        STAGES.forEach((stage, index) => {
          const [mark, text] = boxState(id, index);
          const box = boxes[stage];
          box.dataset.mark = mark;
          box.dataset.fresh = String(fresh.has(`${id}:${stage}`));
          box.querySelector("em").textContent = text || QUIET[mark] || "";
        });
        const finished = mode === "complete" || done > stopIndex(id);
        const [kind, label, exposure] = data.outcomes[id];
        strip.dataset.outcome = finished ? kind : "";
        strip.dataset.holder = !finished ? "amber" : kind === "landed" ? "green" : "red";
        strip.dataset.fx = effects.get(id) || "";
        const detail = document.createElement("small");
        detail.textContent = finished ? exposure : "";
        output.replaceChildren(finished ? label : mode === "idle" ? "Waiting" : "In flight", detail);
      }
      const names = { idle: "Ready", running: "Running", paused: "Paused", awaiting: "Hold short: awaiting clearance", complete: "Complete" };
      stateLabel.textContent = `${names[mode]} / ${data.label}`;
      toggle.textContent = mode === "running" ? "Pause" : mode === "paused" ? "Resume" : mode === "complete" ? "Run again" : "Run board";
      toggle.disabled = mode === "awaiting";
      stepButton.disabled = mode === "awaiting" || mode === "complete";
      clearButton.disabled = mode !== "awaiting";
      summary.textContent = message();
      if (outcomeSign) outcomeSign.textContent = data.messages.complete;
      if (nextStep) nextStep.textContent = data.next;
      renderProgress();
    }

    function restoreAuthored() {
      root.dataset.state = "static";
      for (const column of columns) column.dataset.state = "queued";
      strips.forEach(({ strip, output, boxes }, index) => {
        const snapshot = authored.strips[index];
        strip.dataset.holder = snapshot.holder;
        strip.dataset.outcome = snapshot.outcome;
        strip.dataset.fx = "";
        output.innerHTML = snapshot.output;
        for (const [stage, [mark, text]] of Object.entries(snapshot.boxes)) {
          boxes[stage].dataset.mark = mark;
          boxes[stage].dataset.fresh = "false";
          boxes[stage].querySelector("em").textContent = text;
        }
      });
      summary.textContent = authored.summary;
      progress.value = authored.progress;
    }

    // Completes the bay in progress: writes its marks, then moves on, or waits at the clearance gate.
    function completeStage() {
      const stage = STAGES[done];
      fresh = new Set();
      effects = new Map();
      for (const { id } of strips) {
        const mark = done <= stopIndex(id) ? scene().marks[id][stage] : null;
        if (!mark) continue;
        fresh.add(`${id}:${stage}`);
        if (mark[0] === "rollback") effects.set(id, "goaround");
        if (mark[0] === "incident") effects.set(id, "incident");
      }
      done += 1;
      elapsed = 0;
      if (done >= STAGES.length) mode = "complete";
      else if (STAGES[done] === scene().gate) mode = "awaiting";
    }

    function tick(now) {
      frame = null;
      if (!visible || mode !== "running") return;
      if (lastTime !== null) elapsed += (now - lastTime) * speed;
      lastTime = now;
      if (elapsed >= scene().durations[STAGES[done]]) {
        completeStage();
        render();
      } else {
        renderProgress();
      }
      if (mode === "running") frame = requestAnimationFrame(tick);
      else lastTime = null;
    }

    function sync() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
      lastTime = null;
      if (enhanced && visible && mode === "running") frame = requestAnimationFrame(tick);
    }

    function reset() {
      done = 0;
      elapsed = 0;
      mode = "idle";
      fresh = new Set();
      effects = new Map();
    }

    function run() {
      if (mode === "complete") reset();
      mode = STAGES[done] === scene().gate ? "awaiting" : "running";
      render();
      sync();
    }

    toggle.addEventListener("click", () => {
      if (mode === "running") {
        mode = "paused";
        render();
        sync();
      } else {
        run();
      }
    });
    stepButton.addEventListener("click", () => {
      if (mode === "awaiting" || mode === "complete") return;
      mode = "paused";
      completeStage();
      render();
      sync();
    });
    root.querySelector('[data-board-action="replay"]').addEventListener("click", () => {
      reset();
      run();
    });
    clearButton.addEventListener("click", () => {
      if (mode !== "awaiting") return;
      mode = "running";
      completeStage();
      render();
      sync();
    });
    root.querySelector("[data-board-scenario]").addEventListener("change", (event) => {
      scenario = event.target.value;
      reset();
      render();
      sync();
    });
    root.querySelector("[data-board-speed]").addEventListener("change", (event) => {
      speed = Number(event.target.value);
    });
    shieldControls(controls);

    return {
      update(isVisible, isAudience) {
        visible = isVisible;
        const next = isAudience && !printMedia.matches;
        if (enhanced !== next) {
          enhanced = next;
          root.dataset.enhanced = String(enhanced);
          if (section) section.dataset.enhanced = String(enhanced);
          controls.hidden = !enhanced;
          if (enhanced) render();
          else restoreAuthored();
        }
        sync();
      },
    };
  }

  /* ---------- Slide life cycle ---------- */

  // Paint the page canvas in the console colour, so a handoff transition never flashes black between slides.
  function paintCanvas() {
    const section = document.querySelector("section:not(.invert)");
    const color = section && getComputedStyle(section).getPropertyValue("--console").trim();
    if (color) document.documentElement.style.backgroundColor = color;
  }

  function initialize() {
    preloadFonts();
    paintCanvas();
    const slides = [...document.querySelectorAll("svg[data-marpit-svg]")].map((svg) => ({
      svg,
      sections: [...svg.querySelectorAll("section")],
    }));
    const boards = [...document.querySelectorAll("[data-release-board]")].map((root) => ({
      svg: root.closest("svg[data-marpit-svg]"),
      api: createBoard(root),
    }));
    const lists = [...document.querySelectorAll("[data-checklist]")].map((list) => ({
      section: list.closest("section"),
      api: createChecklist(list),
    }));

    function active(svg) {
      return Boolean(svg) && audienceView() && svg.classList.contains("bespoke-marp-active")
        && !document.hidden && !printMedia.matches;
    }

    function update() {
      const audience = audienceView();
      for (const { svg, sections } of slides) {
        const live = active(svg) && !reducedMotion.matches;
        for (const section of sections) section.classList.toggle("fs-live", live);
      }
      for (const { svg, api } of boards) api.update(active(svg), audience);
      for (const { section, api } of lists) {
        const enhanced = audience && !printMedia.matches;
        if (section) section.dataset.enhanced = String(enhanced);
        api.update(enhanced);
      }
    }

    const observer = new MutationObserver(update);
    for (const { svg } of slides) observer.observe(svg, { attributes: true, attributeFilter: ["class"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-bespoke-view"] });
    document.addEventListener("visibilitychange", update);
    printMedia.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    update();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();
