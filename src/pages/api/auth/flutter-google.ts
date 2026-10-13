import type { APIRoute } from 'astro';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email, name, image, googleId } = body;

    if (!email) {
      return jsonResponse({ error: 'Email is required' }, 400);
    }

    const userId = googleId || `usr_${Date.now()}`;
    const token = `eh_jwt_${Buffer.from(JSON.stringify({ userId, email, exp: Date.now() + 30 * 86400 * 1000 })).toString('base64')}`;

    const user = {
      id: userId,
      email,
      name: name || 'Google User',
      image: image || '',
      role: 'user',
    };

    return jsonResponse({
      token,
      user,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Google authentication failed: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
