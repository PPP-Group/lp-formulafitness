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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Ordem dos campos usada para focar o primeiro inválido no submit.
const FIELD_ORDER = ['firstName', 'lastName', 'phone', 'email', 'goals', 'service']
const FIELD_TO_ID = {
  firstName: 'lf-first-name',
  lastName: 'lf-last-name',
  phone: 'lf-phone',
  email: 'lf-email',
  goals: 'lf-goals',
  service: 'lf-service',
}

function validate(values) {
  const errors = {}
  if (!values.firstName) errors.firstName = 'Please enter your first name.'
  if (!values.lastName) errors.lastName = 'Please enter your last name.'

  const phoneDigits = values.phone.replace(/\D/g, '')
  if (!values.phone) errors.phone = 'Please enter your phone number.'
  else if (phoneDigits.length < 10) errors.phone = 'Please enter a valid phone number.'

  if (!values.email) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address.'

  if (!values.goals) errors.goals = 'Please select a goal.'
  if (!values.service) errors.service = 'Please select a service.'

  return errors
}

export default function LeadForm({
  title = 'Enter your Contact Info',
  buttonLabel = 'Get Started',
  compact = false,
}) {
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const values = {
      firstName: form['lf-first-name'].value.trim(),
      lastName: form['lf-last-name'].value.trim(),
      phone: form['lf-phone'].value.trim(),
      email: form['lf-email'].value.trim(),
      goals: form['lf-goals'].value,
      service: form['lf-service'].value,
    }

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = FIELD_ORDER.find((f) => nextErrors[f])
      form[FIELD_TO_ID[firstInvalid]]?.focus()
      return
    }

    // TODO: integrar com backend/CRM/e-mail (ver #2 da auditoria).
    setSent(true)
  }

  // Remove o erro do campo assim que o usuário começa a corrigi-lo.
  const clearError = (field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev
      const next = { ...prev }
      delete next[field]
      return next
    })
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

  const fieldProps = (field) => ({
    'aria-invalid': errors[field] ? 'true' : undefined,
    'aria-describedby': errors[field] ? `${FIELD_TO_ID[field]}-error` : undefined,
    className: `form-input ${errors[field] ? 'is-invalid' : ''}`,
    onChange: () => clearError(field),
  })

  const errorText = (field) =>
    errors[field] && (
      <p className="lead-form__error" id={`${FIELD_TO_ID[field]}-error`} role="alert">
        {errors[field]}
      </p>
    )

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
            type="text"
            placeholder="Enter your first name"
            required
            autoComplete="given-name"
            {...fieldProps('firstName')}
          />
          {errorText('firstName')}
        </div>
        <div className="lead-form__field">
          <label className="lead-form__label" htmlFor="lf-last-name">
            Last Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="lf-last-name"
            type="text"
            placeholder="Enter your last name"
            required
            autoComplete="family-name"
            {...fieldProps('lastName')}
          />
          {errorText('lastName')}
        </div>
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-phone">
          Phone <span aria-hidden="true">*</span>
        </label>
        <input
          id="lf-phone"
          type="tel"
          placeholder="Phone"
          required
          autoComplete="tel"
          {...fieldProps('phone')}
        />
        {errorText('phone')}
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="lf-email"
          type="email"
          placeholder="Email"
          required
          autoComplete="email"
          {...fieldProps('email')}
        />
        {errorText('email')}
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-goals">
          Your Main Goals? <span aria-hidden="true">*</span>
        </label>
        <div className="lead-form__select-wrapper">
          <select
            id="lf-goals"
            required
            defaultValue=""
            {...fieldProps('goals')}
            className={`form-input form-select ${errors.goals ? 'is-invalid' : ''}`}
          >
            <option value="" disabled>Select</option>
            {GOALS.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        {errorText('goals')}
      </div>

      <div className="lead-form__field">
        <label className="lead-form__label" htmlFor="lf-service">
          Most Interested In? <span aria-hidden="true">*</span>
        </label>
        <div className="lead-form__select-wrapper">
          <select
            id="lf-service"
            required
            defaultValue=""
            {...fieldProps('service')}
            className={`form-input form-select ${errors.service ? 'is-invalid' : ''}`}
          >
            <option value="" disabled>Select</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        {errorText('service')}
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
