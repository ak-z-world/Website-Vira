// app/resources/roadmaps/data-scientist-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'Data Scientist Roadmap 2026 — Python, ML, Statistics, MLOps | ArivuOn Academy',
  description: 'Complete Data Scientist roadmap 2026: statistics, Python, Pandas, Scikit-learn, deep learning, MLOps, and business communication. Salary ₹8–35 LPA in India.',
  keywords: 'data scientist roadmap 2026, data science career path india, machine learning roadmap, python pandas sklearn roadmap, how to become data scientist india',
  openGraph: { title: 'Data Scientist Roadmap 2026 | ArivuOn Academy', url: 'https://arivuon.com/resources/roadmaps/data-scientist-roadmap-2026' },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/data-scientist-roadmap-2026' },
};

const FAQS = [
  { question: 'What is the difference between a Data Scientist and an ML Engineer in 2026?', answer: 'Data Scientists focus on extracting insights from data, building models, and communicating findings to business stakeholders. ML Engineers focus on productionizing those models — building pipelines, APIs, and infrastructure. In 2026, the lines blur: companies want Data Scientists who can also deploy, and ML Engineers who understand statistical validity. This roadmap makes you a production-capable Data Scientist.' },
  { question: 'How much mathematics is required for data science?', answer: 'More than for AI engineering. You need solid linear algebra (matrix operations, eigendecomposition), statistics (hypothesis testing, Bayesian inference, regression diagnostics), probability (distributions, MLE, MAP estimation), and calculus (gradients for understanding model optimization). This is not intimidating if learned systematically — 3Blue1Brown\'s playlists cover what you need in 8 hours.' },
  { question: 'What is the salary for a Data Scientist in India in 2026?', answer: 'Entry-level (0–1 year): ₹6–12 LPA. Mid-level (2–4 years): ₹14–28 LPA. Senior Data Scientist (5+ years): ₹28–55 LPA. Principal/Lead Data Scientist: ₹50–90 LPA. Data Scientists at AI-first companies (Sarvam AI, Krutrim, Meesho AI) and MNCs (Google, Amazon, Microsoft India) earn ₹40–100 LPA.' },
  { question: 'Should I learn deep learning before getting a data science job?', answer: 'Not necessarily. Most data science roles at Indian companies use classical ML (tree ensembles, regression, clustering) on tabular data. Deep learning is important for computer vision, NLP, and recommendation systems. Focus on classical ML deeply, then add deep learning knowledge. Interviewers rarely expect freshers to know PyTorch — they expect solid fundamentals and clean analysis.' },
  { question: 'Is Kaggle important for a data science career?', answer: 'Yes, especially in early career. Kaggle competitions build practical skills, provide labeled datasets, expose you to real-world ML problems, and a strong Kaggle profile (Expert or Master rank) is noticed by hiring managers. Participate in 3–5 competitions, focus on tabular data first, and publish your notebooks publicly.' },
  { question: 'What tools does a Data Scientist use daily?', answer: 'Python (primary language), Jupyter notebooks or VS Code with Jupyter extension, Pandas and NumPy for data manipulation, Matplotlib/Seaborn/Plotly for visualization, Scikit-learn for ML, XGBoost/LightGBM for gradient boosting, MLflow for experiment tracking, SQL for data extraction, Git for version control, and Streamlit for quick demos.' },
];

