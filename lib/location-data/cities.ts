import type { City, Instructor, Testimonial } from './types';

// ─────────────────────────────────────────────
// SHARED INSTRUCTORS POOL — Tamil Nadu
// ─────────────────────────────────────────────

const instructors: Record<string, Instructor> = {
  priya_chennai: {
    id: 'priya-chennai-001',
    name: 'Priya Subramanian',
    citySlug: 'chennai',
    courseSlugs: ['python-course', 'data-science', 'machine-learning'],
    bio: 'Priya has 9 years of experience in data engineering and machine learning at Zoho Corporation and Freshworks. She has trained over 400 students at Crack Leap Chennai and specialises in bridging the gap between academic Python and industry-grade data pipelines.',
    experienceYears: 9,
    background: ['Zoho Corporation — Data Engineer', 'Freshworks — Senior ML Engineer'],
    linkedInUrl: 'https://linkedin.com/in/priya-subramanian-chennai',
  },
  karthik_chennai: {
    id: 'karthik-chennai-001',
    name: 'Karthik Rajan',
    citySlug: 'chennai',
    courseSlugs: ['full-stack-development', 'react', 'aws-devops'],
    bio: 'Karthik is a full-stack architect with 11 years of industry experience at ThoughtWorks and Hexaware Technologies. He leads Crack Leap Chennai\'s full-stack and DevOps programs, with a focus on real-world project-based learning.',
    experienceYears: 11,
    background: ['ThoughtWorks — Senior Consultant', 'Hexaware Technologies — Tech Lead'],
  },
  anand_coimbatore: {
    id: 'anand-coimbatore-001',
    name: 'Anand Krishnan',
    citySlug: 'coimbatore',
    courseSlugs: ['python-course', 'full-stack-development', 'java'],
    bio: 'Anand brings 8 years of software development experience from Coimbatore-based IT companies including Robert Bosch Engineering and Codissia-affiliated firms. He focuses on practical, employment-first programming education for Coimbatore\'s engineering graduate population.',
    experienceYears: 8,
    background: ['Robert Bosch Engineering India — Software Engineer', 'LG Soft India — Senior Developer'],
  },
  meena_coimbatore: {
    id: 'meena-coimbatore-001',
    name: 'Meena Palaniswami',
    citySlug: 'coimbatore',
    courseSlugs: ['data-science', 'machine-learning', 'ai-engineering'],
    bio: 'Meena has 7 years of applied data science experience in Coimbatore\'s textile and manufacturing analytics sector, having implemented ML-based demand forecasting systems for major Coimbatore exporters before joining Crack Leap.',
    experienceYears: 7,
    background: ['Pricol Limited — Data Analyst', 'Roots Multiclean — Analytics Lead'],
  },
  senthil_madurai: {
    id: 'senthil-madurai-001',
    name: 'Senthil Kumar',
    citySlug: 'madurai',
    courseSlugs: ['python-course', 'data-science', 'java'],
    bio: 'Senthil has 7 years of experience in enterprise software development, working with companies based in Madurai and remotely for Chennai IT firms. He is a certified Java developer and Python specialist who has mentored over 200 Crack Leap Madurai graduates.',
    experienceYears: 7,
    background: ['Madura Coats Technology Division — Software Engineer', 'Remote consultant for Chennai IT firms'],
  },
  divya_madurai: {
    id: 'divya-madurai-001',
    name: 'Divya Muthuswamy',
    citySlug: 'madurai',
    courseSlugs: ['full-stack-development', 'react', 'aws-devops'],
    bio: 'Divya is a full-stack developer with 6 years of experience, having built web applications for e-commerce and healthcare startups. She joined Crack Leap Madurai to teach modern full-stack development with React and Node.js.',
    experienceYears: 6,
    background: ['Healthcare startup (Madurai) — Full Stack Developer', 'Freelance — React/Node.js Consultant'],
  },
  vijay_salem: {
    id: 'vijay-salem-001',
    name: 'Vijay Arumugam',
    citySlug: 'salem',
    courseSlugs: ['python-course', 'data-science', 'machine-learning', 'ai-engineering'],
    bio: 'Vijay has 8 years of experience in Python development and machine learning, including a 4-year tenure at a Bengaluru-based AI product company before returning to Salem to train the next generation of local engineers. He is known for delivering AI/ML concepts with Salem-specific industry context.',
    experienceYears: 8,
    background: ['Bengaluru AI startup — ML Engineer', 'Salem-based manufacturing analytics — Data Scientist'],
  },
  kavitha_salem: {
    id: 'kavitha-salem-001',
    name: 'Kavitha Natarajan',
    citySlug: 'salem',
    courseSlugs: ['full-stack-development', 'react', 'java', 'aws-devops'],
    bio: 'Kavitha is a full-stack engineer with 7 years of experience in Java and React development. She previously worked for Chennai IT services companies and returned to Salem to lead Crack Leap\'s full-stack and Java programs for local students.',
    experienceYears: 7,
    background: ['HCL Technologies Chennai — Java Developer', 'Cognizant Chennai — Senior Developer'],
  },
  ramesh_trichy: {
    id: 'ramesh-trichy-001',
    name: 'Ramesh Palani',
    citySlug: 'tiruchirappalli',
    courseSlugs: ['python-course', 'full-stack-development', 'data-science'],
    bio: 'Ramesh has 9 years of software development and data analytics experience, with a background in BHEL Trichy\'s IT systems before transitioning to software development training. He brings a strong engineering-to-IT crossover perspective to Crack Leap Trichy.',
    experienceYears: 9,
    background: ['BHEL Trichy — IT Systems Engineer', 'Infosys Trichy — Software Engineer'],
  },
  sudha_tirunelveli: {
    id: 'sudha-tirunelveli-001',
    name: 'Sudha Krishnaswamy',
    citySlug: 'tirunelveli',
    courseSlugs: ['python-course', 'data-science', 'java', 'full-stack-development'],
    bio: 'Sudha has 8 years of experience in Java and Python development, with prior roles at IT companies in Chennai and remote work for Bengaluru startups. She returned to Tirunelveli to address the shortage of quality technical training in the region.',
    experienceYears: 8,
    background: ['CGI Chennai — Java Developer', 'Remote Bengaluru startup — Python Backend Engineer'],
  },
  arjun_vellore: {
    id: 'arjun-vellore-001',
    name: 'Arjun Chandrasekaran',
    citySlug: 'vellore',
    courseSlugs: ['python-course', 'machine-learning', 'data-science', 'ai-engineering'],
    bio: 'Arjun has 7 years of experience in ML and data science, with a research background from VIT University (Vellore). He worked at a Bengaluru AI company for 4 years before joining Crack Leap Vellore to build the ML and AI Engineering programs.',
    experienceYears: 7,
    background: ['VIT University — Research Assistant (ML)', 'Bengaluru AI startup — Data Scientist'],
  },
  lakshmi_erode: {
    id: 'lakshmi-erode-001',
    name: 'Lakshmi Selvaraj',
    citySlug: 'erode',
    courseSlugs: ['python-course', 'full-stack-development', 'data-science', 'java'],
    bio: 'Lakshmi has 6 years of full-stack development experience, having worked for IT companies serving Erode\'s textile and MSME sector before joining Crack Leap Erode to focus on Python and web development training for the city\'s engineering graduate community.',
    experienceYears: 6,
    background: ['Local IT services company (Erode) — Full Stack Developer', 'Remote work — Python/Django Developer'],
  },
};

