import { useState, useCallback } from 'react'
import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import FeatureRow from '@components/sections/FeatureRow'
import CtaBanner from '@components/sections/CtaBanner'
import Results from '@components/sections/Results'
import VideoCard from '@components/ui/VideoCard'
import Modal from '@components/ui/Modal'
import FindUs from '@components/sections/FindUs'
import ContactSection from '@components/sections/ContactSection'
import ConsultCTA from '@components/sections/ConsultCTA'
import { videoTestimonials, resultsGallery } from '@data/testimonials'
import { upload } from '@utils/constants'
import './ActiveAgingPage.css'

const inclusions = [
  'Personalized Workout Routines (All Fitness Levels)',
  'Heart Rate Monitoring (Safe Intensity)',
  'Visceral Fat Testing (Fat Around Your Organs)',
  'Total Body Fat Testing (98% Accuracy)',
  'Lean Muscle Mass Testing (98% Accuracy)',
  'Recovery Sessions at the End of Each Workout (Stretch, Massage, and Compression)',
  'Custom Nutrition Program (Asian, American, Indian, Mexican, Paleo, and Vegetarian Meal Plans)',
  'Recommended Supplements (Natural, Safe, Heart Health, Joints, Energy, Sleep)',
]

const focus = ['Injury Prevention', 'Proper Form', 'Progressive Attitude', 'Results Driven', 'Positive Experience Driven']

const programs = [
  { title: 'Posture Perfection', image: upload('2025/02/4-Posture.jpg') },
  { title: 'Muscle Harmony', image: upload('2025/02/5-Muscle-scaled.jpg') },
  { title: 'Fat Reduction', image: upload('2025/02/6-Drop-Fat.png') },
  { title: 'Tone and Strengthen', image: upload('2026/06/download.jpeg') },
  { title: 'Heart Health', image: upload('2026/06/download-1.jpeg') },
  { title: 'Flexibility Focus', image: upload('2025/02/9-Flexibility-scaled.jpg') },
]

const gallery = [
  upload('2023/11/services-landing.png'),
  upload('2023/11/landing-before-afer.png'),
  resultsGallery[0].image,
  resultsGallery[3].image,
  resultsGallery[5].image,
]

export default function ActiveAging() {
  const [active, setActive] = useState(null)
  const openVideo = useCallback((videoId, name) => setActive({ videoId, name }), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <Seo
        title="Active Aging Program"
        description="Your gateway to active aging. Fitness after 50 that prioritizes your well-being, balance, and strength with a holistic, client-first approach."
        path="/active-aging"
      />
      <PageHero
        eyebrow="Welcome to Formula Fitness"
        title="Your Gateway to Active Aging"
        description="Formula Fitness takes an innovative, client-first approach to health and wellness. It’s more than personal training. We focus on your whole health: stress management, sleep routines, diet/nutrition, and fitness goals."
        image={upload('2025/02/group-young-sporty-smiling-people-warrior-two-pose-scaled.jpg')}
        showCta
        cta="Join Us Today"
      />

      <section className="section aa-values">
        <div className="container">
          <span className="eyebrow">what is active aging?</span>
          <ul className="aa-values__list">
            {['Energy', 'Longevity', 'Life', 'Less Limitation', 'Strong'].map((word) => (
              <li key={word} className="aa-values__chip">{word}</li>
            ))}
          </ul>
        </div>
      </section>

      <FeatureRow
        image={upload('2024/01/Group-81235.jpg')}
        imageAlt="Active aging member training"
        eyebrow="about US"
        heading="Fitness After 50 Is About Well-Being, Balance, and Strength"
        mediaClassName="aa-about-media"
        paragraphs={[
          "At Formula Fitness, we understand that fitness after 50 isn't just about staying active; it's about embracing a lifestyle that prioritizes your well-being, balance, and strength.",
          "Our holistic approach begins with a comprehensive assessment that lays the foundation for a journey tailored to your body's needs.",
        ]}
        cta="Get Started"
      />

      <CtaBanner
        heading="Let's Get Started"
        subheading="Contact us for a personalized consultation and see how we can tailor a program just for you."
        button="Book a consultation"
        image={upload('2026/05/Formula-Fitness-03.2026-145-1-scaled.jpeg')}
      />

      <section className="section section--alt">
        <div className="container">
          <SectionTitle eyebrow="included in every active aging program" title="What You Get" align="center" />
          <ul className="aa-inclusions">
            {inclusions.map((i) => (
              <li key={i}>
                <Check />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="what we will focus on" title="Our Focus" align="center" />
          <ul className="aa-focus">
            {focus.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle eyebrow="our programs" title="Rediscover Your Vitality" align="center" description="Our programs are designed with a sustainable approach to revitalize your routine:" />
          <div className="aa-programs">
            {programs.map((p) => (
              <article className="aa-program" key={p.title}>
                <div className="aa-program__media">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="aa-program__body">
                  <h3>{p.title}</h3>
                  <p>Correcting imbalances to ensure every muscle plays its part beautifully.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FeatureRow
        image={upload('2025/05/DSCF2558-scaled.jpg')}
        imageAlt="Service that shines"
        eyebrow="our services"
        heading="Service That Shines"
        paragraphs={[
          "Our commitment to exceptional customer service means we're with you every step of the way, making your fitness journey understandable and achievable. We're not just a gym; we're a community that stands by your side.",
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonials"
            title="Your Success, Our Pride"
            description="Hear from our members who have transformed their lives with us. Their stories are not just our testimonials; they're our badges of honor."
            align="center"
          />
          <div className="grid-3">
            {videoTestimonials.map((item) => (
              <VideoCard
                key={item.id}
                videoId={item.videoId}
                thumb={item.thumb}
                name={item.name}
                quote={item.quote}
                onPlay={openVideo}
              />
            ))}
          </div>
        </div>
      </section>

      <Results />

      <section className="section section--alt">
        <div className="container">
          <SectionTitle eyebrow="our social circle" title="Your Journey at a Glance" description="Take a sneak peek into our studio and witness the transformation in action." align="center" />
          <div className="aa-gallery">
            {gallery.map((src, i) => (
              <div className="aa-gallery__item" key={i}>
                <img src={src} alt="Formula Fitness studio moment" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FindUs />
      <ContactSection />
      <ConsultCTA />

      <Modal open={!!active} onClose={close} label={active?.name}>
        {active && (
          <>
            <div className="modal__video">
              <iframe
                src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&rel=0`}
                title={active.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              className="video-fallback"
              href={`https://www.youtube.com/watch?v=${active.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              Trouble viewing? Watch on YouTube ↗
            </a>
          </>
        )}
      </Modal>
    </>
  )
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
