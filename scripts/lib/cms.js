/**
 * ExamHub.pk — shared content library
 *
 * Everything the CMS needs to read and write content safely:
 *   - RFC-4180 CSV parsing (quoted fields, embedded commas, embedded newlines)
 *   - YAML frontmatter round-tripping via js-yaml (no hand-rolled string escaping)
 *   - intake loaders for .csv / .json / .ndjson / .yaml
 *   - a subject registry read from src/content/subjects so display names are
 *     derived from real content instead of a hardcoded map
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ROOT = path.join(__dirname, '../..');
export const CONTENT_DIR = path.join(ROOT, 'src/content');
export const MCQS_DIR = path.join(CONTENT_DIR, 'mcqs');
export const SUBJECTS_DIR = path.join(CONTENT_DIR, 'subjects');
export const GUIDES_DIR = path.join(CONTENT_DIR, 'guides');
export const EXAMS_DIR = path.join(CONTENT_DIR, 'exams');
export const BLOG_DIR = path.join(CONTENT_DIR, 'blog');

export const DIFFICULTIES = ['Basic', 'Intermediate', 'Advanced', 'Exam-Level'];

/* ------------------------------------------------------------------ *
 * Files
 * ------------------------------------------------------------------ */

export function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

/**
 * Write via a temp sibling + rename so an interrupted run never leaves a half-file.
 *
 * On Windows the rename step intermittently fails with EPERM when another
 * process (antivirus, Search indexer, an editor with the file open) holds a
 * handle on the destination. Retry with a short backoff before giving up.
 */
export function atomicWrite(file, contents) {
  ensureDir(path.dirname(file));
  const tmp = `${file}.tmp-${process.pid}`;
  fs.writeFileSync(tmp, contents, 'utf-8');

  let lastError;
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      fs.renameSync(tmp, file);
      return file;
    } catch (error) {
      lastError = error;
      if (error.code !== 'EPERM' && error.code !== 'EACCES' && error.code !== 'EBUSY') break;
      const waitUntil = Date.now() + 40 * (attempt + 1);
      while (Date.now() < waitUntil) { /* brief synchronous backoff: imports are offline tooling */ }
    }
  }

  try {
    fs.writeFileSync(file, contents, 'utf-8'); // fall back to a direct write
    fs.unlinkSync(tmp);
    return file;
  } catch {
    fs.rmSync(tmp, { force: true });
    throw lastError;
  }
}

export function listMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMarkdown(full));
    else if (entry.name.endsWith('.md')) out.push(full);
  }
  return out.sort();
}

export function rel(file) {
  return path.relative(ROOT, file).split(path.sep).join('/');
}

export function today() {
  return new Date().toISOString().split('T')[0];
}

/* ------------------------------------------------------------------ *
 * Strings
 * ------------------------------------------------------------------ */

