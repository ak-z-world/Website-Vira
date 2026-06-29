/**
 * Crack Leap Academy — Location Architecture Types
 * Production-grade TypeScript interfaces for the location data layer.
 * Scalable to 100,000+ pages across global markets.
 *
 * @version 1.0.0
 * @architecture /locations/[country]/[state]/[city]/[course-slug]
 */

// ─────────────────────────────────────────────
// PRIMITIVES & SHARED TYPES
// ─────────────────────────────────────────────

/** ISO 3166-1 alpha-2 country codes */
export type CountryCode =
  | 'IN' | 'US' | 'GB' | 'AU' | 'CA'
  | 'DE' | 'SG' | 'AE' | 'IE' | 'NZ'
  | 'LK' | 'BD' | 'NP' | 'PK'
  | string; // extensible for future markets

/** BCP 47 locale string */
export type Locale =
  | 'en-IN' | 'en-US' | 'en-GB' | 'en-AU'
  | 'en-CA' | 'en-SG' | 'en-AE' | 'en-IE'
  | 'en-NZ' | 'de-DE'
  | string;

/** ISO 4217 currency codes */
export type CurrencyCode = 'INR' | 'USD' | 'GBP' | 'AUD' | 'CAD' | 'EUR' | 'SGD' | 'AED' | string;

/** Rollout phase for progressive expansion */
export type RolloutPhase = 'phase-1' | 'phase-2' | 'phase-3';

/** Content publication status */
export type ContentStatus = 'published' | 'draft' | 'review' | 'archived';

/** Course difficulty level */
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'all-levels';

/** Schema.org structured data types used in this architecture */
export type SchemaType =
  | 'Country'
  | 'State'
  | 'City'
  | 'LocalBusiness'
  | 'EducationalOrganization'
  | 'Course'
  | 'FAQPage'
  | 'BreadcrumbList'
  | 'Place';

// ─────────────────────────────────────────────
// SHARED FIELD GROUPS
// ─────────────────────────────────────────────

/**
 * SEO metadata fields shared across all location entities.
 * Every published page MUST have these populated before indexing.
 */
export interface SEOFields {
  /** <title> tag — 50–60 characters recommended */
  metaTitle: string;
  /** <meta name="description"> — 140–160 characters recommended */
  metaDescription: string;
  /** Open Graph image URL (1200×630px recommended) */
  ogImage?: string;
  /** Canonical URL override (defaults to computed path if omitted) */
  canonicalUrl?: string;
  /** Focus keyword for this page */
  focusKeyword?: string;
  /** Secondary keywords array */
  secondaryKeywords?: string[];
  /** hreflang pairs for international variants { locale: url } */
  hreflang?: Record<Locale, string>;
  /** robots directive override — defaults to 'index, follow' */
  robots?: string;
}

/**
 * GEO (Generative Engine Optimization) fields.
 * These fields are written to be extractable by AI answer engines.
 * Every GEO field should be a complete, self-contained factual statement.
 */
export interface GEOFields {
  /**
   * Opening paragraph answering: WHO, WHAT, WHERE, WHEN, HOW MUCH.
   * Written as a single dense paragraph. Max 300 words.
   * This is the primary AI Overview extraction target.
   */
  geoSummary: string;
  /**
   * Structured entity context for AI engines.
   * Maps geographic and institutional entities explicitly.
   */
  entityContext: {
    organization: string;        // "Crack Leap Academy"
    organizationType: string;    // "EdTech Institute"
    geographicScope: string;     // "Salem, Tamil Nadu, India"
    primarySubject?: string;     // "Programming & Software Development"
    targetAudience?: string;     // "Students and working professionals in Salem"
  };
  /**
   * Key facts list — each item is a standalone verifiable fact.
   * Used by Perplexity, ChatGPT, and Gemini for citation.
   */
  keyFacts: string[];
  /** ISO 8601 date this GEO content was last verified */
  geoContentVerifiedAt?: string;
}

/**
 * AEO (Answer Engine Optimization) fields.
 * Structured to generate FAQPage schema and feed voice search.
 */
export interface AEOFields {
  /**
   * FAQ items targeting exact-match voice and AI search queries.
   * Each answer must be completable in 1–2 sentences without visiting the page.
   */
  faqItems: FAQItem[];
  /**
   * The single most likely search query this page answers.
   * Written exactly as a user would type or say it.
   */
  primaryQuery: string;
  /**
   * Additional query variants this page should rank for.
   */
  queryVariants?: string[];
}

