import { Link } from 'react-router-dom'
import './ConsultCTA.css'

// Banner final de CTA — "Ready to take the first step?" (presente em todas as páginas).
export default function ConsultCTA() {
  return (
    <section className="consult">
      <div className="container consult__inner">
        <h2 className="consult__title">Ready to take the first step?</h2>
        <p className="consult__text">
          Contact us for a personalized consultation and see how we can tailor a program just for
          you.
        </p>
        <Link to="/#consult" className="btn btn-primary consult__cta">
          Join Us Today
        </Link>
      </div>
    </section>
  )
}
