/**
 * 图片路径处理工具函数
 * 统一管理项目中所有图片路径的处理逻辑
 */

import { getAssetPath } from './pathUtils';

export interface ImagePathOptions {
  /** 图片基础路径 */
  basePath?: string;
  /** 当前页面路径，用于自动推断图片路径 */
  currentPath?: string;
}

/**
 * 处理图片路径，支持多种路径格式
 * @param imageSrc 原始图片路径
 * @param options 配置选项
 * @returns 处理后的图片路径
 */
export function getImagePath(imageSrc: string, options: ImagePathOptions = {}): string {
  if (!imageSrc) return "";

  const { basePath, currentPath } = options;

  // 如果是绝对路径或外部链接，直接返回
  if (imageSrc.startsWith("/") || imageSrc.startsWith("http")) {
    return imageSrc;
  }

  // 对于相对路径，添加basePath（如果提供了的话）
  if (basePath) {
    return `${basePath}/${imageSrc}`;
  }

  // 尝试自动推断basePath（基于当前文件路径）
  if (currentPath && currentPath.includes('/blog/')) {
    // 从URL路径推断图片路径
    const pathParts = currentPath.split('/');
    const blogIndex = pathParts.indexOf('blog');
    if (blogIndex !== -1 && pathParts.length > blogIndex + 1) {
      const blogPath = pathParts.slice(blogIndex + 1).join('/');
      return getAssetPath(`/imgs/blog/${blogPath}/${imageSrc}`);
    }
  }

  // 如果没有提供basePath且无法自动推断，返回原路径
  return imageSrc;
}

/**
 * 为Astro组件提供的图片路径处理函数
 * 自动从Astro.url.pathname获取当前路径
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
  return getImagePath(imageSrc, {
    basePath,
    currentPath: astroUrl?.pathname
  });
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
  return getAssetPath(`/imgs/blog/${year}/${month}/${day}/${title}/${imageName}`);
}

/**
 * 检查图片路径是否为外部链接
 * @param imageSrc 图片路径
 * @returns 是否为外部链接
 */
export function isExternalImage(imageSrc: string): boolean {
  return imageSrc.startsWith("http://") || imageSrc.startsWith("https://");
}

/**
 * 检查图片路径是否为绝对路径
 * @param imageSrc 图片路径
 * @returns 是否为绝对路径
 */
export function isAbsolutePath(imageSrc: string): boolean {
  return imageSrc.startsWith("/");
}

/**
 * 获取图片的alt文本，如果没有提供则生成默认值
 * @param imageSrc 图片路径
 * @param alt 原始alt文本
 * @returns 处理后的alt文本
 */
export function getImageAlt(imageSrc: string, alt?: string): string {
  if (alt) return alt;

  // 从文件名生成alt文本
  const fileName = imageSrc.split('/').pop()?.split('.')[0] || '';
  return fileName || '图片';
}
