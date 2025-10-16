/**
 * 路径处理工具函数
 * 统一管理项目中所有路径的处理逻辑，支持 Astro base 配置
 */

/**
 * 获取基础路径（BASE_URL）
 * 在开发环境中返回空字符串，在生产环境中返回配置的 base 值
 * 确保末尾没有斜杠以避免与路径拼接时产生双斜杠
 */
export function getBasePath(): string {
  // 使用 import.meta.env.BASE_URL 获取配置的 base 路径
  const baseUrl = import.meta.env.BASE_URL || '';

  // 去掉末尾的斜杠，避免与路径拼接时产生双斜杠
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
}

/**
 * 规范化路径，确保正确的斜杠处理
 * @param path 原始路径
 * @returns 规范化后的路径
 */
export function normalizePath(path: string): string {
  if (!path) return '';

  // 确保末尾有斜杠（除非是空路径）
  if (path.length > 0 && !path.endsWith('/')) {
    path = path + '/';
  }

  return path;
}

/**
 * 处理内部链接路径，自动添加 base 前缀
 * @param path 原始路径
 * @returns 处理后的路径
 */
export function getInternalPath(path: string): string {
  if (!path) return '';

  // 如果已经是绝对路径或外部链接，直接返回
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // 添加 base 前缀
  const basePath = getBasePath();

  // 对于内部页面链接，确保末尾有斜杠
  return ensureTrailingSlash(`${basePath}${normalizedPath}`);
}

/**
 * 处理静态资源路径（图片、CSS、JS等），自动添加 base 前缀
 * @param assetPath 静态资源路径
 * @returns 处理后的路径
 */
export function getAssetPath(assetPath: string): string {
  if (!assetPath) return '';

  // 如果是外部链接，直接返回
  if (assetPath.startsWith('http://') || assetPath.startsWith('https://')) {
    return assetPath;
  }

  // 确保路径以 / 开头
  const normalizedPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;

  // 添加 base 前缀
  const basePath = getBasePath();

  // 对于静态资源，我们不添加末尾斜杠，所以不调用 normalizePath
  return `${basePath}${normalizedPath}`;
}

/**
 * 处理博客文章链接路径
 * @param slug 文章 slug
 * @returns 处理后的文章链接
 */
export function getBlogPostPath(slug: string): string {
  return getInternalPath(`/blog/${slug}`);
}

/**
 * 处理博客列表页面路径
 * @param params 查询参数（可选）
 * @returns 处理后的博客列表路径
 */
export function getBlogListPath(params?: { category?: string; tag?: string }): string {
  let path = '/blog/';

  if (params?.category) {
    path += `?category=${encodeURIComponent(params.category)}`;
  } else if (params?.tag) {
    path += `?tag=${encodeURIComponent(params.tag)}`;
  }

  return getInternalPath(path);
}

/**
 * 处理导航链接路径
 * @param href 原始链接
 * @returns 处理后的链接
 */
export function getNavPath(href: string): string {
  return getInternalPath(href);
}

/**
 * 处理图片路径，支持相对路径和绝对路径
 * @param imageSrc 原始图片路径
 * @param basePath 可选的图片基础路径
 * @param currentPath 当前页面路径（用于自动推断）
 * @returns 处理后的图片路径
 */
export function getImagePath(
  imageSrc: string,
  basePath?: string,
  currentPath?: string
): string {
  if (!imageSrc) return '';

  // 如果是外部链接，直接返回
  if (imageSrc.startsWith('http://') || imageSrc.startsWith('https://')) {
    return imageSrc;
  }

  let finalPath = imageSrc;

  // 处理相对路径
  if (!imageSrc.startsWith('/')) {
    if (basePath) {
      finalPath = `${basePath}/${imageSrc}`;
    } else if (currentPath && currentPath.includes('/blog/')) {
      // 从URL路径推断图片路径
      const pathParts = currentPath.split('/');
      const blogIndex = pathParts.indexOf('blog');
      if (blogIndex !== -1 && pathParts.length > blogIndex + 1) {
        const blogPath = pathParts.slice(blogIndex + 1).join('/');
        finalPath = `/imgs/blog/${blogPath}/${imageSrc}`;
      }
    }
  }

  // 添加 base 前缀 (对于图片资源，我们不添加末尾斜杠)
  return getAssetPath(finalPath);
}

/**
 * 为 Astro 组件提供的图片路径处理函数
 * @param imageSrc 原始图片路径
 * @param basePath 可选的图片基础路径
 * @param astroUrl Astro的URL对象
 * @returns 处理后的图片路径
 */
export function getImagePathForAstro(
  imageSrc: string,
  basePath?: string,
  astroUrl?: { pathname: string }
): string {
  return getImagePath(imageSrc, basePath, astroUrl?.pathname);
}

/**
 * 生成博客文章的图片路径
 * @param year 年份
 * @param month 月份
 * @param day 日期
 * @param title 文章标题
 * @param imageName 图片文件名
 * @returns 完整的图片路径
 */
export function getBlogImagePath(
  year: number | string,
  month: number | string,
  day: number | string,
  title: string,
  imageName: string
): string {
  const path = `/imgs/blog/${year}/${month}/${day}/${title}/${imageName}`;
  return getAssetPath(path);
}

/**
 * 检查路径是否为外部链接
 * @param path 路径
 * @returns 是否为外部链接
 */
export function isExternalPath(path: string): boolean {
  return path.startsWith('http://') || path.startsWith('https://');
}

/**
 * 检查路径是否为绝对路径
 * @param path 路径
 * @returns 是否为绝对路径
 */
export function isAbsolutePath(path: string): boolean {
  return path.startsWith('/');
}

/**
 * 获取图片的 alt 文本，如果没有提供则生成默认值
 * @param imageSrc 图片路径
 * @param alt 原始 alt 文本
 * @returns 处理后的 alt 文本
 */
export function getImageAlt(imageSrc: string, alt?: string): string {
  if (alt) return alt;

  // 从文件名生成 alt 文本
  const fileName = imageSrc.split('/').pop()?.split('.')[0] || '';
  return fileName || '图片';
}

/**
 * 处理 API 路径（如 JSON 文件）
 * @param apiPath API 路径
 * @returns 处理后的 API 路径
 */
export function getApiPath(apiPath: string): string {
  return getAssetPath(apiPath);
}

/**
 * 确保页面路径末尾有斜杠
 * @param path 原始路径
 * @returns 处理后的路径（带斜杠）
 */
export function ensureTrailingSlash(path: string): string {
  if (!path) return '/';
  return path.endsWith('/') ? path : `${path}/`;
}
