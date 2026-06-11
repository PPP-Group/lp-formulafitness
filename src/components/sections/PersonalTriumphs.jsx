import { upload } from '@utils/constants'
import './PersonalTriumphs.css'

export default function PersonalTriumphs() {
  return (
    <section className="section section--alt triumphs">
      <div className="container grid-2 triumphs__grid">
        <div className="triumphs__media">
          <img
            src={upload('2023/10/Group-81242-1.png')}
            alt="A Formula Fitness member celebrating their results"
            loading="lazy"
          />
        </div>
        <div className="triumphs__content">
          <h2 className="section-title">Personal Training, Personal Triumphs!</h2>
          <p className="section-subtitle">
            Your unique goals and needs are prioritized, guiding you towards a sustainable and
            impactful fitness journey. Embrace innovative training techniques led by formula fitness
            highly-skilled team, dedicated to fostering your whole health improvement and propelling
            you towards lasting transformation and wellness.
          </p>
          <a href="/#consult" className="btn btn-primary triumphs__cta">
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
