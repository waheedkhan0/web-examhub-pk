import type { APIRoute } from 'astro';
import { jsonResponse, optionsResponse } from '../../lib/api-helpers';

export const prerender = false;

export const GET: APIRoute = async () => {
  return jsonResponse({
    status: 'online',
    service: 'ExamHub.pk Backend API',
    version: '1.0.0',
    endpoints: [
      'GET  /api/categories',
      'GET  /api/topics?subject=xxx',
      'GET  /api/public-mcqs?page=1&limit=10&subject=xxx&topic=xxx&exam=xxx&search=xxx&random=true',
      'GET  /api/quizzes?page=1&limit=20&categoryId=xxx&tag=xxx',
      'GET  /api/quiz/:id',
      'GET  /api/quizzes/:quizId/mcqs',
      'POST /api/quiz/:id/attempt',
      'GET  /api/tags',
      'GET  /api/blog',
      'GET  /api/blog/:slug',
      'POST /api/auth/flutter-google',
      'POST /api/auth/mobile/login',
      'POST /api/auth/register',
      'POST /api/auth/forgot-password',
      'GET  /api/user/me',
      'POST /api/mcqs/:mcqId/interactions',
      'POST /api/import-mcqs',
    ],
  });
};

export const OPTIONS: APIRoute = async () => optionsResponse();
