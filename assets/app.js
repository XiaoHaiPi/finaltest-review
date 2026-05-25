(function () {
  const STATUS = {
    todo: "未开始",
    doing: "复习中",
    done: "已掌握",
  };
  const THEME_KEY = "review-theme";

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function sitePath(root, path) {
    return `${root || ""}${path}`;
  }

  function coursePath(root, course) {
    return sitePath(root, `courses/${course.slug}/index.html`);
  }

  function sectionsFor(course) {
    return course.sections && course.sections.length
      ? course.sections
      : [{ slug: "topics", title: "知识点", code: "Topics", summary: course.summary, topics: course.topics || [] }];
  }

  function courseTopics(course) {
    return sectionsFor(course).flatMap((section) => section.topics);
  }

  function sectionPath(root, course, section) {
    return sitePath(root, `courses/${course.slug}/${section.slug}/index.html`);
  }

  function topicPath(root, course, section, topic) {
    return sitePath(root, `courses/${course.slug}/${section.slug}/${topic.slug}.html`);
  }

  function statusKey(courseSlug, topicSlug) {
    return `review-status:${courseSlug}:${topicSlug}`;
  }

  function getStatus(courseSlug, topicSlug) {
    return localStorage.getItem(statusKey(courseSlug, topicSlug)) || "todo";
  }

  function setStatus(courseSlug, topicSlug, status) {
    localStorage.setItem(statusKey(courseSlug, topicSlug), status);
  }

  function readStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      // Theme still changes for the current page even if storage is unavailable.
    }
  }

  function preferredTheme() {
    const stored = readStoredTheme();
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function currentTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function updateThemeButton(theme) {
    const button = $("#theme-toggle");
    if (!button) return;

    const isDark = theme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "切换到浅色模式" : "切换到深色模式");
    button.title = isDark ? "切换到浅色模式" : "切换到深色模式";
  }

  function applyTheme(theme) {
    const normalized = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = normalized;
    document.documentElement.style.colorScheme = normalized;
    updateThemeButton(normalized);
  }

  function setupThemeToggle() {
    const button = $("#theme-toggle");
    if (!button) return;

    updateThemeButton(currentTheme());
    button.addEventListener("click", () => {
      const nextTheme = currentTheme() === "dark" ? "light" : "dark";
      saveTheme(nextTheme);
      applyTheme(nextTheme);
    });
  }

  function findCourse(slug) {
    return window.reviewData.courses.find((course) => course.slug === slug);
  }

  function subtitleMarkup(value, className) {
    return value ? `<p class="${className || "title-subtitle"}">${escapeHtml(value)}</p>` : "";
  }

  function bilingualLabel(item) {
    return item && item.subtitle ? `${item.title} / ${item.subtitle}` : item.title;
  }

  function findSection(course, slug) {
    return sectionsFor(course).find((section) => section.slug === slug);
  }

  function findTopicInCourse(course, topicSlug, sectionSlug) {
    const section = sectionSlug
      ? findSection(course, sectionSlug)
      : sectionsFor(course).find((item) => item.topics.some((topic) => topic.slug === topicSlug));
    const topic = section ? section.topics.find((item) => item.slug === topicSlug) : null;
    return { section, topic };
  }

  function progressFor(course) {
    return progressForTopics(course.slug, courseTopics(course));
  }

  function progressForSection(course, section) {
    return progressForTopics(course.slug, section.topics);
  }

  function progressForTopics(courseSlug, topics) {
    const done = topics.filter((topic) => getStatus(courseSlug, topic.slug) === "done").length;
    const doing = topics.filter((topic) => getStatus(courseSlug, topic.slug) === "doing").length;
    const total = topics.length;
    return { done, doing, total, percent: total ? Math.round((done / total) * 100) : 0 };
  }

  function renderTopbar(page) {
    const root = page.root || "";
    const topbar = $("#site-topbar");
    topbar.innerHTML = `
      <a class="brand" href="${sitePath(root, "index.html")}" aria-label="返回首页">
        <span class="brand-mark">FR</span>
        <span>
          <strong>${escapeHtml(window.reviewData.site.title)}</strong>
          <small>${escapeHtml(window.reviewData.site.owner)}</small>
        </span>
      </a>
      <div class="top-actions">
        <nav class="top-nav" aria-label="主导航">
          <a href="${sitePath(root, "index.html")}">首页</a>
          <a href="${sitePath(root, "index.html#course-list")}">课程</a>
        </nav>
        <button class="theme-toggle" id="theme-toggle" type="button" aria-label="切换深色模式" aria-pressed="false">
          <span class="theme-toggle-icon" aria-hidden="true"></span>
        </button>
      </div>
    `;
    setupThemeToggle();
  }

  function renderFooter(page) {
    const footer = $("#site-footer");
    const year = new Date().getFullYear();
    footer.innerHTML = `
      <span>${year} ${escapeHtml(window.reviewData.site.title)}</span>
      <span>静态 HTML / CSS / JavaScript</span>
    `;
  }

  function renderHome(page) {
    const root = page.root || "";
    const coursesMarkup = window.reviewData.courses.map((course) => courseCard(root, course)).join("");

    $("#app").innerHTML = `
      <section class="home-hero">
        <div class="hero-copy">
          <p class="eyebrow">Final Review Desk / 期末复习台</p>
          <h1>${escapeHtml(window.reviewData.site.title)}</h1>
          <p class="hero-lead">${escapeHtml(window.reviewData.site.subtitle)}</p>
        </div>
      </section>

      <section class="toolbar-section" id="course-list">
        <div>
          <p class="section-kicker">Courses / 课程</p>
          <h2>课程目录</h2>
        </div>
        <label class="search-box">
          <span>搜索</span>
          <input id="course-search" type="search" placeholder="课程或知识点" autocomplete="off">
        </label>
      </section>

      <section class="course-grid" id="courses">${coursesMarkup}</section>
    `;

    $("#course-search").addEventListener("input", (event) => {
      const query = normalize(event.target.value);
      const filtered = window.reviewData.courses.filter((course) => {
        const sectionText = sectionsFor(course).map((section) => `${section.title} ${section.subtitle || ""}`).join(" ");
        const topicText = courseTopics(course).map((topic) => `${topic.title} ${topic.subtitle || ""}`).join(" ");
        return normalize(`${course.title} ${course.subtitle || ""} ${course.code} ${course.summary} ${sectionText} ${topicText}`).includes(query);
      });
      $("#courses").innerHTML = filtered.map((course) => courseCard(root, course)).join("") || emptyState("没有匹配课程");
    });
  }

  function courseCard(root, course) {
    const progress = progressFor(course);
    const focus = course.examFocus.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    const sections = sectionsFor(course);
    const sectionCount = sections.length;
    const sectionPreview = sections
      .map((section) => `
        <a href="${sectionPath(root, course, section)}">
          <strong>${escapeHtml(section.title)}</strong>
          ${section.subtitle ? `<small>${escapeHtml(section.subtitle)}</small>` : ""}
          <span>${section.topics.length} 个知识点</span>
        </a>
      `)
      .join("");
    return `
      <article class="course-card">
        <div class="course-card-top">
          <span class="course-code">${escapeHtml(course.code)}</span>
          <span>${sectionCount} 个子页面 / ${progress.total} 个知识点</span>
        </div>
        <h3>${escapeHtml(course.title)}</h3>
        ${subtitleMarkup(course.subtitle, "card-subtitle")}
        <p>${escapeHtml(course.summary)}</p>
        <div class="tag-row">${focus}</div>
        <div class="course-card-sections">${sectionPreview}</div>
        <div class="progress-line" aria-label="已掌握 ${progress.percent}%">
          <span style="width:${progress.percent}%"></span>
        </div>
        <div class="course-card-bottom">
          <span>已掌握 ${progress.done}/${progress.total}</span>
          <a class="text-link" href="${coursePath(root, course)}">打开课程</a>
        </div>
      </article>
    `;
  }

  function renderCourse(page) {
    const root = page.root || "";
    const course = findCourse(page.course);
    if (!course) {
      renderMissing("课程不存在");
      return;
    }

    const progress = progressFor(course);
    const sections = sectionsFor(course);
    $("#app").innerHTML = `
      ${breadcrumb(root, [
        { label: "首页", href: sitePath(root, "index.html") },
        { label: course.title },
      ])}
      <section class="course-hero">
        <div>
          <p class="eyebrow">${escapeHtml(course.code)} Course</p>
          <h1>${escapeHtml(course.title)}</h1>
          ${subtitleMarkup(course.subtitle)}
          <p>${escapeHtml(course.summary)}</p>
        </div>
        <aside class="course-panel">
          <span>复习进度</span>
          <strong>${progress.percent}%</strong>
          <div class="progress-line" aria-label="已掌握 ${progress.percent}%">
            <span style="width:${progress.percent}%"></span>
          </div>
          <small>已掌握 ${progress.done}，复习中 ${progress.doing}，共 ${progress.total}</small>
        </aside>
      </section>

      ${renderExamBlueprint(course)}

      <section class="toolbar-section compact">
        <div>
          <p class="section-kicker">Course Pages / 课程子页面</p>
          <h2>课程子页面</h2>
        </div>
        <label class="search-box">
          <span>搜索</span>
          <input id="section-search" type="search" placeholder="子页面或知识点" autocomplete="off">
        </label>
      </section>

      <section class="course-grid" id="sections">${sectionCards(root, course, sections)}</section>
    `;

    $("#section-search").addEventListener("input", (event) => {
      const query = normalize(event.target.value);
      const filtered = sections.filter((section) => {
        const topicText = section.topics.map((topic) => `${topic.title} ${topic.subtitle || ""}`).join(" ");
        return normalize(`${section.title} ${section.subtitle || ""} ${section.code || ""} ${section.summary || ""} ${topicText}`).includes(query);
      });
      $("#sections").innerHTML = sectionCards(root, course, filtered) || emptyState("没有匹配子页面");
    });
  }

  function renderExamBlueprint(course) {
    const blueprint = course.examBlueprint;
    if (!blueprint) return "";

    const parts = (blueprint.parts || [])
      .map((part) => `
        <article class="exam-part">
          <span>${escapeHtml(part.label)}${part.labelZh ? ` / ${escapeHtml(part.labelZh)}` : ""}</span>
          <strong>
            ${escapeHtml(part.title)}
            ${part.titleZh ? `<small>${escapeHtml(part.titleZh)}</small>` : ""}
          </strong>
          <em>${escapeHtml(part.score)}</em>
        </article>
      `)
      .join("");

    const scopes = (blueprint.scopes || [])
      .map((scope) => `<li><strong>${escapeHtml(scope.label)}</strong><span>${escapeHtml(scope.text)}</span></li>`)
      .join("");

    return `
      <section class="exam-brief" aria-labelledby="exam-brief-title">
        <div class="exam-brief-head">
          <div>
            <p class="section-kicker">Exam Blueprint / 考试题型</p>
            <h2 id="exam-brief-title">${escapeHtml(blueprint.title)}</h2>
          </div>
          <span class="exam-date">${escapeHtml(blueprint.date)}</span>
        </div>
        <div class="exam-brief-grid">
          <div class="exam-parts" aria-label="考试题型">
            ${parts}
          </div>
          <div class="exam-scope">
            <h3>复习范围</h3>
            <ol>${scopes}</ol>
          </div>
        </div>
      </section>
    `;
  }

  function sectionCards(root, course, sections) {
    return sections
      .map((section) => {
        const progress = progressForSection(course, section);
        return `
          <article class="course-card section-card">
            <div class="course-card-top">
              <span class="course-code">${escapeHtml(section.code || "Page")}</span>
              <span>${section.topics.length} 个知识点</span>
            </div>
            <h3>${escapeHtml(section.title)}</h3>
            ${subtitleMarkup(section.subtitle, "card-subtitle")}
            <p>${escapeHtml(section.summary || "")}</p>
            <div class="progress-line" aria-label="已掌握 ${progress.percent}%">
              <span style="width:${progress.percent}%"></span>
            </div>
            <div class="course-card-bottom">
              <span>已掌握 ${progress.done}/${progress.total}</span>
              <a class="text-link" href="${sectionPath(root, course, section)}">打开子页面</a>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderSection(page) {
    const root = page.root || "";
    const course = findCourse(page.course);
    const section = course ? findSection(course, page.section) : null;
    if (!course || !section) {
      renderMissing("子页面不存在");
      return;
    }

    const progress = progressForSection(course, section);
    $("#app").innerHTML = `
      ${breadcrumb(root, [
        { label: "首页", href: sitePath(root, "index.html") },
        { label: course.title, href: coursePath(root, course) },
        { label: section.title },
      ])}
      <section class="course-hero">
        <div>
          <p class="eyebrow">${escapeHtml(course.code)} ${escapeHtml(section.code || "Section")}</p>
          <h1>${escapeHtml(section.title)}</h1>
          ${subtitleMarkup(section.subtitle)}
          <p>${escapeHtml(section.summary || "")}</p>
        </div>
        <aside class="course-panel">
          <span>复习进度</span>
          <strong>${progress.percent}%</strong>
          <div class="progress-line" aria-label="已掌握 ${progress.percent}%">
            <span style="width:${progress.percent}%"></span>
          </div>
          <small>已掌握 ${progress.done}，复习中 ${progress.doing}，共 ${progress.total}</small>
        </aside>
      </section>

      <section class="toolbar-section compact">
        <div>
          <p class="section-kicker">Knowledge Points / 知识点</p>
          <h2>知识点目录</h2>
        </div>
        <label class="search-box">
          <span>搜索</span>
          <input id="topic-search" type="search" placeholder="输入知识点名称" autocomplete="off">
        </label>
      </section>

      <section class="topic-grid" id="topics">${topicCards(root, course, section, section.topics)}</section>
    `;

    $("#topic-search").addEventListener("input", (event) => {
      const query = normalize(event.target.value);
      const topics = section.topics.filter((topic) => normalize(`${topic.title} ${topic.subtitle || ""}`).includes(query));
      $("#topics").innerHTML = topicCards(root, course, section, topics) || emptyState("没有匹配知识点");
    });
  }

  function topicCards(root, course, section, topics) {
    return topics
      .map((topic) => {
        const index = section.topics.findIndex((item) => item.slug === topic.slug) + 1;
        const status = getStatus(course.slug, topic.slug);
        return `
          <a class="topic-card status-${status}" href="${topicPath(root, course, section, topic)}">
            <span class="topic-index">${String(index).padStart(2, "0")}</span>
            <strong>${escapeHtml(topic.title)}</strong>
            ${subtitleMarkup(topic.subtitle, "topic-subtitle")}
            <span class="topic-status">${STATUS[status]}</span>
          </a>
        `;
      })
      .join("");
  }

  function renderTopic(page) {
    const root = page.root || "";
    const course = findCourse(page.course);
    const found = course ? findTopicInCourse(course, page.topic, page.section) : {};
    const section = found.section;
    const topic = found.topic;
    if (!course || !section || !topic) {
      renderMissing("知识点不存在");
      return;
    }

    const index = section.topics.findIndex((item) => item.slug === topic.slug);
    const previous = section.topics[index - 1];
    const next = section.topics[index + 1];
    const status = getStatus(course.slug, topic.slug);

    $("#app").innerHTML = `
      ${breadcrumb(root, [
        { label: "首页", href: sitePath(root, "index.html") },
        { label: course.title, href: coursePath(root, course) },
        { label: section.title, href: sectionPath(root, course, section) },
        { label: bilingualLabel(topic) },
      ])}
      <article class="topic-layout">
        <aside class="topic-sidebar">
          <a class="back-link" href="${sectionPath(root, course, section)}">返回 ${escapeHtml(section.title)}</a>
          <div class="status-panel">
            <span>当前状态</span>
            <strong id="status-label">${STATUS[status]}</strong>
            <div class="status-buttons" role="group" aria-label="复习状态">
              ${statusButton("todo", status)}
              ${statusButton("doing", status)}
              ${statusButton("done", status)}
            </div>
          </div>
          <div class="mini-index">
            <span>知识点序号</span>
            <strong>${String(index + 1).padStart(2, "0")} / ${section.topics.length}</strong>
          </div>
        </aside>

        <section class="topic-main">
          <p class="eyebrow">${escapeHtml(course.code)} / ${escapeHtml(section.title)}</p>
          <h1>${escapeHtml(topic.title)}</h1>
          ${subtitleMarkup(topic.subtitle)}
          ${renderTopicContent(topic)}
          <nav class="topic-nav" aria-label="知识点切换">
            ${previous ? `<a href="${topicPath(root, course, section, previous)}">上一项：${escapeHtml(bilingualLabel(previous))}</a>` : "<span>已经是第一项</span>"}
            ${next ? `<a href="${topicPath(root, course, section, next)}">下一项：${escapeHtml(bilingualLabel(next))}</a>` : "<span>已经是最后一项</span>"}
          </nav>
        </section>
      </article>
    `;

    document.querySelectorAll("[data-status]").forEach((button) => {
      button.addEventListener("click", () => {
        const nextStatus = button.dataset.status;
        setStatus(course.slug, topic.slug, nextStatus);
        $("#status-label").textContent = STATUS[nextStatus];
        document.querySelectorAll("[data-status]").forEach((item) => {
          item.classList.toggle("active", item.dataset.status === nextStatus);
        });
      });
    });

    setupPracticeChecks();
  }

  function statusButton(value, current) {
    return `<button class="${value === current ? "active" : ""}" type="button" data-status="${value}">${STATUS[value]}</button>`;
  }

  function placeholderBlock(title) {
    return `
      <section class="placeholder-block">
        <h2>${escapeHtml(title)}</h2>
        <p>内容待补充。</p>
      </section>
    `;
  }

  function renderTopicContent(topic) {
    const importedContent = window.reviewContent ? window.reviewContent[topic.slug] : "";
    const content = topic.contentHtml || topic.content || importedContent;
    if (content) {
      return `<div class="topic-content">${content}</div>`;
    }

    return `
      <div class="topic-content">
        <div class="reply">
          <div class="grid grid-2">
            <section class="card card-b">
              <h2>核心概念</h2>
              <p>内容待补充。</p>
            </section>
            <section class="card card-g">
              <h2>考试重点</h2>
              <p>内容待补充。</p>
            </section>
            <section class="card card-o">
              <h2>易混点</h2>
              <p>内容待补充。</p>
            </section>
            <section class="card card-r">
              <h2>自测题</h2>
              <p>内容待补充。</p>
            </section>
          </div>
        </div>
      </div>
    `;
  }

  function normalizePracticeText(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[“”]/g, "\"")
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function practiceTokens(value, mode) {
    const normalized = normalizePracticeText(value);
    if (!normalized) return [];

    const words = normalized.match(/[a-z0-9]+(?:['-][a-z0-9]+)?/g) || [];
    if (mode !== "zh") {
      return words.filter((word) => word.length > 1);
    }

    const cjkRuns = normalized.match(/[\u4e00-\u9fff]+/g) || [];
    const grams = [];
    cjkRuns.forEach((run) => {
      if (run.length === 1) {
        grams.push(run);
        return;
      }
      for (let index = 0; index < run.length - 1; index += 1) {
        grams.push(run.slice(index, index + 2));
      }
    });
    return grams.concat(words.filter((word) => word.length > 2));
  }

  function overlapScore(input, answer, mode) {
    const answerTokens = Array.from(new Set(practiceTokens(answer, mode)));
    const inputTokens = Array.from(new Set(practiceTokens(input, mode)));
    if (!answerTokens.length || !inputTokens.length) return 0;

    const inputSet = new Set(inputTokens);
    const answerSet = new Set(answerTokens);
    const covered = answerTokens.filter((token) => inputSet.has(token)).length / answerTokens.length;
    const precision = inputTokens.filter((token) => answerSet.has(token)).length / inputTokens.length;
    return Math.round((covered * 0.72 + precision * 0.28) * 100);
  }

  function scoreLabel(score) {
    if (score >= 82) return "较接近参考答案";
    if (score >= 62) return "覆盖了主要信息";
    if (score >= 38) return "有部分重合";
    return "与参考答案差异较大";
  }

  function setupPracticeChecks() {
    document.querySelectorAll("[data-practice-check]").forEach((block) => {
      const input = $("[data-practice-input]", block);
      const button = $("[data-practice-action]", block);
      const result = $("[data-practice-result]", block);
      const answer = $("[data-practice-answer]", block);
      if (!input || !button || !result || !answer) return;

      button.addEventListener("click", () => {
        const value = input.value.trim();
        if (!value) {
          result.className = "practice-result is-visible is-low";
          result.textContent = "先输入你的译文或改写句，再进行自检。";
          return;
        }

        const score = overlapScore(value, answer.textContent, block.dataset.practiceMode || "zh");
        const level = score >= 62 ? "is-good" : score >= 38 ? "is-mid" : "is-low";
        result.className = `practice-result is-visible ${level}`;
        result.innerHTML = `
          <strong>${scoreLabel(score)}：${score}%</strong>
          <span>分数按关键词和字符覆盖度估算，表达允许不同处理；展开参考答案后重点核对术语、逻辑关系和信息完整度。</span>
        `;
      });
    });
  }

  function breadcrumb(root, items) {
    const markup = items
      .map((item) => (item.href ? `<a href="${item.href}">${escapeHtml(item.label)}</a>` : `<span>${escapeHtml(item.label)}</span>`))
      .join("<i>/</i>");
    return `<nav class="breadcrumb" aria-label="当前位置">${markup}</nav>`;
  }

  function emptyState(message) {
    return `<div class="empty-state">${escapeHtml(message)}</div>`;
  }

  function renderMissing(message) {
    $("#app").innerHTML = `<section class="missing"><h1>${escapeHtml(message)}</h1><a class="button primary" href="index.html">返回首页</a></section>`;
  }

  function init() {
    const page = window.PAGE || { type: "home", root: "" };
    applyTheme(preferredTheme());
    renderTopbar(page);
    renderFooter(page);

    if (page.type === "course") {
      renderCourse(page);
      return;
    }

    if (page.type === "section") {
      renderSection(page);
      return;
    }

    if (page.type === "topic") {
      renderTopic(page);
      return;
    }

    renderHome(page);
  }

  window.StudyApp = { init };
})();
