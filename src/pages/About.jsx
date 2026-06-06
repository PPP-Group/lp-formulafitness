import ServicePage from './ServicePage'

export default function About() {
  return (
    <ServicePage
      path="/about"
      seoTitle="About"
      seoDescription="Formula Fitness is a personal training studio in Los Alamitos, CA, taking a client-first approach to whole health."
      eyebrow="About Us"
      title="More Than Personal Training"
      intro="Formula Fitness takes an innovative, client-first approach to health and wellness — focusing on your whole health, not just your workout."
      highlights={[
        { label: 'Whole', text: 'Stress, sleep, nutrition & fitness' },
        { label: 'Sustainable', text: 'Results that last beyond the gym' },
        { label: 'Community', text: 'A team that stands by your side' },
      ]}
      sections={[
        {
          heading: 'Our Approach',
          paragraphs: [
            "It's more than personal training. We focus on your whole health: stress management, sleep routines, diet and nutrition, and fitness goals — all built around a client-first philosophy.",
            'Based in Los Alamitos, California, we combine highly-skilled trainers, innovative equipment, and a supportive community to help you build a stronger, more sustainable body.',
          ],
        },
        {
          heading: 'Why Formula Fitness',
          paragraphs: [
            'Every program is tailored to the individual. We emphasize proper form, sustainable progress, and measurable results powered by tools like the InBody 580.',
          ],
        },
      ]}
    />
  )
}
