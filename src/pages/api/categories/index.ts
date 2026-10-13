import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const subjects = await getCollection('subjects');
    const mcqSets = await getCollection('mcqs');

    // Count MCQs per subject
    const subjectCounts = new Map<string, number>();
    for (const set of mcqSets) {
      const s = set.data.subject;
      subjectCounts.set(s, (subjectCounts.get(s) ?? 0) + set.data.questions.length);
    }

    const categories = subjects.map((sub, idx) => {
      const mcqCount = subjectCounts.get(sub.slug) ?? 0;
      return {
        id: sub.slug,
        name: sub.data.title,
        slug: sub.slug,
        description: sub.data.description,
        type: 'SUBJECT',
        icon: sub.data.icon || 'book',
        color: '#0d9488',
        order: idx + 1,
        _count: {
          mcqs: mcqCount,
        },
      };
    });

    // Also include key Exam categories (FPSC, KPPSC, FIA, etc.)
    const exams = await getCollection('exams');
    exams.forEach((exam, idx) => {
      categories.push({
        id: `exam-${exam.slug}`,
        name: exam.data.title,
        slug: exam.slug,
        description: exam.data.description,
        type: 'EXAM',
        icon: 'academic-cap',
        color: '#2563eb',
        order: 100 + idx,
        _count: {
          mcqs: 100,
        },
      });
    });

    return jsonResponse(categories);
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch categories: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
