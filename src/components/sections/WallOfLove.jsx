import { useState, useCallback } from 'react'
import SectionTitle from '@components/ui/SectionTitle'
import VideoCard from '@components/ui/VideoCard'
import Modal from '@components/ui/Modal'
import { useScrollReveal } from '@hooks/useIntersectionObserver'
import './WallOfLove.css'

/* ── Estrelas (5, cheias) ─────────────────────────────────────────── */
function Stars() {
  return (
    <div className="wall-card__stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.85.62-5.18 4.55 1.55 6.7L12 17.27 5.88 20.73l1.55-6.7L2.25 8.88l6.85-.62L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function VerifiedBadge() {
  return (
    <span className="wall-card__verified">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Verified
    </span>
  )
}

function Avatar({ name, avatar }) {
  if (avatar) {
    return <img className="wall-card__avatar" src={avatar} alt={name} loading="lazy" />
  }
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
  const hue = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 360
  return (
    <span
      className="wall-card__avatar wall-card__avatar--initials"
      style={{ background: `hsl(${hue}, 45%, 42%)` }}
      aria-hidden="true"
    >
      {initials}
    </span>
  )
}

/* Wrapper com reveal por card (anima ao entrar no viewport). */
function RevealCard({ className = '', children }) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={`wall__card ${visible ? 'is-in' : ''} ${className}`}>
      {children}
    </div>
  )
}

function TextCard({ item }) {
  return (
    <RevealCard className={`wall__card--text ${item.featured ? 'wall__card--featured' : ''}`}>
      <div className="wall-card__head">
        <Stars />
        <VerifiedBadge />
      </div>
      <p className="wall-card__quote">{item.text}</p>
      <div className="wall-card__person">
        <Avatar name={item.name} avatar={item.avatar} />
        <span className="wall-card__name">{item.name}</span>
      </div>
    </RevealCard>
  )
}

function ResultCard({ item }) {
  return (
    <RevealCard className="wall__card--result">
      <figure className="wall-card__figure">
        <img src={item.image} alt={`${item.name}'s transformation`} loading="lazy" />
        <figcaption className="wall-card__result">
          <span className="wall-card__result-name">{item.name}</span>
          <span className="wall-card__result-text">{item.result}</span>
        </figcaption>
      </figure>
    </RevealCard>
  )
}

function VideoWallCard({ item, onPlay }) {
  return (
    <RevealCard className="wall__card--video">
      <VideoCard
        videoId={item.videoId}
        thumb={item.thumb}
        name={item.name}
        quote={item.quote}
        onPlay={onPlay}
      />
    </RevealCard>
  )
}

// Wall of Love — mural masonry misturando depoimentos em texto, vídeos e fotos
// de resultado. Conteúdo 100% real (composto pela página a partir de @data).
export default function WallOfLove({ items, eyebrow = 'Testimonials', title = 'What Our Members Say' }) {
  const [active, setActive] = useState(null)
  const openVideo = useCallback((videoId, name) => setActive({ videoId, name }), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <section className="section wall">
      <div className="container">
        <SectionTitle eyebrow={eyebrow} title={title} align="center" />

        <div className="wall__grid">
          {items.map((item) => {
            if (item.type === 'video') return <VideoWallCard key={item.id} item={item} onPlay={openVideo} />
            if (item.type === 'result') return <ResultCard key={item.id} item={item} />
            return <TextCard key={item.id} item={item} />
          })}
        </div>
      </div>

      <Modal open={!!active} onClose={close} label={active?.name}>
        {active && (
          <>
            <div className="modal__video">
              <iframe
                src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&rel=0`}
                title={active.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              className="video-fallback"
              href={`https://www.youtube.com/watch?v=${active.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              Trouble viewing? Watch on YouTube ↗
            </a>
          </>
        )}
      </Modal>
    </section>
  )
}
