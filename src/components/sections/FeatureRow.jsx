import './FeatureRow.css'

// Linha de feature: imagem + (eyebrow, heading, parágrafo, bullets, CTA). Alterna lados.
export default function FeatureRow({
  image,
  imageAlt = '',
  eyebrow,
  heading,
  paragraphs = [],
  bullets = [],
  cta,
  reverse = false,
  alt = false,
}) {
  return (
    <section className={`section feature-row ${alt ? 'section--alt' : ''}`}>
      <div className={`container grid-2 feature-row__grid ${reverse ? 'feature-row__grid--reverse' : ''}`}>
        {image && (
          <div className="feature-row__media">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
        )}
        <div className="feature-row__content">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {heading && <h2 className="section-title">{heading}</h2>}
          {paragraphs.map((p, i) => (
            <p className="section-subtitle" key={i}>
              {p}
            </p>
          ))}
          {bullets.length > 0 && (
            <ul className="feature-row__bullets">
              {bullets.map((b) => (
                <li key={b}>
                  <Check />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <a href="#consult" className="btn btn-primary feature-row__cta">
              {cta}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
