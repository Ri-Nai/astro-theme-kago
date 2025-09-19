// SVG 工具函数

// 预加载所有 public/icons 目录下的 SVG 文件
const svgModules = import.meta.glob<{ default: string }>('/public/icons/*.svg', {
  query: '?raw',
  eager: true
});

// 社交链接类型定义
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

/**
 * 根据社交链接配置获取 SVG 内容
 * @param socialLinks 社交链接配置数组
 * @returns SVG 内容映射对象
 */
export function getSvgContents(socialLinks: SocialLink[]): Record<string, string> {
  const svgContents: Record<string, string> = {};

  for (const link of socialLinks) {
    if (link.icon.startsWith('/icons/')) {
      const svgPath = `/public${link.icon}`;

      // 检查是否存在对应的 SVG 模块
      if (svgModules[svgPath]) {
        try {
          svgContents[link.icon] = svgModules[svgPath].default;
        } catch (error) {
          console.error(`Failed to get SVG content for: ${link.icon}`, error);
          svgContents[link.icon] = '';
        }
      } else {
        console.warn(`SVG file not found: ${svgPath}`);
        svgContents[link.icon] = '';
      }
    }
  }

  return svgContents;
}

/**
 * 获取单个 SVG 文件的内容
 * @param iconPath 图标路径（如 '/icons/github.svg'）
 * @returns SVG 内容字符串
 */
export function getSvgContent(iconPath: string): string {
  if (!iconPath.startsWith('/icons/')) {
    return '';
  }

  const svgPath = `/public${iconPath}`;

  if (svgModules[svgPath]) {
    try {
      return svgModules[svgPath].default;
    } catch (error) {
      console.error(`Failed to get SVG content for: ${iconPath}`, error);
      return '';
    }
  }

  console.warn(`SVG file not found: ${svgPath}`);
  return '';
}
