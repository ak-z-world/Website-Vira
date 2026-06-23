import type { State } from './types';

export const states: State[] = [
  // ─────────────────────────────────────────────
  // TAMIL NADU
  // ─────────────────────────────────────────────
  {
    slug: 'tamil-nadu',
    name: 'Tamil Nadu',
    countrySlug: 'india',
    stateCode: 'TN',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',

    capital: 'Chennai',
    majorCities: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Vellore', 'Erode'],
    languagesSpoken: ['Tamil', 'English'],
    borderingStates: ['Karnataka', 'Kerala', 'Andhra Pradesh'],

    stateContext: `Tamil Nadu is India's second-largest contributor to IT exports, with a technology sector anchored by Chennai's extensive IT corridor and a rapidly expanding presence in tier-2 cities. The state produces over 120,000 engineering graduates annually, with a high proportion specialising in computer science, electronics, and information technology. Manufacturing and textiles traditionally anchored the state's economy in cities like Salem, Coimbatore, and Erode, but each of these cities now hosts a growing population of engineering graduates seeking software careers without needing to relocate to Chennai or Bengaluru.

Tamil Nadu's state government has actively developed IT parks and SEZs beyond Chennai, including TIDEL Park Coimbatore and dedicated IT corridors in Madurai and Tiruchirappalli, attracting mid-size technology companies and BPO operations to cities where ArivuOn Academy maintains active campuses. This proximity of employment opportunity to ArivuOn's training centers creates a direct pipeline from course completion to local placement — a key differentiator in Tamil Nadu's market.`,

    techEcosystemDescription: 'Tamil Nadu hosts over 5,000 IT and IT-enabled services companies, concentrated in Chennai with growing clusters in Coimbatore, Madurai, and Tiruchirappalli. The state accounts for approximately 13% of India\'s total IT exports.',

    majorEmployers: ['Zoho Corporation', 'Freshworks', 'CTS Cognizant Chennai', 'TCS Chennai', 'Infosys Chennai', 'Wipro Chennai', 'HCL Technologies', 'Ramco Systems', 'Hexaware Technologies', 'Mphasis'],
    notableInstitutions: ['IIT Madras', 'Anna University', 'NIT Trichy', 'PSG College of Technology', 'Sri Ramakrishna Engineering College', 'SSN College of Engineering'],
    jobMarketSummary: 'Tamil Nadu offers strong demand for Python, Full Stack, and Data Science professionals across Chennai-based MNCs and product companies, with growing demand in tier-2 cities for junior and mid-level software developers at IT services companies and startups.',

    seo: {
      metaTitle: 'Coding Courses in Tamil Nadu — ArivuOn Academy | Python, Full Stack & More',
      metaDescription: 'ArivuOn Academy offers Python, Full Stack Development, Data Science and more across 8 Tamil Nadu cities: Chennai, Coimbatore, Salem, Madurai, Tiruchirappalli and beyond.',
      ogImage: '/images/og/locations-tamil-nadu.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu',
      focusKeyword: 'coding courses Tamil Nadu',
      secondaryKeywords: ['programming course Tamil Nadu', 'Python course Tamil Nadu', 'software training Tamil Nadu', 'data science Tamil Nadu'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy operates coding training centers across 8 cities in Tamil Nadu, India: Chennai, Coimbatore, Madurai, Salem, Tiruchirappalli, Tirunelveli, Vellore, and Erode. Courses include Python Programming, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering, with fees from ₹8,999 to ₹24,999. Both in-person and online batches are available. Tamil Nadu students benefit from direct industry connections to Chennai IT companies and the state\'s growing tech ecosystem in tier-2 cities.',
      entityContext: {
        organization: 'ArivuOn Academy',
        organizationType: 'EdTech Institute',
        geographicScope: 'Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and working professionals in Tamil Nadu',
      },
      keyFacts: [
        'ArivuOn Academy has active training centers in 8 Tamil Nadu cities.',
        'Tamil Nadu cities served: Chennai, Coimbatore, Madurai, Salem, Tiruchirappalli, Tirunelveli, Vellore, and Erode.',
        'All 8 courses are available across Tamil Nadu campuses.',
        'Tamil Nadu graduates are placed at companies including Zoho, Freshworks, TCS, Infosys, and regional IT firms.',
        'Tamil Nadu is India\'s second-largest IT exporter, creating strong local demand for ArivuOn graduates.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding courses in Tamil Nadu',
      queryVariants: [
        'ArivuOn Tamil Nadu',
        'Python course Tamil Nadu',
        'software training Tamil Nadu cities',
        'best coding institute Tamil Nadu',
      ],
      faqItems: [
        {
          question: 'Which cities in Tamil Nadu does ArivuOn Academy operate in?',
          answer: 'ArivuOn Academy operates in Chennai, Coimbatore, Madurai, Salem, Tiruchirappalli, Tirunelveli, Vellore, and Erode in Tamil Nadu.',
          order: 1,
        },
        {
          question: 'What is the best coding course to do in Tamil Nadu for placements?',
          answer: 'Python Programming and Full Stack Development are the highest-placement courses in Tamil Nadu, given strong demand from Chennai IT companies and the growing tech ecosystem in tier-2 cities like Coimbatore and Madurai.',
          order: 2,
        },
        {
          question: 'Does ArivuOn Academy offer courses in Tamil Nadu cities outside Chennai?',
          answer: 'Yes, ArivuOn Academy offers all courses in Coimbatore, Salem, Madurai, Tiruchirappalli, Tirunelveli, Vellore, and Erode — not just Chennai.',
          order: 3,
        },
      ],
    },

    schema: {
      schemaType: ['State', 'Place'],
      sameAs: ['https://en.wikipedia.org/wiki/Tamil_Nadu'],
    },

    activeCitySlugs: ['chennai', 'coimbatore', 'madurai', 'salem', 'tiruchirappalli', 'tirunelveli', 'vellore', 'erode'],
    featuredCourseSlugs: ['python-course', 'full-stack-development', 'data-science'],
  },

  // ─────────────────────────────────────────────
  // KARNATAKA
  // ─────────────────────────────────────────────
  {
    slug: 'karnataka',
    name: 'Karnataka',
    countrySlug: 'india',
    stateCode: 'KA',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-04-01',

    capital: 'Bengaluru',
    majorCities: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi', 'Belagavi'],
    languagesSpoken: ['Kannada', 'English'],
    borderingStates: ['Tamil Nadu', 'Kerala', 'Telangana', 'Andhra Pradesh', 'Goa', 'Maharashtra'],

    stateContext: `Karnataka is India's definitive technology capital, home to Bengaluru — the country's largest IT hub and the third-largest technology cluster in Asia. The state's technology ecosystem encompasses over 8,000 technology companies, including global R&D centers for Google, Microsoft, Amazon, and Flipkart, alongside a thriving startup ecosystem responsible for over 35% of India's funded startups. Karnataka produces approximately 100,000 engineering graduates annually, with the highest concentration in computer science.

ArivuOn Academy serves Karnataka's significant population of engineering graduates who seek placement-ready skills beyond what university curricula provide, particularly in emerging areas like machine learning, cloud infrastructure, and modern full-stack development frameworks.`,

    techEcosystemDescription: 'Bengaluru alone contributes over 30% of India\'s total IT exports. Karnataka is home to 4,000+ active startups and all major global technology corporations operate R&D centers in the state.',

    majorEmployers: ['Infosys', 'Wipro', 'Amazon India', 'Google India', 'Flipkart', 'Swiggy', 'Ola', 'Byju\'s', 'Razorpay', 'Zerodha'],
    notableInstitutions: ['IISc Bengaluru', 'IIT Dharwad', 'NITK Surathkal', 'BMS College of Engineering', 'PES University', 'RV College of Engineering'],
    jobMarketSummary: 'Karnataka has India\'s highest density of technology job openings, driven by Bengaluru\'s product startup ecosystem and MNC R&D centers. Demand is especially strong for ML, cloud, and React skills.',

    seo: {
      metaTitle: 'Coding Courses in Karnataka — ArivuOn Academy | Python, ML, Full Stack',
      metaDescription: 'ArivuOn Academy offers Python, Machine Learning, Full Stack Development and more across Karnataka. Build placement-ready skills for Bengaluru\'s tech companies.',
      ogImage: '/images/og/locations-karnataka.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/karnataka',
      focusKeyword: 'coding courses Karnataka',
      secondaryKeywords: ['Python course Karnataka', 'machine learning course Karnataka', 'full stack course Bengaluru'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy offers coding and technology courses in Karnataka, India, targeting engineering graduates and professionals seeking placement in Bengaluru\'s technology sector and Karnataka\'s growing tier-2 city tech clusters. Courses cover Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering.',
      entityContext: {
        organization: 'ArivuOn Academy',
        organizationType: 'EdTech Institute',
        geographicScope: 'Karnataka, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and professionals in Karnataka',
      },
      keyFacts: [
        'ArivuOn Academy operates in Karnataka, India\'s leading IT state.',
        'Karnataka is home to Bengaluru, India\'s largest technology hub.',
        'ArivuOn courses in Karnataka are aligned to Bengaluru startup and MNC hiring requirements.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding courses in Karnataka',
      queryVariants: ['ArivuOn Karnataka', 'Python course Karnataka', 'machine learning course Bengaluru'],
      faqItems: [
        {
          question: 'Does ArivuOn Academy have centers in Karnataka?',
          answer: 'Yes, ArivuOn Academy operates in Karnataka with courses aligned to Bengaluru IT sector hiring requirements.',
          order: 1,
        },
      ],
    },

    schema: {
      schemaType: ['State', 'Place'],
      sameAs: ['https://en.wikipedia.org/wiki/Karnataka'],
    },

    activeCitySlugs: [],
    featuredCourseSlugs: ['machine-learning', 'full-stack-development', 'ai-engineering'],
  },

  // ─────────────────────────────────────────────
  // KERALA
  // ─────────────────────────────────────────────
  {
    slug: 'kerala',
    name: 'Kerala',
    countrySlug: 'india',
    stateCode: 'KL',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-04-01',

    capital: 'Thiruvananthapuram',
    majorCities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kannur'],
    languagesSpoken: ['Malayalam', 'English'],
    borderingStates: ['Tamil Nadu', 'Karnataka'],

    stateContext: `Kerala stands out among Indian states for its combination of 100% literacy, exceptionally high English proficiency, and a state government that has made digital infrastructure and technology education a core policy priority through initiatives like Kerala IT Mission and the KELTRON training ecosystem. Kochi's Infopark and Technopark Thiruvananthapuram host over 400 IT companies between them, creating strong local demand for fresh developer talent.

Kerala also has a uniquely large overseas diaspora — particularly in the UAE, Oman, and Qatar — creating demand for skills that support migration to GCC tech markets, an area where ArivuOn's AWS DevOps and full-stack programs are particularly relevant.`,

    techEcosystemDescription: 'Kerala has two major IT parks: Technopark Thiruvananthapuram (Asia\'s largest IT park by area) and Infopark Kochi, together employing over 80,000 IT professionals. The state also produces 60,000+ engineering graduates annually.',

    majorEmployers: ['UST', 'IBS Software', 'Tata Elxsi', 'Ernst & Young India', 'Wipro Kochi', 'Infosys Thiruvananthapuram', 'IBM Kochi', 'CGI India', 'ITC Infotech'],
    notableInstitutions: ['IIT Palakkad', 'NIT Calicut', 'College of Engineering Thiruvananthapuram', 'Model Engineering College', 'Government Engineering College Thrissur'],
    jobMarketSummary: 'Kerala\'s IT sector focuses on enterprise software, BFSI technology, and aviation IT, with growing demand for cloud and DevOps professionals targeting GCC market placements.',

    seo: {
      metaTitle: 'Coding Courses in Kerala — ArivuOn Academy | Python, AWS DevOps, Full Stack',
      metaDescription: 'ArivuOn Academy offers coding courses across Kerala. Python, Full Stack Development, AWS DevOps and more — aligned to Kerala IT sector and GCC market requirements.',
      ogImage: '/images/og/locations-kerala.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/kerala',
      focusKeyword: 'coding courses Kerala',
      secondaryKeywords: ['Python course Kerala', 'AWS DevOps course Kerala', 'software training Kochi'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy provides technology training in Kerala, covering courses in Python, Full Stack Development, Data Science, AWS DevOps, and related disciplines. Kerala students benefit from proximity to IT parks in Kochi and Thiruvananthapuram, and ArivuOn courses are designed to meet both local IT sector requirements and overseas employment in GCC technology markets.',
      entityContext: {
        organization: 'ArivuOn Academy',
        organizationType: 'EdTech Institute',
        geographicScope: 'Kerala, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and professionals in Kerala seeking IT sector employment',
      },
      keyFacts: [
        'ArivuOn Academy operates in Kerala, home to Technopark and Infopark IT clusters.',
        'Kerala students are eligible for placements at local IT companies and GCC technology employers.',
        'AWS DevOps and Full Stack courses are particularly relevant for Kerala students targeting overseas placements.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding courses in Kerala',
      queryVariants: ['ArivuOn Kerala', 'Python course Kochi', 'AWS DevOps course Kerala'],
      faqItems: [
        {
          question: 'Does ArivuOn Academy have training centers in Kerala?',
          answer: 'Yes, ArivuOn Academy operates in Kerala with courses relevant to both Kerala IT parks and GCC overseas employment.',
          order: 1,
        },
      ],
    },

    schema: {
      schemaType: ['State', 'Place'],
      sameAs: ['https://en.wikipedia.org/wiki/Kerala'],
    },

    activeCitySlugs: [],
    featuredCourseSlugs: ['aws-devops', 'full-stack-development', 'python-course'],
  },

  // ─────────────────────────────────────────────
  // TELANGANA
  // ─────────────────────────────────────────────
  {
    slug: 'telangana',
    name: 'Telangana',
    countrySlug: 'india',
    stateCode: 'TS',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-04-01',

    capital: 'Hyderabad',
    majorCities: ['Hyderabad', 'Warangal', 'Karimnagar', 'Khammam', 'Nizamabad'],
    languagesSpoken: ['Telugu', 'Urdu', 'English'],
    borderingStates: ['Maharashtra', 'Karnataka', 'Andhra Pradesh', 'Chhattisgarh', 'Odisha'],

    stateContext: `Telangana, with Hyderabad as its capital, has emerged as India's second most important technology corridor after Bengaluru. HITEC City (Hyderabad Information Technology and Engineering Consultancy City) is home to global operations centers for Microsoft, Google, Apple, Amazon, Facebook, and virtually every major technology company. The state produced 120,000 engineering graduates in 2024, the majority in computer science disciplines.

The Telangana government's TS-iPASS policy and dedicated IT investment incentives have made Hyderabad particularly attractive to global companies seeking to expand India operations, creating an almost inexhaustible demand for mid-level and senior software developers.`,

    techEcosystemDescription: 'Hyderabad\'s HITEC City and Cyberabad district host operations for Apple, Microsoft, Google, Amazon, and Facebook, alongside 1,500+ IT companies. Telangana produced the second-highest number of engineering graduates in India in 2024.',

    majorEmployers: ['Microsoft Hyderabad', 'Google Hyderabad', 'Amazon Hyderabad', 'Apple India R&D', 'TCS Hyderabad', 'Infosys Hyderabad', 'Cyient', 'L&T Technology Services', 'WNS Global'],
    notableInstitutions: ['IIT Hyderabad', 'IIIT Hyderabad', 'BITS Pilani Hyderabad', 'NIT Warangal', 'Osmania University'],
    jobMarketSummary: 'Telangana has India\'s second-highest demand for software engineers, particularly in cloud, AI/ML, and enterprise full-stack development, driven by HITEC City\'s global technology operations.',

    seo: {
      metaTitle: 'Coding Courses in Telangana — ArivuOn Academy | Python, AI, Full Stack',
      metaDescription: 'ArivuOn Academy offers coding courses in Telangana. Python, AI Engineering, Full Stack Development and more — aligned to Hyderabad HITEC City hiring requirements.',
      ogImage: '/images/og/locations-telangana.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/telangana',
      focusKeyword: 'coding courses Telangana',
      secondaryKeywords: ['Python course Hyderabad', 'AI course Telangana', 'software training Hyderabad'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy offers programming and technology training in Telangana, aligned to Hyderabad\'s HITEC City technology corridor. Courses include Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, and AI Engineering. Telangana students are placed at companies in HITEC City, Cyberabad, and the broader Hyderabad technology ecosystem.',
      entityContext: {
        organization: 'ArivuOn Academy',
        organizationType: 'EdTech Institute',
        geographicScope: 'Telangana, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and professionals in Telangana targeting HITEC City employment',
      },
      keyFacts: [
        'ArivuOn Academy operates in Telangana, home to Hyderabad\'s HITEC City technology corridor.',
        'Telangana is India\'s second-largest IT state after Karnataka.',
        'ArivuOn Telangana courses are aligned to HITEC City company hiring requirements.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding courses in Telangana',
      queryVariants: ['ArivuOn Hyderabad', 'Python course Hyderabad', 'AI engineering course Telangana'],
      faqItems: [
        {
          question: 'Does ArivuOn Academy operate in Telangana?',
          answer: 'Yes, ArivuOn Academy offers courses in Telangana, with programs aligned to Hyderabad HITEC City technology sector hiring requirements.',
          order: 1,
        },
      ],
    },

    schema: {
      schemaType: ['State', 'Place'],
      sameAs: ['https://en.wikipedia.org/wiki/Telangana'],
    },

    activeCitySlugs: [],
    featuredCourseSlugs: ['ai-engineering', 'machine-learning', 'full-stack-development'],
  },

  // ─────────────────────────────────────────────
  // MAHARASHTRA
  // ─────────────────────────────────────────────
  {
    slug: 'maharashtra',
    name: 'Maharashtra',
    countrySlug: 'india',
    stateCode: 'MH',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-04-01',

    capital: 'Mumbai',
    majorCities: ['Mumbai', 'Pune', 'Nashik', 'Aurangabad', 'Nagpur'],
    languagesSpoken: ['Marathi', 'Hindi', 'English'],
    borderingStates: ['Gujarat', 'Madhya Pradesh', 'Chhattisgarh', 'Telangana', 'Karnataka', 'Goa'],

    stateContext: `Maharashtra is India's most economically productive state and home to Mumbai — India's financial capital — and Pune — one of the country's fastest-growing technology and manufacturing hubs. The state has over 12,000 IT and IT-enabled services companies, the largest concentration of fintech startups in India, and a booming SaaS ecosystem centered in Pune's Hinjawadi IT Park. Maharashtra's engineering college network produces 150,000+ graduates annually across computer science and allied disciplines.

Pune's proximity to Mumbai creates a unique market dynamic: fresh graduates who cannot afford Mumbai's cost of living access entry-level IT positions in Pune's growing IT park ecosystem, making cities like Pune particularly important markets for practical placement-focused technical education.`,

    techEcosystemDescription: 'Maharashtra\'s IT sector is anchored by Pune\'s Hinjawadi IT Park, Mumbai\'s fintech and BFSI technology corridor, and Nashik\'s emerging IT cluster. The state accounts for approximately 17% of India\'s total IT industry revenue.',

    majorEmployers: ['TCS Mumbai', 'Infosys Pune', 'Wipro Pune', 'Persistent Systems', 'Zensar Technologies', 'Mphasis', 'Bajaj Finserv Technology', 'HDFC Technology', 'Razorpay', 'PayU India'],
    notableInstitutions: ['IIT Bombay', 'COEP Technological University', 'VJTI Mumbai', 'MIT College of Engineering Pune', 'NIT Nagpur', 'BITS Pilani Goa (nearby)'],
    jobMarketSummary: 'Maharashtra offers strong demand across fintech, BFSI technology, SaaS product companies, and IT services. Python (data and backend), React (product companies), and AWS DevOps are the highest-demand skills in the state.',

    seo: {
      metaTitle: 'Coding Courses in Maharashtra — ArivuOn Academy | Python, React, Full Stack',
      metaDescription: 'ArivuOn Academy offers coding courses in Maharashtra. Python, React, Full Stack Development, AWS DevOps and more — aligned to Pune IT Park and Mumbai fintech hiring.',
      ogImage: '/images/og/locations-maharashtra.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/maharashtra',
      focusKeyword: 'coding courses Maharashtra',
      secondaryKeywords: ['Python course Pune', 'React course Mumbai', 'full stack development Maharashtra'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy provides technology training in Maharashtra, serving students targeting placement in Pune\'s Hinjawadi IT Park and Mumbai\'s fintech and BFSI technology sector. Courses include Python, Full Stack Development, React, Data Science, Machine Learning, AWS DevOps, Java, and AI Engineering.',
      entityContext: {
        organization: 'ArivuOn Academy',
        organizationType: 'EdTech Institute',
        geographicScope: 'Maharashtra, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and professionals in Maharashtra targeting Pune IT and Mumbai fintech employment',
      },
      keyFacts: [
        'ArivuOn Academy operates in Maharashtra, India\'s largest state by IT company count.',
        'Maharashtra courses are aligned to Pune IT park and Mumbai fintech hiring requirements.',
        'React and Python are the most in-demand skills in Maharashtra\'s technology sector.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding courses in Maharashtra',
      queryVariants: ['ArivuOn Pune', 'Python course Pune', 'React course Mumbai', 'full stack Maharashtra'],
      faqItems: [
        {
          question: 'Does ArivuOn Academy have training centers in Maharashtra?',
          answer: 'Yes, ArivuOn Academy operates in Maharashtra with courses aligned to Pune IT park and Mumbai fintech technology sector requirements.',
          order: 1,
        },
      ],
    },

    schema: {
      schemaType: ['State', 'Place'],
      sameAs: ['https://en.wikipedia.org/wiki/Maharashtra'],
    },

    activeCitySlugs: [],
    featuredCourseSlugs: ['react', 'python-course', 'aws-devops'],
  },
];

export function getStateBySlug(stateSlug: string, countrySlug: string): State | undefined {
  return states.find(
    (s) => s.slug === stateSlug && s.countrySlug === countrySlug && s.status === 'published'
  );
}

export function getStatesByCountry(countrySlug: string): State[] {
  return states.filter((s) => s.countrySlug === countrySlug && s.status === 'published');
}

export function getAllStateSlugs(): { country: string; state: string }[] {
  return states
    .filter((s) => s.status === 'published')
    .map((s) => ({ country: s.countrySlug, state: s.slug }));
}