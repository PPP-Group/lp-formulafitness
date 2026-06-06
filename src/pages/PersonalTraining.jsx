import ServicePage from './ServicePage'

export default function PersonalTraining() {
  return (
    <ServicePage
      path="/personal-training"
      seoTitle="Private Personal Training"
      seoDescription="One-on-one personal training at Formula Fitness, precisely designed around your fitness goals and needs."
      eyebrow="Private Personal Training"
      title="A Program Built Around You"
      intro="Discover a tailored one-on-one experience that's precisely designed to your fitness goals and needs."
      highlights={[
        { label: '1:1', text: 'Dedicated coach every session' },
        { label: 'Custom', text: 'Programming for your body & goals' },
        { label: 'Data', text: 'Progress tracked with InBody scans' },
      ]}
      sections={[
        {
          heading: 'Personalized From Day One',
          paragraphs: [
            'Your trainer designs each session around your current fitness level, history, and goals. Every rep has a purpose, and every program evolves as you do.',
            'We focus on proper form and sustainable progression so your results last well beyond the gym floor.',
          ],
        },
        {
          heading: 'More Than a Workout',
          paragraphs: [
            'Personal training at Formula Fitness includes guidance on stress management, sleep, and nutrition — the whole-health approach that drives real, lasting change.',
          ],
        },
      ]}
    />
  )
}
