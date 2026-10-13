import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const rawId = (params.quizId || '').trim();
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

    const mcqs = set.data.questions.map((q) => ({
      id: `${set.data.subject}-${set.data.topic}-${q.id}`,
      question: q.question,
      options: q.options,
      correctAnswer: q.answer,
      explanation: q.explanation || 'Detailed worked solution.',
      upvotes: 0,
      downvotes: 0,
      flagCount: 0,
      userVote: 0,
      isFlagged: false,
    }));

    return jsonResponse(mcqs);
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch MCQs: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
