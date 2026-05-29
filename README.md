# 期末复习站

一个轻量、快速、无框架依赖的期末复习网站。项目采用纯静态 HTML、CSS 和原生 JavaScript，实现“首页 -> 课程 -> 课程子页面 -> 知识点”的多页面结构。

项目定位为期末考试备考用的复习知识集合，内容以覆盖关键考点和保留重要原始材料为原则，优先服务术语解释、概念辨析、理论框架、阅读知识和案例分析。

当前已加入两门课程：`跨文化交际` 与 `英美报刊选读`。`跨文化交际` 包含 `概念`、`选择与简答`、`单元 Summary`、`课程总结`、`历年真题`、`案例分析` 6 个子页面；`英美报刊选读` 包含 `英译汉自测`、`新闻标题改写`、`阅读材料`、`新闻语体特征`、`报刊常识与阅读知识`、`历年真题` 6 个子页面。页面标题、卡片标题和英文正文要点采用中英对照显示。

当前界面采用密集的复习笔记布局：大屏下尽量铺满页面宽度，卡片和正文网格以简笔线稿、纸张格线和清单式信息组织为主，并支持顶部按钮切换浅色 / 深色模式。

## 技术栈

- HTML
- CSS
- Vanilla JavaScript
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
│   │   └── ...共 1 个真题自测页
│   └── 案例分析
│       └── ...共 5 个案例页
└── 英美报刊选读
    ├── 英译汉自测
    │   └── ...共 5 个单元练习
    ├── 新闻标题改写
    │   └── ...共 4 个自测页
    ├── 阅读材料
    │   └── ...共 7 个阅读材料页
    ├── 新闻语体特征
    │   └── ...共 4 个整理页
    ├── 报刊常识与阅读知识
    │   └── ...共 2 个整理页
    └── 历年真题
        └── ...共 1 个真题自测页
```

## 目录结构

- `index.html`: 首页
- `courses/<course>/index.html`: 课程页
- `courses/<course>/<section>/index.html`: 课程子页面，例如 `概念`
- `courses/<course>/<section>/<topic>.html`: 知识点页
- `assets/data.js`: 课程与知识点数据
- `assets/content.js`: 知识点正文内容，按期末复习卡片组织
- `assets/news-content.js`: `英美报刊选读` 的翻译自测、标题改写、新闻语体特征、报刊常识与阅读知识、历年真题正文
- `assets/reading-content.js`: `英美报刊选读` 的阅读材料正文和中英段落对照
- `assets/app.js`: 页面渲染与复习状态
- `assets/style.css`: 共享样式
- `assets/review-map.svg`: 首页复习地图视觉资源
- `tools/build-pages.js`: 根据 `assets/data.js` 生成页面

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
- 阅读材料：`courses/english-american-press-reading/reading-materials/index.html`
- 新闻语体特征：`courses/english-american-press-reading/news-style-features/index.html`
- 报刊常识与阅读知识：`courses/english-american-press-reading/press-knowledge/index.html`
- 英美报刊选读历年真题：`courses/english-american-press-reading/past-papers/index.html`

## 生成页面

修改 `assets/data.js` 后，运行：

```bash
node tools/build-pages.js
```

## 本地预览

```bash
python3 -m http.server 6690 --bind 0.0.0.0
```

然后打开：

```text
http://127.0.0.1:6690/
```

## 后续添加内容

后续课程、子页面、知识点都集中维护在 `assets/data.js` 中。修改数据后重新运行 `node tools/build-pages.js`，即可生成新的静态页面。

知识点正文维护在 `assets/content.js` 中。概念页围绕期末复习组织为：

- 核心定义
- 英文定义 / 中文翻译
- 提出人 / 代表学者
- 主要特征
- 跨文化交际意义
- 考试辨析
- 一句话记忆

正文最终输出为语义化 HTML 片段，外壳统一为：

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