const MONTHS = [
  { month: 'Month 1', title: 'Python for Data Science & Mathematics', topics: ['Python: NumPy arrays, broadcasting, vectorized operations', 'Pandas: Series, DataFrame, groupby, merge, pivot, apply', 'Matplotlib and Seaborn: line, bar, scatter, heatmap, violin plots', 'Plotly for interactive visualizations', 'Statistics: mean, median, variance, std, skewness, kurtosis', 'Probability: conditional probability, Bayes theorem, common distributions', 'Linear algebra: vectors, dot products, matrix multiplication, eigenvalues'], project: 'EDA project: Analyze 1M-row e-commerce dataset — clean data, visualize distributions, find top insights, present findings in a Jupyter notebook with Plotly charts.', milestone: 'Produce a polished EDA notebook that a business stakeholder can read without coding knowledge.' },
  { month: 'Month 2–3', title: 'Statistics & Hypothesis Testing', topics: ['Descriptive vs inferential statistics', 'Sampling theory, CLT, law of large numbers', 'Hypothesis testing: t-tests, chi-square, ANOVA, Mann-Whitney U', 'p-values, Type I/II errors, statistical power, effect size', 'A/B testing: experiment design, sample size calculation, novelty effects', 'Bayesian inference: priors, likelihoods, posterior, credible intervals', 'Regression diagnostics: residual analysis, heteroscedasticity, multicollinearity'], project: 'Design and analyze an A/B test for a product feature: hypothesis, sample size calculation, data collection, statistical analysis, business recommendation.', milestone: 'Run a rigorous A/B test from design to business recommendation without statistical errors.' },
  { month: 'Month 4–5', title: 'Machine Learning with Scikit-learn', topics: ['Supervised learning: linear regression, logistic regression, ridge/lasso', 'Decision trees, random forests, gradient boosting (XGBoost, LightGBM, CatBoost)', 'SVMs, KNN, Naive Bayes', 'Unsupervised: K-means, DBSCAN, hierarchical clustering, PCA, t-SNE, UMAP', 'Feature engineering: encoding, scaling, imputation, datetime features', 'Scikit-learn pipelines, ColumnTransformer, cross-validation, GridSearchCV, Optuna', 'Model evaluation: confusion matrix, ROC-AUC, PR curve, RMSE, MAE, MAPE', 'SHAP for model interpretability — explain any ML model prediction'], project: 'Customer churn prediction: full pipeline from raw data → feature engineering → model training → SHAP analysis → Streamlit demo app.', milestone: 'Win or place top 30% in a Kaggle tabular competition using ensemble methods.' },
  { month: 'Month 6', title: 'Deep Learning Fundamentals', topics: ['Neural networks: perceptrons, activation functions, backpropagation, weight initialization', 'PyTorch tensors, autograd, datasets, dataloaders, training loops', 'CNNs for image data: convolutions, pooling, ResNet transfer learning', 'RNNs and LSTMs for sequential tabular data', 'Regularization: dropout, batch normalization, weight decay, early stopping', 'PyTorch Lightning for cleaner training code', 'Mixed precision training (fp16) for GPU efficiency'], project: 'Image classification: fine-tune EfficientNet on a custom 5-class dataset. 90%+ validation accuracy. Serve predictions via FastAPI.', milestone: 'Train, fine-tune, and deploy a deep learning model to a REST API endpoint.' },
  { month: 'Month 7', title: 'NLP & Text Data', topics: ['Text preprocessing: tokenization, stemming, lemmatization, stopwords', 'TF-IDF, bag-of-words for classical NLP tasks', 'Hugging Face Transformers: BERT for classification, NER, sentiment analysis', 'Text embeddings: sentence-transformers for semantic search', 'Fine-tuning BERT on custom classification dataset', 'spaCy for production NLP pipelines', 'LLM APIs for text generation tasks'], project: 'Build a product review sentiment analyzer: fine-tune DistilBERT on Amazon reviews, serve via FastAPI, visualize confidence scores in Streamlit.', milestone: 'Fine-tune and evaluate a transformer model. Understand when LLMs beat classical NLP.' },
  { month: 'Month 8–9', title: 'SQL, Data Engineering & MLOps', topics: ['PostgreSQL advanced: window functions, CTEs, recursive queries, JSONB', 'Writing efficient analytical SQL: BigQuery/Redshift query patterns', 'Apache Airflow: DAGs, operators, XComs, SLAs — data pipeline orchestration', 'MLflow: experiment tracking, model registry, artifacts, tags', 'DVC for data and model versioning', 'GitHub Actions ML pipeline: data pull → train → evaluate → register → deploy', 'FastAPI + Docker: packaging and serving ML models', 'Evidently AI: data drift and model performance monitoring'], project: 'Build an end-to-end ML pipeline with Airflow: daily feature extraction → model retraining → MLflow registry → auto-deploy if accuracy improves → drift monitoring.', milestone: 'A fully automated ML pipeline that retrains, evaluates, and deploys models without manual intervention.' },
  { month: 'Month 10', title: 'Business Communication, Story-Telling & Senior Skills', topics: ['Data storytelling: structuring findings for executive audiences', 'Dashboards with Plotly Dash or Streamlit for non-technical stakeholders', 'Metric selection: choosing the right success metric for a business problem', 'Causal inference basics: difference-in-differences, propensity score matching', 'Recommendation systems: collaborative filtering, content-based, matrix factorization', 'Time series forecasting: ARIMA, Prophet, neural prophet, LightGBM on temporal features', 'Interview preparation: ML design questions, statistics puzzles, case studies', 'Building a data science portfolio: GitHub + blog + Kaggle'], project: 'Capstone: end-to-end data science project for a business problem of your choice — from raw data to executive dashboard to automated retraining pipeline. Document every decision.', milestone: 'Present a complete data science project to a non-technical audience and answer technical follow-up questions confidently.' },
];

