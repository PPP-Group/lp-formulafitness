import { useState } from 'react'
import './LeadForm.css'

// Formulário de captação "Enter your Contact Info" / "get started".
// Visual-only por enquanto: não envia dados (apenas confirma na tela).
export default function LeadForm({
  title = 'Enter your Contact Info',
  buttonLabel = 'get started',
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
        <h3>Thank you!</h3>
        <p>We received your info and will reach out shortly to schedule your consultation.</p>
      </div>
    )
  }

  return (
    <form className={`lead-form ${compact ? 'lead-form--compact' : ''}`} onSubmit={onSubmit}>
      {title && <h3 className="lead-form__title">{title}</h3>}
      <div className="lead-form__field">
        <label className="visually-hidden" htmlFor="lf-name">Full name</label>
        <input id="lf-name" className="form-input" type="text" placeholder="Full Name" required />
      </div>
      <div className="lead-form__field">
        <label className="visually-hidden" htmlFor="lf-email">Email</label>
        <input id="lf-email" className="form-input" type="email" placeholder="Email" required />
      </div>
      <div className="lead-form__field">
        <label className="visually-hidden" htmlFor="lf-phone">Phone</label>
        <input id="lf-phone" className="form-input" type="tel" placeholder="Phone Number" required />
      </div>
      {!compact && (
        <div className="lead-form__field">
          <label className="visually-hidden" htmlFor="lf-msg">Message</label>
          <textarea
            id="lf-msg"
            className="form-input"
            rows="3"
            placeholder="Tell us about your goals (optional)"
          />
        </div>
      )}
      <button type="submit" className="btn btn-primary lead-form__submit">
        {buttonLabel}
      </button>
    </form>
  )
}
