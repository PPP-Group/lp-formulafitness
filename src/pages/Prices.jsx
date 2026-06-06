import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import './Prices.css'

const plans = [
  {
    name: 'Private Training',
    tagline: 'One-on-one coaching',
    features: ['Dedicated personal trainer', 'Fully customized program', 'InBody progress tracking'],
    featured: false,
  },
  {
    name: 'Semi-Private',
    tagline: 'Small group, big results',
    features: ['2–4 clients per session', 'Individual programming', 'Most popular option'],
    featured: true,
  },
  {
    name: 'Recovery Lab',
    tagline: 'Recover & restore',
    features: ['Mobility & recovery tools', 'Add-on to any plan', 'Flexible scheduling'],
    featured: false,
  },
]

export default function Prices() {
  return (
    <>
      <Seo
        title="Prices"
        description="Flexible training options at Formula Fitness. Book a consultation for personalized pricing."
        path="/prices"
      />
      <PageHero
        eyebrow="Membership"
        title="Plans & Pricing"
        description="Every journey is different. Book a consultation and we'll recommend the right plan for your goals."
      />
      <div className="section">
        <div className="container grid-3 prices__grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`price-card ${plan.featured ? 'price-card--featured' : ''}`}
            >
              {plan.featured && <span className="price-card__tag">Most Popular</span>}
              <h3 className="price-card__name">{plan.name}</h3>
              <p className="price-card__tagline">{plan.tagline}</p>
              <ul className="price-card__features">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#consult"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} price-card__cta`}
              >
                Book a Consultation
              </a>
            </article>
          ))}
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