export function slugify(value) {
  return String(value ?? '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘"]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** "pakistan-studies" -> "Pakistan Studies" */
export function titleize(slug) {
  return String(slug || '')
    .split('-')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Collapse whitespace and strip punctuation so "What is X?" matches "what is x". */
export function normalizeForCompare(value) {
  return String(value ?? '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.,;:!?”"'`()\[\]{}]/g, '')
    .trim();
}

export function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

/** Split on ; or | into a trimmed, deduped list. */
export function splitList(value) {
  if (Array.isArray(value)) return value.map(clean).filter(Boolean);
  return [...new Set(String(value ?? '').split(/[;|]/).map(clean).filter(Boolean))];
}

/* ------------------------------------------------------------------ *
 * CSV — RFC 4180
 * ------------------------------------------------------------------ */

/**
 * Parse CSV text into an array of objects keyed by header.
 * Handles: quoted fields, embedded commas, embedded newlines, "" escapes,
 * CRLF/LF, UTF-8 BOM, and ragged rows.
 */
export function parseCsv(text, { delimiter } = {}) {
  const rows = parseCsvRows(text, delimiter);
  if (rows.length === 0) return { headers: [], records: [] };

  const headers = rows[0].map((h) => clean(h).replace(/^\uFEFF/, ''));
  const records = [];
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i];
    if (cells.length === 1 && cells[0] === '') continue; // blank line
    const record = {};
    headers.forEach((header, idx) => {
      record[header] = cells[idx] ?? '';
    });
    record.__line = i + 1; // 1-based line in the data (header is line 1)
    records.push(record);
  }
  return { headers, records };
}

/**
 * Character-by-character CSV reader. `delimiter` is auto-detected from the
 * header row when omitted (comma by default, semicolon if the header clearly
 * uses it — convenient for spreadsheets exported in some locales).
 */
export function parseCsvRows(text, delimiter) {
  const body = text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  const delim = delimiter || detectDelimiter(body);

  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  let i = 0;

  while (i < body.length) {
    const ch = body[i];

    if (quoted) {
      if (ch === '"') {
        if (body[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        quoted = false;
        i += 1;
        continue;
      }
      field += ch;
      i += 1;
      continue;
    }

    if (ch === '"') {
      // A quote only starts a quoted field at the field's beginning.
      if (field.trim() === '') {
        quoted = true;
        field = '';
        i += 1;
        continue;
      }
      field += ch;
      i += 1;
      continue;
    }

    if (ch === delim) {
      row.push(field);
      field = '';
      i += 1;
      continue;
    }

    if (ch === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      i += 1;
      continue;
    }

    field += ch;
    i += 1;
  }

  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.map((r) => r.map((c) => c.trim()));
}

function detectDelimiter(text) {
  const headerLine = text.split('\n')[0] ?? '';
  const commas = (headerLine.match(/,/g) || []).length;
  const semis = (headerLine.match(/;/g) || []).length;
  if (semis > commas) return ';';
  return ',';
}

/** Quote a CSV cell for writing; escapes embedded quotes and newlines. */
function csvCell(value) {
  const str = value === null || value === undefined ? '' : String(value);
  if (/[",\n\r]/.test(str)) return `"${str.replace(/"/g, '""')}"`;
  return str;
}

export function stringifyCsv(records, headers) {
  const cols = headers || [...new Set(records.flatMap((r) => Object.keys(r)))];
  const lines = [cols.map(csvCell).join(',')];
  for (const record of records) {
    lines.push(cols.map((c) => csvCell(record[c])).join(','));
  }
  return `${lines.join('\n')}\n`;
}

/* ------------------------------------------------------------------ *
 * Frontmatter
 * ------------------------------------------------------------------ */

const FM_RE = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?([\s\S]*)$/;

/** Read a markdown file into { data, body }. Throws on malformed frontmatter. */
export function readMarkdown(file) {
  // Files committed on Windows come back with CRLF line endings (core.autocrlf),
  // so the frontmatter delimiters must be matched with \r?\n rather than \n.
  const raw = fs.readFileSync(file, 'utf-8').replace(/\r\n/g, '\n');
  const match = raw.match(FM_RE);
  if (!match) {
    const err = new Error(`${rel(file)}: no YAML frontmatter block found`);
    err.code = 'NO_FRONTMATTER';
    throw err;
  }
  let data;
  try {
    data = yaml.load(match[1]) ?? {};
  } catch (cause) {
    const err = new Error(`${rel(file)}: invalid YAML frontmatter — ${cause.message}`);
    err.code = 'BAD_YAML';
    throw err;
  }
  return { data, body: match[2], raw };
}

export function tryReadMarkdown(file) {
  try {
    return readMarkdown(file);
  } catch {
    return null;
  }
}

/** Serialize { data, body } back to a markdown file. */
export function writeMarkdown(file, data, body = '') {
  const front = yaml
    .dump(data, {
      indent: 2,
      lineWidth: -1, // never fold a long question onto a second line
      noRefs: true,
      quotingType: '"',
      forceQuotes: false,
      sortKeys: false,
    })
    .replace(/\n+$/, '');
  const textBody = body.replace(/^\n+/, '').replace(/\n?$/, '\n');
  return atomicWrite(file, `---\n${front}\n---\n\n${textBody}`);
}

/* ------------------------------------------------------------------ *
 * Intake loading — one entry point for csv / json / ndjson / yaml
 * ------------------------------------------------------------------ */

/**
 * Load a bulk-intake file into an array of plain records.
 * - .csv / .tsv  -> rows keyed by header
 * - .json        -> an array of objects, or { questions: [...] }, or { items: [...] }
 * - .ndjson/.jsonl -> one JSON object per line
 * - .yaml/.yml   -> an array, or a mapping with an array under the given key
 */
export function loadIntake(file, { wrapKey } = {}) {
  const abs = path.resolve(ROOT, file);
  if (!fs.existsSync(abs)) {
    throw new Error(`File not found: ${file}`);
  }
  const ext = path.extname(abs).toLowerCase();
  const text = fs.readFileSync(abs, 'utf-8');

  if (ext === '.csv' || ext === '.tsv' || ext === '') {
    const { headers, records } = parseCsv(text, {
      delimiter: ext === '.tsv' ? '\t' : undefined,
    });
    if (headers.length === 0) throw new Error('No header row found');
    return records;
  }

  if (ext === '.json') {
    const parsed = JSON.parse(text);
    return unwrap(parsed, wrapKey, file);
  }

  if (ext === '.ndjson' || ext === '.jsonl') {
    return text
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => JSON.parse(l));
  }

  if (ext === '.yaml' || ext === '.yml') {
    return unwrap(yaml.load(text), wrapKey, file);
  }

  throw new Error(`Unsupported file type "${ext || '(none)'}" — use .csv, .tsv, .json, .ndjson, or .yaml`);
}

function unwrap(value, wrapKey, file) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === 'object') {
    const keys = wrapKey ? [wrapKey] : ['mcqs', 'questions', 'items', 'entries', 'records', 'data'];
    for (const key of keys) {
      if (Array.isArray(value[key])) return value[key];
    }
    // A single object (one guide / one subject) is still a valid one-item batch.
    if (keys.length === 1) throw new Error(`${file}: expected an array under "${wrapKey}"`);
    return [value];
  }
  throw new Error(`${file}: could not find a list of records`);
}

