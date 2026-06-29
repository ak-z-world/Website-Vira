// app/resources/roadmaps/ai-engineer-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'AI Engineer Roadmap 2026 — LLMs, RAG, MLOps, Python | Crack Leap Academy',
  description:
    'Complete AI Engineer roadmap 2026: Python, machine learning, deep learning, transformers, LLMs, RAG systems, LangChain, vector databases, and production AI deployment. Salary ₹15–60 LPA.',
  keywords:
    'ai engineer roadmap 2026, how to become ai engineer, llm engineer roadmap, machine learning roadmap, genai engineer career path india, langchain rag roadmap',
  openGraph: {
    title: 'AI Engineer Roadmap 2026 | Crack Leap Academy',
    url: 'https://arivuon.com/resources/roadmaps/ai-engineer-roadmap-2026',
  },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/ai-engineer-roadmap-2026' },
};

const FAQS = [
  {
    question: 'What is an AI Engineer and how is it different from a Data Scientist?',
    answer:
      'An AI Engineer builds the systems and infrastructure that take AI/ML models to production — APIs, data pipelines, model serving, monitoring, and integration into applications. A Data Scientist focuses on research, experimentation, and model development. AI Engineers need stronger software engineering skills; Data Scientists need stronger statistics and domain knowledge. In 2026, the most valuable profile is the AI Engineer who can do both.',
  },
  {
    question: 'What programming languages does an AI Engineer need in 2026?',
    answer:
      'Python is the primary language (90% of AI work). You also need SQL for data querying, Bash/Shell for scripting and automation, and basic JavaScript/TypeScript if building AI-powered web applications. Knowing Rust or Go is a bonus for high-performance AI infrastructure but not required early in your career.',
  },
  {
    question: 'Do I need a mathematics background for AI engineering?',
    answer:
      'You need foundational linear algebra (vectors, matrices, dot products), basic calculus (derivatives, gradients, chain rule), probability and statistics (Bayesian thinking, distributions, hypothesis testing). You do not need a PhD-level mathematics background for most AI engineering roles. The math you need can be learned in 2–3 months focused study.',
  },
  {
    question: 'What is the salary for AI Engineers in India in 2026?',
    answer:
      'AI Engineers are among the highest-paid developers in India. Entry-level (0–1 year): ₹10–18 LPA. Mid-level (2–4 years): ₹20–40 LPA. Senior AI Engineers (5+ years): ₹40–80 LPA. Specialized roles (LLM fine-tuning, AI infrastructure) can command ₹60–120+ LPA at AI-first companies and MNCs.',
  },
  {
    question: 'Should I learn LangChain or build custom LLM pipelines?',
    answer:
      'Learn both approaches. LangChain and LlamaIndex accelerate prototyping but can become a liability in production due to abstraction complexity. Understanding how to build RAG pipelines from scratch with OpenAI APIs, vector databases, and custom prompt engineering is more valuable in interviews. Use LangChain to prototype fast, then evaluate if you need it in production.',
  },
  {
    question: 'What vector databases should an AI Engineer know?',
    answer:
      'Pinecone (most popular for production), Weaviate (open source, powerful), Chroma (great for development and testing), pgvector (PostgreSQL extension — easiest to add to existing apps), Qdrant (high performance, written in Rust). Focus on understanding embeddings and similarity search concepts first — the tool is secondary.',
  },
  {
    question: 'Is fine-tuning LLMs required for AI engineering roles?',
    answer:
      'Fine-tuning is not required for most AI engineering roles in 2026. The majority of AI applications use RAG (Retrieval Augmented Generation), prompt engineering, and API-based LLM integrations. Fine-tuning is a specialized skill needed for roles at AI labs and companies building foundation models. Focus on RAG, evaluation, and production deployment first.',
  },
];

