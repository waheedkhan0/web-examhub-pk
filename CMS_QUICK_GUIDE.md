# ExamHub.pk — Content Management Guide

One command surface for all content:

```bash
npm run cms <command> [args]
```

Content lives in `src/content/` as markdown with YAML frontmatter. The CMS reads and writes
those files; it is not a database and there is no admin UI. Everything is plain text, so
content changes are reviewed and reverted with git like any other change.

---

## The bulk workflow

```bash
npm run cms template mcqs                        # 1. get a correctly-headed CSV
#    ... open samples/mcqs-template.csv in Excel / Sheets, fill it in ...
npm run cms import mcqs my-batch.csv --dry-run   # 2. validate without writing
npm run cms import mcqs my-batch.csv             # 3. write
npm run cms doctor --fix                         # 4. reconcile subject pages + counts
npm run build                                    # 5. verify the site builds
```

`--dry-run` reports row-level problems with line numbers and writes nothing. If any row is
invalid the whole batch is rejected and no file is touched, so a bad cell never leaves half a
batch applied.

---

## Commands

| Command | What it does |
|---|---|
| `cms stats` | Page and question counts, per subject, and which subjects have no questions |
| `cms template <type>` | Writes a starter intake file with correct headers and an example row (`--json` for JSON) |
| `cms import <type> <file>` | Imports rows into `src/content` |
| `cms export mcqs` | Flattens every stored MCQ back out to `samples/mcqs-export.csv` |
| `cms validate [type]` | Schema checks on stored content (`all` checks every collection) |
| `cms doctor [--fix]` | Audits broken topic links, orphan sets, bad answer keys, stale counts; `--fix` repairs what it safely can |
| `cms list [type]` | Lists files with titles and question counts |
| `cms help` | Full usage |

`<type>` is one of `mcqs`, `guides`, `subjects`, `exams`, `blog`.

Shorthand scripts exist for the common paths — `cms:stats`, `cms:template`, `cms:export`,
`cms:doctor`, `cms:fix`, `cms:validate`, and `cms:import-mcqs` / `-guides` / `-subjects` /
`-exams` / `-blog`. With those, pass arguments after `--`:

```bash
npm run cms:import-mcqs -- my-batch.csv --dry-run
```

---

## Import formats

Detected from the file extension:

- **`.csv` / `.tsv`** — one row per question (or per guide/subject). Standard RFC-4180
  quoting: a cell containing a comma, a quote or a line break is wrapped in double quotes and
  embedded quotes are doubled (`""`). Multi-line cells work, so a whole guide can be authored
  in one spreadsheet row.
- **`.json`** — an array of records, or `{"mcqs": [...]}`.
- **`.ndjson` / `.jsonl`** — one JSON record per line.
- **`.yaml` / `.yml`** — a list of records.

Header names are matched case- and separator-insensitively, and most fields have aliases:
`Correct Answer`, `correct_answer` and `correctAnswer` all resolve to the same field. Running
`cms import <type>` with no file prints that type's full column list and aliases.

---

## MCQ columns

Only `subject`, `topic`, `question`, options and `explanation` are required.

| Column | Notes |
|---|---|
| `subject` | Slug, e.g. `pakistan-studies` → `src/content/mcqs/<subject>/` |
| `topic` | Slug, e.g. `geography` → `<topic>.md` |
| `question` | The stem |
| `options` | One pipe-separated cell (`Paris\|London\|Berlin\|Madrid`) **or** `option1`…`option5` |
| `answer` | **1-4** by default; also accepts `0-3`, `A`-`D`, or the correct option's text |
| `explanation` | Required — why the key is right and the main trap is wrong |
| `keyConcept` | Short recall anchor, shown in the answer panel |
| `examTip` | The examiner's trap, shown in the answer panel |
| `difficulty` | `Basic` \| `Intermediate` \| `Advanced` \| `Exam-Level` |
| `targetExams` | Semicolon-separated: `PPSC;FPSC;NTS` |
| `testedIn` | Semicolon-separated tags rendered on the question |
| `title`, `description`, `topicName` | Optional page metadata; generated from the topic when omitted |

Flags: `--difficulty`, `--exams "A;B"` (defaults for empty cells), `--replace` (rebuild the
set from the batch instead of merging), `--no-subject` (skip subject-page creation).

A batch is grouped by `subject` + `topic`, so one CSV can populate many files at once. It
creates one markdown file **per topic**, not one per question.

### Nested JSON

For hand-authored batches, one object per topic with a `questions` array avoids repeating
metadata on every row:

```json
[
  {
    "subject": "english",
    "topic": "prepositions",
    "topicName": "Prepositions and Usage",
    "title": "English Prepositions MCQs with Explanations",
    "description": "Prepositions and phrasal verbs tested in screening papers.",
    "difficulty": "Exam-Level",
    "targetExams": ["PPSC", "FPSC", "NTS"],
    "questions": [
      {
        "question": "The match was called ___ twice because of heavy rain.",
        "options": ["out", "in", "up", "off"],
        "answer": 4,
        "explanation": "Call off means cancel. Call on = visit, call for = require.",
        "keyConcept": "call off = cancel; call on = visit; call for = require",
        "examTip": "Phrasal verbs sharing one particle are paired to test all four at once."
      }
    ]
  }
]
```