/* ------------------------------------------------------------------ *
 * Subject registry — display names come from real content, not a map
 * ------------------------------------------------------------------ */

export function subjectRegistry() {
  const registry = new Map();
  for (const file of listMarkdown(SUBJECTS_DIR)) {
    const doc = tryReadMarkdown(file);
    if (!doc) continue;
    const slug = path.basename(file, '.md');
    registry.set(slug, {
      slug,
      file,
      title: doc.data.title || titleize(slug),
      description: doc.data.description || '',
      icon: doc.data.icon || 'book',
    });
  }
  return registry;
}

/**
 * Resolve a subject's display name. Falls back to a nice title-case of the
 * slug rather than the string "undefined".
 */
export function subjectDisplayName(registry, subjectSlug, provided) {
  const fromContent = registry.get(subjectSlug)?.title;
  const candidate = clean(provided || '');
  if (candidate && candidate.toLowerCase() !== 'undefined' && candidate !== 'null') {
    // Prefer the content-derived title when the provided one looks like a bare titleize().
    if (fromContent && candidate === titleize(subjectSlug)) return fromContent;
    return candidate;
  }
  return fromContent || titleize(subjectSlug);
}

/* ------------------------------------------------------------------ *
 * Misc
 * ------------------------------------------------------------------ */

export function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

export function truncate(value, max = 60) {
  const str = String(value ?? '');
  return str.length > max ? `${str.slice(0, max - 1)}…` : str;
}

/** Map alternative CSV header names onto canonical field names. */
export function applyAliases(record, aliases) {
  const out = { ...record };
  for (const [canonical, alts] of Object.entries(aliases)) {
    if (clean(out[canonical])) continue;
    for (const alt of alts) {
      if (clean(out[alt])) {
        out[canonical] = out[alt];
        break;
      }
    }
  }
  return out;
}

/**
 * Fold header names so "Correct Answer", "correct_answer" and "correctAnswer"
 * all become "correctanswer". Real spreadsheets never agree on casing.
 */
export function foldRow(row) {
  const out = {};
  for (const [key, value] of Object.entries(row)) {
    out[String(key).toLowerCase().replace(/[\s_-]+/g, '')] = value;
  }
  return out;
}

/** Fold alias lists the same way, keeping the canonical name first. */
export function foldAliases(aliases) {
  const out = {};
  for (const [canonical, alts] of Object.entries(aliases)) {
    const folded = new Set([canonical, ...alts].map((a) => a.toLowerCase().replace(/[\s_-]+/g, '')));
    out[canonical] = [...folded];
  }
  return out;
}

/** foldRow + applyAliases in one step. */
export function mapRow(row, aliases) {
  return applyAliases(foldRow(row), foldAliases(aliases));
}

export function flag(args, name) {
  return args.includes(`--${name}`);
}

export function argValue(args, name, fallback = undefined) {
  const idx = args.findIndex((a) => a === `--${name}` || a.startsWith(`--${name}=`));
  if (idx === -1) return fallback;
  const arg = args[idx];
  if (arg.includes('=')) return arg.split('=').slice(1).join('=');
  return args[idx + 1];
}
