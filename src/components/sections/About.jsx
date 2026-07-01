import { useState } from 'react'
import ConsultLink from '@components/ui/ConsultLink'
import Accordion from '@components/ui/Accordion'
import Modal from '@components/ui/Modal'
import { philosophyPillars } from '@data/services'
import { youtube, upload } from '@utils/constants'
import './About.css'

const poster = upload('2025/05/WhatsApp-Image-2025-05-01-at-12.59.31_4708977c.jpg')

export default function About() {
  const [open, setOpen] = useState(false)

  return (
    <section className="section about" id="about">
      <div className="container grid-2 about__grid">
        <div className="about__media">
          <img src={poster} alt="Personal Training at Formula Fitness Explained" loading="lazy" />
          <button
            type="button"
            className="about__play"
            onClick={() => setOpen(true)}
            aria-label="Play: Personal Training at Formula Fitness Explained"
          >
            <span className="about__play-icon" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
          <span className="about__media-caption">Personal Training at Formula Fitness Explained</span>
        </div>

        <div className="about__content">
          <span className="eyebrow">Personal Training at Formula Fitness Explained</span>
          <h2 className="section-title">
            Health is Wealth — Upgrade To A Stronger Sustainable Body
          </h2>
          <Accordion items={philosophyPillars} defaultOpen={-1} />
          <ConsultLink className="btn btn-primary about__cta">
            Get Started
          </ConsultLink>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} label="Personal Training at Formula Fitness Explained">
        <div className="modal__video">
          <iframe
            src={`https://www.youtube.com/embed/${youtube.main}?autoplay=1&rel=0`}
            title="Personal Training at Formula Fitness Explained"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <a
          className="video-fallback"
          href={`https://www.youtube.com/watch?v=${youtube.main}`}
          target="_blank"
          rel="noreferrer"
        >
          Trouble viewing? Watch on YouTube ↗
        </a>
      </Modal>
    </section>
  )
}
