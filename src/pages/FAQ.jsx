import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import Accordion from '@components/ui/Accordion'
import ConsultCTA from '@components/sections/ConsultCTA'
import { faqCategories } from '@data/faq'
import './FAQ.css'

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
      />
      <div className="section">
        <div className="container faq-page">
          {faqCategories.map((cat) => (
            <section className="faq-cat" key={cat.category}>
              <h2 className="faq-cat__title">{cat.category}</h2>
              <Accordion items={cat.items} defaultOpen={-1} />
            </section>
          ))}
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
