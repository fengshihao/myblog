---
title: '评论系统为什么选 Giscus'
description: '静态站没有后端时，怎样用 GitHub Discussions 接上留言。'
pubDate: 'Sep 16 2026'
heroImage: '../../assets/blog-placeholder-3.jpg'
---

静态托管不能在服务端存评论。Giscus 的做法是：**评论存在 GitHub Discussions，页面只嵌一个前端脚本。**

## 数据流

```mermaid
sequenceDiagram
  participant R as 读者
  participant P as 博客页面
  participant G as giscus.app
  participant D as GitHub Discussions

  R->>P: 打开文章
  P->>G: 加载评论组件
  G->>D: 按页面路径查找 Discussion
  D-->>G: 返回评论线程
  G-->>P: 渲染评论框
  R->>G: 用 GitHub 账号发表评论
  G->>D: 写入 Discussion
```

## 取舍

优点：

- 不用自建数据库
- 登录、反垃圾基本交给 GitHub
- 评论可在仓库 Discussions 里管理

代价：

- 评论者通常需要 GitHub 账号
- 仓库一般要公开
- 依赖第三方前端脚本在线

对本站这种个人技术博客，这个取舍可以接受。
