# GitHub Pages Deployment Guide for Arnalsteen Solutions

## Option 1: GitHub Pages (Static Version - Recommended)

### Step 1: Prepare Your Repository
1. Upload all files to your GitHub repository
2. Make sure the repository is public (required for free GitHub Pages)

### Step 2: Build Static Version
In your local project folder, run:
```bash
npm install
npm run build:static
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

Or manually:
```bash
npx vite build --config vite.config.static.ts
npx gh-pages -d dist-static
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch and "/ (root)" folder
6. Click "Save"

Your site will be available at: `https://gerbanarnal.github.io/ArnalsteenSolutions/`

**Note**: The contact form will show a message asking users to email directly since GitHub Pages can't run the backend.

---

## Option 2: Netlify (Full-Stack with Serverless Functions)

### Step 1: Push to GitHub
Upload your complete project to GitHub (including backend code)

### Step 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "New site from Git"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build:static`
   - Publish directory: `dist-static`
5. Click "Deploy site"

### Step 3: Add Netlify Functions (Optional)
To make the contact form work, you can convert the Express routes to Netlify Functions.

---

## Option 3: Vercel (Full-Stack)

### Step 1: Push to GitHub
Upload your complete project to GitHub

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up
2. Import your GitHub repository
3. Vercel will automatically detect it's a Node.js project
4. Deploy

The contact form will work fully on Vercel since it supports serverless functions.

---

## Option 4: Railway/Render (Full Backend Support)

For complete backend functionality:

### Railway:
1. Sign up at [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will automatically deploy both frontend and backend

### Render:
1. Sign up at [render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Render will build and deploy your full-stack app

---

## Recommended Order:
1. **GitHub Pages** - Free, easy, but limited (no backend)
2. **Vercel** - Free tier, supports serverless functions
3. **Netlify** - Free tier, good for static sites
4. **Railway/Render** - For full backend support

## Current Build Configuration:
- The project is configured to work on GitHub Pages with the static build
- Contact form shows appropriate message when backend isn't available
- All animations and styling work perfectly in static mode