/** 保证带尾斜杠，避免 `/myblog` + `blog` 变成 `/myblogblog` */
export function withBase(path = ''): string {
	const raw = import.meta.env.BASE_URL || '/';
	const base = raw.endsWith('/') ? raw : `${raw}/`;
	if (!path || path === '/') return base;
	return `${base}${path.replace(/^\//, '')}`;
}
