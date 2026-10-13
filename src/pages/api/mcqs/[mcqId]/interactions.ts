import type { APIRoute } from 'astro';
import { jsonResponse, optionsResponse } from '../../../../lib/api-helpers';

export const prerender = false;

// In-memory interactions state
const interactionStore = new Map<string, { upvotes: number; downvotes: number; flagCount: number }>();

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const mcqId = (params.mcqId || '').trim();
    const body = await request.json();
    const { action } = body;

    let current = interactionStore.get(mcqId);
    if (!current) {
      current = { upvotes: 0, downvotes: 0, flagCount: 0 };
      interactionStore.set(mcqId, current);
    }

    let userVote = 0;
    let isFlagged = false;

    if (action === 'upvote') {
      current.upvotes++;
      userVote = 1;
    } else if (action === 'downvote') {
      current.downvotes++;
      userVote = -1;
    } else if (action === 'clearVote') {
      userVote = 0;
    } else if (action === 'flag') {
      current.flagCount++;
      isFlagged = true;
    } else if (action === 'unflag') {
      if (current.flagCount > 0) current.flagCount--;
      isFlagged = false;
    }

    return jsonResponse({
      upvotes: current.upvotes,
      downvotes: current.downvotes,
      flagCount: current.flagCount,
      userVote,
      isFlagged,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to record interaction: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
