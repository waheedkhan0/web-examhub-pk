import { getCollection } from 'astro:content';

/**
 * Build-time search index.
 *
 * Replaces the hardcoded 29-entry list that used to live inside ClientSearch.astro,
 * which drifted from the content immediately and pointed at topics that had no
 * page. Every entry here is derived from a real collection, so a search result can
 * not 404.
 */

export interface SearchEntry {
  title: string;
  url: string;
  category: 'MCQ Set' | 'Subject' | 'Guide' | 'Exam' | 'Blog' | 'Tool';
  description: string;
  keywords: string;
}

function keywords(...parts: (string | string[] | undefined)[]): string {
  return parts
    .flatMap((p) => (Array.isArray(p) ? p : [p]))
    .filter((p): p is string => Boolean(p))
    .join(' ')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export async function GET() {
  const [mcqs, subjects, guides, exams, blog] = await Promise.all([
    getCollection('mcqs'),
    getCollection('subjects'),
    getCollection('guides'),
    getCollection('exams'),
    getCollection('blog'),
  ]);

  const entries: SearchEntry[] = [
    {
      title: 'Official Syllabus Mock Tests & Past Papers Hub',
      url: '/practice',
      category: 'Tool' as const,
      description: 'Timed full-length mock examinations with official syllabus weightage distribution and past papers.',
      keywords: keywords('mock test', 'practice', 'past papers', 'online test', 'timer', 'fia mock', 'nurse mock', 'civil engineer mock'),
    },
    {
      title: 'Government Job Posts (BS-16 to BS-19) Preparation Guides',
      url: '/jobs',
      category: 'Tool' as const,
      description: 'Federal and provincial advertised posts, syllabus schemes, and examination patterns.',
      keywords: keywords('jobs', 'posts', 'advertised jobs', 'fpsc jobs', 'kppsc jobs', 'ppsc jobs', 'screening test'),
    },
    ...mcqs.map((m) => ({
      title: m.data.topicName || m.data.title,
      url: `/mcqs/${m.data.subject}/${m.data.topic}`,
      category: 'MCQ Set' as const,
      description: `${m.data.questions.length} questions · ${m.data.subjectName}`,
      keywords: keywords(
        m.data.title, m.data.topicName, m.data.subjectName, m.data.subject, m.data.topic,
        m.data.targetExams, m.data.difficulty,
        // Let candidates search by what a question actually asks about.
        m.data.questions.slice(0, 12).map((q) => q.keyConcept).join(' '),
        m.data.questions.slice(0, 8).map((q) => q.question).join(' '),
      ),
    })),
    ...subjects.map((s) => ({
      title: s.data.title,
      url: `/subjects/${s.slug}`,
      category: 'Subject' as const,
      description: s.data.description,
      keywords: keywords(s.data.title, s.data.description, s.data.relatedExams, s.data.subtopics?.map((t) => t.name)),
    })),
    ...guides.map((g) => ({
      title: g.data.title,
      url: `/guides/${g.slug}`,
      category: 'Guide' as const,
      description: g.data.description,
      keywords: keywords(g.data.title, g.data.description, g.data.tags, g.data.category, g.data.targetExams),
    })),
    ...exams.map((e) => ({
      title: `${e.data.title} — ${e.data.fullName}`,
      url: `/exams/${e.slug}`,
      category: 'Exam' as const,
      description: e.data.description,
      keywords: keywords(e.data.title, e.data.fullName, e.data.conductingBody, e.data.featuredSubjects, e.data.description),
    })),
    ...blog.map((b) => ({
      title: b.data.title,
      url: `/blog/${b.slug}`,
      category: 'Blog' as const,
      description: b.data.description,
      keywords: keywords(b.data.title, b.data.description, b.data.tags, b.data.category),
    })),
  ];

  return new Response(JSON.stringify(entries), {
    headers: { 'Content-Type': 'application/json' },
  });
}
