import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import './AppointmentStatusPage.css'

const REASON_CONFIGS = {
  'no-response': {
    title: 'Status Updated: Lost (No Response)',
    badge: 'No Response',
    description:
      'The lead status has been successfully updated to Lost due to No Response.',
    statusText: 'Lost (No Response)',
    path: '/lost-no-response',
  },
  fit: {
    title: 'Status Updated: Lost (Not a Fit)',
    badge: 'Not a Fit',
    description:
      'The lead status has been successfully updated to Lost due to Fitness Fit.',
    statusText: 'Lost (Not a Fit)',
    path: '/lost-fit',
  },
  timing: {
    title: 'Status Updated: Lost (Timing)',
    badge: 'Timing',
    description:
      'The lead status has been successfully updated to Lost due to Timing.',
    statusText: 'Lost (Timing)',
    path: '/lost-timing',
  },
  price: {
    title: 'Status Updated: Lost (Price)',
    badge: 'Price',
    description:
      'The lead status has been successfully updated to Lost due to Price.',
    statusText: 'Lost (Price)',
    path: '/lost-price',
  },
  'went-elsewhere': {
    title: 'Status Updated: Lost (Chose Competitor)',
    badge: 'Chose Competitor',
    description:
      'The lead status has been successfully updated to Lost due to Chose Another Gym.',
    statusText: 'Lost (Chose Competitor)',
    path: '/lost-went-elsewhere',
  },
}

export default function LostReasonPage({ reason = 'no-response' }) {
  const config = REASON_CONFIGS[reason] || REASON_CONFIGS['no-response']

  return (
    <>
      <Seo title={config.title} description={config.description} path={config.path} />
      <section className="status-page">
        <div className="container status-page__container">
          <div className="status-card">
            <div className="status-card__header">
              <div className="status-card__icon-wrapper">
                <svg className="status-card__icon status-card__icon--warning" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
              <span className="status-badge status-badge--warning">{config.badge}</span>
            </div>

            <h1 className="status-card__title">{config.title}</h1>
            <p className="status-card__description">{config.description}</p>

            <div className="status-card__meta">
              <div className="status-card__meta-item">
                <span className="status-card__meta-label">CRM Status</span>
                <span className="status-card__meta-value">{config.statusText}</span>
              </div>
            </div>

            <div className="status-card__actions">
              <Link to="/" className="btn btn-primary">
                Return to Main Site
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
