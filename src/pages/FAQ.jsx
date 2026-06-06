import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import Accordion from '@components/ui/Accordion'
import ConsultCTA from '@components/sections/ConsultCTA'

const faqs = [
  {
    title: 'Do I need to be fit before I start?',
    body: 'Not at all. Our programs are built around your current fitness level. Whether you are a complete beginner or a seasoned athlete, your coach meets you where you are.',
  },
  {
    title: 'What is the difference between private and semi-private training?',
    body: 'Private training is one-on-one with a dedicated coach. Semi-private keeps your individualized program while training alongside a small group of 2–4 for added energy and value.',
  },
  {
    title: 'What is the InBody 580 scan?',
    body: 'It is a clinically validated body composition analysis that measures muscle, fat, and hydration in under a minute, giving your coach the data to build a smarter plan.',
  },
  {
    title: 'How do I get started?',
    body: 'Book a consultation through the form on our site or give us a call. We will discuss your goals and recommend the right program for you.',
  },
  {
    title: 'Where are you located?',
    body: 'We are located at 3971 Ball Rd, Los Alamitos, CA 90720. We are open Monday–Friday 5am–10pm and Saturday–Sunday 6am–6pm.',
  },
]

export default function FAQ() {
  return (
    <>
      <Seo
        title="FAQs"
        description="Answers to common questions about training, programs, and getting started at Formula Fitness."
        path="/faq"
      />
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        description="Everything you need to know before you get started."
      />
      <div className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <Accordion items={faqs} defaultOpen={-1} />
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
