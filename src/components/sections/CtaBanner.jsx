import ConsultLink from '@components/ui/ConsultLink'
import './CtaBanner.css'

// Banner curto de CTA (ex.: "Get Lean & Get Strong" / "Book Your First Session Now!").
export default function CtaBanner({ heading, subheading, button = 'Get Started', image, ctaVariant = 'consult', imagePosition = 'center 25%' }) {
  return (
    <section
      className="cta-banner"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(rgba(12,16,24,.7),rgba(12,16,24,.78)), url(${image})`,
              backgroundPosition: imagePosition,
            }
          : undefined
      }
    >
      <div className="container cta-banner__inner">
        {heading && <h2 className="cta-banner__title">{heading}</h2>}
        {subheading && <p className="cta-banner__sub">{subheading}</p>}
        <ConsultLink className="btn btn-primary cta-banner__btn" variant={ctaVariant}>
          {button}
        </ConsultLink>
      </div>
    </section>
  )
}