---

## Imports merge — they do not overwrite

This is the behaviour that matters most in bulk work.

Importing into a topic that already exists **appends** the new questions, keeps every existing
question and the editorial body text, and renumbers ids. A question whose text already appears
in the set (compared after normalising case, whitespace and punctuation) is skipped as a
duplicate and reported. Re-importing the same file twice therefore adds nothing.

`--replace` opts out and rebuilds the set from the batch.

For `guides`, `subjects`, `exams` and `blog` — where one record *is* one whole document — an
existing file is **skipped**, not overwritten, unless you pass `--force`.

---

## Export, edit, re-import

```bash
npm run cms export mcqs                        # all sets → samples/mcqs-export.csv
npm run cms export mcqs --subject=english      # one subject
npm run cms export mcqs --format=json
```

The export is itself a valid intake file: edit it in a spreadsheet, add rows, import it back.
Unchanged rows are recognised as duplicates and skipped, so only new rows land. This is the
practical way to fix a typo across hundreds of questions or to renumber an answer key.

`--answers-0-based` exports the stored index instead of the friendlier 1-based position.

---

## Subject pages stay in sync

Importing MCQs for a subject with no subject page creates one, so new content is reachable
from `/subjects` immediately instead of sitting orphaned. The generated page is a scaffold
with a "before publishing" checklist — replace the placeholder overview and set
`syllabusWeightage` before treating it as published.

`cms doctor --fix` also refreshes each subject's `subtopics[].questionCount` from real data,
adds topics that gained content but were never declared, and repairs a missing `subjectName`.
Counts in content files are derived, not hand-maintained.

### What `doctor` checks

- `answer` outside the range of its options
- fewer than two options, or duplicated options within a question
- missing explanation, title or subject
- duplicate question text, or duplicate question ids, inside one set
- **answer-key balance** — more than 60% of a set's answers on one letter, which makes a set
  guessable
- MCQ sets whose subject has no subject page (unreachable content)
- subject pages advertising a topic with no MCQ file behind it (a link that would 404)
- subjects with no practice sets at all
- frontmatter that will not parse

---

## Content quality rules

The importer enforces structure; these editorial rules keep the site trustworthy.

1. **Exactly one defensible correct answer.** If a strong candidate could argue two options,
   rewrite or drop the question.
2. **Distractors must be plausible and of the same category** — real passes with real passes,
   real years with real years. Never joke options, and never make the correct option three
   times longer than the rest; that alone gives the answer away.
3. **Prefer facts that do not rot.** Avoid current office-holders, prices, membership totals
   that change annually, and live territorial status claims. Where a figure is date-dependent,
   state the year in the question.
4. **Do not invent past-paper citations.** `testedIn` should carry exam bodies you can stand
   behind (`PPSC;FPSC`), not specific papers and years you cannot verify.
5. **Explanations teach.** Say why the key is right and why the tempting option is wrong;
   `keyConcept` is the one-line recall hook and `examTip` names the trap.
6. **Spread the answer key** across positions — `doctor` flags a lopsided set.

---

## Troubleshooting

**Columns land in the wrong fields.** A cell contains a comma and is not quoted. Quote it, or
use the single `options` column so options are separated by `|`.

**"answer ... is not a valid option".** `answer` is 1-based by default. `0` is read as an
index, so prefer `1-4` or the option text itself.

**A subject page shows a topic as "Coming soon".** That topic is declared in the subject's
`subtopics` but has no MCQ file yet. Import the set, or remove the entry. Declared-but-empty
topics render as non-clickable on purpose, so the site never links to a 404.

**Import says nothing was written.** Any invalid row rejects the whole batch — fix the listed
lines and re-run.

**You want to undo an import.** `git checkout -- src/content` before you build.

---

## Where things live

```
scripts/
  content-cli.js      command surface: stats, template, import, export, validate, doctor, list
  import-mcqs.js      MCQ import: field mapping, validation, merge
  import-records.js   guides / subjects / exams / blog, driven by per-type field specs
  lib/cms.js          CSV + YAML frontmatter, intake loading, subject registry, string helpers
  lib/library.js      cross-collection operations: mcqSets, subject sync, audit
src/content/
  mcqs/<subject>/<topic>.md   guides/<slug>.md   subjects/<slug>.md
  exams/<slug>.md             blog/<slug>.md
samples/                      generated templates and exports (safe to delete)
```

`scripts/lib/cms.js` is the only place that knows how to read and write a content file. To add
a field, change the schema in `src/content/config.ts` and the matching import spec — do not
hand-assemble frontmatter strings, since a single unescaped quote can silently corrupt a page.
