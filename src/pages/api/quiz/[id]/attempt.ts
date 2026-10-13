import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../../lib/api-helpers';

export const prerender = false;

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const rawId = (params.id || '').trim();
    const body = await request.json();
    const userAnswers: Record<string, number> = body.answers || {};

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

    let score = 0;
    const questions = set.data.questions;
    const total = questions.length;
    const details: any[] = [];

    questions.forEach((q) => {
      const mcqId = `${set.data.subject}-${set.data.topic}-${q.id}`;
      // Allow lookup by full mcqId or numeric string q.id
      const ansGiven = userAnswers[mcqId] !== undefined
        ? userAnswers[mcqId]
        : (userAnswers[String(q.id)] !== undefined ? userAnswers[String(q.id)] : null);

      const isCorrect = ansGiven !== null && ansGiven === q.answer;
      if (isCorrect) {
        score++;
      }

      details.push({
        mcqId,
        question: q.question,
        userAnswer: ansGiven,
        correctAnswer: q.answer,
        isCorrect,
        explanation: q.explanation || 'Detailed worked solution.',
      });
    });

    const percentage = total > 0 ? Math.round((score / total) * 10000) / 100 : 0;
    const resultId = `result-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

    return jsonResponse({
      success: true,
      resultId,
      score,
      total,
      percentage,
      details,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to submit quiz attempt: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
