import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
    const limit = Math.max(1, Math.min(100, parseInt(url.searchParams.get('limit') || '20', 10)));
    const categoryId = url.searchParams.get('categoryId')?.trim().toLowerCase();
    const tag = url.searchParams.get('tag')?.trim().toLowerCase();

    const mcqSets = await getCollection('mcqs');
    let sets = [...mcqSets];

    if (categoryId) {
      sets = sets.filter(
        (s) =>
          s.data.subject.toLowerCase() === categoryId ||
          s.slug.toLowerCase().includes(categoryId)
      );
    }

    if (tag) {
      sets = sets.filter((s) =>
        s.data.targetExams.some((t) => t.toLowerCase().includes(tag))
      );
    }

    const startIndex = (page - 1) * limit;
    const paginated = sets.slice(startIndex, startIndex + limit);

    const quizzes = paginated.map((s) => {
      const qCount = s.data.questions.length;
      return {
        id: s.slug.replace(/\//g, '-'),
        title: s.data.title,
        slug: s.slug,
        description: s.data.description,
        categoryId: s.data.subject,
        category: {
          id: s.data.subject,
          name: s.data.subjectName,
          slug: s.data.subject,
        },
        timeLimit: Math.max(10, Math.ceil(qCount * 0.8)), // ~48 sec per question
        _count: {
          mcqs: qCount,
        },
        tags: (s.data.targetExams || ['FPSC', 'KPPSC']).map((t) => ({
          id: t.toLowerCase(),
          name: t,
          slug: t.toLowerCase(),
          quizCount: 1,
        })),
      };
    });

    return jsonResponse({
      data: quizzes,
      total: sets.length,
      page,
      limit,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch quizzes: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
