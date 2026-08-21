import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import ConsultLink from '@components/ui/ConsultLink'
import './ObjectionLandingPage.css'

const OBJECTION_DATA = {
  doubt: {
    title: 'Ainda com dúvidas se a Formula Fitness é para você?',
    eyebrow: 'Sua Saúde em Primeiras Mãos',
    subtitle:
      'É 100% normal ter receio antes de recomeçar. Aqui você nunca treina sozinho — nosso método conta com Personal Trainer acompanhando cada exercício para garantir resultados com segurança.',
    path: '/objection-doubt',
    pillars: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        ),
        title: 'Atendimento 100% Guiado',
        desc: 'Você não precisa saber montar treino ou usar os aparelhos. Nossos treinadores orientam você em cada repetição.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        title: 'Ambiente Acolhedor',
        desc: 'Sem julgamentos, sem lotação excessiva e sem som estrondoso. Um espaço pensado para pessoas reais buscarem saúde.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
        title: 'Evolução no Seu Ritmo',
        desc: 'Respeitamos seu histórico médico, dores e limitações para construir um progresso consistente e sem lesões.',
      },
    ],
    primaryCta: 'Agendar Aula Experimental Sem Compromisso',
    whatsappMessage: 'Olá! Estava navegando no site e gostaria de tirar algumas dúvidas sobre os treinos da Formula Fitness.',
  },
  price: {
    title: 'Atenção de Personal Trainer pelo Melhor Custo-Benefício',
    eyebrow: 'Investimento Inteligente em Saúde',
    subtitle:
      'Cansado de pagar mensalidade em academia tradicional e ficar largado no treino? Na Formula Fitness você investe na atenção presencial contínua de um treinador por uma fração do preço de um personal particular.',
    path: '/objection-price',
    pillars: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        title: 'Personal Trainer Incluso',
        desc: 'Economize centenas de reais por mês mantendo o acompanhamento próximo de um profissional qualificado.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
        title: 'Transparência e Flexibilidade',
        desc: 'Sem letras miúdas ou taxas surpresa. Planos claros desenvolvidos para se adequar às suas necessidades reais.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
        title: 'Condições Especiais',
        desc: 'Fale com nosso time de consultores para descobrir isenções e pacotes de entrada disponíveis hoje.',
      },
    ],
    primaryCta: 'Consultar Condições e Planos Especiais',
    whatsappMessage: 'Olá! Gostaria de conhecer os planos e condições especiais de matrícula da Formula Fitness.',
  },
  timing: {
    title: 'Pouco Tempo na Rotina? Treinos Eficientes em 45-50 Minutos',
    eyebrow: 'Eficiência que Cabe na Sua Agenda',
    subtitle:
      'Você não precisa morar na academia para ter resultados. Nossos treinos são projetados para entregar o máximo estímulo de saúde e força em sessões objetivas de 45 a 50 minutos.',
    path: '/objection-timing',
    pillars: [
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
        title: 'Sessões Otimizadas',
        desc: 'Chegue, treine com foco absoluto sob supervisão e retorne à sua rotina revigorado em menos de 1 hora.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
        title: '2x a 3x por Semana',
        desc: 'Constância viável. Não exigimos presença diária para que você atinja suas metas de saúde e disposição.',
      },
      {
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
        title: 'Horários Flexíveis',
        desc: 'Grade de horários variada desde cedo até à noite para se ajustar perfeitamente ao seu dia a dia.',
      },
    ],
    primaryCta: 'Encontrar o Melhor Horário para Mim',
    whatsappMessage: 'Olá! Tenho a rotina corrida e gostaria de saber os horários disponíveis para treino na Formula Fitness.',
  },
}

export default function ObjectionLandingPage({ type = 'doubt' }) {
  const data = OBJECTION_DATA[type] || OBJECTION_DATA['doubt']

  const encodedMessage = encodeURIComponent(data.whatsappMessage)
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5511999999999&text=${encodedMessage}`

  return (
    <>
      <Seo title={data.title} description={data.subtitle} path={data.path} />

      <section className="objection-hero">
        <div className="container objection-hero__container">
          <div className="objection-hero__badge">
            <span className="objection-hero__badge-dot" />
            {data.eyebrow}
          </div>

          <h1 className="objection-hero__title">{data.title}</h1>
          <p className="objection-hero__subtitle">{data.subtitle}</p>

          <div className="objection-hero__actions">
            <ConsultLink className="btn btn-primary btn-lg objection-hero__primary-btn">
              {data.primaryCta}
            </ConsultLink>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-lg objection-hero__wa-btn"
            >
              <svg className="objection-hero__wa-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="objection-pillars">
        <div className="container">
          <div className="objection-pillars__grid">
            {data.pillars.map((pillar, idx) => (
              <div className="objection-card" key={idx}>
                <div className="objection-card__icon">{pillar.icon}</div>
                <h3 className="objection-card__title">{pillar.title}</h3>
                <p className="objection-card__desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="objection-banner">
        <div className="container">
          <div className="objection-banner__box">
            <div className="objection-banner__content">
              <h2 className="objection-banner__title">Pronto para dar o primeiro passo pela sua saúde?</h2>
              <p className="objection-banner__text">
                Venha fazer um treino experimental gratuito e sentir na prática a diferença do acompanhamento próximo.
              </p>
            </div>
            <div className="objection-banner__actions">
              <ConsultLink className="btn btn-primary btn-lg">
                Agendar Minha Experiência
              </ConsultLink>
              <Link to="/prices" className="btn btn-outline">
                Ver Opções de Planos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
