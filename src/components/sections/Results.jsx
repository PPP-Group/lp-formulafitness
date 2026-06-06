import SectionTitle from '@components/ui/SectionTitle'
import { transformations } from '@data/testimonials'
import './Results.css'

const gallery = ['Ruby', 'Dharshun', 'Renata', 'Yaska', 'Toby', 'Heather', 'Michael', 'Daisy']

export default function Results() {
  return (
    <section className="section results">
      <div className="container">
        <SectionTitle eyebrow="Proven Outcomes" title="Real People, Real Results" align="center" />

        <div className="grid-3 results__cards">
          {transformations.map((item) => (
            <article className="result-card" key={item.id}>
              <div className="result-card__media">
                <span>{item.name}</span>
              </div>
              <p className="result-card__text">{item.result}</p>
            </article>
          ))}
        </div>

        <div className="results__gallery">
          {gallery.map((name) => (
            <div className="results__thumb" key={name}>
              <span>{name}</span>
            </div>
          ))}
        </div>

        <div className="results__more">
          <a href="#consult" className="btn-link">
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
          </a>
        </div>
      </div>
    </section>
  )
}
