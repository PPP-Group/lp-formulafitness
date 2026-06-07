import { youtube, upload } from '@utils/constants'

// Vídeos de depoimento (Home — seção "Watch These Testimonials!"). Texto verbatim.
export const videoTestimonials = [
  {
    id: 'katie',
    name: "Katie's Story",
    quote:
      'Katie shares how training has given her the energy to be a better stay-at-home mom. We are thankful that Katie is a part of our family!',
    videoId: youtube.katie,
    thumb: upload('2023/09/Katie_s-Story-YT.webp'),
  },
  {
    id: 'dharshun',
    name: "Dharshun's Story",
    quote:
      'From climbing Mt. Kilimanjaro to completing a half Iron Man, Dharshun shares how training with Formula Fitness helped him reach his goals.',
    videoId: youtube.dharshun,
    thumb: upload('2023/09/Dharshun_s-Story-YT-5.webp'),
  },
  {
    id: 'adrian',
    name: "Adrian's Story",
    quote:
      'Adrian was surprised by how much she was able to accomplish in a matter of months! We are thankful that Adrian is a part of our family!',
    videoId: youtube.adrian,
    thumb: upload('2023/09/Adrian_s-Story-YT.webp'),
  },
]

// Resultados em destaque (Home — "Real People Real Results"). Texto verbatim.
export const transformations = [
  {
    id: 'yaska',
    name: 'Yaska',
    result: '3 Month Transformation. Stronger surfer.',
    image: upload('2023/07/Group-1618.png'),
  },
  {
    id: 'nadia',
    name: 'Nadia',
    result: 'Slim and Tone in 2 months.',
    image: upload('2023/07/Group-1618-1.png'),
  },
  {
    id: 'dykes',
    name: 'Dykes',
    result: 'Down 13% fat in 6 months.',
    image: upload('2023/07/Group-1621.png'),
  },
]

// Galeria de resultados (Home — abaixo dos destaques).
export const resultsGallery = [
  { name: 'Ruby', image: upload('2025/05/WhatsApp-Image-2025-05-08-at-12.30.14_6a835150.jpg') },
  { name: 'Dharshun', image: upload('2025/05/WhatsApp-Image-2025-05-08-at-15.43.30_54ef4bed.jpg') },
  { name: 'Renata', image: upload('2025/05/WhatsApp-Image-2025-05-08-at-12.30.15_bb559f3a.jpg') },
  { name: 'Yaska', image: upload('2025/05/WhatsApp-Image-2025-05-08-at-15.43.29_889fb4fb.jpg') },
  { name: 'Toby', image: upload('2025/05/WhatsApp-Image-2025-05-08-at-12.30.14_46d5b9c9.jpg') },
  { name: 'Heather', image: upload('2025/05/WhatsApp-Image-2025-05-08-at-12.30.16_7fbf672a.jpg') },
  { name: 'Michael', image: upload('2025/05/WhatsApp-Image-2025-05-08-at-15.43.28_671c2b50.jpg') },
  { name: 'Daisy', image: upload('2025/05/WhatsApp-Image-2025-05-08-at-15.43.29_cc240b76.jpg') },
]

// Depoimentos curtos (segundo carrossel da Home e páginas de serviço). Texto verbatim.
export const shortTestimonials = [
  {
    id: 'venkata',
    name: 'Venkata Sai M.',
    text: 'I worked with Tony and Jason at formula fitness for about 6 weeks and I really enjoyed that the team took their time to explain different exercises to me and their benefits, but most importantly corrected me when my form was off. I did small group training mostly at the gym, and sometimes it can get a little tight but its a small boutique gym so everything cant be perfect.',
  },
  {
    id: 'matt1',
    name: 'Matt C.',
    text: "Great work vibe with the owner Tony. Small group sessions really motivates you, Whether you're competitive like me or motivated By a group of others who are doing the same thing. It's a unique formula but it works and You'll be happy you did it.",
  },
  {
    id: 'joy',
    name: 'Joy D.',
    text: "Working with Tony at Formula fitness has been really great. I appreciate the theme of the gym as its very intimate and inviting for those who don't prefer to work out in the typical open gym with tons of other people. As far as other equipment, there's a ton of new weights, kettle bells (my favorite) and importantly a scale that measure body fat % to track progress.",
  },
  {
    id: 'christopher',
    name: 'Christopher C.',
    text: "I have nothing but good things to say about Formula Fitness! We also check our progress about every 1-2 weeks through an InBody scan to measure our body fat and lean muscle mass percentage. I've done both 1-on-1 and small-group sessions, and you really can't go wrong with either of them.",
  },
  {
    id: 'carrie',
    name: 'Carrie C.',
    text: 'I am so glad that I found Formula Fitness. I had a lot of intimidation when it came to working out by myself at the gym, so I wanted to have a trainer guide me on proper form and body mechanics. I love that the group classes usually only had about 4 people. It was very personalized and I loved having my community here.',
  },
  {
    id: 'matt2',
    name: 'Matt C.',
    text: "Formula fitness is a unique approach and a small group session work outs. It brings the high intensity workout tailored to each individual needs. I'm absolutely happy i started going here and the owner really cares about seeing results on you, even sat down with me about nutrition and helped me improve myself for the better.",
  },
  {
    id: 'amanda',
    name: 'Amanda O.',
    text: "LOVE THIS PLACE!! Everyone at Formula Fitness truly makes you feel like family. I joined in January to \"kick start\" my fitness routine again, and they've done that and more! I feel I've not only gained confidence and muscle tone, but a community of supporters and cheerleaders as well!",
  },
]
