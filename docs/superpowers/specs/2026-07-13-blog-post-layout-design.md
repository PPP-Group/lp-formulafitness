# Blog Post Page Layout Redesign

## Problem

`src/pages/BlogPost.jsx` renders the article body as a single centered column
(`.post__body { max-width: 760px }` nested inside `.container`, which itself
sets `margin: 0 auto`). The result: on wide screens the text column floats in
the middle of the page with large empty margins on both sides, and its left
edge does not line up with the left edge of the hero image above it (which
spans the full 1200px container).

## Goal

Redesign the article layout (desktop ≥1024px) into two columns sharing the
same 1200px container as the hero image:

- **Main column** (left): article text, left-aligned, its left edge flush
  with the hero image's left edge.
- **Sidebar column** (right): up to 3 "more articles" cards, followed by 2
  short testimonial cards to fill remaining space.

On mobile/tablet (<1024px) it collapses to a single column: header → hero
image → article body → sidebar content (related articles, then
testimonials), stacked in that order. The sidebar is not sticky — it scrolls
normally with the page at all breakpoints (confirmed with user).

## Non-goals

- No "most popular" / analytics-driven ranking for related articles.
- No sticky/scroll-follow behavior for the sidebar.
- No new global reusable component — this is a page-specific layout, so the
  markup and styles live directly in `BlogPost.jsx` / `BlogPost.css`,
  consistent with how other one-off page sections are built in this codebase
  (e.g. `Referrals.jsx`, `TrainingServices.jsx`).

## Layout structure

```
<article className="post">
  <header className="post__header">...</header>          (unchanged)
  <div className="container post__hero">...</div>          (unchanged)

  <div className="container post__layout">
    <div className="post__main">
      ...existing post__body content (h2/p/ul blocks + CTA)...
    </div>
    <aside className="post__sidebar">
      <section className="post__related">
        <h2>More Articles</h2>
        <RelatedPostCard /> x up to 3
      </section>
      <section className="post__sidebar-testimonials">
        <h2>What Members Say</h2>
        <MiniTestimonialCard /> x 2
      </section>
    </aside>
  </div>
</article>
```

`.post__layout` is a CSS grid: 1 column by default, `2fr 1fr` columns with
gap `var(--space-2xl)` from the `1024px` breakpoint up — matching the
breakpoint convention already used by `.grid-2`/`.grid-3` in
`src/styles/global.css`. Because `.post__main` is a normal grid item (no
`margin: 0 auto`), it stays flush against the container's left edge, aligning
with the hero image. A `max-width` (~720px) stays on the prose content itself
purely for readability (line length), not for centering.

`.post__sidebar` is a plain flex column (`gap`), not `position: sticky`, so it
scrolls with the rest of the page.

## Data selection

Both derived in `BlogPost.jsx` with plain array methods — no new data files:

- **Related articles**: `posts.filter(p => p.slug !== post.slug).slice(0, 3)`
  — first 3 remaining posts in their existing declared order (deterministic,
  no randomness, no "read more" tracking).
- **Testimonials**: `shortTestimonials.slice(0, 2)` from
  `@data/testimonials` — first 2 entries, unchanged/verbatim text (per this
  project's convention of treating `@data/*` content as sourced/verbatim,
  established in earlier work on this codebase).

With only 6 posts total today, 3 related + 2 testimonials is enough to
reasonably fill the sidebar next to a typical article's height without
overflowing awkwardly.

## Components

Two small presentational pieces, defined as local functions inside
`BlogPost.jsx` (same pattern as the existing `Icon`/helper functions elsewhere
in this codebase — no need for separate files since they're single-use):

- **`RelatedPostCard`**: compact vertical card — thumbnail image, title
  (linking to `/blogs/:slug`), date. A trimmed-down version of the existing
  `.blog-card` used on `/blogs`, not a copy-paste of the whole card (no
  excerpt/"Read More" link needed at this smaller size).
- **`MiniTestimonialCard`**: quote text + name, no stars/avatar — simplest
  possible treatment, distinct from the full `WallOfLove` text card so it
  doesn't visually compete with the related-article cards above it.

## Responsive behavior

- `<1024px`: `.post__layout` is a single column. DOM order already places
  `.post__main` before `.post__sidebar`, so the article reads fully before
  the sidebar content appears — no extra CSS `order` needed.
- `≥1024px`: two columns as described above.

## Testing / verification

- `npm run build` must pass.
- Visual check (dev server) at a wide viewport: confirm the article's left
  edge lines up with the hero image's left edge, and the sidebar sits to the
  right with related-article + testimonial cards.
- Visual check at a narrow/mobile viewport: confirm single-column stacking
  and that the sidebar appears after the article body.
