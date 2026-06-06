import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import VideoTestimonials from '@components/sections/VideoTestimonials'
import Reviews from '@components/sections/Reviews'
import Results from '@components/sections/Results'
import ConsultCTA from '@components/sections/ConsultCTA'

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="Real stories and results from the Formula Fitness community."
        path="/testimonials"
      />
      <PageHero
        eyebrow="Testimonials"
        title="Personal Training, Personal Triumphs"
        description="Hear from the members who made Formula Fitness part of their journey."
      />
      <VideoTestimonials />
      <Reviews />
      <Results />
      <ConsultCTA />
    </>
  )
}
