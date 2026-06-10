import { useState } from 'react'
import './LeadForm.css'

const GOALS = [
  'Weight Loss',
  'Muscle Gain',
  'Improve Strength',
  'Improve Endurance',
  'General Fitness',
  'Injury Recovery',
  'Athletic Performance',
  'Other',
]

const SERVICES = [
  'Private Personal Training',
  'Semi-Private Personal Training',
  'Recovery Services',
  'Active Aging',
  'Youth Training',
  'InBody Assessment',
]

export default function LeadForm({
  title = 'Enter your Contact Info',
  buttonLabel = 'Get Started',
  compact = false,
}) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className={`lead-form lead-form--success ${compact ? 'lead-form--compact' : ''}`} role="status">
        <span className="lead-form__success-icon" aria-hidden="true">✓</span>
        <h3>Thank you!</h3>
        <p>We received your info and will reach out shortly to schedule your consultation.</p>
      </div>
    )
  }

  return (
    <form
      className={`lead-form ${compact ? 'lead-form--compact' : ''}`}
      onSubmit={onSubmit}
      noValidate
    >
      {title && <h3 className="lead-form__title">{title}</h3>}

      <div className="lead-form__row">
        <div className="lead-form__field">
          <label className="lead-form__label" htmlFor="lf-first-name">
            First Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="lf-first-name"
            className="form-input"
            type="text"
            placeholder="Enter your first name"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="lead-form__field">
          <label className="lead-form__label" htmlFor="lf-last-name">
            Last Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="lf-last-name"
            className="form-input"
            type="text"
            placeholder="Enter your last name"
            required
            autoComplete="family-name"
          />
        </div>
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-phone">
          Phone <span aria-hidden="true">*</span>
        </label>
        <input
          id="lf-phone"
          className="form-input"
          type="tel"
          placeholder="Phone"
          required
          autoComplete="tel"
        />
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="lf-email"
          className="form-input"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
        />
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-goals">
          Your Main Goals? <span aria-hidden="true">*</span>
        </label>
        <div className="lead-form__select-wrapper">
          <select id="lf-goals" className="form-input form-select" required defaultValue="">
            <option value="" disabled>Select</option>
            {GOALS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-service">
          Most Interested In? <span aria-hidden="true">*</span>
        </label>
        <div className="lead-form__select-wrapper">
          <select id="lf-service" className="form-input form-select" required defaultValue="">
            <option value="" disabled>Select</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-msg">
          Other Message
        </label>
        <textarea
          id="lf-msg"
          className="form-input"
          rows="4"
          placeholder="Any questions?"
        />
      </div>

      <button type="submit" id="lf-submit" className="btn btn-primary lead-form__submit">
        {buttonLabel}
      </button>
    </form>
  )
}
