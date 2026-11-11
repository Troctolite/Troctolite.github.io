# Geetika Chauhan — portfolio and journal

A responsive portfolio with a Jekyll-powered Markdown blog, designed for GitHub Pages.

## Publish to GitHub Pages

1. Create a **public** repository named `YOURUSERNAME.github.io` (replace with your actual GitHub username).
2. Upload **the contents of this folder**, including `_config.yml`, `_layouts`, `_posts`, `journal`, `index.html`, `styles.css` and `script.js`, to the repository root. **Do not upload the enclosing folder only.**
3. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, `main`, `/(root)` and **Save**.
4. Wait for the Pages deployment. Visit `https://YOURUSERNAME.github.io/` and `https://YOURUSERNAME.github.io/journal/`.

GitHub Pages supports Jekyll automatically for branch deployments. **Do not add a `.nojekyll` file**: that would prevent Jekyll from processing your blog.

## Write a new post

1. Add a file in `_posts` named `YYYY-MM-DD-short-title.md`.
2. Begin with this front matter:

```yaml
---
layout: post
title: "Your article title"
date: 2026-11-12
category: Maps & Data
description: "One-sentence summary for the journal page."
---
```

3. Write the rest in Markdown and commit the file. GitHub Pages will generate the article and list it on `/journal/` automatically.
4. Edit or delete `_posts/2026-11-11-welcome-to-the-journal.md` before sharing publicly: it is sample content.

## Local preview

Jekyll requires Ruby. If Jekyll is installed, run `bundle exec jekyll serve` (requires a Gemfile and dependencies) or `jekyll serve` if Jekyll is available globally, then visit `http://localhost:4000/`. **Opening `index.html` directly will not render Liquid/Jekyll templates.**

## Before sharing

- Replace placeholder contact information with your actual public contact links.
- Replace illustrative project art with permitted, original maps, figures and sketches.
- Add individual project case studies and link them from project cards.
- Check all research descriptions for accuracy and permissions.
- If using a project repository such as `portfolio` instead of `YOURUSERNAME.github.io`, set `baseurl: "/portfolio"` in `_config.yml`.
