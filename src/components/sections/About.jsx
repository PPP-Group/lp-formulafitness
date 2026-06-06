import Accordion from '@components/ui/Accordion'
import { philosophyPillars } from '@data/services'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container grid-2 about__grid">
        <div className="about__media">
          <div className="about__media-inner">
            <span className="eyebrow">Personal Training at Formula Fitness Explained</span>
            <p className="about__media-tag">Health is Wealth</p>
          </div>
        </div>

        <div className="about__content">
          <h2 className="section-title">
            Health is Wealth — Upgrade To A Stronger, Sustainable Body
          </h2>
          <p className="section-subtitle about__intro">
            Personal training at Formula Fitness goes beyond the workout. Here&apos;s what sets our
            approach apart.
          </p>
          <Accordion items={philosophyPillars} />
          <a href="#consult" className="btn btn-primary about__cta">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
