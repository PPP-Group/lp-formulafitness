import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultLink from '@components/ui/ConsultLink'
import ConsultCTA from '@components/sections/ConsultCTA'
import { company, upload } from '@utils/constants'
import './Prices.css'

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
      <section className="section" id="consult">
        <div className="container prices-lead">
          <div className="prices-lead__info">
            <figure className="prices-lead__photo">
              <img
                src={upload('2026/05/Formula-Fitness-03.2026-145-1-scaled.jpeg')}
                alt="Formula Fitness personal training session"
                loading="lazy"
              />
            </figure>
            <h2 className="section-title">Enter Info to Get Prices</h2>
            <p className="section-subtitle">
              Tell us a little about yourself and your goals. A fitness professional from our team
              will reach out with pricing options that fit your needs and budget.
            </p>
            <ul className="prices-lead__contact">
              <li>
                <span>Phone</span>
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
            <ConsultLink className="btn btn-primary prices-lead__cta" variant="consult">
              Get Started
            </ConsultLink>
          </div>
        </div>
      </section>
      <ConsultCTA />
    </>
  )
}
