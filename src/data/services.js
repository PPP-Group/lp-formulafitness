import { upload } from '@utils/constants'

// Dados dos programas de treino (Home — seção "TRAINING PROGRAMS"). Texto verbatim.
export const programs = [
  {
    id: 'private',
    title: 'Private Personal Training',
    description:
      "Discover a tailored one-on-one experience that's precisely designed to your fitness goals and needs. Elevate your workout journey with dedicated attention, guidance, and accountability.",
    cta: 'Learn More about Private Personal Training',
    path: '/personal-training',
    image: upload('2023/09/our-services-home-1.png'),
  },
  {
    id: 'small-group',
    title: 'Small Group Personal Training',
    description:
      'Small Group Personal Training offers an optimal blend of individual attention and collective energy, while remaining cost-effective. Benefit from the dual motivation of personal goals and group accountability, all while enjoying the camaraderie of a supportive community.',
    cta: 'Learn More about Semi-Private Personal Training',
    path: '/semi-private-personal-training',
    image: upload('2023/10/Group-81245.png'),
  },
  {
    id: 'recovery',
    title: 'Recovery Lab',
    description:
      'Our Recovery Services utilize state-of-the-art techniques to counteract these discomforts, enhancing both your well-being and mobility. Experience the synergy of holistic wellness, tailor-made to combat modern-day strains.',
    cta: 'Learn More about Recovery Service',
    path: '/recovery-service',
    image: upload('2023/10/Group-81241.png'),
  },
]

// Pilares da seção "Health is Wealth" (About / accordion). Texto verbatim do original.
export const philosophyPillars = [
  {
    title: 'Client-First Approach',
    body: 'Our clients are at the heart of everything we do. We prioritize individual health and wellness journeys by crafting tailored programs and fostering a supportive community.',
  },
  {
    title: 'Sustainable Fitness Journey',
    body: 'Our mission is to create lasting transformation by emphasizing proper form and holistic wellness without compromising intensity.',
  },
  {
    title: 'Innovative Training',
    body: 'We use Myzone heart rate tracking, professional recovery equipment, and metric-driven programming to bring the best results.',
  },
  {
    title: 'Whole-Health Improvement',
    body: 'Our programs are designed to help you with stress management, sleep routines, diet/nutrition, and fitness goals.',
  },
  {
    title: 'Highly-Skilled Trainers & Team',
    body: 'The team has a responsibility to use our extensive knowledge and expertise in the field to transform lives.',
  },
]

// Logos de parceiros (Home — "OUR PARTNERS").
export const partners = [
  upload('2025/04/1-2.png'),
  upload('2025/04/9-2.png'),
  upload('2025/04/7-3.png'),
  upload('2025/04/10-2.png'),
  upload('2025/04/Untitled-design-13.png'),
  upload('2025/04/2-2.png'),
  upload('2025/04/6-2.png'),
  upload('2025/04/5-2.png'),
]
