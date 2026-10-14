import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const rawSubject = (
      url.searchParams.get('subject') ||
      url.searchParams.get('category') ||
      url.searchParams.get('categoryId') ||
      ''
    ).trim().toLowerCase();
    const cleanSubject = rawSubject.replace(/^exam-/, '');

    const mcqSets = await getCollection('mcqs');
    
    // Group MCQ sets by (subject + topic)
    const topicMap = new Map<string, {
      id: string;
      slug: string;
      name: string;
      subject: string;
      subjectName: string;
      questionCount: number;
      difficulty: string;
      targetExams: string[];
    }>();

    for (const set of mcqSets) {
      const subject = set.data.subject;
      if (cleanSubject && subject !== cleanSubject) {
        continue;
      }

      const topic = set.data.topic;
      const key = `${subject}/${topic}`;
      const count = set.data.questions?.length || 0;

      if (!topicMap.has(key)) {
        topicMap.set(key, {
          id: `${subject}-${topic}`,
          slug: topic,
          name: set.data.topicName || topic,
          subject,
          subjectName: set.data.subjectName || subject,
          questionCount: count,
          difficulty: set.data.difficulty || 'Exam-Level',
          targetExams: set.data.targetExams || [],
        });
      } else {
        const existing = topicMap.get(key)!;
        existing.questionCount += count;
      }
    }

    const topics = Array.from(topicMap.values()).sort((a, b) => b.questionCount - a.questionCount);

    return jsonResponse({
      data: topics,
      total: topics.length,
      subject: cleanSubject || null,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch topics: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
