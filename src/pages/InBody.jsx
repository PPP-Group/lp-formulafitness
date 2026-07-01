import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import FeatureRow from '@components/sections/FeatureRow'
import CtaBanner from '@components/sections/CtaBanner'
import FindUs from '@components/sections/FindUs'
import ContactSection from '@components/sections/ContactSection'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload } from '@utils/constants'
import './InBodyPage.css'

const design = [
  { icon: upload('2025/04/580-design1.png'), text: 'Get access to premium full-body analysis with clinical-grade accuracy' },
  { icon: upload('2025/04/580-design2.png'), text: 'Measure muscle mass, hydration, and cellular health with precision sensors' },
  { icon: upload('2025/04/580-design3.png'), text: 'Track body fat, water balance, and muscle distribution from the ground up' },
  { icon: upload('2025/04/580-design4.png'), text: 'Smart guidance for accurate results. No guesswork—just clear instructions and real-time feedback' },
]

const technology = [
  { title: 'Enhanced Technology', body: 'The new InBody scan produces advanced parameters, such as, Segmental ECW Ratio and Phase Angle, to better analyze an individual’s health status.' },
  { title: 'Convenient to Use', body: 'Experience quick and precise body composition assessment within just 30 seconds, available for immediate consultation.' },
  { title: 'Ergonomically Designed', body: 'Intelligently engineered, powered by the most advanced BIA technology, for precise insights into your health. With an intuitive interface, innovative design, and comprehensive measurements.' },
  { title: 'Smart Recognition', body: 'QR code recognition with mobile phones simplifying member data entry for enhanced efficiency.' },
]

export default function InBody() {
  return (
    <>
      <Seo
        title="InBody Scan"
        description="The InBody 580 is the next generation of premium body composition analyzer — in-depth health assessments for expert insights in under a minute."
        path="/inbody"
      />
      <PageHero
        eyebrow="InBody Scan"
        title="InBody Scan"
        description="In-Depth Health Assessments for Expert Insights"
        image={upload('2023/06/Formula-Fitness-03.2026-142-scaled.jpg')}
        showCta
        cta="Book a Consultation"
      />

      <FeatureRow
        image={upload('2025/04/580-img.png')}
        imageAlt="InBody 580 body composition analyzer"
        heading="The Next Generation of Body Composition Analysis"
        paragraphs={[
          'InBody scan is the next generation of premium body composition analyzer for health professionals.',
          'It analyzes the Segmental ECW Ratio and Segmental Phase Angle, allowing professional-grade screening for detailed health assessment. This information guides fitness, wellness, and nutrition professionals to make tailored interventions.',
        ]}
        mediaClassName="inbody-device-media"
      />

      <section className="section section--alt">
        <div className="container">
          <SectionTitle title="See the InBody Scan in Action" align="center" />
          <div className="inbody-video">
            <video
              className="inbody-video__player"
              src={upload('2026/05/Jason-Website-1.mp4')}
              poster={upload('2026/06/image-65.png')}
              controls
              playsInline
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="InBody Scan Sophisticated Design" align="center" />
          <div className="inbody-design">
            {design.map((d) => (
              <article className="inbody-design__card" key={d.text}>
                <img src={d.icon} alt="" aria-hidden="true" />
                <p>{d.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2 inbody-tech">
          <div className="inbody-tech__media">
            <img src={upload('2025/04/580-technology-img.jpg')} alt="InBody 580 technology" loading="lazy" />
          </div>
          <div className="inbody-tech__list">
            <SectionTitle title="InBody Technology" />
            {technology.map((t) => (
              <div className="inbody-tech__item" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container inbody-results">
          <figure>
            <img src={upload('2025/04/580-result1.jpg')} alt="InBody result sheet" loading="lazy" />
            <figcaption>
              Experience in-depth body analysis with InBody scan, offering detailed results for
              muscle, fat, water, and cellular integrity for each body segment.
            </figcaption>
          </figure>
          <figure>
            <img src={upload('2025/04/580-result2.jpg')} alt="InBody result sheet for children" loading="lazy" />
            <figcaption>
              InBody Result Sheet for Children, which allows you to see the growth and physical
              development at a glance, providing a standard curve for children’s growth.
            </figcaption>
          </figure>
        </div>
      </section>

      <CtaBanner
        heading="Get Your InBody Analysis Today—Click The Button Below!"
        button="Book a Consultation"
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />
      <FindUs />
      <ContactSection />
      <ConsultCTA />
    </>
  )
}
