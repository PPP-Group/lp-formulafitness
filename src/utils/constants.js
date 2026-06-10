// Dados estáticos da empresa, assets e mídia.
// Imagens auto-hospedadas em /public/assets/uploads (espelhadas do site original).

export const company = {
  name: 'Formula Fitness',
  email: 'info@formulafitness.co',
  phone: '(562) 669-4030',
  phoneHref: 'tel:+15626694030',
  address: '3971 Ball Rd, Los Alamitos, CA 90720',
  serviceArea:
    'Serving Los Alamitos, Cypress, Cerritos, La Palma, Long Beach and Surrounding Neighborhoods',
  hours: [
    { days: 'Monday – Friday', time: '5am – 10pm' },
    { days: 'Saturday – Sunday', time: '6am – 6pm' },
  ],
  mapEmbed:
    'https://maps.google.com/maps?q=3971%20Ball%20Rd.%20Los%20Alamitos%2C%20CA%2090720%20USA&t=m&z=14&output=embed&iwloc=near',
  mapLink:
    'https://www.google.com/maps/place/Formula+Fitness/@33.8179361,-118.0661915,17z',
  social: {
    facebook: 'https://www.facebook.com/FormulaFitnesslosalamitos',
    instagram: 'https://www.instagram.com/formulafitness.co',
  },
}

// Raiz dos assets espelhados do WordPress original.
const U = '/assets/uploads'

export const assets = {
  logo: `${U}/2023/06/formula-fitness-logo.svg`,
  logoPng: `${U}/2023/06/formulafitness_logo.png`,
  playIcon: `${U}/2023/08/play-icon-full.svg`,
  playIconText: `${U}/2023/08/play-icon-with-text.svg`,
  sectionIcon: `${U}/2023/06/Icon.png`,
}

// Helper para montar caminho de upload local a partir do "ano/mês/arquivo".
export const upload = (rel) => `${U}/${rel}`

// Embeds do YouTube usados nos lightboxes de depoimento.
export const youtube = {
  main: '3ktIZoJ0X20', // vídeo principal ("Personal Training at Formula Fitness Explained")
  katie: 'b2opnbIFN2s',
  dharshun: '7-c4PrDbBmo',
  adrian: 'gBsjx7-7vDw',
}
