import SectionTitle from '@components/ui/SectionTitle'
import BMICalculator from '@components/ui/BMICalculator'

export default function BMISection() {
  return (
    <section className="section" id="bmi">
      <div className="container">
        <SectionTitle
          eyebrow="BMI Calculator Chart"
          title="Calculate your BMI"
          description="Insert the information below to calculate your Body Mass Index (BMI). Please keep in mind that this number is just for reference. Note: 1 lbs = 0.45 kg · 1 ft = 30.48 cm."
          align="center"
        />
        <BMICalculator />
      </div>
    </section>
  )
}
