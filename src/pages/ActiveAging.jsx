import ServicePage from './ServicePage'

export default function ActiveAging() {
  return (
    <ServicePage
      path="/active-aging"
      seoTitle="Active Aging Program"
      seoDescription="Stay strong, mobile, and independent with the Active Aging program at Formula Fitness."
      eyebrow="Active Aging Program"
      title="Your Gateway to Active Aging"
      intro="We're not just a gym; we're a community that stands by your side, making your fitness journey understandable and achievable at every age."
      highlights={[
        { label: 'Strength', text: 'Build & maintain functional strength' },
        { label: 'Balance', text: 'Improve stability and confidence' },
        { label: 'Support', text: 'Coaches with you every step' },
      ]}
      sections={[
        {
          heading: 'Fitness for Every Stage of Life',
          paragraphs: [
            'Our commitment to exceptional customer service means we are with you every step of the way. The Active Aging program is designed to keep you strong, mobile, and independent.',
            'Whether you are returning to exercise or maintaining an active lifestyle, our coaches tailor every session to meet you where you are.',
          ],
        },
      ]}
    />
  )
}
