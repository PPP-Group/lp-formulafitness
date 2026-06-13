import { useParams, Link, Navigate } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import FindUs from '@components/sections/FindUs'
import ContactSection from '@components/sections/ContactSection'
import ConsultCTA from '@components/sections/ConsultCTA'
import { getMember } from '@data/team'
import './BioPage.css'

export default function BioPage() {
  const { slug } = useParams()
  const member = getMember(slug)

  if (!member) return <Navigate to="/team-members-page" replace />

  return (
    <>
      <Seo
        title={`${member.name} — ${member.role}`}
        description={`Meet ${member.name}, ${member.role} at Formula Fitness.`}
        path={`/bio/${member.slug}`}
      />
      <section className="bio">
        <div className="container bio__top">
          <div className="bio__photo">
            <img src={member.photo} alt={member.name} />
          </div>
          <div className="bio__intro">
            <span className="eyebrow">Meet the Team</span>
            <h1 className="bio__name">{member.name}</h1>
            <p className="bio__role">{member.role}</p>
          </div>
        </div>

        <div className="container bio__body">
          <div className="bio__main">
            {member.sections.map((s) => (
              <div className="bio__section" key={s.heading}>
                <h2>{s.heading}</h2>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <aside className="bio__aside">
            {member.specialties.length > 0 && (
              <div className="bio__card">
                <h3>Specialties</h3>
                <ul>
                  {member.specialties.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            )}
            {member.certifications.length > 0 && (
              <div className="bio__card">
                <h3>Certifications</h3>
                <ul>
                  {member.certifications.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            )}
            <Link to="/team-members-page" className="btn-link bio__back">
              ‹ Back to team
            </Link>
          </aside>
        </div>
      </section>

      <FindUs />
      <ContactSection />
      <ConsultCTA />
    </>
  )
}
