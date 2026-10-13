import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const prerender = false;

// Helpers for string normalization
function clean(val: any): string {
  return String(val ?? '').replace(/\s+/g, ' ').trim();
}

function slugify(val: any): string {
  return String(val ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘"]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function titleize(slug: string): string {
  return String(slug || '')
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function normalizeForCompare(val: any): string {
  return String(val ?? '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.,;:!?”"'`()\[\]{}]/g, '')
    .trim();
}

// RFC-4180 CSV Parser
function parseCsv(text: string) {
  const lines: string[][] = [];
  let row: string[] = [''];
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        row[row.length - 1] += '"';
        i += 2;
        continue;
      }
      if (char === '"') {
        inQuotes = false;
        i++;
        continue;
      }
      row[row.length - 1] += char;
      i++;
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      i++;
      continue;
    }

    if (char === ',') {
      row.push('');
      i++;
      continue;
    }

    if (char === '\r' && next === '\n') {
      lines.push(row);
      row = [''];
      i += 2;
      continue;
    }

    if (char === '\n' || char === '\r') {
      lines.push(row);
      row = [''];
      i++;
      continue;
    }

    row[row.length - 1] += char;
    i++;
  }

  if (row.length > 1 || row[0] !== '') {
    lines.push(row);
  }

  if (lines.length === 0) return [];

  const headers = lines[0].map((h) => clean(h).replace(/^\uFEFF/, '').toLowerCase().replace(/[^a-z0-9]/g, ''));
  const records: Record<string, string>[] = [];

  for (let r = 1; r < lines.length; r++) {
    const cells = lines[r];
    if (cells.length === 1 && cells[0].trim() === '') continue;
    const item: Record<string, string> = {};
    headers.forEach((h, idx) => {
      item[h] = clean(cells[idx] || '');
    });
    records.push(item);
  }

  return records;
}

function resolveAnswer(val: string, options: string[]): number | null {
  const v = clean(val);
  if (!v) return null;

  const num = Number(v);
  if (!Number.isNaN(num)) {
    if (Number.isInteger(num) && num >= 1 && num <= options.length) return num - 1;
    if (Number.isInteger(num) && num >= 0 && num < options.length) return num;
  }

  const letter = v.toUpperCase().replace(/[).\-]$/, '');
  if (/^[A-E]$/.test(letter)) {
    const idx = letter.charCodeAt(0) - 65;
    if (idx < options.length) return idx;
  }

  const byText = options.findIndex((opt) => normalizeForCompare(opt) === normalizeForCompare(v));
  if (byText !== -1) return byText;

  return null;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    let subject = '';
    let topic = '';
    let topicName = '';
    let csvText = '';
    let rawItems: any[] = [];

    if (contentType.includes('application/json')) {
      let body: any = {};
      try {
        body = await request.json();
      } catch {
        return new Response(JSON.stringify({ error: 'Invalid or empty JSON body' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });
      }
      subject = slugify(body.subject || '');
      topic = slugify(body.topic || '');
      topicName = clean(body.topicName || titleize(topic));
      csvText = body.csvText || '';
      rawItems = Array.isArray(body.items) ? body.items : [];
    } else if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      subject = slugify(formData.get('subject') as string || '');
      topic = slugify(formData.get('topic') as string || '');
      topicName = clean(formData.get('topicName') as string || titleize(topic));
      const file = formData.get('file') as File | null;
      if (file) {
        csvText = await file.text();
      } else {
        csvText = (formData.get('csvText') as string) || '';
      }
    } else {
      csvText = await request.text();
    }

    if (csvText && rawItems.length === 0) {
      const parsedRows = parseCsv(csvText);
      rawItems = parsedRows;
    }

    if (!rawItems || rawItems.length === 0) {
      return new Response(JSON.stringify({ error: 'No MCQ rows found in the provided CSV.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Process and validate items
    const parsedQuestions: any[] = [];
    let skippedCount = 0;

    for (let i = 0; i < rawItems.length; i++) {
      const row = rawItems[i];

      // Extract subject/topic if not provided at top-level
      if (!subject) {
        subject = slugify(row.subject || row.category || row.subjectslug || 'general-knowledge');
      }
      if (!topic) {
        topic = slugify(row.topic || row.topicslug || row.topicname || 'general-practice');
      }

      const qText = clean(
        row.question || row.questiontext || row.stem || row.mcq || row.q || ''
      );
      if (!qText) {
        skippedCount++;
        continue;
      }

      // Extract options
      let options: string[] = [];
      if (Array.isArray(row.options)) {
        options = row.options.map(clean).filter(Boolean);
      } else if (row.options && typeof row.options === 'string') {
        options = row.options.split('|').map(clean).filter(Boolean);
      } else {
        const optA = clean(row.option1 || row.optiona || row.choice1 || row.a || '');
        const optB = clean(row.option2 || row.optionb || row.choice2 || row.b || '');
        const optC = clean(row.option3 || row.optionc || row.choice3 || row.c || '');
        const optD = clean(row.option4 || row.optiond || row.choice4 || row.d || '');
        const optE = clean(row.option5 || row.optione || row.choice5 || row.e || '');
        options = [optA, optB, optC, optD, optE].filter(Boolean);
      }

      if (options.length < 2) {
        skippedCount++;
        continue;
      }

      const rawAns = clean(
        row.answer || row.correctanswer || row.correct || row.ans || row.correctoption || ''
      );
      const answerIndex = resolveAnswer(rawAns, options) ?? 0;

      const explanation = clean(
        row.explanation || row.explanationtext || row.reason || row.rationale || 'Detailed conceptual answer.'
      );
      const keyConcept = clean(row.keyconcept || row.concept || '');
      const examTip = clean(row.examtip || row.tip || '');

      parsedQuestions.push({
        question: qText,
        options,
        answer: answerIndex,
        explanation,
        ...(keyConcept ? { keyConcept } : {}),
        ...(examTip ? { examTip } : {}),
      });
    }

    if (parsedQuestions.length === 0) {
      return new Response(JSON.stringify({ error: 'Could not extract valid questions from CSV.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Determine target file
    const rootDir = process.cwd();
    const mcqDir = path.join(rootDir, 'src', 'content', 'mcqs', subject);
    if (!fs.existsSync(mcqDir)) {
      fs.mkdirSync(mcqDir, { recursive: true });
    }

    const filePath = path.join(mcqDir, `${topic}.md`);
    let existingQuestions: any[] = [];
    let fileFrontmatter: any = {
      title: `${titleize(subject)} - ${titleize(topic)} MCQs`,
      description: `High-yield ${titleize(subject)} exam preparation questions on ${titleize(topic)} with worked explanations.`,
      subject,
      subjectName: titleize(subject),
      topic,
      topicName: topicName || titleize(topic),
      author: 'ExamHub Academic Editorial Board',
      updatedDate: new Date().toISOString().split('T')[0],
      difficulty: 'Exam-Level',
      targetExams: ['FPSC', 'KPPSC', 'PPSC', 'CSS', 'PMS', 'NTS'],
      questions: [],
    };

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
      if (match) {
        try {
          const parsed = yaml.load(match[1]) as any;
          if (parsed && typeof parsed === 'object') {
            fileFrontmatter = { ...fileFrontmatter, ...parsed };
            existingQuestions = Array.isArray(parsed.questions) ? parsed.questions : [];
          }
        } catch {
          // ignore yaml parse errors and append
        }
      }
    }

    // De-duplicate against existing questions
    const existingStems = new Set(
      existingQuestions.map((q) => normalizeForCompare(q.question))
    );

    let addedCount = 0;
    let duplicateCount = 0;
    let nextId = existingQuestions.length > 0
      ? Math.max(...existingQuestions.map((q) => Number(q.id) || 0)) + 1
      : 1;

    for (const q of parsedQuestions) {
      const stem = normalizeForCompare(q.question);
      if (existingStems.has(stem)) {
        duplicateCount++;
        continue;
      }
      existingStems.add(stem);
      existingQuestions.push({
        id: nextId++,
        question: q.question,
        options: q.options,
        answer: q.answer,
        explanation: q.explanation,
        ...(q.keyConcept ? { keyConcept: q.keyConcept } : {}),
        ...(q.examTip ? { examTip: q.examTip } : {}),
      });
      addedCount++;
    }

    fileFrontmatter.questions = existingQuestions;
    fileFrontmatter.updatedDate = new Date().toISOString().split('T')[0];

    const newContent = `---\n${yaml.dump(fileFrontmatter, { lineWidth: -1, quotingType: '"', forceQuotes: false })}---\n\n## Practice & Discussion\n\nCarefully review each question and rationale for competitive exam screening excellence.\n`;

    fs.writeFileSync(filePath, newContent, 'utf-8');

    return new Response(
      JSON.stringify({
        success: true,
        message: `Successfully imported ${addedCount} MCQs into ${subject}/${topic}.md`,
        subject,
        topic,
        addedCount,
        duplicateCount,
        skippedCount,
        totalInFile: existingQuestions.length,
        filePath: `src/content/mcqs/${subject}/${topic}.md`,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        error: 'Failed to import MCQs: ' + (err?.message || String(err)),
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
};
