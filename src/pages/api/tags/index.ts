import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const mcqSets = await getCollection('mcqs');
    const exams = await getCollection('exams');

    const tagCounts = new Map<string, number>();

    mcqSets.forEach((set) => {
      (set.data.targetExams || []).forEach((t) => {
        const key = t.trim();
        tagCounts.set(key, (tagCounts.get(key) ?? 0) + 1);
      });
    });

    exams.forEach((exam) => {
      const key = exam.data.title.split(' ')[0];
      if (!tagCounts.has(key)) {
        tagCounts.set(key, 5);
      }
    });

    const tags = Array.from(tagCounts.entries()).map(([name, count]) => ({
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      quizCount: count,
    }));

    return jsonResponse({
      data: tags,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch tags: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
