import { useState, useEffect, useRef, useCallback } from 'react'
import SectionTitle from '@components/ui/SectionTitle'
import { reviews, YELP_URL } from '@data/reviews'
import './Reviews.css'

const AUTOPLAY_MS = 5000

/* ── Star Icon ───────────────────────────────────────────────────────── */
function StarIcon({ filled }) {
  return (
    <svg
      className={`rc-star ${filled ? 'rc-star--filled' : ''}`}
      width="15"
      height="15"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function StarRating({ stars }) {
  return (
    <div className="rc-stars" aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} filled={i < stars} />
      ))}
    </div>
  )
}

/* ── Yelp Badge ──────────────────────────────────────────────────────────── */
function YelpBadge() {
  return (
    <a
      href={YELP_URL}
      target="_blank"
      rel="noreferrer"
      className="rc-yelp"
      aria-label="View on Yelp"
    >
      <img src="/yelp-burst.png" alt="Yelp" width="28" height="28" style={{ display: 'block', flexShrink: 0 }} />
    </a>
  )
}

/* ── Avatar ──────────────────────────────────────────────────────────── */
function Avatar({ name }) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  const hue = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
  return (
    <div
      className="rc-avatar"
      style={{ background: `hsl(${hue}, 55%, 40%)` }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

/* ── Read-more text ──────────────────────────────────────────────────── */
const MAX_CHARS = 240

function ReviewText({ text }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = text.length > MAX_CHARS
  const shown = isLong && !expanded ? text.slice(0, MAX_CHARS) + '…' : text

  return (
    <>
      <p className="rc-text">{shown}</p>
      {isLong && (
        <button
          type="button"
          className="rc-read-more"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </>
  )
}

/* ── Single Card ─────────────────────────────────────────────────────── */
function ReviewCard({ review, position }) {
  // position: -1 = left, 0 = center, 1 = right, ±2 = hidden
  const abs = Math.abs(position)

  return (
    <article
      className="rc-card"
      data-pos={position}
      aria-hidden={abs > 1}
      style={{
        '--pos': position,
        '--abs': abs,
        zIndex: abs === 0 ? 10 : abs === 1 ? 5 : 0,
      }}
    >
      <header className="rc-header">
        <Avatar name={review.name} />
        <div className="rc-meta">
          <span className="rc-name">{review.name}</span>
          {review.location && <span className="rc-location">{review.location}</span>}
        </div>
        <YelpBadge />
      </header>

      <div className="rc-rating-row">
        <StarRating stars={review.stars} />
        <span className="rc-date">{review.date}</span>
      </div>

      <ReviewText text={review.text} />
    </article>
  )
}

/* ── Arrow Button ────────────────────────────────────────────────────── */
function Arrow({ dir, onClick, label }) {
  return (
    <button type="button" className={`reviews__arrow reviews__arrow--${dir}`} onClick={onClick} aria-label={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'prev'
          ? <path d="M15 18l-6-6 6-6" />
          : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  )
}

/* ── Section ─────────────────────────────────────────────────────────── */
export default function Reviews() {
  const [index, setIndex] = useState(0)
  const total = reviews.length
  const timer = useRef(null)

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + total) % total),
    [total],
  )

  // Autoplay — pausa no hover
  const startAuto = useCallback(() => {
    clearInterval(timer.current)
    timer.current = setInterval(() => go(1), AUTOPLAY_MS)
  }, [go])

  useEffect(() => {
    startAuto()
    return () => clearInterval(timer.current)
  }, [startAuto])

  // Touch swipe
  const touchX = useRef(null)
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
    touchX.current = null
  }

  return (
    <section className="section reviews">
      <div className="container">
        <SectionTitle eyebrow="Testimonials" title="What our Clients Are Saying" align="center" />

        {/* Summary bar */}
        <div className="reviews__summary">
          <div className="reviews__summary-stars">
            {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} filled />)}
          </div>
          <span className="reviews__summary-score">5.0</span>
          <span className="reviews__summary-sep">·</span>
          <span className="reviews__summary-count">61+ reviews on</span>
          
          <a
            href={YELP_URL}
            target="_blank"
            rel="noreferrer"
            className="reviews__yelp-logo-btn"
            aria-label="View Formula Fitness reviews on Yelp"
          >
            <img
              src="https://s3-media0.fl.yelpcdn.com/assets/public/logo_desktop.yji-90cbc4e26897b2a6.svg"
              alt="Yelp"
              className="reviews__yelp-logo-img"
              width="65"
              height="32"
            />
          </a>
        </div>

        {/* 3-D Carousel */}
        <div
          className="reviews__stage"
          onMouseEnter={() => clearInterval(timer.current)}
          onMouseLeave={startAuto}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          {reviews.map((review, i) => {
            // Calcula posição relativa ao índice ativo, limitada a ±2
            let pos = i - index
            if (pos > total / 2) pos -= total
            if (pos < -total / 2) pos += total
            if (Math.abs(pos) > 2) return null
            return <ReviewCard key={review.id} review={review} position={pos} />
          })}
        </div>

        {/* Controles */}
        <div className="reviews__controls">
          <Arrow dir="prev" onClick={() => go(-1)} label="Previous review" />

          <div className="reviews__dots" role="tablist">
            {reviews.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`reviews__dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Review ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <Arrow dir="next" onClick={() => go(1)} label="Next review" />
        </div>
      </div>
    </section>
  )
}
