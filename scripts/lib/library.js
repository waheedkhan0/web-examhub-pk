/**
 * ExamHub.pk — content domain helpers
 *
 * Operations that keep the content collections consistent with each other.
 * Importing MCQs for a brand-new subject used to leave that subject invisible
 * in navigation, with stale hand-maintained question counts. These helpers
 * make the collections agree automatically.
 */

import fs from 'fs';
import path from 'path';
import {
  CONTENT_DIR,
  MCQS_DIR,
  SUBJECTS_DIR,
  atomicWrite,
  ensureDir,
  listMarkdown,
  readMarkdown,
  rel,
  subjectRegistry,
  titleize,
  today,
  tryReadMarkdown,
  writeMarkdown,
} from './cms.js';

/**
 * Every MCQ set on the site, keyed "subject/topic".
 * Tolerates files with broken frontmatter by reporting them separately.
 */
export function mcqSets() {
  const sets = [];
  const broken = [];
  for (const file of listMarkdown(MCQS_DIR)) {
    const doc = tryReadMarkdown(file);
    if (!doc) {
      broken.push(file);
      continue;
    }
    const subject = doc.data.subject || path.basename(path.dirname(file));
    const topic = doc.data.topic || path.basename(file, '.md');
    sets.push({
      file,
      subject,
      topic,
      key: `${subject}/${topic}`,
      data: doc.data,
      body: doc.body,
      questions: Array.isArray(doc.data.questions) ? doc.data.questions : [],
    });
  }
  return { sets, broken };
}

export function setsBySubject() {
  const { sets } = mcqSets();
  const bySubject = new Map();
  for (const set of sets) {
    if (!bySubject.has(set.subject)) bySubject.set(set.subject, []);
    bySubject.get(set.subject).push(set);
  }
  return bySubject;
}

/**
 * Create a subject page for a slug that has MCQ content but no subject file.
 * Returns true when a new file was created. The overview body is a placeholder
 * that editorial should expand — but the page is immediately valid and linked.
 */
export function ensureSubjectFor(slug, registry = subjectRegistry()) {
  if (registry.has(slug)) return false;

  const file = path.join(SUBJECTS_DIR, `${slug}.md`);
  const name = titleize(slug);
  const { sets } = mcqSets();
  const own = sets.filter((s) => s.subject === slug);
  const exams = [...new Set(own.flatMap((s) => s.data.targetExams || []))];

  const data = {
    title: name,
    description:
      own[0]?.data.subjectDescription ||
      `Practice MCQs with detailed explanations covering ${own.map((s) => s.data.topicName || titleize(s.topic)).join(', ') || name} for Pakistani competitive exams.`,
    icon: 'book',
    updatedDate: today(),
    syllabusWeightage: 'Review recommended',
    relatedExams: exams.length ? exams : ['PPSC', 'FPSC', 'NTS'],
    subtopics: own.map((s) => ({
      name: s.data.topicName || titleize(s.topic),
      slug: s.topic,
      questionCount: s.questions.length,
    })),
  };

  const body = `## ${name}: Overview

This subject page was scaffolded automatically when MCQs were imported into \`${slug}\`.

### Before publishing
- Replace this overview with an exam-focused introduction (what the commission actually tests here).
- Set \`syllabusWeightage\` (for example "10-15% in PPSC/FPSC general tests").
- Confirm \`relatedExams\` and add any planned topics that do not have MCQs yet.

### Question bank
${own.map((s) => `- **${s.data.topicName || titleize(s.topic)}** — ${s.questions.length} MCQs`).join('\n') || '- No MCQ sets yet.'}
`;

  writeMarkdown(file, data, body);
  registry.set(slug, { slug, file, title: name, description: data.description, icon: data.icon });
  return true;
}

/**
 * Reconcile subject.subtopics with the MCQ sets that exist on disk.
 *  - keeps every declared topic (a planned topic is not deleted by an import)
 *  - adds topics that gained content but were never declared
 *  - refreshes questionCount from real data for topics that exist
 */
