# 期末复习站

轻量静态复习网站，使用 HTML、CSS 和原生 JavaScript。

## 结构

- `index.html`: 首页
- `courses/<course>/index.html`: 课程页
- `courses/<course>/<section>/index.html`: 课程子页面，例如 `概念`
- `courses/<course>/<section>/<topic>.html`: 知识点页
- `assets/data.js`: 课程与知识点数据
- `assets/app.js`: 页面渲染与复习状态
- `assets/style.css`: 共享样式
- `tools/build-pages.js`: 根据 `assets/data.js` 生成页面

## 生成页面

```bash
node tools/build-pages.js
```

## 本地预览

```bash
python3 -m http.server 6690 --bind 0.0.0.0
```
