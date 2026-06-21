import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INTERVIEW_DATA } from '../_data/interview-questions';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import QuestionFilter from '../_components/QuestionFilter';

export async function generateStaticParams() {
    return INTERVIEW_DATA.map((role) => ({
        slug: role.slug
    }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = (await params).slug;
    const role = INTERVIEW_DATA.find((r) => r.slug === slug);

    if (!role) return {};

    return {
        title: role.seo.title,
        description: role.seo.description,
        keywords: role.seo.keywords,
        openGraph: {
            title: role.seo.title,
            description: role.seo.description,
            type: 'article',
            url: `https://arivuon.academy/resources/interview-questions/${role.slug}`
        },
        twitter: {
            card: 'summary_large_image',
            title: role.seo.title,
            description: role.seo.description
        },
        alternates: {
            canonical: `https://arivuon.academy/resources/interview-questions/${role.slug}`
        }
    };
}

export default async function RolePage({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const role = INTERVIEW_DATA.find((r) => r.slug === slug);

    if (!role) {
        notFound();
    }

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Resources', href: '/resources' },
        { label: 'Interview Questions', href: '/resources/interview-questions' },
        { label: role.title, href: `/resources/interview-questions/${role.slug}` }
    ];

    // Distribute questions by difficulty
    const difficultyGroups = {
        Beginner: role.questions.filter((q) => q.difficulty === 'Beginner'),
        Intermediate: role.questions.filter((q) => q.difficulty === 'Intermediate'),
        Advanced: role.questions.filter((q) => q.difficulty === 'Advanced'),
        Scenario: role.questions.filter((q) => q.difficulty === 'Scenario'),
        'System Design': role.questions.filter((q) => q.difficulty === 'System Design')
    };

    return (
        <main className="min-h-screen bg-white">
            <Breadcrumb items={breadcrumbs} />

            {/* Hero Section */}
            <section className="px-4 md:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
                <div className="flex items-start gap-6 mb-8">
                    <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-4xl flex-shrink-0"
                        style={{ backgroundColor: role.color + '20', color: role.color }}
                    >
                        {role.icon}
                    </div>
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                            {role.title}
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">{role.description}</p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="text-2xl font-bold text-blue-600">
                                    {role.totalQuestions}
                                </div>
                                <div className="text-sm text-gray-600">Interview Questions</div>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="text-2xl font-bold text-green-600">
                                    {role.hiringCompanies.length}
                                </div>
                                <div className="text-sm text-gray-600">Top Companies</div>
                            </div>
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                <div className="text-2xl font-bold text-purple-600">
                                    {new Date(role.lastUpdated).toLocaleDateString()}
                                </div>
                                <div className="text-sm text-gray-600">Last Updated</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                <div className="text-2xl font-bold text-orange-600">5</div>
                                <div className="text-sm text-gray-600">Difficulty Levels</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hiring Companies */}
                <div className="mt-12 pt-12 border-t border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                        Actively Hiring Companies
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {role.hiringCompanies.map((company) => (
                            <span
                                key={company}
                                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                            >
                                {company}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2026 India Hiring Context */}
            <section className="px-4 md:px-6 lg:px-12 py-12 bg-blue-50 border-y border-blue-200">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        2026 India Hiring Landscape
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {role.title}s are in high demand across India's tech ecosystem. The market shows strong growth in both tier-1 companies (Amazon, Flipkart, Microsoft) and high-growth startups (Razorpay, Swiggy, Cred, PhonePe). Remote opportunities remain abundant. Salary growth correlates strongly with system design and production engineering skills. Candidates with strong fundamentals, shipping experience, and problem-solving mindset command premium compensation in the ₹15-100 LPA range depending on experience. Focus on depth in core concepts rather than breadth across technologies.
                    </p>
                </div>
            </section>

            {/* Interview Process */}
            <section className="px-4 md:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">
                    Typical Interview Process
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {role.interviewProcess.map((round, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-gray-200 rounded-xl p-6 relative"
                        >
                            {idx < role.interviewProcess.length - 1 && (
                                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                            )}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                                    {round.round}
                                </div>
                                <h3 className="font-bold text-gray-900">{round.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-semibold">Duration:</span> {round.duration}
                            </p>
                            <p className="text-sm text-gray-600">{round.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Questions Section */}
            <section className="px-4 md:px-6 lg:px-12 py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        {role.totalQuestions} Interview Questions
                    </h2>

                    {/* Filter Component */}
                    <QuestionFilter questions={role.questions} />
                </div>
            </section>

            {/* Salary Table */}
            <section className="px-4 md:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    {role.title} Salary in India 2026
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 border border-gray-200">
                                <th className="px-6 py-4 text-left font-bold text-gray-900 border border-gray-200">
                                    Experience
                                </th>
                                <th className="px-6 py-4 text-left font-bold text-gray-900 border border-gray-200">
                                    IT Services (TCS, Infosys)
                                </th>
                                <th className="px-6 py-4 text-left font-bold text-gray-900 border border-gray-200">
                                    Startups (Series B+)
                                </th>
                                <th className="px-6 py-4 text-left font-bold text-gray-900 border border-gray-200">
                                    Product MNCs (Amazon, Flipkart)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {role.salaryTable.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                >
                                    <td className="px-6 py-4 font-semibold text-gray-900 border border-gray-200">
                                        {row.experience}
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 border border-gray-200">
                                        {row.itServices}
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 border border-gray-200">
                                        {row.startup}
                                    </td>
                                    <td className="px-6 py-4 text-gray-700 border border-gray-200">
                                        {row.productMNC}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-gray-600 mt-6">
                    ✓ Salary ranges are approximate and vary by company, location, and negotiation. Numbers are annual (LPA = Lakhs Per Annum). Data sourced from recent 2026 market surveys across India.
                </p>
            </section>

            {/* FAQs */}
            <section className="px-4 md:px-6 lg:px-12 py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Frequently Asked Questions
                    </h2>
                    <FAQAccordion
                        items={role.faqs.map((faq) => ({
                            question: faq.question,
                            answer: faq.answer
                        }))}
                    />
                </div>
            </section>

            {/* Related Resources */}
            {/* <section className="px-4 md:px-6 lg:px-12 py-16 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                    Related Resources
                </h2>
                <RelatedResources items={role.relatedResources} />
            </section> */}

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: breadcrumbs.map((crumb, idx) => ({
                            '@type': 'ListItem',
                            position: idx + 1,
                            name: crumb.label,
                            item: `https://arivuon.academy${crumb.href}`
                        }))
                    })
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: role.faqs.map((faq) => ({
                            '@type': 'Question',
                            name: faq.question,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.answer
                            }
                        }))
                    })
                }}
            />
        </main>
    );
}