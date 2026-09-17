---
title: '一张图看懂构建产物'
description: '构建之后仓库里真正上线的是哪些文件，哪些只是源码。'
pubDate: 'Sep 15 2026'
heroImage: '../../assets/blog-placeholder-4.jpg'
---

很多人把「源码仓库」和「线上网站」混为一谈。其实推到 GitHub 的是源码；读者访问到的是构建后的静态文件。

## 源码 vs 产物

```mermaid
flowchart TB
  subgraph repo [仓库里]
    MD[Markdown 文章]
    ASTRO[Astro 组件 / 布局]
    CSS[全局样式]
  end

  subgraph dist [构建产物 dist]
    HTML[HTML 页面]
    ASSET[优化后的图片与 CSS]
    RSS[RSS / Sitemap]
  end

  MD --> HTML
  ASTRO --> HTML
  CSS --> ASSET
  MD --> RSS
```

## 图片也会被处理

正文和封面图会走资源管道：压缩、生成合适尺寸，避免原图直接砸给访客。

![示例配图](../../assets/blog-placeholder-5.jpg)

## 本地预览构建结果

```bash
npm run build
npm run preview
```

`dev` 看的是开发态；`preview` 更接近上线后的静态文件表现。