const MONTHS = [
  { month: 'Month 1–2', title: 'Python & Mathematics Foundation', topics: ['Python for Data Science: NumPy, Pandas, Matplotlib', 'Linear algebra: vectors, matrices, eigenvalues', 'Calculus: derivatives, gradients, chain rule', 'Probability and statistics: distributions, Bayes theorem, hypothesis testing', 'Jupyter notebooks and Google Colab workflows', 'Data manipulation: cleaning, EDA, feature analysis'], project: 'Exploratory data analysis on a Kaggle dataset — visualize, clean, and derive 10 insights.' },
  { month: 'Month 3–4', title: 'Machine Learning Fundamentals', topics: ['Supervised learning: linear/logistic regression, decision trees, random forests, SVM', 'Unsupervised learning: k-means clustering, PCA, dimensionality reduction', 'Scikit-learn pipelines, cross-validation, hyperparameter tuning', 'Model evaluation metrics: accuracy, precision, recall, F1, AUC-ROC', 'Feature engineering and feature selection', 'Model persistence with joblib/pickle, MLflow experiment tracking'], project: 'Build and deploy a loan default prediction model with scikit-learn + MLflow + FastAPI serving endpoint.' },
  { month: 'Month 5–6', title: 'Deep Learning & Neural Networks', topics: ['Neural network fundamentals: perceptrons, activation functions, backpropagation', 'PyTorch: tensors, autograd, datasets, dataloaders, training loops', 'CNNs for image classification (ResNet, EfficientNet)', 'RNNs and LSTMs for sequence data', 'Transfer learning and fine-tuning pre-trained models', 'Regularization: dropout, batch normalization, weight decay', 'GPU training with CUDA, mixed precision training'], project: 'Build an image classification API (product category classifier) using PyTorch + FastAPI + Docker.' },
  { month: 'Month 7–8', title: 'Transformers, LLMs & Generative AI', topics: ['Transformer architecture: attention mechanisms, self-attention, multi-head attention', 'BERT, GPT architecture and variants: when to use which', 'Hugging Face ecosystem: transformers, datasets, tokenizers', 'OpenAI API, Anthropic Claude API, Google Gemini API', 'Prompt engineering: zero-shot, few-shot, chain-of-thought, ReAct', 'Function calling and structured outputs with LLMs', 'LLM evaluation: RAGAS, LLM-as-judge, human evaluation frameworks'], project: 'Build an AI-powered document Q&A system using GPT-4 + LangChain + Streamlit.' },
  { month: 'Month 9', title: 'RAG Systems & Vector Databases', topics: ['Embedding models: text-embedding-3-large, all-MiniLM, sentence-transformers', 'Vector databases: Pinecone, Weaviate, Chroma, pgvector, Qdrant', 'RAG pipeline architecture: ingestion, chunking, retrieval, generation', 'Advanced RAG: HyDE, parent-child chunking, reranking with Cohere', 'LlamaIndex for production RAG systems', 'Evaluation: context relevance, faithfulness, answer relevance (RAGAS)'], project: 'Build a production RAG system for internal document search using Pinecone + LlamaIndex + FastAPI.' },
  { month: 'Month 10', title: 'MLOps & Production AI Systems', topics: ['MLflow for experiment tracking and model registry', 'Feature stores: Feast, Hopsworks concepts', 'Model serving: Triton Inference Server, BentoML, FastAPI patterns', 'CI/CD for ML: GitHub Actions + DVC + MLflow', 'Model monitoring: data drift, prediction drift, Evidently AI', 'A/B testing models in production', 'Kubernetes deployment for ML workloads'], project: 'Set up a complete MLOps pipeline: model training → MLflow registry → Docker → GitHub Actions → AWS EC2 deployment with monitoring.' },
  { month: 'Month 11–12', title: 'Advanced AI Engineering & Specialization', topics: ['LLM fine-tuning: LoRA, QLoRA, PEFT techniques', 'Agents and tool use: OpenAI function calling, LangGraph, CrewAI', 'Multi-modal AI: vision-language models, GPT-4V, LLaVA', 'AI safety and alignment basics: RLHF, Constitutional AI', 'Cost optimization: LLM caching, batching, model distillation', 'Building AI products: latency, cost, quality triangle', 'System design for AI: build a production recommendation system'], project: 'Build an AI agent that autonomously researches and writes reports, with tool use, memory, and web search.' },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' },
  { label: 'AI Engineer Roadmap 2026', href: '/resources/roadmaps/ai-engineer-roadmap-2026' },
];

const TOC_ITEMS = [
  { id: 'what-is', label: 'What Is an AI Engineer?' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'roadmap', label: 'Month-by-Month Roadmap' },
  { id: 'skills', label: 'Core Skills' },
  { id: 'tools', label: 'Tools & Technologies' },
  { id: 'projects', label: 'Portfolio Projects' },
  { id: 'salary', label: 'Salary in India 2026' },
  { id: 'mistakes', label: 'Common Mistakes' },
  { id: 'faq', label: 'FAQ' },
];

