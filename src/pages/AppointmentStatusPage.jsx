import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import './AppointmentStatusPage.css'

export default function AppointmentStatusPage({ type = 'showed' }) {
  const isShowed = type === 'showed'

  const content = isShowed
    ? {
        title: 'Status Registrado: Compareceu',
        badge: 'Compareceu (Showed)',
        badgeClass: 'status-badge--success',
        icon: (
          <svg className="status-card__icon status-card__icon--success" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
        description:
          'O comparecimento do lead foi registrado no sistema com sucesso. O fluxo automático pós-visita e acompanhamento de matrícula já foi iniciado.',
        detailLabel: 'Ação executada',
        detailValue: 'Gatilho de comparecimento ativado',
        path: '/appt-showed',
      }
    : {
        title: 'Status Registrado: Não Compareceu',
        badge: 'Falta (No-Show)',
        badgeClass: 'status-badge--warning',
        icon: (
          <svg className="status-card__icon status-card__icon--warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        ),
        description:
          'A falta (no-show) do lead foi registrada no sistema com sucesso. A sequência de automação para reagendamento de visita foi acionada.',
        detailLabel: 'Ação executada',
        detailValue: 'Gatilho de reagendamento automático enviado',
        path: '/appt-no-show',
      }

  return (
    <>
      <Seo title={content.title} description={content.description} path={content.path} />
      <section className="status-page">
        <div className="container status-page__container">
          <div className="status-card">
            <div className="status-card__header">
              <div className="status-card__icon-wrapper">{content.icon}</div>
              <span className={`status-badge ${content.badgeClass}`}>{content.badge}</span>
            </div>

            <h1 className="status-card__title">{content.title}</h1>
            <p className="status-card__description">{content.description}</p>

            <div className="status-card__meta">
              <div className="status-card__meta-item">
                <span className="status-card__meta-label">Status no CRM:</span>
                <span className="status-card__meta-value">Atualizado</span>
              </div>
              <div className="status-card__meta-item">
                <span className="status-card__meta-label">{content.detailLabel}:</span>
                <span className="status-card__meta-value">{content.detailValue}</span>
              </div>
            </div>

            <div className="status-card__actions">
              <Link to="/" className="btn btn-primary">
                Voltar ao Site Principal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
