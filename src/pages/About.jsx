import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import FeatureRow from '@components/sections/FeatureRow'
import Accordion from '@components/ui/Accordion'
import FindUs from '@components/sections/FindUs'
import ContactSection from '@components/sections/ContactSection'
import ConsultCTA from '@components/sections/ConsultCTA'
import { team } from '@data/team'
import { faqCategories } from '@data/faq'
import { upload } from '@utils/constants'
import './AboutPage.css'

const values = [
  { title: 'Client-First Approach', body: 'We take a client-first approach to health and wellness by providing personalized fitness and nutrition programs. Along with coaches to keep you accountable.' },
  { title: 'Sustainable Fitness Journey', body: 'Our mission is to create lasting transformations by emphasizing proper form and holistic wellness without compromising quality or safety.' },
  { title: 'Innovative Training', body: 'We use Myzone heart rate tracking, professional recovery equipment, and metric-driven programming to bring the best results.' },
  { title: 'Whole-Health Improvement', body: 'Our programs are designed to help you with stress management, sleep routines, diet/nutrition, and fitness goals.' },
  { title: 'Highly-Skilled Trainers and Staff', body: 'Our team has a responsibility to use our extensive knowledge and expertise in the field to transform lives.' },
]

const tony = {
  specializations: [
    'Flexibility / Range of Motion / Balance',
    'Endurance training (swim, bike, run)',
    'High-Intensity Interval Training (HIIT)',
    'Nutrition Lifestyle',
    'Strength & Weight Loss',
    'Corrective Exercise – Muscle Restoration',
    'Post-Rehab Training',
    'Lean Muscle Mass Definition',
  ],
  hobbies: ['Iron Man', 'Multi-Media Production', 'Mountaineering', 'Cooking', 'Travel', 'Cheeseburgers', 'Pizza', 'Ice cream w/family'],
  certifications: [
    'AA Exercise Science',
    'NASM – National Academy of Sports Medicine',
    'FMS 1 – Functional Movement Systems',
    'EMT-Paramedic – Advanced Life Support',
    'Pharmacology Pre-Hospital',
    'Human Physiology',
    'NESTA – National Exercise & Sports Trainers Association',
    'Precision Nutrition Level 1',
    'NASM – Corrective Exercise Specialist (CES)',
    'NASM – Performance Enhancement Specialist (PES)',
    'TRX – Functional Trainer',
    'TRX – Group Trainer',
    'ROCK TAPE – IASTM Blades',
    'BOSU & SB Master Trainer',
    'Kettlebell & Barbell Fundamentals',
  ],
}

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="The story behind Formula Fitness — decades of expertise and passion for transforming lives, led by Fitness Director Tony Tran."
        path="/about"
      />
      <PageHero
        eyebrow="About Us"
        title="The story behind Formula Fitness"
        description="Formula Fitness is the product of decades of expertise and passion for transforming lives. Our Fitness Director, Tony Tran, got his start in the fitness industry in 2003. Tony excelled at his craft as a coveted personal trainer, garnering dedicated clients who continue to train with us to this day."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Our Values" title="What We Stand For" align="center" />
          <div className="about-values">
            {values.map((v) => (
              <article className="about-value" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeatureRow
        image={upload('2026/05/Formula-Fitness-03.2026-34-scaled.jpg')}
        imageAlt="Tony Tran, Co-Owner & Fitness Director"
        eyebrow="Co-Owner & Fitness Director"
        heading="Tony Tran"
        paragraphs={[
          'With 20+ years of industry experience across Hollywood and Orange County, Tony brings multiple certifications and a licensed EMT-Paramedic background to every program — enriching his expertise in active-aging clients, injury prevention, and safe training techniques.',
        ]}
        alt
      />

      <section className="section">
        <div className="container about-tony">
          <div className="about-tony__col">
            <h3>Specializations</h3>
            <ul>{tony.specializations.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="about-tony__col">
            <h3>Hobbies</h3>
            <ul>{tony.hobbies.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="about-tony__col">
            <h3>Certifications</h3>
            <ul>{tony.certifications.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle title="Meet our strongest team" align="center" />
          <div className="about-team">
            {team.map((m) => (
              <Link to={`/bio/${m.slug}`} className="about-team__card" key={m.slug}>
                <div className="about-team__photo">
                  <img src={m.photo} alt={m.name} loading="lazy" />
                </div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-faq">
          <SectionTitle title="Frequently Asked Questions (FAQs)" align="center" />
          <Accordion items={faqCategories[0].items} defaultOpen={-1} />
          <div className="about-faq__more">
            <Link to="/faq" className="btn btn-outline">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      <FindUs />
      <ContactSection />
      <ConsultCTA />
    </>
  )
}
