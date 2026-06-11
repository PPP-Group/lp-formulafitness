import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import StepsSection from '@components/sections/StepsSection'
import FeatureRow from '@components/sections/FeatureRow'
import LocationBlock from '@components/sections/LocationBlock'
import CtaBanner from '@components/sections/CtaBanner'
import Results from '@components/sections/Results'
import FindUs from '@components/sections/FindUs'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload, youtube } from '@utils/constants'
import './ServicePage.css'
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
    heading: 'Science-Based, Data-Driven Coaching',
    image: upload('2025/05/DSCF1279-scaled.jpg'),
    bullets: [
      'MyZone® live heart-rate feedback',
      'InBody® muscle-to-fat analysis',
      'Real-time zone coaching keeps you in the sweet spot for fat-burn & performance',
      'Monthly data reviews translate numbers into clear action steps',
      'Adaptive programming evolves as your metrics improve',
      'Transparent dashboards you can access anytime in the member app',
    ],
  },
  {
    heading: 'Precision Meal Planning',
    image: upload('2025/05/Untitled-1200-x-800-px-2.png'),
    reverse: true,
    bullets: [
      'BMR-calibrated calorie targets and macros tuned to your goals',
      'Foods you actually like to eat — age, sex, lean mass, and activity level all factor in',
      'Global cuisine options: Indian, Asian, Hispanic, Mediterranean, vegetarian & more',
      'Swap-out lists keep meals fresh without derailing results',
      'Weekly coach check-ins fine-tune portions and timing',
    ],
  },
  {
    heading: 'Custom Blueprints in a Small Group Setting',
    image: upload('2025/05/DSCF2558-scaled.jpg'),
    bullets: [
      '4-to-1 client-to-coach ratio with a personal progress roadmap',
      'Goal-specific workout tracks built around your schedule, injuries, and ambitions',
      'Modifications on the spot so you never miss a beat',
      'Peer motivation that doubles adherence rates',
      'Private-session quality at a shared-session price',
    ],
  },
  {
    heading: 'Your Member App',
    image: upload('2026/05/Formula-Fitness-03.2026-38-scaled.jpg'),
    reverse: true,
    paragraphs: ['All the tools you need, always in your pocket:'],
    bullets: [
      'Homework Calendar – quick at-home workouts for off days',
      '24/7 Messaging – DM your coach any time',
      'Video Library – demos of every exercise so you’re never guessing',
    ],
  },
  {
    heading: 'Safety & Recovery Built-In',
    image: upload('2025/05/9-Flexibility-scaled.jpg'),
    bullets: [
      'Dynamic joint activation and technique-first coaching',
      'Guided cooldown & mobility — movement screens catch issues before they become injuries',
      'Foam rolling, percussion, and stretch aids on demand',
      'Recovery metrics logged alongside training data',
      'Education snippets teach you why every rep matters',
    ],
  },
  {
    heading: 'Accountability That Works',
    image: upload('2026/05/Formula-Fitness-03.2026-44-scaled.jpg'),
    reverse: true,
    bullets: [
      'Dedicated success coach, automated app reminders, and weekly scorecards',
      'Goal checkpoints every 4 weeks with clear next steps',
      'Slack & SMS support for real-time answers',
      'Leaderboards and streak badges for extra motivation',
      'Miss a session? We follow up—no member left behind',
    ],
  },
  {
    heading: 'Five-Star Member Experience',
    image: upload('2026/05/Formula-Fitness-03.2026-53-scaled.jpg'),
    bullets: [
      'Front-desk hospitality and quick-response support (<2 hrs)',
      'We reverse-engineer your ideal gym visit and iterate from feedback',
      'Flexible scheduling, easy reschedules, no hidden fees',
      'Surprise & delight moments (birthday perks, milestone swag)',
      '97% member-happiness score and counting',
    ],
  },
]

export default function SemiPrivate() {
  return (
    <>
      <Seo
        title="Semi-Private Personal Training"
        description="Busy professionals, on-the-go parents, and active agers trust our data-driven semi-private coaching to shed fat, build strength, and stay injury-free."
        path="/semi-private-personal-training"
      />
      <PageHero
        eyebrow="Semi-Private Personal Training"
        title="Semi-Private Personal Training"
        description="Busy professionals, on-the-go parents, and active agers trust our data-driven coaching to shed fat, build strength, and stay injury-free—without the private-session price tag."
        image={upload('2025/05/DSCF2558-scaled.jpg')}
        showCta
        cta="Get Started"
      />

      <StepsSection
        title="Three Steps to Your Fitness Journey"
        steps={steps}
        cta="Start My Fitness Journey"
        alt
      />

      {/* Video background section — mirrors original site */}
      <section className="pt-vbg" aria-label="Experience the Difference">
        <div className="pt-vbg__media" aria-hidden="true">
          <iframe
            src={`https://www.youtube.com/embed/${youtube.semiPrivate}?autoplay=1&mute=1&loop=1&playlist=${youtube.semiPrivate}&controls=0&rel=0&showinfo=0&modestbranding=1&playsinline=1`}
            title="Semi-private training background"
            allow="autoplay; encrypted-media"
          />
        </div>
        <div className="pt-vbg__overlay" aria-hidden="true" />
        <div className="pt-vbg__content">
          <div className="pt-vbg__content-inner">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>Experience the Difference</span>
            <h2 className="pt-vbg__title" style={{ marginTop: 'var(--space-sm)' }}>Everything You Need to Succeed</h2>
            <ul className="pt-vbg__list">
              {[
                'Elite Certified Trainers',
                'Science-Based, Data-Driven Coaching',
                'Precision Meal Planning',
                'Personalized Blueprint for Your Unique Body',
                'Safety & Recovery Built-In',
                'Accountability That Works',
                'Five-Star Member Experience',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href="/#consult" className="btn btn-primary pt-vbg__cta">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {features.map((f) => (
        <FeatureRow
          key={f.heading}
          image={f.image}
          imageAlt={f.heading}
          heading={f.heading}
          paragraphs={f.paragraphs}
          bullets={f.bullets}
          reverse={f.reverse}
        />
      ))}

      <CtaBanner
        heading="Get Lean & Get Strong"
        subheading="Book Your First Session Now!"
        button="Get Started"
        image={upload('2026/05/Formula-Fitness-03.2026-145-1-scaled.jpeg')}
      />

      <section className="section section--alt">
        <div className="container schedule-block">
          <img
            src={upload('2025/05/SPPT-Schedule.png')}
            alt="Semi-Private Personal Training class schedule"
            loading="lazy"
          />
          <p className="schedule-block__note">
            *Classes are added on demand, and you’ll train alongside members with matching fitness
            levels and commitment.
          </p>
        </div>
      </section>

      <Results />

      <LocationBlock />
      <CtaBanner
        heading="Build Strength & Gain Confidence"
        subheading="Get Started Today!"
        button="Get Started"
        image={upload('2026/05/Formula-Fitness-03.2026-34-scaled.jpg')}
      />
      <FindUs />
      <ConsultCTA />
    </>
  )
}
