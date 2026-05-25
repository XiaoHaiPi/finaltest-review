# 期末复习站

一个轻量、快速、无框架依赖的期末复习网站。项目采用纯静态 HTML、CSS 和原生 JavaScript，实现“首页 -> 课程 -> 课程子页面 -> 知识点”的多页面结构。

当前已加入第一门课程：`跨文化交际`。课程下包含 `概念` 子页面，`概念` 子页面下包含 41 个知识点页面。

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
└── 跨文化交际
    └── 概念
        ├── generalizations
        ├── objectivity
        ├── ethnocentrism
        └── ...共 41 个知识点
```

## 目录结构

- `index.html`: 首页
- `courses/<course>/index.html`: 课程页
- `courses/<course>/<section>/index.html`: 课程子页面，例如 `概念`
- `courses/<course>/<section>/<topic>.html`: 知识点页
- `assets/data.js`: 课程与知识点数据
- `assets/content.js`: 知识点正文内容
- `assets/app.js`: 页面渲染与复习状态
- `assets/style.css`: 共享样式
- `assets/review-map.svg`: 首页复习地图视觉资源
- `tools/build-pages.js`: 根据 `assets/data.js` 生成页面

## 当前页面

- 首页：`index.html`
- 跨文化交际：`courses/intercultural-communication/index.html`
- 概念：`courses/intercultural-communication/concepts/index.html`
- 知识点示例：`courses/intercultural-communication/concepts/generalizations.html`

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

知识点正文可以写在对应知识点对象的 `contentHtml` 字段中，也可以放在 `reference/概念定义.md` 后运行导入脚本生成 `assets/content.js`。

```bash
node tools/import-reference.js
```

正文使用语义化 HTML 片段，外壳统一为：

```html
<div class="reply">
  <h2>核心概念</h2>
  <p>这里写正文。</p>
</div>
```

常用结构：

- 核心概念
- 考试重点
- 易混点
- 自测题

可用语义类：

- 布局：`.grid.grid-2`、`.grid.grid-3`、`.card`、`.row`、`.col`
- 对比：`.pros-cons`、`.pros`、`.cons`
- 状态：`.badge`、`.tags`、`.tag`、`.note`、`.warn`、`.tip`
- 结构：`.stats`、`.timeline`、`.checklist`
- 高级：`.tldr`、`.pullquote`、`.formula`、`.terminal`、`.dialog`、`.progress`
