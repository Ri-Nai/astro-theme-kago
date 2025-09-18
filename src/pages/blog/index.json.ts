import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => {
    return !data.draft;
  });

  const postsData = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    url: `/blog/${post.id}`,
    date: post.data.pubDate.toISOString(),
    category: post.data.category,
    tags: post.data.tags,
    author: post.data.author,
  }));

  return new Response(JSON.stringify(postsData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
