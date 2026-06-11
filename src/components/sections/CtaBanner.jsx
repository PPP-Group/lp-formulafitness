import './CtaBanner.css'

// Banner curto de CTA (ex.: "Get Lean & Get Strong" / "Book Your First Session Now!").
export default function CtaBanner({ heading, subheading, button = 'Get Started', image }) {
  return (
    <section className="cta-banner" style={image ? { backgroundImage: `linear-gradient(rgba(12,16,24,.7),rgba(12,16,24,.78)), url(${image})` } : undefined}>
      <div className="container cta-banner__inner">
        {heading && <h2 className="cta-banner__title">{heading}</h2>}
        {subheading && <p className="cta-banner__sub">{subheading}</p>}
        <a href="/#consult" className="btn btn-primary cta-banner__btn">
          {button}
        </a>
      </div>
    </section>
  )
}
