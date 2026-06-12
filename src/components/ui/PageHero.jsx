import './PageHero.css'

export default function PageHero({ eyebrow, title, description, image, badgeImage, cta = 'Book a Consultation', showCta = false }) {
  const styled = !!image
  const hasBadge = !!badgeImage
  return (
    <section
      className={`page-hero ${styled ? 'page-hero--image' : ''} ${hasBadge ? 'page-hero--badge' : ''}`}
      style={styled ? { backgroundImage: `linear-gradient(rgba(12,16,24,.6),rgba(12,16,24,.72)), url(${image})` } : undefined}
    >
      <div className={`container ${hasBadge ? 'page-hero__inner' : ''}`}>
        <div className={hasBadge ? 'page-hero__text' : ''}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="page-hero__title">{title}</h1>
          {description && <p className="page-hero__desc">{description}</p>}
          {showCta && (
            <a href="/#consult" className="btn btn-primary page-hero__cta">
              {cta}
            </a>
          )}
        </div>
        {hasBadge && (
          <div className="page-hero__badge">
            <img src={badgeImage} alt="Formula Fitness Trainer Certified" />
          </div>
        )}
      </div>
    </section>
  )
}
