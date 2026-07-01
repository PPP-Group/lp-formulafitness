import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import Accordion from '@components/ui/Accordion'
import ConsultCTA from '@components/sections/ConsultCTA'
import { faqCategories } from '@data/faq'
import { upload } from '@utils/constants'
import './FAQ.css'

// Divide as 9 categorias em 2 colunas equilibradas:
// Esquerda: 5 categorias (Getting Started → Results & Progress Tracking)
// Direita:  4 categorias (Scheduling → Nutrition, Recovery & Extras)
const LEFT_COUNT = 5
const leftCats  = faqCategories.slice(0, LEFT_COUNT)
const rightCats = faqCategories.slice(LEFT_COUNT)

function FaqCategory({ cat }) {
  return (
    <section className="faq-cat" key={cat.category}>
      <h2 className="faq-cat__title">{cat.category}</h2>
      <Accordion items={cat.items} defaultOpen={-1} />
    </section>
  )
}

export default function FAQ() {
  return (
    <>
      <Seo
        title="FAQs"
        description="Answers to common questions about training, programs, pricing, scheduling, and getting started at Formula Fitness."
        path="/faq"
      />
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Everything you need to know before you get started."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />
      <div className="section">
        <div className="container faq-page">
          <div className="faq-col">
            {leftCats.map((cat) => <FaqCategory key={cat.category} cat={cat} />)}
          </div>
          <div className="faq-col">
            {rightCats.map((cat) => <FaqCategory key={cat.category} cat={cat} />)}
          </div>
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
