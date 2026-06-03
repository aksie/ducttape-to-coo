/**
 * Shared wiki page content scoring (used by wiki.html sidebar + content-map.html).
 *
 * Status levels:
 *   0 — not scored here (N/A at stage: stages[stage] === "future" in processes.json)
 *   1 — placeholder / empty body
 *   2 — scaffolded (some content, core action/warning sections thin)
 *   3 — complete (core sections have enough actionable text)
 */
const WikiContentScore = (function () {
  const CORE_SECTIONS = [
    'What you actually need to do',
    "Warning signs you're behind",
  ];
  const COMPLETE_MIN_CHARS = 300;

  function stripFrontmatter(raw) {
    const norm = raw.replace(/\r\n/g, '\n');
    const m = norm.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
    return (m ? m[1] : norm).replace(/<!--[\s\S]*?-->/g, '').trim();
  }

  function coreSectionText(body) {
    const parts = body.split(/^(?=## )/m);
    const core = parts
      .filter(p => CORE_SECTIONS.some(h => p.startsWith('## ' + h)))
      .join('\n');
    return core
      .replace(/^#{1,3}\s+.*/gm, '')
      .replace(/^\s*[-\d.]+\s*$/gm, '')
      .replace(/^\s*>\s*$/gm, '')
      .replace(/---/g, '')
      .trim();
  }

  /** @returns {1|2|3} */
  function statusFromMarkdown(raw) {
    const body = stripFrontmatter(raw);
    if (!body) return 1;
    if (coreSectionText(body).length > COMPLETE_MIN_CHARS) return 3;
    if (body.length > 80) return 2;
    return 1;
  }

  function hasFullContent(raw) {
    return statusFromMarkdown(raw) === 3;
  }

  return {
    CORE_SECTIONS,
    COMPLETE_MIN_CHARS,
    statusFromMarkdown,
    hasFullContent,
  };
})();