const breadcrumbs = [
  { label: 'Home', href: '/' }, { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' }, { label: 'Data Scientist Roadmap 2026', href: '/resources/roadmaps/data-scientist-roadmap-2026' },
];
const RELATED = [
  { title: '100+ Data Scientist Interview Questions', href: '/resources/interview-questions/data-scientist', description: 'Statistics, ML algorithms, SQL, Python, and case study questions.', category: 'Interview Prep', icon: '💬' },
  { title: 'Data Science Projects', href: '/resources/projects/data-science-projects', description: '30+ data science project ideas from EDA to production ML systems.', category: 'Projects', icon: '🛠️' },
  { title: 'AI Engineer Roadmap 2026', href: '/resources/roadmaps/ai-engineer-roadmap-2026', description: 'Extend into LLMs and production AI systems.', category: 'Roadmap', icon: '🤖' },
  { title: 'ML Engineer Roadmap 2026', href: '/resources/roadmaps/ml-engineer-roadmap-2026', description: 'Specialize in MLOps and production ML infrastructure.', category: 'Roadmap', icon: '🧠' },
  { title: 'Python Tutorial', href: '/resources/tutorials/python', description: 'Master Python for data science and ML.', category: 'Tutorial', icon: '📚' },
  { title: 'Python + AI Course', href: '/courses/python-ai-aws-devops-combo', description: 'Structured AI training with Python and cloud deployment.', category: 'Course', icon: '🎓' },
];

export default function DataScientistRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'Data Scientist Roadmap 2026', description: 'Statistics, Python, ML, deep learning, MLOps, and business communication.', url: 'https://arivuon.com/resources/roadmaps/data-scientist-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-pink-600 via-rose-600 to-pink-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">📊</span>
            <div>
              <span className="text-pink-200 text-sm font-semibold uppercase tracking-wider">Data Science Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Data Scientist Roadmap 2026</h1>
            </div>
          </div>
          <p className="text-pink-100 text-lg max-w-2xl mb-6">Statistics → Python → ML → deep learning → MLOps → business storytelling. A 10-month plan to become a production-ready Data Scientist in India.</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 10-Month Plan', '🎯 All Levels', '📊 Kaggle-Ready', '💰 ₹8–35 LPA Roles'].map(tag => (
              <span key={tag} className="bg-pink-500/30 border border-pink-400/40 px-3 py-1.5 rounded-full text-pink-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Does a Data Scientist Do in 2026?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Data Scientists extract actionable insights from data to guide business decisions. In 2026, the role spans exploratory data analysis, statistical inference, predictive modeling, A/B testing, and increasingly — deploying models to production. Companies like Swiggy, Meesho, and Nykaa hire Data Scientists to optimize pricing, predict demand, personalize recommendations, and reduce fraud.</p>
          <p className="text-gray-600 leading-relaxed">The 2026 Data Scientist who can both analyze data rigorously and ship a model to a FastAPI endpoint earns 30–50% more than one who only works in Jupyter notebooks. This roadmap builds both skills.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month Data Science Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-pink-600 to-rose-700 px-6 py-4">
                  <span className="text-pink-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((t, ti) => <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm"><span className="text-pink-500 mt-0.5 flex-shrink-0">✓</span>{t}</li>)}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4"><p className="text-blue-700 font-semibold text-sm mb-1">🛠️ Project</p><p className="text-blue-600 text-sm">{m.project}</p></div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4"><p className="text-amber-700 font-semibold text-sm mb-1">🎯 Milestone</p><p className="text-amber-600 text-sm">{m.milestone}</p></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        <div className="bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Start Your Data Science Journey</h2>
          <p className="text-pink-100 mb-6 max-w-lg mx-auto">Structured Python and AI training with real datasets and Kaggle competition guidance.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/data-science" className="bg-white text-pink-700 font-bold px-6 py-3 rounded-xl hover:bg-pink-50 transition-colors">Enrol in Data Science Course →</Link>
            <Link href="/resources/interview-questions/data-scientist" className="bg-pink-500/30 border border-pink-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-pink-500/50 transition-colors">Data Science Interview Prep</Link>
          </div>
        </div>
        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}