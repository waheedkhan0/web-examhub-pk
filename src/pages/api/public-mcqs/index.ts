import type { APIRoute } from 'astro';
import { getAllMCQs, jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
    const limit = Math.max(1, Math.min(100, parseInt(url.searchParams.get('limit') || '10', 10)));
    const categoryId = url.searchParams.get('categoryId')?.trim().toLowerCase();

    let allQuestions = await getAllMCQs();

    if (categoryId) {
      const cleanCat = categoryId.replace(/^exam-/, '');
      allQuestions = allQuestions.filter(
        (q) =>
          q.subject === cleanCat ||
          q.topic === cleanCat ||
          q.targetExams.some((ex: string) => ex.toLowerCase() === cleanCat)
      );
    }

    const total = allQuestions.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const startIndex = (page - 1) * limit;
    const paginated = allQuestions.slice(startIndex, startIndex + limit);

    const formattedData = paginated.map((q) => ({
      id: q.id,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      upvotes: q.upvotes || 0,
      downvotes: q.downvotes || 0,
      flagCount: q.flagCount || 0,
      userVote: q.userVote || 0,
      isFlagged: q.isFlagged || false,
    }));

    return jsonResponse({
      data: formattedData,
      total,
      page,
      limit,
      totalPages,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch public MCQs: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
