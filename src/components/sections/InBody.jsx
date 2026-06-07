import { Link } from 'react-router-dom'
import { upload } from '@utils/constants'
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
          <img src={upload('2023/06/Image-3.png')} alt="InBody 580 body composition analyzer" loading="lazy" />
        </div>

        <div className="inbody__content">
          <span className="eyebrow">the gold standard in accuracy</span>
          <h2 className="section-title">Meet the InBody 580 — Your Health, Quantified</h2>
          <p className="section-subtitle">
            Clinically validated and trusted by elite gyms, the InBody 580 at Formula Fitness
            delivers a full-body audit in under a minute. Go beyond the scale with precise readings
            of:
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