export interface FAQItem {
  /** Written exactly as a user types it — no keyword stuffing */
  question: string;
  /**
   * Complete answer in 1–2 sentences.
   * Must NOT require visiting the page to be useful.
   * Include price, dates, address when relevant.
   */
  answer: string;
  /** Display order — lower = shown first */
  order?: number;
}

/**
 * Schema.org structured data fields.
 * These map directly to JSON-LD output.
 */
export interface SchemaFields {
  schemaType: SchemaType | SchemaType[] | readonly SchemaType[];
  sameAs?: string[];
  additionalSchemaProps?: Record<string, unknown>;
}

/**
 * Structured address following schema.org PostalAddress.
 */
export interface PostalAddress {
  streetAddress?: string;
  addressLocality: string;   // city
  addressRegion: string;     // state / province
  postalCode?: string;
  addressCountry: CountryCode;
  /** Human-readable full address for display */
  displayAddress?: string;
}

/**
 * Geographic coordinates for LocalBusiness schema and map integration.
 */
export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

/**
 * Testimonial from a student. Used on city and city+course leaf pages.
 */
export interface Testimonial {
  id: string;
  studentName: string;
  /** City where the student studied */
  citySlug: string;
  /** Course they completed */
  courseSlug: string;
  /** Outcome e.g. "Placed at TCS as Python Developer" */
  outcome: string;
  /** Salary or package information (optional) */
  package?: string;
  /** Testimonial text — 2–4 sentences */
  quote: string;
  /** URL to student photo */
  photoUrl?: string;
  /** Company they joined */
  companyName?: string;
  /** Company logo URL */
  companyLogoUrl?: string;
  /** Month and year of placement e.g. "March 2024" */
  placementMonth?: string;
}

/**
 * Instructor profile for a specific city.
 */
export interface Instructor {
  id: string;
  name: string;
  /** City where this instructor teaches */
  citySlug: string;
  /** Courses this instructor teaches */
  courseSlugs: string[];
  /** Short bio — 2–3 sentences */
  bio: string;
  /** Years of industry experience */
  experienceYears: number;
  /** Previous employers or notable projects */
  background: string[];
  photoUrl?: string;
  linkedInUrl?: string;
}

/**
 * Batch schedule entry for city+course pages.
 */
export interface BatchSchedule {
  id: string;
  /** ISO 8601 date string e.g. "2025-08-01" */
  startDate: string;
  /** ISO 8601 date string */
  endDate?: string;
  /** e.g. "Weekday mornings", "Weekend batch" */
  timing: string;
  /** e.g. "Mon, Wed, Fri — 9:00 AM to 11:00 AM" */
  schedule: string;
  /** Seats available */
  seatsAvailable?: number;
  /** Enrollment is open */
  isOpen: boolean;
  /** Delivery mode */
  mode: 'in-person' | 'online' | 'hybrid';
}

/**
 * Price with currency — used in Course and LocationPage.
 */
export interface CoursePrice {
  amount: number;
  currency: CurrencyCode;
  /** Human-readable formatted price e.g. "₹12,999" */
  formatted: string;
  /** Strikethrough original price for discounts */
  originalAmount?: number;
  originalFormatted?: string;
  /** EMI options */
  emiAvailable?: boolean;
  emiMonths?: number;
  emiAmount?: number;
  emiFormatted?: string;
}

// ─────────────────────────────────────────────
// CORE ENTITY INTERFACES
// ─────────────────────────────────────────────

/**
 * Country entity.
 * One page per country: /locations/[country]
 */
export interface Country {
  // ── Identity ──
  /** URL-safe slug e.g. "india" */
  slug: string;
  /** Display name e.g. "India" */
  name: string;
  /** ISO 3166-1 alpha-2 */
  code: CountryCode;
  /** Primary locale for this country */
  locale: Locale;
  /** Primary currency */
  currency: CurrencyCode;
  /** Currency symbol e.g. "₹" */
  currencySymbol: string;

  // ── Rollout ──
  rolloutPhase: RolloutPhase;
  status: ContentStatus;
  /** ISO 8601 date when this country went live */
  launchedAt?: string;

  // ── Geographic ──
  /** Capital city display name */
  capital: string;
  /** Primary timezone e.g. "Asia/Kolkata" */
  timezone: string;
  /** Emoji flag */
  flagEmoji?: string;
  /** Google Maps country code for map embeds */
  mapsCountryCode?: string;

  // ── Content ──
  /** 2–3 paragraph description of the tech/education landscape in this country */
  countryContext: string;
  /** Key tech hubs in this country */
  techHubs: string[];
  /** Top hiring companies at national level */
  topEmployers: string[];

