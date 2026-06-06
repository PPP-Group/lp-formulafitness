import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import './ServicePage.css'

// Template reutilizável para subpáginas de conteúdo (serviços, etc.).
export default function ServicePage({
  seoTitle,
  seoDescription,
  path,
  eyebrow,
  title,
  intro,
  sections = [],
  highlights = [],
  showConsult = true,
}) {
  return (
    <>
      <Seo title={seoTitle || title} description={seoDescription} path={path} />
      <PageHero eyebrow={eyebrow} title={title} description={intro} />

      <div className="section">
        <div className="container content-page">
          {highlights.length > 0 && (
            <ul className="content-page__highlights">
              {highlights.map((h) => (
                <li key={h.label}>
                  <span className="content-page__highlight-label">{h.label}</span>
                  <span className="content-page__highlight-text">{h.text}</span>
                </li>
              ))}
            </ul>
          )}

          {sections.map((block) => (
            <section className="content-block" key={block.heading}>
              <h2 className="content-block__heading">{block.heading}</h2>
              {block.paragraphs.map((p, i) => (
                <p className="content-block__text" key={i}>
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      {showConsult && <ConsultCTA />}
    </>
  )
}
