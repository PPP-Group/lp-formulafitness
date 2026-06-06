import { useState, useEffect, useCallback, useRef } from 'react'
import SectionTitle from '@components/ui/SectionTitle'
import { reviews } from '@data/reviews'
import './Reviews.css'

const AUTOPLAY_MS = 5000

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  const goTo = useCallback((i) => setIndex((i + reviews.length) % reviews.length), [])
  const next = useCallback(() => goTo(index + 1), [goTo, index])

  // Auto-play
  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % reviews.length), AUTOPLAY_MS)
    return () => clearInterval(timer.current)
  }, [])

  const pause = () => clearInterval(timer.current)

  // Swipe (touch)
  const touchX = useRef(null)
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) goTo(index + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <section className="section section--alt reviews" onMouseEnter={pause}>
      <div className="container">
        <SectionTitle eyebrow="Testimonials" title="What our Clients Are Saying" align="center" />

        <div
          className="reviews__viewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
        >
          <div
            className="reviews__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {reviews.map((review) => (
              <figure className="reviews__slide" key={review.id}>
                <blockquote className="reviews__text">“{review.text}”</blockquote>
                <figcaption className="reviews__author">
                  <span className="reviews__name">{review.name}</span>
                  <span className="reviews__meta">{review.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="reviews__controls">
          <button
            type="button"
            className="reviews__arrow"
            aria-label="Previous review"
            onClick={() => goTo(index - 1)}
          >
            ‹
          </button>
          <div className="reviews__dots" role="tablist">
            {reviews.map((review, i) => (
              <button
                key={review.id}
                type="button"
                className={`reviews__dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Go to review ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="reviews__arrow"
            aria-label="Next review"
            onClick={next}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
