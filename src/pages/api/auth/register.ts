import type { APIRoute } from 'astro';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!email || !password) {
      return jsonResponse({ error: 'Email and password are required' }, 400);
    }

    const userId = `usr_${Buffer.from(email).toString('hex').substring(0, 12)}`;
    const token = `eh_jwt_${Buffer.from(JSON.stringify({ userId, email, exp: Date.now() + 30 * 86400 * 1000 })).toString('base64')}`;

    const user = {
      id: userId,
      email,
      name: name || email.split('@')[0],
      role: 'user',
    };

    return jsonResponse(
      {
        success: true,
        token,
        user,
      },
      201
    );
  } catch (err: any) {
    return jsonResponse({ error: 'Registration failed: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
