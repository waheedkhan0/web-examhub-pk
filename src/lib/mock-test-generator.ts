import { getCollection } from 'astro:content';
import { getExamBlueprint, type ExamBlueprint } from './syllabus-blueprints';

export interface MockTestQuestion {
  id: number;
  mcqId: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  keyConcept?: string;
  examTip?: string;
  testedIn?: string[];
  sectionId: string;
  sectionName: string;
  sectionWeightage: number;
  subject: string;
  topic: string;
}

export interface GeneratedMockTest {
  examSlug: string;
  examTitle: string;
  fullName: string;
  conductingBody: string;
  totalQuestions: number;
  durationMinutes: number;
  passingPercent: number;
  negativeMarking: boolean;
  negativeMarkPerWrong: number;
  sections: {
    id: string;
    name: string;
    weightagePercent: number;
    questionCount: number;
  }[];
  questions: MockTestQuestion[];
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export async function generateSyllabusMockTest(
  examSlug: string,
  requestedCount = 50
): Promise<GeneratedMockTest | null> {
  const blueprint = getExamBlueprint(examSlug);
  if (!blueprint) {
    return null;
  }

  const allMcqSets = await getCollection('mcqs');
  const count = Math.max(10, Math.min(100, requestedCount));
  const pickedQuestions: MockTestQuestion[] = [];
  const sectionsSummary: GeneratedMockTest['sections'] = [];

  // Group MCQs by subject and topic for fast sampling
  const setsBySubject = new Map<string, any[]>();
  for (const set of allMcqSets) {
    let list = setsBySubject.get(set.data.subject);
    if (!list) {
      list = [];
      setsBySubject.set(set.data.subject, list);
    }
    list.push(set);
  }

  let allocatedTotal = 0;
  const sectionsTargets = blueprint.sections.map((section, idx) => {
    let target = Math.round(count * (section.weightagePercent / 100));
    // Ensure at least 1 question per section if weightage > 0
    if (target === 0 && section.weightagePercent > 0) target = 1;
    // On the last section, adjust to hit exact total count
    if (idx === blueprint.sections.length - 1) {
      target = Math.max(1, count - allocatedTotal);
    }
    allocatedTotal += target;
    return { section, target };
  });

  let globalQId = 1;

  for (const { section, target } of sectionsTargets) {
    // Gather all candidate questions matching this section
    const candidateQuestions: any[] = [];

    for (const subj of section.subjects) {
      const sets = setsBySubject.get(subj) || [];
      for (const set of sets) {
        // If section specifies restricted topics, filter by topic
        if (section.topics && section.topics.length > 0) {
          if (!section.topics.includes(set.data.topic)) continue;
        }

        if (Array.isArray(set.data.questions)) {
          for (const q of set.data.questions) {
            candidateQuestions.push({
              ...q,
              subject: set.data.subject,
              topic: set.data.topic,
              setName: set.data.title,
            });
          }
        }
      }
    }

    // Shuffle candidates
    const shuffledCandidates = shuffle(candidateQuestions);
    const chosen = shuffledCandidates.slice(0, target);

    chosen.forEach((q) => {
      pickedQuestions.push({
        id: globalQId++,
        mcqId: `${q.subject}-${q.topic}-${q.id}`,
        question: q.question,
        options: q.options,
        answer: q.answer,
        explanation: q.explanation || 'Verified academic rationale.',
        keyConcept: q.keyConcept || section.name,
        examTip: q.examTip,
        testedIn: q.testedIn || [blueprint.conductingBody],
        sectionId: section.id,
        sectionName: section.name,
        sectionWeightage: section.weightagePercent,
        subject: q.subject,
        topic: q.topic,
      });
    });

    sectionsSummary.push({
      id: section.id,
      name: section.name,
      weightagePercent: section.weightagePercent,
      questionCount: chosen.length,
    });
  }

  // Calculate allocated test duration (~1 minute per question)
  const durationMinutes = Math.max(15, count);

  return {
    examSlug: blueprint.slug,
    examTitle: blueprint.title,
    fullName: blueprint.fullName,
    conductingBody: blueprint.conductingBody,
    totalQuestions: pickedQuestions.length,
    durationMinutes,
    passingPercent: blueprint.passingPercent,
    negativeMarking: blueprint.negativeMarking,
    negativeMarkPerWrong: blueprint.negativeMarkPerWrong || 0,
    sections: sectionsSummary,
    questions: pickedQuestions,
  };
}
