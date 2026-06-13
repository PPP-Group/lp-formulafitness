import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import ContactSection from '@components/sections/ContactSection'
import FindUs from '@components/sections/FindUs'
import { team } from '@data/team'
import { upload } from '@utils/constants'
import './Team.css'

export default function Team() {
  return (
    <>
      <Seo
        title="Our Team"
        description="Meet the highly-skilled trainers and team behind Formula Fitness — here to serve you with expertise, commitment, and passion."
        path="/team-members-page"
      />
      <PageHero
        eyebrow="Meet the Team"
        title="Here To Serve You"
        description="Formula Fitness has distinguished itself as a premier health and wellness center, thanks to our innovative, client-first approach and our exceptional, dedicated team. What truly sets us apart are the individuals below—their extensive expertise, unwavering commitment, and passion for transforming the health and well-being of our clients and community."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />
      <div className="section">
        <div className="container grid-3 team__grid">
          {team.map((member) => (
            <article className="team-card" key={member.slug}>
              <div className="team-card__photo">
                <img src={member.photo} alt={member.name} loading="lazy" />
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
              <Link to={`/bio/${member.slug}`} className="btn-link team-card__bio-link">
                Read bio
                <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
      <FindUs />
      <ContactSection />
      <ConsultCTA />
    </>
  )
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
