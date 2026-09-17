---
title: '静态博客是怎么跑起来的'
description: '从 Markdown 到可访问网页：本地写作、构建、部署的完整链路。'
pubDate: 'Sep 17 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

个人博客看起来简单，实际分成三段：**写作**、**构建**、**托管**。搞清楚边界，后面换主题、加评论都不会慌。

## 总览

```mermaid
flowchart LR
  A[写 Markdown] --> B[Astro 构建]
  B --> C[生成 HTML / CSS / 图片]
  C --> D[GitHub Pages]
  D --> E[浏览器访问]
```

## 为什么不是「打开 md 就行」

GitHub 仓库页能预览 Markdown，那是 **github.com 的界面**在渲染。  
博客要的是独立域名路径、文章列表、统一排版——这些要在构建时生成一整站文件。

## 本仓库里对应的位置

| 环节 | 位置 |
| --- | --- |
| 文章 | `src/content/blog/*.md` |
| 页面结构 | `src/pages/` |
| 样式 | `src/styles/global.css` |
| 部署 | `.github/workflows/deploy.yml` |

构建命令很短：

```bash
npm run build
```

产物在 `dist/`，再由 Actions 发布到 Pages。

## 一张示意图

![抽象配图](../../assets/blog-placeholder-2.jpg)

![从 Markdown 到 Pages 的流水线](/myblog/diagram-pipeline.svg)

> 工具可以换，链路不变：内容是文件，站点是构建结果，服务器只负责把文件发出去。