export function syncSubjectTopics(slug, registry = subjectRegistry()) {
  const entry = registry.get(slug);
  if (!entry) return { changed: false };

  const doc = tryReadMarkdown(entry.file);
  if (!doc) return { changed: false };

  const { sets } = mcqSets();
  const own = sets.filter((s) => s.subject === slug);
  const countByTopic = new Map(own.map((s) => [s.topic, s.questions.length]));
  const nameByTopic = new Map(own.map((s) => [s.topic, s.data.topicName || titleize(s.topic)]));

  const declared = Array.isArray(doc.data.subtopics) ? [...doc.data.subtopics] : [];
  const seen = new Set();
  let changed = false;

  const subtopics = declared.map((st) => {
    seen.add(st.slug);
    if (!countByTopic.has(st.slug)) return st; // planned, no content yet
    const next = { ...st, questionCount: countByTopic.get(st.slug) };
    if (nameByTopic.get(st.slug) && st.name !== nameByTopic.get(st.slug)) {
      next.name = nameByTopic.get(st.slug);
    }
    if (next.questionCount !== st.questionCount || next.name !== st.name) changed = true;
    return next;
  });

  for (const [topic, count] of countByTopic) {
    if (seen.has(topic)) continue;
    subtopics.push({ name: nameByTopic.get(topic) || titleize(topic), slug: topic, questionCount: count });
    changed = true;
  }

  // Repair the "undefined"/missing subjectName defect while we are here.
  let repairedName = false;
  if (own.length) {
    for (const set of own) {
      const current = set.data.subjectName;
      const expected = doc.data.title || titleize(slug);
      if (!current || String(current).toLowerCase() === 'undefined' || current === 'null') {
        const nextData = { ...set.data, subjectName: expected };
        writeMarkdown(set.file, nextData, set.body);
        repairedName = true;
      }
    }
  }

  if (changed) {
    writeMarkdown(entry.file, { ...doc.data, subtopics }, doc.body);
    return { changed: true, repairedName };
  }
  return { changed: false, repairedName };
}

/** Sync every subject; used by `cms doctor --fix`. */
export function syncAllSubjects() {
  const registry = subjectRegistry();
  const out = { created: [], synced: [], repaired: [] };
  const { sets } = mcqSets();

  for (const subject of new Set(sets.map((s) => s.subject))) {
    if (ensureSubjectFor(subject, registry)) out.created.push(subject);
  }
  for (const subject of new Set(sets.map((s) => s.subject))) {
    const res = syncSubjectTopics(subject, registry);
    if (res.changed) out.synced.push(subject);
    if (res.repairedName) out.repaired.push(subject);
  }
  return out;
}

/**
 * Even out a lopsided answer key by rotating each question's options.
 *
 * Rotation preserves the relative order of the options and touches no wording —
 * only which letter the correct answer sits on. Safe because option text is never
 * referenced by letter in the explanations (checked by `findLetterReferences`).
 */
export function balanceAnswerKeys({ dryRun = false, threshold = 0.6 } = {}) {
  const { sets } = mcqSets();
  const changed = [];

  for (const set of sets) {
    const questions = set.questions;
    if (questions.length < 6) continue;

    const countFor = (list) => {
      const c = {};
      for (const q of list) c[q.answer] = (c[q.answer] || 0) + 1;
      return c;
    };

    const counts = countFor(questions);
    const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
    if (!dominant || dominant[1] / questions.length <= threshold) continue;

    // Re-deal answers across letters as evenly as the option counts allow.
    const updated = questions.map((q) => ({ ...q }));
    const tally = {};
    for (const q of updated) {
      const n = q.options.length;
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= n) continue;

      // Least-used letter, preferring one that actually changes the position.
      const candidates = Array.from({ length: n }, (_, idx) => idx).sort((x, y) => {
        const byCount = (tally[x] || 0) - (tally[y] || 0);
        if (byCount !== 0) return byCount;
        return (x === q.answer ? 1 : 0) - (y === q.answer ? 1 : 0);
      });
      const desired = candidates[0];
      const rotation = (desired - q.answer + n) % n;

      if (rotation !== 0) {
        q.options = q.options.map((_, idx) => q.options[(idx - rotation + n) % n]);
        q.answer = desired;
      }
      tally[q.answer] = (tally[q.answer] || 0) + 1;
    }

    const after = countFor(updated);
    const afterDominant = Object.entries(after).sort((a, b) => b[1] - a[1])[0];
    if (!afterDominant || afterDominant[1] / updated.length > threshold) continue;

    changed.push({
      key: set.key,
      before: `${dominant[1]}/${questions.length} on ${String.fromCharCode(65 + Number(dominant[0]))}`,
      after: Object.entries(after)
        .sort((a, b) => a[0] - b[0])
        .map(([idx, n]) => `${String.fromCharCode(65 + Number(idx))}:${n}`)
        .join(' '),
    });

    if (!dryRun) {
      writeMarkdown(set.file, { ...set.data, questions: updated }, set.body);
    }
  }

  return { changed, dryRun };
}

