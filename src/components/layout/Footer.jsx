import { Link } from 'react-router-dom'
import { company, assets } from '@utils/constants'
import './Footer.css'

const informationLinks = [
  { label: 'Private Personal Training', path: '/personal-training' },
  { label: 'Semi-Private Personal Training', path: '/semi-private-personal-training' },
  { label: 'Recovery Services', path: '/recovery-service' },
  { label: 'FAQs', path: '/faq' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" aria-label="Formula Fitness — Home">
            <img src={assets.logo} alt="Formula Fitness" width="170" height="44" />
          </Link>
          <div className="footer__social">
            <a href={company.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
              <FacebookIcon />
            </a>
            <a
              href={company.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Latest News</h4>
          <ul>
            <li>
              <Link to="/blogs/best-pricing-for-personaltraining">
                What You Can Expect at Formula Fitness
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Information</h4>
          <ul>
            {informationLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li className="footer__soon">coming soon 1/25/2026</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <a href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>{company.address}</li>
            {company.hours.map((h) => (
              <li key={h.days}>
                <span className="footer__days">{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <p>Copyrights {year} &copy; Formula Fitness</p>
          <div className="footer__legal">
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}
