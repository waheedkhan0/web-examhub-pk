import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { jsonResponse, optionsResponse } from '../../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  try {
    const rawId = (params.id || '').trim().toLowerCase();
    const cleanSubject = rawId.replace(/^exam-/, '');

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
        // Also check if targetExams match if it was an exam ID
        if (!set.data.targetExams?.some((e) => e.toLowerCase() === cleanSubject)) {
          continue;
        }
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
      category: cleanSubject,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch category topics: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
