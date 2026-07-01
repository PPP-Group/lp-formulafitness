import ConsultLink from '@components/ui/ConsultLink'
import SectionTitle from '@components/ui/SectionTitle'
import './StepsSection.css'

// "Three/Six Steps to Your Fitness Journey" — passos numerados + CTA opcional.
export default function StepsSection({ title, eyebrow, steps = [], cta, alt = false, ctaVariant = 'consult' }) {
  return (
    <section className={`section steps ${alt ? 'section--alt' : ''}`}>
      <div className="container">
        {title && <SectionTitle eyebrow={eyebrow} title={title} align="center" />}
        <ol className="steps__grid">
          {steps.map((step, i) => (
            <li className="step-card" key={step.title}>
              {step.icon
                ? <img src={step.icon} className="step-card__icon" alt="" aria-hidden="true" />
                : <span className="step-card__num">{String(i + 1).padStart(2, '0')}</span>
              }
              <h3 className="step-card__title">{step.title}</h3>
              <p className="step-card__body">{step.body}</p>
            </li>
          ))}
        </ol>
        {cta && (
          <div className="steps__cta">
            <ConsultLink className="btn btn-primary" variant={ctaVariant}>
              {cta}
            </ConsultLink>
          </div>
        )}
      </div>
    </section>
  )
}
