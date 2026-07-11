import ConsultLink from '@components/ui/ConsultLink'
import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import WallOfLove from '@components/sections/WallOfLove'
import CtaBanner from '@components/sections/CtaBanner'
import FindUs from '@components/sections/FindUs'
import ConsultCTA from '@components/sections/ConsultCTA'
import { videoTestimonials, transformations, shortTestimonials } from '@data/testimonials'
import { upload } from '@utils/constants'
import './TestimonialsPage.css'

const reviews = [
  { id: 'cara', name: 'Cara T.', avatar: upload('2026/06/Cara-T.jpg'), text: 'I have been training at Formula Fitness for about three months now. First of all, the original intake was super informational. Jay set me up with my trainer Jules, let me just say, he could not have matched me better. Not only is Jules fun and positive. She kicks my butt with a smile. In just three months, I can notice the difference in my strength and energy. Every time you step in the door, everyone is very personable and friendly. I highly recommend checking out Formula Fitness, you will not regret it!' },
  { id: 'joyce', name: 'Joyce B.', avatar: upload('2026/06/Joyce-B.jpg'), text: "I've been training at Formula Fitness for a while now, and the progress I've made has been incredible. I'm stronger, my mobility has improved, and I've consistently beaten my yearly fitness test scores. One thing I appreciate most is how personal the training is. Every trainer tailors workouts to my goals and my body, and I love that I'm held accountable — not just with weigh-ins and measurements, but with lifestyle check-ins like nutrition, sleep, stress, and water intake. It's a very well-rounded approach." },
  { id: 'aethene', name: 'Aethene A.', avatar: upload('2026/06/Aethene-A.jpg'), text: "It was a great experience with Formula Fitness. I'm grateful to have been coached by Jason and Christy. They helped me gain gym maturity after attending their sessions. I gained confidence and learned to focus on strength going into the gym, progressing every time and being comfortable lifting heavier with correct form, especially RDLs! It's an awesome personalized gym. Definitely recommend to try them out!" },
  { id: 'john', name: 'John E.', avatar: upload('2026/06/John-E.jpg'), text: "I've been training at Formula Fitness for about three years now, and it's easily one of the best decisions I've made for my health. I came in with a knee injury and a shoulder injury, and both have fully recovered. Chris is outstanding. His background as both a physical therapist and a personal trainer really shows in how thoughtful and personalized his programs are. I've exceeded my original fitness goals and feel stronger, more stable, and more confident than I have in years." },
  { id: 'jas', name: 'Jas Y.', avatar: upload('2026/06/Jas-Y.jpg'), text: "I love it here so much! All the trainers are really nice and very helpful. I started in September and now it's December and I've lost already 29 pounds and I'm still going. Especially if you don't know where to start with your journey like me. They also help you with food too. It was great knowing that I can still eat foods I like and still be able to lose weight and get toned. I would highly recommend!" },
  { id: 'michaelo', name: 'Michael O.', avatar: upload('2026/06/Michael-O.jpg'), text: "Just to add to my prior review — I've now reached 212 pounds — my lowest weight in roughly 2 years. My total weight lost since January 2021 is 38.4 pounds (roughly 5 months). Seeing the scale at that number was a great way to wake up on my first full day at 36 years old! Tony Tran & Formula Fitness rock!" },
]

const names = ['Rachel', 'Chase', 'Anna', 'Erik', 'Marissa', 'Miguel', 'Dharshun', 'Yaska', 'Heather', 'Toby', 'Cathy', 'Daniel', 'Monica', 'Adriane', 'Alisha', 'CJ', 'Renata', 'Thomas', 'Michael', 'Daisy', 'Ruby', 'Angela', 'Levik', 'Lizzi']
const galleryImages = Array.from({ length: 15 }, (_, i) => upload(`2025/06/${15 + i}.png`))

// Compõe o mural (Wall of Love) a partir de conteúdo real já existente:
// depoimentos com foto (reviews) + Yelp curtos (shortTestimonials) + vídeos
// (videoTestimonials) + fotos de resultado (transformations). Nada inventado.
const FEATURED = new Set(['john', 'joyce'])
const textCards = [
  ...reviews.filter((r) => FEATURED.has(r.id)).map((r) => ({ ...r, type: 'text', featured: true })),
  ...reviews.filter((r) => !FEATURED.has(r.id)).map((r) => ({ ...r, type: 'text' })),
  ...shortTestimonials.map((s) => ({ ...s, type: 'text' })),
]
const mediaCards = []
videoTestimonials.forEach((v, i) => {
  mediaCards.push({ ...v, type: 'video' })
  if (transformations[i]) mediaCards.push({ ...transformations[i], type: 'result' })
})
// Intercala um card de mídia a cada 2 cards de texto, para distribuir vídeos/fotos.
const wallItems = []
let mi = 0
textCards.forEach((card, i) => {
  wallItems.push(card)
  if ((i + 1) % 2 === 0 && mi < mediaCards.length) wallItems.push(mediaCards[mi++])
})
while (mi < mediaCards.length) wallItems.push(mediaCards[mi++])

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="Real people, real results. Hear from Formula Fitness members about their transformations and experience."
        path="/testimonials"
      />
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Real People <span className="text-accent">Real Results</span>
          </>
        }
        description="Real people, real results. Hear from Formula Fitness members about their transformations and experience."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
        showCta
        cta="Book A Consultation"
      />

      <WallOfLove items={wallItems} />

      <section className="section section--alt">
        <div className="container">
          <SectionTitle title="Before & After" align="center" />
          <div className="tm-gallery">
            {names.map((name, i) => (
              <figure className="tm-gallery__item" key={name + i}>
                <img src={galleryImages[i % galleryImages.length]} alt={`${name}'s transformation`} loading="lazy" />
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Start Your Transformation!"
        subheading="Click the Button Below!"
        button="Get Started"
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />

      <section className="section tm-philosophy">
        <div className="container">
          <SectionTitle
            eyebrow="What Clients Say!"
            title="Fitness is not about being better than someone else, it's about being better than you used to be."
            align="center"
          />
          <p className="tm-philosophy__body">
            At Formula Fitness, we believe in unlocking your ultimate potential, turning every
            challenge into a victory and crafting the best version of you.
          </p>
          <div className="tm-philosophy__cta">
            <ConsultLink className="btn btn-primary">Book A Consultation</ConsultLink>
          </div>
        </div>
      </section>

      <FindUs />
      <ConsultCTA />
    </>
  )
}
