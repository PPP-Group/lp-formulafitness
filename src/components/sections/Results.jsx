import { Link } from 'react-router-dom'
import SectionTitle from '@components/ui/SectionTitle'
import { transformations, resultsGallery } from '@data/testimonials'
import './Results.css'

export default function Results() {
  return (
    <section className="section results">
      <div className="container">
        <SectionTitle eyebrow="Proven Outcomes" title="Real People Real Results" align="center" />

        <div className="grid-3 results__cards">
          {transformations.map((item) => (
            <article className="result-card" key={item.id}>
              <div className="result-card__media">
                <img src={item.image} alt={`${item.name}: ${item.result}`} loading="lazy" />
              </div>
              <div className="result-card__body">
                <h3 className="result-card__name">{item.name}</h3>
                <p className="result-card__text">{item.result}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="results__gallery">
          {resultsGallery.map((item) => (
            <figure className="results__thumb" key={item.name}>
              <img src={item.image} alt={`${item.name}'s transformation`} loading="lazy" />
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="results__more">
          <Link to="/testimonials" className="btn-link">
            View all
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
