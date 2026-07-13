import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import SectionTitle from '@components/ui/SectionTitle'
import StepsSection from '@components/sections/StepsSection'
import FeatureRow from '@components/sections/FeatureRow'
import ConsultCTA from '@components/sections/ConsultCTA'
import { upload } from '@utils/constants'
import './ReferralsPage.css'

function Icon({ children }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

const steps = [
  { title: 'Submit the Referral', body: "Fill out the short form with your name and your friend's info. Takes less than a minute." },
  { title: 'Your Friend Signs Up', body: 'When your friend completes their consultation and joins a training program, your points get credited automatically.' },
  { title: 'Redeem Your Rewards', body: 'Use your points for free sessions, branded gear, or fitness tech. Your call.' },
]

const earn = [
  {
    points: '5 Points',
    title: 'Semi-Private Training Referral',
    body: 'When your friend signs up for a Semi-Private Training program, you earn 5 points toward free sessions, Formula Fitness gear, or fitness tech. It is an easy way to help someone start training while you get rewarded for spreading the word.',
    icon: <Icon><circle cx="9" cy="7" r="3" /><path d="M3 21v-1a5 5 0 0 1 6-4.9" /><circle cx="17" cy="9" r="2.5" /><path d="M13 21v-1a4 4 0 0 1 8 0v1" /></Icon>,
  },
  {
    points: '10 Points',
    title: 'Personal Training Referral',
    body: 'When your friend joins a Personal Training program, you earn 10 points toward bigger rewards. Help them get personalized coaching, accountability, and a clear plan while you build points toward sessions, gear, and more.',
    icon: <Icon><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></Icon>,
  },
  {
    points: 'Unlimited Referrals',
    title: 'Keep Earning More',
    body: 'There is no limit to how many friends you can refer. Points are credited after your friend completes signup for a training program, so the more people you bring into the Formula Fitness community, the more rewards you can unlock.',
    icon: <Icon><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.235-8-12.331-8-5.096 0-5.096 8 0 8 5.096 0 7.236-8 12.331-8z" /></Icon>,
  },
]

const tiers = [
  { points: '5 points', rewards: ['1 Free Semi-Private Session', 'Formula Fitness Cap', 'Formula Fitness T-Shirt'] },
  { points: '10 points', rewards: ['1 Free Personal Training Session', '3 Free Semi-Private Sessions'] },
  { points: '15 points', rewards: ['Formula Fitness Hoody'] },
  { points: '20 points', rewards: ['3 Free Personal Training Sessions', 'Myzone Heart Rate Monitor'], featured: true },
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
        image={upload('2025/04/2020-2-10_missusa_UTAH-206-2048x1365.jpg')}
        showCta
        cta="Refer a Friend"
        ctaVariant="referral"
      />

      <StepsSection title="3 Steps. That's It." steps={steps} alt />

      {/* How You Earn — cards com ícone em círculo azul */}
      <section className="section">
        <div className="container">
          <SectionTitle title="How You Earn" description="Bring a friend to Formula Fitness. When they join a training program, you earn points toward rewards." align="center" />
          <div className="ref-earn">
            {earn.map((e) => (
              <article className="ref-earn__card" key={e.title}>
                <span className="ref-earn__icon">{e.icon}</span>
                <span className="ref-earn__points">{e.points}</span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Redeem — lista de tiers + foto do estúdio */}
      <section className="section section--alt">
        <div className="container">
          <SectionTitle title="What You Can Redeem" align="center" />
          <div className="ref-redeem">
            <ul className="ref-redeem__list">
              {tiers.map((t) => (
                <li className={`ref-tier-row ${t.featured ? 'ref-tier-row--featured' : ''}`} key={t.points}>
                  <span className="ref-tier-row__points">{t.points}</span>
                  <span className="ref-tier-row__rewards">
                    {t.rewards.map((r) => (
                      <span className="ref-tier-row__reward" key={r}>{r}</span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
            <figure className="ref-redeem__photo ref-redeem__photo--cutout">
              <img
                src={upload('2023/07/Group-81236.png')}
                alt="Formula Fitness members training together"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* VIP Treatment — banner de largura total, fundo brand, texto branco */}
      <section className="ref-vip">
        <div className="container ref-vip__inner">
          <h2 className="ref-vip__title">Your Friend Gets the VIP Treatment</h2>
          <ul className="ref-vip__list">
            <li>When your friend comes in through your referral, they get a complimentary goal-mapping consultation and InBody scan, a $99 value, on the house.</li>
            <li>You get 2 bonus sessions credited to your account.</li>
            <li>And both of you get bragging rights for crushing goals together.</li>
          </ul>
        </div>
      </section>

      <FeatureRow
        image={upload('2025/05/DSCF1279-scaled.jpg')}
        imageAlt="Formula Fitness personal training consultation"
        heading="Ready to Earn?"
        paragraphs={[
          'Fill out the form and we will take care of the rest. Your friend gets a personal invitation from our team, and your points start adding up as soon as they join.',
          'Program starts June 1, 2026. Points are credited after the referred member completes signup for a training program. Either the current member or the new member can submit the referral form. Points are not transferable between members. Redemption is available for any reward at or above your available balance.',
        ]}
        cta="Refer a Friend"
        ctaVariant="referral"
      />

      <ConsultCTA />
    </>
  )
}
