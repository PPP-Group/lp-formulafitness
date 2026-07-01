import ConsultLink from '@components/ui/ConsultLink'
import './ContactSection.css'

const PHOTO = '/assets/uploads/2023/06/Formula-Fitness-GroupHIIT-4.jpg'

export default function ContactSection() {
  return (
    <section className="contact-section" id="consult">
      {/* Painel esquerdo — foto */}
      <div className="contact-section__photo" aria-hidden="true">
        <img
          src={PHOTO}
          alt="Formula Fitness semi-private training session"
          loading="lazy"
        />
        <div className="contact-section__photo-overlay">
          <div className="contact-section__badge">
            <span className="contact-section__badge-eyebrow">Start Today</span>
            <h2 className="contact-section__badge-title">
              Transform Your&nbsp;Body.<br />Transform Your&nbsp;Life.
            </h2>
          </div>
        </div>
      </div>

      {/* Painel direito — CTA de fundo sólido */}
      <div className="contact-section__cta-panel">
        <div className="contact-section__cta-inner">
          <span className="contact-section__cta-eyebrow">Get Started</span>
          <h3 className="contact-section__cta-title">Enter your Contact Info</h3>
          <p className="contact-section__cta-text">
            Contact us for a personalized consultation and see how we can tailor a program just for you.
          </p>
          <ConsultLink className="btn contact-section__cta-btn" variant="consult">
            Book a Consultation
          </ConsultLink>
        </div>
      </div>
    </section>
  )
}
