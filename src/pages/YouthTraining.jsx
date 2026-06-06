import ServicePage from './ServicePage'

export default function YouthTraining() {
  return (
    <ServicePage
      path="/youth-training-program"
      seoTitle="Youth Training Program"
      seoDescription="Build strong foundations for young athletes with safe, age-appropriate coaching at Formula Fitness."
      eyebrow="Youth Training Program"
      title="Strong Foundations for Young Athletes"
      intro="Age-appropriate coaching that builds strength, coordination, and confidence in a safe, supportive environment."
      highlights={[
        { label: 'Safe', text: 'Technique-first, age-appropriate' },
        { label: 'Confident', text: 'Build self-esteem through movement' },
        { label: 'Athletic', text: 'Speed, agility, and coordination' },
      ]}
      sections={[
        {
          heading: 'Building Lifelong Athletes',
          paragraphs: [
            'Our youth program focuses on movement quality, coordination, and confidence — laying the groundwork for a lifetime of healthy activity.',
            'Coaches keep sessions fun and engaging while teaching the fundamentals of safe, effective training.',
          ],
        },
      ]}
    />
  )
}
