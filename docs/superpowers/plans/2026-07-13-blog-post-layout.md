# Blog Post Page Layout Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the centered single-column article body on `/blogs/:slug` with a two-column layout (article left-aligned with the hero image, sidebar of related-article + testimonial cards on the right) on desktop, collapsing to a single stacked column on mobile.

**Architecture:** Pure presentational change confined to `src/pages/BlogPost.jsx` and `src/pages/BlogPost.css`. No new data files, no new global components, no routing changes. Related posts and sidebar testimonials are derived inline from the existing `@data/blog` and `@data/testimonials` exports with plain array methods.

**Tech Stack:** React (function components), plain CSS (no CSS-in-JS, no Tailwind), Vite build.

## Global Constraints

- No test runner exists in this project (`package.json` has no `test` script and no Jest/Vitest/Testing Library dependency). Verification is: `npm run build` (must succeed), `npm run lint` (must succeed), and a manual visual check via `npm run dev`.
- Sidebar must NOT be sticky — it scrolls normally with the page (confirmed with user).
- Mobile order: article body first, then sidebar (related articles, then testimonials) — no CSS `order` override needed since this is already the DOM order.
- Related articles: `posts.filter(p => p.slug !== post.slug).slice(0, 3)` — deterministic, no randomness or popularity ranking.
- Sidebar testimonials: `shortTestimonials.slice(0, 2)` from `@data/testimonials` — render the `text`/`name` fields verbatim, do not reword them (this data is sourced/verbatim content per this codebase's existing convention).
- Two-column breakpoint: `1024px`, matching the convention already used by `.grid-3` in `src/styles/global.css`.
- Follow the existing code style in this file: plain `<section>`/`<div>` markup with BEM-ish `post__*` class names, no CSS modules, no styled-components.

Full context: `docs/superpowers/specs/2026-07-13-blog-post-layout-design.md`

---

### Task 1: Two-column layout for the blog post page

**Files:**
- Modify: `src/pages/BlogPost.jsx` (full rewrite, 58 lines → ~95 lines)
- Modify: `src/pages/BlogPost.css` (full rewrite, 80 lines → ~150 lines)

**Interfaces:**
- Consumes: `getPost(slug)` and `posts` from `@data/blog` (existing exports — `posts` is an array of `{ slug, title, date, author, image, excerpt, content }`); `shortTestimonials` from `@data/testimonials` (existing export — array of `{ id, name, text }`).
- Produces: no new exports consumed elsewhere — `BlogPost` stays the default export of this file, rendered by the router at `/blogs/:slug` exactly as before.

- [ ] **Step 1: Replace `src/pages/BlogPost.jsx` in full**

Current file imports `getPost` only from `@data/blog`. The new version also
imports `posts` from the same module and `shortTestimonials` from
`@data/testimonials`, adds two small local card components, and replaces the
single `.post__body` wrapper with a `.post__layout` grid containing
`.post__main` (unchanged article content) and `.post__sidebar` (new).

Replace the entire contents of `src/pages/BlogPost.jsx` with:

```jsx
import { useParams, Link, Navigate } from 'react-router-dom'
import ConsultLink from '@components/ui/ConsultLink'
import Seo from '@components/ui/Seo'
import ConsultCTA from '@components/sections/ConsultCTA'
import { getPost, posts } from '@data/blog'
import { shortTestimonials } from '@data/testimonials'
import './BlogPost.css'

function RelatedPostCard({ post }) {
  return (
    <li className="post__related-card">
      <Link to={`/blogs/${post.slug}`} className="post__related-media">
        <img src={post.image} alt={post.title} loading="lazy" />
      </Link>
      <div className="post__related-body">
        <span className="post__related-date">{post.date}</span>
        <h3 className="post__related-title">
          <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
        </h3>
      </div>
    </li>
  )
}

function MiniTestimonialCard({ item }) {
  return (
    <li className="post__mini-testimonial">
      <p className="post__mini-testimonial-quote">“{item.text}”</p>
      <span className="post__mini-testimonial-name">{item.name}</span>
    </li>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <Navigate to="/blogs" replace />

  const relatedPosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3)
  const sidebarTestimonials = shortTestimonials.slice(0, 2)

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={`/blogs/${post.slug}`} />
      <article className="post">
        <header className="post__header">
          <div className="container">
            <Link to="/blogs" className="btn-link post__back">
              ‹ Back to Blogs
            </Link>
            <span className="post__date">{post.date}</span>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__byline">by {post.author}</p>
          </div>
        </header>

        <div className="container post__hero">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="container post__layout">
          <div className="post__main">
            {post.content.map((block, i) => {
              if (block.h) return <h2 key={i}>{block.h}</h2>
              if (block.list) {
                return (
                  <ul className="post__list" key={i}>
                    {block.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return <p key={i}>{block.p}</p>
            })}
            <div className="post__cta">
              <ConsultLink className="btn btn-primary">
                Book a Consultation
              </ConsultLink>
            </div>
          </div>

          <aside className="post__sidebar">
            {relatedPosts.length > 0 && (
              <section className="post__sidebar-section">
                <h2 className="post__sidebar-title">More Articles</h2>
                <ul className="post__related-list">
                  {relatedPosts.map((p) => (
                    <RelatedPostCard post={p} key={p.slug} />
                  ))}
                </ul>
              </section>
            )}

            {sidebarTestimonials.length > 0 && (
              <section className="post__sidebar-section">
                <h2 className="post__sidebar-title">What Members Say</h2>
                <ul className="post__mini-testimonial-list">
                  {sidebarTestimonials.map((t) => (
                    <MiniTestimonialCard item={t} key={t.id} />
                  ))}
                </ul>
              </section>
            )}
          </aside>
        </div>
      </article>
      <ConsultCTA />
    </>
  )
}
```

Note what did **not** change from the current file: the `Seo` call, the
`post__header` block, the `post__hero` block, and the block-rendering logic
for `post.content` (`h` / `list` / `p`) inside `.post__main` — only the
wrapper `className` moved from `container post__body` to `post__main`
(nested one level deeper inside the new `container post__layout`).

- [ ] **Step 2: Replace `src/pages/BlogPost.css` in full**

Replace the entire contents of `src/pages/BlogPost.css` with:

```css
.post__header {
  padding: calc(var(--header-height) + var(--space-2xl)) 0 var(--space-xl);
  background: var(--color-bg-secondary);
  border-bottom: 1px solid var(--color-border);
}
.post__back {
  margin-bottom: var(--space-md);
}
.post__date {
  display: block;
  font-size: var(--text-overline);
  letter-spacing: var(--text-overline-ls);
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-sm);
}
.post__title {
  font-size: var(--text-h1);
  line-height: var(--text-h1-lh);
  max-width: 24ch;
}
.post__byline {
  color: var(--color-text-secondary);
  margin-top: var(--space-sm);
}

.post__hero {
  margin-top: var(--space-2xl);
}
.post__hero img {
  width: 100%;
  max-height: 460px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}

/* ── Two-column layout: article (left) + sidebar (right) ─────────────── */
.post__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
  padding-top: var(--space-2xl);
  padding-bottom: var(--section-padding-y);
}

.post__main {
  max-width: 720px;
  min-width: 0;
}
.post__main h2 {
  font-size: var(--text-h3);
  color: var(--color-brand);
  margin: var(--space-xl) 0 var(--space-sm);
}
.post__main p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-lg);
}
.post__list {
  list-style: none;
  margin: 0 0 var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}
.post__list li {
  position: relative;
  padding-left: var(--space-lg);
  color: var(--color-text-secondary);
  line-height: 1.8;
}
.post__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-brand);
}

.post__cta {
  margin-top: var(--space-xl);
}

/* ── Sidebar ───────────────────────────────────────────────────────────── */
.post__sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  min-width: 0;
}
.post__sidebar-section {
  display: flex;
  flex-direction: column;
}
.post__sidebar-title {
  font-size: var(--text-h4);
  margin-bottom: var(--space-md);
}

/* Related article cards */
.post__related-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
.post__related-card {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: var(--space-md);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition:
    border-color 0.25s var(--ease-standard),
    box-shadow 0.25s var(--ease-standard);
}
.post__related-card:hover {
  border-color: var(--color-brand);
  box-shadow: var(--shadow-card);
}
.post__related-media {
  display: block;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}
.post__related-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.post__related-body {
  padding: var(--space-sm) var(--space-sm) var(--space-sm) 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  min-width: 0;
}
.post__related-date {
  font-size: var(--text-overline);
  letter-spacing: var(--text-overline-ls);
  text-transform: uppercase;
  color: var(--color-text-muted);
}
.post__related-title {
  font-size: var(--text-small);
  font-weight: var(--font-semibold);
  line-height: 1.35;
}
.post__related-title a:hover {
  color: var(--color-brand);
}

/* Mini testimonial cards */
.post__mini-testimonial-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
.post__mini-testimonial {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-md);
}
.post__mini-testimonial-quote {
  color: var(--color-text-secondary);
  font-size: var(--text-small);
  line-height: var(--text-body-lh);
  font-style: italic;
}
.post__mini-testimonial-name {
  display: block;
  margin-top: var(--space-sm);
  font-weight: var(--font-semibold);
  font-size: var(--text-small);
  color: var(--color-text-primary);
}

@media (min-width: 1024px) {
  .post__layout {
    grid-template-columns: 2fr 1fr;
    align-items: start;
  }
}
```

Note what did **not** change: `.post__header`, `.post__back`, `.post__date`,
`.post__title`, `.post__byline`, `.post__hero`/`.post__hero img`, `.post__list`
and its `li`/`::before` rules, and `.post__cta` — all copied verbatim from the
current file, just re-declared in the same relative position. The rules that
changed are: `.post__body` → split into `.post__layout` (the grid) and
`.post__main` (the constrained-width article column) — `.post__main h2` /
`.post__main p` replace the old `.post__body h2` / `.post__body p` selectors
with identical property values. Everything from `/* ── Sidebar ── */` down is
new.

- [ ] **Step 3: Run the production build**

Run: `npm run build`
Expected: Build succeeds (`✓ built in <N>s`), no errors. This catches JSX
syntax errors, bad imports (e.g. a typo in `shortTestimonials`), and missing
CSS variable references would still build (CSS custom properties don't fail
the build even if misspelled) — so this step alone is not sufficient, see
Step 5.

- [ ] **Step 4: Run lint**

Run: `npm run lint`
Expected: No errors (warnings about existing unrelated files are fine, but
`src/pages/BlogPost.jsx` must report zero problems — in particular, no
`no-unused-vars` on `posts`/`shortTestimonials`/the two new components, and no
`react/jsx-key` violations on the two new `.map()` calls, which are already
handled by the `key={p.slug}` / `key={t.id}` props above).

- [ ] **Step 5: Manual visual check — desktop width**

Run: `npm run dev`, then open a blog post URL, e.g.
`http://localhost:5173/blogs/revitalize-your-fitness` (or whatever port Vite
prints — check the terminal output; it may be `3000`/`3001` if those are
already in use, matching this project's existing dev-server convention) at a
viewport ≥1024px wide.

Confirm all of the following:
- The article text's left edge lines up with the hero image's left edge
  above it (both flush with the page's left content margin) — this is the
  core bug from the spec and the main thing to verify.
- A sidebar appears to the right of the article with a "More Articles"
  heading followed by up to 3 compact cards (thumbnail + title + date), each
  linking to a different post.
- Below that, a "What Members Say" heading followed by 2 quote cards.
- Hovering a related-article card shows the brand-color border/shadow hover
  state (from `.post__related-card:hover`).
- No console errors in the browser devtools.

- [ ] **Step 6: Manual visual check — mobile width**

With the same dev server running, resize the browser (or use devtools
device toolbar) to a narrow viewport (e.g. 375px wide).

Confirm:
- Layout is a single column: header → hero image → article body → "More
  Articles" cards → "What Members Say" cards, in that order, top to bottom.
- No horizontal scrollbar / no content overflowing the viewport width.

- [ ] **Step 7: Stop the dev server and commit**

Stop the `npm run dev` process (Ctrl+C), then:

```bash
git add src/pages/BlogPost.jsx src/pages/BlogPost.css
git commit -m "feat: redesign blog post layout into article + sidebar columns"
```

---

## Plan Self-Review

**Spec coverage:**
- Two-column grid, article flush-left with hero image, `2fr 1fr` at 1024px, sidebar not sticky, mobile order (article then sidebar) — Task 1 Steps 1–2.
- Related posts (`posts.filter(...).slice(0, 3)`) and sidebar testimonials (`shortTestimonials.slice(0, 2)`) — Task 1 Step 1.
- `RelatedPostCard` / `MiniTestimonialCard` as local components, not new files — Task 1 Step 1.
- Verification (build, lint, visual desktop + mobile check) — Task 1 Steps 3–6.

No gaps found; the spec describes a single self-contained page change, so
one task is correctly scoped (no decomposition needed per the Scope Check).

**Placeholder scan:** No TBD/TODO markers; every step has complete, runnable
code or an exact command with expected output.

**Type/name consistency:** `relatedPosts` / `sidebarTestimonials` variable
names, `RelatedPostCard`/`MiniTestimonialCard` component names, and all
`post__*` CSS class names are used identically between the JSX (Step 1) and
CSS (Step 2) blocks above.
