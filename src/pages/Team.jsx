import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import { team } from '@data/team'
import './Team.css'

export default function Team() {
  return (
    <>
      <Seo
        title="Our Team"
        description="Meet the highly-skilled trainers and team behind Formula Fitness."
        path="/team-members-page"
      />
      <PageHero
        eyebrow="Our Team"
        title="Meet the Coaches"
        description="Highly-skilled trainers with the expertise to guide real transformation."
      />
      <div className="section">
        <div className="container grid-3">
          {team.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-card__photo">
                <span>{member.name}</span>
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
              <p className="team-card__bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
