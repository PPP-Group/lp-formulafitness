import ServicePage from './ServicePage'

export default function RecoveryService() {
  return (
    <ServicePage
      path="/recovery-service"
      seoTitle="Recovery Service"
      seoDescription="State-of-the-art recovery techniques to enhance your well-being and mobility at Formula Fitness."
      eyebrow="Recovery Lab"
      title="Recover Smarter, Train Harder"
      intro="Our Recovery Services utilize state-of-the-art techniques to counteract everyday discomforts, enhancing both your well-being and mobility."
      highlights={[
        { label: 'Mobility', text: 'Move better and pain-free' },
        { label: 'Tech', text: 'Hyperice & modern recovery tools' },
        { label: 'Balance', text: 'Stress relief and faster recovery' },
      ]}
      sections={[
        {
          heading: 'Why Recovery Matters',
          paragraphs: [
            'Training breaks your body down — recovery is where the results are built. Our Recovery Lab helps you bounce back faster so you can train consistently.',
            'From mobility work to modern recovery technology, we counteract the aches of daily life and intense training alike.',
          ],
        },
      ]}
    />
  )
}