// ─────────────────────────────────────────────
// CITIES DATA
// ─────────────────────────────────────────────

export const cities: City[] = [
  // ─────────────────────────────────────────────
  // CHENNAI
  // ─────────────────────────────────────────────
  {
    slug: 'chennai',
    name: 'Chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    districtName: 'Chennai District',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',

    address: {
      streetAddress: '2nd Floor, Olympia Tech Park, Guindy',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '600032',
      addressCountry: 'IN',
      displayAddress: '2nd Floor, Olympia Tech Park, Guindy, Chennai, Tamil Nadu 600032',
    },
    coordinates: { latitude: 13.0067, longitude: 80.2206 },
    googleMapsUrl: 'https://maps.google.com/?q=Olympia+Tech+Park+Guindy+Chennai',
    phone: '+91-44-4567-8901',
    email: 'chennai@arivuon.com',
    whatsapp: '+91-98765-43210',
    openingHours: ['Mo-Sa 09:00-18:00'],
    nearbyLandmarks: ['Guindy Metro Station', 'IIT Madras Gate 2', 'TIDEL Park'],
    nearestRailway: 'Guindy Railway Station (1.2 km)',
    nearestBusStand: 'Guindy Bus Terminus (0.8 km)',

    cityContext: `Chennai is Tamil Nadu's capital and India's fourth-largest city, home to one of the country's most mature IT sectors. The Tidel Park and Elcot SEZ on the Old Mahabalipuram Road (OMR) corridor concentrate a critical mass of IT companies — from MNC delivery centres to product startups — making Chennai a consistent absorber of fresh engineering talent. Unlike purely services-driven IT cities, Chennai has a growing base of product companies including Zoho, Freshworks, and Chargebee, which are raising the bar on the quality of developers they hire and shifting demand toward strong fundamentals in Python, modern JavaScript frameworks, and cloud infrastructure.

Chennai's engineering graduate supply is substantial — Anna University alone affiliates over 500 engineering colleges across Tamil Nadu — which means competition for IT jobs is intense and candidates with practical, project-demonstrated skills from institutes like Crack Leap have a measurable advantage over pure degree-holders with no applied experience.`,

    jobMarketSummary: 'Chennai has 3,000+ active IT companies hiring across all seniority levels. Entry-level demand is highest for Python developers, full-stack engineers, and data analysts. Product companies like Zoho and Freshworks exclusively hire candidates with strong coding fundamentals.',

    localHiringCompanies: ['Zoho Corporation', 'Freshworks', 'TCS', 'Infosys', 'Wipro', 'Cognizant', 'HCL Technologies', 'Hexaware Technologies', 'Ramco Systems', 'PayU India', 'Chargebee', 'Kissflow'],
    studentDemographicsContext: 'Chennai hosts 180+ engineering colleges within 60 km, producing an estimated 40,000 CS/IT graduates annually. Crack Leap Chennai primarily serves final-year students and fresh graduates within the city and OMR corridor.',

    testimonials: [
      {
        id: 'test-chennai-001',
        studentName: 'Arun Vijayakumar',
        citySlug: 'chennai',
        courseSlug: 'python-course',
        outcome: 'Placed as Python Developer at Freshworks, Chennai — ₹5.2 LPA',
        package: '₹5.2 LPA',
        quote: 'Crack Leap Chennai\'s Python course focused entirely on real projects — I built a REST API and a data pipeline before the course ended. Freshworks\' technical interview was easy after that.',
        companyName: 'Freshworks',
        placementMonth: 'January 2025',
      },
      {
        id: 'test-chennai-002',
        studentName: 'Preethi Ramachandran',
        citySlug: 'chennai',
        courseSlug: 'full-stack-development',
        outcome: 'Placed as Junior Full Stack Developer at Zoho Corporation — ₹4.8 LPA',
        package: '₹4.8 LPA',
        quote: 'I had a basic degree in ECE and zero web development experience. Crack Leap\'s full-stack course changed that. The instructors pushed us to build real applications, not just follow tutorials.',
        companyName: 'Zoho Corporation',
        placementMonth: 'March 2025',
      },
    ],

    instructors: [instructors.priya_chennai, instructors.karthik_chennai],
    totalStudentsTrained: 850,
    placementRate: 87,
    activeCoursesSlugs: ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'],

    seo: {
      metaTitle: 'Coding Courses in Chennai — Crack Leap Academy | Python, Full Stack, Data Science',
      metaDescription: 'Crack Leap Academy Chennai offers Python, Full Stack Development, Data Science, ML, AWS DevOps and more. Industry-aligned batches at Guindy. Enroll today.',
      ogImage: '/images/og/locations-chennai.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai',
      focusKeyword: 'coding courses in Chennai',
      secondaryKeywords: ['Python course Chennai', 'full stack development Chennai', 'data science course Chennai', 'best coding institute Chennai'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'Crack Leap Academy Chennai is located at Olympia Tech Park, Guindy, Chennai, Tamil Nadu 600032. The center offers Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering courses. Fees range from ₹10,999 to ₹22,999. Batches are available on weekdays and weekends, in both in-person and online modes. Students are placed at companies including Zoho, Freshworks, TCS, and Infosys.',
      entityContext: {
        organization: 'Crack Leap Academy Chennai',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Chennai, Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and IT professionals in Chennai and the OMR corridor',
      },
      keyFacts: [
        'Crack Leap Academy Chennai is located at Olympia Tech Park, Guindy, Chennai.',
        'The Chennai center offers all 8 Crack Leap courses including AI Engineering.',
        'Over 850 students have trained at Crack Leap Chennai with an 87% placement rate.',
        'Chennai students are placed at Zoho, Freshworks, TCS, Infosys, and 100+ other IT companies.',
        'Course fees in Chennai range from ₹10,999 to ₹22,999 with EMI options.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'Python course in Chennai',
      queryVariants: ['Crack Leap Chennai', 'coding institute Chennai Guindy', 'full stack course Chennai', 'data science Chennai'],
      faqItems: [
        {
          question: 'Where is Crack Leap Academy located in Chennai?',
          answer: 'Crack Leap Academy Chennai is located at Olympia Tech Park, Guindy, Chennai, Tamil Nadu 600032, near Guindy Metro Station.',
          order: 1,
        },
        {
          question: 'What is the fee for the Python course at Crack Leap Chennai?',
          answer: 'The Python Programming course at Crack Leap Academy Chennai is priced at ₹10,999, with EMI options starting from ₹1,833 per month.',
          order: 2,
        },
        {
          question: 'Does Crack Leap Academy Chennai offer placement support?',
          answer: 'Yes, Crack Leap Academy Chennai has an 87% placement rate, with graduates placed at companies including Zoho, Freshworks, TCS, and Infosys.',
          order: 3,
        },
        {
          question: 'What is the best course to take at Crack Leap Chennai for a fresher?',
          answer: 'For freshers in Chennai, Python Programming or Full Stack Development are the strongest choices given high demand at Chennai\'s product companies and IT services firms.',
          order: 4,
        },
      ],
      citySpecificFAQ: [
        {
          question: 'Is Crack Leap Academy Chennai near the OMR IT corridor?',
          answer: 'Crack Leap Chennai is located at Guindy, which is 15 minutes from the OMR tech corridor by Metro, making it convenient for students targeting jobs at OMR-based IT companies.',
          order: 5,
        },
      ],
    },

    schema: {
      schemaType: ['LocalBusiness', 'EducationalOrganization'],
      priceRange: '₹₹',
      aggregateRating: { ratingValue: 4.8, reviewCount: 312, bestRating: 5 },
      sameAs: ['https://g.co/arivuon-chennai'],
    },

    relatedBlogSlugs: ['python-jobs-chennai-2025', 'it-companies-hiring-chennai'],
    relatedResourceSlugs: ['python-roadmap', 'full-stack-roadmap'],
  },

  // ─────────────────────────────────────────────
  // COIMBATORE
  // ─────────────────────────────────────────────
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    districtName: 'Coimbatore District',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',

    address: {
      streetAddress: '3rd Floor, Srivari Centre, Avinashi Road',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '641018',
      addressCountry: 'IN',
      displayAddress: '3rd Floor, Srivari Centre, Avinashi Road, Coimbatore, Tamil Nadu 641018',
    },
    coordinates: { latitude: 11.0168, longitude: 76.9558 },
    phone: '+91-422-4567-890',
    email: 'coimbatore@arivuon.com',
    whatsapp: '+91-98765-43211',
    openingHours: ['Mo-Sa 09:00-18:00'],
    nearbyLandmarks: ['Coimbatore Junction Railway Station', 'Gandhipuram Bus Stand', 'TIDEL Park Coimbatore'],
    nearestRailway: 'Coimbatore Junction (2.5 km)',
    nearestBusStand: 'Gandhipuram Central Bus Stand (1.8 km)',

    cityContext: `Coimbatore, widely called the "Manchester of South India" for its industrial heritage, has undergone a significant technology transition in the past decade. The city's traditional strengths in textiles, engineering, and pump manufacturing created a large base of engineering colleges — PSG Tech, Sri Ramakrishna Engineering College, Amrita University, and dozens more — producing tens of thousands of CS and ECE graduates annually who increasingly seek software careers locally rather than migrating to Chennai or Bengaluru.

TIDEL Park Coimbatore and the city's growing cluster of IT companies provide local employment for this graduate population, but the gap between university-produced skills and industry expectations is wide. Companies like Robert Bosch, LG Soft, and Kovai.co — a Coimbatore-born SaaS product company — have become active recruitment targets for Crack Leap Coimbatore graduates, particularly those with Python and full-stack development skills.`,

    jobMarketSummary: 'Coimbatore has a growing IT sector anchored by TIDEL Park, with strong demand for Python, Java, and full-stack developers at IT services companies and Coimbatore-based product startups like Kovai.co.',

    localHiringCompanies: ['Kovai.co', 'Robert Bosch Engineering India', 'LG Soft India', 'Kaar Technologies', 'Codissia Tech', 'iLink Digital', 'IFB Industries IT', 'Algoworks', 'ZiffyTech'],
    studentDemographicsContext: 'Coimbatore has 60+ engineering colleges within 30 km including PSG Tech and SREC, producing an estimated 15,000+ CS/IT graduates annually.',

    testimonials: [
      {
        id: 'test-coimbatore-001',
        studentName: 'Balaji Sundaresan',
        citySlug: 'coimbatore',
        courseSlug: 'python-course',
        outcome: 'Placed as Junior Python Developer at Kovai.co — ₹4.2 LPA',
        package: '₹4.2 LPA',
        quote: 'I was a mechanical engineering graduate with zero coding background. Crack Leap Coimbatore\'s Python course turned me into a developer in 12 weeks. Kovai.co hired me straight from the placement drive.',
        companyName: 'Kovai.co',
        placementMonth: 'February 2025',
      },
      {
        id: 'test-coimbatore-002',
        studentName: 'Nandhini Krishnan',
        citySlug: 'coimbatore',
        courseSlug: 'data-science',
        outcome: 'Placed as Data Analyst at Robert Bosch Engineering India, Coimbatore — ₹5.1 LPA',
        package: '₹5.1 LPA',
        quote: 'The data science course at Crack Leap Coimbatore was the most practical training I\'ve had. Real datasets, real projects, real outcomes.',
        companyName: 'Robert Bosch Engineering India',
        placementMonth: 'April 2025',
      },
    ],

    instructors: [instructors.anand_coimbatore, instructors.meena_coimbatore],
    totalStudentsTrained: 620,
    placementRate: 84,
    activeCoursesSlugs: ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'],

    seo: {
      metaTitle: 'Coding Courses in Coimbatore — Crack Leap Academy | Python, Full Stack, Data Science',
      metaDescription: 'Crack Leap Academy Coimbatore offers Python, Full Stack, Data Science and more. Industry-aligned batches near TIDEL Park, Avinashi Road. Enroll today.',
      ogImage: '/images/og/locations-coimbatore.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/coimbatore',
      focusKeyword: 'coding courses in Coimbatore',
      secondaryKeywords: ['Python course Coimbatore', 'data science Coimbatore', 'software training Coimbatore', 'best coding institute Coimbatore'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'Crack Leap Academy Coimbatore is located at Srivari Centre, Avinashi Road, Coimbatore, Tamil Nadu 641018. The center offers Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering. Fees range from ₹9,999 to ₹21,999. Students are placed at Coimbatore companies including Kovai.co, Robert Bosch Engineering, and LG Soft India.',
      entityContext: {
        organization: 'Crack Leap Academy Coimbatore',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Coimbatore, Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and professionals in Coimbatore and western Tamil Nadu',
      },
      keyFacts: [
        'Crack Leap Academy Coimbatore is located at Srivari Centre, Avinashi Road, Coimbatore.',
        'Over 620 students have trained at Crack Leap Coimbatore with an 84% placement rate.',
        'Coimbatore students are placed at Kovai.co, Robert Bosch, LG Soft India, and Kaar Technologies.',
        'Course fees in Coimbatore range from ₹9,999 to ₹21,999.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding course in Coimbatore',
      queryVariants: ['Python course Coimbatore', 'Crack Leap Coimbatore', 'data science course Coimbatore', 'best programming institute Coimbatore'],
      faqItems: [
        {
          question: 'Where is Crack Leap Academy located in Coimbatore?',
          answer: 'Crack Leap Academy Coimbatore is located at Srivari Centre, 3rd Floor, Avinashi Road, Coimbatore, Tamil Nadu 641018.',
          order: 1,
        },
        {
          question: 'What coding courses are available at Crack Leap Coimbatore?',
          answer: 'Crack Leap Coimbatore offers Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering.',
          order: 2,
        },
        {
          question: 'What companies hire from Crack Leap Academy Coimbatore?',
          answer: 'Crack Leap Coimbatore graduates are hired by Kovai.co, Robert Bosch Engineering India, LG Soft India, Kaar Technologies, and other Coimbatore IT companies.',
          order: 3,
        },
      ],
      citySpecificFAQ: [
        {
          question: 'Is Crack Leap Coimbatore near TIDEL Park?',
          answer: 'Crack Leap Coimbatore on Avinashi Road is 10 minutes from TIDEL Park Coimbatore, making it convenient for students targeting IT park employment.',
          order: 4,
        },
      ],
    },

    schema: {
      schemaType: ['LocalBusiness', 'EducationalOrganization'],
      priceRange: '₹₹',
      aggregateRating: { ratingValue: 4.7, reviewCount: 198, bestRating: 5 },
    },

    relatedResourceSlugs: ['python-roadmap', 'data-science-roadmap'],
  },

  // ─────────────────────────────────────────────
  // MADURAI
  // ─────────────────────────────────────────────
  {
    slug: 'madurai',
    name: 'Madurai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    districtName: 'Madurai District',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-02-01',

    address: {
      streetAddress: '1st Floor, Kumaran Towers, Anna Nagar',
      addressLocality: 'Madurai',
      addressRegion: 'Tamil Nadu',
      postalCode: '625020',
      addressCountry: 'IN',
      displayAddress: '1st Floor, Kumaran Towers, Anna Nagar, Madurai, Tamil Nadu 625020',
    },
    coordinates: { latitude: 9.9252, longitude: 78.1198 },
    phone: '+91-452-4567-890',
    email: 'madurai@arivuon.com',
    whatsapp: '+91-98765-43212',
    openingHours: ['Mo-Sa 09:00-18:00'],
    nearbyLandmarks: ['Madurai Junction Railway Station', 'Periyar Bus Stand', 'Madurai IT Park'],
    nearestRailway: 'Madurai Junction (3 km)',
    nearestBusStand: 'Periyar Bus Stand (2.5 km)',

    cityContext: `Madurai is Tamil Nadu's second-oldest city and third-largest urban agglomeration, with a growing IT sector anchored by state-government-developed IT parks and a cluster of IT services companies that have found Madurai's lower cost base and large engineering graduate pool attractive. The city is home to prominent engineering colleges including Thiagarajar College of Engineering and Mepco Schlenk Engineering College, producing thousands of CS and IT graduates who have historically needed to migrate to Chennai for employment.

Crack Leap Madurai's presence directly addresses this migration pressure: graduates who complete Crack Leap's courses are equipped to compete for positions at Madurai IT Park companies and with Chennai firms that accept remote and hybrid employees, allowing them to build careers locally.`,

    jobMarketSummary: 'Madurai\'s IT sector is growing steadily, with IT park-based companies hiring Java, Python, and full-stack developers. Chennai-based firms also recruit Madurai graduates for hybrid roles.',

    localHiringCompanies: ['Madura Coats Technology', 'iLink Digital Madurai', 'Infosys BPO Madurai', 'EID Parry IT', 'Wipro Madurai', 'Concentrix Madurai', 'Conduent', 'CSS Corp Madurai'],
    studentDemographicsContext: 'Madurai has 40+ engineering colleges within 40 km, producing 10,000+ CS/IT graduates annually. Many students seek local employment to stay close to family.',

    testimonials: [
      {
        id: 'test-madurai-001',
        studentName: 'Thirumalai Selvam',
        citySlug: 'madurai',
        courseSlug: 'python-course',
        outcome: 'Placed as Python Developer at iLink Digital Madurai — ₹3.8 LPA',
        package: '₹3.8 LPA',
        quote: 'I was unemployed for 8 months after my degree. Crack Leap Madurai\'s Python course got me job-ready in 10 weeks and placed locally so I didn\'t have to move to Chennai.',
        companyName: 'iLink Digital',
        placementMonth: 'March 2025',
      },
    ],

    instructors: [instructors.senthil_madurai, instructors.divya_madurai],
    totalStudentsTrained: 410,
    placementRate: 81,
    activeCoursesSlugs: ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'],

    seo: {
      metaTitle: 'Coding Courses in Madurai — Crack Leap Academy | Python, Java, Full Stack',
      metaDescription: 'Crack Leap Academy Madurai offers Python, Java, Full Stack Development, Data Science and more at Anna Nagar, Madurai. Local placements at Madurai IT companies.',
      ogImage: '/images/og/locations-madurai.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/madurai',
      focusKeyword: 'coding courses in Madurai',
      secondaryKeywords: ['Python course Madurai', 'Java course Madurai', 'software training Madurai', 'best coding institute Madurai'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'Crack Leap Academy Madurai is located at Kumaran Towers, Anna Nagar, Madurai, Tamil Nadu 625020. The center offers Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering. Course fees range from ₹9,499 to ₹20,999. Madurai students benefit from local placement support at IT park companies and hybrid-role opportunities with Chennai firms.',
      entityContext: {
        organization: 'Crack Leap Academy Madurai',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Madurai, Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates seeking local IT employment in Madurai and southern Tamil Nadu',
      },
      keyFacts: [
        'Crack Leap Academy Madurai is at Kumaran Towers, Anna Nagar, Madurai, Tamil Nadu.',
        'Over 410 students trained at Crack Leap Madurai with an 81% placement rate.',
        'Madurai graduates are placed at iLink Digital, Infosys BPO, Wipro, and other local IT companies.',
        'Course fees in Madurai range from ₹9,499 to ₹20,999.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding course in Madurai',
      queryVariants: ['Python course Madurai', 'Crack Leap Madurai', 'software training Madurai', 'IT course Madurai'],
      faqItems: [
        {
          question: 'Where is Crack Leap Academy in Madurai?',
          answer: 'Crack Leap Academy Madurai is at Kumaran Towers, 1st Floor, Anna Nagar, Madurai, Tamil Nadu 625020.',
          order: 1,
        },
        {
          question: 'Can I get a job in Madurai after completing Crack Leap courses?',
          answer: 'Yes, Crack Leap Madurai has an 81% placement rate and works with local IT park companies including iLink Digital, Infosys BPO, and Wipro Madurai.',
          order: 2,
        },
      ],
      citySpecificFAQ: [],
    },

    schema: {
      schemaType: ['LocalBusiness', 'EducationalOrganization'],
      priceRange: '₹₹',
      aggregateRating: { ratingValue: 4.6, reviewCount: 143, bestRating: 5 },
    },

    relatedResourceSlugs: ['python-roadmap', 'java-roadmap'],
  },

  // ─────────────────────────────────────────────
  // SALEM
  // ─────────────────────────────────────────────
  {
    slug: 'salem',
    name: 'Salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    districtName: 'Salem District',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-02-01',

    address: {
      streetAddress: '2nd Floor, Shenbagam Towers, Junction Main Road',
      addressLocality: 'Salem',
      addressRegion: 'Tamil Nadu',
      postalCode: '636004',
      addressCountry: 'IN',
      displayAddress: '2nd Floor, Shenbagam Towers, Junction Main Road, Salem, Tamil Nadu 636004',
    },
    coordinates: { latitude: 11.6643, longitude: 78.1460 },
    phone: '+91-427-4567-890',
    email: 'salem@arivuon.com',
    whatsapp: '+91-98765-43213',
    openingHours: ['Mo-Sa 09:00-18:00'],
    nearbyLandmarks: ['Salem Junction Railway Station', 'New Bus Stand Salem', 'Five Roads Junction'],
    nearestRailway: 'Salem Junction (1.5 km)',
    nearestBusStand: 'Salem New Bus Stand (2 km)',

    cityContext: `Salem is Tamil Nadu's fifth-largest city and a significant industrial centre known for steel, textiles, and turmeric trading — industries that are increasingly incorporating data analytics and automation. The city has a dense engineering college ecosystem including Salem College of Engineering, AVS Engineering College, and Annai Mathammal Sheela Engineering College, producing several thousand CS and IT graduates each year who have historically migrated to Chennai or Bengaluru for software jobs.

Salem's emerging IT ecosystem, centred around a growing number of IT service companies and analytics firms, combined with a low cost of living relative to metro cities, is making it increasingly viable for students to build software careers locally. Crack Leap Salem's courses are specifically calibrated to the skills demanded by Salem-area companies and to prepare students for remote roles with Chennai and Bengaluru firms — a pathway that has become increasingly accessible since 2020.`,

    jobMarketSummary: 'Salem has a growing base of IT service companies and analytics firms alongside traditional industrial businesses adopting data tools. Python, data science, and full-stack skills are highest in demand. Remote work with Chennai/Bengaluru firms is a significant employment pathway.',

    localHiringCompanies: ['Steel Authority of India (IT division)', 'iTrackers', 'Athena Technology Solutions', 'Seven Hills IT', 'Salem Steel Plant IT', 'Vee Technologies', 'Ramsons Group IT'],
    studentDemographicsContext: 'Salem has 25+ engineering colleges within 30 km producing 6,000+ CS/IT graduates annually. A significant proportion are first-generation engineering graduates from the region.',

    testimonials: [
      {
        id: 'test-salem-001',
        studentName: 'Gokul Krishnaswamy',
        citySlug: 'salem',
        courseSlug: 'python-course',
        outcome: 'Placed as Python Developer at Vee Technologies Salem — ₹3.6 LPA',
        package: '₹3.6 LPA',
        quote: 'I completed my degree in 2023 and couldn\'t find a job for a year. Crack Leap Salem gave me Python skills that were actually marketable. Vee Technologies hired me 3 weeks after I finished the course.',
        companyName: 'Vee Technologies',
        placementMonth: 'March 2025',
      },
      {
        id: 'test-salem-002',
        studentName: 'Deepika Arumugam',
        citySlug: 'salem',
        courseSlug: 'data-science',
        outcome: 'Placed as Data Analyst at a Chennai firm (remote from Salem) — ₹4.4 LPA',
        package: '₹4.4 LPA',
        quote: 'Crack Leap Salem\'s data science program showed me I could work for Chennai companies while living in Salem. The remote-ready skills they taught made the difference.',
        companyName: 'Chennai IT firm (remote)',
        placementMonth: 'April 2025',
      },
    ],

    instructors: [instructors.vijay_salem, instructors.kavitha_salem],
    totalStudentsTrained: 310,
    placementRate: 80,
    activeCoursesSlugs: ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'],

    seo: {
      metaTitle: 'Coding Courses in Salem, Tamil Nadu — Crack Leap Academy | Python, Data Science, Full Stack',
      metaDescription: 'Crack Leap Academy Salem offers Python, Data Science, Full Stack Development, ML and more at Junction Main Road, Salem. Local placements + remote work pathways. Enroll today.',
      ogImage: '/images/og/locations-salem.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem',
      focusKeyword: 'coding courses in Salem Tamil Nadu',
      secondaryKeywords: ['Python course Salem', 'data science Salem', 'software training Salem Tamil Nadu', 'best coding institute Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'Crack Leap Academy Salem is located at Shenbagam Towers, Junction Main Road, Salem, Tamil Nadu 636004, near Salem Junction Railway Station. The center offers Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering courses. Course fees range from ₹8,999 to ₹19,999. Salem students are placed at local IT companies and in remote roles with Chennai and Bengaluru firms. Contact: +91-427-4567-890.',
      entityContext: {
        organization: 'Crack Leap Academy Salem',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Salem, Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and working professionals in Salem, Tamil Nadu seeking IT sector employment',
      },
      keyFacts: [
        'Crack Leap Academy Salem is at Shenbagam Towers, Junction Main Road, Salem, Tamil Nadu 636004.',
        'Over 310 students have been trained at Crack Leap Salem with an 80% placement rate.',
        'Salem graduates are placed at Vee Technologies, Athena Technology Solutions, and remote-hire Chennai IT firms.',
        'Course fees in Salem range from ₹8,999 to ₹19,999 with EMI options.',
        'Salem center offers weekday and weekend batches in both in-person and online modes.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'Python course in Salem Tamil Nadu',
      queryVariants: [
        'Crack Leap Salem',
        'coding institute Salem Tamil Nadu',
        'data science course Salem',
        'software training Salem',
        'best IT course Salem',
      ],
      faqItems: [
        {
          question: 'Where is Crack Leap Academy Salem located?',
          answer: 'Crack Leap Academy Salem is at Shenbagam Towers, 2nd Floor, Junction Main Road, Salem, Tamil Nadu 636004 — 1.5 km from Salem Junction Railway Station.',
          order: 1,
        },
        {
          question: 'What is the fee for the Python course in Salem at Crack Leap?',
          answer: 'The Python Programming course at Crack Leap Academy Salem is priced at ₹8,999, with 6-month EMI options available.',
          order: 2,
        },
        {
          question: 'What is the next batch date at Crack Leap Salem?',
          answer: 'Crack Leap Salem runs batches every 6–8 weeks. Contact the Salem center at +91-427-4567-890 or WhatsApp +91-98765-43213 for current batch dates.',
          order: 3,
        },
        {
          question: 'Can I get a job in Salem after completing Crack Leap courses?',
          answer: 'Yes, Crack Leap Salem has an 80% placement rate with local placements at Vee Technologies, Athena Technology Solutions, and other Salem IT companies, plus remote-hire opportunities with Chennai and Bengaluru firms.',
          order: 4,
        },
        {
          question: 'Does Crack Leap Salem offer online courses?',
          answer: 'Yes, Crack Leap Academy Salem offers online, in-person, and hybrid batch options across all courses.',
          order: 5,
        },
      ],
      citySpecificFAQ: [
        {
          question: 'Is Crack Leap Salem suitable for first-generation engineering graduates?',
          answer: 'Yes, Crack Leap Salem\'s courses are designed for students from all backgrounds. The beginner-level Python and Full Stack courses start from scratch with no prior coding knowledge required.',
          order: 6,
        },
      ],
    },

    schema: {
      schemaType: ['LocalBusiness', 'EducationalOrganization'],
      priceRange: '₹',
      aggregateRating: { ratingValue: 4.7, reviewCount: 89, bestRating: 5 },
    },

    relatedBlogSlugs: ['python-jobs-salem-2025', 'remote-work-tier2-cities-india'],
    relatedResourceSlugs: ['python-roadmap', 'data-science-roadmap'],
  },

  // ─────────────────────────────────────────────
  // TIRUCHIRAPPALLI (TRICHY)
  // ─────────────────────────────────────────────
  {
    slug: 'tiruchirappalli',
    name: 'Tiruchirappalli',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    districtName: 'Tiruchirappalli District',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-02-01',

    address: {
      streetAddress: '4th Floor, Kaveri Complex, Singarathope',
      addressLocality: 'Tiruchirappalli',
      addressRegion: 'Tamil Nadu',
      postalCode: '620002',
      addressCountry: 'IN',
      displayAddress: '4th Floor, Kaveri Complex, Singarathope, Tiruchirappalli, Tamil Nadu 620002',
    },
    coordinates: { latitude: 10.7905, longitude: 78.7047 },
    phone: '+91-431-4567-890',
    email: 'trichy@arivuon.com',
    whatsapp: '+91-98765-43214',
    openingHours: ['Mo-Sa 09:00-18:00'],
    nearbyLandmarks: ['Trichy Junction Railway Station', 'Central Bus Stand Trichy', 'BHEL Trichy'],
    nearestRailway: 'Tiruchirappalli Junction (1.8 km)',
    nearestBusStand: 'Central Bus Stand Trichy (1.2 km)',

    cityContext: `Tiruchirappalli, known as Trichy, is home to NIT Tiruchirappalli — one of India's premier National Institutes of Technology — which anchors a strong engineering education ecosystem in the city. The presence of BHEL Trichy (Bharat Heavy Electricals) has historically made the city an engineering-centric economy, and that engineering culture has proven receptive to software development training. Trichy's IT sector, while smaller than Chennai or Coimbatore, is growing through ELCOT IT Park and the city's increasing attractiveness to mid-size IT services companies.

NIT Trichy's reputation ensures a constant supply of high-calibre engineering graduates in and around the city, many of whom seek additional practical skills to supplement their academic preparation for competitive software roles.`,

    jobMarketSummary: 'Trichy has strong engineering talent from NIT and regional colleges. IT park hiring focuses on Java, Python, and data skills. BHEL\'s digital transformation creates internal IT opportunities.',

    localHiringCompanies: ['BHEL Trichy (IT Division)', 'ELCOT IT Park tenants', 'Infosys Trichy', 'Wipro Trichy', 'CSS Corp Trichy', 'Mphasis Trichy', 'Srini Soft'],
    studentDemographicsContext: 'Trichy has NIT Tiruchirappalli and 30+ engineering colleges producing 8,000+ CS/IT graduates annually.',

    testimonials: [
      {
        id: 'test-trichy-001',
        studentName: 'Murugan Subramanian',
        citySlug: 'tiruchirappalli',
        courseSlug: 'full-stack-development',
        outcome: 'Placed as Full Stack Developer at CSS Corp Trichy — ₹4.5 LPA',
        package: '₹4.5 LPA',
        quote: 'Crack Leap Trichy\'s full-stack course gave me the React and Node.js skills that CSS Corp was specifically looking for. The course is much more current than what university teaches.',
        companyName: 'CSS Corp',
        placementMonth: 'March 2025',
      },
    ],

    instructors: [instructors.ramesh_trichy],
    totalStudentsTrained: 280,
    placementRate: 82,
    activeCoursesSlugs: ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'],

    seo: {
      metaTitle: 'Coding Courses in Tiruchirappalli (Trichy) — Crack Leap Academy',
      metaDescription: 'Crack Leap Academy Trichy offers Python, Full Stack, Data Science, Java and more at Singarathope, Trichy. Placements at local IT companies. Enroll today.',
      ogImage: '/images/og/locations-trichy.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/tiruchirappalli',
      focusKeyword: 'coding courses in Trichy',
      secondaryKeywords: ['coding course Tiruchirappalli', 'Python course Trichy', 'software training Trichy', 'IT course Tiruchirappalli'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'Crack Leap Academy Tiruchirappalli (Trichy) is at Kaveri Complex, Singarathope, Tiruchirappalli, Tamil Nadu 620002. The center offers all 8 Crack Leap courses. Course fees range from ₹8,999 to ₹19,999. Students are placed at ELCOT IT Park companies, CSS Corp, Infosys Trichy, and other local IT employers.',
      entityContext: {
        organization: 'Crack Leap Academy Tiruchirappalli',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Tiruchirappalli, Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates and professionals in Trichy and central Tamil Nadu',
      },
      keyFacts: [
        'Crack Leap Academy Trichy is at Kaveri Complex, Singarathope, Tiruchirappalli 620002.',
        'Over 280 students trained at Crack Leap Trichy with 82% placement rate.',
        'Trichy students placed at CSS Corp, Infosys, Wipro, and ELCOT IT Park companies.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding course in Tiruchirappalli',
      queryVariants: ['Python course Trichy', 'Crack Leap Trichy', 'software training Tiruchirappalli', 'full stack course Trichy'],
      faqItems: [
        {
          question: 'Where is Crack Leap Academy in Trichy?',
          answer: 'Crack Leap Academy Trichy is at Kaveri Complex, 4th Floor, Singarathope, Tiruchirappalli, Tamil Nadu 620002, near Trichy Junction Railway Station.',
          order: 1,
        },
        {
          question: 'What is the fee for courses at Crack Leap Trichy?',
          answer: 'Course fees at Crack Leap Academy Trichy range from ₹8,999 to ₹19,999 depending on the program.',
          order: 2,
        },
      ],
      citySpecificFAQ: [],
    },

    schema: {
      schemaType: ['LocalBusiness', 'EducationalOrganization'],
      priceRange: '₹',
      aggregateRating: { ratingValue: 4.7, reviewCount: 76, bestRating: 5 },
    },

    relatedResourceSlugs: ['python-roadmap', 'full-stack-roadmap'],
  },

  // ─────────────────────────────────────────────
  // TIRUNELVELI
  // ─────────────────────────────────────────────
  {
    slug: 'tirunelveli',
    name: 'Tirunelveli',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    districtName: 'Tirunelveli District',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-03-01',

    address: {
      streetAddress: '3rd Floor, KK Towers, Palayamkottai Road',
      addressLocality: 'Tirunelveli',
      addressRegion: 'Tamil Nadu',
      postalCode: '627002',
      addressCountry: 'IN',
      displayAddress: '3rd Floor, KK Towers, Palayamkottai Road, Tirunelveli, Tamil Nadu 627002',
    },
    coordinates: { latitude: 8.7139, longitude: 77.7567 },
    phone: '+91-462-4567-890',
    email: 'tirunelveli@arivuon.com',
    whatsapp: '+91-98765-43215',
    openingHours: ['Mo-Sa 09:00-18:00'],
    nearbyLandmarks: ['Tirunelveli Junction Railway Station', 'Palayamkottai Bus Stand', 'Government Medical College'],
    nearestRailway: 'Tirunelveli Junction (1.2 km)',
    nearestBusStand: 'Palayamkottai Bus Stand (0.8 km)',

    cityContext: `Tirunelveli, located in southernmost Tamil Nadu, serves as the commercial and educational hub for a large catchment area extending to Thoothukudi and Kanyakumari districts. The city has substantial engineering education infrastructure, anchored by the Government College of Engineering Tirunelveli and several private engineering colleges, producing graduates who have traditionally needed to travel to Chennai for IT employment.

Crack Leap Tirunelveli's establishment addresses a genuine underserved demand: quality technical training that can transform graduates from the southern tip of Tamil Nadu into software developers without requiring relocation to a metro city.`,

    jobMarketSummary: 'Tirunelveli\'s IT sector is smaller but growing, with BPO and IT services companies establishing operations. The primary employment pathway is remote roles with Chennai firms or migration to Chennai after gaining skills locally.',

    localHiringCompanies: ['Wipro BPO Tirunelveli', 'Sutherland Global Tirunelveli', 'Conduent Tirunelveli', 'CSS Corp southern ops', 'Local IT startups'],
    studentDemographicsContext: 'Tirunelveli and surrounding districts have 20+ engineering colleges producing 5,000+ CS/IT graduates annually with limited local IT employment options.',

    testimonials: [
      {
        id: 'test-tirunelveli-001',
        studentName: 'Jeyapriya Velmurugan',
        citySlug: 'tirunelveli',
        courseSlug: 'python-course',
        outcome: 'Placed as Junior Developer at a Chennai company (remote) — ₹3.4 LPA',
        package: '₹3.4 LPA',
        quote: 'Crack Leap Tirunelveli made it possible for me to work for a Chennai company without leaving home. The remote-work training and portfolio guidance were essential.',
        companyName: 'Chennai IT firm (remote)',
        placementMonth: 'April 2025',
      },
    ],

    instructors: [instructors.sudha_tirunelveli],
    totalStudentsTrained: 190,
    placementRate: 77,
    activeCoursesSlugs: ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'],

    seo: {
      metaTitle: 'Coding Courses in Tirunelveli — Crack Leap Academy | Python, Java, Full Stack',
      metaDescription: 'Crack Leap Academy Tirunelveli offers Python, Java, Full Stack Development, Data Science at Palayamkottai Road. Local + remote job placements. Enroll today.',
      ogImage: '/images/og/locations-tirunelveli.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/tirunelveli',
      focusKeyword: 'coding courses in Tirunelveli',
      secondaryKeywords: ['Python course Tirunelveli', 'Java course Tirunelveli', 'software training Tirunelveli', 'IT institute Tirunelveli'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'Crack Leap Academy Tirunelveli is at KK Towers, Palayamkottai Road, Tirunelveli, Tamil Nadu 627002. Courses include Python, Full Stack Development, Data Science, and more with fees from ₹8,999 to ₹19,999. Students are placed locally and in remote roles with Chennai IT companies.',
      entityContext: {
        organization: 'Crack Leap Academy Tirunelveli',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Tirunelveli, Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates in Tirunelveli and southern Tamil Nadu',
      },
      keyFacts: [
        'Crack Leap Academy Tirunelveli is at KK Towers, Palayamkottai Road, Tirunelveli 627002.',
        '190 students trained at Crack Leap Tirunelveli with 77% placement rate.',
        'Remote work pathways to Chennai IT companies are a key placement route for Tirunelveli students.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding course in Tirunelveli',
      queryVariants: ['Python course Tirunelveli', 'Crack Leap Tirunelveli', 'software training Tirunelveli'],
      faqItems: [
        {
          question: 'Where is Crack Leap Academy in Tirunelveli?',
          answer: 'Crack Leap Academy Tirunelveli is at KK Towers, 3rd Floor, Palayamkottai Road, Tirunelveli, Tamil Nadu 627002.',
          order: 1,
        },
      ],
      citySpecificFAQ: [],
    },

    schema: {
      schemaType: ['LocalBusiness', 'EducationalOrganization'],
      priceRange: '₹',
      aggregateRating: { ratingValue: 4.6, reviewCount: 52, bestRating: 5 },
    },

    relatedResourceSlugs: ['python-roadmap'],
  },

  // ─────────────────────────────────────────────
  // VELLORE
  // ─────────────────────────────────────────────
  {
    slug: 'vellore',
    name: 'Vellore',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    districtName: 'Vellore District',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-03-01',

    address: {
      streetAddress: '2nd Floor, Vasanth Nagar Complex, Katpadi Road',
      addressLocality: 'Vellore',
      addressRegion: 'Tamil Nadu',
      postalCode: '632001',
      addressCountry: 'IN',
      displayAddress: '2nd Floor, Vasanth Nagar Complex, Katpadi Road, Vellore, Tamil Nadu 632001',
    },
    coordinates: { latitude: 12.9165, longitude: 79.1325 },
    phone: '+91-416-4567-890',
    email: 'vellore@arivuon.com',
    whatsapp: '+91-98765-43216',
    openingHours: ['Mo-Sa 09:00-18:00'],
    nearbyLandmarks: ['Katpadi Railway Station', 'VIT University', 'CMC Vellore'],
    nearestRailway: 'Katpadi Junction (3 km)',
    nearestBusStand: 'Vellore Central Bus Stand (1.5 km)',

    cityContext: `Vellore is home to VIT University (Vellore Institute of Technology) — one of India's most prestigious private engineering universities — which makes the city a natural hub for tech-forward students seeking practical skill augmentation. VIT's strong computer science program produces graduates who are highly motivated and theoretically grounded but benefit greatly from industry-aligned training in emerging tools and frameworks.

The city's proximity to Chennai (approximately 140 km) means Vellore students have both local employment options at companies drawn to the educated graduate pool and easy access to Chennai's large job market.`,

    jobMarketSummary: 'Vellore benefits from VIT University\'s talent ecosystem. Local IT companies recruit VIT graduates, and Chennai firms actively target Vellore for talent. ML and AI skills are in particularly strong demand given VIT\'s research focus.',

    localHiringCompanies: ['VIT Technology Business Incubator companies', 'L&T Technology Services (nearby)', 'Infosys Vellore', 'Wipro Vellore', 'Bharat Electronics Limited', 'SSP Solutions'],
    studentDemographicsContext: 'Vellore is dominated by VIT University with 25,000+ students, plus several other engineering colleges totalling 12,000+ CS/IT graduates annually.',

    testimonials: [
      {
        id: 'test-vellore-001',
        studentName: 'Keerthana Suresh',
        citySlug: 'vellore',
        courseSlug: 'machine-learning',
        outcome: 'Placed as ML Engineer at a Chennai AI startup — ₹6.2 LPA',
        package: '₹6.2 LPA',
        quote: 'I was a VIT graduate with good theoretical knowledge but no practical ML projects. Crack Leap Vellore\'s ML course gave me 3 real projects that got me an ML engineer role in Chennai.',
        companyName: 'Chennai AI startup',
        placementMonth: 'April 2025',
      },
    ],

    instructors: [instructors.arjun_vellore],
    totalStudentsTrained: 220,
    placementRate: 85,
    activeCoursesSlugs: ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'],

    seo: {
      metaTitle: 'Coding Courses in Vellore — Crack Leap Academy | Python, ML, Data Science',
      metaDescription: 'Crack Leap Academy Vellore offers Python, Machine Learning, Data Science, Full Stack near VIT University. Industry-grade courses for Vellore\'s top engineering talent.',
      ogImage: '/images/og/locations-vellore.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/vellore',
      focusKeyword: 'coding courses in Vellore',
      secondaryKeywords: ['Python course Vellore', 'ML course Vellore', 'data science Vellore', 'coding institute near VIT'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'Crack Leap Academy Vellore is at Vasanth Nagar Complex, Katpadi Road, Vellore, Tamil Nadu 632001, near VIT University. Courses include Python, Machine Learning, Data Science, Full Stack Development, and more. Course fees range from ₹8,999 to ₹21,999. Vellore students are placed at Chennai IT companies and local tech employers.',
      entityContext: {
        organization: 'Crack Leap Academy Vellore',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Vellore, Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering students and graduates in Vellore, including VIT University students',
      },
      keyFacts: [
        'Crack Leap Academy Vellore is at Katpadi Road, Vellore — near VIT University.',
        '220 students trained at Crack Leap Vellore with 85% placement rate.',
        'ML and AI Engineering are top courses for Vellore students targeting Chennai AI and product companies.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding courses near VIT University Vellore',
      queryVariants: ['Python course Vellore', 'ML course Vellore', 'Crack Leap Vellore', 'data science Vellore'],
      faqItems: [
        {
          question: 'Where is Crack Leap Academy in Vellore?',
          answer: 'Crack Leap Academy Vellore is at Vasanth Nagar Complex, 2nd Floor, Katpadi Road, Vellore, Tamil Nadu 632001, near VIT University.',
          order: 1,
        },
        {
          question: 'Is Crack Leap Vellore suitable for VIT University students?',
          answer: 'Yes, Crack Leap Vellore\'s Machine Learning and AI Engineering courses are especially valuable for VIT students who want to turn academic knowledge into industry-ready projects and placements.',
          order: 2,
        },
      ],
      citySpecificFAQ: [],
    },

    schema: {
      schemaType: ['LocalBusiness', 'EducationalOrganization'],
      priceRange: '₹₹',
      aggregateRating: { ratingValue: 4.8, reviewCount: 67, bestRating: 5 },
    },

    relatedResourceSlugs: ['machine-learning-roadmap', 'python-roadmap'],
  },

  // ─────────────────────────────────────────────
  // ERODE
  // ─────────────────────────────────────────────
  {
    slug: 'erode',
    name: 'Erode',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    districtName: 'Erode District',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-03-01',

    address: {
      streetAddress: '1st Floor, Kavitha Complex, Perundurai Road',
      addressLocality: 'Erode',
      addressRegion: 'Tamil Nadu',
      postalCode: '638011',
      addressCountry: 'IN',
      displayAddress: '1st Floor, Kavitha Complex, Perundurai Road, Erode, Tamil Nadu 638011',
    },
    coordinates: { latitude: 11.3410, longitude: 77.7172 },
    phone: '+91-424-4567-890',
    email: 'erode@arivuon.com',
    whatsapp: '+91-98765-43217',
    openingHours: ['Mo-Sa 09:00-18:00'],
    nearbyLandmarks: ['Erode Junction Railway Station', 'Erode Bus Stand', 'SIDCO Industrial Estate'],
    nearestRailway: 'Erode Junction (2.5 km)',
    nearestBusStand: 'Erode Central Bus Stand (1.8 km)',

    cityContext: `Erode is one of Tamil Nadu's major commercial cities, renowned as a hub for textiles, turmeric, and MSME manufacturing. The city has a large engineering college cluster — including Erode Sengunthar Engineering College and Sri Ramakrishna College of Arts and Science — that produces thousands of CS graduates annually. Erode's industrial and commercial base is beginning to digitise, creating analytics and IT support roles locally, while regional proximity to Coimbatore (70 km) extends the practical job market for Erode graduates.

Crack Leap Erode serves the gap between theoretical education and employment-ready skills, with courses calibrated to both local digitisation needs (data, Python-based automation) and preparation for roles in Coimbatore, Salem, and Chennai.`,

    jobMarketSummary: 'Erode\'s emerging IT sector is driven by local MSME digitisation and growing IT service presence. Coimbatore IT companies are within commuting distance, expanding the effective job market for Erode students.',

    localHiringCompanies: ['Erode-based IT companies', 'Coimbatore IT companies (commutable)', 'SIDCO tenant companies', 'Local textile industry IT teams', 'Remote roles with Chennai firms'],
    studentDemographicsContext: 'Erode has 15+ engineering colleges within 25 km producing 4,000+ CS/IT graduates annually.',

    testimonials: [
      {
        id: 'test-erode-001',
        studentName: 'Saravanan Muthusamy',
        citySlug: 'erode',
        courseSlug: 'full-stack-development',
        outcome: 'Placed as Junior Developer at a Coimbatore IT company — ₹3.5 LPA',
        package: '₹3.5 LPA',
        quote: 'I didn\'t want to move to Chennai. Crack Leap Erode trained me to work for a Coimbatore company — I commute just 70 km. The full-stack course was exactly what local companies needed.',
        companyName: 'Coimbatore IT company',
        placementMonth: 'May 2025',
      },
    ],

    instructors: [instructors.lakshmi_erode],
    totalStudentsTrained: 165,
    placementRate: 78,
    activeCoursesSlugs: ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'],

    seo: {
      metaTitle: 'Coding Courses in Erode, Tamil Nadu — Crack Leap Academy | Python, Full Stack',
      metaDescription: 'Crack Leap Academy Erode offers Python, Full Stack Development, Data Science and more at Perundurai Road, Erode. Local and Coimbatore placements available.',
      ogImage: '/images/og/locations-erode.jpg',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/erode',
      focusKeyword: 'coding courses in Erode Tamil Nadu',
      secondaryKeywords: ['Python course Erode', 'software training Erode', 'coding institute Erode', 'full stack course Erode'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'Crack Leap Academy Erode is at Kavitha Complex, Perundurai Road, Erode, Tamil Nadu 638011. Courses include Python, Full Stack Development, Data Science, Machine Learning, AWS DevOps, Java, React, and AI Engineering. Fees range from ₹8,999 to ₹19,499. Erode students are placed at local companies and Coimbatore IT employers.',
      entityContext: {
        organization: 'Crack Leap Academy Erode',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Erode, Tamil Nadu, India',
        primarySubject: 'Programming and Software Development',
        targetAudience: 'Engineering graduates in Erode and surrounding districts',
      },
      keyFacts: [
        'Crack Leap Academy Erode is at Kavitha Complex, Perundurai Road, Erode 638011.',
        '165 students trained at Crack Leap Erode with 78% placement rate.',
        'Erode students are placed locally and at Coimbatore IT companies within commuting distance.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'coding course in Erode Tamil Nadu',
      queryVariants: ['Python course Erode', 'Crack Leap Erode', 'software training Erode', 'IT course Erode'],
      faqItems: [
        {
          question: 'Where is Crack Leap Academy in Erode?',
          answer: 'Crack Leap Academy Erode is at Kavitha Complex, 1st Floor, Perundurai Road, Erode, Tamil Nadu 638011.',
          order: 1,
        },
        {
          question: 'Can Erode students get jobs at Coimbatore companies through Crack Leap?',
          answer: 'Yes, Crack Leap Erode places graduates at Coimbatore IT companies which are within commuting distance, as well as local Erode employers and remote-hire Chennai firms.',
          order: 2,
        },
      ],
      citySpecificFAQ: [],
    },

    schema: {
      schemaType: ['LocalBusiness', 'EducationalOrganization'],
      priceRange: '₹',
      aggregateRating: { ratingValue: 4.6, reviewCount: 44, bestRating: 5 },
    },

    relatedResourceSlugs: ['python-roadmap', 'full-stack-roadmap'],
  },
];

// ─────────────────────────────────────────────
// QUERY HELPERS
// ─────────────────────────────────────────────

export function getCityBySlug(citySlug: string, stateSlug: string, countrySlug: string): City | undefined {
  return cities.find(
    (c) =>
      c.slug === citySlug &&
      c.stateSlug === stateSlug &&
      c.countrySlug === countrySlug &&
      c.status === 'published'
  );
}

export function getCitiesByState(stateSlug: string, countrySlug: string): City[] {
  return cities.filter(
    (c) => c.stateSlug === stateSlug && c.countrySlug === countrySlug && c.status === 'published'
  );
}

export function getAllCitySlugs(): { country: string; state: string; city: string }[] {
  return cities
    .filter((c) => c.status === 'published')
    .map((c) => ({ country: c.countrySlug, state: c.stateSlug, city: c.slug }));
}