import ServicePage from './ServicePage'

export default function SemiPrivate() {
  return (
    <ServicePage
      path="/semi-private-personal-training"
      seoTitle="Semi-Private Personal Training"
      seoDescription="Small group personal training that blends individual attention with collective energy, while staying cost-effective."
      eyebrow="Semi-Private Personal Training"
      title="Individual Attention, Shared Energy"
      intro="Small Group Personal Training offers an optimal blend of individual attention and collective energy, while remaining cost-effective."
      highlights={[
        { label: '2–4', text: 'Clients per coached session' },
        { label: 'Energy', text: 'Train alongside a motivated group' },
        { label: 'Value', text: 'Premium coaching, friendlier price' },
      ]}
      sections={[
        {
          heading: 'The Best of Both Worlds',
          paragraphs: [
            'Semi-private training keeps each member on their own customized program while sharing the motivation of a small, supportive group.',
            'Your coach still adjusts every exercise to your ability — you simply get the added accountability and energy of training together.',
          ],
        },
      ]}
    />
  )
}
