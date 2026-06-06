// Dados estáticos da empresa, assets e mídia (ver MASTER_PROMPT seção 6)

export const company = {
  name: 'Formula Fitness',
  email: 'info@formulafitness.co',
  phone: '(562) 669-4030',
  phoneHref: 'tel:+15626694030',
  address: '3971 Ball Rd, Los Alamitos, CA 90720',
  hours: [
    { days: 'Monday – Friday', time: '5am – 10pm' },
    { days: 'Saturday – Sunday', time: '6am – 6pm' },
  ],
  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
  },
}

export const assets = {
  logo: 'https://formulafitness.co/wp-content/uploads/2023/06/formula-fitness-logo.svg',
  playIcon: 'https://formulafitness.co/wp-content/uploads/2023/08/play-icon-full.svg',
  playIconText: 'https://formulafitness.co/wp-content/uploads/2023/08/play-icon-with-text.svg',
  sectionIcon: 'https://formulafitness.co/wp-content/uploads/2023/06/Icon.png',
}

// Embeds do YouTube usados nos lightboxes de depoimento
export const youtube = {
  main: '3ktiZboJ0X2', // vídeo principal
  katie: 'b2opnbIFN2s',
  dharshun: '7-c4PrDbBmo',
  adrian: 'gBsjx7-7vDw',
}
