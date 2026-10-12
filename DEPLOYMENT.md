# ExamHub.pk - Deployment Guide

Complete step-by-step guide to deploy ExamHub.pk to production.

## ✅ Prerequisites

- GitHub account (repository already created ✓)
- Netlify or Vercel account (free tier available)
- Custom domain: examhub.pk (optional for setup, required for production)
- Git configured locally ✓

## 📊 Current Status

```
GitHub Repository: https://github.com/waheedkhan0/web-examhub-pk
Branch: main
Status: Ready for deployment ✓
```

---

## 🚀 Option 1: Deploy to Netlify (Recommended for Static Sites)

### Step 1: Connect GitHub to Netlify

1. Go to **[Netlify Dashboard](https://app.netlify.com)**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Authorize Netlify to access your repositories
5. Select **`waheedkhan0/web-examhub-pk`**

### Step 2: Configure Build Settings

Netlify will auto-detect Astro settings. Verify:

```
Build Command:     npm run build
Publish Directory: dist
```

If not auto-detected, set manually:
1. Click **"Show Advanced"**
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Add Environment Variable (optional for later):
   - Key: `NODE_VERSION`
   - Value: `22.12.0`

### Step 3: Deploy

1. Click **"Deploy site"**
2. Netlify builds your project (watch the logs)
3. Your site goes live at: `https://[random-name].netlify.app`

### Step 4: Connect Custom Domain

1. In Netlify, go to **Site Settings** → **Domain Management**
2. Click **"Add custom domain"**
3. Enter: `examhub.pk`
4. Netlify provides nameservers:
   ```
   dns1.p06.nsone.net
   dns2.p06.nsone.net
   dns3.p06.nsone.net
   dns4.p06.nsone.net
   ```
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Update nameservers to Netlify's
7. Wait 24-48 hours for DNS propagation
8. Netlify auto-provisions SSL certificate ✓

### Step 5: Verify Production

```
✓ https://examhub.pk loads
✓ SSL certificate active (green lock)
✓ sitemap.xml accessible
✓ robots.txt working
✓ All pages indexed
```

---

## 🚀 Option 2: Deploy to Vercel (Alternative)

### Step 1: Connect GitHub to Vercel

1. Go to **[Vercel Dashboard](https://vercel.com/dashboard)**
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Paste: `https://github.com/waheedkhan0/web-examhub-pk`
5. Click **"Import"**

### Step 2: Configure Project

Vercel auto-detects Astro:
```
Framework: Astro
Build Command: npm run build
Output Directory: dist
```

### Step 3: Deploy

1. Click **"Deploy"**
2. Vercel builds and deploys (watch logs)
3. Live at: `https://[project-name].vercel.app`

### Step 4: Connect Custom Domain

1. In Vercel, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter: `examhub.pk`
4. Update nameservers at your registrar (same as Netlify)
5. Wait for DNS propagation
6. SSL auto-provisioned ✓

---

## 📋 Deployment Checklist

Before deploying to production, verify:

### Build & Performance
- [ ] `npm run build` completes without errors
- [ ] No TypeScript errors
- [ ] Build output size reasonable (~1.3MB expected)
- [ ] All pages generated (58+ pages)

### Content Quality
- [ ] Homepage loads correctly
- [ ] Navigation works on mobile
- [ ] All legal pages present and accessible
- [ ] MCQ pages display correctly
- [ ] Guide pages render properly
- [ ] Subject pages show content

### SEO Verification
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Canonical tags present
- [ ] Meta tags correct (check page source)
- [ ] JSON-LD schemas valid

### Mobile Testing
- [ ] Responsive on iPhone/Android
- [ ] Touch interactions work
- [ ] Images display correctly
- [ ] Text readable without zoom
- [ ] Navigation functional

### Performance
- [ ] Page loads in < 2.5 seconds
- [ ] No console errors
- [ ] No broken images
- [ ] CSS/JS loading correctly

---

## 🔧 Post-Deployment Setup

### 1. Google Search Console

```bash
# Add property
1. Go to https://search.google.com/search-console/
2. Click "Add property"
3. Choose "URL prefix"
4. Enter: https://examhub.pk
5. Choose verification method: HTML file
6. Download HTML file
7. Upload to /public/[verification-file].html
8. Run: git add -A && git push
9. Verify in Search Console
```

### 2. Google Analytics

```bash
# Setup GA4
1. Create account at https://analytics.google.com/
2. Create property for examhub.pk
3. Get Measurement ID (G-XXXXXXXXXX)
4. Update in src/layouts/BaseLayout.astro:
   gtag('config', 'G-YOUR-ID');
5. Push changes: git add -A && git push
6. Wait 24-48 hours for data collection
```

### 3. Google AdSense

```bash
# After 2-3 weeks of traffic
1. Go to https://www.google.com/adsense/start/
2. Sign in with Google account
3. Add site: examhub.pk
4. Complete application
5. Wait for approval (5-30 days)
6. After approval, place ad code on site
```

---

## 🔄 CI/CD & Auto-Deployment

Your GitHub repository is now connected to Netlify/Vercel:

**What happens automatically:**
- Push to `main` → Auto-builds & deploys
- Pull requests → Auto-preview deployments
- All changes tracked in git history

**Workflow:**

```bash
# Make changes locally
npm run dev              # Test locally

# Commit and push
git add -A
git commit -m "Add new MCQs on Pakistan Studies"
git push origin main

# Netlify/Vercel automatically:
# 1. Detects push
# 2. Runs: npm run build
# 3. Deploys to production
# 4. Your site updates in 1-3 minutes ✓
```

---

## 📝 Content Updates on Production

### Add New MCQs

```bash
cd /Users/waheedkhan/Projects/examhub-pk

# Prepare content
npm run cms:samples
# Edit samples/mcqs-sample.csv with your data

# Import
npm run cms:import-mcqs samples/mcqs-sample.csv

# Build locally
pnpm run build

# Push to GitHub (auto-deploys)
git add -A
git commit -m "Add 50 new MCQs on Pakistan Geography"
git push origin main

# Check deployment
# Visit https://examhub.pk/mcqs/pakistan-studies/geography/
```

### Update Existing Content

```bash
# Edit markdown files directly
nano src/content/mcqs/pakistan-studies/geography.md

# Build & push
pnpm run build
git add -A
git commit -m "Update geography MCQ explanations"
git push origin main
```

---

## 🛡️ Security Best Practices

### 1. Environment Variables (if needed later)

```bash
# In Netlify/Vercel dashboard:
Settings → Environment Variables

# Example (for future use):
DATABASE_URL = your_database_url
API_KEY = your_api_key
```

### 2. HTTPS/SSL

✓ Auto-enabled by Netlify/Vercel with Let's Encrypt
✓ All traffic redirected to HTTPS

### 3. Security Headers

✓ Already configured in `netlify.toml`:
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
```

### 4. DNS Security (Optional)

For enhanced security:
```
Enable DNSSEC at your registrar
```

---

## 📊 Monitoring & Maintenance

### Weekly

```bash
# Check Google Search Console
# Look for crawl errors or indexing issues

# Check analytics
# Visit https://analytics.google.com/
# Review traffic, pages, users

# Monitor site
# Visit https://examhub.pk and test pages
```

### Monthly

```bash
# Performance audit
# Run: https://pagespeed.web.dev/?url=https://examhub.pk

# SEO check
# Monitor Search Console for ranking changes

# Content review
# Check for broken links, update old info
```

### Quarterly

```bash
# Full content audit
# Review all 58+ pages for accuracy

# Performance optimization
# Update images, optimize CSS if needed

# Security update
# Check for dependency updates: npm update
# Deploy: git add -A && git push
```

---

## 🚨 Troubleshooting Deployment

### Build Fails on Netlify/Vercel

```bash
# Check build logs in Netlify/Vercel dashboard
# Usually shows the error

# Common issues:
1. Node version mismatch
   → Set NODE_VERSION=22.12.0 in env vars

2. Dependencies missing
   → Run: npm install locally, push again

3. Build command wrong
   → Verify: npm run build works locally

4. Astro issues
   → Check: npm run build locally for same error
```

### Site Not Updating After Push

```bash
# Check git status
git log --oneline -5

# If not pushed:
git push origin main

# If pushed but not deploying:
1. Check Netlify/Vercel deploy logs
2. Verify build completed successfully
3. Check for TypeScript errors
4. Try redeploying: Click "Redeploy" in dashboard
```

### DNS Not Working

```bash
# Verify nameservers
# Go to: https://www.whatsmydns.net/
# Enter: examhub.pk
# Check if all nameservers point to Netlify

# If not:
1. Go back to domain registrar
2. Update nameservers again
3. Wait 24-48 hours
4. Test: https://www.whatsmydns.net/
```

### SSL Certificate Issues

```bash
# Netlify/Vercel auto-provision SSL
# Should work automatically

# If still showing mixed content warning:
1. Check for hardcoded http:// links
2. Ensure all external links use https://
3. Rebuild and redeploy

# Check SSL status:
https://www.ssllabs.com/ssltest/analyze.html?d=examhub.pk
```

---

## 🎯 Deployment Timeline

### Day 1: Initial Setup
```
✓ Push to GitHub
✓ Connect to Netlify/Vercel
✓ Site live on *.netlify.app or *.vercel.app
✓ ~5-10 minutes
```

### Day 2-3: DNS Setup
```
✓ Connect custom domain
✓ Update nameservers at registrar
✓ DNS propagation (~24-48 hours)
✓ Site accessible at examhub.pk
```

### Day 4-7: Google Setup
```
✓ Verify in Google Search Console
✓ Submit sitemap
✓ Add to Google Analytics
✓ Wait for first Google crawl
```

### Week 2+: Content & Optimization
```
✓ Monitor Search Console
✓ Check analytics
✓ Add more content via CMS
✓ Monitor rankings
✓ Prepare AdSense application
```

---

## 📈 Performance Monitoring

### Netlify Analytics

In Netlify Dashboard:
```
Analytics tab shows:
- Pageviews
- Unique visitors
- Top pages
- Response times
- Build stats
```

### Vercel Analytics

In Vercel Dashboard:
```
Analytics tab shows:
- Page performance
- Core Web Vitals
- User feedback
- Error tracking
```

### Google Analytics

At analytics.google.com:
```
Real-time users
Traffic sources
Top pages
User behavior
Conversion tracking
```

---

## 🔐 Pre-AdSense Deployment Checklist

Before applying for AdSense:

- [ ] Site deployed to custom domain (examhub.pk)
- [ ] All 58+ pages indexable (no noindex tags)
- [ ] robots.txt allows crawling
- [ ] Sitemap submitted to Google
- [ ] 2-3 weeks of traffic history
- [ ] All legal pages present and accessible
- [ ] No other ads displayed
- [ ] No broken links (check Search Console)
- [ ] Mobile responsive verified
- [ ] Fast loading (check PageSpeed)
- [ ] Contact form working
- [ ] Privacy policy mentions cookies

---

## 🚀 Next Steps

### Immediate (Today)

```bash
# Verify GitHub push
git log --oneline -3

# Check site builds
npm run build

# Deploy to Netlify or Vercel
# Follow Option 1 or Option 2 above
```

### This Week

```bash
# Get site live on custom domain
# Verify deployment working
# Check all pages accessible
# Test mobile responsiveness
```

### Next 2 Weeks

```bash
# Set up Google Search Console
# Submit sitemap
# Set up Google Analytics
# Monitor traffic

# Start adding more content
npm run cms:samples
npm run cms:import-mcqs your-file.csv
pnpm run build
git add -A && git push
```

### Week 4+

```bash
# Apply for Google AdSense
# Monitor search rankings
# Continue adding content
# Check analytics regularly
```

---

## 📞 Support Resources

**Netlify Support:**
- Docs: https://docs.netlify.com
- Community: https://community.netlify.com

**Vercel Support:**
- Docs: https://vercel.com/docs
- Community: https://vercel.com/community

**Astro Support:**
- Docs: https://docs.astro.build
- Discord: https://astro.build/chat

**Google Support:**
- Search Console: https://support.google.com/webmasters
- Analytics: https://support.google.com/analytics

---

## 🎉 Deployment Complete Checklist

```
BEFORE DEPLOYMENT:
  ✓ Local build works (npm run build)
  ✓ All files committed to git
  ✓ GitHub repo created and connected
  ✓ README reviewed

DEPLOYMENT:
  ✓ Netlify/Vercel connected to GitHub
  ✓ Build settings configured
  ✓ Site deployed to *.netlify.app / *.vercel.app
  ✓ Custom domain added
  ✓ DNS updated

POST-DEPLOYMENT:
  ✓ Site accessible at examhub.pk
  ✓ SSL certificate active (green lock)
  ✓ All pages loading
  ✓ Mobile responsive
  ✓ Search Console verified
  ✓ Analytics installed

MONITORING:
  ✓ Google crawl started
  ✓ Traffic increasing
  ✓ No errors in logs
  ✓ Content updates deploying automatically
```

---

## 💡 Tips for Success

1. **Push regularly**: Make deployments automatic and frequent
2. **Monitor closely**: First 2-3 weeks are critical
3. **Add content consistently**: Use CMS to scale
4. **Track analytics**: Understand what's working
5. **Test on mobile**: Most traffic will be mobile
6. **Backup regularly**: git push is your backup

---

**Deployment Guide Last Updated:** October 13, 2026  
**Status:** Ready for Production  
**GitHub:** https://github.com/waheedkhan0/web-examhub-pk  
**Domain:** examhub.pk (coming live)

Good luck with your deployment! 🚀
