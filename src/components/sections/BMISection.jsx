import BMICalculator from '@components/ui/BMICalculator'
import './BMISection.css'

export default function BMISection() {
  return (
    <section className="section bmi-section" id="bmi">
      <div className="container bmi-section__container">
        
        <div className="bmi-section__content">
          <div className="bmi-section__eyebrow">
            <span className="bmi-section__line"></span>
            FREE TOOL
          </div>
          <h2 className="bmi-section__title">Calculate Your BMI</h2>
          <p className="bmi-section__text">
            Body Mass Index is a useful starting point. Use this free calculator to understand where you stand — then book a consultation for a full InBody analysis.
          </p>
          <ul className="bmi-section__list">
            <li>
              <span className="bmi-section__icon">✦</span>
              BMI is a screening tool, not a diagnostic measure
            </li>
            <li>
              <span className="bmi-section__icon">✦</span>
              Our InBody 580 provides 10x more precision
            </li>
            <li>
              <span className="bmi-section__icon">✦</span>
              Every consultation includes a complimentary scan
            </li>
          </ul>
        </div>

        <div className="bmi-section__calculator">
          <BMICalculator />
        </div>

      </div>
    </section>
  )
}
