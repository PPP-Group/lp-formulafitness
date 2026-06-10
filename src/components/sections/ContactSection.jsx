import LeadForm from './LeadForm'
import './ContactSection.css'

// Foto de treino em grupo (semi-private session)
const PHOTO = '/assets/uploads/2023/06/Formula-Fitness-GroupHIIT-4.jpg'

export default function ContactSection() {
  return (
    <section className="contact-section">
      {/* Foto de fundo / painel esquerdo */}
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

      {/* Formulário */}
      <div className="contact-section__form-panel">
        <LeadForm
          title="Enter your Contact Info"
          buttonLabel="Get Started"
        />
      </div>
    </section>
  )
}
