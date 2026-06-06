import ServicePage from './ServicePage'

export default function InBody() {
  return (
    <ServicePage
      path="/inbody"
      seoTitle="InBody 580 Scan"
      seoDescription="The InBody 580 delivers a clinically validated, full-body composition audit in under a minute."
      eyebrow="The Gold Standard in Accuracy"
      title="Meet the InBody 580 — Your Health, Quantified"
      intro="Clinically validated and trusted by elite gyms, the InBody 580 delivers a full-body audit in under a minute."
      highlights={[
        { label: 'Water', text: 'Cellular hydration & water balance' },
        { label: 'Muscle', text: 'Segmental muscle and lean mass' },
        { label: 'Fat', text: 'Body fat & visceral fat levels' },
      ]}
      sections={[
        {
          heading: 'Data-Driven Coaching',
          paragraphs: [
            'Armed with these insights, our coaches craft a data-driven plan so you can track every gain, make smarter decisions, and transform faster — no guesswork, just measurable results.',
            'Re-test periodically to see exactly how your body is responding and adjust your program accordingly.',
          ],
        },
      ]}
    />
  )
}
