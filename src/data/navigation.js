// Estrutura completa do menu de navegação (ver MASTER_PROMPT seção 7)

export const navigation = [
  {
    label: 'Services',
    path: '/training-services',
    children: [
      { label: 'Personal Training', path: '/personal-training' },
      { label: 'Semi-Private', path: '/semi-private-personal-training' },
      { label: 'Recovery Service', path: '/recovery-service' },
      { label: 'Active Aging', path: '/active-aging' },
      { label: 'InBody Scan', path: '/inbody' },
      { label: 'Youth Training Program', path: '/youth-training-program' },
    ],
  },
  {
    label: 'Testimonials',
    path: '/testimonials',
    children: [
      { label: 'Testimonials', path: '/testimonials' },
      { label: 'Referral Program', path: '/referrals' },
    ],
  },
  {
    label: 'Team',
    path: '/team',
    children: [
      { label: 'Our Team', path: '/team' },
      { label: 'Join Our Team', path: '/join-our-team' },
    ],
  },
  { label: 'Prices', path: '/prices' },
  { label: 'Blogs', path: '/blogs' },
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About', path: '/about' },
      { label: 'FAQs', path: '/faq' },
    ],
  },
]
