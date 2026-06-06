import { useState } from 'react'
import { company } from '@utils/constants'
import './ConsultCTA.css'

export default function ConsultCTA() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="consult" id="consult">
      <div className="container consult__grid">
        <div className="consult__info">
          <span className="eyebrow">Find Us</span>
          <h2 className="section-title">Ready to take the first step?</h2>
          <p className="section-subtitle">
            Contact us for a personalized consultation and see how we can tailor a program just for
            you.
          </p>

          <ul className="consult__details">
            <li>
              <span className="consult__label">Address</span>
              {company.address}
            </li>
            <li>
              <span className="consult__label">Phone</span>
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <span className="consult__label">Email</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
          </ul>
        </div>

        <div className="consult__form-wrap">
          {sent ? (
            <div className="consult__success" role="status">
              <h3>Thank you!</h3>
              <p>We received your info and will reach out shortly to schedule your consultation.</p>
            </div>
          ) : (
            <form className="consult__form" onSubmit={onSubmit}>
              <h3 className="consult__form-title">Enter your Contact Info</h3>
              <label className="consult__field">
                <span className="visually-hidden">Full name</span>
                <input className="form-input" type="text" placeholder="Full name" required />
              </label>
              <label className="consult__field">
                <span className="visually-hidden">Email</span>
                <input className="form-input" type="email" placeholder="Email" required />
              </label>
              <label className="consult__field">
                <span className="visually-hidden">Phone</span>
                <input className="form-input" type="tel" placeholder="Phone" required />
              </label>
              <label className="consult__field">
                <span className="visually-hidden">Message</span>
                <textarea
                  className="form-input"
                  rows="3"
                  placeholder="Tell us about your goals (optional)"
                />
              </label>
              <button type="submit" className="btn btn-primary consult__submit">
                Get Started
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
