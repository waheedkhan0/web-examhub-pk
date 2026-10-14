import type { APIRoute } from 'astro';
import { getMCQStore, jsonResponse, optionsResponse, type EnrichedMCQ } from '../../../lib/api-helpers';

export const prerender = false;

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const GET: APIRoute = async ({ url }) => {
  try {
    const page = Math.max(1, parseInt(url.searchParams.get('page') || '1', 10));
    const limit = Math.max(1, Math.min(100, parseInt(url.searchParams.get('limit') || '10', 10)));
    
    // Category / Subject filters (supports 'subject', 'category', 'categoryId')
    const rawCategory = (
      url.searchParams.get('subject') ||
      url.searchParams.get('category') ||
      url.searchParams.get('categoryId') ||
      ''
    ).trim().toLowerCase();
    const cleanCategory = rawCategory.replace(/^exam-/, '');

    const topicFilter = url.searchParams.get('topic')?.trim().toLowerCase() || null;
    const examFilter = (url.searchParams.get('exam') || url.searchParams.get('targetExam'))?.trim().toLowerCase() || null;
    const difficultyFilter = url.searchParams.get('difficulty')?.trim().toLowerCase() || null;
    const searchQuery = (url.searchParams.get('search') || url.searchParams.get('q'))?.trim().toLowerCase() || null;
    const isRandom = ['true', '1', 'yes'].includes(url.searchParams.get('random')?.toLowerCase() || '');

    const store = await getMCQStore();

    // Fast indexed path if filtering primarily by subject or topic
    let candidates: EnrichedMCQ[];
    if (topicFilter && store.byTopic.has(topicFilter)) {
      candidates = store.byTopic.get(topicFilter)!;
    } else if (cleanCategory && store.bySubject.has(cleanCategory)) {
      candidates = store.bySubject.get(cleanCategory)!;
    } else {
      candidates = store.all;
    }

    // Apply secondary filters
    let filtered = candidates;

    if (cleanCategory && !store.bySubject.has(cleanCategory)) {
      // Could be an exam category like 'exam-fpsc' or topic
      filtered = filtered.filter((q) =>
        q.subject === cleanCategory ||
        q.topic === cleanCategory ||
        q.targetExams.some((ex) => ex.toLowerCase() === cleanCategory)
      );
    }

    if (topicFilter && filtered === store.all) {
      filtered = filtered.filter((q) => q.topic === topicFilter);
    }

    if (examFilter) {
      filtered = filtered.filter((q) =>
        q.targetExams.some((ex) => ex.toLowerCase().includes(examFilter))
      );
    }

    if (difficultyFilter) {
      filtered = filtered.filter((q) =>
        q.difficulty.toLowerCase() === difficultyFilter
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((q) =>
        q.question.toLowerCase().includes(searchQuery) ||
        q.options.some((opt) => opt.toLowerCase().includes(searchQuery)) ||
        q.explanation.toLowerCase().includes(searchQuery) ||
        (q.keyConcept && q.keyConcept.toLowerCase().includes(searchQuery))
      );
    }

    // Shuffle if random mode requested (e.g. mock test generation in Flutter)
    if (isRandom) {
      filtered = shuffleArray(filtered);
    }

    const total = filtered.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const startIndex = (page - 1) * limit;
    const paginated = filtered.slice(startIndex, startIndex + limit);

    return jsonResponse({
      data: paginated,
      total,
      page,
      limit,
      totalPages,
      filters: {
        subject: cleanCategory || null,
        topic: topicFilter,
        exam: examFilter,
        difficulty: difficultyFilter,
        search: searchQuery,
        random: isRandom,
      },
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch public MCQs: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
