import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import StepsSection from '@components/sections/StepsSection'
import LeadForm from '@components/sections/LeadForm'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload } from '@utils/constants'
import './ReferralsPage.css'

const steps = [
  { title: 'Submit the Referral', body: "Fill out the short form below with your name and your friend's info. Takes less than a minute." },
  { title: 'Your Friend Signs Up', body: 'When your friend completes their consultation and joins a training program, your points get credited automatically.' },
  { title: 'Redeem Your Rewards', body: 'Use your points for free sessions, branded gear, or fitness tech. Your call.' },
]

const earn = [
  { points: '5 Points', title: 'Semi-Private Training Referral', body: 'When your friend signs up for a Semi-Private Training program, you earn 5 points toward free sessions, Formula Fitness gear, or fitness tech. It is an easy way to help someone start training while you get rewarded for spreading the word.' },
  { points: '10 Points', title: 'Personal Training Referral', body: 'When your friend joins a Personal Training program, you earn 10 points toward bigger rewards. Help them get personalized coaching, accountability, and a clear plan while you build points toward sessions, gear, and more.' },
  { points: 'Unlimited Referrals', title: 'Keep Earning More', body: 'There is no limit to how many friends you can refer. Points are credited after your friend completes signup for a training program, so the more people you bring into the Formula Fitness community, the more rewards you can unlock.' },
]

const tiers = [
  { points: 'Tier 1: 5 points', rewards: ['1 Free Semi-Private Session', 'Formula Fitness Cap', 'Formula Fitness T-Shirt'] },
  { points: 'Tier 2: 10 points', rewards: ['1 Free Personal Training Session', '3 Free Semi-Private Sessions'] },
  { points: 'Tier 3: 15 points', rewards: ['Formula Fitness Hoody'] },
  { points: 'Tier 4: 20 points', rewards: ['3 Free Personal Training Sessions', 'Myzone Heart Rate Monitor'] },
]

export default function Referrals() {
  return (
    <>
      <Seo
        title="Referral Program"
        description="Refer a friend to Formula Fitness and earn points toward free sessions, gear, and tech. The more friends you bring, the more you earn."
        path="/referrals"
      />
      <PageHero
        eyebrow="Referral Program"
        title="Friends Don't Let Friends Train Alone"
        description="Refer a friend to Formula Fitness and earn points toward free sessions, gear, and tech. The more friends you bring, the more you earn."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
        showCta
        cta="Refer a Friend"
      />

      <StepsSection title="3 Steps. That's It." steps={steps} alt />

      <section className="section">
        <div className="container">
          <SectionTitle title="How You Earn" description="Bring a friend to Formula Fitness. When they join a training program, you earn points toward rewards." align="center" />
          <div className="ref-earn">
            {earn.map((e) => (
              <article className="ref-earn__card" key={e.title}>
                <span className="ref-earn__points">{e.points}</span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle title="What You Can Redeem" align="center" />
          <div className="ref-tiers">
            {tiers.map((t) => (
              <article className="ref-tier" key={t.points}>
                <h3>{t.points}</h3>
                <ul>
                  {t.rewards.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ref-vip">
          <SectionTitle title="Your Friend Gets the VIP Treatment" align="center" />
          <ul className="ref-vip__list">
            <li>When your friend comes in through your referral, they get a complimentary goal-mapping consultation and InBody scan, a $99 value, on the house.</li>
            <li>You get 2 bonus sessions credited to your account.</li>
            <li>And both of you get bragging rights for crushing goals together.</li>
          </ul>
        </div>
      </section>

      <section className="section section--alt" id="consult">
        <div className="container ref-form">
          <div className="ref-form__info">
            <figure className="ref-form__photo">
              <img
                src={upload('2025/05/DSCF1279-scaled.jpg')}
                alt="Formula Fitness personal training consultation"
                loading="lazy"
              />
            </figure>
            <h2 className="section-title">Ready to Earn?</h2>
            <p className="section-subtitle">
              Fill out the form below and we will take care of the rest. Your friend gets a personal
              invitation from our team, and your points start adding up as soon as they join.
            </p>
            <p className="ref-form__fine">
              Program starts June 1, 2026. Points are credited after the referred member completes
              signup for a training program. Either the current member or the new member can submit
              the referral form. Points are not transferable between members. Redemption is available
              for any reward at or above your available balance.
            </p>
          </div>
          <LeadForm title="Refer a Friend" buttonLabel="Refer a Friend" />
        </div>
      </section>

      <ConsultCTA />
    </>
  )
}
