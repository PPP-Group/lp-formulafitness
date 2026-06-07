import LegalPage from './LegalPage'

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      path="/terms-of-service"
      intro="The terms and conditions that govern your use of Formula Fitness services and this website."
      sections={[
        {
          heading: 'Acceptance of Terms',
          paragraphs: [
            'By accessing this website or training with Formula Fitness, you agree to these Terms of Service. If you do not agree, please discontinue use of our services.',
          ],
        },
        {
          heading: 'Services',
          paragraphs: [
            'Formula Fitness provides personal training, semi-private training, recovery services, and related health and wellness programming. Program details, scheduling, and pricing are confirmed during your consultation.',
          ],
        },
        {
          heading: 'Health & Safety',
          paragraphs: [
            'You should consult a physician before beginning any exercise program. You participate in training at your own risk and agree to disclose any conditions or injuries that may affect your safety.',
          ],
        },
        {
          heading: 'Bookings & Payments',
          paragraphs: [
            'Sessions are booked in advance and paid per the plan agreed at signup. Flexible payment plans may be available. Please communicate scheduling changes with your trainer.',
          ],
        },
      ]}
    />
  )
}
