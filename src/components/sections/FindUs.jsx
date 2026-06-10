import { company } from '@utils/constants'
import './FindUs.css'

export default function FindUs() {
  return (
    <section className="section find-us">
      <div className="container">
        <span className="eyebrow">Location</span>
        <h2 className="section-title find-us__title">Find Us</h2>

        <div className="find-us__grid">
          {/* Mapa */}
          <div className="find-us__map">
            <iframe
              src={company.mapEmbed}
              title="Formula Fitness location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Painel de informações */}
          <div className="find-us__info">
            <h3 className="find-us__name">{company.name}</h3>

            <ul className="find-us__details">
              <li className="find-us__detail-item">
                <span className="find-us__icon" aria-hidden="true"><LocationIcon /></span>
                <a href={company.mapLink} target="_blank" rel="noreferrer">
                  {company.address}
                </a>
              </li>
              <li className="find-us__detail-item">
                <span className="find-us__icon" aria-hidden="true"><PhoneIcon /></span>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li className="find-us__detail-item">
                <span className="find-us__icon" aria-hidden="true"><EmailIcon /></span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>

            <div className="find-us__hours-block">
              <p className="find-us__hours-label">Hours</p>
              <table className="find-us__hours-table">
                <tbody>
                  {company.hours.map((h) => (
                    <tr key={h.days}>
                      <td className="find-us__hours-days">{h.days}</td>
                      <td className="find-us__hours-time">{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="find-us__service-area">{company.serviceArea}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Icons ──────────────────────────────────────────────────────────────── */

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
