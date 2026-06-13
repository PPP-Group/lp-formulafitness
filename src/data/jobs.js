// Vagas (página /join-our-team + detalhes /join-our-team/:slug).
// Conteúdo baseado no site original (páginas jot-read-me-*).

export const jobs = [
  {
    slug: 'personal-trainer',
    title: 'Personal Trainer Wanted',
    summary:
      'Formula Fitness, a highly acclaimed health & human performance center in Los Alamitos, CA is seeking a certified personal trainer with 3-5 years of experience. Required qualifications include a current nationally recognized personal training certification.',
    intro:
      'Formula Fitness, a highly acclaimed health & human performance center in Los Alamitos, CA, is seeking a certified Personal Trainer with 3-5 years of experience to join our team.',
    sections: [
      {
        heading: 'Required Qualifications',
        items: [
          'Current nationally recognized personal training certification',
          'Current CPR/AED certification',
          '3-5 years of training experience',
          'Experience in one-on-one, small group (3-5), and large group (15-20) class training',
          'Virtual client experience preferred',
          'Strong organization, time management, and communication skills',
        ],
      },
      {
        heading: 'Primary Responsibilities',
        items: [
          'Build and maintain a client base',
          'Maintain punctuality, respect, and enthusiasm',
          'Conduct training across various formats',
          'Maintain a clean and safe training area during sessions',
          'Work afternoons and evenings',
        ],
      },
      {
        heading: 'Additional Requirements',
        items: [
          'Legal right to work in the US',
          'All information kept confidential per EEO guidelines',
        ],
      },
    ],
  },
  {
    slug: 'semi-private-trainer',
    title: 'Semi-Private Trainer Wanted',
    summary:
      'Formula Fitness, a highly acclaimed health & human performance center is searching for a professional, motivated, personable, energetic, and well-organized Semi-Private Trainer. The best candidate must possess strong coaching qualifications.',
    intro:
      'Formula Fitness, a highly acclaimed health & human performance center, is searching for a professional, motivated, personable, energetic, and well-organized Semi-Private Trainer.',
    sections: [
      {
        heading: 'Required Qualifications',
        items: [
          '1+ years of experience in the customer service or retail industry (fitness/spa background a plus)',
          'Professional appearance and pleasant demeanor',
          'Excellent customer service skills',
          'Strong organizational abilities',
          'Ability to multi-task with excellent written and verbal communication skills',
          'Ability to work both independently and collaboratively',
        ],
      },
    ],
  },
  {
    slug: 'group-trainer',
    title: 'Group Trainer Wanted',
    summary:
      'Formula Fitness is looking for an Elite Group Instructor and Trainer with a NCMTB or HHP certification and 2 years of experience. Candidates should be highly motivated, professional, and energetic.',
    intro:
      'Formula Fitness is looking for an Elite Group Trainer and bodyworker to join our health and performance center. You will serve clients managing pain, athletes seeking performance enhancement, professional athletes, and those pursuing stress reduction.',
    sections: [
      {
        heading: 'Required Qualifications',
        items: [
          'NCMTB or HHP certification',
          'Minimum 2 years of experience',
          'Proficiency in therapeutic massage, deep tissue, flexibility, and sports massage techniques',
          'Great communication skills with openness to learning new bodywork methods',
          'Health-related degree considered advantageous',
        ],
      },
      {
        heading: 'Ideal Candidate',
        items: [
          'Highly motivated, professional, and passionate',
          'Works effectively within a team alongside elite massage therapists and personal trainers',
          'Thrives in a positive, sports-performance setting',
        ],
      },
    ],
  },
  {
    slug: 'pilates-instructor',
    title: 'Pilates Instructor Trainer Wanted',
    summary:
      'Formula Fitness is searching for an Elite Pilates Instructor with 2+ years of experience and a current Pilates certification. Candidates should be proficient at both mat class as well as equipment (reformer, Cadillac, and more).',
    intro:
      'Formula Fitness, a highly acclaimed health & human performance center, seeks an experienced Pilates Instructor to join our team.',
    sections: [
      {
        heading: 'Required Qualifications',
        items: [
          '2+ years of professional experience',
          'Current Pilates certification',
          'Proficiency in both mat classes and equipment use (reformer, Cadillac, etc.)',
          'Strong motivation and professional demeanor',
          'Excellent communication abilities',
          'Passion for fitness and working with diverse clientele, including athletes',
        ],
      },
    ],
  },
  {
    slug: 'yoga-instructor',
    title: 'Yoga Instructor Trainer Wanted',
    summary:
      'Formula Fitness is looking for a passionate and experienced Yoga Instructor to lead engaging and transformative classes. If you have a deep understanding of yoga principles and a commitment to helping members, we want to hear from you.',
    intro:
      'Formula Fitness, a highly acclaimed health & human performance center, is looking for a passionate and experienced Yoga Instructor to lead engaging and transformative classes.',
    sections: [
      {
        heading: 'Required Qualifications',
        items: [
          'Minimum 2+ years of experience',
          'Current yoga certification',
          'Ability to lead both group and private sessions',
          'Experience with various yoga styles (Hatha, Vinyasa, Yin, etc.)',
          'Strong motivation and professionalism with excellent communication skills',
          'Passion for movement, mindfulness, and working with diverse clients, including athletes',
        ],
      },
    ],
  },
  {
    slug: 'internship',
    title: 'Internship Program',
    summary:
      'If you want to be the best, you have to learn from the best! The Formula Fitness internship program is designed to enhance the educational process of future fitness professionals by allowing you to see "behind the scenes" of a world-class training facility.',
    intro:
      'The Formula Fitness internship program is structured to advance the educational journey of aspiring fitness professionals, giving you "behind the scenes" exposure to a premier training facility — including training methodologies and operational systems. Available terms: Spring, Summer, Fall, and Winter (year-round applications accepted).',
    sections: [
      {
        heading: 'Key Responsibilities',
        items: [
          'Observe and learn cutting-edge personal training, strength and conditioning, and sports performance coaching techniques',
          'Observe and learn the mind-body principles of Pilates and yoga',
          'Meet with staff to learn business systems, culture, and training philosophy',
          'Assist with group fitness classes and specialty camps',
          'Support corporate fitness and marketing events',
          'Help with boot camp classes',
        ],
      },
      {
        heading: 'Required Qualifications',
        items: [
          'Upper-level or graduating Exercise Science student (or related field)',
          'Proficient with anatomy and physiology, strength training, and related coursework',
          'Computer proficiency',
          'Passionate about your work and hungry to learn',
          'Proactive, outgoing, and detail-oriented',
          'Ability to commit 160 volunteer hours',
        ],
      },
      {
        heading: 'How to Apply',
        items: [
          'Submit a cover letter, resume, and 3 references',
          'Qualified applicants are notified within 4 weeks regarding final interview eligibility',
        ],
      },
    ],
  },
]

export const getJob = (slug) => jobs.find((j) => j.slug === slug)
