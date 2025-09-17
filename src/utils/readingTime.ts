/**
 * 计算阅读时间工具函数
 * 根据文本内容估算阅读时间
 */

interface ReadingTimeResult {
  minutes: number;
  words: number;
  text: string;
}

/**
 * 计算阅读时间
 * @param content Markdown 内容
 * @param wordsPerMinute 每分钟阅读字数，默认为中文 300 字/分钟
 * @returns 阅读时间信息
 */
export function calculateReadingTime(
  content: string, 
  wordsPerMinute: number = 300
): ReadingTimeResult {
  // 移除 Markdown 语法
  const cleanContent = content
    // 移除代码块
    .replace(/```[\s\S]*?```/g, '')
    // 移除行内代码
    .replace(/`[^`]*`/g, '')
    // 移除链接
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // 移除图片
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    // 移除 HTML 标签
    .replace(/<[^>]*>/g, '')
    // 移除 Markdown 标题符号
    .replace(/^#{1,6}\s+/gm, '')
    // 移除列表符号
    .replace(/^[\s]*[-*+]\s+/gm, '')
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // 移除引用符号
    .replace(/^>\s+/gm, '')
    // 移除分隔线
    .replace(/^---+$/gm, '')
    .replace(/^\*\*\*+$/gm, '')
    // 移除加粗和斜体符号
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // 移除删除线
    .replace(/~~([^~]+)~~/g, '$1')
    // 移除多余的空白字符
    .replace(/\s+/g, ' ')
    .trim();

  // 计算字数（中英文混合）
  const chineseChars = (cleanContent.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (cleanContent.match(/[a-zA-Z]+/g) || []).length;
  const numbers = (cleanContent.match(/\d+/g) || []).length;
  
  // 中文字符按 1 个字计算，英文单词按 0.5 个字计算（因为英文阅读速度通常更快）
  const totalWords = chineseChars + Math.ceil(englishWords * 0.5) + Math.ceil(numbers * 0.3);
  
  // 计算阅读时间（分钟），至少 1 分钟
  const minutes = Math.max(1, Math.ceil(totalWords / wordsPerMinute));
  
  // 生成阅读时间文本
  let text = '';
  if (minutes < 60) {
    text = `${minutes} 分钟`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if (remainingMinutes === 0) {
      text = `${hours} 小时`;
    } else {
      text = `${hours} 小时 ${remainingMinutes} 分钟`;
    }
  }
  
  return {
    minutes,
    words: totalWords,
    text
  };
}

/**
 * 从 Astro CollectionEntry 计算阅读时间
 * @param post Astro 博客文章对象
 * @param wordsPerMinute 每分钟阅读字数
 * @returns 阅读时间信息
 */
export async function getReadingTime(
  post: any, 
  wordsPerMinute: number = 300
): Promise<ReadingTimeResult> {
  // 获取文章的原始内容
  const content = post.body || '';
  return calculateReadingTime(content, wordsPerMinute);
}
