import './PageHero.css'

// Hero compacto reutilizado no topo das subpáginas.
// Aceita imagem de fundo opcional (vira hero escuro com overlay) e CTA opcional.
export default function PageHero({ eyebrow, title, description, image, cta = 'Book a Consultation', showCta = false }) {
  const styled = !!image
  return (
    <section
      className={`page-hero ${styled ? 'page-hero--image' : ''}`}
      style={styled ? { backgroundImage: `linear-gradient(rgba(12,16,24,.6),rgba(12,16,24,.72)), url(${image})` } : undefined}
    >
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
        {showCta && (
          <a href="/#consult" className="btn btn-primary page-hero__cta">
            {cta}
          </a>
        )}
      </div>
    </section>
  )
}
