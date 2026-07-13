import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import Accordion from '@components/ui/Accordion'
import GhlFrame from '@components/ui/GhlFrame'
import { FORM_VARIANTS } from '@components/ui/FormModalProvider'
import { faqCategories } from '@data/faq'
import { reviews, YELP_URL } from '@data/reviews'
import { company, upload } from '@utils/constants'
import './Prices.css'

function Icon({ children }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

// Trust badges resumidos a partir da FAQ "Pricing, Plans & Guarantee" (verbatim
// na fonte; aqui só um resumo curto). Nada inventado.
const trustBadges = [
  { title: 'From $85 / Session', text: 'Sessions typically start at $85. You only pay for training.', icon: <Icon><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></Icon> },
  { title: 'No Membership Fees', text: 'No membership fees. Pay only for your training sessions.', icon: <Icon><circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" /></Icon> },
  { title: '0% Interest Plans', text: 'Flexible payment plans available with 0% interest.', icon: <Icon><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></Icon> },
  { title: 'Satisfaction Guarantee', text: 'Not happy? We refund your remaining sessions, no questions asked.', icon: <Icon><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></Icon> },
]

// FAQ rápida de preço — reaproveita os itens verbatim de faq.js.
const pricingCat = faqCategories.find((c) => c.category === 'Pricing, Plans & Guarantee')
const pricingFaq = pricingCat
  ? ['How Much Does Training Cost?', 'Are There Payment Plans Available?', 'What Is Your Satisfaction Guarantee?']
      .map((title) => pricingCat.items.find((i) => i.title === title))
      .filter(Boolean)
  : []

// Depoimento curto real (prova social).
const proofReview = reviews.find((r) => r.name === 'Andrew M.') || reviews[reviews.length - 1]

function Stars() {
  return (
    <div className="prices-proof__stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.85.62-5.18 4.55 1.55 6.7L12 17.27 5.88 20.73l1.55-6.7L2.25 8.88l6.85-.62L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Prices() {
  return (
    <>
      <Seo
        title="Prices"
        description="Every journey is different. Enter your info to get personalized pricing for training at Formula Fitness."
        path="/prices"
      />
      <PageHero
        eyebrow="Membership"
        title="Prices"
        description="Every fitness journey is different, so pricing is tailored to your goals and program. Enter your info here and we'll get you personalized pricing."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />

      {/* Trust badges */}
      <section className="section prices-trust">
        <div className="container">
          <ul className="prices-trust__grid">
            {trustBadges.map((b) => (
              <li className="prices-trust__item" key={b.title}>
                <span className="prices-trust__icon">{b.icon}</span>
                <div>
                  <h3 className="prices-trust__title">{b.title}</h3>
                  <p className="prices-trust__text">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Formulário embutido + prova social */}
      <section className="section section--alt" id="consult">
        <div className="container prices-form">
          <div className="prices-form__main">
            <SectionTitle
              eyebrow="Get Started"
              title="Enter Your Info to Get Prices"
              description="Tell us a little about yourself and your goals. A fitness professional from our team will reach out with pricing options that fit your needs and budget."
            />
            <div className="prices-form__frame">
              <GhlFrame config={FORM_VARIANTS.consult} instanceId={`${FORM_VARIANTS.consult.formId}-prices`} />
            </div>
          </div>

          <aside className="prices-form__aside">
            <div className="prices-proof">
              <Stars />
              <p className="prices-proof__score">
                <strong>5.0</strong> · 61+ reviews on
              </p>
              <a href={YELP_URL} target="_blank" rel="noreferrer" className="prices-proof__yelp">
                Yelp ↗
              </a>
            </div>

            <blockquote className="prices-quote">
              <p>“{proofReview.text}”</p>
              <cite>
                {proofReview.name}
                {proofReview.location ? ` · ${proofReview.location}` : ''}
              </cite>
            </blockquote>

            <ul className="prices-contact">
              <li>
                <span>Phone</span>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      {/* FAQ rápida de preço */}
      {pricingFaq.length > 0 && (
        <section className="section">
          <div className="container prices-faq">
            <SectionTitle title="Pricing Questions" align="center" />
            <Accordion items={pricingFaq} defaultOpen={-1} />
          </div>
        </section>
      )}
    </>
  )
}
