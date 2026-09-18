---
name: write-blog-log
description: >-
  Draft, polish, format, and publish Astro blog posts under
  src/content/blog/. Use when the user wants to 写日志, 写博客,
  润色文章, 排版发布, or turn rough notes into a new Markdown post
  for this repo (or a fork of it).
---

# 写日志

把用户的草稿润色成站内风格的 Markdown，**经用户确认后**再写入仓库并发布。

本技能随仓库开源：fork 后可直接复用；若改了内容目录或 frontmatter，先改文末「本仓库约定」。

## 何时使用

- 用户丢来一段想法 / 草稿，要润色、排版、发成最新一篇日志
- 用户说「写日志」「发博客」「润色后发布」等

## 工作流（必须按序）

```
进度:
- [ ] 1. 收集草稿与意图
- [ ] 2. 润色排版，给出完整预览
- [ ] 3. 等用户明确确认
- [ ] 4. 写入文章文件
- [ ] 5. 提交（用户要发布时再 push）
```

### 1. 收集

若用户只给了正文，可简短确认标题、日期（默认今天）、语气。信息够就直接出预览，少追问。

### 2. 润色与排版（先预览，不写文件）

预览须包含：

1. 建议 slug（文件名，无扩展名）
2. frontmatter（title / description / pubDate）
3. 正文 Markdown

风格见 [style.md](style.md)。文末问：

> 确认发布？回复「确认」或说明要改的地方。

### 3. 等待确认（硬门禁）

用户明确说「确认 / 发布 / 可以发」之前，禁止写盘、`git commit`、`git push`。  
只说「再改改」→ 只改预览。

### 4. 写入

确认后写入约定目录（见下）。slug 先查重；默认不加 `heroImage`。

### 5. 发布

1. 按仓库规范查看 status / diff / log
2. 通常只 add 这一篇 Markdown
3. commit，例如：`Add blog post: <title>`
4. 用户意图含「发布」则 `git push`（本仓库 push 到 master/main 会触发 GitHub Pages）
5. 仅确认写入时只 commit，并提示可自行 push

## 本仓库约定（fork 时可改）

| 项 | 值 |
| --- | --- |
| 文章目录 | `src/content/blog/` |
| 扩展名 | `.md` 或 `.mdx` |
| 必填 frontmatter | `title`, `description`, `pubDate` |
| `pubDate` 格式 | 英文月名，如 `Sep 18 2026` |
| 线上路径 | `{base}blog/<slug>/`（本站 `base` 为 `/myblog/`） |
| 列表排序 | `pubDate` 倒序，新文即「最新一篇」 |

```markdown
---
title: '标题'
description: '一句话摘要（列表与 SEO；不要在文首再重复）。'
pubDate: 'Mon DD YYYY'
---

开篇段。

## 小节（按需）

正文……
```

## 禁止

- 未经确认写盘或提交
- 改无关布局 / 主题（除非用户同时要求）
- 编造用户未提供的经历或技术结论
- 无必要地堆 emoji

## 给复用者

1. 保留 `.cursor/skills/write-blog-log/`
2. 按你的站点改「本仓库约定」和 [style.md](style.md)
3. 在 Cursor 中打开本仓库，对 Agent 说「按写日志 skill，帮我发一篇……」即可
