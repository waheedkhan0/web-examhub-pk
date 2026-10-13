import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const slug = (params.slug || '').trim();
    const blogPosts = await getCollection('blog');
    const post = blogPosts.find((b) => b.slug === slug);

    if (!post) {
      return jsonResponse({ error: 'Blog post not found' }, 404);
    }

    const item = {
      id: post.slug,
      title: post.data.title,
      slug: post.slug,
      excerpt: post.data.description,
      content: post.body,
      coverImage: '/og-image.png',
      createdAt: new Date(post.data.publishDate).toISOString(),
      author: {
        name: post.data.author || 'ExamHub Editorial Team',
      },
      category: {
        name: post.data.category || 'Exam Preparation',
      },
      tags: (post.data.tags || []).map((t) => ({ name: t })),
    };

    return jsonResponse(item);
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch blog post: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