  // ── SEO ──
  seo: SEOFields;

  // ── GEO ──
  geo: GEOFields;

  // ── AEO ──
  aeo: AEOFields;

  // ── Schema ──
  schema: SchemaFields & {
    /** schema.org/Country URL */
    schemaUrl?: string;
    /** Wikipedia URL for sameAs */
    wikipediaUrl?: string;
  };

  // ── Internal linking ──
  /** Active state slugs in this country */
  activeStateSlugs: string[];
  /** Featured city slugs to highlight on the country hub page */
  featuredCitySlugs?: string[];
}

/**
 * State / Province / Region entity.
 * One page per state: /locations/[country]/[state]
 */
export interface State {
  // ── Identity ──
  /** URL-safe slug e.g. "tamil-nadu" */
  slug: string;
  /** Display name e.g. "Tamil Nadu" */
  name: string;
  /** Parent country slug */
  countrySlug: string;
  /** State/province code e.g. "TN" */
  stateCode?: string;

  // ── Rollout ──
  status: ContentStatus;
  rolloutPhase: RolloutPhase;
  launchedAt?: string;

  // ── Geographic ──
  /** State capital city name */
  capital: string;
  /** Major cities in this state (display names) */
  majorCities: string[];
  /** Languages spoken */
  languagesSpoken: string[];
  /** Neighboring states */
  borderingStates?: string[];

  // ── Content ──
  /** 2–3 paragraph description of the state's tech/education ecosystem */
  stateContext: string;
  /** Tech ecosystem description for GEO */
  techEcosystemDescription: string;
  /** Major tech employers in this state */
  majorEmployers: string[];
  /** Notable engineering colleges / institutions */
  notableInstitutions?: string[];
  /** Job market summary */
  jobMarketSummary: string;

  // ── SEO ──
  seo: SEOFields;

  // ── GEO ──
  geo: GEOFields;

  // ── AEO ──
  aeo: AEOFields;

  // ── Schema ──
  schema: SchemaFields;

  // ── Internal linking ──
  /** Active city slugs in this state */
  activeCitySlugs: string[];
  /** Featured course slugs offered in this state */
  featuredCourseSlugs?: string[];
}

/**
 * City entity.
 * One page per city: /locations/[country]/[state]/[city]
 * This is the primary local landing page — highest content requirements.
 */
export interface City {
  // ── Identity ──
  /** URL-safe slug e.g. "salem" */
  slug: string;
  /** Display name e.g. "Salem" */
  name: string;
  /** Parent state slug */
  stateSlug: string;
  /** Parent country slug */
  countrySlug: string;
  /** District name (for display only — not a URL segment) */
  districtName?: string;

  // ── Rollout ──
  status: ContentStatus;
  rolloutPhase: RolloutPhase;
  launchedAt?: string;

  // ── Location ──
  address: PostalAddress;
  coordinates?: GeoCoordinates;
  /** Google Maps embed URL */
  googleMapsUrl?: string;
  /** Google Maps Place ID */
  googlePlaceId?: string;
  /** Phone number in E.164 format */
  phone?: string;
  /** Contact email */
  email?: string;
  /** WhatsApp number for local inquiries */
  whatsapp?: string;
  /** Opening hours for LocalBusiness schema e.g. "Mo-Sa 09:00-18:00" */
  openingHours?: string[];
  /** Nearby landmarks for directions */
  nearbyLandmarks?: string[];
  /** Nearest railway station */
  nearestRailway?: string;
  /** Nearest bus stand */
  nearestBusStand?: string;

  // ── Content ──
  /**
   * Unique paragraph describing the city's tech/career landscape.
   * Must be 100% unique — NOT a template with city name swapped in.
   */
  cityContext: string;
  /** Summary of the local job market relevant to tech/programming */
  jobMarketSummary: string;
  /** Local companies actively hiring tech talent */
  localHiringCompanies: string[];
  /** Student demographics context (e.g. presence of engineering colleges) */
  studentDemographicsContext?: string;

  // ── Social proof ──
  /** Testimonials from students in this city */
  testimonials: Testimonial[];
  /** Instructors based in this city */
  instructors: Instructor[];
  /** Total students trained in this city */
  totalStudentsTrained?: number;
  /** Placement rate percentage */
  placementRate?: number;

  // ── Active courses ──
  /** Course slugs actively offered in this city */
  activeCoursesSlugs: string[];

  // ── SEO ──
  seo: SEOFields;

  // ── GEO ──
  geo: GEOFields;

