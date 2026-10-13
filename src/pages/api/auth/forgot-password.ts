import type { APIRoute } from 'astro';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return jsonResponse({ error: 'Email is required' }, 400);
    }

    return jsonResponse({
      success: true,
      message: 'Password reset link sent if email exists.',
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to initiate password reset: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
