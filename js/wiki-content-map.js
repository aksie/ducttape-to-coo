/**
 * Sunburst content coverage map (shared by wiki.html home + content-map.html).
 *
 * @param {object} options
 * @param {SVGElement} options.svg — target SVG element
 * @param {HTMLElement} [options.statsEl] — stats row container
 * @param {object} [options.tip] — { el, title, stage, status, hint }
 * @param {function} [options.onCellClick] — (procId, stageId) => void
 * @param {boolean} [options.showBranches=false] — blog/diagnostic branch cards
 * @param {boolean} [options.extendedStats=false] — blog/template counts
 */
const WikiContentMap = (function () {
  const CX = 540;
  const CY = 420;
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const GAP = 1.5;
  const SECTOR_DEG = 72;
  /** Empty wedge between 1.6 and 2.1 for stage labels (degrees). */
  const STAGE_LABEL_GAP_DEG = 16;
  const SLICE_INNER_GAP = 0.4;
  const OUTER_R = 328; // RINGS[4].r2

  const RINGS = [
    { id: 'foundation', label: 'Foundation', r1: 82, r2: 130 },
    { id: 'first-hires', label: 'First Hires', r1: 133, r2: 181 },
    { id: 'early-revenue', label: 'Early Rev', r1: 184, r2: 232 },
    { id: 'growth', label: 'Growth', r1: 235, r2: 283 },
    { id: 'scaled', label: 'Scaled', r1: 286, r2: 328 },
  ];

  const CATEGORIES = [
    { id: 'strategic', label: 'Strategic Ops', color: '#58a6ff', startAngle: 0 },
    { id: 'financial', label: 'Financial Ops', color: '#3fb950', startAngle: 72 },
    { id: 'revenue', label: 'Revenue & Customer Ops', color: '#f0883e', startAngle: 144 },
    { id: 'people', label: 'People Ops', color: '#d2a8ff', startAngle: 216 },
    { id: 'legal', label: 'Legal & Other Ops', color: '#e3b341', startAngle: 288 },
  ];

  const JSON_CATEGORY_TO_SECTOR = {
    strategic: 'strategic',
    financial: 'financial',
    revenue: 'revenue',
    people: 'people',
    'legal-and-other-ops': 'legal',
  };

  const CAT_TO_FOLDER = {
    strategic: 'strategic',
    financial: 'financial',
    revenue: 'revenue',
    people: 'people',
    'legal-and-other-ops': 'legal',
  };

  const STATUS_COLORS = ['#484f58', '#8fa87a', '#b9d29f', '#3fb950'];

  function el(tag, attrs = {}) {
    const e = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    return e;
  }

  function polar(cx, cy, r, angleDeg) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(r1, r2, a1, a2) {
    const p1 = polar(CX, CY, r1, a1);
    const p2 = polar(CX, CY, r1, a2);
    const p3 = polar(CX, CY, r2, a1);
    const p4 = polar(CX, CY, r2, a2);
    const lg = a2 - a1 > 180 ? 1 : 0;
    return `M${p1.x} ${p1.y} A${r1} ${r1} 0 ${lg} 1 ${p2.x} ${p2.y} L${p4.x} ${p4.y} A${r2} ${r2} 0 ${lg} 0 ${p3.x} ${p3.y}Z`;
  }

  function statusFill(status) {
    if (status === 3) return '#3fb950';
    if (status === 2) return '#b9d29f';
    if (status === 1) return '#b9d29f';
    return '#161b22';
  }

  function statusOpacity(status) {
    if (status === 3) return 1;
    if (status === 2) return 0.75;
    if (status === 1) return 0.35;
    return 0.6;
  }

  function statusLabel(s) {
    return [
      'N/A at this stage',
      'Minimal entry — placeholder only',
      'Minimal entry — one-sentence description, no further content',
      'Complete',
    ][s] || '?';
  }

  function stageLabel(id) {
    return {
      foundation: 'Foundation',
      'first-hires': 'First Hires',
      'early-revenue': 'Early Revenue',
      growth: 'Growth',
      scaled: 'Scaled',
    }[id] || id;
  }

  async function loadProcessesWithScores() {
    const { processes } = await fetch('data/processes.json').then(r => {
      if (!r.ok) throw new Error('processes.json ' + r.status);
      return r.json();
    });

    const grid = Object.fromEntries(CATEGORIES.map(c => [c.id, []]));
    const stageIds = RINGS.map(r => r.id);

    processes.forEach(p => {
      const sector = JSON_CATEGORY_TO_SECTOR[p.category];
      if (!sector) return;
      grid[sector].push({ id: p.id, title: p.title, stages: p.stages, category: p.category });
    });

    const fetches = [];
    for (const sector of CATEGORIES) {
      for (const proc of grid[sector.id]) {
        proc.s = {};
        const folder = CAT_TO_FOLDER[proc.category];
        for (const stageId of stageIds) {
          if (proc.stages[stageId] === 'future') {
            proc.s[stageId] = 0;
            continue;
          }
          const path = `wiki/processes/${folder}/${proc.id}--${stageId}.md`;
          fetches.push(
            fetch(path)
              .then(res => (res.ok ? res.text() : ''))
              .then(raw => {
                proc.s[stageId] = WikiContentScore.statusFromMarkdown(raw);
              })
              .catch(() => {
                proc.s[stageId] = 1;
              })
          );
        }
      }
    }

    await Promise.all(fetches);
    return grid;
  }

  function createTooltipHandlers(tipCfg, clickHint) {
    if (!tipCfg?.el) {
      return { showTip() {}, moveTip() {}, hideTip() {} };
    }

    const { el: tipEl, title: tipTitle, stage: tipStage, status: tipStatus, hint: tipHint } = tipCfg;

    function showTip(e, title, stage, status) {
      tipTitle.textContent = title;
      tipStage.textContent = stage + ' stage';
      tipStatus.textContent = statusLabel(status);
      tipStatus.style.color = STATUS_COLORS[status] || '#8b949e';
      tipHint.textContent = status > 0 ? clickHint : '';
      tipEl.style.display = 'block';
      moveTip(e);
    }

    function moveTip(e) {
      const pad = 14;
      let x = e.clientX + pad;
      let y = e.clientY + pad;
      if (x + 260 > window.innerWidth) x = e.clientX - 260 - pad;
      if (y + 120 > window.innerHeight) y = e.clientY - 120 - pad;
      tipEl.style.left = x + 'px';
      tipEl.style.top = y + 'px';
    }

    function hideTip() {
      tipEl.style.display = 'none';
    }

    return { showTip, moveTip, hideTip };
  }

  function sectorArcSpan(cat) {
    let start = cat.startAngle + GAP;
    let end = cat.startAngle + SECTOR_DEG - GAP;
    if (cat.id === 'strategic') end -= STAGE_LABEL_GAP_DEG / 2;
    if (cat.id === 'financial') start += STAGE_LABEL_GAP_DEG / 2;
    return { start, end, span: end - start };
  }

  function processSliceBounds(cat, procIndex, procCount) {
    const { start, span } = sectorArcSpan(cat);
    const sliceDeg = span / procCount;
    const a1 = start + procIndex * sliceDeg;
    const a2 = a1 + sliceDeg - SLICE_INNER_GAP;
    return { a1, a2, mid: (a1 + a2) / 2 };
  }

  /** Angle in the gap between two adjacent process slices (e.g. 1.6 → 2.1). */
  function gapAngleBetweenProcesses(PROCESSES, beforeId, afterId) {
    const strategic = PROCESSES.strategic || [];
    const financial = PROCESSES.financial || [];
    const idxBefore = strategic.findIndex(p => p.id === beforeId);
    const idxAfter = financial.findIndex(p => p.id === afterId);
    if (idxBefore < 0 || idxAfter < 0) return 72;

    const before = processSliceBounds(CATEGORIES[0], idxBefore, strategic.length);
    const after = processSliceBounds(CATEGORIES[1], idxAfter, financial.length);
    return (before.a2 + after.a1) / 2;
  }

  function labelHalo(attrs) {
    return el('text', {
      'paint-order': 'stroke fill',
      stroke: '#0d1117',
      'stroke-width': '4',
      'stroke-linejoin': 'round',
      ...attrs,
    });
  }

  function connectorLine(x1, y1, x2, y2, color = '#484f58') {
    return el('line', {
      x1,
      y1,
      x2,
      y2,
      stroke: color,
      'stroke-width': '1',
      opacity: '0.65',
    });
  }

  /** Horizontal label placement outside the chart by quadrant (angle from top, clockwise). */
  function horizontalLabelLayout(midAngle, attachR, textPad = 12) {
    const attach = polar(CX, CY, attachR, midAngle);
    let tx = attach.x;
    let ty = attach.y;
    let anchor = 'middle';
    let lineEndX = attach.x;
    let lineEndY = attach.y;

    if (midAngle >= 315 || midAngle < 45) {
      ty = attach.y - textPad;
      lineEndY = ty + 6;
      anchor = 'middle';
    } else if (midAngle >= 45 && midAngle < 135) {
      tx = attach.x + textPad;
      lineEndX = tx - 6;
      anchor = 'start';
    } else if (midAngle >= 135 && midAngle < 225) {
      ty = attach.y + textPad;
      lineEndY = ty - 6;
      anchor = 'middle';
    } else {
      tx = attach.x - textPad;
      lineEndX = tx + 6;
      anchor = 'end';
    }

    return { attach, tx, ty, anchor, lineEndX, lineEndY };
  }

  function processSliceMid(PROCESSES, procId, catId) {
    const cat = CATEGORIES.find(c => c.id === catId);
    const procs = PROCESSES[catId] || [];
    const idx = procs.findIndex(p => p.id === procId);
    if (idx < 0 || !cat) return 72;
    return processSliceBounds(cat, idx, procs.length).mid;
  }

  function radialLabelRotation(angleDeg) {
    // Baseline parallel to the spoke (center → outside); flip if upside-down
    let rot = angleDeg - 90;
    if (angleDeg > 115 && angleDeg < 295) rot += 180;
    return rot;
  }

  function drawStageRingLabels(svg, PROCESSES) {
    const ringLabelGroup = el('g', { id: 'ring-labels', 'pointer-events': 'none' });
    svg.appendChild(ringLabelGroup);

    // Under the 1.6 column; horizontal nudge per phase (~letter widths at 12.5px)
    const labelAngle = processSliceMid(PROCESSES, '1.6', 'strategic');
    const rot = radialLabelRotation(labelAngle);
    const labelOutset = 18;
    const stepY = 12;
    const LETTER_W = 7.5;
    const xLetters = {
      foundation: -11,
      'first-hires': 0,
      'early-revenue': 5,
      growth: 14,
      scaled: 21,
    };
    const yLetters = {
      foundation: 3,
      'early-revenue': 2,
    };

    const origin = polar(CX, CY, RINGS[0].r2 + labelOutset, labelAngle);
    const firstHiresIdx = RINGS.findIndex(r => r.id === 'first-hires');
    const anchorX = origin.x + firstHiresIdx * 14;

    RINGS.forEach((ring, i) => {
      const labelX = anchorX + (xLetters[ring.id] || 0) * LETTER_W;
      const labelY = origin.y + i * stepY + (yLetters[ring.id] || 0) * LETTER_W;

      const t = labelHalo({
        x: labelX,
        y: labelY,
        'text-anchor': 'start',
        'dominant-baseline': 'middle',
        fill: '#e6edf3',
        'font-size': '12.5',
        'font-family': 'Space Grotesk, sans-serif',
        'font-weight': '600',
        opacity: '0.95',
        transform: `rotate(${rot}, ${labelX}, ${labelY})`,
      });
      t.textContent = ring.label;
      ringLabelGroup.appendChild(t);
    });
  }

  function drawCategoryLabels(svg) {
    const catLabelGroup = el('g', { id: 'cat-labels', 'pointer-events': 'none' });
    svg.appendChild(catLabelGroup);

    for (const cat of CATEGORIES) {
      const midAngle = cat.startAngle + SECTOR_DEG / 2;
      const { attach, tx, ty, anchor, lineEndX, lineEndY } = horizontalLabelLayout(midAngle, OUTER_R, 16);

      catLabelGroup.appendChild(connectorLine(attach.x, attach.y, lineEndX, lineEndY, cat.color));

      catLabelGroup.appendChild(
        el('circle', { cx: attach.x, cy: attach.y, r: 4, fill: cat.color, opacity: '0.9' })
      );

      const t = labelHalo({
        x: tx,
        y: ty,
        'text-anchor': anchor,
        'dominant-baseline': 'middle',
        fill: cat.color,
        'font-size': '17',
        'font-family': 'Space Grotesk, sans-serif',
        'font-weight': '700',
        opacity: '0.98',
      });
      t.textContent = cat.label;
      catLabelGroup.appendChild(t);
    }
  }

  function drawSunburstArcs(svg, PROCESSES, onCellClick, tooltip) {
    const counts = { complete: 0, scaffolded: 0, stub: 0, na: 0 };
    const arcGroup = el('g', { cursor: 'pointer', id: 'sunburst-arcs' });
    svg.appendChild(arcGroup);

    for (const cat of CATEGORIES) {
      const procs = PROCESSES[cat.id];

      for (let pi = 0; pi < procs.length; pi++) {
        const proc = procs[pi];
        const { a1: a1base, a2: a2base } = processSliceBounds(cat, pi, procs.length);

        for (const ring of RINGS) {
          const st = proc.s[ring.id] ?? 0;
          const fill = statusFill(st);
          const opacity = statusOpacity(st);

          if (st === 0) counts.na++;
          else if (st === 1) counts.stub++;
          else if (st === 2) counts.scaffolded++;
          else if (st === 3) counts.complete++;

          const path = el('path', {
            d: arcPath(ring.r1 + 1, ring.r2 - 1, a1base, a2base),
            fill,
            opacity,
            'data-proc': proc.id,
            'data-title': proc.title,
            'data-stage': ring.id,
            'data-status': st,
          });

          path.addEventListener('mouseenter', function (e) {
            this.style.opacity = String(Math.min(1, opacity + 0.3));
            this.style.filter = 'brightness(1.4)';
            tooltip.showTip(
              e,
              this.getAttribute('data-proc') + ' — ' + this.getAttribute('data-title'),
              stageLabel(this.getAttribute('data-stage')),
              +this.getAttribute('data-status')
            );
          });
          path.addEventListener('mousemove', tooltip.moveTip);
          path.addEventListener('mouseleave', function () {
            this.style.opacity = '';
            this.style.filter = '';
            tooltip.hideTip();
          });

          if (st > 0 && onCellClick) {
            path.addEventListener('click', function () {
              onCellClick(this.getAttribute('data-proc'), this.getAttribute('data-stage'));
            });
          }

          arcGroup.appendChild(path);
        }
      }
    }

    return counts;
  }

  function drawStaticLayers(svg, showBranches) {
    const bgGroup = el('g');
    svg.appendChild(bgGroup);
    for (const ring of RINGS) {
      bgGroup.appendChild(
        el('circle', { cx: CX, cy: CY, r: ring.r1, fill: 'none', stroke: '#0d1117', 'stroke-width': '2' })
      );
    }
    bgGroup.appendChild(
      el('circle', {
        cx: CX,
        cy: CY,
        r: RINGS[4].r2 + 1,
        fill: 'none',
        stroke: '#0d1117',
        'stroke-width': '2',
      })
    );

    const sepGroup = el('g');
    svg.appendChild(sepGroup);
    for (const cat of CATEGORIES) {
      const inner = polar(CX, CY, RINGS[0].r1, cat.startAngle);
      const outer = polar(CX, CY, RINGS[4].r2, cat.startAngle);
      sepGroup.appendChild(
        el('line', {
          x1: inner.x,
          y1: inner.y,
          x2: outer.x,
          y2: outer.y,
          stroke: '#0d1117',
          'stroke-width': '2.5',
        })
      );
    }

    const innerR = RINGS[0].r1;
    svg.appendChild(
      el('circle', {
        cx: CX,
        cy: CY,
        r: innerR - 2,
        fill: '#161b22',
        stroke: '#30363d',
        'stroke-width': '1',
      })
    );

    function addCenterText(txt, y, size, color, weight = '400', id = null) {
      const t = el('text', {
        x: CX,
        y: CY + y,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: color,
        'font-size': size,
        'font-family': 'Space Grotesk, sans-serif',
        'font-weight': weight,
      });
      if (id) t.id = id;
      t.textContent = txt;
      svg.appendChild(t);
      return t;
    }

    addCenterText('Wiki', -22, '13', '#8b949e', '600');
    addCenterText('…', 2, '22', '#e6edf3', '700', 'center-cell-count');
    addCenterText('cells', 22, '11', '#6e7681');

    if (showBranches) drawBranchCards(svg);
  }

  function drawBranchCards(svg) {
    const HUB_Y = 60;

    function bezierLine(x1, y1, x2, y2, color = '#30363d') {
      const my = (y1 + y2) / 2;
      return el('path', {
        d: `M${x1} ${y1} C${x1} ${my} ${x2} ${my} ${x2} ${y2}`,
        fill: 'none',
        stroke: color,
        'stroke-width': '1.5',
        'stroke-dasharray': '4 3',
        opacity: '0.5',
      });
    }

    function addCard(x, y, w, h) {
      svg.appendChild(
        el('rect', {
          x,
          y,
          width: w,
          height: h,
          rx: '6',
          fill: '#161b22',
          stroke: '#30363d',
          'stroke-width': '1',
        })
      );
    }

    function addText(txt, x, y, size, color, anchor = 'start', weight = '400', opacity = '1') {
      const t = el('text', {
        x,
        y,
        'text-anchor': anchor,
        'dominant-baseline': 'middle',
        fill: color,
        'font-size': size,
        'font-family': 'Space Grotesk, sans-serif',
        'font-weight': weight,
        opacity,
      });
      t.textContent = txt;
      svg.appendChild(t);
    }

    function addDot(x, y, color, r = 5) {
      svg.appendChild(el('circle', { cx: x, cy: y, r, fill: color }));
    }

    const BLOG_X = 105;
    const BLOG_Y = 195;
    const DIAG_X = 975;
    const DIAG_Y = 195;
    const blogEdge = polar(CX, CY, RINGS[4].r2, 315);
    const diagEdge = polar(CX, CY, RINGS[4].r2, 45);
    svg.appendChild(bezierLine(BLOG_X, BLOG_Y, blogEdge.x, blogEdge.y, '#484f58'));
    svg.appendChild(bezierLine(DIAG_X, DIAG_Y, diagEdge.x, diagEdge.y, '#484f58'));

    addCard(18, 50, 175, 318);
    addText('📝 Blog', 30, 74, '11', '#8b949e', 'start', '600');
    addText('Published', 30, 100, '9.5', '#6e7681', 'start', '400');
    addDot(36, 119, '#3fb950', 4);
    addText('A Starting Point', 47, 119, '9.5', '#e6edf3');
    addDot(36, 137, '#3fb950', 4);
    addText('The Gap Where Friction Lives', 47, 137, '9', '#e6edf3');
    addDot(36, 155, '#3fb950', 4);
    addText('How Founders Lose the Team', 47, 155, '9', '#e6edf3');
    addDot(36, 173, '#3fb950', 4);
    addText('A True Strategy Is Crucial…', 47, 173, '9', '#e6edf3');
    addText('Templates', 30, 199, '9.5', '#6e7681', 'start', '400');
    addDot(36, 218, '#58a6ff', 4);
    addText('Working at, goals, event, DD', 47, 218, '9', '#e6edf3');
    addText('Backlog', 30, 244, '9.5', '#6e7681', 'start', '400');
    addDot(36, 263, '#2d333b', 4);
    addText('Transaction-ready (draft)', 47, 263, '9', '#6e7681');
    addDot(36, 280, '#2d333b', 4);
    addText('Why this exists / origin', 47, 280, '9', '#6e7681');
    addDot(36, 297, '#2d333b', 4);
    addText('Entry-point per archetype', 47, 297, '9', '#6e7681');

    addCard(887, 50, 177, 292);
    addText('⚙ Diagnostic', 899, 75, '11', '#8b949e', 'start', '600');
    addText('Working', 899, 103, '9.5', '#6e7681', 'start', '400');
    addDot(905, 123, '#3fb950', 4);
    addText('Full tool — 33 processes', 916, 123, '9.5', '#e6edf3');
    addDot(905, 143, '#3fb950', 4);
    addText('Stage / revenue / funding filters', 916, 143, '9', '#e6edf3');
    addDot(905, 163, '#3fb950', 4);
    addText('Variants resolver (1.2b live)', 916, 163, '9', '#e6edf3');
    addText('Next', 899, 191, '9.5', '#6e7681', 'start', '400');
    addDot(905, 211, '#3fb950', 4);
    addText('DD filing wiki: 4.1, 2.5, 3.1', 916, 211, '9', '#e6edf3');
    addDot(905, 231, '#f0883e', 4);
    addText('Variants for 2.2, 2.3, 5.x', 916, 231, '9', '#8b949e');
    addDot(905, 251, '#2d333b', 4);
    addText('Result page → wiki / blog', 916, 251, '9', '#6e7681');
    addDot(905, 271, '#2d333b', 4);
    addText('Quick COO-or-not mode', 916, 271, '9', '#6e7681');

    addText('Duct Tape to COO', CX, HUB_Y - 8, '13', '#e6edf3', 'middle', '700');
    addText('open operational maturity framework', CX, HUB_Y + 10, '9.5', '#6e7681', 'middle');
  }

  function renderStats(statsEl, counts, extendedStats) {
    if (!statsEl) return;
    const total = counts.complete + counts.scaffolded + counts.stub;
    let html = `
      <div class="stat"><span class="stat-n" style="color:#3fb950">${counts.complete}</span><span class="stat-label">Complete wiki entries</span></div>
      <div class="stat"><span class="stat-n" style="color:#b9d29f">${counts.scaffolded}</span><span class="stat-label">One sentence, needs content</span></div>
      <div class="stat"><span class="stat-n" style="color:#8fa87a">${counts.stub}</span><span class="stat-label">Placeholder only</span></div>
      <div class="stat"><span class="stat-n" style="color:#6e7681">${counts.na}</span><span class="stat-label">N/A at that stage</span></div>
      <div class="stat"><span class="stat-n" style="color:#e6edf3">${total}</span><span class="stat-label">Total wiki cells</span></div>`;
    if (extendedStats) {
      html += `
      <div class="stat"><span class="stat-n" style="color:#e6edf3">4</span><span class="stat-label">Blog posts published</span></div>
      <div class="stat"><span class="stat-n" style="color:#58a6ff">4</span><span class="stat-label">Doc templates (MD + HTML)</span></div>`;
    }
    statsEl.innerHTML = html;
  }

  async function render(options) {
    const {
      svg,
      statsEl = null,
      tip = null,
      onCellClick = null,
      showBranches = false,
      extendedStats = false,
      clickHint = 'Click to open in Wiki →',
    } = options;

    if (!svg) throw new Error('WikiContentMap.render: svg element required');

    svg.innerHTML = '';
    svg.setAttribute('viewBox', '0 0 1080 790');
    svg.setAttribute('xmlns', SVG_NS);

    drawStaticLayers(svg, showBranches);

    const tooltip = createTooltipHandlers(tip, clickHint);

    try {
      const PROCESSES = await loadProcessesWithScores();
      const counts = drawSunburstArcs(svg, PROCESSES, onCellClick, tooltip);
      drawStageRingLabels(svg, PROCESSES);
      drawCategoryLabels(svg);
      const total = counts.complete + counts.scaffolded + counts.stub;
      const centerEl = svg.querySelector('#center-cell-count');
      if (centerEl) centerEl.textContent = String(total);
      renderStats(statsEl, counts, extendedStats);
      return counts;
    } catch (err) {
      console.error(err);
      if (statsEl) {
        statsEl.innerHTML =
          '<span style="color:#f0883e;font-size:.85rem">Could not load coverage map. Run via local server (see AGENTS.md).</span>';
      }
      throw err;
    }
  }

  return { render, RINGS, CATEGORIES, stageLabel, statusLabel };
})();
