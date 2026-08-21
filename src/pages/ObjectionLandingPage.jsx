import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import ConsultLink from '@components/ui/ConsultLink'
import './ObjectionLandingPage.css'

const OBJECTION_DATA = {
  doubt: {
    title: 'Still wondering if Formula Fitness is right for you?',
    eyebrow: 'Your Health Journey Starts Here',
    subtitle:
      'It is completely normal to have questions before getting started. At Formula Fitness, you never train alone. Our expert personal trainers guide you through every exercise to ensure comfort, safety, and real results.',
    path: '/objection-doubt',
    pillars: [
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        ),
        title: '100% Guided Training',
        desc: 'No confusion or guesswork. Our professional trainers coach you step-by-step through every single exercise.',
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 1 0 7.75" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        title: 'Welcoming Environment',
        desc: 'No crowded chaos or intimidating gym culture. Just a clean, supportive community focused on your well-being.',
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
        title: 'Progress at Your Pace',
        desc: 'We adapt workouts around your schedule, health history, and goals for safe, sustainable growth.',
      },
    ],
    primaryCta: 'Book a Free Consultation',
    secondaryCtaText: 'Explore Our Training Services',
    secondaryCtaPath: '/training-services',
  },
  price: {
    title: 'Personal training value designed for your budget',
    eyebrow: 'Smart Investment in Your Health',
    subtitle:
      'Tired of paying gym memberships where no one helps you? At Formula Fitness, you get dedicated personal training attention for a fraction of the cost of a private trainer.',
    path: '/objection-price',
    pillars: [
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        ),
        title: 'Personal Trainer Included',
        desc: 'Save hundreds of dollars every month while enjoying close supervision from a certified professional trainer.',
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
        title: 'Zero Hidden Fees',
        desc: 'Clear and straightforward options without surprise sign-up charges or hidden cancellation fees.',
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ),
        title: 'Flexible Plans Available',
        desc: 'Enter your info to discover customized options and payment arrangements that fit your financial goals.',
      },
    ],
    primaryCta: 'Get Personalized Pricing',
    secondaryCtaText: 'View Membership Prices',
    secondaryCtaPath: '/prices',
  },
  timing: {
    title: 'Short on time? Achieve real results in 45 to 50 minutes',
    eyebrow: 'Efficient Workouts for Busy Schedules',
    subtitle:
      'You do not need to spend hours in the gym to see progress. Our structured personal training sessions are optimized for maximum health and strength gains in just 45 to 50 minutes.',
    path: '/objection-timing',
    pillars: [
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
        title: '45 to 50 Minute Sessions',
        desc: 'High-impact, focused workouts designed to fit smoothly into your busy workday without wasting time.',
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
        title: '2 to 3 Times per Week',
        desc: 'Achievable frequency that delivers powerful strength, energy, and body composition improvements.',
      },
      {
        icon: (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 11.08V12a10 10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
        title: 'Flexible Scheduling',
        desc: 'Convenient morning, afternoon, and evening session slots so your workout routine always stays on track.',
      },
    ],
    primaryCta: 'Book a Free Consultation',
    secondaryCtaText: 'View Training Services',
    secondaryCtaPath: '/training-services',
  },
}

export default function ObjectionLandingPage({ type = 'doubt' }) {
  const data = OBJECTION_DATA[type] || OBJECTION_DATA['doubt']

  return (
    <>
      <Seo title={data.title} description={data.subtitle} path={data.path} />

      <section className="objection-hero">
        <div className="container objection-hero__container">
          <div className="objection-hero__badge">
            <span className="objection-hero__badge-dot" />
            {data.eyebrow}
          </div>

          <h1 className="objection-hero__title">{data.title}</h1>
          <p className="objection-hero__subtitle">{data.subtitle}</p>

          <div className="objection-hero__actions">
            <ConsultLink className="btn btn-primary btn-lg objection-hero__primary-btn">
              {data.primaryCta}
            </ConsultLink>
            <Link to={data.secondaryCtaPath} className="btn btn-outline btn-lg">
              {data.secondaryCtaText}
            </Link>
          </div>
        </div>
      </section>

      <section className="objection-pillars">
        <div className="container">
          <div className="objection-pillars__grid">
            {data.pillars.map((pillar, idx) => (
              <div className="objection-card" key={idx}>
                <div className="objection-card__icon">{pillar.icon}</div>
                <h3 className="objection-card__title">{pillar.title}</h3>
                <p className="objection-card__desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="objection-banner">
        <div className="container">
          <div className="objection-banner__box">
            <div className="objection-banner__content">
              <h2 className="objection-banner__title">Ready to take the first step towards your fitness goals?</h2>
              <p className="objection-banner__text">
                Book a consultation with our personal training team and experience dedicated coaching firsthand.
              </p>
            </div>
            <div className="objection-banner__actions">
              <ConsultLink className="btn btn-primary btn-lg">
                Book a Consultation
              </ConsultLink>
              <Link to="/prices" className="btn btn-outline">
                See Pricing Options
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
