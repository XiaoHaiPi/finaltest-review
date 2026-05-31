const path = require("path");
const data = require("../assets/data.js");

const projectRoot = path.resolve(__dirname, "..");
const contentDir = path.join(projectRoot, "assets", "content");

function sectionsFor(course) {
  return course.sections && course.sections.length
    ? course.sections
    : [{ slug: "topics", title: "知识点", topics: course.topics || [] }];
}

function packName(course, section) {
  return `${course.slug}-${section.slug}.js`;
}

let packCount = 0;
let topicCount = 0;
const missing = [];

for (const course of data.courses) {
  for (const section of sectionsFor(course)) {
    const packFile = path.join(contentDir, packName(course, section));
    const pack = require(packFile);
    for (const topic of section.topics) {
      if (pack[topic.slug]) {
        topicCount += 1;
      } else {
        missing.push(`${course.slug}/${section.slug}/${topic.slug}`);
      }
    }
    packCount += 1;
  }
}

console.log(`Validated ${packCount} split content pack(s) with ${topicCount} topic content entr${topicCount === 1 ? "y" : "ies"}.`);
if (missing.length) {
  console.warn(`Missing content for ${missing.length} topic(s):`);
  missing.forEach((item) => console.warn(`- ${item}`));
  process.exitCode = 1;
}
