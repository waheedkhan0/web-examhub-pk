import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const rawId = (params.id || '').trim();
    const mcqSets = await getCollection('mcqs');

    const set = mcqSets.find(
      (s) =>
        s.slug === rawId ||
        s.slug.replace(/\//g, '-') === rawId ||
        s.data.topic === rawId
    );

    if (!set) {
      return jsonResponse({ error: 'Quiz not found' }, 404);
    }

    const qCount = set.data.questions.length;
    const quiz = {
      id: set.slug.replace(/\//g, '-'),
      title: set.data.title,
      slug: set.slug,
      description: set.data.description,
      categoryId: set.data.subject,
      category: {
        id: set.data.subject,
        name: set.data.subjectName,
        slug: set.data.subject,
      },
      timeLimit: Math.max(10, Math.ceil(qCount * 0.8)),
      _count: {
        mcqs: qCount,
      },
      tags: (set.data.targetExams || ['FPSC', 'KPPSC']).map((t) => ({
        id: t.toLowerCase(),
        name: t,
        slug: t.toLowerCase(),
        quizCount: 1,
      })),
    };

    return jsonResponse(quiz);
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch quiz: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
