import { Link } from 'react-router-dom'
import './ActiveAging.css'

export default function ActiveAging() {
  return (
    <section className="section active-aging">
      <div className="container grid-2 active-aging__grid">
        <div className="active-aging__content">
          <span className="eyebrow">Active Aging Program</span>
          <h2 className="section-title">Your Gateway to Active Aging</h2>
          <p className="section-subtitle">
            Our commitment to exceptional customer service means we&apos;re with you every step of
            the way, making your fitness journey understandable and achievable. We&apos;re not just a
            gym; we&apos;re a community that stands by your side.
          </p>
          <Link to="/active-aging" className="btn btn-outline active-aging__cta">
            Learn More about Active Aging Program
          </Link>
        </div>

        <div className="active-aging__media">
          <div className="active-aging__panel" />
        </div>
      </div>
    </section>
  )
}
