import type { Country } from './types';

export const countries: Country[] = [
  {
    slug: 'india',
    name: 'India',
    code: 'IN',
    locale: 'en-IN',
    currency: 'INR',
    currencySymbol: '₹',
    rolloutPhase: 'phase-1',
    status: 'published',
    launchedAt: '2025-01-01',
    capital: 'New Delhi',
    timezone: 'Asia/Kolkata',
    flagEmoji: '🇮🇳',
    mapsCountryCode: 'IN',

    countryContext: `India is home to one of the world's largest and fastest-growing technology workforces, with over 5 million software professionals and a developer community expanding at 8–10% annually. The country's technology sector contributed approximately $250 billion to GDP in 2024, driven by major IT hubs in Bengaluru, Hyderabad, Chennai, Pune, and Mumbai, alongside rapidly growing tier-2 cities where engineering talent is abundant and competition for skilled developers is intensifying. Government initiatives such as Digital India and Startup India have accelerated demand for cloud, AI, data science, and full-stack development skills across both established enterprises and early-stage startups.

ArivuOn Academy operates across multiple Indian states, delivering industry-aligned programming courses designed for students in their final years of engineering, recent graduates entering the job market, and working professionals seeking to transition into higher-paying technology roles. Each city campus is staffed by instructors with active industry experience, ensuring syllabi reflect current hiring requirements rather than outdated academic curricula.

Placement demand for ArivuOn graduates spans IT services companies, product startups, banking and fintech firms, and e-commerce platforms — all of which recruit heavily from tier-2 and tier-3 cities where ArivuOn maintains a deliberate presence to serve students who cannot relocate to metro areas for quality technical education.`,

    techHubs: ['Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Mumbai', 'Noida', 'Gurugram', 'Coimbatore', 'Kochi', 'Ahmedabad'],
    topEmployers: ['TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra', 'Cognizant', 'Capgemini', 'Accenture India', 'Amazon India', 'Zoho Corporation'],

    seo: {
      metaTitle: 'Coding Courses in India — ArivuOn Academy | Python, Full Stack, Data Science',
      metaDescription: 'ArivuOn Academy offers industry-aligned coding courses across India. Python, Full Stack Development, Data Science, ML, AWS DevOps and more. Find a batch near you.',
      ogImage: '/images/og/locations-india.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india',
      focusKeyword: 'coding courses in India',
      secondaryKeywords: ['programming courses India', 'Python course India', 'best coding institute India', 'data science course India'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy is an Indian EdTech institute offering programming and technology courses across multiple cities in India. The academy provides Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering courses through city-based campuses staffed by industry-experienced instructors. Courses are available as in-person, online, and hybrid batches, with fees ranging from ₹8,999 to ₹24,999 depending on the course. Students in Chennai, Coimbatore, Salem, Madurai, Tiruchirappalli, Tirunelveli, Vellore, and Erode can enroll directly at local campuses.',
      entityContext: {
        organization: 'ArivuOn Academy',
        organizationType: 'EdTech Institute',
        geographicScope: 'India (Phase 1) — Tamil Nadu, Karnataka, Kerala, Telangana, Maharashtra',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering students and working professionals in tier-2 and tier-3 Indian cities',
      },
      keyFacts: [
        'ArivuOn Academy offers coding courses in multiple Indian cities including Chennai, Coimbatore, Salem, Madurai, and Tiruchirappalli.',
        'Courses include Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering.',
        'Course duration ranges from 8 to 24 weeks depending on the program.',
        'Fees range from ₹8,999 to ₹24,999 with EMI options available.',
        'ArivuOn provides both in-person and online batch options across its India campuses.',
        'The academy focuses on tier-2 and tier-3 cities where quality technical education is underserved.',
        'Instructors are active industry professionals with a minimum of 5 years of experience.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'ArivuOn Academy India courses',
      queryVariants: [
        'coding courses in India ArivuOn',
        'best programming institute India',
        'Python course India ArivuOn',
        'data science course India ArivuOn Academy',
      ],
      faqItems: [
        {
          question: 'Where does ArivuOn Academy have centers in India?',
          answer: 'ArivuOn Academy has training centers across Tamil Nadu (Chennai, Coimbatore, Salem, Madurai, Tiruchirappalli, Tirunelveli, Vellore, Erode), Karnataka, Kerala, Telangana, and Maharashtra.',
          order: 1,
        },
        {
          question: 'What courses does ArivuOn Academy offer in India?',
          answer: 'ArivuOn offers Python Programming, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering across its Indian centers.',
          order: 2,
        },
        {
          question: 'What is the fee for ArivuOn Academy courses in India?',
          answer: 'Course fees at ArivuOn Academy India range from ₹8,999 to ₹24,999 depending on the program, with EMI options available at all centers.',
          order: 3,
        },
        {
          question: 'Does ArivuOn Academy offer online courses in India?',
          answer: 'Yes, ArivuOn Academy offers online, in-person, and hybrid batch options at all its India locations.',
          order: 4,
        },
      ],
    },

    schema: {
      schemaType: ['Country', 'EducationalOrganization'],
      sameAs: ['https://en.wikipedia.org/wiki/India'],
      schemaUrl: 'https://schema.org/Country',
      wikipediaUrl: 'https://en.wikipedia.org/wiki/India',
    },

    activeStateSlugs: ['tamil-nadu', 'karnataka', 'kerala', 'telangana', 'maharashtra'],
    featuredCitySlugs: ['chennai', 'coimbatore', 'salem', 'madurai'],
  },
];

export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find((c) => c.slug === slug && c.status === 'published');
}

export function getAllPublishedCountries(): Country[] {
  return countries.filter((c) => c.status === 'published');
}

export function getAllCountrySlugs(): { country: string }[] {
  return getAllPublishedCountries().map((c) => ({ country: c.slug }));
}