  // ── AEO ──
  aeo: AEOFields & {
    /** City-specific FAQ — separate from course-level FAQ */
    citySpecificFAQ: FAQItem[];
  };

  // ── Schema ──
  schema: SchemaFields & {
    /** LocalBusiness price range indicator e.g. "₹₹" */
    priceRange?: string;
    /** Aggregate rating for LocalBusiness schema */
    aggregateRating?: {
      ratingValue: number;
      reviewCount: number;
      bestRating?: number;
    };
  };

  // ── Internal linking ──
  /** Related blog post slugs to link from this city page */
  relatedBlogSlugs?: string[];
  /** Related resource slugs to link from this city page */
  relatedResourceSlugs?: string[];
}

/**
 * Course entity — canonical course definition.
 * These are the SAME courses as /courses/[slug].
 * This entity defines course content; LocationPage defines local delivery.
 */
export interface Course {
  // ── Identity ──
  /** URL-safe slug e.g. "python-course" */
  slug: string;
  /** Display name e.g. "Python Programming" */
  name: string;
  /** Short display name for cards e.g. "Python" */
  shortName: string;
  /** Category e.g. "Programming", "Data Science", "Cloud" */
  category: string;
  /** Tags for filtering */
  tags: string[];

  // ── Rollout ──
  status: ContentStatus;
  /** Whether this course is offered at location pages */
  offeredAtLocations: boolean;

  // ── Course details ──
  level: CourseLevel;
  /** Duration in weeks */
  durationWeeks: number;
  /** Total hours of instruction */
  totalHours?: number;
  /** Base price (overridden at LocationPage level) */
  basePrice: CoursePrice;
  /** Prerequisites as display strings */
  prerequisites: string[];
  /** Learning outcomes — 5–8 items */
  learningOutcomes: string[];
  /** Tools and technologies covered */
  toolsUsed: string[];
  /** Certificate issued on completion */
  certificationOffered: boolean;
  certificationName?: string;
  certificationProvider?: string;
  /** Syllabus modules */
  syllabus: SyllabusModule[];
  /** Target audience description */
  targetAudience: string;
  /** Full description */
  description: string;
  /** Short description for cards — max 160 chars */
  shortDescription: string;
  /** Career paths this course leads to */
  careerPaths: string[];
  /** Average salary after course completion */
  averageSalaryRange?: string;

  // ── Media ──
  /** Course thumbnail image */
  thumbnailUrl?: string;
  /** Course icon or logo */
  iconUrl?: string;

  // ── SEO — generic (overridden at LocationPage for city+course pages) ──
  seo: SEOFields;

  // ── Schema ──
  schema: SchemaFields & {
    /** schema.org educational level */
    educationalLevel?: string;
    /** Skills taught for schema */
    teaches?: string[];
    /** Subject area */
    about?: string;
  };

  // ── Internal linking ──
  /** Related course slugs */
  relatedCourseSlugs?: string[];
  /** Canonical course page URL (in /courses/) */
  canonicalCourseUrl: string;
}

export interface SyllabusModule {
  order: number;
  title: string;
  /** Topics covered in this module */
  topics: string[];
  /** Duration in hours */
  durationHours?: number;
}

/**
 * LocationPage — the JOIN entity between City and Course.
 * This is the most important entity in the architecture.
 * One record per city × course combination.
 *
 * Generates: /locations/[country]/[state]/[city]/[course-slug]
 *
 * ALL required fields must be populated before status = 'published'.
 * Pages with missing required fields MUST remain in 'draft' status
 * and will be excluded from sitemaps and static generation.
 */
export interface LocationPage {
  // ── Identity ──
  /** Composite key: "{citySlug}_{courseSlug}" */
  id: string;
  citySlug: string;
  stateSlug: string;
  countrySlug: string;
  courseSlug: string;

  // ── Rollout ──
  status: ContentStatus;
  rolloutPhase: RolloutPhase;
  launchedAt?: string;

  /**
   * Content completeness gate.
   * true = all required unique content fields are populated.
   * false = page will be withheld from sitemap and static generation.
   */
  contentComplete: boolean;

  // ── REQUIRED unique content fields ──
  // These MUST be populated before contentComplete = true.

  /**
   * Local instructor(s) for this city+course combination.
   * REQUIRED — anti-doorway gate.
   */
  localInstructors: Instructor[];

  /**
   * Testimonials specific to this city+course combination.
   * REQUIRED — anti-doorway gate. Minimum 1.
   */
  localTestimonials: Testimonial[];

