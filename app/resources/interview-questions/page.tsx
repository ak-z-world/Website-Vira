import { Metadata } from 'next';
import Link from 'next/link';
import { INTERVIEW_DATA } from './_data/interview-questions';
import Breadcrumb from '../_components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Interview Questions by Role | ArivuOn Academy',
  description:
    'Master 1000+ interview questions across 10 tech roles: Python, Django, React, Full-Stack, Backend, Frontend, DevOps, Data Science, ML Engineering, Cloud. Prepare for tech interviews at Amazon, Flipkart, Microsoft, Razorpay, and more.',
  keywords: [
    'interview questions',
    'tech roles',
    'python interview',
    'react interview',
    'system design',
    'backend interview',
    'devops interview'
  ],
  openGraph: {
    title: 'Interview Questions by Role | ArivuOn Academy',
    description: 'Master interview questions for 10 in-demand tech roles',
    type: 'website',
    url: 'https://arivuon.academy/resources/interview-questions'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interview Questions by Role | ArivuOn Academy',
    description: 'Master 1000+ interview questions across 10 tech roles'
  },
  alternates: {
    canonical: 'https://arivuon.academy/resources/interview-questions'
  }
};

export default function InterviewQuestionsIndex() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Interview Questions', href: '/resources/interview-questions' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbs} />

      {/* Hero Section */}
      <section className="px-4 md:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interview Questions by Role
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Master 1000+ curated interview questions across 10 in-demand tech roles. Real answers used at Amazon, Flipkart, Microsoft, Razorpay, and top Indian startups. Practice system design, coding problems, and behavioral questions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">1050+</div>
            <div className="text-gray-700">Questions across all roles</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">10</div>
            <div className="text-gray-700">In-demand tech roles covered</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-700">Detailed, production-ready answers</div>
          </div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="px-4 md:px-6 lg:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Select Your Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERVIEW_DATA.map((role) => (
              <Link
                key={role.slug}
                href={`/resources/interview-questions/${role.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold mb-4"
                    style={{ backgroundColor: role.color + '20', color: role.color }}
                  >
                    {role.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {role.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {role.description}
                  </p>

                  {/* Badge */}
                  <div className="inline-flex items-center">
                    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">
                      {role.totalQuestions} questions
                    </span>
                  </div>

                  {/* Companies */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Used by:</p>
                    <div className="flex flex-wrap gap-1">
                      {role.hiringCompanies.slice(0, 3).map((company) => (
                        <span
                          key={company}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {company}
                        </span>
                      ))}
                      {role.hiringCompanies.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1">
                          +{role.hiringCompanies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 md:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          How to Use This Resource
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Choose Your Role
            </h3>
            <p className="text-gray-600">
              Select the tech role you're interviewing for. Each role has 100+ tailored questions.
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Filter by Difficulty
            </h3>
            <p className="text-gray-600">
              Start with Beginner, progress through Intermediate, Advanced, Scenario, and System Design.
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Master Each Topic
            </h3>
            <p className="text-gray-600">
              Read detailed answers, understand the why, and apply concepts to real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="px-4 md:px-6 lg:px-12 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            What You'll Master
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technical Skills
              </h3>
              <ul className="space-y-3">
                {[
                  'Language fundamentals and advanced concepts',
                  'Object-oriented and functional programming',
                  'Data structures and algorithms',
                  'System design and architecture',
                  'Database design and optimization',
                  'API design and best practices'
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Production Knowledge
              </h3>
              <ul className="space-y-3">
                {[
                  'Debugging and troubleshooting strategies',
                  'Performance optimization techniques',
                  'Scalability and reliability patterns',
                  'Security best practices',
                  'Monitoring and observability',
                  'Real-world trade-offs and decisions'
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="px-4 md:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Used by Top Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            'Amazon',
            'Flipkart',
            'Microsoft',
            'Google',
            'Razorpay',
            'Swiggy',
            'Oyo',
            'Paytm',
            'Hotstar',
            'Freshworks',
            'Unacademy',
            'Cred'
          ].map((company) => (
            <div
              key={company}
              className="bg-gray-100 border border-gray-200 rounded-lg p-4 text-center"
            >
              <p className="text-gray-700 font-semibold text-sm">{company}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}