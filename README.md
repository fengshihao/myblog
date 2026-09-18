# myblog

基于 [Astro](https://astro.build) 的个人博客，部署到 GitHub Pages，评论使用 [Giscus](https://giscus.app/zh-CN)。

线上地址（部署后）：https://fengshihao.github.io/myblog/

## 本地开发

```bash
npm install
npm run dev
```

## 写文章

在 `src/content/blog/` 新建 Markdown / MDX，填好 frontmatter（title、description、pubDate 等）。

### 用 Cursor Agent 写日志（推荐）

本仓库自带 Agent Skill：`.cursor/skills/write-blog-log/`。

1. 用 Cursor 打开本仓库
2. 对 Agent 说：把草稿润色成一篇日志，或「按写日志 skill 发布」
3. Agent 会先给出润色预览；你回复「确认」后才会写入文件并（在你要求发布时）提交 / 推送

其他人 fork 后也可直接复用该 skill；若改了内容目录或文风，编辑 skill 里的「本仓库约定」和 `style.md` 即可。

## 部署到 GitHub Pages

1. 在 GitHub 创建公共仓库 `fengshihao/myblog`，并推送代码
2. 仓库 **Settings → Pages → Build and deployment → Source** 选 **GitHub Actions**
3. 推送到 `main` / `master` 后，工作流 `.github/workflows/deploy.yml` 会自动构建并发布

若仓库名不是 `myblog`，请同步修改 `astro.config.mjs` 里的 `base`。

## 启用 Giscus 评论

1. 仓库保持 **Public**
2. **Settings → General → Features** 打开 **Discussions**
3. 安装 [Giscus GitHub App](https://github.com/apps/giscus)，授权本仓库
4. 打开 [giscus.app/zh-CN](https://giscus.app/zh-CN)，选择仓库与 Discussion 分类
5. 把生成的 `repoId`、`categoryId`（以及分类名）填进 `src/config/giscus.ts`
6. 提交推送后，文章页底部会出现评论框

未配置时，文章页会显示占位提示，不影响站点其它功能。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 本地开发 |
| `npm run build` | 构建到 `dist/` |
| `npm run preview` | 预览构建结果 |
