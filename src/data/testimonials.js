import { youtube } from '@utils/constants'

// Vídeos de depoimento (seção "Personal Training, Personal Triumphs!")
export const videoTestimonials = [
  {
    id: 'katie',
    name: "Katie's Story",
    quote: 'Katie shares how training has given her the energy to be a better stay-at-home mom.',
    videoId: youtube.katie,
  },
  {
    id: 'dharshun',
    name: "Dharshun's Story",
    quote:
      'From climbing Mt. Kilimanjaro to completing a half Iron Man, Dharshun shares how training with Formula Fitness helped him reach his goals.',
    videoId: youtube.dharshun,
  },
  {
    id: 'adrian',
    name: "Adrian's Story",
    quote:
      'Adrian was surprised by how much she was able to accomplish in a matter of months!',
    videoId: youtube.adrian,
  },
]

// Resultados reais (seção "Real People Real Results")
export const transformations = [
  { id: 'yaska', name: 'Yaska', result: '3 Month Transformation. Stronger surfer.' },
  { id: 'nadia', name: 'Nadia', result: 'Slim and tone in 2 months.' },
  { id: 'dykes', name: 'Dykes', result: 'Down 13% fat in 6 months.' },
]
