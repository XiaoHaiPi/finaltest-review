const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const referencePath = path.join(projectRoot, "reference", "概念定义.md");
const outputPath = path.join(projectRoot, "assets", "content.js");

const headingMap = new Map(
  [
    ["generalizations", "generalizations"],
    ["objectivity", "objectivity"],
    ["ethnocentrism", "ethnocentrism"],
    ["human communication", "human-communication"],
    ["symbol", "symbol"],
    ["culture", "culture"],
    ["worldview", "world-view"],
    ["world-view", "world-view"],
    ["intercultural communication competence", "intercultural-communication-competence"],
    ["deep culture", "deep-culture"],
    ["social organizations(institutions)", "social-organizations-institutions"],
    ["social organizations/institutions", "social-organizations-institutions"],
    ["family", "family"],
    ["individual/collective dimension", "individual-collective-dimension"],
    ["perception", "perception"],
    ["belief", "belief"],
    ["cultural values", "cultural-values"],
    ["behaviors", "behaviors"],
    ["cultural patterns(value orientations)", "cultural-patterns-value-orientations"],
    ["cultural patterns/value orientations", "cultural-patterns-value-orientations"],
    ["high-context / low-context", "high-context-low-context"],
    ["high-context/low-context", "high-context-low-context"],
    ["context", "context"],
    ["uncertainty avoidance", "uncertainty-avoidance"],
    ["power distance", "power-distance"],
    ["masculinity/femininity", "masculinity-femininity"],
  ].map(([heading, slug]) => [normalizeHeading(heading), slug])
);

function normalizeHeading(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[（]/g, "(")
    .replace(/[）]/g, ")")
    .replace(/\s*\/\s*/g, "/")
    .replace(/\s+/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function inlineMarkdown(value) {
  const tokens = [];
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, (_, code) => {
    const token = `@@CODE${tokens.length}@@`;
    tokens.push(`<code>${code}</code>`);
    return token;
  });
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  return tokens.reduce((result, token, index) => result.replace(`@@CODE${index}@@`, token), text);
}

function splitTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function renderTable(lines) {
  const rows = lines.map(splitTableRow);
  const hasHeader = rows.length > 1 && isTableSeparator(lines[1]);
  const bodyRows = hasHeader ? rows.slice(2) : rows;
  const header = hasHeader
    ? `<thead><tr>${rows[0].map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead>`
    : "";
  const body = `<tbody>${bodyRows
    .map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`)
    .join("")}</tbody>`;
  return `<table>${header}${body}</table>`;
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").replace(/行文，内在/g, "行为，内在").split("\n");
  const html = [];
  let paragraph = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      html.push(`<h3>${inlineMarkdown(line.slice(4).trim())}</h3>`);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      html.push(`<h2>${inlineMarkdown(line.slice(3).trim())}</h2>`);
      continue;
    }

    if (line.startsWith("|")) {
      flushParagraph();
      const tableLines = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableLines.push(lines[index]);
        index += 1;
      }
      index -= 1;
      html.push(renderTable(tableLines));
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      const quoteLines = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        const quoteLine = lines[index].trim().replace(/^>\s?/, "").trim();
        if (quoteLine) quoteLines.push(quoteLine);
        index += 1;
      }
      index -= 1;
      html.push(`<blockquote><p>${inlineMarkdown(quoteLines.join(" "))}</p></blockquote>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      index -= 1;
      html.push(`<ol>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ol>`);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().replace(/^-\s+/, ""));
        index += 1;
      }
      index -= 1;
      html.push(`<ul>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  return `<div class="reply">\n${html.map((line) => `  ${line}`).join("\n")}\n</div>`;
}

function parseReference(markdown) {
  const sections = new Map();
  let currentSlug = null;
  let currentLines = [];

  function flush() {
    if (!currentSlug) return;
    sections.set(currentSlug, currentLines.join("\n").trim());
  }

  for (const line of markdown.replace(/\r\n/g, "\n").split("\n")) {
    const match = line.match(/^##\s+(.+)$/);
    const mappedSlug = match ? headingMap.get(normalizeHeading(match[1])) : null;

    if (mappedSlug) {
      flush();
      currentSlug = mappedSlug;
      currentLines = [];
      continue;
    }

    if (currentSlug) currentLines.push(line);
  }

  flush();
  return sections;
}

const reference = fs.readFileSync(referencePath, "utf8");
const sections = parseReference(reference);
const content = Object.fromEntries(
  Array.from(sections.entries()).map(([slug, markdown]) => [slug, markdownToHtml(markdown)])
);

const output = `(function (root) {
  const content = ${JSON.stringify(content, null, 2)};
  if (typeof module !== "undefined" && module.exports) {
    module.exports = content;
  }
  root.reviewContent = content;
})(typeof self !== "undefined" ? self : this);
`;

fs.writeFileSync(outputPath, output);
console.log(`Imported ${Object.keys(content).length} concept definition(s) into assets/content.js.`);