  /**
   * Paragraph describing the job market for THIS course in THIS city.
   * NOT a template — must reference specific local companies and context.
   * REQUIRED — anti-doorway gate.
   */
  localJobMarketParagraph: string;

  /**
   * Batch schedules for this city+course.
   * REQUIRED — at least one open batch or upcoming batch.
   */
  batchSchedules: BatchSchedule[];

  // ── Pricing (may differ from base course price) ──
  /** Local price override — if null, falls back to course.basePrice */
  localPrice?: CoursePrice;
  /** Early bird pricing */
  earlyBirdPrice?: CoursePrice;
  /** Early bird deadline */
  earlyBirdDeadline?: string;

  // ── Local syllabus customization ──
  /**
   * Additions or modifications to the standard syllabus
   * reflecting local job market needs.
   * Optional but strongly recommended.
   */
  syllabusLocalAdditions?: {
    moduleTitle: string;
    reason: string;  // "Added because Salem-area IT companies use X heavily"
    topics: string[];
  }[];

  // ── Local outcomes data ──
  /** Placement statistics specific to this city+course */
  localPlacementData?: {
    placedStudents: number;
    totalStudents: number;
    averagePackage?: string;
    highestPackage?: string;
    topHiringCompanies: string[];
    /** Month-year range this data covers e.g. "Jan 2023 – Dec 2024" */
    dataCoverage?: string;
  };

  // ── Enrollment ──
  /** Primary CTA text e.g. "Enroll for Salem Batch" */
  ctaText?: string;
  /** Enrollment form URL or anchor */
  ctaUrl?: string;
  /** WhatsApp CTA for mobile users */
  whatsappCTAText?: string;

  // ── SEO (unique per city+course — NOT inherited from course) ──
  seo: SEOFields;

  // ── GEO ──
  geo: GEOFields;

  // ── AEO ──
  aeo: AEOFields & {
    /** Unique value proposition — one sentence answering:
     *  "Why learn [course] in [city] with Crack Leap?"
     *  This is the primary AEO extraction target.
     */
    uniqueValueProp: string;
    /** City+course specific FAQ — separate from city and course FAQs */
    locationCourseSpecificFAQ: FAQItem[];
  };

  // ── Schema ──
  schema: SchemaFields;

  // ── Internal linking ──
  /** Other courses offered in the same city */
  relatedCourseSlugsSameCity?: string[];
  /** Same course in nearby cities */
  sameCourseNearbyCities?: string[];
  /** Related resources for this course */
  relatedResourceSlugs?: string[];
  /** Related blog posts about this course or city */
  relatedBlogSlugs?: string[];
}

// ─────────────────────────────────────────────
// COMPUTED / UTILITY TYPES
// ─────────────────────────────────────────────

/**
 * Resolved location path — all segments resolved, used in
 * generateStaticParams and metadata generation.
 */
export interface ResolvedLocationPath {
  country: string;   // slug
  state: string;     // slug
  city: string;      // slug
  courseSlug?: string;
}

/**
 * Breadcrumb item for BreadcrumbList schema and UI component.
 */
export interface BreadcrumbItem {
  position: number;
  name: string;
  url: string;
}

/**
 * Aggregated location stats — used on hub pages and schema.
 */
export interface LocationStats {
  totalCountries: number;
  totalStates: number;
  totalCities: number;
  totalCourses: number;
  totalLocationPages: number;
}

/**
 * Result of a getStaticParams lookup — used in page components.
 */
export interface LocationPageParams {
  country: string;
  state: string;
  city: string;
  'course-slug'?: string;
}

/**
 * Type guard — checks if a LocationPage is ready for publication.
 * Use before including in sitemap or static params.
 */
export function isPublishableLocationPage(page: LocationPage): boolean {
  return (
    page.status === 'published' &&
    page.contentComplete &&
    page.localInstructors.length > 0 &&
    page.localTestimonials.length > 0 &&
    page.localJobMarketParagraph.trim().length > 50 &&
    page.batchSchedules.length > 0
  );
}

/**
 * Type guard — checks if a City is ready for publication.
 */
export function isPublishableCity(city: City): boolean {
  return (
    city.status === 'published' &&
    city.testimonials.length > 0 &&
    city.instructors.length > 0 &&
    city.cityContext.trim().length > 100
  );
}

/**
 * Builds the canonical URL for a location entity.
 */
export function buildLocationUrl(
  base: string,
  country: string,
  state?: string,
  city?: string,
  courseSlug?: string
): string {
  const parts = [base, 'locations', country, state, city, courseSlug].filter(Boolean);
  return parts.join('/');
}