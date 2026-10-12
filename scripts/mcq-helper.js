import fs from 'fs';
import path from 'path';

const mcqsDir = path.resolve(process.cwd(), 'src/content/mcqs');

export function writeMcqFile(item) {
  const targetDir = path.join(mcqsDir, item.subject);
  fs.mkdirSync(targetDir, { recursive: true });
  const filePath = path.join(targetDir, `${item.topic}.md`);

  const fileData = `---
title: "${item.title.replace(/"/g, '\\"')}"
description: "${item.description.replace(/"/g, '\\"')}"
subject: "${item.subject}"
subjectName: "${item.subjectName}"
topic: "${item.topic}"
topicName: "${item.topicName}"
author: "ExamHub Academic Editorial Board"
updatedDate: "2026-10-10"
difficulty: "Exam-Level"
targetExams: ${JSON.stringify(item.targetExams)}
questions: ${JSON.stringify(item.questions, null, 2)}
---

${item.editorialContent}
`;

  fs.writeFileSync(filePath, fileData, 'utf-8');
  console.log(`Generated MCQ set: ${item.subject}/${item.topic} (${item.questions.length} questions)`);
}
