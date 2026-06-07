import LeadForm from './LeadForm'
import { company } from '@utils/constants'
import './FindUs.css'

// "Find Us" — contato + formulário de captação + mapa.
export default function FindUs() {
  return (
    <section className="section find-us">
      <div className="container">
        <span className="eyebrow">Find Us</span>
        <h2 className="section-title find-us__title">Find Us</h2>

        <div className="find-us__grid">
          <div className="find-us__info">
            <ul className="find-us__details">
              <li>
                <span className="find-us__label">Address</span>
                <a href={company.mapLink} target="_blank" rel="noreferrer">
                  {company.address}
                </a>
              </li>
              <li>
                <span className="find-us__label">Phone</span>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <span className="find-us__label">Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              {company.hours.map((h) => (
                <li key={h.days}>
                  <span className="find-us__label">{h.days}</span>
                  {h.time}
                </li>
              ))}
            </ul>
            <div className="find-us__map">
              <iframe
                src={company.mapEmbed}
                title="Formula Fitness location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  )
}
