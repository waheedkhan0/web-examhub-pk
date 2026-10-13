import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const blogPosts = await getCollection('blog');
    const sorted = blogPosts.sort(
      (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
    );

    const posts = sorted.map((b) => ({
      id: b.slug,
      title: b.data.title,
      slug: b.slug,
      excerpt: b.data.description,
      content: b.body,
      coverImage: '/og-image.png',
      createdAt: new Date(b.data.publishDate).toISOString(),
      author: {
        name: b.data.author || 'ExamHub Editorial Team',
      },
      category: {
        name: b.data.category || 'Exam Preparation',
      },
      tags: (b.data.tags || []).map((t) => ({ name: t })),
    }));

    return jsonResponse(posts);
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch blog posts: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
