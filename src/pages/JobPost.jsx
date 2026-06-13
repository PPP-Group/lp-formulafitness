import { useParams, Link, Navigate } from 'react-router-dom'
import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import { getJob } from '@data/jobs'
import { company, upload } from '@utils/constants'
import './JobPost.css'

export default function JobPost() {
  const { slug } = useParams()
  const job = getJob(slug)

  if (!job) return <Navigate to="/join-our-team" replace />

  const applyHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Application — ${job.title}`
  )}`

  return (
    <>
      <Seo
        title={`${job.title} — Careers`}
        description={job.summary}
        path={`/join-our-team/${job.slug}`}
      />
      <PageHero
        eyebrow="Careers"
        title={job.title}
        description={job.intro}
        image={upload('2026/05/Formula-Fitness-03.2026-152-scaled.jpg')}
      />

      <section className="section">
        <div className="container job-post">
          <div className="job-post__main">
            {job.sections.map((sec) => (
              <div className="job-post__section" key={sec.heading}>
                <h2>{sec.heading}</h2>
                <ul>
                  {sec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="job-post__aside">
            <div className="job-post__card">
              <h3>How to Apply</h3>
              <p>
                Send a detailed cover letter and resume to Tony Tran, Owner, at{' '}
                <a href={`mailto:${company.email}`}>{company.email}</a>.
              </p>
              <a href={applyHref} className="btn btn-primary job-post__apply">
                Apply Now
              </a>
              <p className="job-post__location">{company.address}</p>
            </div>
            <Link to="/join-our-team" className="btn-link job-post__back">
              ‹ Back to careers
            </Link>
          </aside>
        </div>
      </section>

      <ConsultCTA />
    </>
  )
}
