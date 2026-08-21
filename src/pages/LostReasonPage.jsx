import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import './AppointmentStatusPage.css' // Reutiliza os estilos refinados do card de status

const REASON_CONFIGS = {
  'no-response': {
    title: 'Perda Registrada: Sem Resposta',
    badge: 'Perda — Sem Resposta',
    description:
      'O status do lead foi atualizado para Perda (Sem Resposta). O sistema programou a régua de reativação periódica automática.',
    detailValue: 'Automação de reativação agendada',
    path: '/lost-no-response',
  },
  fit: {
    title: 'Perda Registrada: Fora de Perfil',
    badge: 'Perda — Perfil',
    description:
      'O status do lead foi atualizado no CRM como Fora de Perfil / Fit no momento. O registro foi armazenado para controle comercial.',
    detailValue: 'Motivo arquivado no CRM',
    path: '/lost-fit',
  },
  timing: {
    title: 'Perda Registrada: Timing / Momento',
    badge: 'Perda — Timing',
    description:
      'O status do lead foi atualizado para Perda por Momento Inadequado. O lead entrará no fluxo de nutrição de longo prazo.',
    detailValue: 'Adicionado à nutrição de longo prazo',
    path: '/lost-timing',
  },
  price: {
    title: 'Perda Registrada: Objeção de Preço',
    badge: 'Perda — Preço',
    description:
      'O status do lead foi atualizado para Perda por Preço/Orçamento. O lead receberá avisos sobre futuras condições e oportunidades especiais.',
    detailValue: 'Incluso em lista de ofertas especiais',
    path: '/lost-price',
  },
  'went-elsewhere': {
    title: 'Perda Registrada: Escolheu Outra Academia',
    badge: 'Perda — Outro Local',
    description:
      'O motivo de perda por preferência por outro estabelecimento foi arquivado com sucesso para estatísticas e melhorias contínuas.',
    detailValue: 'Dado registrado para análise',
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
                <svg className="status-card__icon status-card__icon--warning" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                <span className="status-card__meta-label">Status no CRM:</span>
                <span className="status-card__meta-value">Perda Registrada</span>
              </div>
              <div className="status-card__meta-item">
                <span className="status-card__meta-label">Ação de Automação:</span>
                <span className="status-card__meta-value">{config.detailValue}</span>
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
