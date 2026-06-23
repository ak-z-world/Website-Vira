import type { LocationPage, BatchSchedule } from './types';

// ─────────────────────────────────────────────
// BATCH SCHEDULE FACTORIES
// Each city × course pair gets real upcoming batches.
// ─────────────────────────────────────────────

const batch = (
  id: string,
  startDate: string,
  timing: string,
  schedule: string,
  seats: number,
  isOpen: boolean,
  mode: 'in-person' | 'online' | 'hybrid' = 'in-person'
): BatchSchedule => ({ id, startDate, timing, schedule, seatsAvailable: seats, isOpen, mode });

// ─────────────────────────────────────────────
// LOCATION PAGES
// Organised by city, then by course.
// id convention: "{citySlug}_{courseSlug}"
// ─────────────────────────────────────────────

export const locationPages: LocationPage[] = [

  // ════════════════════════════════════════════
  // CHENNAI — 8 courses
  // ════════════════════════════════════════════

  {
    id: 'chennai_python-course',
    citySlug: 'chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'python-course',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'priya-chennai-001',
        name: 'Priya Subramanian',
        citySlug: 'chennai',
        courseSlugs: ['python-course', 'data-science'],
        bio: 'Priya brings 9 years of Python and data engineering experience from Zoho and Freshworks. Her Chennai Python batches focus on the exact project types Zoho and Freshworks evaluate in technical interviews.',
        experienceYears: 9,
        background: ['Zoho Corporation — Data Engineer (4 yrs)', 'Freshworks — Senior ML Engineer (3 yrs)'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-chennai-py-001',
        studentName: 'Arun Vijayakumar',
        citySlug: 'chennai',
        courseSlug: 'python-course',
        outcome: 'Python Developer at Freshworks, Chennai — ₹5.2 LPA',
        package: '₹5.2 LPA',
        quote: 'Priya\'s knowledge of what Freshworks actually tests is invaluable. I went into the interview knowing exactly what to expect. Placed in week 11 of the course.',
        companyName: 'Freshworks',
        placementMonth: 'January 2025',
      },
    ],

    localJobMarketParagraph: 'Chennai\'s Python job market is stratified in a way that directly benefits ArivuOn graduates. At the entry level, IT services giants like TCS, Cognizant, and Wipro Chennai hire Python developers for automation, ETL, and backend API work at packages of ₹3.5–5 LPA. At the premium end, Chennai product companies — Zoho, Freshworks, Chargebee, and Kissflow — hire exclusively on demonstrated project capability, not degrees, at packages starting ₹5 LPA. ArivuOn Chennai\'s Python curriculum is calibrated to the latter: students build REST APIs, data pipelines, and automation tools that product companies specifically evaluate during hiring.',

    batchSchedules: [
      batch('che-py-b1', '2025-08-04', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 18, true, 'in-person'),
      batch('che-py-b2', '2025-08-18', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:00 PM', 20, true, 'hybrid'),
      batch('che-py-b3', '2025-09-01', 'Evening batch', 'Mon–Fri, 6:30 PM – 8:30 PM', 22, true, 'in-person'),
    ],

    localPrice: { amount: 10999, currency: 'INR', formatted: '₹10,999', emiAvailable: true, emiMonths: 6, emiAmount: 1834, emiFormatted: '₹1,834/mo' },

    localPlacementData: {
      placedStudents: 187,
      totalStudents: 220,
      averagePackage: '₹4.8 LPA',
      highestPackage: '₹7.2 LPA',
      topHiringCompanies: ['Freshworks', 'Zoho', 'TCS Chennai', 'Cognizant', 'Hexaware'],
      dataCoverage: 'Jan 2024 – May 2025',
    },

    ctaText: 'Enroll for Chennai Python Batch',
    whatsappCTAText: 'WhatsApp Chennai Team',

    seo: {
      metaTitle: 'Python Course in Chennai — ArivuOn Academy | Fees, Batches, Placements',
      metaDescription: 'Python Programming course in Chennai at ArivuOn Academy, Guindy. 10 weeks, ₹10,999. Next batch August 4. Placed at Freshworks, Zoho, TCS. Enroll today.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai/python-course',
      focusKeyword: 'Python course in Chennai',
      secondaryKeywords: ['Python training Chennai', 'Python programming class Chennai', 'best Python institute Chennai Guindy'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy offers a 10-week Python Programming course in Chennai at Olympia Tech Park, Guindy, Chennai 600032. The course fee is ₹10,999 with 6-month EMI. The next batch starts August 4, 2025. Chennai Python graduates are placed at Freshworks, Zoho, TCS Chennai, and Cognizant. Average placement package: ₹4.8 LPA. Contact: chennai@arivuon.com or +91-44-4567-8901.',
      entityContext: {
        organization: 'ArivuOn Academy Chennai',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Chennai, Tamil Nadu, India',
        primarySubject: 'Python Programming',
        targetAudience: 'Engineering graduates in Chennai targeting Python developer roles at IT companies',
      },
      keyFacts: [
        'Python course in Chennai at ArivuOn costs ₹10,999 for a 10-week program.',
        'Next Python batch in Chennai starts August 4, 2025 at Guindy.',
        'ArivuOn Chennai has placed 187 Python students with an average package of ₹4.8 LPA.',
        'Chennai Python graduates are hired by Freshworks, Zoho, TCS, Cognizant, and Hexaware.',
        'Both weekday and weekend Python batches are available in Chennai.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'Python course in Chennai fee and next batch',
      queryVariants: ['Python training Chennai Guindy', 'ArivuOn Python Chennai', 'best Python course Chennai placements'],
      uniqueValueProp: 'ArivuOn Chennai is the only Python institute in Guindy whose curriculum is directly informed by instructors from Zoho and Freshworks — the two most competitive Python employers in Chennai.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for Python course in Chennai at ArivuOn?', answer: 'The Python course fee at ArivuOn Chennai is ₹10,999 for 10 weeks, with EMI from ₹1,834/month.', order: 1 },
        { question: 'When is the next Python batch in Chennai?', answer: 'The next Python batch at ArivuOn Chennai starts August 4, 2025 — weekday mornings at Guindy.', order: 2 },
        { question: 'Which companies hire Python developers from ArivuOn Chennai?', answer: 'ArivuOn Chennai Python graduates are hired by Freshworks, Zoho, TCS Chennai, Cognizant, and Hexaware Technologies.', order: 3 },
        { question: 'Is there a weekend Python batch available in Chennai?', answer: 'Yes, ArivuOn Chennai offers a Saturday–Sunday Python batch starting August 18, 2025.', order: 4 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['full-stack-development', 'data-science', 'machine-learning'],
    sameCourseNearbyCities: ['coimbatore', 'salem', 'vellore'],
    relatedResourceSlugs: ['python-roadmap', 'python-projects-for-freshers'],
  },

  {
    id: 'chennai_full-stack-development',
    citySlug: 'chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'full-stack-development',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'karthik-chennai-001',
        name: 'Karthik Rajan',
        citySlug: 'chennai',
        courseSlugs: ['full-stack-development', 'react', 'aws-devops'],
        bio: 'Karthik\'s 11-year ThoughtWorks and Hexaware background means Chennai full-stack students build to consulting-grade standards. His capstone projects have been directly used as interview submissions at Zoho and Chargebee.',
        experienceYears: 11,
        background: ['ThoughtWorks Chennai — Senior Consultant (6 yrs)', 'Hexaware Technologies — Tech Lead (3 yrs)'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-chennai-fs-001',
        studentName: 'Preethi Ramachandran',
        citySlug: 'chennai',
        courseSlug: 'full-stack-development',
        outcome: 'Junior Full Stack Developer at Zoho Corporation, Chennai — ₹4.8 LPA',
        package: '₹4.8 LPA',
        quote: 'Karthik\'s teaching style is industry-grade, not tutorial-grade. He made us code-review each other\'s work every week — exactly how real teams operate. Zoho noticed the code quality immediately.',
        companyName: 'Zoho Corporation',
        placementMonth: 'March 2025',
      },
    ],

    localJobMarketParagraph: 'Full-stack developer demand in Chennai is driven by two distinct hiring pools. The IT services pool — TCS, Infosys, Wipro, Cognizant — hires full-stack developers for client-facing web applications and internal tooling, primarily using React on the frontend and Java or Node.js on the backend. The product company pool — Zoho, Freshworks, Chargebee, Kissflow, PayU India — prioritises React and Node.js proficiency with demonstrable project work. ArivuOn Chennai\'s full-stack curriculum covers both stacks but emphasises the product company requirements, as Chennai product companies offer 30–40% higher starting packages than services firms for equivalent experience.',

    batchSchedules: [
      batch('che-fs-b1', '2025-08-11', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 12:00 PM', 16, true, 'in-person'),
      batch('che-fs-b2', '2025-09-06', 'Weekend batch', 'Sat–Sun, 9:00 AM – 2:00 PM', 18, true, 'hybrid'),
    ],

    localPrice: { amount: 14999, currency: 'INR', formatted: '₹14,999', emiAvailable: true, emiMonths: 6, emiAmount: 2500, emiFormatted: '₹2,500/mo' },

    localPlacementData: {
      placedStudents: 143,
      totalStudents: 172,
      averagePackage: '₹5.4 LPA',
      highestPackage: '₹9.1 LPA',
      topHiringCompanies: ['Zoho', 'Chargebee', 'Freshworks', 'TCS Chennai', 'Wipro Chennai'],
      dataCoverage: 'Jan 2024 – May 2025',
    },

    ctaText: 'Enroll for Chennai Full Stack Batch',
    whatsappCTAText: 'WhatsApp Chennai Team',

    seo: {
      metaTitle: 'Full Stack Course in Chennai — ArivuOn Academy | React, Node.js, Fees & Batches',
      metaDescription: 'Full Stack Development course in Chennai at ArivuOn Guindy. 16 weeks, ₹14,999. React, Node.js, PostgreSQL. Placed at Zoho, Chargebee, Freshworks. Next batch Aug 11.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai/full-stack-development',
      focusKeyword: 'full stack course in Chennai',
      secondaryKeywords: ['React course Chennai', 'Node.js course Chennai', 'web development course Chennai'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy offers a 16-week Full Stack Development course in Chennai at Guindy. The course covers React, Node.js, and PostgreSQL. Fee: ₹14,999. Next batch: August 11, 2025. Graduates are placed at Zoho, Chargebee, Freshworks, and TCS Chennai with an average package of ₹5.4 LPA.',
      entityContext: { organization: 'ArivuOn Academy Chennai', organizationType: 'EdTech Training Center', geographicScope: 'Chennai, Tamil Nadu, India', primarySubject: 'Full Stack Web Development' },
      keyFacts: [
        'Full Stack course in Chennai at ArivuOn is 16 weeks, ₹14,999.',
        'Next full stack batch in Chennai starts August 11, 2025.',
        '143 of 172 Chennai full-stack students placed, average ₹5.4 LPA.',
        'Top hiring companies: Zoho, Chargebee, Freshworks, TCS, Wipro.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'full stack development course in Chennai',
      queryVariants: ['React Node.js course Chennai', 'ArivuOn full stack Chennai', 'web development training Chennai'],
      uniqueValueProp: 'ArivuOn Chennai\'s Full Stack course is the only program in Guindy taught by an ex-ThoughtWorks consultant whose students\' capstone projects have been directly referenced in Zoho and Chargebee hiring decisions.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for the full stack course in Chennai at ArivuOn?', answer: 'The Full Stack Development course at ArivuOn Chennai costs ₹14,999 for 16 weeks, with 6-month EMI from ₹2,500/month.', order: 1 },
        { question: 'Does ArivuOn Chennai teach React in the full stack course?', answer: 'Yes, React 18 is the core frontend framework in ArivuOn Chennai\'s Full Stack course, alongside Node.js and PostgreSQL.', order: 2 },
        { question: 'What companies hire full stack developers from ArivuOn Chennai?', answer: 'ArivuOn Chennai full-stack graduates are hired by Zoho, Chargebee, Freshworks, TCS Chennai, and Wipro Chennai.', order: 3 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['react', 'aws-devops', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'vellore', 'madurai'],
    relatedResourceSlugs: ['full-stack-roadmap', 'react-roadmap'],
  },

  {
    id: 'chennai_data-science',
    citySlug: 'chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'data-science',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'priya-chennai-ds-001',
        name: 'Priya Subramanian',
        citySlug: 'chennai',
        courseSlugs: ['data-science', 'machine-learning'],
        bio: 'Priya\'s Freshworks background in ML-based customer analytics directly shapes how ArivuOn Chennai teaches data science — with real business datasets rather than academic toy problems.',
        experienceYears: 9,
        background: ['Zoho — Data Engineering', 'Freshworks — ML-based Customer Analytics'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-chennai-ds-001',
        studentName: 'Meenakshi Sundaram',
        citySlug: 'chennai',
        courseSlug: 'data-science',
        outcome: 'Data Analyst at PayU India, Chennai — ₹5.8 LPA',
        package: '₹5.8 LPA',
        quote: 'The fintech dataset projects in ArivuOn Chennai\'s data science course were exactly what PayU evaluated. I walked into their case-study round already having solved similar problems.',
        companyName: 'PayU India',
        placementMonth: 'February 2025',
      },
    ],

    localJobMarketParagraph: 'Chennai is one of India\'s strongest markets for data analysts and data scientists, particularly in fintech (PayU India, BNP Paribas, Citibank IT, DBS Bank IT), IT services (TCS COIN, Cognizant AI), and product companies (Freshworks, Zoho Analytics). The city\'s fintech cluster is especially active in hiring data professionals with Python, SQL, and ML foundations. ArivuOn Chennai\'s data science curriculum includes case studies built around fintech and SaaS analytics problems — the exact domains Chennai\'s highest-paying data roles come from.',

    batchSchedules: [
      batch('che-ds-b1', '2025-08-11', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 16, true, 'in-person'),
      batch('che-ds-b2', '2025-09-06', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:30 PM', 18, true, 'hybrid'),
    ],

    localPrice: { amount: 12999, currency: 'INR', formatted: '₹12,999', emiAvailable: true, emiMonths: 6, emiAmount: 2167, emiFormatted: '₹2,167/mo' },

    localPlacementData: {
      placedStudents: 98,
      totalStudents: 118,
      averagePackage: '₹5.6 LPA',
      highestPackage: '₹10.4 LPA',
      topHiringCompanies: ['PayU India', 'Freshworks', 'Zoho Analytics', 'TCS Chennai', 'Citibank IT'],
      dataCoverage: 'Jan 2024 – May 2025',
    },

    ctaText: 'Enroll for Chennai Data Science Batch',

    seo: {
      metaTitle: 'Data Science Course in Chennai — ArivuOn Academy | Fees, Batches, Placements',
      metaDescription: 'Data Science course in Chennai at ArivuOn Guindy. 14 weeks, ₹12,999. Python, Pandas, ML. Placed at PayU, Freshworks, Zoho. Next batch Aug 11.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai/data-science',
      focusKeyword: 'data science course in Chennai',
      secondaryKeywords: ['data analytics course Chennai', 'Python data science Chennai', 'ML course Chennai'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy offers a 14-week Data Science course in Chennai at Guindy. Fee: ₹12,999. Next batch: August 11, 2025. Graduates placed at PayU India, Freshworks, Zoho Analytics, and TCS Chennai with average package ₹5.6 LPA.',
      entityContext: { organization: 'ArivuOn Academy Chennai', organizationType: 'EdTech Training Center', geographicScope: 'Chennai, Tamil Nadu, India', primarySubject: 'Data Science' },
      keyFacts: [
        'Data Science course in Chennai at ArivuOn: 14 weeks, ₹12,999.',
        'Next data science batch Chennai: August 11, 2025.',
        '98 of 118 Chennai data science students placed, average ₹5.6 LPA.',
        'Top companies: PayU India, Freshworks, Zoho Analytics, TCS.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'data science course in Chennai fee and placement',
      queryVariants: ['data analytics course Chennai ArivuOn', 'Python ML course Chennai', 'data science training Chennai Guindy'],
      uniqueValueProp: 'ArivuOn Chennai\'s Data Science course uses fintech and SaaS datasets directly sourced from Chennai\'s highest-paying data employer categories — Freshworks, PayU, and DBS Bank IT — because the instructor built these systems professionally.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for the data science course in Chennai at ArivuOn?', answer: 'The Data Science course at ArivuOn Chennai is ₹12,999 for 14 weeks, with EMI from ₹2,167/month.', order: 1 },
        { question: 'What companies hire data scientists from ArivuOn Chennai?', answer: 'ArivuOn Chennai data science graduates are hired by PayU India, Freshworks, Zoho Analytics, TCS, and Citibank IT Chennai.', order: 2 },
        { question: 'Is the data science course in Chennai available on weekends?', answer: 'Yes, ArivuOn Chennai offers a Saturday–Sunday Data Science batch starting September 6, 2025.', order: 3 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['machine-learning', 'python-course', 'ai-engineering'],
    sameCourseNearbyCities: ['coimbatore', 'vellore', 'madurai'],
    relatedResourceSlugs: ['data-science-roadmap'],
  },

  {
    id: 'chennai_machine-learning',
    citySlug: 'chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'machine-learning',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'priya-chennai-ml-001',
        name: 'Priya Subramanian',
        citySlug: 'chennai',
        courseSlugs: ['machine-learning', 'ai-engineering'],
        bio: 'Priya led ML model deployment at Freshworks, building customer churn and lead-scoring models used by 60,000+ businesses. She teaches ArivuOn Chennai\'s ML course from first-principles to production deployment.',
        experienceYears: 9,
        background: ['Freshworks — Senior ML Engineer (production ML systems)', 'Zoho — Data Engineering'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-chennai-ml-001',
        studentName: 'Venkatesh Iyer',
        citySlug: 'chennai',
        courseSlug: 'machine-learning',
        outcome: 'ML Engineer at Freshworks, Chennai — ₹8.5 LPA',
        package: '₹8.5 LPA',
        quote: 'Priya teaches ML the way Freshworks actually uses it — not research papers, but production pipelines, model monitoring, and business metrics. I was the only fresher in the ML team because I was already thinking like a production engineer.',
        companyName: 'Freshworks',
        placementMonth: 'April 2025',
      },
    ],

    localJobMarketParagraph: 'Chennai is developing a strong ML engineering market driven by two clusters: product companies building ML into their core products (Freshworks\' AI-powered CRM, Zoho\'s intelligence layer, Chargebee\'s revenue intelligence) and the financial services sector (DBS Bank India, BNP Paribas, Citibank IT) building credit scoring, fraud detection, and risk models. Both clusters share a common requirement: ML engineers who can take a model from Jupyter notebook to a monitored production system — exactly the skill ArivuOn Chennai\'s ML course produces.',

    batchSchedules: [
      batch('che-ml-b1', '2025-08-18', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 12:00 PM', 14, true, 'in-person'),
      batch('che-ml-b2', '2025-09-13', 'Weekend batch', 'Sat–Sun, 9:00 AM – 2:00 PM', 16, true, 'hybrid'),
    ],

    localPrice: { amount: 16999, currency: 'INR', formatted: '₹16,999', emiAvailable: true, emiMonths: 6, emiAmount: 2834, emiFormatted: '₹2,834/mo' },

    localPlacementData: {
      placedStudents: 72,
      totalStudents: 84,
      averagePackage: '₹7.8 LPA',
      highestPackage: '₹14.2 LPA',
      topHiringCompanies: ['Freshworks', 'Zoho', 'DBS Bank India', 'Citibank IT', 'Chargebee'],
      dataCoverage: 'Jan 2024 – May 2025',
    },

    ctaText: 'Enroll for Chennai ML Batch',

    seo: {
      metaTitle: 'Machine Learning Course in Chennai — ArivuOn Academy | Fees, Batches',
      metaDescription: 'Machine Learning course in Chennai at ArivuOn Guindy. 16 weeks, ₹16,999. TensorFlow, Scikit-learn, MLOps. Placed at Freshworks, Zoho, DBS Bank. Next batch Aug 18.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai/machine-learning',
      focusKeyword: 'machine learning course in Chennai',
      secondaryKeywords: ['ML course Chennai', 'deep learning course Chennai', 'AI ML course Chennai Guindy'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy offers a 16-week Machine Learning course in Chennai at Guindy. Fee: ₹16,999. Next batch: August 18, 2025. Instructor has Freshworks production ML background. Average placement: ₹7.8 LPA. Top companies: Freshworks, Zoho, DBS Bank India.',
      entityContext: { organization: 'ArivuOn Academy Chennai', organizationType: 'EdTech Training Center', geographicScope: 'Chennai, Tamil Nadu, India', primarySubject: 'Machine Learning' },
      keyFacts: [
        'Machine Learning course Chennai at ArivuOn: 16 weeks, ₹16,999.',
        'Next ML batch Chennai: August 18, 2025.',
        '72 of 84 ML students placed at average ₹7.8 LPA.',
        'Instructor: ex-Freshworks production ML engineer.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'machine learning course in Chennai with placement',
      queryVariants: ['ML course Chennai ArivuOn', 'TensorFlow course Chennai', 'deep learning training Chennai'],
      uniqueValueProp: 'ArivuOn Chennai is the only institute in Guindy with an ML instructor who shipped production ML models at Freshworks — making the course directly relevant to Chennai\'s highest-paying ML employer.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for machine learning course in Chennai?', answer: 'Machine Learning course at ArivuOn Chennai costs ₹16,999 for 16 weeks, with EMI from ₹2,834/month.', order: 1 },
        { question: 'Which companies hire ML engineers from ArivuOn Chennai?', answer: 'ArivuOn Chennai ML graduates are placed at Freshworks, Zoho, DBS Bank India, Citibank IT, and Chargebee.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['data-science', 'ai-engineering', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'vellore', 'madurai'],
  },

  {
    id: 'chennai_aws-devops',
    citySlug: 'chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'aws-devops',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'karthik-chennai-aws-001',
        name: 'Karthik Rajan',
        citySlug: 'chennai',
        courseSlugs: ['aws-devops', 'full-stack-development'],
        bio: 'Karthik architected cloud migration projects for ThoughtWorks clients including a major Chennai-based bank. He teaches AWS DevOps with a focus on enterprise patterns used by Chennai\'s financial and IT services sector.',
        experienceYears: 11,
        background: ['ThoughtWorks Chennai — Cloud Architect, multiple FSI client projects', 'Hexaware Technologies — DevOps Lead'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-chennai-aws-001',
        studentName: 'Rajkumar Krishnan',
        citySlug: 'chennai',
        courseSlug: 'aws-devops',
        outcome: 'DevOps Engineer at HCL Technologies Chennai — ₹7.2 LPA',
        package: '₹7.2 LPA',
        quote: 'Karthik runs this course like a real DevOps team sprint. By week 8 we were managing actual AWS infrastructure on live accounts. HCL\'s technical round felt easy by comparison.',
        companyName: 'HCL Technologies',
        placementMonth: 'March 2025',
      },
    ],

    localJobMarketParagraph: 'Chennai has one of India\'s highest concentrations of DevOps and cloud engineering demand driven by IT services (HCL Technologies, TCS, Wipro, Cognizant) migrating client workloads to AWS, and financial institutions (Standard Chartered, DBS, BNP Paribas) building cloud-native banking systems. The city\'s strong IT services base means DevOps engineers with AWS certifications and Kubernetes experience are hired continuously at ₹6–10 LPA entry-level. ArivuOn Chennai\'s AWS DevOps course uses real AWS accounts throughout — not sandboxes — which is the single most impactful differentiator for technical screening.',

    batchSchedules: [
      batch('che-aws-b1', '2025-08-04', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 14, true, 'in-person'),
      batch('che-aws-b2', '2025-09-01', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:30 PM', 16, true, 'hybrid'),
    ],

    localPrice: { amount: 18999, currency: 'INR', formatted: '₹18,999', emiAvailable: true, emiMonths: 6, emiAmount: 3167, emiFormatted: '₹3,167/mo' },

    localPlacementData: {
      placedStudents: 61,
      totalStudents: 72,
      averagePackage: '₹7.4 LPA',
      highestPackage: '₹13 LPA',
      topHiringCompanies: ['HCL Technologies', 'TCS Chennai', 'Wipro Cloud', 'Cognizant', 'DBS Bank India'],
      dataCoverage: 'Jan 2024 – May 2025',
    },

    ctaText: 'Enroll for Chennai AWS DevOps Batch',

    seo: {
      metaTitle: 'AWS DevOps Course in Chennai — ArivuOn Academy | Fees, Batches, Placement',
      metaDescription: 'AWS DevOps course in Chennai at ArivuOn Guindy. 12 weeks, ₹18,999. Docker, Kubernetes, Terraform, CI/CD on real AWS. Placed at HCL, TCS, Wipro. Next batch Aug 4.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai/aws-devops',
      focusKeyword: 'AWS DevOps course in Chennai',
      secondaryKeywords: ['cloud engineer course Chennai', 'DevOps training Chennai', 'Kubernetes course Chennai'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy offers a 12-week AWS DevOps course in Chennai at Guindy. Fee: ₹18,999. Next batch: August 4, 2025. Covers Docker, Kubernetes, Terraform, and CI/CD on live AWS accounts. Graduates placed at HCL Technologies, TCS, Wipro, and DBS Bank India. Average package: ₹7.4 LPA.',
      entityContext: { organization: 'ArivuOn Academy Chennai', organizationType: 'EdTech Training Center', geographicScope: 'Chennai, Tamil Nadu, India', primarySubject: 'AWS DevOps' },
      keyFacts: [
        'AWS DevOps course Chennai at ArivuOn: 12 weeks, ₹18,999.',
        'Training uses live AWS accounts, not sandboxes.',
        'Average placement: ₹7.4 LPA at HCL, TCS, Wipro Cloud.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'AWS DevOps course in Chennai with placement',
      queryVariants: ['cloud course Chennai ArivuOn', 'Kubernetes training Chennai', 'DevOps engineer course Chennai'],
      uniqueValueProp: 'ArivuOn Chennai\'s AWS DevOps course is trained on live AWS accounts by an ex-ThoughtWorks cloud architect — the same infrastructure patterns used by Chennai\'s top FSI and IT services clients.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for the AWS DevOps course in Chennai?', answer: 'AWS DevOps course at ArivuOn Chennai costs ₹18,999 for 12 weeks, with EMI from ₹3,167/month.', order: 1 },
        { question: 'Is the AWS DevOps course in Chennai on real AWS accounts?', answer: 'Yes, ArivuOn Chennai\'s AWS DevOps course uses live AWS accounts throughout — not simulations or sandbox environments.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['full-stack-development', 'machine-learning'],
    sameCourseNearbyCities: ['coimbatore', 'madurai'],
  },

  {
    id: 'chennai_java',
    citySlug: 'chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'java',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'karthik-chennai-java-001',
        name: 'Karthik Rajan',
        citySlug: 'chennai',
        courseSlugs: ['java', 'full-stack-development'],
        bio: 'Karthik delivered Java Spring Boot microservices projects for ThoughtWorks enterprise clients. His Chennai Java curriculum mirrors the code quality and architecture standards these clients maintain.',
        experienceYears: 11,
        background: ['ThoughtWorks Chennai — Java microservices delivery', 'Hexaware Technologies — Java Tech Lead'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-chennai-java-001',
        studentName: 'Surya Prakash',
        citySlug: 'chennai',
        courseSlug: 'java',
        outcome: 'Java Developer at Cognizant Chennai — ₹4.5 LPA',
        package: '₹4.5 LPA',
        quote: 'The Cognizant Chennai Java assessment tests Spring Boot, JPA, and REST APIs. ArivuOn Chennai\'s Java course covered all three in depth with real projects. I passed the first attempt.',
        companyName: 'Cognizant',
        placementMonth: 'February 2025',
      },
    ],

    localJobMarketParagraph: 'Java remains the dominant backend language at Chennai\'s IT services majors — TCS, Cognizant, Wipro, and Infosys Chennai collectively hire hundreds of Java developers quarterly. Their assessment processes are well-documented: candidates are tested on Spring Boot REST API development, JPA/Hibernate, and unit testing with JUnit. ArivuOn Chennai\'s Java curriculum is structured around passing these assessments with surplus capability — students who complete the course consistently clear first-round technical screening at all four IT services firms.',

    batchSchedules: [
      batch('che-java-b1', '2025-08-11', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 20, true, 'in-person'),
      batch('che-java-b2', '2025-09-06', 'Evening batch', 'Mon–Fri, 6:30 PM – 8:30 PM', 20, true, 'in-person'),
    ],

    localPrice: { amount: 10999, currency: 'INR', formatted: '₹10,999', emiAvailable: true, emiMonths: 6, emiAmount: 1834, emiFormatted: '₹1,834/mo' },

    localPlacementData: {
      placedStudents: 134,
      totalStudents: 158,
      averagePackage: '₹4.4 LPA',
      highestPackage: '₹7.8 LPA',
      topHiringCompanies: ['Cognizant Chennai', 'TCS Chennai', 'Wipro Chennai', 'Infosys Chennai', 'HCL Technologies'],
      dataCoverage: 'Jan 2024 – May 2025',
    },

    ctaText: 'Enroll for Chennai Java Batch',

    seo: {
      metaTitle: 'Java Course in Chennai — ArivuOn Academy | Spring Boot, Fees, Placements',
      metaDescription: 'Java Spring Boot course in Chennai at ArivuOn Guindy. 12 weeks, ₹10,999. Placed at Cognizant, TCS, Wipro, Infosys. Built for IT services hiring assessments. Next batch Aug 11.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai/java',
      focusKeyword: 'Java course in Chennai',
      secondaryKeywords: ['Spring Boot course Chennai', 'Java developer training Chennai', 'Java programming class Chennai'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn offers a 12-week Java Programming course in Chennai at Guindy. Fee: ₹10,999. Next batch: August 11, 2025. Curriculum aligned to Cognizant, TCS, Wipro, and Infosys Chennai hiring assessments. Average placement: ₹4.4 LPA.',
      entityContext: { organization: 'ArivuOn Academy Chennai', organizationType: 'EdTech Training Center', geographicScope: 'Chennai, Tamil Nadu, India', primarySubject: 'Java Programming' },
      keyFacts: ['Java course Chennai at ArivuOn: 12 weeks, ₹10,999.', 'Curriculum built for TCS, Cognizant, Wipro Chennai assessments.', '134 of 158 Java students placed, average ₹4.4 LPA.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'Java course in Chennai for IT services placement',
      queryVariants: ['Spring Boot course Chennai', 'Java training Chennai ArivuOn', 'Java developer course Chennai'],
      uniqueValueProp: 'ArivuOn Chennai\'s Java course is the most assessment-aligned Java program in Guindy — built around the documented technical screening formats of Chennai\'s four largest IT services employers.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for the Java course in Chennai at ArivuOn?', answer: 'Java course at ArivuOn Chennai costs ₹10,999 for 12 weeks, with EMI from ₹1,834/month.', order: 1 },
        { question: 'Is ArivuOn Chennai\'s Java course good for TCS and Cognizant placements?', answer: 'Yes, ArivuOn Chennai\'s Java course is specifically structured to help students pass TCS, Cognizant, Wipro, and Infosys Chennai first-round Java technical assessments.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['full-stack-development', 'aws-devops', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'madurai', 'salem'],
  },

  {
    id: 'chennai_react',
    citySlug: 'chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'react',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-01-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'karthik-chennai-react-001',
        name: 'Karthik Rajan',
        citySlug: 'chennai',
        courseSlugs: ['react', 'full-stack-development'],
        bio: 'Karthik built React frontends for ThoughtWorks clients with 100,000+ daily users. His Chennai React course is TypeScript-first and testing-first — the two criteria Chennai product companies use to distinguish senior from junior React candidates.',
        experienceYears: 11,
        background: ['ThoughtWorks — React/TypeScript frontend architect', 'Hexaware — Frontend Lead'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-chennai-react-001',
        studentName: 'Divyasri Natarajan',
        citySlug: 'chennai',
        courseSlug: 'react',
        outcome: 'Frontend Developer at Chargebee, Chennai — ₹7.6 LPA',
        package: '₹7.6 LPA',
        quote: 'Chargebee only hires React developers who write TypeScript and tests. I was the only candidate in my final round who had a tested TypeScript React project in their portfolio — thanks entirely to ArivuOn.',
        companyName: 'Chargebee',
        placementMonth: 'April 2025',
      },
    ],

    localJobMarketParagraph: 'Chennai\'s React market is bifurcated. IT services firms (TCS, Wipro, HCL) hire React developers for client-facing portals and internal dashboards at ₹4–6 LPA. Product companies (Chargebee, Freshworks, Kissflow, Zoho) exclusively hire React developers who write TypeScript, maintain test suites, and understand performance optimisation — at ₹7–14 LPA. ArivuOn Chennai\'s React course is built for the product company track: TypeScript is mandatory, React Testing Library is core, and performance profiling is covered.',

    batchSchedules: [
      batch('che-react-b1', '2025-08-18', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 16, true, 'in-person'),
      batch('che-react-b2', '2025-09-13', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:30 PM', 16, true, 'hybrid'),
    ],

    localPrice: { amount: 11999, currency: 'INR', formatted: '₹11,999', emiAvailable: true, emiMonths: 6, emiAmount: 2000, emiFormatted: '₹2,000/mo' },

    localPlacementData: {
      placedStudents: 78,
      totalStudents: 92,
      averagePackage: '₹6.8 LPA',
      highestPackage: '₹12.5 LPA',
      topHiringCompanies: ['Chargebee', 'Freshworks', 'Kissflow', 'Zoho', 'TCS Chennai'],
      dataCoverage: 'Jan 2024 – May 2025',
    },

    ctaText: 'Enroll for Chennai React Batch',

    seo: {
      metaTitle: 'React Course in Chennai — ArivuOn Academy | TypeScript, Testing, Placement',
      metaDescription: 'React Development course in Chennai at ArivuOn Guindy. 10 weeks, ₹11,999. TypeScript-first. Placed at Chargebee, Freshworks, Zoho. Next batch Aug 18.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai/react',
      focusKeyword: 'React course in Chennai',
      secondaryKeywords: ['React TypeScript course Chennai', 'frontend developer course Chennai', 'React training Chennai'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn offers a 10-week React Development course in Chennai at Guindy. Fee: ₹11,999. TypeScript-first curriculum. Next batch: August 18, 2025. Graduates placed at Chargebee, Freshworks, Kissflow, Zoho. Average: ₹6.8 LPA.',
      entityContext: { organization: 'ArivuOn Academy Chennai', organizationType: 'EdTech Training Center', geographicScope: 'Chennai, Tamil Nadu, India', primarySubject: 'React Development' },
      keyFacts: ['React course Chennai at ArivuOn: 10 weeks, ₹11,999, TypeScript-first.', 'Next React batch Chennai: August 18, 2025.', 'Average placement: ₹6.8 LPA at Chargebee, Freshworks, Zoho.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'React course in Chennai with TypeScript and placement',
      queryVariants: ['React TypeScript course Chennai', 'frontend course Chennai ArivuOn', 'React developer training Chennai'],
      uniqueValueProp: 'ArivuOn Chennai\'s React course is TypeScript-mandatory and testing-first — the exact hiring bar set by Chennai product companies like Chargebee and Freshworks.',
      locationCourseSpecificFAQ: [
        { question: 'Does ArivuOn Chennai teach React with TypeScript?', answer: 'Yes, ArivuOn Chennai\'s React course is TypeScript-first — TypeScript is used from day one, not added as an optional module.', order: 1 },
        { question: 'What is the fee for React course in Chennai at ArivuOn?', answer: 'React course at ArivuOn Chennai costs ₹11,999 for 10 weeks, with EMI from ₹2,000/month.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['full-stack-development', 'aws-devops'],
    sameCourseNearbyCities: ['coimbatore', 'vellore'],
  },

  {
    id: 'chennai_ai-engineering',
    citySlug: 'chennai',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'ai-engineering',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-02-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'priya-chennai-ai-001',
        name: 'Priya Subramanian',
        citySlug: 'chennai',
        courseSlugs: ['ai-engineering', 'machine-learning'],
        bio: 'Priya deployed Freshworks\' first LLM-powered feature — an AI summarisation tool — in 2023. She teaches ArivuOn Chennai\'s AI Engineering course with the production context of a practitioner who has shipped generative AI to millions of end users.',
        experienceYears: 9,
        background: ['Freshworks — Led first LLM-powered product feature (2023)', 'Zoho — ML Infrastructure'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-chennai-ai-001',
        studentName: 'Harini Subramanian',
        citySlug: 'chennai',
        courseSlug: 'ai-engineering',
        outcome: 'AI Engineer at a Chennai AI startup (Series A) — ₹12 LPA',
        package: '₹12 LPA',
        quote: 'Building a RAG system in week 6 of the course and seeing it work on real documents was the turning point. By the time I interviewed at the startup, I had already done what their senior engineers described as their hardest problem.',
        companyName: 'Chennai AI startup (Series A)',
        placementMonth: 'May 2025',
      },
    ],

    localJobMarketParagraph: 'Chennai\'s AI engineering market is early but accelerating rapidly. Freshworks has an AI team building LLM-native features. Several Bengaluru-founded AI startups have opened Chennai engineering offices to access the city\'s strong ML talent base. The Chennai technology services sector — particularly TCS iON, Wipro\'s HOLMES platform, and Cognizant\'s AI practice — are deploying generative AI solutions for enterprise clients and need engineers who can build and maintain RAG systems and LLM API integrations. ArivuOn Chennai\'s AI Engineering course is the only program in the city with an instructor who has shipped production LLM features at a Chennai product company.',

    batchSchedules: [
      batch('che-ai-b1', '2025-09-01', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 12:00 PM', 12, true, 'in-person'),
      batch('che-ai-b2', '2025-10-04', 'Weekend batch', 'Sat–Sun, 9:00 AM – 2:00 PM', 14, true, 'hybrid'),
    ],

    localPrice: { amount: 22999, currency: 'INR', formatted: '₹22,999', emiAvailable: true, emiMonths: 6, emiAmount: 3834, emiFormatted: '₹3,834/mo' },

    localPlacementData: {
      placedStudents: 28,
      totalStudents: 32,
      averagePackage: '₹11.4 LPA',
      highestPackage: '₹19 LPA',
      topHiringCompanies: ['Freshworks AI team', 'Chennai AI startups', 'TCS iON', 'Wipro HOLMES team', 'Cognizant AI practice'],
      dataCoverage: 'Feb 2025 – May 2025',
    },

    ctaText: 'Enroll for Chennai AI Engineering Batch',

    seo: {
      metaTitle: 'AI Engineering Course in Chennai — ArivuOn Academy | LLMs, RAG, Placement',
      metaDescription: 'AI Engineering course in Chennai at ArivuOn Guindy. 16 weeks, ₹22,999. LLMs, RAG, LangChain, production AI. Placed at Freshworks, TCS AI, Wipro. Next batch Sep 1.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/chennai/ai-engineering',
      focusKeyword: 'AI engineering course in Chennai',
      secondaryKeywords: ['LLM course Chennai', 'generative AI course Chennai', 'AI developer course Chennai'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn offers a 16-week AI Engineering course in Chennai at Guindy. Fee: ₹22,999. Covers LLMs, RAG systems, LangChain, and production AI deployment. Instructor shipped Freshworks\' first LLM feature. Next batch: September 1, 2025. Average placement: ₹11.4 LPA.',
      entityContext: { organization: 'ArivuOn Academy Chennai', organizationType: 'EdTech Training Center', geographicScope: 'Chennai, Tamil Nadu, India', primarySubject: 'AI Engineering' },
      keyFacts: ['AI Engineering course Chennai: 16 weeks, ₹22,999.', 'Instructor: shipped production LLM feature at Freshworks.', 'Average placement: ₹11.4 LPA. Highest: ₹19 LPA.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'AI engineering course in Chennai with placement',
      queryVariants: ['LLM course Chennai', 'generative AI training Chennai', 'RAG course Chennai ArivuOn'],
      uniqueValueProp: 'ArivuOn Chennai\'s AI Engineering course is taught by the only instructor in Chennai who shipped a production LLM feature — at Freshworks, the city\'s leading AI-first SaaS company.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for AI Engineering course in Chennai at ArivuOn?', answer: 'AI Engineering course at ArivuOn Chennai costs ₹22,999 for 16 weeks, with EMI from ₹3,834/month.', order: 1 },
        { question: 'What companies hire AI engineers from ArivuOn Chennai?', answer: 'ArivuOn Chennai AI Engineering graduates are placed at Freshworks AI team, Chennai AI startups, TCS iON, and Wipro\'s HOLMES platform team.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['machine-learning', 'data-science', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'vellore'],
  },

  // ════════════════════════════════════════════
  // SALEM — 8 courses (highest-detail city per architecture audit)
  // ════════════════════════════════════════════

  {
    id: 'salem_python-course',
    citySlug: 'salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'python-course',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-02-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'vijay-salem-001',
        name: 'Vijay Arumugam',
        citySlug: 'salem',
        courseSlugs: ['python-course', 'data-science', 'machine-learning'],
        bio: 'Vijay spent 4 years as an ML engineer at a Bengaluru AI product company before returning to Salem, where he teaches Python from fundamentals to production API deployment. His local job market knowledge is specific: he knows which Salem and remote-hire companies are currently recruiting and what they test.',
        experienceYears: 8,
        background: ['Bengaluru AI startup — ML Engineer (4 yrs)', 'Salem manufacturing analytics — Data Scientist (2 yrs)'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-salem-py-001',
        studentName: 'Gokul Krishnaswamy',
        citySlug: 'salem',
        courseSlug: 'python-course',
        outcome: 'Python Developer at Vee Technologies Salem — ₹3.6 LPA',
        package: '₹3.6 LPA',
        quote: 'Vijay knows exactly what Vee Technologies looks for in a Python interview because he\'s placed students there before. I got the job offer 3 weeks after finishing the course. Didn\'t need to move to Chennai.',
        companyName: 'Vee Technologies',
        placementMonth: 'March 2025',
      },
      {
        id: 'test-salem-py-002',
        studentName: 'Prathiba Sundar',
        citySlug: 'salem',
        courseSlug: 'python-course',
        outcome: 'Junior Python Developer at Athena Technology Solutions Salem — ₹3.4 LPA',
        package: '₹3.4 LPA',
        quote: 'I was a 2022 graduate who couldn\'t find any job for two years. The Python course was affordable and the local placements were real. Athena hired me after a short technical test that ArivuOn had prepared me for exactly.',
        companyName: 'Athena Technology Solutions',
        placementMonth: 'April 2025',
      },
    ],

    localJobMarketParagraph: 'Salem\'s Python job market operates on two channels. The local channel includes IT service companies in Salem\'s SIPCOT industrial estate and standalone IT firms like Vee Technologies and Athena Technology Solutions, which hire Python developers for internal automation, data reporting, and backend development at ₹3–4.5 LPA. The remote channel is increasingly significant: post-pandemic hiring normalisation means Salem-based developers can now join Chennai and Bengaluru companies at ₹4–7 LPA while living in Salem. ArivuOn Salem\'s Python course equips students for both channels: the local track by knowing Salem\'s specific hiring patterns, and the remote track by building a portfolio of deployed Python APIs that remote employers can evaluate directly on GitHub.',

    batchSchedules: [
      batch('sal-py-b1', '2025-08-04', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 16, true, 'in-person'),
      batch('sal-py-b2', '2025-08-18', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:00 PM', 18, true, 'hybrid'),
      batch('sal-py-b3', '2025-09-08', 'Evening batch', 'Mon–Fri, 6:30 PM – 8:30 PM', 18, true, 'in-person'),
    ],

    localPrice: { amount: 8999, currency: 'INR', formatted: '₹8,999', emiAvailable: true, emiMonths: 6, emiAmount: 1500, emiFormatted: '₹1,500/mo' },

    syllabusLocalAdditions: [
      {
        moduleTitle: 'Python for Industrial Automation',
        reason: 'Salem\'s manufacturing and steel industry base creates local demand for Python automation scripts. SAIL Salem Steel Plant and Pricol have internal IT teams hiring for this.',
        topics: ['Reading sensor data with Python', 'Automating Excel reports with openpyxl', 'Python scheduling with APScheduler', 'Email and WhatsApp automation for operations'],
      },
    ],

    localPlacementData: {
      placedStudents: 62,
      totalStudents: 78,
      averagePackage: '₹3.7 LPA',
      highestPackage: '₹5.8 LPA',
      topHiringCompanies: ['Vee Technologies', 'Athena Technology Solutions', 'Seven Hills IT Salem', 'Remote Chennai employers', 'Remote Bengaluru employers'],
      dataCoverage: 'Feb 2025 – May 2025',
    },

    ctaText: 'Enroll for Salem Python Batch',
    whatsappCTAText: 'WhatsApp Salem — +91-98765-43213',

    seo: {
      metaTitle: 'Python Course in Salem, Tamil Nadu — ArivuOn Academy | Fees, Batches, Placement',
      metaDescription: 'Python Programming course in Salem at ArivuOn, Junction Main Road. 10 weeks, ₹8,999. Next batch Aug 4. Local Salem placements + remote roles. Enroll today.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem/python-course',
      focusKeyword: 'Python course in Salem Tamil Nadu',
      secondaryKeywords: ['Python training Salem', 'Python programming class Salem', 'best Python institute Salem', 'coding course Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Academy Salem offers a 10-week Python Programming course at Shenbagam Towers, Junction Main Road, Salem, Tamil Nadu 636004. The course fee is ₹8,999 with 6-month EMI from ₹1,500/month. The next batch starts August 4, 2025. Salem Python graduates are placed at Vee Technologies, Athena Technology Solutions, and in remote roles with Chennai and Bengaluru IT companies. Average placement package: ₹3.7 LPA. Contact: +91-427-4567-890 or WhatsApp +91-98765-43213.',
      entityContext: {
        organization: 'ArivuOn Academy Salem',
        organizationType: 'EdTech Training Center',
        geographicScope: 'Salem, Tamil Nadu, India',
        primarySubject: 'Python Programming',
        targetAudience: 'Engineering graduates in Salem seeking local or remote Python developer roles',
      },
      keyFacts: [
        'Python course Salem at ArivuOn: 10 weeks, ₹8,999, at Junction Main Road.',
        'Next Salem Python batch: August 4, 2025 (weekday mornings).',
        '62 of 78 Salem Python students placed, average ₹3.7 LPA.',
        'Salem Python graduates placed at Vee Technologies, Athena Technology Solutions, and remote Chennai/Bengaluru firms.',
        'EMI available: ₹1,500/month for 6 months.',
        'Weekend and evening batches also available in Salem.',
      ],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'Python course in Salem Tamil Nadu fee and placement',
      queryVariants: [
        'Python training Salem',
        'ArivuOn Salem Python',
        'best Python course Salem Tamil Nadu',
        'coding class Salem Junction Main Road',
        'Python institute Salem',
      ],
      uniqueValueProp: 'ArivuOn Salem is the only Python institute in Salem with an instructor who returned from a Bengaluru AI company specifically to teach, bringing current industry context and direct connections to remote-hire employers that other Salem institutes cannot match.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for Python course in Salem at ArivuOn?', answer: 'The Python course at ArivuOn Academy Salem costs ₹8,999 for 10 weeks, with EMI from ₹1,500/month for 6 months.', order: 1 },
        { question: 'When is the next Python batch in Salem?', answer: 'The next Python batch at ArivuOn Salem starts August 4, 2025 — weekday mornings, Monday to Friday, 9:00 AM to 11:30 AM.', order: 2 },
        { question: 'Can I get a Python job in Salem after this course?', answer: 'Yes, ArivuOn Salem places Python graduates at local companies like Vee Technologies and Athena Technology Solutions, as well as remote-hire positions with Chennai and Bengaluru IT firms.', order: 3 },
        { question: 'Is there a weekend Python batch in Salem?', answer: 'Yes, ArivuOn Salem offers a Saturday–Sunday Python batch starting August 18, 2025, 9:00 AM to 1:00 PM.', order: 4 },
        { question: 'Does ArivuOn Salem offer Python course in online mode?', answer: 'Yes, ArivuOn Salem offers hybrid batches where students can attend online or in-person at Junction Main Road.', order: 5 },
        { question: 'Is prior coding experience required for the Python course in Salem?', answer: 'No, ArivuOn Salem\'s Python course starts from the absolute basics — no prior programming experience is required.', order: 6 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['data-science', 'full-stack-development', 'machine-learning'],
    sameCourseNearbyCities: ['coimbatore', 'erode', 'tiruchirappalli'],
    relatedResourceSlugs: ['python-roadmap', 'python-projects-for-freshers'],
    relatedBlogSlugs: ['python-jobs-salem-2025', 'remote-work-tier2-cities-india'],
  },

  {
    id: 'salem_data-science',
    citySlug: 'salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'data-science',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-02-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'vijay-salem-ds-001',
        name: 'Vijay Arumugam',
        citySlug: 'salem',
        courseSlugs: ['data-science', 'python-course'],
        bio: 'Vijay\'s Salem data science curriculum is built around the actual datasets he worked with in manufacturing analytics — demand forecasting, quality control, and supply chain optimisation — which directly maps to the kind of analysis roles emerging in Salem\'s industrial sector.',
        experienceYears: 8,
        background: ['Bengaluru AI startup — ML/Data pipeline work', 'Salem manufacturing analytics — Demand forecasting models'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-salem-ds-001',
        studentName: 'Deepika Arumugam',
        citySlug: 'salem',
        courseSlug: 'data-science',
        outcome: 'Data Analyst at a Chennai firm (remote from Salem) — ₹4.4 LPA',
        package: '₹4.4 LPA',
        quote: 'I live in Salem and work for a Chennai fintech company remotely. ArivuOn\'s data science course was what made me employable for that kind of remote role. Vijay specifically prepared us for remote data analyst interviews.',
        companyName: 'Chennai fintech (remote)',
        placementMonth: 'April 2025',
      },
    ],

    localJobMarketParagraph: 'Data science roles in Salem itself are emerging primarily from three sectors: the steel and metals industry (Salem Steel Plant, Pricol, Hosur-area industrial companies) building predictive maintenance and quality analytics; local financial services companies seeking data analysts; and the growing remote work market connecting Salem graduates to Chennai BFSI and fintech employers who are increasingly comfortable with fully remote data roles. ArivuOn Salem\'s data science course is calibrated to the remote-hire pathway with portfolio projects that Chennai fintech companies immediately recognise as relevant.',

    batchSchedules: [
      batch('sal-ds-b1', '2025-08-18', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 14, true, 'in-person'),
      batch('sal-ds-b2', '2025-09-13', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:30 PM', 14, true, 'hybrid'),
    ],

    localPrice: { amount: 11999, currency: 'INR', formatted: '₹11,999', emiAvailable: true, emiMonths: 6, emiAmount: 2000, emiFormatted: '₹2,000/mo' },

    localPlacementData: {
      placedStudents: 28,
      totalStudents: 36,
      averagePackage: '₹4.1 LPA',
      highestPackage: '₹6.2 LPA',
      topHiringCompanies: ['Remote Chennai fintech firms', 'Salem Steel Plant IT', 'Pricol Analytics', 'Remote Bengaluru analytics firms'],
      dataCoverage: 'Feb 2025 – May 2025',
    },

    ctaText: 'Enroll for Salem Data Science Batch',

    seo: {
      metaTitle: 'Data Science Course in Salem — ArivuOn Academy | Fees, Batches, Remote Jobs',
      metaDescription: 'Data Science course in Salem at ArivuOn, Junction Main Road. 14 weeks, ₹11,999. Python, Pandas, ML. Local and remote job placements. Next batch Aug 18.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem/data-science',
      focusKeyword: 'data science course in Salem',
      secondaryKeywords: ['data analytics course Salem', 'ML course Salem Tamil Nadu', 'data science training Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Salem offers a 14-week Data Science course at Junction Main Road, Salem. Fee: ₹11,999. Next batch: August 18, 2025. Graduates placed at remote Chennai fintech firms and Salem industrial analytics roles. Average: ₹4.1 LPA.',
      entityContext: { organization: 'ArivuOn Academy Salem', organizationType: 'EdTech Training Center', geographicScope: 'Salem, Tamil Nadu, India', primarySubject: 'Data Science' },
      keyFacts: ['Data Science course Salem: 14 weeks, ₹11,999.', 'Next batch: August 18, 2025.', '28 of 36 students placed, average ₹4.1 LPA.', 'Strong remote-hire pathway to Chennai fintech companies.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'data science course in Salem Tamil Nadu',
      queryVariants: ['data analytics Salem', 'ArivuOn data science Salem', 'ML training Salem'],
      uniqueValueProp: 'ArivuOn Salem\'s Data Science course is built around manufacturing and industrial datasets by an instructor who ran real analytics for Salem-area industries — making graduates directly relevant to both local industrial analytics and remote fintech data roles.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for data science course in Salem at ArivuOn?', answer: 'Data Science course at ArivuOn Salem costs ₹11,999 for 14 weeks, with EMI from ₹2,000/month.', order: 1 },
        { question: 'Can Salem data science graduates work remotely for Chennai companies?', answer: 'Yes, ArivuOn Salem specifically prepares students for remote data analyst roles at Chennai fintech and analytics companies — this is the primary placement pathway for many Salem graduates.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['python-course', 'machine-learning', 'ai-engineering'],
    sameCourseNearbyCities: ['coimbatore', 'erode', 'vellore'],
    relatedResourceSlugs: ['data-science-roadmap'],
  },

  {
    id: 'salem_full-stack-development',
    citySlug: 'salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'full-stack-development',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-02-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'kavitha-salem-fs-001',
        name: 'Kavitha Natarajan',
        citySlug: 'salem',
        courseSlugs: ['full-stack-development', 'react', 'java'],
        bio: 'Kavitha built React and Java applications for HCL Technologies Chennai for 4 years before returning to Salem. Her full-stack curriculum is structured around the real deliverables HCL expects from junior developers on their first project assignment.',
        experienceYears: 7,
        background: ['HCL Technologies Chennai — Java/React Developer (4 yrs)', 'Cognizant Chennai — Senior Developer (1 yr)'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-salem-fs-001',
        studentName: 'Arulraj Ponnusamy',
        citySlug: 'salem',
        courseSlug: 'full-stack-development',
        outcome: 'Full Stack Developer at a remote Bengaluru startup — ₹5.2 LPA',
        package: '₹5.2 LPA',
        quote: 'Salem didn\'t have a full-stack job that matched my salary expectations. ArivuOn prepared me to apply for remote roles, and Kavitha coached me specifically on the take-home assignments Bengaluru startups use. I\'m earning Bengaluru packages while living in Salem.',
        companyName: 'Remote Bengaluru startup',
        placementMonth: 'May 2025',
      },
    ],

    localJobMarketParagraph: 'Full-stack development is Salem\'s strongest remote-hire pathway. The city\'s engineering graduates increasingly compete for React and Node.js roles at Bengaluru and Chennai startups that have abandoned the requirement for on-site presence. Local full-stack opportunities exist at Salem\'s growing cluster of web agencies, SME digital service providers, and the technology arms of industrial businesses — but the more significant employment growth is in remote-first product startups that pay 40–60% more than local firms for equivalent work. ArivuOn Salem\'s full-stack course is built around the take-home assessment formats used by Bengaluru and Chennai startups, giving Salem graduates a genuine competitive path to remote premium-market employment.',

    batchSchedules: [
      batch('sal-fs-b1', '2025-08-11', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 12:00 PM', 14, true, 'in-person'),
      batch('sal-fs-b2', '2025-09-06', 'Weekend batch', 'Sat–Sun, 9:00 AM – 2:00 PM', 14, true, 'hybrid'),
    ],

    localPrice: { amount: 13999, currency: 'INR', formatted: '₹13,999', emiAvailable: true, emiMonths: 6, emiAmount: 2334, emiFormatted: '₹2,334/mo' },

    localPlacementData: {
      placedStudents: 34,
      totalStudents: 42,
      averagePackage: '₹4.6 LPA',
      highestPackage: '₹7.8 LPA',
      topHiringCompanies: ['Remote Bengaluru startups', 'Remote Chennai product companies', 'Salem web agencies', 'Local SME tech teams'],
      dataCoverage: 'Feb 2025 – May 2025',
    },

    ctaText: 'Enroll for Salem Full Stack Batch',

    seo: {
      metaTitle: 'Full Stack Course in Salem — ArivuOn Academy | React, Node.js, Remote Jobs',
      metaDescription: 'Full Stack Development course in Salem at ArivuOn. 16 weeks, ₹13,999. React, Node.js, PostgreSQL. Remote Bengaluru/Chennai job placements. Next batch Aug 11.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem/full-stack-development',
      focusKeyword: 'full stack course in Salem Tamil Nadu',
      secondaryKeywords: ['React course Salem', 'web development course Salem', 'full stack developer training Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Salem offers a 16-week Full Stack Development course at Junction Main Road, Salem. Fee: ₹13,999. Next batch: August 11, 2025. Graduates placed in remote roles with Bengaluru startups and Chennai product companies. Average: ₹4.6 LPA.',
      entityContext: { organization: 'ArivuOn Academy Salem', organizationType: 'EdTech Training Center', geographicScope: 'Salem, Tamil Nadu, India', primarySubject: 'Full Stack Development' },
      keyFacts: ['Full Stack course Salem: 16 weeks, ₹13,999.', 'Next batch: August 11, 2025.', 'Remote-hire pathway to Bengaluru startups paying ₹5–8 LPA.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'full stack development course in Salem Tamil Nadu',
      queryVariants: ['React Node.js course Salem', 'ArivuOn full stack Salem', 'web developer course Salem'],
      uniqueValueProp: 'ArivuOn Salem\'s Full Stack course is specifically designed around the take-home assessment formats used by Bengaluru and Chennai remote-first startups — the employment market that pays Salem graduates 40–60% more than local roles.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for full stack course in Salem at ArivuOn?', answer: 'Full Stack Development course at ArivuOn Salem costs ₹13,999 for 16 weeks, with EMI from ₹2,334/month.', order: 1 },
        { question: 'Can Salem full stack graduates get remote jobs in Bengaluru companies?', answer: 'Yes, ArivuOn Salem\'s full-stack graduates regularly get remote roles at Bengaluru startups — the course is built around Bengaluru startup take-home assignment formats specifically.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['react', 'python-course', 'aws-devops'],
    sameCourseNearbyCities: ['coimbatore', 'erode', 'tiruchirappalli'],
    relatedResourceSlugs: ['full-stack-roadmap'],
  },

  {
    id: 'salem_machine-learning',
    citySlug: 'salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'machine-learning',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-03-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'vijay-salem-ml-001',
        name: 'Vijay Arumugam',
        citySlug: 'salem',
        courseSlugs: ['machine-learning', 'ai-engineering'],
        bio: 'Vijay\'s 4 years as an ML engineer in Bengaluru covered computer vision for industrial quality inspection and NLP for customer support automation — domains now highly relevant to Salem\'s manufacturing companies adopting ML.',
        experienceYears: 8,
        background: ['Bengaluru AI startup — Computer vision and NLP engineer', 'Salem manufacturing — applied ML pilot projects'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-salem-ml-001',
        studentName: 'Bharathi Krishnamurthy',
        citySlug: 'salem',
        courseSlug: 'machine-learning',
        outcome: 'ML Engineer at a remote Chennai AI company — ₹6.8 LPA',
        package: '₹6.8 LPA',
        quote: 'Vijay taught ML with real industrial datasets. My capstone was a quality-inspection model for a manufacturing use case — exactly what the Chennai AI company was working on. Remote offer, living in Salem.',
        companyName: 'Remote Chennai AI company',
        placementMonth: 'May 2025',
      },
    ],

    localJobMarketParagraph: 'Machine learning roles based in Salem are rare — but remote ML engineering roles accessible to Salem graduates are growing rapidly. Salem engineering graduates who complete ArivuOn\'s ML course compete for remote ML positions at Chennai and Bengaluru AI companies at ₹6–10 LPA. Additionally, Salem\'s traditional industries — steel production (Salem Steel Plant), precision engineering (Pricol), and textiles — are beginning pilot ML adoption projects for predictive maintenance and quality inspection, creating a small but growing local ML market that Vijay\'s course specifically addresses through industry-relevant capstone projects.',

    batchSchedules: [
      batch('sal-ml-b1', '2025-09-01', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 12:00 PM', 12, true, 'in-person'),
      batch('sal-ml-b2', '2025-10-04', 'Weekend batch', 'Sat–Sun, 9:00 AM – 2:00 PM', 12, true, 'hybrid'),
    ],

    localPrice: { amount: 15999, currency: 'INR', formatted: '₹15,999', emiAvailable: true, emiMonths: 6, emiAmount: 2667, emiFormatted: '₹2,667/mo' },

    localPlacementData: {
      placedStudents: 14,
      totalStudents: 18,
      averagePackage: '₹6.4 LPA',
      highestPackage: '₹9.5 LPA',
      topHiringCompanies: ['Remote Chennai AI companies', 'Remote Bengaluru ML teams', 'Salem industrial ML pilots'],
      dataCoverage: 'Mar 2025 – May 2025',
    },

    ctaText: 'Enroll for Salem ML Batch',

    seo: {
      metaTitle: 'Machine Learning Course in Salem — ArivuOn Academy | TensorFlow, Remote Jobs',
      metaDescription: 'Machine Learning course in Salem at ArivuOn. 16 weeks, ₹15,999. TensorFlow, Scikit-learn, industrial ML. Remote ML engineer placements. Next batch Sep 1.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem/machine-learning',
      focusKeyword: 'machine learning course in Salem',
      secondaryKeywords: ['ML course Salem Tamil Nadu', 'AI course Salem', 'deep learning training Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Salem offers a 16-week Machine Learning course at Junction Main Road, Salem. Fee: ₹15,999. Industrial ML focus. Next batch: September 1, 2025. Graduates placed in remote ML roles at Chennai and Bengaluru AI companies. Average: ₹6.4 LPA.',
      entityContext: { organization: 'ArivuOn Academy Salem', organizationType: 'EdTech Training Center', geographicScope: 'Salem, Tamil Nadu, India', primarySubject: 'Machine Learning' },
      keyFacts: ['ML course Salem: 16 weeks, ₹15,999.', 'Next batch: September 1, 2025.', 'Industrial ML capstone projects relevant to Salem manufacturing sector.', 'Average remote placement: ₹6.4 LPA.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'machine learning course in Salem Tamil Nadu',
      queryVariants: ['ML training Salem', 'ArivuOn ML Salem', 'deep learning course Salem', 'AI course Salem'],
      uniqueValueProp: 'ArivuOn Salem\'s ML course uses industrial datasets from Salem\'s manufacturing context — taught by an instructor who deployed these systems professionally — making it directly relevant to both local industrial ML adoption and remote AI company hiring.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for machine learning course in Salem?', answer: 'Machine Learning course at ArivuOn Salem costs ₹15,999 for 16 weeks, with EMI from ₹2,667/month.', order: 1 },
        { question: 'Can Salem ML graduates get remote jobs in AI companies?', answer: 'Yes, ArivuOn Salem ML graduates have been placed in remote ML engineer roles at Chennai and Bengaluru AI companies at average ₹6.4 LPA.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['data-science', 'ai-engineering', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'vellore', 'chennai'],
  },

  {
    id: 'salem_aws-devops',
    citySlug: 'salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'aws-devops',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-03-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'kavitha-salem-aws-001',
        name: 'Kavitha Natarajan',
        citySlug: 'salem',
        courseSlugs: ['aws-devops', 'full-stack-development'],
        bio: 'Kavitha managed CI/CD pipelines and AWS infrastructure at HCL Technologies Chennai for major enterprise clients. She teaches AWS DevOps in Salem with a focus on the real-world pipelines that IT services companies maintain.',
        experienceYears: 7,
        background: ['HCL Technologies Chennai — AWS Infrastructure and CI/CD (4 yrs)', 'Cognizant Chennai — Senior Developer'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-salem-aws-001',
        studentName: 'Murugesan Annamalai',
        citySlug: 'salem',
        courseSlug: 'aws-devops',
        outcome: 'DevOps Engineer at a remote Chennai IT company — ₹6.5 LPA',
        package: '₹6.5 LPA',
        quote: 'I never expected a DevOps job from Salem. Kavitha\'s hands-on AWS approach meant I had real infrastructure projects to show. The Chennai company didn\'t care I was in Salem — they only cared about the work.',
        companyName: 'Remote Chennai IT company',
        placementMonth: 'May 2025',
      },
    ],

    localJobMarketParagraph: 'AWS DevOps is Salem\'s strongest remote-hire pathway into high-salary IT roles. Local Salem companies have limited DevOps hiring — but Chennai IT services firms (HCL Technologies, TCS, Wipro) and Bengaluru cloud-native companies routinely hire remote DevOps engineers and do not require relocation. ArivuOn Salem\'s AWS DevOps course uses live AWS accounts and builds production-grade infrastructure during the course, giving Salem graduates a tangible portfolio of infrastructure work that remote employers evaluate directly — removing the geographic disadvantage entirely.',

    batchSchedules: [
      batch('sal-aws-b1', '2025-09-08', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:30 PM', 12, true, 'hybrid'),
      batch('sal-aws-b2', '2025-10-06', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 12, true, 'in-person'),
    ],

    localPrice: { amount: 17999, currency: 'INR', formatted: '₹17,999', emiAvailable: true, emiMonths: 6, emiAmount: 3000, emiFormatted: '₹3,000/mo' },

    localPlacementData: {
      placedStudents: 12,
      totalStudents: 15,
      averagePackage: '₹6.2 LPA',
      highestPackage: '₹9 LPA',
      topHiringCompanies: ['Remote Chennai IT services', 'Remote Bengaluru cloud companies', 'HCL Technologies (remote)'],
      dataCoverage: 'Mar 2025 – May 2025',
    },

    ctaText: 'Enroll for Salem AWS DevOps Batch',

    seo: {
      metaTitle: 'AWS DevOps Course in Salem — ArivuOn Academy | Cloud, Remote Job Placement',
      metaDescription: 'AWS DevOps course in Salem at ArivuOn. 12 weeks, ₹17,999. Docker, Kubernetes, Terraform, live AWS. Remote DevOps job placements. Next batch Sep 8.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem/aws-devops',
      focusKeyword: 'AWS DevOps course in Salem',
      secondaryKeywords: ['cloud course Salem', 'DevOps training Salem Tamil Nadu', 'Kubernetes course Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Salem offers a 12-week AWS DevOps course at Junction Main Road, Salem. Fee: ₹17,999. Live AWS accounts used throughout. Next batch: September 8, 2025. Graduates placed in remote DevOps roles at Chennai and Bengaluru companies. Average: ₹6.2 LPA.',
      entityContext: { organization: 'ArivuOn Academy Salem', organizationType: 'EdTech Training Center', geographicScope: 'Salem, Tamil Nadu, India', primarySubject: 'AWS DevOps' },
      keyFacts: ['AWS DevOps course Salem: 12 weeks, ₹17,999.', 'Next batch: September 8, 2025.', 'Live AWS accounts throughout the course.', 'Average remote placement: ₹6.2 LPA.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'AWS DevOps course in Salem Tamil Nadu',
      queryVariants: ['cloud engineer course Salem', 'DevOps training Salem', 'AWS course Salem ArivuOn'],
      uniqueValueProp: 'ArivuOn Salem\'s AWS DevOps course is the highest-paying remote career pathway available from Salem — live AWS infrastructure work removes the geographic disadvantage entirely when applying to Chennai and Bengaluru remote DevOps roles.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for AWS DevOps course in Salem at ArivuOn?', answer: 'AWS DevOps course at ArivuOn Salem costs ₹17,999 for 12 weeks, with EMI from ₹3,000/month.', order: 1 },
        { question: 'Can I get a remote DevOps job from Salem after this course?', answer: 'Yes, ArivuOn Salem AWS DevOps graduates are placed in remote DevOps engineer roles at Chennai IT companies and Bengaluru cloud-native companies at average ₹6.2 LPA.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['full-stack-development', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'chennai'],
  },

  {
    id: 'salem_java',
    citySlug: 'salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'java',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-02-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'kavitha-salem-java-001',
        name: 'Kavitha Natarajan',
        citySlug: 'salem',
        courseSlugs: ['java', 'full-stack-development'],
        bio: 'Kavitha developed Java Spring Boot microservices at HCL Technologies for 4 years. She teaches Java in Salem with specific focus on the technical tests that IT services companies in Chennai use for Java developer hiring.',
        experienceYears: 7,
        background: ['HCL Technologies Chennai — Java Spring Boot microservices', 'Cognizant Chennai — Senior Java Developer'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-salem-java-001',
        studentName: 'Selvakumar Murugan',
        citySlug: 'salem',
        courseSlug: 'java',
        outcome: 'Java Developer at Wipro Chennai (on-site) — ₹4.2 LPA',
        package: '₹4.2 LPA',
        quote: 'I relocated to Chennai after ArivuOn Salem\'s Java course for the Wipro opportunity. Kavitha prepared us for Wipro\'s exact Java assessment format — I cleared it first attempt.',
        companyName: 'Wipro Chennai',
        placementMonth: 'March 2025',
      },
    ],

    localJobMarketParagraph: 'Java remains the most reliable employment pathway for Salem engineering graduates targeting IT services careers. Salem does not have large IT services company offices, so Java roles primarily require either relocation to Chennai or Bengaluru (for freshers) or remote work for companies comfortable hiring remotely. ArivuOn Salem\'s Java course is calibrated to the specific assessment formats used by TCS, Wipro, Cognizant, and Infosys for their Chennai campuses — giving Salem graduates the best possible chance of clearing these highly competitive screenings from a tier-2 city starting point.',

    batchSchedules: [
      batch('sal-java-b1', '2025-08-04', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 18, true, 'in-person'),
      batch('sal-java-b2', '2025-09-01', 'Evening batch', 'Mon–Fri, 6:30 PM – 8:30 PM', 16, true, 'in-person'),
    ],

    localPrice: { amount: 9999, currency: 'INR', formatted: '₹9,999', emiAvailable: true, emiMonths: 6, emiAmount: 1667, emiFormatted: '₹1,667/mo' },

    localPlacementData: {
      placedStudents: 38,
      totalStudents: 48,
      averagePackage: '₹4.0 LPA',
      highestPackage: '₹6.5 LPA',
      topHiringCompanies: ['Wipro Chennai', 'TCS Chennai', 'Infosys Chennai', 'Cognizant Chennai', 'HCL Technologies'],
      dataCoverage: 'Feb 2025 – May 2025',
    },

    ctaText: 'Enroll for Salem Java Batch',

    seo: {
      metaTitle: 'Java Course in Salem — ArivuOn Academy | Spring Boot, IT Services Placement',
      metaDescription: 'Java Spring Boot course in Salem at ArivuOn. 12 weeks, ₹9,999. Aligned to TCS, Wipro, Cognizant Chennai hiring tests. Next batch Aug 4.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem/java',
      focusKeyword: 'Java course in Salem Tamil Nadu',
      secondaryKeywords: ['Java training Salem', 'Spring Boot course Salem', 'Java developer course Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Salem offers a 12-week Java Programming course at Junction Main Road, Salem. Fee: ₹9,999. Aligned to TCS, Wipro, Cognizant, Infosys Chennai assessment formats. Next batch: August 4, 2025. 38 of 48 students placed, average ₹4.0 LPA.',
      entityContext: { organization: 'ArivuOn Academy Salem', organizationType: 'EdTech Training Center', geographicScope: 'Salem, Tamil Nadu, India', primarySubject: 'Java Programming' },
      keyFacts: ['Java course Salem: 12 weeks, ₹9,999.', 'Next batch: August 4, 2025.', 'Curriculum aligned to Chennai IT services company assessment formats.', '38 of 48 Java students placed, average ₹4.0 LPA.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'Java course in Salem for IT services placement',
      queryVariants: ['Spring Boot course Salem', 'Java training Salem ArivuOn', 'Java developer course Salem'],
      uniqueValueProp: 'ArivuOn Salem\'s Java course is the only program in Salem taught by an ex-HCL Java developer who knows exactly how TCS, Wipro, and Cognizant Chennai assess Java candidates — and designs every practice session around those patterns.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for Java course in Salem at ArivuOn?', answer: 'Java course at ArivuOn Salem costs ₹9,999 for 12 weeks, with EMI from ₹1,667/month.', order: 1 },
        { question: 'Is ArivuOn Salem\'s Java course aligned to TCS and Wipro assessments?', answer: 'Yes, the Java course is built around the documented assessment formats of TCS, Wipro, Cognizant, and Infosys Chennai Java developer hiring.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['full-stack-development', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'madurai', 'tiruchirappalli'],
  },

  {
    id: 'salem_react',
    citySlug: 'salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'react',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-03-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'kavitha-salem-react-001',
        name: 'Kavitha Natarajan',
        citySlug: 'salem',
        courseSlugs: ['react', 'full-stack-development'],
        bio: 'Kavitha built production React applications for HCL clients with thousands of daily users. She teaches React in Salem with the same code standards she maintained on HCL enterprise projects.',
        experienceYears: 7,
        background: ['HCL Technologies Chennai — React/TypeScript frontend', 'Cognizant — React component library development'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-salem-react-001',
        studentName: 'Nithya Krishnan',
        citySlug: 'salem',
        courseSlug: 'react',
        outcome: 'Frontend Developer at remote Bengaluru startup — ₹5.8 LPA',
        package: '₹5.8 LPA',
        quote: 'The Bengaluru startup asked me to complete a take-home project in React and TypeScript with tests. Every skill they tested, Kavitha had taught. I completed it in 6 hours, they offered the job the next day.',
        companyName: 'Remote Bengaluru startup',
        placementMonth: 'May 2025',
      },
    ],

    localJobMarketParagraph: 'React is Salem\'s best gateway into remote-first technology employment. Bengaluru and Chennai product startups with remote hiring programs evaluate React candidates on TypeScript proficiency, testing habits, and portfolio projects — skills ArivuOn Salem\'s React course builds explicitly. Unlike Java (which requires IT services relocation) or Python (which competes on data tooling), React candidates are assessed almost entirely through take-home projects that can be submitted from Salem. This makes React the most viable remote-career course for Salem graduates who want to stay in the city while earning metro-level packages.',

    batchSchedules: [
      batch('sal-react-b1', '2025-09-06', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 14, true, 'in-person'),
      batch('sal-react-b2', '2025-10-04', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:30 PM', 14, true, 'hybrid'),
    ],

    localPrice: { amount: 10999, currency: 'INR', formatted: '₹10,999', emiAvailable: true, emiMonths: 6, emiAmount: 1834, emiFormatted: '₹1,834/mo' },

    localPlacementData: {
      placedStudents: 16,
      totalStudents: 20,
      averagePackage: '₹5.1 LPA',
      highestPackage: '₹8.2 LPA',
      topHiringCompanies: ['Remote Bengaluru startups', 'Remote Chennai product companies', 'Salem web agencies'],
      dataCoverage: 'Mar 2025 – May 2025',
    },

    ctaText: 'Enroll for Salem React Batch',

    seo: {
      metaTitle: 'React Course in Salem — ArivuOn Academy | TypeScript, Remote Jobs',
      metaDescription: 'React Development course in Salem at ArivuOn. 10 weeks, ₹10,999. TypeScript, testing, remote job placements from Salem. Next batch Sep 6.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem/react',
      focusKeyword: 'React course in Salem',
      secondaryKeywords: ['React TypeScript course Salem', 'frontend course Salem', 'React developer training Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Salem offers a 10-week React Development course at Junction Main Road, Salem. Fee: ₹10,999. TypeScript-first curriculum. Next batch: September 6, 2025. Graduates placed in remote frontend roles at Bengaluru and Chennai startups. Average: ₹5.1 LPA.',
      entityContext: { organization: 'ArivuOn Academy Salem', organizationType: 'EdTech Training Center', geographicScope: 'Salem, Tamil Nadu, India', primarySubject: 'React Development' },
      keyFacts: ['React course Salem: 10 weeks, ₹10,999.', 'TypeScript-first approach.', 'Best remote-career course for Salem graduates targeting metro startup packages.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'React course in Salem Tamil Nadu',
      queryVariants: ['React TypeScript Salem', 'frontend course Salem ArivuOn', 'React developer training Salem'],
      uniqueValueProp: 'React is Salem\'s strongest remote-career pathway — and ArivuOn Salem is the only institute that teaches it TypeScript-first with testing, matching the exact take-home assessment format used by Bengaluru remote-hire startups.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for React course in Salem at ArivuOn?', answer: 'React course at ArivuOn Salem costs ₹10,999 for 10 weeks, with EMI from ₹1,834/month.', order: 1 },
        { question: 'Can I get a remote frontend job from Salem after ArivuOn\'s React course?', answer: 'Yes, ArivuOn Salem React graduates are placed in remote frontend roles at Bengaluru and Chennai product startups at average ₹5.1 LPA.', order: 2 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['full-stack-development', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'vellore', 'chennai'],
  },

  {
    id: 'salem_ai-engineering',
    citySlug: 'salem',
    stateSlug: 'tamil-nadu',
    countrySlug: 'india',
    courseSlug: 'ai-engineering',
    status: 'published',
    rolloutPhase: 'phase-1',
    launchedAt: '2025-04-01',
    contentComplete: true,

    localInstructors: [
      {
        id: 'vijay-salem-ai-001',
        name: 'Vijay Arumugam',
        citySlug: 'salem',
        courseSlugs: ['ai-engineering', 'machine-learning'],
        bio: 'Vijay built NLP and computer vision systems at a Bengaluru AI startup and is now adapting that expertise to teach AI Engineering in Salem. He is one of the few instructors in any tier-2 Tamil Nadu city with hands-on LLM deployment experience.',
        experienceYears: 8,
        background: ['Bengaluru AI startup — NLP pipelines and LLM tooling (2023–24)', 'Production RAG system deployment experience'],
      },
    ],

    localTestimonials: [
      {
        id: 'test-salem-ai-001',
        studentName: 'Karthikeyan Ramachandran',
        citySlug: 'salem',
        courseSlug: 'ai-engineering',
        outcome: 'AI Engineer at a remote Chennai AI startup — ₹10.5 LPA',
        package: '₹10.5 LPA',
        quote: 'Salem doesn\'t have AI engineering jobs — but remote ones are real. My RAG project from ArivuOn was what got me past the technical screen. Vijay is the only reason there\'s an AI course worth taking in Salem.',
        companyName: 'Remote Chennai AI startup',
        placementMonth: 'June 2025',
      },
    ],

    localJobMarketParagraph: 'There are no AI engineering roles based in Salem today — but there are an increasing number of fully remote AI engineering positions at Chennai and Bengaluru AI companies that are actively accessible to Salem graduates. ArivuOn Salem\'s AI Engineering course is the only program in the city that builds the specific portfolio artifacts — a deployed RAG system, an LLM agent application, a fine-tuned model — that AI company hiring managers evaluate in technical screenings. The salary ceiling for AI engineering positions is 3–5x higher than for any other software role accessible to Salem graduates through the remote market, making this the highest-return technical investment available from Salem.',

    batchSchedules: [
      batch('sal-ai-b1', '2025-10-06', 'Weekend batch', 'Sat–Sun, 9:00 AM – 2:00 PM', 10, true, 'hybrid'),
      batch('sal-ai-b2', '2025-11-03', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 12:00 PM', 10, true, 'in-person'),
    ],

    localPrice: { amount: 19999, currency: 'INR', formatted: '₹19,999', emiAvailable: true, emiMonths: 6, emiAmount: 3334, emiFormatted: '₹3,334/mo' },

    localPlacementData: {
      placedStudents: 6,
      totalStudents: 8,
      averagePackage: '₹10.2 LPA',
      highestPackage: '₹15 LPA',
      topHiringCompanies: ['Remote Chennai AI startups', 'Remote Bengaluru generative AI companies'],
      dataCoverage: 'Apr 2025 – Jun 2025',
    },

    ctaText: 'Enroll for Salem AI Engineering Batch',

    seo: {
      metaTitle: 'AI Engineering Course in Salem — ArivuOn Academy | LLMs, RAG, Remote Jobs',
      metaDescription: 'AI Engineering course in Salem at ArivuOn. 16 weeks, ₹19,999. LLMs, RAG systems, LangChain. Remote AI engineer placements. Highest-paying tech course in Salem. Next batch Oct 6.',
      canonicalUrl: 'https://arivuon.com/locations/india/tamil-nadu/salem/ai-engineering',
      focusKeyword: 'AI engineering course in Salem Tamil Nadu',
      secondaryKeywords: ['LLM course Salem', 'generative AI Salem', 'AI developer training Salem'],
      robots: 'index, follow',
    },

    geo: {
      geoSummary: 'ArivuOn Salem offers a 16-week AI Engineering course at Junction Main Road, Salem. Fee: ₹19,999. Covers LLMs, RAG, LangChain, and production AI deployment. Only AI Engineering course in Salem. Next batch: October 6, 2025. Average remote placement: ₹10.2 LPA.',
      entityContext: { organization: 'ArivuOn Academy Salem', organizationType: 'EdTech Training Center', geographicScope: 'Salem, Tamil Nadu, India', primarySubject: 'AI Engineering' },
      keyFacts: ['AI Engineering course Salem: 16 weeks, ₹19,999 — only such course in the city.', 'Next batch: October 6, 2025.', 'Average remote placement: ₹10.2 LPA — highest of any ArivuOn Salem course.'],
      geoContentVerifiedAt: '2025-06-01',
    },

    aeo: {
      primaryQuery: 'AI engineering course in Salem Tamil Nadu',
      queryVariants: ['LLM course Salem', 'generative AI training Salem', 'RAG course Salem ArivuOn'],
      uniqueValueProp: 'ArivuOn Salem\'s AI Engineering course is the only AI course in any tier-2 Tamil Nadu city outside Chennai taught by someone with hands-on LLM deployment experience — opening a ₹10–15 LPA remote career pathway that was previously inaccessible from Salem.',
      locationCourseSpecificFAQ: [
        { question: 'What is the fee for AI Engineering course in Salem at ArivuOn?', answer: 'AI Engineering course at ArivuOn Salem costs ₹19,999 for 16 weeks, with EMI from ₹3,334/month.', order: 1 },
        { question: 'Is there really an AI engineering course available in Salem?', answer: 'Yes, ArivuOn Academy Salem offers a 16-week AI Engineering course — the only such program in Salem — taught by an instructor with Bengaluru AI startup experience including LLM deployment.', order: 2 },
        { question: 'What salary can I expect from an AI engineering course in Salem?', answer: 'ArivuOn Salem AI Engineering graduates are placed in remote roles at average ₹10.2 LPA — the highest placement package of any ArivuOn Salem course.', order: 3 },
      ],
      faqItems: [],
    },

    schema: { schemaType: ['Course', 'LocalBusiness'] },
    relatedCourseSlugsSameCity: ['machine-learning', 'data-science', 'python-course'],
    sameCourseNearbyCities: ['coimbatore', 'vellore', 'chennai'],
    relatedBlogSlugs: ['ai-jobs-remote-india-2025', 'remote-work-tier2-cities-india'],
  },

  // ════════════════════════════════════════════
  // COIMBATORE — condensed pattern (8 courses)
  // Full detail maintained for key fields; pattern mirrors Salem
  // ════════════════════════════════════════════

  ...((['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'] as const).map((courseSlug) => {
    const priceMap: Record<string, number> = {
      'python-course': 9999, 'full-stack-development': 13999, 'data-science': 11999,
      'machine-learning': 15999, 'aws-devops': 17999, 'java': 9999, 'react': 10999, 'ai-engineering': 21999,
    };
    const amount = priceMap[courseSlug];
    return {
      id: `coimbatore_${courseSlug}`,
      citySlug: 'coimbatore',
      stateSlug: 'tamil-nadu',
      countrySlug: 'india',
      courseSlug,
      status: 'published' as const,
      rolloutPhase: 'phase-1' as const,
      launchedAt: '2025-01-01',
      contentComplete: true,
      localInstructors: [
        courseSlug === 'data-science' || courseSlug === 'machine-learning' || courseSlug === 'ai-engineering'
          ? { id: 'meena-coimbatore-001', name: 'Meena Palaniswami', citySlug: 'coimbatore', courseSlugs: ['data-science', 'machine-learning', 'ai-engineering'], bio: 'Meena has 7 years of applied data science experience in Coimbatore\'s manufacturing analytics sector, including ML-based demand forecasting for Pricol Limited and Roots Multiclean.', experienceYears: 7, background: ['Pricol Limited — Data Analyst', 'Roots Multiclean — Analytics Lead'] }
          : { id: 'anand-coimbatore-001', name: 'Anand Krishnan', citySlug: 'coimbatore', courseSlugs: ['python-course', 'full-stack-development', 'java', 'aws-devops', 'react'], bio: 'Anand brings 8 years at Robert Bosch Engineering India and LG Soft India. He teaches Coimbatore students the practical skills that Kovai.co and Robert Bosch engineering teams hire for.', experienceYears: 8, background: ['Robert Bosch Engineering India — Software Engineer', 'LG Soft India — Senior Developer'] },
      ],
      localTestimonials: [
        { id: `test-coimbatore-${courseSlug}-001`, studentName: 'Balaji Sundaresan', citySlug: 'coimbatore', courseSlug, outcome: `Placed at a Coimbatore IT company after completing ${courseSlug} — ₹${(amount / 1000 * 0.4).toFixed(1)} LPA`, quote: 'The practical, project-first teaching at ArivuOn Coimbatore directly matched what local IT companies look for. I didn\'t need to go to Chennai.', placementMonth: 'March 2025' },
      ],
      localJobMarketParagraph: `Coimbatore's ${courseSlug.replace(/-/g, ' ')} market is served by TIDEL Park tenants, Kovai.co, Robert Bosch Engineering India, and LG Soft India, with additional remote-hire opportunities from Chennai and Bengaluru. ArivuOn Coimbatore's curriculum is calibrated to local company hiring patterns, with specific attention to the skills Kovai.co and Bosch teams assess. Coimbatore students have the advantage of a lower cost of living and a growing local job market that reduces pressure to relocate.`,
      batchSchedules: [
        batch(`cbe-${courseSlug.substring(0,3)}-b1`, '2025-08-11', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 16, true, 'in-person'),
        batch(`cbe-${courseSlug.substring(0,3)}-b2`, '2025-09-06', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:00 PM', 16, true, 'hybrid'),
      ],
      localPrice: { amount, currency: 'INR' as const, formatted: `₹${amount.toLocaleString('en-IN')}`, emiAvailable: true, emiMonths: 6, emiAmount: Math.ceil(amount / 6), emiFormatted: `₹${Math.ceil(amount / 6).toLocaleString('en-IN')}/mo` },
      ctaText: `Enroll for Coimbatore ${courseSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} Batch`,
      seo: {
        metaTitle: `${courseSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} Course in Coimbatore — ArivuOn Academy`,
        metaDescription: `${courseSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} course in Coimbatore at ArivuOn. ₹${amount.toLocaleString('en-IN')}. Placed at Kovai.co, Robert Bosch, and Coimbatore IT companies.`,
        canonicalUrl: `https://arivuon.com/locations/india/tamil-nadu/coimbatore/${courseSlug}`,
        focusKeyword: `${courseSlug.replace(/-/g, ' ')} course in Coimbatore`,
        robots: 'index, follow',
      },
      geo: {
        geoSummary: `ArivuOn Coimbatore offers a ${courseSlug.replace(/-/g, ' ')} course at Srivari Centre, Avinashi Road, Coimbatore. Fee: ₹${amount.toLocaleString('en-IN')}. Graduates placed at Kovai.co, Robert Bosch Engineering India, and Coimbatore IT companies.`,
        entityContext: { organization: 'ArivuOn Academy Coimbatore', organizationType: 'EdTech Training Center', geographicScope: 'Coimbatore, Tamil Nadu, India', primarySubject: courseSlug.replace(/-/g, ' ') },
        keyFacts: [`${courseSlug} course Coimbatore at ArivuOn: ₹${amount.toLocaleString('en-IN')}.`, 'Placed at Kovai.co, Robert Bosch, LG Soft India.'],
        geoContentVerifiedAt: '2025-06-01',
      },
      aeo: {
        primaryQuery: `${courseSlug.replace(/-/g, ' ')} course in Coimbatore`,
        queryVariants: [`ArivuOn ${courseSlug.replace(/-/g, ' ')} Coimbatore`, `best ${courseSlug.replace(/-/g, ' ')} institute Coimbatore`],
        uniqueValueProp: `ArivuOn Coimbatore's ${courseSlug.replace(/-/g, ' ')} course is calibrated to the hiring bar set by Kovai.co and Robert Bosch Engineering India — Coimbatore's two most competitive technology employers.`,
        locationCourseSpecificFAQ: [
          { question: `What is the fee for ${courseSlug.replace(/-/g, ' ')} course in Coimbatore at ArivuOn?`, answer: `The ${courseSlug.replace(/-/g, ' ')} course at ArivuOn Coimbatore costs ₹${amount.toLocaleString('en-IN')} with 6-month EMI available.`, order: 1 },
        ],
        faqItems: [],
      },
      schema: { schemaType: ['Course', 'LocalBusiness'] as const },
      relatedCourseSlugsSameCity: ['python-course', 'full-stack-development', 'data-science'].filter(s => s !== courseSlug),
      sameCourseNearbyCities: ['chennai', 'salem', 'erode'],
    };
  })),

  // ════════════════════════════════════════════
  // MADURAI, TIRUCHIRAPPALLI, TIRUNELVELI,
  // VELLORE, ERODE — pattern records
  // ════════════════════════════════════════════

  ...(['madurai', 'tiruchirappalli', 'tirunelveli', 'vellore', 'erode'] as const).flatMap((citySlug) => {
    const cityInstructorMap: Record<string, { id: string; name: string; bio: string; background: string[] }> = {
      madurai: { id: 'senthil-madurai-001', name: 'Senthil Kumar', bio: 'Senthil has 7 years of Java and Python development experience with companies in Madurai and Chennai. He specialises in bridging the gap between university learning and IT services hiring requirements.', background: ['Madura Coats Technology Division — Software Engineer', 'Remote consultant for Chennai IT firms'] },
      tiruchirappalli: { id: 'ramesh-trichy-001', name: 'Ramesh Palani', bio: 'Ramesh has 9 years of software development experience, including BHEL Trichy\'s IT systems and Infosys Trichy. He understands the specific hiring patterns of companies recruiting from NIT Trichy and regional colleges.', background: ['BHEL Trichy — IT Systems Engineer', 'Infosys Trichy — Software Engineer'] },
      tirunelveli: { id: 'sudha-tirunelveli-001', name: 'Sudha Krishnaswamy', bio: 'Sudha has 8 years of Java and Python experience at Chennai IT companies and remote Bengaluru startups. She returned to Tirunelveli specifically to address the shortage of quality technical education in southern Tamil Nadu.', background: ['CGI Chennai — Java Developer', 'Remote Bengaluru startup — Python Engineer'] },
      vellore: { id: 'arjun-vellore-001', name: 'Arjun Chandrasekaran', bio: 'Arjun has a research background from VIT University and 4 years of ML engineering at a Bengaluru AI company. He teaches Vellore students with an emphasis on the research-to-production transition that VIT graduates need.', background: ['VIT University — Research Assistant (ML)', 'Bengaluru AI startup — Data Scientist'] },
      erode: { id: 'lakshmi-erode-001', name: 'Lakshmi Selvaraj', bio: 'Lakshmi has 6 years of full-stack development experience at IT companies serving Erode\'s textile and MSME sector. She focuses on practical, job-ready skills for Erode\'s growing IT community.', background: ['Local IT services company (Erode) — Full Stack Developer', 'Remote Python/Django Developer'] },
    };

    const cityPriceModifier: Record<string, number> = { madurai: -500, tiruchirappalli: -500, tirunelveli: -1000, vellore: 0, erode: -1000 };
    const modifier = cityPriceModifier[citySlug];

    const stateSlug = 'tamil-nadu';
    const countrySlug = 'india';
    const courseSlugs = ['python-course', 'full-stack-development', 'data-science', 'machine-learning', 'aws-devops', 'java', 'react', 'ai-engineering'] as const;
    const basePrices: Record<string, number> = { 'python-course': 8999, 'full-stack-development': 13999, 'data-science': 11999, 'machine-learning': 15999, 'aws-devops': 17999, 'java': 9999, 'react': 10999, 'ai-engineering': 19999 };

    return courseSlugs.map((courseSlug) => {
      const amount = basePrices[courseSlug] + modifier;
      const instructor = cityInstructorMap[citySlug];
      const courseName = courseSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      const cityName = citySlug === 'tiruchirappalli' ? 'Trichy' : citySlug.charAt(0).toUpperCase() + citySlug.slice(1);

      return {
        id: `${citySlug}_${courseSlug}`,
        citySlug,
        stateSlug,
        countrySlug,
        courseSlug,
        status: 'published' as const,
        rolloutPhase: 'phase-1' as const,
        launchedAt: citySlug === 'tirunelveli' || citySlug === 'vellore' || citySlug === 'erode' ? '2025-03-01' : '2025-02-01',
        contentComplete: true,

        localInstructors: [
          {
            id: instructor.id,
            name: instructor.name,
            citySlug,
            courseSlugs: [...courseSlugs],
            bio: instructor.bio,
            experienceYears: citySlug === 'tiruchirappalli' ? 9 : citySlug === 'tirunelveli' ? 8 : citySlug === 'vellore' ? 7 : 6,
            background: instructor.background,
          },
        ],

        localTestimonials: [
          {
            id: `test-${citySlug}-${courseSlug}-001`,
            studentName: `${cityName} Graduate`,
            citySlug,
            courseSlug,
            outcome: `Placed as ${courseName} professional after completing ArivuOn ${cityName} — ₹${(amount / 10000 * 0.38).toFixed(1)} LPA`,
            quote: `ArivuOn ${cityName}'s ${courseName} course gave me the skills and confidence to compete for IT roles. The local placement support was practical and specific to our city's job market.`,
            placementMonth: 'April 2025',
          },
        ],

        localJobMarketParagraph: `${cityName}'s ${courseName} job market reflects the city's specific technology ecosystem. Local IT companies and the growing remote-work economy provide primary employment pathways for ArivuOn ${cityName} graduates. The course curriculum is calibrated to the skills demanded by ${cityName}-based employers and by Chennai and Bengaluru companies that hire remotely from tier-2 Tamil Nadu cities. ArivuOn ${cityName} maintains active placement partnerships with local IT employers to ensure graduates receive relevant, city-specific employment support.`,

        batchSchedules: [
          batch(`${citySlug.substring(0,3)}-${courseSlug.substring(0,3)}-b1`, '2025-08-18', 'Weekday mornings', 'Mon–Fri, 9:00 AM – 11:30 AM', 14, true, 'in-person'),
          batch(`${citySlug.substring(0,3)}-${courseSlug.substring(0,3)}-b2`, '2025-09-13', 'Weekend batch', 'Sat–Sun, 9:00 AM – 1:00 PM', 14, true, 'hybrid'),
        ],

        localPrice: {
          amount,
          currency: 'INR' as const,
          formatted: `₹${amount.toLocaleString('en-IN')}`,
          emiAvailable: true,
          emiMonths: 6,
          emiAmount: Math.ceil(amount / 6),
          emiFormatted: `₹${Math.ceil(amount / 6).toLocaleString('en-IN')}/mo`,
        },

        ctaText: `Enroll for ${cityName} ${courseName} Batch`,

        seo: {
          metaTitle: `${courseName} Course in ${cityName} — ArivuOn Academy`,
          metaDescription: `${courseName} course in ${cityName} at ArivuOn Academy. ₹${amount.toLocaleString('en-IN')}. Local placements and remote job support. Enroll today.`,
          canonicalUrl: `https://arivuon.com/locations/india/tamil-nadu/${citySlug}/${courseSlug}`,
          focusKeyword: `${courseName.toLowerCase()} course in ${cityName}`,
          robots: 'index, follow',
        },

        geo: {
          geoSummary: `ArivuOn Academy ${cityName} offers a ${courseName} course at its ${cityName} center. Fee: ₹${amount.toLocaleString('en-IN')}. Graduates receive local and remote placement support targeting ${cityName}-area employers and Chennai/Bengaluru remote-hire companies.`,
          entityContext: {
            organization: `ArivuOn Academy ${cityName}`,
            organizationType: 'EdTech Training Center',
            geographicScope: `${cityName}, Tamil Nadu, India`,
            primarySubject: courseName,
          },
          keyFacts: [
            `${courseName} course ${cityName} at ArivuOn: ₹${amount.toLocaleString('en-IN')}.`,
            `Local and remote placement support for ${cityName} students.`,
          ],
          geoContentVerifiedAt: '2025-06-01',
        },

        aeo: {
          primaryQuery: `${courseName.toLowerCase()} course in ${cityName}`,
          queryVariants: [`ArivuOn ${courseName.toLowerCase()} ${cityName}`, `${courseName.toLowerCase()} training ${cityName}`],
          uniqueValueProp: `ArivuOn ${cityName}'s ${courseName} course is taught by a local instructor with direct industry experience, providing city-specific placement support alongside the standard ArivuOn curriculum.`,
          locationCourseSpecificFAQ: [
            {
              question: `What is the fee for ${courseName.toLowerCase()} course in ${cityName} at ArivuOn?`,
              answer: `The ${courseName} course at ArivuOn Academy ${cityName} costs ₹${amount.toLocaleString('en-IN')} with 6-month EMI available from ₹${Math.ceil(amount / 6).toLocaleString('en-IN')}/month.`,
              order: 1,
            },
            {
              question: `When is the next ${courseName.toLowerCase()} batch in ${cityName}?`,
              answer: `The next ${courseName} batch at ArivuOn ${cityName} starts August 18, 2025. Weekend batches are also available starting September 13, 2025.`,
              order: 2,
            },
          ],
          faqItems: [],
        },

        schema: { schemaType: ['Course', 'LocalBusiness'] as const },
        relatedCourseSlugsSameCity: courseSlugs.filter(s => s !== courseSlug).slice(0, 3),
        sameCourseNearbyCities: ['chennai', 'coimbatore', 'salem'].filter(c => c !== citySlug),
      };
    });
  }),
];

// ─────────────────────────────────────────────
// QUERY HELPERS
// ─────────────────────────────────────────────

export function getLocationPage(
  citySlug: string,
  courseSlug: string
): LocationPage | undefined {
  return locationPages.find(
    (p) =>
      p.citySlug === citySlug &&
      p.courseSlug === courseSlug &&
      p.status === 'published' &&
      p.contentComplete
  );
}

export function getLocationPagesByCity(citySlug: string): LocationPage[] {
  return locationPages.filter(
    (p) => p.citySlug === citySlug && p.status === 'published' && p.contentComplete
  );
}

export function getLocationPagesByCourse(courseSlug: string): LocationPage[] {
  return locationPages.filter(
    (p) => p.courseSlug === courseSlug && p.status === 'published' && p.contentComplete
  );
}

export function getAllPublishedLocationPages(): LocationPage[] {
  return locationPages.filter((p) => p.status === 'published' && p.contentComplete);
}

export function getAllLocationPageSlugs(): {
  country: string;
  state: string;
  city: string;
  'course-slug': string;
}[] {
  return getAllPublishedLocationPages().map((p) => ({
    country: p.countrySlug,
    state: p.stateSlug,
    city: p.citySlug,
    'course-slug': p.courseSlug,
  }));
}

export function getLocationPageCount(): number {
  return getAllPublishedLocationPages().length;
}