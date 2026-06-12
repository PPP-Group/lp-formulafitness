import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import StepsSection from '@components/sections/StepsSection'
import FeatureRow from '@components/sections/FeatureRow'
import LocationBlock from '@components/sections/LocationBlock'
import Partners from '@components/sections/Partners'
import CtaBanner from '@components/sections/CtaBanner'
import Results from '@components/sections/Results'
import FindUs from '@components/sections/FindUs'
import ContactSection from '@components/sections/ContactSection'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload, youtube } from '@utils/constants'
import './PersonalTrainingPage.css'

const steps = [
  {
    title: 'Fitness Assessment',
    body: 'Everything stems from your movement assessment as it determines what type of movements you should do more of, and the movements you should stay away from (many individuals should be avoiding pushups due to a tight chest from sitting with bad posture).',
  },
  {
    title: 'Personalized Blueprint',
    body: 'Your personal training programming will include in-person workouts, customized nutrition plan, and semi-monthly metric tracking. Additional supplement guidance to enhance your results and lifestyle is provided.',
  },
  {
    title: 'Fitness Solutions',
    body: 'We can make progress no matter your experience level. Variations, modifications, and alternatives will be provided to assure that you feel like the workout is appropriate for you and your goals.',
  },
]

const features = [
  {
    heading: 'Elite, Certified Coaches',
    image: upload('2025/05/DSCF1279-scaled.jpg'),
    bullets: [
      'Certified experts with years of experience',
      'Personalized coaching tailored to your goals',
      'Nationally accredited certifications + ongoing education',
      'Proven track records with busy professionals & athletes',
      'Strict 1-trainer-to-1-client ratio for total focus',
      'Friendly, motivating style that balances science and fun',
    ],
  },
  {
    heading: 'Alignment & Movement Mastery',
    image: upload('2025/05/DSCF2558-scaled.jpg'),
    reverse: true,
    bullets: [
      'In-depth movement screenings for precise assessment',
      'Full postural and gait assessment on day one',
      'Corrective exercise woven into every session',
      'Cueing that teaches why each movement matters',
      'Progressions/regressions keep form flawless as you advance',
    ],
  },
  {
    heading: 'Built-In Injury Prevention',
    image: upload('2025/05/9-Flexibility-scaled.jpg'),
    bullets: [
      'Scientifically designed warm-ups and cooldowns',
      'Joint-specific stability drills to bullet-proof weak links',
      'Real-time load management to avoid over-training',
      'Continuous monitoring to prevent overuse injuries',
      'Collaboration with medical pros when rehabbing past injuries',
    ],
  },
  {
    heading: '100% Personalized Programming',
    image: upload('2025/05/DSCF1500-scaled.jpg'),
    reverse: true,
    bullets: [
      'Training plans tailored precisely to your body and goals',
      'Training split, intensity, and volume tailored to your body type & goals',
      'Flexible scheduling that meshes with shift work or travel',
      'Re-tests every 4-6 weeks to recalibrate the plan',
      'App & video demos for workouts on the go',
    ],
  },
  {
    heading: 'Goal-Focused Modalities',
    image: upload('2025/05/Consultation-Pic-scaled.jpg'),
    bullets: [
      'Strength & hypertrophy blocks for power and tone',
      'Metabolic-boosting circuits for fat loss',
      'Fat-loss circuits that spike metabolic rate hours after you leave',
      'Sport-specific drills for speed, agility, and endurance',
      'Low-impact rehab options to rebuild confidence post-injury',
    ],
  },
  {
    heading: 'Culture-Aware Nutrition Coaching',
    image: upload('2025/05/Untitled-1200-x-800-px-2.png'),
    reverse: true,
    bullets: [
      'Meal plans that feature foods you love, ditch the ones you don’t',
      'Asian, Mexican, Indian, American, vegetarian, & hybrid menus',
      'Macro targets adjusted to match training load and lifestyle',
      'Grocery lists & simple recipes for time-starved weeks',
    ],
  },
  {
    heading: 'Recovery—The Secret Weapon',
    image: upload('2025/05/DSCF0079-scaled.jpg'),
    bullets: [
      'Mobility flows, static & dynamic stretching in every session',
      'Compression therapy, cupping, and fascia “blading” add-ons',
      'HRV-based readiness checks to fine-tune training intensity',
      'Education on sleep, stress, and breath-work for 24/7 recovery gains',
    ],
  },
  {
    heading: 'Data-Driven Tracking',
    image: upload('2025/05/Untitled-design-1.png'),
    reverse: true,
    bullets: [
      'InBody 580 scans: body fat, lean mass, visceral fat, hydration',
      'Heart-rate & workout-intensity logs every session',
      'Basal metabolic rate recalculated to guide nutrition tweaks',
      'Visual dashboards so you see progress, not just feel it',
    ],
  },
  {
    heading: 'Rock-Solid Satisfaction Guarantee',
    image: upload('2025/04/DSCF1406-scaled.jpg'),
    bullets: [
      'Love your results and your experience—or we’ll make it right',
      'Clear, measurable checkpoints so “success” is never vague',
      'Open-door feedback policy—text, call, or drop in anytime',
      'Visual dashboards so you see progress, not just feel it',
    ],
  },
]

