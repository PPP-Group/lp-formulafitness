import Seo from '@components/ui/Seo'
import Hero from '@components/sections/Hero'
import Partners from '@components/sections/Partners'
import About from '@components/sections/About'
import Programs from '@components/sections/Programs'
import InBody from '@components/sections/InBody'
import PersonalTriumphs from '@components/sections/PersonalTriumphs'
import ActiveAging from '@components/sections/ActiveAging'
import VideoTestimonials from '@components/sections/VideoTestimonials'
import BMISection from '@components/sections/BMISection'
import Reviews from '@components/sections/Reviews'
import Results from '@components/sections/Results'
import FindUs from '@components/sections/FindUs'
import ConsultCTA from '@components/sections/ConsultCTA'

export default function Home() {
  return (
    <>
      <Seo
        title="Your Path to Fitness Excellence"
        description="Join Formula Fitness for a transformative fitness journey. Elevate your well-being with expert guidance and a supportive community."
        path="/"
      />
      <Hero />
      <Partners />
      <About />
      <Programs />
      <InBody />
      <PersonalTriumphs />
      <ActiveAging />
      <VideoTestimonials />
      <BMISection />
      <Reviews />
      <Results />
      <FindUs />
      <ConsultCTA />
    </>
  )
}
