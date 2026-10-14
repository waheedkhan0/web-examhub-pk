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

export interface EnrichedMCQ {
  id: string;
  numericId: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correctAnswerText: string;
  answerLetter: string;
  explanation: string;
  keyConcept: string | null;
  examTip: string | null;
  testedIn: string[];
  subject: string;
  subjectName: string;
  topic: string;
  topicName: string;
  difficulty: string;
  targetExams: string[];
  upvotes: number;
  downvotes: number;
  flagCount: number;
  userVote: number;
  isFlagged: boolean;
}

// In-memory cache for all MCQs and indexed structures to provide rapid responses to Flutter
interface CacheStore {
  all: EnrichedMCQ[];
  bySubject: Map<string, EnrichedMCQ[]>;
  byTopic: Map<string, EnrichedMCQ[]>;
  timestamp: number;
}

let cacheStore: CacheStore | null = null;
const CACHE_TTL = 3 * 60 * 1000; // 3 minutes

export async function getMCQStore(): Promise<CacheStore> {
  const now = Date.now();
  if (cacheStore && now - cacheStore.timestamp < CACHE_TTL) {
    return cacheStore;
  }

  const mcqSets = await getCollection('mcqs');
  const all: EnrichedMCQ[] = [];
  const bySubject = new Map<string, EnrichedMCQ[]>();
  const byTopic = new Map<string, EnrichedMCQ[]>();

  for (const set of mcqSets) {
    const subject = set.data.subject;
    const topic = set.data.topic;
    const subjectName = set.data.subjectName || subject;
    const topicName = set.data.topicName || topic;
    const difficulty = set.data.difficulty || 'Exam-Level';
    const targetExams = set.data.targetExams || [];

    let subjectList = bySubject.get(subject);
    if (!subjectList) {
      subjectList = [];
      bySubject.set(subject, subjectList);
    }

    let topicList = byTopic.get(topic);
    if (!topicList) {
      topicList = [];
      byTopic.set(topic, topicList);
    }

    for (const q of set.data.questions) {
      const ansIdx = typeof q.answer === 'number' && q.answer >= 0 && q.answer < (q.options?.length || 4)
        ? q.answer
        : 0;
      const ansLetter = String.fromCharCode(65 + ansIdx);
      const ansText = Array.isArray(q.options) && q.options[ansIdx] ? q.options[ansIdx] : '';

      const item: EnrichedMCQ = {
        id: `${subject}-${topic}-${q.id}`,
        numericId: q.id,
        question: q.question,
        options: Array.isArray(q.options) ? q.options : [],
        correctAnswer: ansIdx,
        correctAnswerText: ansText,
        answerLetter: ansLetter,
        explanation: q.explanation || 'Detailed worked solution.',
        keyConcept: q.keyConcept || null,
        examTip: q.examTip || null,
        testedIn: Array.isArray(q.testedIn) ? q.testedIn : [],
        subject,
        subjectName,
        topic,
        topicName,
        difficulty,
        targetExams,
        upvotes: 0,
        downvotes: 0,
        flagCount: 0,
        userVote: 0,
        isFlagged: false,
      };

      all.push(item);
      subjectList.push(item);
      topicList.push(item);
    }
  }

  cacheStore = {
    all,
    bySubject,
    byTopic,
    timestamp: now,
  };

  return cacheStore;
}

export async function getAllMCQs(): Promise<EnrichedMCQ[]> {
  const store = await getMCQStore();
  return store.all;
}
