import { getCollection, type CollectionEntry } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }: CollectionEntry<'blog'>) => {
    return !data.draft;
  });

  const postsData = posts.map((post: CollectionEntry<'blog'>) => {
    // 确保 pubDate 是有效的 Date 对象
    let dateString = '';
    try {
      if (post.data.pubDate instanceof Date) {
        dateString = post.data.pubDate.toISOString();
      } else if (typeof post.data.pubDate === 'string') {
        dateString = new Date(post.data.pubDate).toISOString();
      } else {
        dateString = new Date().toISOString(); // 使用当前日期作为后备
      }
    } catch (error) {
      console.error(`日期转换错误: ${error}`);
      dateString = new Date().toISOString(); // 错误时使用当前日期
    }

    return {
      title: post.data.title,
      description: post.data.description,
      url: `/blog/${post.slug}`, // 使用 slug 而不是 id
      date: dateString,
      category: post.data.category,
      tags: post.data.tags,
      author: post.data.author,
    };
  });

  return new Response(JSON.stringify(postsData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
