import ServicePage from './ServicePage'

export default function JoinTeam() {
  return (
    <ServicePage
      path="/join-our-team"
      seoTitle="Join Our Team"
      seoDescription="Become a trainer at Formula Fitness. We're looking for passionate coaches who put clients first."
      eyebrow="Careers"
      title="Join Our Team"
      intro="We're always looking for passionate, client-first coaches to grow with us."
      highlights={[
        { label: 'Grow', text: 'Continuing education & mentorship' },
        { label: 'Impact', text: 'Change lives every single day' },
        { label: 'Community', text: 'A team that feels like family' },
      ]}
      sections={[
        {
          heading: "Let's Build Something Together",
          paragraphs: [
            'If you are a certified trainer who believes in sustainable, whole-health coaching, we would love to hear from you.',
            'Reach out through the form below and tell us about yourself — we will be in touch.',
          ],
        },
      ]}
    />
  )
}
