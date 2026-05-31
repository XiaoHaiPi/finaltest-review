# 期末复习站

一个轻量、快速、无框架依赖的期末复习网站。项目采用纯静态 HTML、CSS 和原生 JavaScript，实现“首页 -> 课程 -> 课程子页面 -> 知识点”的多页面结构。

项目定位为期末考试备考用的复习知识集合，内容以覆盖关键考点和保留重要原始材料为原则，优先服务术语解释、概念辨析、理论框架、阅读知识、真题自测和案例分析。

当前已加入两门课程：`跨文化交际` 与 `英美报刊选读`。`跨文化交际` 包含 `概念`、`选择与简答`、`单元 Summary`、`课程总结`、`历年真题`、`案例分析` 6 个子页面；`英美报刊选读` 包含 `英译汉自测`、`新闻标题改写`、`新闻导语`、`阅读材料`、`新闻语体特征`、`报刊常识题`、`阅读知识点汇总`、`历年真题` 8 个子页面。页面标题、卡片标题和英文正文要点采用中英对照显示。

界面采用复习工作台式排版：首页突出课程规模统计，课程页提供分区复习路线，子页面提示下一轮复习项，知识点页带同分区跳转目录。GSAP 用于页面进入、列表错落出现和轻量 hover 动效，并尊重 `prefers-reduced-motion`。

## 技术栈

- HTML
- CSS
- Vanilla JavaScript
- GSAP 3.15.0 CDN
- 无 npm 运行依赖
- 无前端框架
- 无数据库

## 页面层级

```text
首页
├── 跨文化交际
│   ├── 概念
│   │   └── ...共 46 个知识点
│   ├── 选择与简答
│   │   └── ...共 8 个章节要点
│   ├── 单元 Summary
│   │   └── ...共 8 个单元总结
│   ├── 课程总结
│   │   └── ...共 15 个总结条目
│   ├── 历年真题
│   │   └── ...共 2 个真题自测页
│   └── 案例分析
│       └── ...共 17 个案例页
└── 英美报刊选读
    ├── 英译汉自测
    │   └── ...共 5 个单元练习
    ├── 新闻标题改写
    │   └── ...共 4 个自测页
    ├── 新闻导语
    │   └── ...共 5 个导语写作页
    ├── 阅读材料
    │   └── ...共 7 个阅读材料页
    ├── 新闻语体特征
    │   └── ...共 4 个整理页
    ├── 报刊常识题
    │   └── ...共 1 个整理页
    ├── 阅读知识点汇总
    │   └── ...共 13 个整理页
    └── 历年真题
        └── ...共 1 个真题自测页
```

## 目录结构

- `index.html`: 首页
- `courses/<course>/index.html`: 课程页
- `courses/<course>/<section>/index.html`: 课程子页面
- `courses/<course>/<section>/<topic>.html`: 知识点页
- `assets/data.js`: 课程、子页面、知识点、考试蓝图和站点版本数据
- `assets/content/*.js`: 按“课程-子页面”拆分的知识点正文内容分包
- `assets/app.js`: 页面渲染、复习状态、搜索、练习自测和真题交互
- `assets/motion.js`: GSAP 动效入口，包含响应式和低动态偏好处理
- `assets/style.css`: 共享样式与排版系统
- `tools/build-content-packs.js`: 校验正文分包是否覆盖 `assets/data.js` 中的全部知识点
- `tools/build-pages.js`: 根据 `assets/data.js` 和正文分包生成静态页面

## 当前页面

- 首页：`index.html`
- 跨文化交际：`courses/intercultural-communication/index.html`
- 概念：`courses/intercultural-communication/concepts/index.html`
- 选择与简答：`courses/intercultural-communication/exam-points/index.html`
- 单元 Summary：`courses/intercultural-communication/unit-summary/index.html`
- 课程总结：`courses/intercultural-communication/course-summary/index.html`
- 跨文化交际历年真题：`courses/intercultural-communication/past-papers/index.html`
- 案例分析：`courses/intercultural-communication/case-analysis/index.html`
- 知识点示例：`courses/intercultural-communication/concepts/generalizations.html`
- 英美报刊选读：`courses/english-american-press-reading/index.html`
- 英译汉自测：`courses/english-american-press-reading/translation-practice/index.html`
- 新闻标题改写：`courses/english-american-press-reading/headline-rewriting/index.html`
- 新闻导语：`courses/english-american-press-reading/news-leads/index.html`
- 阅读材料：`courses/english-american-press-reading/reading-materials/index.html`
- 新闻语体特征：`courses/english-american-press-reading/news-style-features/index.html`
- 报刊常识题：`courses/english-american-press-reading/press-common-knowledge/index.html`
- 阅读知识点汇总：`courses/english-american-press-reading/press-reading-knowledge/index.html`
- 英美报刊选读历年真题：`courses/english-american-press-reading/past-papers/index.html`

## 生成与校验

修改 `assets/data.js` 或 `assets/content/*.js` 后，先校验正文分包覆盖率，再生成页面：

```bash
node tools/build-content-packs.js
node tools/build-pages.js
```

生成结果当前为 2 个课程页、14 个课程子页面和 136 个知识点页。普通课程页和子页面只加载公共数据与渲染脚本；知识点页只加载所属分区的正文分包，避免所有正文内容挤在一个文件中。

## 本地预览

```bash
python3 -m http.server 6690 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:6690/
```

## 后续添加内容

后续课程、子页面、知识点结构维护在 `assets/data.js` 中。新增正文时，在 `assets/content/` 下维护对应分包：

```text
assets/content/<course-slug>-<section-slug>.js
```

每个分包向 `root.reviewContent` 合并当前子页面的正文 HTML 片段，键名使用知识点 `slug`。正文外壳统一为：

```html
<div class="reply">
  <h2>核心概念</h2>
  <p>这里写正文。</p>
</div>
```

常用结构：

- 核心定义
- 英文定义 / 中文翻译
- 提出人 / 代表学者
- 主要特征
- 跨文化交际意义
- 考试辨析
- 一句话记忆

可用语义类：

- 布局：`.grid.grid-2`、`.grid.grid-3`、`.card`、`.row`、`.col`
- 对比：`.pros-cons`、`.pros`、`.cons`
- 状态：`.badge`、`.tags`、`.tag`、`.note`、`.warn`、`.tip`
- 结构：`.stats`、`.timeline`、`.checklist`
- 高级：`.tldr`、`.pullquote`、`.formula`、`.terminal`、`.dialog`、`.progress`
