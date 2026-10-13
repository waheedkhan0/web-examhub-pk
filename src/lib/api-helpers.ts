import { getCollection } from 'astro:content';

export const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Accept',
};

export function jsonResponse(data: any, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export function optionsResponse(): Response {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

// In-memory cache for all MCQs to provide rapid responses
let cachedMCQs: any[] | null = null;
let lastCacheTime = 0;
const CACHE_TTL = 60 * 1000; // 1 minute

export async function getAllMCQs() {
  const now = Date.now();
  if (cachedMCQs && now - lastCacheTime < CACHE_TTL) {
    return cachedMCQs;
  }

  const mcqSets = await getCollection('mcqs');
  const all: any[] = [];

  for (const set of mcqSets) {
    const subject = set.data.subject;
    const topic = set.data.topic;

    for (const q of set.data.questions) {
      all.push({
        id: `${subject}-${topic}-${q.id}`,
        numericId: q.id,
        question: q.question,
        options: q.options,
        correctAnswer: q.answer, // 0-indexed int
        explanation: q.explanation || 'Detailed worked solution.',
        subject,
        subjectName: set.data.subjectName,
        topic,
        topicName: set.data.topicName,
        targetExams: set.data.targetExams || [],
        upvotes: 0,
        downvotes: 0,
        flagCount: 0,
        userVote: 0,
        isFlagged: false,
      });
    }
  }

  cachedMCQs = all;
  lastCacheTime = now;
  return all;
}
