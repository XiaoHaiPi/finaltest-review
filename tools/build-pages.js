const fs = require("fs");
const path = require("path");
const data = require("../assets/data.js");

const projectRoot = path.resolve(__dirname, "..");
const assetVersion = data.site.assetVersion || "dev";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(relativePath, content) {
  const target = path.join(projectRoot, relativePath);
  ensureDir(path.dirname(target));
  fs.writeFileSync(target, content);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pageHtml({ title, description, root, page }) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(description)}">
  <title>${escapeHtml(title)}</title>
  <link rel="icon" href="${root}assets/favicon.svg?v=${assetVersion}" type="image/svg+xml">
  <link rel="stylesheet" href="${root}assets/style.css?v=${assetVersion}">
</head>
<body>
  <header id="site-topbar"></header>
  <main id="app"></main>
  <footer id="site-footer"></footer>
  <script>window.PAGE = ${JSON.stringify(page)};</script>
  <script src="${root}assets/data.js?v=${assetVersion}"></script>
  <script src="${root}assets/content.js?v=${assetVersion}"></script>
  <script src="${root}assets/app.js?v=${assetVersion}"></script>
  <script>window.StudyApp.init();</script>
</body>
</html>
`;
}

function sectionsFor(course) {
  return course.sections && course.sections.length
    ? course.sections
    : [{ slug: "topics", title: "知识点", code: "Topics", summary: course.summary, topics: course.topics || [] }];
}

writeFile(
  "index.html",
  pageHtml({
    title: `${data.site.title} | 首页`,
    description: data.site.subtitle,
    root: "",
    page: { type: "home", root: "" },
  })
);

for (const course of data.courses) {
  writeFile(
    `courses/${course.slug}/index.html`,
    pageHtml({
      title: `${course.title} | ${data.site.title}`,
      description: course.summary,
      root: "../../",
      page: { type: "course", course: course.slug, root: "../../" },
    })
  );

  for (const section of sectionsFor(course)) {
    writeFile(
      `courses/${course.slug}/${section.slug}/index.html`,
      pageHtml({
        title: `${section.title} | ${course.title}`,
        description: section.summary || `${course.title} 子页面：${section.title}`,
        root: "../../../",
        page: { type: "section", course: course.slug, section: section.slug, root: "../../../" },
      })
    );

    for (const topic of section.topics) {
      writeFile(
        `courses/${course.slug}/${section.slug}/${topic.slug}.html`,
        pageHtml({
          title: `${topic.title} | ${section.title} | ${course.title}`,
          description: `${course.title} ${section.title}：${topic.title}`,
          root: "../../../",
          page: { type: "topic", course: course.slug, section: section.slug, topic: topic.slug, root: "../../../" },
        })
      );

    }
  }
}

const sectionCount = data.courses.reduce((sum, course) => sum + sectionsFor(course).length, 0);
const topicCount = data.courses.reduce((sum, course) => {
  return sum + sectionsFor(course).reduce((sectionSum, section) => sectionSum + section.topics.length, 0);
}, 0);

console.log(`Built ${data.courses.length} course page(s), ${sectionCount} section page(s), and ${topicCount} topic page(s).`);
