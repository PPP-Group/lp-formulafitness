import ServicePage from './ServicePage'

export default function Referrals() {
  return (
    <ServicePage
      path="/referrals"
      seoTitle="Referral Program"
      seoDescription="Share Formula Fitness with friends and family and get rewarded through our referral program."
      eyebrow="Referral Program"
      title="Share the Results, Earn the Rewards"
      intro="Love training with us? Refer a friend and you'll both be rewarded when they join."
      highlights={[
        { label: 'Refer', text: 'Introduce a friend or family member' },
        { label: 'They Join', text: 'They start their fitness journey' },
        { label: 'You Earn', text: 'Enjoy rewards as a thank you' },
      ]}
      sections={[
        {
          heading: 'How It Works',
          paragraphs: [
            'Tell a friend about Formula Fitness and have them mention your name when they book a consultation. Once they become a member, you both receive a reward.',
            'Ask the front desk or your coach for the current referral offer and start sharing the results.',
          ],
        },
      ]}
    />
  )
}
