import { upload } from '@utils/constants'

// Equipe Formula Fitness (página /team-members-page) + bios individuais (/bio/:slug).
// Conteúdo verbatim do site original.

export const team = [
  {
    slug: 'tony',
    name: 'Tony',
    role: 'Founding Partner & Director of Experience',
    photo: upload('2026/05/Formula-Fitness-03.2026-34-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'Tony Tran is the visionary behind Formula Fitness, located near Cypress, California. With 20+ years of industry experience across Hollywood and Orange County, he’s earned multiple certifications and is also a licensed EMT-Paramedic and local firefighter. His unique medical background enriches his expertise in working with active-aging clients, injury prevention, and safe training techniques.',
      },
      {
        heading: 'Training Approach',
        body: 'Tony specializes in optimizing posture, core strength, and cardiovascular health before targeting specific fitness goals. He addresses crucial lifestyle factors—sleep, stress, nutrition—to help clients see lasting results. Whether you’re a beginner, seeking weight loss, or managing muscle imbalances, Tony’s coaching style is supportive, precise, and highly effective.',
      },
      {
        heading: 'Fun Fact',
        body: 'Tony enjoys triathlons, mountaineering (he’s summited Kilimanjaro), and family adventures. He believes a truly healthy lifestyle radiates from the inside out.',
      },
      {
        heading: 'Success Story',
        body: 'One of Tony’s standout success stories is a retired nurse who came to him struggling with chronic back pain and poor balance after years on her feet. Using his expertise in active aging and corrective exercise, Tony created a personalized plan focusing on posture, core strength, and gentle mobility work. Within months, she regained her stability, eliminated daily pain, and even joined her first local 5K walk—a milestone she never thought possible.',
      },
    ],
    specialties: [
      'Active Aging & Corrective Exercise',
      'Weight Loss & Strength Building',
      'Injury Prevention & Post-Rehab Training',
      'Sports Performance & Endurance (Triathlons)',
    ],
    certifications: [
      'NASM (CPT, CES, PES)',
      'EMT-Paramedic – Advanced Life Support',
      'FMS 1 – Functional Movement Screening',
      'Precision Nutrition L1',
      'TRX, BOSU, & Kettlebell Specialist',
    ],
  },
  {
    slug: 'amber',
    name: 'Amber',
    role: 'Founding Partner & Director of Experience',
    photo: upload('2026/05/Formula-Fitness-03.2026-15-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'Amber holds a B.A. in Communications & Marketing from California State University, Fullerton. Leveraging years of marketing experience, she focuses on community outreach, brand development, and day-to-day operations at Formula Fitness, serving the Cypress and Los Alamitos areas.',
      },
      {
        heading: 'Approach',
        body: 'Amber’s passion for helping people, combined with her career experience in marketing and operations, has helped establish Formula Fitness as a trusted destination for personal training and group fitness. She champions inclusive, innovative programs that cater to various fitness needs and lifestyles.',
      },
      {
        heading: 'Outside the Gym',
        body: 'Amber enjoys quality time with her husband and two daughters, philanthropy work with Human Options – a local non-profit, baking, and traveling.',
      },
      {
        heading: 'Success Story',
        body: 'Amber played a key role in transforming Formula Fitness from a small neighborhood gym into a thriving fitness community. One of her proudest moments was launching a local outreach initiative that partnered with schools and small businesses to provide free wellness workshops. This program brought in dozens of new members who had never set foot in a gym before.',
      },
    ],
    specialties: [],
    certifications: [],
  },
  {
    slug: 'jason',
    name: 'Jason',
    role: 'Lead Director of Performance & Recovery Specialist',
    photo: upload('2026/05/Formula-Fitness-03.2026-44-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'Jason graduated from UCLA with a B.A. in Anthropology and spent five years in a Physical Therapy clinic before becoming a NASM-certified trainer. He has helped clients of all ages—from student athletes to seniors—achieve better mobility and performance.',
      },
      {
        heading: 'Training Philosophy',
        body: 'Jason uses evidence-based exercise, nutrition, and behavioral-change methods to ensure lasting results. His patient, thorough coaching style focuses on functional strength, corrective exercises, and cardiovascular conditioning.',
      },
      {
        heading: 'Success Story',
        body: 'He guided a client named Chris to lose 15% body fat and gain 10 lbs of lean muscle—all while conquering pull-ups and boosting confidence in and out of the gym.',
      },
    ],
    specialties: [
      'Strength & Conditioning',
      'Mobility & Recovery (IASTM, cupping, stretching)',
      'Corrective Exercise & Senior Fitness',
      'Nutrition Coaching',
    ],
    certifications: [],
  },
  {
    slug: 'cj',
    name: 'CJ',
    role: 'Director of Client Acquisitions',
    photo: upload('2026/05/Formula-Fitness-03.2026-79-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'A Southern California native, CJ’s career is rooted in a deep passion for human performance and business excellence. He began his journey at College of the Canyons, studying Business and Supplementation/Nutrition, before traveling the world as a professional athlete and serving as VP of WDP. CJ’s extensive leadership in the fitness industry includes his time as a highly successful General Manager for 24 Hour Fitness in Los Angeles and owning his own health club in Arizona.',
      },
      {
        heading: 'Training & Growth Philosophy',
        body: 'CJ believes that the hardest part of any fitness journey is simply getting started. As a leader, his philosophy is built on empathy, active listening, and strategic planning. He doesn’t just see "new members"—he sees individuals with unique stories and untapped potential.',
      },
      {
        heading: 'Success Story',
        body: 'CJ recently met a prospective member who felt intimidated by the gym environment after years away from fitness. By drawing on his background in nutrition and high-performance coaching, CJ helped them move past their hesitation and craft a sustainable "Day One" plan. Today, that individual is one of our most consistent members, having lost 25 lbs and completely transformed their relationship with health.',
      },
    ],
    specialties: [
      'Strategic Client Success & Integration',
      'Supplementation & Performance Nutrition',
      'Elite Athletic Mindset & Goal Setting',
      'Community Building & Professional Growth',
    ],
    certifications: [],
  },
  {
    slug: 'chris',
    name: 'Chris',
    role: 'Lead Nutritionalist & Performance Specialist',
    photo: upload('2026/05/Formula-Fitness-03.2026-53-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'Chris grew up immersed in sports, especially baseball at the collegiate level. After earning a B.S. in Kinesiology (Exercise Science) from Cal State Fullerton, he worked in physical therapy and personal training. He now applies his expertise at Formula Fitness to help clients near Cypress, CA.',
      },
      {
        heading: 'Training Philosophy',
        body: 'Chris emphasizes long-term lifestyle changes—nutrition, strength, mobility, and quality sleep—to achieve sustainable results without burnout. He’s known for customizing workouts to accommodate injuries and varied fitness goals.',
      },
      {
        heading: 'Success Story',
        body: 'Chris helped Daniel lose 57.4 pounds and 16.3% body fat in six months, proving that education, consistency, and a supportive coach can lead to life-changing results.',
      },
    ],
    specialties: [
      'Strength Training & HIIT',
      'Injury Rehabilitation & Sports Performance',
      'Nutrition & Healthy Habit Formation',
    ],
    certifications: [],
  },
  {
    slug: 'christy-aila',
    name: 'Christy',
    role: 'Lead Strength & Conditioning Specialist',
    photo: upload('2026/05/Formula-Fitness-03.2026-64-3-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'Christy’s own weight loss journey in 2016 inspired her to become a NASM-certified coach. She’s worked in boutique gyms, guiding group training sessions with a focus on functional and strength-based exercises.',
      },
      {
        heading: 'Training Philosophy',
        body: 'Christy’s approach centers on everyday functionality—compound moves, real-life movement patterns, and HIIT. She believes in strength training for all ages, personalizing each plan to suit goals and abilities.',
      },
      {
        heading: 'Success Story',
        body: 'From clients losing 60 pounds to first-time 5K racers, Christy’s compassionate coaching style helps people overcome barriers and embrace healthier lifestyles.',
      },
    ],
    specialties: ['Functional Training', 'Strength & Conditioning', 'TRX & Group Training'],
    certifications: [],
  },
  {
    slug: 'michael',
    name: 'Michael',
    role: 'Lead Human Performance Specialist',
    photo: upload('2026/05/Formula-Fitness-03.2026-38-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'Michael lost 180 pounds himself, sparking his 13-year career in personal training. A former Fitness Manager and Master Trainer, he’s now dedicated to helping clients near Cypress, CA, develop sustainable fitness habits.',
      },
      {
        heading: 'Training Philosophy',
        body: 'Michael emphasizes simplicity and education, focusing on body-fat reduction, muscle building, and biomechanics. He ensures clients can maintain progress on their own for long-lasting results.',
      },
      {
        heading: 'Success Story',
        body: 'He worked with one client over a decade, guiding her to lose 41 pounds and 25% body fat, improve mobility despite injuries, and maintain a healthy lifestyle well into her 60s.',
      },
    ],
    specialties: [
      'Weight/Fat Reduction',
      'Strength & Resistance Training',
      'Biomechanics & Corrective Exercise',
      'Nutrition',
    ],
    certifications: [],
  },
  {
    slug: 'dwayne',
    name: 'Dwayne',
    role: 'Human Performance Specialist',
    photo: upload('2026/05/Formula-Fitness-03.2026-108-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'With 20+ years in health and physical development (seven as a professional fitness coach), Dwayne creates evolving programs tailored to each client’s progress, ensuring continual challenge and reward.',
      },
      {
        heading: 'Training Philosophy',
        body: 'He believes fitness isn’t one-size-fits-all. Dwayne identifies each individual’s goals—weight management, muscle building, athletic development—and maps out the habits needed for success.',
      },
      {
        heading: 'Success Story',
        body: 'Dwayne guided a client recovering from a motorcycle accident to regain mobility, lose 116 lbs, and build confidence—proving that fitness truly transforms lives.',
      },
    ],
    specialties: [
      'Strength & Bodybuilding',
      'Calisthenics & Functional Movement',
      'Boxing/Kickboxing',
      'Injury Recovery & Correctives',
    ],
    certifications: [],
  },
  {
    slug: 'mikaela',
    name: 'Mikaela',
    role: 'Human Performance Specialist',
    photo: upload('2026/05/Formula-Fitness-03.2026-95-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'Mikaela has been dancing since the age of 2, and her lifelong commitment to an active and healthy lifestyle led her to Southern California after high school to pursue a professional dance career. Along the way, she discovered a passion for fitness and became an instructor at Pure Barre. Mikaela is also a certified personal trainer through ACE.',
      },
      {
        heading: 'Approach',
        body: 'Mikaela believes that fitness is essential not just in the gym but in every aspect of life. From lifting groceries to picking up your child, strength is necessary for daily activities. She emphasizes the importance of weight training and low-impact movements to enhance both the body and mind in everyday life.',
      },
      {
        heading: 'Success Story',
        body: 'One of her standout success stories is a client who had struggled with chronic joint pain due to a sedentary lifestyle. Through a combination of strength training and low-impact movement, the client not only alleviated the pain but also gained confidence in their body’s abilities.',
      },
    ],
    specialties: ['Strength & Conditioning', 'Low-Impact Movement', 'Assisted Stretch', 'Group Training'],
    certifications: [],
  },
  {
    slug: 'j-p',
    name: 'J.P.',
    role: 'Human Performance Specialist',
    photo: upload('2026/05/Formula-Fitness-03.2026-71-scaled.jpg'),
    sections: [
      {
        heading: 'Background & Experience',
        body: 'Before serving in the U.S. Marine Corps, JP recognized the power of discipline to drive life-changing fitness results. He later studied Sports Nutrition at the Southern California Health Institute, expanding his expertise in weight loss, muscle growth, and effective training protocols.',
      },
      {
        heading: 'Training Philosophy',
        body: 'JP’s programs emphasize efficient methods—focusing on maximizing results through proven exercise techniques and nutrition principles. His genuine dedication to fitness empowers clients to strengthen both body and spirit.',
      },
      {
        heading: 'Success Story',
        body: 'One of JP’s most inspiring transformations is that of a busy father of two who came to him struggling with weight gain and low energy. Through JP’s personalized training plan and nutrition coaching, this client lost over 50 pounds in under a year—while building lean muscle and drastically improving his stamina.',
      },
    ],
    specialties: [
      'Hypertrophy & Muscle Density',
      'High-Intensity Interval Training (HIIT)',
      'Functional Training & Corrective Exercise',
      'Weight Loss',
      'Balance & Stabilization',
    ],
    certifications: ['NASM-Certified Personal Trainer'],
  },
]

export const getMember = (slug) => team.find((m) => m.slug === slug)
