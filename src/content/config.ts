import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('ExamHub Academic Editorial Board'),
    authorRole: z.string().default('Senior Competitive Exam Mentor'),
    publishDate: z.string(),
    updatedDate: z.string(),
    readingTime: z.string().default('8 min read'),
    category: z.string(),
    targetExams: z.array(z.string()),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const mcqs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    subject: z.string(), // e.g. "pakistan-studies"
    subjectName: z.string(), // e.g. "Pakistan Studies"
    topic: z.string(), // slug e.g. "geography"
    topicName: z.string(), // e.g. "Geography & Borders"
    author: z.string().default('ExamHub Academic Editorial Board'),
    updatedDate: z.string(),
    difficulty: z.enum(['Basic', 'Intermediate', 'Advanced', 'Exam-Level']).default('Exam-Level'),
    targetExams: z.array(z.string()),
    questions: z.array(
      z.object({
        id: z.number(),
        question: z.coerce.string(),
        options: z.array(z.coerce.string()),
        answer: z.number(), // index 0-3
        explanation: z.coerce.string(),
        keyConcept: z.string().optional(),
        examTip: z.string().optional(),
        testedIn: z.array(z.string()).optional(),
      })
    ),
  }),
});

const exams = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    fullName: z.string(),
    description: z.string(),
    conductingBody: z.string(),
    frequency: z.string(),
    eligibility: z.string(),
    examFormat: z.string(),
    updatedDate: z.string(),
    featuredSubjects: z.array(z.string()),
    keyStats: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
});

const subjects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().default('book'),
    updatedDate: z.string(),
    syllabusWeightage: z.string(),
    relatedExams: z.array(z.string()),
    subtopics: z.array(z.object({ name: z.string(), slug: z.string(), questionCount: z.number() })),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('ExamHub Editorial Team'),
    publishDate: z.string(),
    updatedDate: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
  }),
});

export const collections = {
  guides,
  mcqs,
  exams,
  subjects,
  blog,
};
