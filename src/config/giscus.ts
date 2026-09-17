/**
 * Giscus 配置
 *
 * 完成以下步骤后，把值填到这里：
 * 1. 仓库设为 Public，并开启 Discussions
 * 2. 安装 Giscus App：https://github.com/apps/giscus
 * 3. 打开 https://giscus.app/zh-CN ，选仓库与分类，复制生成的 data-* 值
 */
export const GISCUS = {
	repo: 'fengshihao/myblog' as `${string}/${string}`,
	/** 在 giscus.app 生成，形如 R_kgDO... */
	repoId: '',
	category: 'Announcements',
	/** 在 giscus.app 生成，形如 DIC_kwDO... */
	categoryId: '',
	mapping: 'pathname' as const,
	strict: '0' as const,
	reactionsEnabled: '1' as const,
	emitMetadata: '0' as const,
	inputPosition: 'top' as const,
	theme: 'preferred_color_scheme' as const,
	lang: 'zh-CN' as const,
};

export const isGiscusConfigured = Boolean(GISCUS.repoId && GISCUS.categoryId);
