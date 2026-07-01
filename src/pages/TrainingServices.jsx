import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import FeatureRow from '@components/sections/FeatureRow'
import StepsSection from '@components/sections/StepsSection'
import CtaBanner from '@components/sections/CtaBanner'
import FindUs from '@components/sections/FindUs'
import ContactSection from '@components/sections/ContactSection'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload } from '@utils/constants'
import './TrainingServicesPage.css'

const steps = [
  {
    title: 'Fitness Assessment',
    body: 'Everything stems from your movement assessment — it determines what movements you should do more of and which to avoid. Many people should be skipping pushups due to a tight chest from sitting with bad posture.',
  },
  {
    title: 'Personalized Blueprint',
    body: 'Your programming includes in-person workouts, a customized nutrition plan, and semi-monthly metric tracking. Additional supplement guidance to enhance your results and lifestyle is provided.',
  },
  {
    title: 'Fitness Solutions',
    body: 'We can make progress no matter your experience level. Variations, modifications, and alternatives ensure the workout always feels appropriate for your body and your goals.',
  },
]

export default function TrainingServices() {
  return (
    <>
      <Seo
        title="Training Services"
        description="Explore Formula Fitness's full range of services — private personal training, semi-private coaching, recovery lab, and active aging programs — all tailored to your unique goals."
        path="/training-services"
      />

      <PageHero
        eyebrow="Our Services"
        title="Training Services"
        description="One gym, every tool you need. From elite 1-on-1 coaching and small-group sessions to cutting-edge recovery and active aging programs — all tailored to you."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
        showCta
        cta="Book a Consultation"
      />

      {/* Services overview */}
      <section className="ts-hub" aria-labelledby="ts-hub-title">
        <div className="container">
          <div className="ts-hub__header">
            <span className="eyebrow">What We Offer</span>
            <h2 className="ts-hub__title" id="ts-hub-title">
              A Complete Fitness Ecosystem
            </h2>
            <p className="ts-hub__desc">
              Formula Fitness covers every dimension of your health — strength, recovery,
              nutrition, and longevity — so you never have to look anywhere else.
            </p>
          </div>

          <div className="ts-hub__grid">
            <a href="/personal-training" className="ts-hub__card">
              <div className="ts-hub__card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 5v14M18 5v14M3 9h3m12 0h3M3 15h3m12 0h3M9 9h6v6H9z" />
                </svg>
              </div>
              <div className="ts-hub__card-body">
                <h3 className="ts-hub__card-title">Private Personal Training</h3>
                <p className="ts-hub__card-desc">Elite 1-on-1 coaching with strict undivided attention, custom programming, and real-time biomechanics feedback.</p>
              </div>
              <ArrowRight />
            </a>

            <a href="/semi-private-personal-training" className="ts-hub__card">
              <div className="ts-hub__card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="7" r="3" /><circle cx="17" cy="8" r="2.5" />
                  <path d="M3 21v-2a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v2" />
                  <path d="M17 13a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <div className="ts-hub__card-body">
                <h3 className="ts-hub__card-title">Semi-Private Training</h3>
                <p className="ts-hub__card-desc">Small-group energy with a personal roadmap — 4-to-1 ratio keeps quality high and cost manageable.</p>
              </div>
              <ArrowRight />
            </a>

            <a href="/recovery-service" className="ts-hub__card">
              <div className="ts-hub__card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div className="ts-hub__card-body">
                <h3 className="ts-hub__card-title">Recovery Lab</h3>
                <p className="ts-hub__card-desc">Professional-grade recovery tech — vibration, IASTM blades, assisted stretching — to maximize how you feel and move.</p>
              </div>
              <ArrowRight />
            </a>

            <a href="/active-aging" className="ts-hub__card">
              <div className="ts-hub__card-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <div className="ts-hub__card-body">
                <h3 className="ts-hub__card-title">Active Aging Program</h3>
                <p className="ts-hub__card-desc">Safe, results-driven programming built for longevity — joint-smart workouts that keep you strong, mobile, and confident.</p>
              </div>
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* 1. Private Personal Training */}
      <FeatureRow
        image={upload('2026/05/Formula-Fitness-03.2026-44-scaled.jpg')}
        imageAlt="Elite certified coach working one-on-one with a client"
        eyebrow="1-on-1 Coaching"
        heading="Private Personal Training"
        paragraphs={[
          'We work with a full spectrum of clientele. Our coaches thrive working with people who are new to exercise, the active aging population, those seeking weight loss, and those experiencing pain due to weak and tight muscles.',
          'Our team focuses on the key factors that make a dramatic impact on your life — sleep, hydration, stress levels, habits, and what food, supplements, or drugs you put into your body.',
        ]}
        bullets={[
          'Strict 1-trainer-to-1-client ratio for total focus',
          'Data-driven programming with InBody® scans',
          'Custom nutrition plans built around foods you love',
          'Injury prevention and corrective exercise built in',
          'Flexible scheduling to fit your lifestyle',
        ]}
        cta="Learn More"
        ctaHref="/personal-training"
      />

      {/* 2. Recovery Lab */}
      <FeatureRow
        image={upload('2023/06/Formula-Fitness-03.2026-142-scaled.jpg')}
        imageAlt="Recovery lab with professional grade equipment"
        eyebrow="Recovery & Wellness"
        heading="Recovery Lab"
        paragraphs={[
          'Computers, phones, repetitive movements, exercise, and stress all lead to tension. Do you have lower back pain, neck pain, or hip pain from sitting? Using multiple Recovery techniques will maximize the way you feel and move.',
          "During your fitness assessment we'll evaluate where you may want or need extra attention. Our recovery lab features professional-grade equipment and methods.",
        ]}
        bullets={[
          'Dual vibration gun massage',
          'IASTM blades for soft-tissue work',
          'Assisted stretching with a fitness professional',
          'Improve range of motion with moderate pressure',
          'Strong or gentle mechanical massage options',
        ]}
        cta="Learn More"
        ctaHref="/recovery-service"
        reverse
      />

      {/* 3. Semi-Private Personal Training */}
      <FeatureRow
        image={upload('2026/05/Formula-Fitness-03.2026-108-scaled.jpg')}
        imageAlt="Small group semi-private training session"
        eyebrow="Small Group Coaching"
        heading="Semi-Private Personal Training"
        paragraphs={[
          'Our semi-private personal training classes are designed to challenge everyone while keeping your safety top of mind. You get the community energy of a group class with the focus of a personal training session.',
          'During our group training sessions, expect a high-energy, results-driven experience that includes cardiovascular exercises, strength training, functional movements, and core work.',
        ]}
        bullets={[
          '4-to-1 client-to-coach ratio with a personal progress roadmap',
          'Goal-specific workout tracks built around your schedule',
          'Proper form & technique coaching to minimize injury risk',
          'Peer motivation that doubles adherence rates',
          'Private-session quality at a shared-session price',
        ]}
        cta="Learn More"
        ctaHref="/semi-private-personal-training"
      />

      {/* 4. Active Aging */}
      <FeatureRow
        image={upload('2025/02/group-young-sporty-smiling-people-warrior-two-pose-scaled.jpg')}
        imageAlt="Active aging members training with a certified coach"
        eyebrow="Your Gateway to Active Aging"
        heading="Active Aging Program"
        paragraphs={[
          "Our commitment to exceptional customer service means we're with you every step of the way, making your fitness journey understandable and achievable.",
          "We're not just a gym — we're a community that stands by your side, delivering safe and effective programming designed specifically for the active aging population.",
        ]}
        bullets={[
          'Age-appropriate programming with no compromises on results',
          'Joint-safe exercises with built-in mobility work',
          'Coaches experienced with the active aging population',
          'InBody scans track progress in muscle mass and bone density',
          'Supportive community that keeps you motivated',
        ]}
        cta="Learn More"
        ctaHref="/active-aging"
        reverse
      />

      <StepsSection
        title="Three Steps to Your Fitness Journey"
        steps={steps}
        cta="Start My Fitness Journey"
        alt
      />

      <CtaBanner
        heading="Ready to Transform Your Body & Life?"
        subheading="Every journey starts with a single step — book your free consultation today."
        button="Book a Consultation"
        image={upload('2026/05/Formula-Fitness-03.2026-145-1-scaled.jpeg')}
      />

      <FindUs />
      <ContactSection />
      <ConsultCTA />
    </>
  )
}

function ArrowRight() {
  return (
    <svg className="ts-hub__card-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
