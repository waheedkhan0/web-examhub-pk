# ExamHub.pk - Complete Build Documentation

## Quick Start

### Prerequisites
- Node.js 22.12.0 or higher
- npm or pnpm

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server (recommended with background mode)
npm run dev --background

# or for traditional development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
examhub-pk/
├── src/
│   ├── content/              # All content collections
│   │   ├── guides/           # 15+ long-form study guides (800-2000+ words)
│   │   ├── mcqs/             # MCQ sets organized by subject
│   │   │   ├── islamiat/
│   │   │   ├── pakistan-studies/
│   │   │   ├── english/
│   │   │   ├── general-knowledge/
│   │   │   ├── current-affairs/
│   │   │   ├── mathematics/
│   │   │   ├── everyday-science/
│   │   │   └── computer-science/
│   │   ├── subjects/         # Subject hub pages (300+ words intro each)
│   │   ├── exams/            # Exam-specific landing pages
│   │   ├── blog/             # Blog posts and updates
│   │   └── config.ts         # Zod schemas for all collections
│   ├── layouts/              # Reusable layout templates
│   │   ├── BaseLayout.astro  # Main layout with nav & footer
│   │   ├── GuideLayout.astro # For guides and blog posts
│   │   └── MCQLayout.astro   # For MCQ pages
│   ├── components/           # Astro components
│   │   ├── InteractiveMCQ.astro  # Interactive quiz widget
│   │   └── ClientSearch.astro    # Search functionality
│   ├── pages/                # Route pages
│   │   ├── index.astro       # Homepage
│   │   ├── [slug].astro      # Dynamic routes
│   │   ├── 404.astro         # Not found page
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── privacy-policy.astro
│   │   ├── terms.astro
│   │   ├── disclaimer.astro
│   │   └── [collection]/ 
│   │       ├── index.astro   # Collection index pages
│   │       └── [slug].astro  # Dynamic content pages
│   └── styles/
│       └── global.css        # Tailwind + custom styles
├── public/
│   ├── robots.txt            # SEO robots file
│   ├── favicon.svg
│   ├── favicon.ico
│   └── apple-touch-icon.png
├── dist/                     # Build output (auto-generated)
├── astro.config.mjs          # Astro configuration
├── tsconfig.json             # TypeScript config
├── netlify.toml              # Netlify deployment config
├── vercel.json               # Vercel deployment config
└── package.json
```

## Technology Stack

- **Framework:** Astro 5 with TypeScript
- **Styling:** Tailwind CSS 4 + custom CSS
- **Content:** MDX for flexible content with components
- **Search:** Pagefind (client-side indexing)
- **SEO:** Built-in sitemap, JSON-LD schemas, canonical tags
- **Deployment:** Netlify or Vercel (both configured)
- **CMS:** Git-based (Markdown/MDX files)

## Content Model

### Guides Collection (`src/content/guides/*.md`)
- **Purpose:** Long-form study material (800-2000+ words)
- **Schema:** title, description, author, publishDate, updatedDate, readingTime, category, targetExams, tags, featured
- **Example:** `how-to-prepare-for-css-in-6-months.md`

### MCQs Collection (`src/content/mcqs/[subject]/[topic].md`)
- **Purpose:** Rich MCQ sets with detailed explanations
- **Schema:** title, description, subject, topic, difficulty, targetExams, questions array
- **Each Question:** id, question, options[], answer (index), explanation, keyConcept, examTip, testedIn[]
- **Minimum 400-600 words** of explanation content per page

### Subjects Collection (`src/content/subjects/*.md`)
- **Purpose:** Subject hub pages with overview + structure
- **Schema:** title, description, syllabusWeightage, relatedExams[], subtopics[]
- **Content:** 300+ word intro explaining importance and exam coverage

### Exams Collection (`src/content/exams/*.md`)
- **Purpose:** Exam-specific preparation pages
- **Schema:** title, fullName, description, conductingBody, frequency, eligibility, examFormat, featuredSubjects[], keyStats[]

### Blog Collection (`src/content/blog/*.md`)
- **Purpose:** News, updates, tips, strategy articles
- **Schema:** title, description, author, publishDate, updatedDate, category, tags

## SEO Implementation

### On Every Page
1. ✅ Unique `<title>` (50-60 characters)
2. ✅ Meta `description` (150-160 characters)
3. ✅ Proper H1 hierarchy (one per page)
4. ✅ Semantic HTML5 tags
5. ✅ Canonical URLs
6. ✅ Open Graph & Twitter Card tags

### JSON-LD Structured Data
- ✅ Organization schema (homepage)
- ✅ WebSite schema (homepage)
- ✅ Article/BlogPosting schema (guides & blog)
- ✅ Quiz/Question schema (MCQ pages)
- ✅ BreadcrumbList (all pages)

### Sitemaps & Robots
- ✅ Auto-generated `sitemap-index.xml` from Astro integration
- ✅ `robots.txt` with Sitemap references
- ✅ No indexing for 404, admin, or placeholder pages

## Adding New Content

### Adding a New MCQ Set

1. **Create file:** `src/content/mcqs/[subject]/[topic-slug].md`

```markdown
---
title: "Geography MCQs - Borders & Boundaries"
description: "25 exam-level MCQs on Pakistan's geographical borders, natural features, and territorial claims."
subject: "pakistan-studies"
subjectName: "Pakistan Studies"
topic: "geography"
topicName: "Geography & Borders"
difficulty: "Exam-Level"
targetExams: ["FPSC", "PPSC", "CSS"]
updatedDate: "2026-10-13"
questions:
  - id: 1
    question: "What is the total length of Pakistan's coastline?"
    options:
      - "1,046 km"
      - "1,190 km"
      - "1,200 km"
      - "1,290 km"
    answer: 3
    explanation: "Pakistan's coastline extends approximately 1,046 km along the Arabian Sea. This is the correct answer. The common misconception is confusing this with maritime boundary extensions or measurement methods. The 1,046 km figure is the official measurement recognized by all exam bodies."
    keyConcept: "Pakistan's geographical features"
    examTip: "Memorize key geographical measurements: coastline, area, and natural features as these frequently appear in FPSC and PPSC papers."
    testedIn: ["FPSC", "PPSC", "CSS", "NTS"]
```

2. **Ensure content meets minimum standards:**
   - Minimum 5-10 questions per set (aim for 20-50)
   - 200+ words of detailed explanations
   - Each explanation includes why the answer is correct AND why others are wrong
   - Related concepts or tips included

### Adding a New Guide

1. **Create file:** `src/content/guides/[slug].md`

```markdown
---
title: "Complete CSS English Preparation Guide 2026"
description: "Master CSS English paper with proven strategies, syllabus analysis, and detailed examples. Learn essay, precis, and passage comprehension techniques."
author: "Dr. Ahmad Hassan, Education Specialist"
authorRole: "CSS English Mentor"
publishDate: "2026-10-10"
updatedDate: "2026-10-13"
readingTime: "15 min read"
category: "CSS Preparation"
targetExams: ["CSS", "PMS"]
tags: ["English", "Writing", "CSS", "Strategy"]
featured: true
---

## Introduction
[800+ words of introduction]

## Section 1: Essay Writing
[Detailed content with examples]

...
```

2. **Content requirements:**
   - Minimum 800-2000+ words
   - Original, unique content (no copying)
   - Clear structure with H2/H3 headings
   - Relevant examples and case studies
   - Action-oriented advice
   - Internal links to related MCQs/guides

### Adding a New Subject

1. **Create file:** `src/content/subjects/[slug].md`

```markdown
---
title: "Current Affairs"
description: "Master Current Affairs with daily news analysis, important trends, and exam-focused coverage..."
icon: "📰"
updatedDate: "2026-10-13"
syllabusWeightage: "15-20%"
relatedExams: ["CSS", "PPSC", "FPSC", "PMS", "NTS"]
subtopics:
  - name: "National Politics"
    slug: "national-politics"
    questionCount: 15
  - name: "International Affairs"
    slug: "international-affairs"
    questionCount: 12
  - name: "Economic News"
    slug: "economic-news"
    questionCount: 10
---

## Current Affairs Overview
[300+ words explaining the subject]

## Why Current Affairs Matters
[Importance for different exams]

## Study Strategy
[How to prepare effectively]
```

## Building & Deploying

### Local Build

```bash
npm run build
# Creates /dist folder with static HTML
```

### Deploy to Netlify

```bash
# Option 1: Using Netlify CLI
npm install -g netlify-cli
netlify deploy --prod

# Option 2: Via Git integration (recommended)
# 1. Push code to GitHub
# 2. Connect repo in Netlify dashboard
# 3. Set build command: npm run build
# 4. Set publish directory: dist
# 5. Configure custom domain: examhub.pk
```

### Deploy to Vercel

```bash
# Option 1: Using Vercel CLI
npm install -g vercel
vercel

# Option 2: Via Git integration (recommended)
# 1. Push code to GitHub
# 2. Import project in Vercel dashboard
# 3. Vercel auto-detects Astro settings
# 4. Configure custom domain: examhub.pk
```

### Custom Domain Setup (examhub.pk)

1. **Update nameservers at domain registrar**
   - Point to Netlify: `dns1.p06.nsone.net`, `dns2.p06.nsone.net`, etc.
   - Or Vercel: `ns1.vercel.com`, `ns2.vercel.com`

2. **Configure in Netlify/Vercel dashboard**
   - Add domain: examhub.pk
   - Enable automatic HTTPS (Let's Encrypt)

3. **Set up redirects** (www → non-www or vice versa)
   - Already configured in netlify.toml and vercel.json

## Performance & Web Vitals

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Done
- ✅ Static site generation (zero runtime JS for content)
- ✅ Image optimization (WebP format)
- ✅ CSS minification & tree-shaking
- ✅ Font preloading
- ✅ Cache headers configured
- ✅ Gzip compression enabled

### Check Metrics
```bash
# Using Google PageSpeed Insights
# https://pagespeed.web.dev/?url=https://examhub.pk

# Using GTmetrix
# https://gtmetrix.com/

# Using WebPageTest
# https://www.webpagetest.org/
```

## Search Functionality

### Pagefind Integration
Pagefind provides instant, client-side search across all content.

```javascript
// Search box functionality (already implemented)
- Indexes all markdown content automatically
- No backend required
- Instant results
- Works offline
```

## Analytics & Tracking

### Google Analytics 4 Setup

1. **Get GA4 property ID**
   - Create property at https://analytics.google.com/
   - Get Measurement ID (G-XXXXXXXXXX)

2. **Update in BaseLayout.astro**
   ```javascript
   gtag('config', 'G-XXXXXXXXXX');
   ```

3. **Verify in Google Analytics**
   - Check Real-time data
   - Set up custom events if needed

### Google Search Console
1. Verify domain at https://search.google.com/search-console/
2. Upload sitemap
3. Monitor indexing and search performance
4. Fix any crawl errors

## AdSense Preparation

### Pre-AdSense Checklist ✅
- ✅ 50+ unique, high-quality pages (mostly >400 words)
- ✅ All legal pages present (About, Privacy, Terms, Disclaimer, Contact)
- ✅ Clear site structure and navigation
- ✅ No thin content or placeholder pages
- ✅ Mobile-responsive design
- ✅ Fast loading (< 2.5s LCP)
- ✅ Proper robots.txt and sitemap
- ✅ No pop-ups or intrusive ads
- ✅ HTTPS enabled
- ✅ Contact form functional

### AdSense Application
1. Ensure all above requirements met
2. Go to https://www.google.com/adsense/start/
3. Sign in with Google account
4. Add domain: examhub.pk
5. Place AdSense code in site (after approval)
6. Wait 5-10 days for approval

### Post-Approval
- Add ads.txt for verification
- Place ad units strategically
- Monitor impressions and CTR
- Optimize ad placement based on analytics

## Maintenance

### Weekly Tasks
- Monitor Google Search Console for errors
- Check site performance metrics
- Review new analytics data

### Monthly Tasks
- Update Current Affairs content
- Add 2-3 new MCQ sets
- Update publish/modified dates
- Review and fix any broken links

### Quarterly Tasks
- Content audit and refresh
- Update exam syllabi if changed
- Review performance and optimize
- Plan next content sprints

## Scaling to 500+ Pages

### Content Calendar Template

**Q4 2026 (Oct-Dec):**
- 10 new MCQ sets (2-3 per week)
- 2 new comprehensive guides
- 8 new blog posts
- Subject deep-dives (1-2 per week)

**Q1 2027 (Jan-Mar):**
- 15 new MCQ sets
- 3 new guides
- 12 blog posts
- Exam syllabus updates

**Target:** 50+ pages → 150+ pages by Q2 2027 → 300+ by Q4 2027

### Quality Gates
Before publishing ANY content:
1. **Originality:** 100% unique, no plagiarism
2. **Depth:** Minimum word count met (guides: 800+, MCQs: 400+)
3. **Accuracy:** All information verified with official sources
4. **SEO:** Proper title, description, headings, internal links
5. **Structure:** Clear formatting, good readability
6. **Value:** Genuinely helps students prepare

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Pages Not Showing
- Check content file exists in `/src/content/[collection]/`
- Verify frontmatter YAML is valid
- Check slug in URL matches file name
- Run `npm run build` to see build errors

### Styling Issues
- Clear Tailwind cache: Delete `.astro` folder
- Rebuild: `npm run build`
- Check `global.css` for conflicting styles

### Deployment Issues
- Check Netlify/Vercel build logs
- Verify node version >= 22.12.0
- Ensure all environment variables set
- Check custom domain DNS configuration

## Resources & References

- **Astro Docs:** https://docs.astro.build
- **Tailwind CSS:** https://tailwindcss.com/docs
- **MDX:** https://mdxjs.com/
- **Google Analytics:** https://support.google.com/analytics
- **Google AdSense:** https://support.google.com/adsense
- **SEO Best Practices:** https://developers.google.com/search
- **Web Vitals:** https://web.dev/vitals/

## Support

For issues or questions:
1. Check this documentation
2. Review Astro documentation
3. Contact: support@examhub.pk

---

**Last Updated:** October 13, 2026
**Version:** 1.0
**Status:** Production Ready
