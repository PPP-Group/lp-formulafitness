import { Link } from 'react-router-dom'
import './InBody.css'

const features = [
  'Cellular hydration & water balance',
  'Segmental muscle and lean mass',
  'Body fat & visceral fat levels',
]

export default function InBody() {
  return (
    <section className="section inbody">
      <div className="container grid-2 inbody__grid">
        <div className="inbody__media">
          <div className="inbody__device">
            <span className="inbody__device-label">InBody 580</span>
          </div>
        </div>

        <div className="inbody__content">
          <span className="eyebrow">The Gold Standard in Accuracy</span>
          <h2 className="section-title">Meet the InBody 580 — Your Health, Quantified</h2>
          <p className="section-subtitle">
            Clinically validated and trusted by elite gyms, the InBody 580 at Formula Fitness
            delivers a full-body audit in under a minute.
          </p>

          <ul className="inbody__features">
            {features.map((f) => (
              <li key={f}>
                <Check />
                {f}
              </li>
            ))}
          </ul>

          <p className="section-subtitle">
            Armed with these insights, our coaches craft a data-driven plan so you can track every
            gain, make smarter decisions, and transform faster — no guesswork, just measurable
            results.
          </p>

          <Link to="/inbody" className="btn btn-outline inbody__cta">
            Learn More about InBody Analysis
          </Link>
        </div>
      </div>
    </section>
  )
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
