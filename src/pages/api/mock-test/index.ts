import type { APIRoute } from 'astro';
import { generateSyllabusMockTest } from '../../../lib/mock-test-generator';
import { jsonResponse, optionsResponse } from '../../../lib/api-helpers';
import { getAllExamBlueprints } from '../../../lib/syllabus-blueprints';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const examSlug = url.searchParams.get('exam') || url.searchParams.get('slug');
    const count = parseInt(url.searchParams.get('count') || '30', 10);

    // If no exam specified, return list of available exam blueprints
    if (!examSlug) {
      const blueprints = getAllExamBlueprints();
      return jsonResponse({
        availableExams: blueprints.map((b) => ({
          slug: b.slug,
          title: b.title,
          fullName: b.fullName,
          conductingBody: b.conductingBody,
          sectionsCount: b.sections.length,
          sections: b.sections.map((s) => ({
            name: s.name,
            weightage: `${s.weightagePercent}%`,
          })),
          pastPapersCount: b.pastPapers.length,
        })),
      });
    }

    const test = await generateSyllabusMockTest(examSlug, count);
    if (!test) {
      return jsonResponse({ error: `Exam blueprint not found for '${examSlug}'` }, 404);
    }

    return jsonResponse({
      success: true,
      data: test,
    });
  } catch (err: any) {
    return jsonResponse({ error: 'Failed to generate mock test: ' + err.message }, 500);
  }
};

export const OPTIONS: APIRoute = async () => optionsResponse();
