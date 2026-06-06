import { Link } from 'react-router-dom'
import SectionTitle from '@components/ui/SectionTitle'
import { programs } from '@data/services'
import './Programs.css'

export default function Programs() {
  return (
    <section className="section section--alt programs">
      <div className="container">
        <SectionTitle
          eyebrow="What We Offer"
          title="Training Programs"
          description="Propel your workout routine to new heights with our elite training programs, personalized to intensify and optimize your fitness journey."
          align="center"
        />

        <div className="grid-3 programs__grid">
          {programs.map((program) => (
            <article className="program-card" key={program.id}>
              <div className="program-card__media">
                <span className="program-card__badge">{program.title}</span>
              </div>
              <div className="program-card__body">
                <h3 className="program-card__title">{program.title}</h3>
                <p className="program-card__desc">{program.description}</p>
                <Link to={program.path} className="btn-link">
                  Learn More
                  <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
