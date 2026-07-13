import { upload } from '@utils/constants'
import './AppSection.css'

export default function AppSection() {
  return (
    <section className="section section--alt app-section">
      <div className="container grid-2 app-section__grid">
        <div className="app-section__content">
          <h2 className="section-title">Homework and Accountability From My App</h2>
          <p className="section-subtitle">
            Stay on track between sessions with custom homework workouts, exercise demonstrations,
            and direct messaging with your coach, all from the Formula Fitness member app.
          </p>
          <div className="app-section__icons">
            <img src={upload('2023/06/image-7.svg')} alt="" aria-hidden="true" />
            <img src={upload('2023/06/image-8.svg')} alt="" aria-hidden="true" />
          </div>
        </div>
        <div className="app-section__media">
          <img
            src={upload('2023/08/mobile-screen-full.png')}
            alt="Formula Fitness member app on a mobile phone"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
