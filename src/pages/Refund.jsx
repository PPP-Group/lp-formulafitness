import LegalPage from './LegalPage'

export default function Refund() {
  return (
    <LegalPage
      title="Refund Policy"
      path="/refund-policy"
      intro="Our satisfaction guarantee and how refunds work at Formula Fitness."
      sections={[
        {
          heading: 'Satisfaction Guarantee',
          paragraphs: [
            'We are committed to your progress. If you’re not getting measurable results and aren’t happy with your experience, we’ll refund your remaining sessions, no questions asked.',
          ],
        },
        {
          heading: 'How the Money-Back Guarantee Works',
          paragraphs: [
            'Refunds are issued to your original payment method or by check. No hoops, no hassle.',
          ],
        },
        {
          heading: 'Pauses & Flexibility',
          paragraphs: [
            'Sessions have a reasonable expiration window to keep you accountable. If you have a family emergency, illness, or unexpected circumstances, we’ll pause your sessions, just communicate with us.',
          ],
        },
      ]}
    />
  )
}