const RELATED = [
  { title: '100+ ML Engineer Interview Questions', href: '/resources/interview-questions/machine-learning-engineer', description: 'Comprehensive ML interview prep covering algorithms, system design, and coding.', category: 'Interview Prep', icon: '💬' },
  { title: 'AI/ML Project Ideas', href: '/resources/projects/ai-projects', description: '30+ AI and ML project ideas from beginner to production-grade.', category: 'Projects', icon: '🛠️' },
  { title: 'Data Scientist Roadmap 2026', href: '/resources/roadmaps/data-scientist-roadmap-2026', description: 'Parallel path focusing on data analysis, statistical modeling, and ML.', category: 'Roadmap', icon: '📊' },
  { title: 'Python Tutorial', href: '/resources/tutorials/python', description: 'Master Python fundamentals required for all AI/ML work.', category: 'Tutorial', icon: '📚' },
  { title: 'Python & AI Combo Course', href: '/courses/python-ai-aws-devops-combo', description: 'Structured learning path combining Python, AI, and cloud deployment.', category: 'Course', icon: '🎓' },
  { title: 'ML Engineer Roadmap 2026', href: '/resources/roadmaps/ml-engineer-roadmap-2026', description: 'Specialize in production ML infrastructure with this MLOps-focused roadmap.', category: 'Roadmap', icon: '🧠' },
];

