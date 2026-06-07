import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import QuoteCarousel from '@components/ui/QuoteCarousel'
import CtaBanner from '@components/sections/CtaBanner'
import FindUs from '@components/sections/FindUs'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload } from '@utils/constants'
import './TestimonialsPage.css'

const reviews = [
  { id: 'cara', name: 'Cara T.', text: 'I have been training at Formula Fitness for about three months now. First of all, the original intake was super informational. Jay set me up with my trainer Jules, let me just say, he could not have matched me better. Not only is Jules fun and positive. She kicks my butt with a smile. In just three months, I can notice the difference in my strength and energy. Every time you step in the door, everyone is very personable and friendly. I highly recommend checking out Formula Fitness, you will not regret it!' },
  { id: 'joyce', name: 'Joyce B.', text: "I've been training at Formula Fitness for a while now, and the progress I've made has been incredible. I'm stronger, my mobility has improved, and I've consistently beaten my yearly fitness test scores. One thing I appreciate most is how personal the training is. Every trainer tailors workouts to my goals and my body, and I love that I'm held accountable — not just with weigh-ins and measurements, but with lifestyle check-ins like nutrition, sleep, stress, and water intake. It's a very well-rounded approach." },
  { id: 'aethene', name: 'Aethene A.', text: "It was a great experience with Formula Fitness. I'm grateful to have been coached by Jason and Christy. They helped me gain gym maturity after attending their sessions. I gained confidence and learned to focus on strength going into the gym, progressing every time and being comfortable lifting heavier with correct form, especially RDLs! It's an awesome personalized gym. Definitely recommend to try them out!" },
  { id: 'john', name: 'John E.', text: "I've been training at Formula Fitness for about three years now, and it's easily one of the best decisions I've made for my health. I came in with a knee injury and a shoulder injury, and both have fully recovered. Chris is outstanding. His background as both a physical therapist and a personal trainer really shows in how thoughtful and personalized his programs are. I've exceeded my original fitness goals and feel stronger, more stable, and more confident than I have in years." },
  { id: 'jas', name: 'Jas Y.', text: "I love it here so much! All the trainers are really nice and very helpful. I started in September and now it's December and I've lost already 29 pounds and I'm still going. Especially if you don't know where to start with your journey like me. They also help you with food too. It was great knowing that I can still eat foods I like and still be able to lose weight and get toned. I would highly recommend!" },
  { id: 'michaelo', name: 'Michael O.', text: "Just to add to my prior review — I've now reached 212 pounds — my lowest weight in roughly 2 years. My total weight lost since January 2021 is 38.4 pounds (roughly 5 months). Seeing the scale at that number was a great way to wake up on my first full day at 36 years old! Tony Tran & Formula Fitness rock!" },
]

const names = ['Rachel', 'Chase', 'Anna', 'Erik', 'Marissa', 'Miguel', 'Dharshun', 'Yaska', 'Heather', 'Toby', 'Cathy', 'Daniel', 'Monica', 'Adriane', 'Alisha', 'CJ', 'Renata', 'Thomas', 'Michael', 'Daisy', 'Ruby', 'Angela', 'Levik', 'Lizzi']
const galleryImages = Array.from({ length: 15 }, (_, i) => upload(`2025/06/${15 + i}.png`))

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="Real people, real results. Hear from Formula Fitness members about their transformations and experience."
        path="/testimonials"
      />
      <PageHero eyebrow="Testimonials" title="Real People Real Results" />

      <QuoteCarousel items={reviews} title="What Clients Say!" eyebrow="Testimonials" />

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
        image={upload('2026/05/Formula-Fitness-03.2026-79-scaled.jpg')}
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
            <a href="#consult" className="btn btn-primary">Book A Consultation</a>
          </div>
        </div>
      </section>

      <FindUs />
      <ConsultCTA />
    </>
  )
}
