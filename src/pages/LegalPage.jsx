import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import { company } from '@utils/constants'

// Página genérica para conteúdo legal (Terms of Service / Refund Policy).
export default function LegalPage({ title, path, intro, sections = [] }) {
  return (
    <>
      <Seo title={title} description={intro} path={path} />
      <PageHero eyebrow="Legal" title={title} description={intro} />
      <div className="section">
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
          {sections.map((s) => (
            <section className="content-block" key={s.heading} style={{ marginBottom: 'var(--space-2xl)' }}>
              <h2 className="content-block__heading">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p className="content-block__text" key={i}>
                  {p}
                </p>
              ))}
            </section>
          ))}
          <p className="content-block__text">
            Questions? Contact us at{' '}
            <a className="text-accent" href={`mailto:${company.email}`}>
              {company.email}
            </a>{' '}
            or {company.phone}.
          </p>
          </div>
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
