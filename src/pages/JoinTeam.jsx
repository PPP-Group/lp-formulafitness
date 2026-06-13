import { Link } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import { jobs } from '@data/jobs'
import { upload } from '@utils/constants'
import './JoinTeam.css'

export default function JoinTeam() {
  return (
    <>
      <Seo
        title="Join Our Team"
        description="Join the Formula Fitness team. We're hiring passionate, client-first trainers, instructors, and interns in Los Alamitos, CA."
        path="/join-our-team"
      />
      <PageHero
        eyebrow="Careers"
        title="Join Our Team"
        description="We're always looking for passionate, client-first coaches, instructors, and interns to grow with us."
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />
      <div className="section">
        <div className="container jobs">
          {jobs.map((job) => (
            <article className="job-card" key={job.slug}>
              <h2 className="job-card__title">{job.title}</h2>
              <p className="job-card__body">{job.summary}</p>
              <Link to={`/join-our-team/${job.slug}`} className="btn btn-outline job-card__cta">
                Read More
              </Link>
            </article>
          ))}
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
