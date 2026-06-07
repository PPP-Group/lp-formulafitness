import { useState, useEffect, useCallback, useRef } from 'react'
import SectionTitle from '@components/ui/SectionTitle'
import './QuoteCarousel.css'

const AUTOPLAY_MS = 6000

// Carrossel genérico de citações/depoimentos (um por vez). Setas, dots, swipe e autoplay.
export default function QuoteCarousel({ items, title, eyebrow, autoplay = true }) {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  const goTo = useCallback((i) => setIndex((i + items.length) % items.length), [items.length])

  useEffect(() => {
    if (!autoplay) return undefined
    timer.current = setInterval(() => setIndex((i) => (i + 1) % items.length), AUTOPLAY_MS)
    return () => clearInterval(timer.current)
  }, [autoplay, items.length])

  const pause = () => clearInterval(timer.current)

  const touchX = useRef(null)
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) goTo(index + (dx < 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <section className="section quote-carousel" onMouseEnter={pause}>
      <div className="container">
        {title && <SectionTitle eyebrow={eyebrow} title={title} align="center" />}

        <div
          className="quote-carousel__viewport"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
        >
          <div className="quote-carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((item, i) => (
              <figure className="quote-carousel__slide" key={item.id || i}>
                <blockquote className="quote-carousel__text">“{item.text}”</blockquote>
                <figcaption className="quote-carousel__author">
                  <span className="quote-carousel__name">{item.name}</span>
                  {item.meta && <span className="quote-carousel__meta">{item.meta}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="quote-carousel__controls">
          <button
            type="button"
            className="quote-carousel__arrow"
            aria-label="Previous"
            onClick={() => goTo(index - 1)}
          >
            ‹
          </button>
          <div className="quote-carousel__dots" role="tablist">
            {items.map((item, i) => (
              <button
                key={item.id || i}
                type="button"
                className={`quote-carousel__dot ${i === index ? 'is-active' : ''}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === index}
                role="tab"
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="quote-carousel__arrow"
            aria-label="Next"
            onClick={() => goTo(index + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