export default function PersonalTraining() {
  return (
    <>
      <Seo
        title="Private Personal Training"
        description="One-on-one personal training at Formula Fitness — a data-driven approach with elite certified coaches that delivers strength, confidence, and results."
        path="/personal-training"
      />
      <PageHero
        eyebrow="Private Personal Training"
        title="Personal Training"
        description="Your goals deserve more than generic workouts. Our data-driven approach, combined with elite certified coaches, provides personalized training that delivers strength, confidence, and results."
        image={upload('2025/05/Consultation-Pic-scaled.jpg')}
        showCta
        cta="Book a consultation"
      />

      <section className="section pt-explainer">
        <div className="container pt-explainer__inner">
          <div className="pt-explainer__video">
            <iframe
              src={`https://www.youtube.com/embed/${youtube.main}?rel=0`}
              title="Personal Training at Formula Fitness Explained"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <StepsSection
        title="Three Steps to Your Fitness Journey"
        steps={steps}
        cta="Start My Fitness Journey"
        alt
      />

      {/* Video background section — Elite Certified Trainers */}
      <section className="pt-vbg" aria-label="Elite Certified Trainers">
        <div className="pt-vbg__media" aria-hidden="true">
          <iframe
            src={`https://www.youtube.com/embed/${youtube.main}?autoplay=1&mute=1&loop=1&playlist=${youtube.main}&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1`}
            title="Formula Fitness training background"
            allow="autoplay; encrypted-media"
          />
        </div>
        <div className="pt-vbg__overlay" aria-hidden="true" />
        <div className="pt-vbg__content">
          <div className="pt-vbg__content-inner">
            <h2 className="pt-vbg__title">Elite Certified Trainers</h2>
            <ul className="pt-vbg__list">
              {[
                'Elite 1-on-1 Coaching',
                'Trusted by Busy Executives, Motivated Parents, and Active Aging Members',
                'Science-Backed Methods to Build Strength and Shed Fat',
                'Safety & Recovery Built-In',
                'Live Biomechanics Coaching',
                'Five-Star Member Experience',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="/#consult" className="btn btn-primary pt-vbg__cta">
              Book A Consultation
            </a>
          </div>
        </div>
      </section>

      <div className="section section--alt">
        <div className="container">
          <SectionTitle
            title="Here To Exceed Your Expectations"
            description="A results-driven community where support, recovery, and fun fuel every session."
            align="center"
          />
        </div>
      </div>

      {features.map((f) => (
        <FeatureRow
          key={f.heading}
          image={f.image}
          imageAlt={f.heading}
          heading={f.heading}
          bullets={f.bullets}
          reverse={f.reverse}
        />
      ))}

      <FeatureRow
        image={upload('2026/05/Formula-Fitness-03.2026-53-scaled.jpg')}
        imageAlt="Coach guiding a personal training session"
        heading="Why Choose Personal Training?"
        paragraphs={['Investing in a professional coach is the fastest and safest route to your goal—here’s why:']}
        bullets={[
          'Personalized exercises tailored for your body, lifestyle, and goals',
          'Expert guidance and education through your workouts',
          'Individual attention for form correction to keep you injury-free',
          'Flexible scheduling options',
          'Custom nutrition plans',
        ]}
        cta="Book a consultation"
        alt
      />

      <FeatureRow
        image={upload('2026/05/Formula-Fitness-03.2026-64-3-scaled.jpg')}
        imageAlt="Results-driven personal training workout"
        heading="Results-Driven Workouts"
        paragraphs={[
          'Activate dormant muscles, mobilize tight areas, and warm up to prevent injuries. Your coach guides you through the main sets, followed by a metabolism-boosting finisher and recovery with stretching and vibration therapy.',
          '1-on-1 Coaching Includes:',
        ]}
        bullets={[
          'Personalized workouts to meet your goals',
          'Exercise demonstrations & form correction',
          'Comprehensive whole-body & lifestyle reassessments',
          "Undivided coach's attention",
          'Custom meal plan',
        ]}
        cta="Book a consultation"
        reverse
      />

      <Results />

      <LocationBlock />
      <Partners />
      <CtaBanner
        heading="Start Your Transformation with Expert Coaching"
        subheading="Experience results-driven training built for you!"
        button="Book a consultation"
        image={upload('2026/05/Formula-Fitness-03.2026-145-1-scaled.jpeg')}
      />
      <FindUs />
      <ContactSection />
      <ConsultCTA />
    </>
  )
}
