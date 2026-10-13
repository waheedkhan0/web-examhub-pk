import type { APIRoute } from 'astro';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const authHeader = request.headers.get('authorization') || '';
    let email = 'candidate@examhub.pk';
    let userId = 'usr_guest';

    if (authHeader.startsWith('Bearer eh_jwt_')) {
      try {
        const raw = authHeader.replace('Bearer eh_jwt_', '');
        const decoded = JSON.parse(Buffer.from(raw, 'base64').toString('utf-8'));
        email = decoded.email || email;
        userId = decoded.userId || userId;
      } catch {}
    }

    const profile = {
      id: userId,
      name: email.split('@')[0],
      email,
      image: null,
      role: 'user',
      subscription: 'free',
      subscriptionEnd: null,
      createdAt: '2026-01-01T00:00:00.000Z',
      stats: {
        quizzesAttempted: 15,
        bookmarkedMCQs: 8,
        mcqsVoted: 12,
      },
    };

    return jsonResponse(profile);
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to fetch user profile: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
