import Seo from '@components/ui/Seo'
import PageHero from '@components/ui/PageHero'
import ConsultCTA from '@components/sections/ConsultCTA'
import { company } from '@utils/constants'
import './JoinTeam.css'

const jobs = [
  {
    title: 'Personal Trainer Wanted',
    body: 'PERSONAL TRAINER wanted. Formula Fitness, a highly acclaimed health & human performance center in Los Alamitos, CA is seeking a certified personal trainer with 3-5 years of experience. Required qualifications include a current nationally recognized personal training certification.',
  },
  {
    title: 'Semi-Private Trainer Wanted',
    body: 'Semi-Private Trainer wanted. Formula Fitness, a highly acclaimed health & human performance center is searching for a professional, motivated, personable, energetic, and well-organized Semi-Private Trainer. The best candidate must possess strong coaching qualifications.',
  },
  {
    title: 'Group Trainer Wanted',
    body: 'Group Instructor and Trainer. Formula Fitness is looking for an Elite Group Instructor and Trainer with a NCMTB or HHP certification and 2 years of experience. Candidates should be highly motivated, professional, and energetic.',
  },
  {
    title: 'Pilates Instructor Trainer Wanted',
    body: 'Formula Fitness is searching for an Elite Pilates Instructor with 2+ years of experience and a current Pilates certification. Candidates should be proficient at both mat class as well as equipment (reformer, Cadillac, and more).',
  },
  {
    title: 'Yoga Instructor Trainer Wanted',
    body: 'Formula Fitness is looking for a passionate and experienced Yoga Instructor to lead engaging and transformative classes. If you have a deep understanding of yoga principles and a commitment to helping members, we want to hear from you.',
  },
  {
    title: 'Internship Program',
    body: 'If you want to be the best, you have to learn from the best! The Formula Fitness internship program is designed to enhance the educational process of future fitness professionals by allowing you to see "behind the scenes" of a world-class training facility.',
  },
]

export default function JoinTeam() {
  const applyHref = `mailto:${company.email}?subject=Application%20%E2%80%94%20Formula%20Fitness`

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
      />
      <div className="section">
        <div className="container jobs">
          {jobs.map((job) => (
            <article className="job-card" key={job.title}>
              <h2 className="job-card__title">{job.title}</h2>
              <p className="job-card__body">{job.body}</p>
              <a href={applyHref} className="btn btn-outline job-card__cta">
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
      <ConsultCTA />
    </>
  )
}