export default function AIEngineerRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'AI Engineer Roadmap 2026', description: 'Complete AI Engineer career roadmap for 2026.', url: 'https://arivuon.com/resources/roadmaps/ai-engineer-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🤖</span>
            <div>
              <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">AI Engineer Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                AI Engineer Roadmap 2026
              </h1>
            </div>
          </div>
          <p className="text-purple-100 text-lg max-w-2xl mb-6">
            From Python beginner to production AI engineer. Build LLM-powered applications, RAG systems, 
            and ML pipelines that ship to real users.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 12-Month Plan', '🎯 All Levels', '📅 Updated December 2025', '💰 ₹15–60 LPA Roles'].map(tag => (
              <span key={tag} className="bg-purple-500/30 border border-purple-400/40 px-3 py-1.5 rounded-full text-purple-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <TableOfContents items={TOC_ITEMS} />

        <section id="what-is" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is an AI Engineer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An AI Engineer (also called an Applied AI Engineer, LLM Engineer, or ML Platform Engineer) is a 
            software engineer who specializes in building systems that use artificial intelligence and machine learning. 
            In 2026, the most common AI engineering work involves deploying large language models (LLMs), 
            building retrieval-augmented generation (RAG) systems, and creating AI-powered features in products.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unlike Data Scientists who focus on research and experimentation, AI Engineers focus on 
            <strong> production-grade systems</strong> — APIs that serve AI responses to users, pipelines that 
            process millions of documents, monitoring systems that detect when AI output degrades, and infrastructure 
            that makes AI affordable at scale.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: '🔬', label: 'Data Scientist', desc: 'Experiments, analyzes, builds models', color: 'bg-blue-50 border-blue-200' },
              { icon: '🤖', label: 'AI Engineer', desc: 'Ships AI to production users', color: 'bg-purple-50 border-purple-200' },
              { icon: '⚙️', label: 'ML Engineer', desc: 'Builds ML infrastructure and pipelines', color: 'bg-indigo-50 border-indigo-200' },
            ].map(role => (
              <div key={role.label} className={`${role.color} border rounded-xl p-4 text-center`}>
                <div className="text-3xl mb-2">{role.icon}</div>
                <div className="font-bold text-gray-900 text-sm mb-1">{role.label}</div>
                <div className="text-gray-500 text-xs">{role.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="prerequisites" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prerequisites</h2>
          <div className="space-y-3">
            {[
              { item: 'Python programming (intermediate level)', required: true, note: 'You should be able to write Python classes, functions, and work with APIs before starting this roadmap.' },
              { item: 'Basic mathematics (linear algebra + probability)', required: true, note: 'Review 3Blue1Brown\'s Essence of Linear Algebra and StatQuest on YouTube if needed.' },
              { item: 'Command line and Git', required: true, note: 'You\'ll use terminal, Docker, and Git daily as an AI Engineer.' },
              { item: 'REST APIs and web basics', required: false, note: 'Understanding how APIs work helps when building AI-powered services.' },
              { item: 'Cloud computing basics', required: false, note: 'AWS or GCP familiarity accelerates the deployment sections.' },
            ].map(p => (
              <div key={p.item} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${p.required ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {p.required ? '!' : '✓'}
                </span>
                <div>
                  <span className="font-semibold text-gray-900 text-sm">{p.item}</span>
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${p.required ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                    {p.required ? 'Required' : 'Helpful'}
                  </span>
                  <p className="text-gray-500 text-sm mt-1">{p.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="roadmap" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month AI Engineer Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-4">
                  <span className="text-purple-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((topic, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-purple-500 mt-0.5 flex-shrink-0">✓</span>{topic}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-700 font-semibold text-sm mb-1">🛠️ Capstone Project</p>
                    <p className="text-blue-600 text-sm">{m.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools & Technologies Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: 'Python 3.12+', cat: 'Language', icon: '🐍' },
              { name: 'PyTorch 2.x', cat: 'Deep Learning', icon: '🔥' },
              { name: 'Hugging Face', cat: 'Models', icon: '🤗' },
              { name: 'LangChain', cat: 'LLM Framework', icon: '🔗' },
              { name: 'LlamaIndex', cat: 'RAG', icon: '🦙' },
              { name: 'OpenAI API', cat: 'LLM', icon: '🧠' },
              { name: 'Pinecone', cat: 'Vector DB', icon: '🌲' },
              { name: 'Chroma DB', cat: 'Vector DB', icon: '🟡' },
              { name: 'FastAPI', cat: 'API', icon: '⚡' },
              { name: 'MLflow', cat: 'Experiment Tracking', icon: '📊' },
              { name: 'Docker', cat: 'DevOps', icon: '🐳' },
              { name: 'AWS SageMaker', cat: 'Cloud ML', icon: '☁️' },
              { name: 'Scikit-learn', cat: 'ML', icon: '🔬' },
              { name: 'Pandas / NumPy', cat: 'Data', icon: '🐼' },
              { name: 'RAGAS', cat: 'Evaluation', icon: '✅' },
              { name: 'Streamlit', cat: 'UI', icon: '🎨' },
            ].map(tool => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-purple-300 transition-colors">
                <div className="text-2xl mb-1">{tool.icon}</div>
                <div className="text-xs font-bold text-gray-900">{tool.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{tool.cat}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="salary" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Engineer Salary in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-purple-600 text-white">
                  <th className="px-4 py-3 text-left">Experience</th>
                  <th className="px-4 py-3 text-left">Startup</th>
                  <th className="px-4 py-3 text-left">Product Co.</th>
                  <th className="px-4 py-3 text-left">AI Labs / MNCs</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0–1 year', '₹8–12 LPA', '₹12–20 LPA', '₹20–40 LPA'],
                  ['2–4 years', '₹14–22 LPA', '₹20–35 LPA', '₹35–60 LPA'],
                  ['5–8 years', '₹22–35 LPA', '₹35–55 LPA', '₹55–100 LPA'],
                  ['8+ years / Staff', '₹35–55 LPA', '₹55–90 LPA', '₹80–150+ LPA'],
                ].map(([exp, ...vals], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100">{exp}</td>
                    {vals.map((v, vi) => <td key={vi} className="px-4 py-3 text-gray-600 border-b border-gray-100">{v}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="mistakes" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
          <div className="space-y-3">
            {[
              { mistake: 'Skipping ML fundamentals for LLMs', fix: 'LLMs are built on ML foundations. Understanding gradient descent, attention mechanisms, and loss functions makes you a much better AI engineer than someone who only knows API calls.' },
              { mistake: 'Using LangChain for everything', fix: 'LangChain is a prototyping tool. Many production AI systems are simpler, more reliable, and easier to debug when built with direct API calls and custom code.' },
              { mistake: 'Not evaluating your AI systems', fix: 'An AI system without evaluation is not production-ready. Always set up RAGAS, LLM-as-judge, or human evaluation before shipping to users.' },
              { mistake: 'Ignoring cost and latency', fix: 'GPT-4 API calls are expensive. Build cost tracking from day one. Cache responses, use smaller models where possible, and monitor spending.' },
              { mistake: 'Building AI features without safety guardrails', fix: 'Prompt injection, hallucinations, and toxic outputs are real risks. Implement input validation, output filtering, and content moderation from the start.' },
            ].map(item => (
              <div key={item.mistake} className="flex gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                <span className="flex-shrink-0 text-red-500 font-bold">✗</span>
                <div>
                  <span className="font-semibold text-red-800">{item.mistake}: </span>
                  <span className="text-red-700 text-sm">{item.fix}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Start Your AI Engineering Career</h2>
          <p className="text-purple-100 mb-6">Structured AI training with hands-on LLM and RAG projects from day one.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/python-ai-aws-devops-combo" className="bg-white text-purple-700 font-bold px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">
              Enrol in Python + AI Course →
            </Link>
            <Link href="/resources/interview-questions/machine-learning-engineer" className="bg-purple-500/30 border border-purple-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-purple-500/50 transition-colors">
              AI Interview Prep
            </Link>
          </div>
        </div>

        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}