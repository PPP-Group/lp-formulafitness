import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import Partners from '@components/sections/Partners'
import StepsSection from '@components/sections/StepsSection'
import FeatureRow from '@components/sections/FeatureRow'
import LocationBlock from '@components/sections/LocationBlock'
import CtaBanner from '@components/sections/CtaBanner'
import FindUs from '@components/sections/FindUs'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload } from '@utils/constants'

const steps = [
  { title: 'Movement Assessment', body: 'Every athlete starts here. We screen posture, mobility, and movement patterns to build a program that fits your child, not the other way around.' },
  { title: 'Posture & Alignment', body: 'Good movement starts with a strong foundation. We correct imbalances early so young athletes move better, stand taller, and stay injury-free.' },
  { title: 'Strength Training', body: 'Age-appropriate strength work that builds real, usable power. Safe progressions designed to support growing bodies, not overload them.' },
  { title: 'Conditioning', body: 'Stamina, speed, and work capacity that carries over to any sport. Kids learn how to push, recover, and compete at a higher level.' },
  { title: 'Functional Movement', body: 'Squat, hinge, push, pull, run, jump, land. We train the fundamental patterns every young athlete needs to move with confidence.' },
  { title: 'Total-Body Integration', body: 'Core, upper body, and lower body working as one. The foundation for every sport: soccer, baseball, basketball, dance, and beyond.' },
]

export default function YouthTraining() {
  return (
    <>
      <Seo
        title="Youth Training Program"
        description="Youth athletic development that builds better movers, stronger athletes, and more confident kids."
        path="/youth-training-program"
      />
      <PageHero
        eyebrow="Youth Training Program"
        title="Built Strong. Built Young. Built for Life."
        description="Youth athletic development that builds better movers, stronger athletes, and more confident kids."
        image={upload('2026/05/Formula-Fitness-03.2026-71-scaled.jpg')}
        showCta
        cta="Book a consultation"
      />

      <Partners />

      <StepsSection
        title="Six Steps to Your Fitness Journey"
        steps={steps}
        cta="Start My Fitness Journey"
        alt
      />

      <FeatureRow
        image={upload('2026/05/Formula-Fitness-03.2026-95-scaled.jpg')}
        imageAlt="Young athlete training with a coach"
        heading="Why Choose Youth Performance Training"
        paragraphs={[
          'Youth athletes are not small adults. Our program is built specifically for growing bodies, focusing on movement quality, strength development, and confidence in a safe and structured environment.',
        ]}
        bullets={[
          'Age appropriate training tailored to each stage of growth and development',
          'Coaches specialized in youth athletic development and long term performance',
          'Individual attention with real time coaching to build proper movement habits early',
          'Injury prevention focus through posture, mobility, and technique work',
          'Structured progressions that build strength, coordination, and confidence over time',
        ]}
        cta="Book a consultation"
      />

      <FeatureRow
        image={upload('2026/05/Formula-Fitness-03.2026-108-scaled.jpg')}
        imageAlt="Youth conditioning session"
        heading="Results Driven Youth Training"
        paragraphs={[
          'Every session is designed around how kids and teens actually develop. We combine movement training, strength work, and conditioning in a way that is safe, engaging, and effective for young athletes.',
        ]}
        bullets={[
          'Personalized programs based on age, skill level, and sport demands',
          'Coaching that teaches how to move, not just what to do',
          'Ongoing assessments to track growth, coordination, and strength development',
          'Positive, structured environment that builds discipline and confidence',
          'Support for both general athletic development and sport specific performance',
        ]}
        cta="Book a consultation"
        reverse
      />

      <LocationBlock />
      <CtaBanner
        heading="Start Your Transformation with Expert Coaching"
        subheading="Experience results-driven training built for you!"
        button="Book a consultation"
        image={upload('2026/05/Formula-Fitness-03.2026-79-scaled.jpg')}
      />
      <FindUs />
      <ConsultCTA />
    </>
  )
}
