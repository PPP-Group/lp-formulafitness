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
import ConsultCTA from '@components/sections/ConsultCTA'
import { videoTestimonials } from '@data/testimonials'
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

const programs = [
  { title: 'Posture Perfection', image: upload('2025/02/4-Posture.jpg') },
  { title: 'Muscle Harmony', image: upload('2025/02/5-Muscle-scaled.jpg') },
  { title: 'Fat Reduction', image: upload('2025/02/6-Drop-Fat.png') },
  { title: 'Tone and Strengthen', image: upload('2026/06/download.jpeg') },
  { title: 'Heart Health', image: upload('2026/06/download-1.jpeg') },
  { title: 'Flexibility Focus', image: upload('2025/02/9-Flexibility-scaled.jpg') },
]

// Ícone com atributos SVG padronizados (traço, tamanho, cor herdada).
function Icon({ children }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

// "What is Active Aging?" — 5 palavras-chave (conteúdo original) + ícone.
const aaValues = [
  { word: 'Energy', icon: <Icon><path d="M13 3L5 13h5l-1 8 8-10h-5l1-8z" /></Icon> },
  { word: 'Longevity', icon: <Icon><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z" /></Icon> },
  { word: 'Life', icon: <Icon><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" /></Icon> },
  { word: 'Less Limitation', icon: <Icon><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></Icon> },
  { word: 'Strong', icon: <Icon><path d="M4 8v8M7 6v12M17 6v12M20 8v8M7 12h10" /></Icon> },
]

// Ícones dos 8 cards de "What You Get" (mesma ordem do array `inclusions`).
const inclusionIcons = [
  <Icon key="i0"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></Icon>,
  <Icon key="i1"><path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 1 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z" /></Icon>,
  <Icon key="i2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></Icon>,
  <Icon key="i3"><circle cx="12" cy="7" r="3.2" /><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /></Icon>,
  <Icon key="i4"><path d="M4 20V11M10 20V5M16 20v-7M22 20H2" /></Icon>,
  <Icon key="i5"><path d="M21 12a9 9 0 1 1-3-6.7L21 8" /><path d="M21 3v5h-5" /></Icon>,
  <Icon key="i6"><path d="M4 3v7a2 2 0 0 0 2 2 2 2 0 0 0 2-2V3M6 12v9M18 3c-2 0-3 2-3 5s1 4 3 4v9" /></Icon>,
  <Icon key="i7"><path d="M10.5 3.5a4.95 4.95 0 0 1 7 7l-7 7a4.95 4.95 0 0 1-7-7l7-7z" /><path d="M8.5 8.5l7 7" /></Icon>,
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
        image={upload('2026/06/download.jpeg')}
        showCta
        cta="Join Us Today"
      />

      <section className="section aa-values">
        <div className="container">
          <SectionTitle title="What is Active Aging?" align="center" />
          <ul className="aa-values__grid">
            {aaValues.map(({ word, icon }) => (
              <li className="aa-value-card" key={word}>
                <span className="aa-value-card__icon">{icon}</span>
                <span className="aa-value-card__word">{word}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FeatureRow
        image={upload('2026/06/Domaine-Artemis.jpeg')}
        imageAlt="Active aging members training on treadmills"
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
            {inclusions.map((item, idx) => {
              const match = item.match(/^(.*?)\s*\((.*)\)\s*$/)
              const title = match ? match[1] : item
              const desc = match ? match[2] : ''
              return (
                <li className="aa-inclusion-card" key={item}>
                  <span className="aa-inclusion-card__icon">{inclusionIcons[idx % inclusionIcons.length]}</span>
                  <h3 className="aa-inclusion-card__title">{title}</h3>
                  {desc && <p className="aa-inclusion-card__desc">{desc}</p>}
                </li>
              )
            })}
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
        image={upload('2026/06/At-Harbor-Oaks-Golden-Years-we-offer-gentle-fitness-exercises-specifically-tailored-for-elderly-ind.jpeg')}
        imageAlt="Active aging members lifting dumbbells together"
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

      <FindUs />
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