/** True if any explanation refers to an option by letter — reordering would break it. */
export function findLetterReferences() {
  const { sets } = mcqSets();
  const hits = [];
  const re = /\boption[s]?\s+[A-E]\b|\bchoice[s]?\s+[A-E]\b/i;
  for (const set of sets) {
    for (const q of set.questions) {
      for (const field of ['explanation', 'keyConcept', 'examTip']) {
        if (q[field] && re.test(q[field])) hits.push({ where: `${set.key} #${q.id} (${field})`, text: q[field] });
      }
    }
  }
  return hits;
}

/**
 * Audit the content collections for the problems this CMS has historically
 * produced: broken topic links, orphaned MCQ subjects, malformed questions.
 */
export function audit() {
  const problems = [];
  const notes = [];
  const registry = subjectRegistry();
  const { sets, broken } = mcqSets();

  for (const file of broken) problems.push({ kind: 'frontmatter', where: rel(file), msg: 'Unparseable YAML frontmatter' });

  const topicKeys = new Set(sets.map((s) => s.key));

  for (const set of sets) {
    const where = rel(set.file);
    if (!set.data.subject || !set.data.topic) {
      problems.push({ kind: 'schema', where, msg: 'Missing subject or topic field' });
    }
    if (!set.data.subjectName || String(set.data.subjectName).toLowerCase() === 'undefined') {
      problems.push({ kind: 'name', where, msg: `subjectName is "${set.data.subjectName}" — will render as undefined` });
    }
    if (set.data.subject && !registry.has(set.data.subject)) {
      problems.push({ kind: 'orphan', where, msg: `No subject page for "${set.data.subject}" — set is unreachable from /subjects` });
    }
    if (set.questions.length === 0) {
      problems.push({ kind: 'empty', where, msg: 'No questions in this set' });
    }

    const ids = new Set();
    const texts = new Set();
    set.questions.forEach((q, i) => {
      const label = `${where} #${q.id ?? i + 1}`;
      if (!q.question || !Array.isArray(q.options) || q.options.length < 2) {
        problems.push({ kind: 'schema', where: label, msg: 'Question needs text and at least 2 options' });
        return;
      }
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) {
        problems.push({ kind: 'answer', where: label, msg: `answer ${JSON.stringify(q.answer)} is outside 0-${q.options.length - 1}` });
      }
      if (!q.explanation) problems.push({ kind: 'schema', where: label, msg: 'Missing explanation' });
      if (ids.has(q.id)) problems.push({ kind: 'id', where: label, msg: `Duplicate question id ${q.id}` });
      ids.add(q.id);
      const key = q.question.toLowerCase().replace(/\s+/g, ' ').trim();
      if (texts.has(key)) problems.push({ kind: 'dupe', where: label, msg: `Repeated question in same set: "${key.slice(0, 50)}…"` });
      texts.add(key);
    });

    // An answer key that piles onto one letter is guessable and usually means the
    // options were written in the same order for every question.
    if (set.questions.length >= 8) {
      const counts = {};
      for (const q of set.questions) {
        if (Number.isInteger(q.answer) && q.answer >= 0) counts[q.answer] = (counts[q.answer] || 0) + 1;
      }
      const dominant = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
      if (dominant && dominant[1] / set.questions.length > 0.6) {
        problems.push({
          kind: 'balance',
          where,
          msg: `${dominant[1]}/${set.questions.length} answers are option ${String.fromCharCode(65 + Number(dominant[0]))} — shuffle options so the key is not guessable`,
        });
      }
    }
  }

  // Declared-but-missing topics are only a problem if something links to them.
  for (const [slug, entry] of registry) {
    const doc = tryReadMarkdown(entry.file);
    if (!doc) continue;
    for (const st of doc.data.subtopics || []) {
      if (!topicKeys.has(`${slug}/${st.slug}`)) {
        notes.push({ where: rel(entry.file), msg: `Topic "${st.slug}" is listed (${st.questionCount} Q planned) but no MCQ set exists` });
      }
    }
    const realTotal = sets.filter((s) => s.subject === slug).reduce((n, s) => n + s.questions.length, 0);
    if (realTotal === 0) notes.push({ where: rel(entry.file), msg: 'Subject has no MCQ practice sets at all' });
  }

  const totalQuestions = sets.reduce((n, s) => n + s.questions.length, 0);
  return { problems, notes, stats: { subjectPages: registry.size, mcqSets: sets.length, totalQuestions } };
}
