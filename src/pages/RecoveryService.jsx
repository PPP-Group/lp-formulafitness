import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import FeatureRow from '@components/sections/FeatureRow'
import FindUs from '@components/sections/FindUs'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload } from '@utils/constants'

export default function RecoveryService() {
  return (
    <>
      <Seo
        title="Recovery Service"
        description="Elevate your workout with built-in recovery. Integrated techniques reduce injury risk, speed muscle repair, and keep you fresh and energized."
        path="/recovery-service"
      />
      <PageHero
        eyebrow="Elevate Your Workout with Built-In Recovery"
        title="Recovery Services"
        description="Experience a new level of training where recovery isn’t an afterthought—it’s part of every session. Our integrated techniques help reduce injury risk, speed up muscle repair, and keep you feeling fresh and energized. By easing soreness and boosting performance, you’ll bounce back faster and train more effectively."
        image={upload('2023/06/Formula-Fitness-03.2026-142-scaled.jpg')}
        showCta
        cta="Book A Consultation"
      />

      <FeatureRow
        image={upload('2023/10/Group-81226.png')}
        imageAlt="Recovery methods at Formula Fitness"
        eyebrow="Recovery"
        heading="Recovery Methods"
        bullets={[
          'Dual Vibration guns — strong or gentle mechanical massage',
          'IASTM Blades — improve range of motion with moderate pressure',
          'Assisted Stretches — let a fitness pro push or pull your body into great posture',
          'Trigger Pointing with Roller — get firm pressure to your muscles',
          'Normatec Professional Compression — gentle to firm pressure to enhance your blood circulation',
        ]}
      />

      <FeatureRow
        image={upload('2023/10/DSCF2536-scaled-1-e1778628191463.jpg')}
        imageAlt="A member feeling refreshed after recovery"
        heading="Feel Better Now"
        paragraphs={[
          'Experience the rejuvenating power of our recovery services, designed to heal, refresh, and revitalize your body.',
          'Right now people are sitting more than ever due to being stuck at home and the seasons changing. Mobility through guided stretching and corrective exercises can be a real game changer for pain in thoracic (upper) or lumbar (lower) back areas. Sitting causes the various tissues of the body to tighten and require release. Loosen up with our recovery services.',
        ]}
        bullets={[
          'Optimal muscle growth & repair',
          'Reduce injury risk',
          'Decreased muscle soreness',
          'Boost immune function',
          'Improve flexibility & mobility',
        ]}
        cta="Book A Consultation"
        reverse
      />

      <FeatureRow
        image={upload('2023/07/Group-81234.png')}
        imageAlt="Assisted stretching session"
        heading="Experience Assisted Stretching at Every Session"
        paragraphs={[
          'All members enjoy a targeted stretch at the end of each personal or semi-private training session. Our guided techniques focus on the muscles that truly need attention, helping improve flexibility, correct posture, and reduce tension. Leave each workout feeling more balanced, recharged, and ready for your next challenge.',
        ]}
        cta="Book A Consultation"
      />

      <FeatureRow
        image={upload('2023/10/Group-81239.png')}
        imageAlt="Move freely, live boldly"
        heading="Move Freely, Live Boldly: Increase Mobility and Decrease Pain with Us"
        paragraphs={[
          'Boosted mobility and reduced pain paves the way for a life of boundless movement and freedom.',
        ]}
        cta="Book A Consultation"
        reverse
      />

      <FindUs />
      <ConsultCTA />
    </>
  )
}
