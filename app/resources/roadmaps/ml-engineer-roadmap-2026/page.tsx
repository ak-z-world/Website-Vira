// app/resources/roadmaps/ml-engineer-roadmap-2026/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '../../_components/Breadcrumb';
import FAQAccordion from '../../_components/FAQAccordion';
import RelatedResources from '../../_components/RelatedResources';
import TableOfContents from '../../_components/TableOfContents';
import { faqSchema, articleSchema, breadcrumbSchema } from '../../_lib/schema';

export const metadata: Metadata = {
  title: 'ML Engineer Roadmap 2026 — MLOps, PyTorch, Kubernetes, Feature Stores | Crack Leap Academy',
  description:
    'Complete ML Engineer roadmap 2026: ML fundamentals, PyTorch, feature stores, model serving, MLOps pipelines, Kubernetes-based ML, LLM deployment, and production monitoring. Salary ₹15–60 LPA in India.',
  keywords:
    'ml engineer roadmap 2026, mlops roadmap india, machine learning engineer career path, pytorch mlops kubernetes, feature store mlflow roadmap, llm deployment engineer',
  openGraph: {
    title: 'ML Engineer Roadmap 2026 | Crack Leap Academy',
    url: 'https://arivuon.com/resources/roadmaps/ml-engineer-roadmap-2026',
  },
  alternates: { canonical: 'https://arivuon.com/resources/roadmaps/ml-engineer-roadmap-2026' },
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Roadmaps', href: '/resources/roadmaps' },
  { label: 'ML Engineer Roadmap 2026', href: '/resources/roadmaps/ml-engineer-roadmap-2026' },
];

const TOC_ITEMS = [
  { id: 'what-is', label: 'What Is an ML Engineer?' },
  { id: 'vs-ds', label: 'ML Engineer vs Data Scientist' },
  { id: 'prerequisites', label: 'Prerequisites' },
  { id: 'roadmap', label: 'Month-by-Month Roadmap' },
  { id: 'tools', label: 'Tools & Stack' },
  { id: 'salary', label: 'Salary in India 2026' },
  { id: 'faq', label: 'FAQ' },
];

const MONTHS = [
  {
    month: 'Month 1–2',
    title: 'ML Foundations & Python Engineering',
    topics: [
      'Python engineering: packaging, virtual envs, pyproject.toml, type annotations, dataclasses',
      'NumPy vectorized ops, Pandas at scale, Polars for large datasets',
      'Scikit-learn pipelines: ColumnTransformer, Pipeline, custom transformers',
      'ML fundamentals: bias-variance tradeoff, regularization, overfitting diagnosis',
      'XGBoost, LightGBM, CatBoost: hyperparameter tuning with Optuna',
      'SHAP for model explainability — a must-know for production ML',
      'SQL for ML: window functions, feature engineering queries, CTEs',
      'Git LFS and DVC for versioning large datasets and model artifacts',
    ],
    project: 'Production-grade churn prediction: sklearn Pipeline with custom transformers, Optuna tuning, SHAP explanation dashboard, and reproducible DVC-tracked experiments.',
    milestone: 'Write a reusable sklearn Pipeline that another engineer can extend without touching your code.',
  },
  {
    month: 'Month 3–4',
    title: 'Deep Learning Engineering with PyTorch',
    topics: [
      'PyTorch internals: computational graph, autograd, custom backward passes',
      'Training loops: gradient accumulation, mixed precision (AMP), gradient clipping',
      'PyTorch Lightning: structured training, callbacks, loggers, profiling',
      'Custom datasets and DataLoaders: multi-worker loading, prefetching, memory pinning',
      'Transfer learning and fine-tuning: freezing layers, differential learning rates',
      'Model debugging: activation histograms, gradient flow visualization, loss curve diagnosis',
      'ONNX: exporting PyTorch models for cross-framework serving',
      'TorchScript and torch.compile for optimized production inference',
    ],
    project: 'Train a multi-label image classifier using EfficientNet-B4 with PyTorch Lightning. Export to ONNX, benchmark inference latency vs raw PyTorch, deploy to FastAPI.',
    milestone: 'Train and debug a DL model that converges correctly — identify and fix gradient vanishing/exploding without external help.',
  },
  {
    month: 'Month 5',
    title: 'Feature Engineering & Feature Stores',
    topics: [
      'Feature engineering patterns: lag features, rolling windows, interaction terms, embeddings for categoricals',
      'Feature store concepts: point-in-time correct joins, online vs offline stores, feature freshness',
      'Feast: feature repo setup, entity definitions, feature views, materialization to Redis',
      'Hopsworks (cloud feature store): feature groups, transformation functions',
      'Avoiding data leakage in time-series and production contexts',
      'Feature monitoring: distribution drift detection on feature values',
      'Building a lightweight in-house feature store with PostgreSQL + Redis',
    ],
    project: 'Build a ride-price prediction system with Feast: offline features from PostgreSQL warehouse, online serving via Redis, point-in-time correct training dataset generation, zero leakage.',
    milestone: 'Generate a training dataset with point-in-time correct joins that exactly reproduces production feature values.',
  },
  {
    month: 'Month 6',
    title: 'MLflow, Experiment Tracking & Model Registry',
    topics: [
      'MLflow tracking: experiments, runs, params, metrics, artifacts, tags',
      'MLflow autologging for sklearn, PyTorch, XGBoost',
      'MLflow Model Registry: staging → production promotion workflow, model versioning',
      'Custom MLflow models: pyfunc wrappers for arbitrary inference logic',
      'Comparing experiment runs: parallel coordinates, scatter plots in MLflow UI',
      'Integrating MLflow with DVC for full lineage: data version → model version',
      'Weights & Biases (W&B) as an alternative: sweep for hyperparameter optimization',
      'Model cards: documenting performance across slices, bias evaluation',
    ],
    project: 'MLflow-tracked experiment suite: 20 training runs with different architectures and hyperparameters, automated champion/challenger evaluation, model card generation, and GitHub Actions model registration on metric threshold.',
    milestone: 'Trace any deployed model back to the exact training data version, code commit, and hyperparameters that produced it.',
  },
  {
    month: 'Month 7',
    title: 'Model Serving: FastAPI, Triton & BentoML',
    topics: [
      'FastAPI for model serving: async prediction endpoints, batch prediction, health checks',
      'Model loading strategies: lazy loading, warm-up requests, in-memory caching',
      'NVIDIA Triton Inference Server: model repository, dynamic batching, concurrent model execution',
      'BentoML: service definitions, runners, bentos, adaptive batching',
      'TorchServe for PyTorch model deployment at scale',
      'Request batching: accumulating requests for GPU throughput vs latency tradeoffs',
      'gRPC serving: protobuf schemas for low-latency ML inference',
      'Canary deployments for model updates: traffic splitting, shadow mode testing',
    ],
    project: 'Deploy three models (sklearn, ONNX, PyTorch) behind a single FastAPI gateway with dynamic routing. Implement adaptive batching, add Prometheus metrics for throughput/latency/GPU utilization.',
    milestone: 'Serve ML models with p99 latency under 50ms at 100 req/sec on a single GPU instance.',
  },
  {
    month: 'Month 8',
    title: 'ML Pipelines: Airflow, Kubeflow & Metaflow',
    topics: [
      'Apache Airflow 2: DAGs, TaskFlow API, sensors, XComs, connections, pools, SLA alerts',
      'Airflow best practices: idempotent tasks, catchup, backfill, dynamic DAGs',
      'Kubeflow Pipelines: component definitions, pipeline DAGs, artifact lineage on Kubernetes',
      'Metaflow: steps, flows, S3 artifact store, @step retry, @batch for AWS execution',
      'Orchestrating ML: data ingestion → validation → feature eng → training → evaluation → push',
      'Pipeline testing: unit testing Airflow DAGs, integration testing pipelines with pytest',
      'Triggering pipelines: event-driven (S3 event → SNS → Airflow), scheduled, API-triggered',
    ],
    project: 'Airflow DAG for daily model retraining: S3 data pull → Great Expectations validation → feature engineering → XGBoost training → MLflow logging → challenger evaluation → conditional registry push → Slack alert.',
    milestone: 'A pipeline that trains and deploys a new model version daily with zero manual intervention and full audit trail.',
  },
  {
    month: 'Month 9',
    title: 'Kubernetes for ML & MLOps Infrastructure',
    topics: [
      'Kubernetes ML workloads: GPU node pools, resource limits for CUDA, tolerations and node affinity',
      'KFServing / KServe: InferenceService CRDs, autoscaling to zero, transformer and explainer sidecars',
      'KEDA: event-driven autoscaling for ML inference based on queue depth',
      'Argo Workflows for ML: DAGs on Kubernetes, artifact passing, parallelism',
      'Helm charts for ML services: parameterized deployments for multiple models',
      'Persistent storage for ML: PVCs for model weights, EFS for shared checkpoints',
      'Cost optimization: Spot instances for training, on-demand for inference',
      'Cluster autoscaler + Karpenter for dynamic GPU provisioning',
    ],
    project: 'Deploy full ML stack to EKS: KServe for model inference with autoscaling, Argo Workflows for training pipeline, KEDA scaling on SQS queue depth, Prometheus + Grafana observability dashboard.',
    milestone: 'ML inference scales from 0 to 100 pods in under 3 minutes under load, with full cost attribution per model.',
  },
  {
    month: 'Month 10',
    title: 'Model Monitoring, Drift Detection & LLM Engineering',
    topics: [
      'Data drift detection: KS test, PSI, Jensen-Shannon divergence — Evidently AI reports',
      'Concept drift: monitoring model accuracy in production via shadow predictions + delayed labels',
      'Prediction monitoring: output distribution shifts, confidence calibration checks',
      'Automated retraining triggers: drift threshold → pipeline trigger → champion/challenger eval',
      'LLM deployment: vLLM for high-throughput Llama inference, continuous batching',
      'LLM fine-tuning with LoRA/QLoRA: dataset preparation, PEFT training, model merging',
      'LLM evaluation pipelines: RAGAS, LLM-as-judge, automated benchmark suites',
      'System design: design a real-time fraud detection ML system for 5M transactions/day',
    ],
    project: 'Production monitoring system: Evidently AI drift reports → automated Airflow retraining trigger → MLflow champion/challenger → Slack alerts. Add vLLM-served LLaMA endpoint with RAGAS evaluation suite.',
    milestone: 'Zero-touch ML system that self-retrains when drift is detected and only promotes models that beat the champion on held-out evaluation.',
  },
];

const FAQS = [
  {
    question: 'What is the difference between an ML Engineer and a Data Scientist?',
    answer:
      'An ML Engineer focuses on the engineering systems that take models to production: pipelines, serving infrastructure, monitoring, and reliability. A Data Scientist focuses on statistical analysis, model development, and business insight. ML Engineers need stronger software engineering, DevOps, and distributed systems skills. The highest-paid profiles in 2026 combine both — production-capable ML Engineers with solid statistical foundations.',
  },
  {
    question: 'Do I need a strong ML theory background to be an ML Engineer?',
    answer:
      'You need enough ML theory to debug model failures, interpret evaluation metrics correctly, and identify data leakage. You do not need PhD-level ML research knowledge. Focus on: understanding bias-variance tradeoff, knowing when different algorithms apply, interpreting SHAP values, and diagnosing training instability. Production MLOps skills are weighted more heavily in ML Engineer interviews than theoretical ML depth.',
  },
  {
    question: 'Which is more important — Airflow or Kubeflow for ML pipelines?',
    answer:
      'Both are used in production, and the choice depends on infrastructure. Airflow is more widely adopted across all company sizes, easier to learn, and used for general ETL and ML orchestration. Kubeflow is Kubernetes-native and better for teams running ML workloads on K8s at scale. Learn Airflow first — it is in almost every Indian data engineering and MLOps job description. Add Kubeflow or Argo Workflows for Kubernetes-heavy roles.',
  },
  {
    question: 'What salary can an ML Engineer earn in India in 2026?',
    answer:
      'Entry-level ML Engineer (0–2 years, strong fundamentals): ₹12–20 LPA. Mid-level (2–4 years): ₹20–40 LPA. Senior ML Engineer (5+ years): ₹40–70 LPA. Staff ML Engineer or ML Platform Lead at product companies: ₹60–110 LPA. LLM infrastructure engineers with vLLM, LoRA fine-tuning, and production AI experience command the highest premiums.',
  },
  {
    question: 'Is PyTorch or TensorFlow more important in 2026?',
    answer:
      'PyTorch dominates research and is rapidly taking over production in 2026. The majority of new models are released in PyTorch first. TensorFlow/Keras still has strong enterprise and mobile (TensorFlow Lite) presence. For Indian hiring: PyTorch is the safe primary choice. Knowing ONNX lets you export PyTorch models to any serving runtime. If a specific company uses TensorFlow, add it — the concepts transfer quickly.',
  },
  {
    question: 'What is a feature store and why does it matter for ML engineering?',
    answer:
      'A feature store is a centralized system that computes, stores, and serves ML features consistently between training and production. Without one, training uses batch-computed features from a warehouse while production recomputes them differently, causing training-serving skew — the #1 source of unexplained model degradation in production. Feature stores (Feast, Hopsworks, Tecton) solve this by ensuring the exact same feature logic runs offline and online.',
  },
  {
    question: 'What are the most common ML Engineer interview topics in India?',
    answer:
      'System design for ML (design a recommendation system, fraud detector, search ranking). MLOps pipeline design (training, evaluation, deployment, monitoring). Model serving architecture (latency vs throughput, batching, caching). Python engineering (async, profiling, packaging). SQL for feature engineering. Distributed training concepts. Specific tool questions: MLflow, Airflow, Docker, Kubernetes, Prometheus. Coding: pandas data manipulation, implementing metrics from scratch, debugging a model that isn\'t converging.',
  },
];

const RELATED = [
  {
    title: '100+ ML Engineer Interview Questions',
    href: '/resources/interview-questions/machine-learning-engineer',
    description: 'MLOps, system design, Python, and ML algorithm questions with detailed answers.',
    category: 'Interview Prep',
    icon: '💬',
  },
  {
    title: 'ML & AI Project Ideas',
    href: '/resources/projects/ml-projects',
    description: '30+ ML engineering project ideas from feature stores to production pipelines.',
    category: 'Projects',
    icon: '🛠️',
  },
  {
    title: 'AI Engineer Roadmap 2026',
    href: '/resources/roadmaps/ai-engineer-roadmap-2026',
    description: 'Focus on LLMs, RAG systems, and applied AI engineering.',
    category: 'Roadmap',
    icon: '🤖',
  },
  {
    title: 'Data Scientist Roadmap 2026',
    href: '/resources/roadmaps/data-scientist-roadmap-2026',
    description: 'The analytical counterpart — statistics, EDA, and business storytelling.',
    category: 'Roadmap',
    icon: '📊',
  },
  {
    title: 'AWS DevOps Roadmap 2026',
    href: '/resources/roadmaps/aws-devops-roadmap-2026',
    description: 'Kubernetes, Terraform, and CI/CD skills essential for ML infrastructure.',
    category: 'Roadmap',
    icon: '☁️',
  },
  {
    title: 'Python + AI Combo Course',
    href: '/courses/python-ai-aws-devops-combo',
    description: 'Structured ML engineering training with hands-on pipeline projects.',
    category: 'Course',
    icon: '🎓',
  },
];

export default function MLEngineerRoadmapPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: 'ML Engineer Roadmap 2026', description: 'PyTorch, MLOps, feature stores, model serving, Kubernetes ML, and LLM deployment.', url: 'https://arivuon.com/resources/roadmaps/ml-engineer-roadmap-2026', dateModified: '2025-12-01' })) }} />

      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-800 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={breadcrumbs.slice(0, -1)} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🧠</span>
            <div>
              <span className="text-indigo-200 text-sm font-semibold uppercase tracking-wider">ML Engineer Roadmap</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                ML Engineer Roadmap 2026
              </h1>
            </div>
          </div>
          <p className="text-indigo-100 text-lg max-w-2xl mb-6">
            PyTorch → Feature Stores → MLflow → Model Serving → Kubeflow → Drift Monitoring → LLM Deployment.
            A 10-month plan to become a production ML Engineer in India.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {['⏱ 10-Month Plan', '🎯 Intermediate+', '⚙️ MLOps-First', '💰 ₹15–60 LPA Roles'].map(tag => (
              <span key={tag} className="bg-indigo-500/30 border border-indigo-400/40 px-3 py-1.5 rounded-full text-indigo-100">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <TableOfContents items={TOC_ITEMS} />

        <section id="what-is" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is an ML Engineer?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            An ML Engineer (Machine Learning Engineer) builds the software systems that take machine learning models from
            experimental notebooks to reliable production services. Where a Data Scientist proves a model works on clean
            data in a Jupyter notebook, an ML Engineer makes it work on dirty production data, under load, with 99.9%
            uptime, and automatic retraining when performance degrades.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            In 2026, ML Engineers at Indian product companies own the entire ML lifecycle: feature pipelines,
            training infrastructure, model registries, serving APIs, and monitoring dashboards. Companies like
            Swiggy, Meesho, PhonePe, and Zepto each have dedicated ML Platform teams that this roadmap prepares you for.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
            <p className="font-semibold text-indigo-800 mb-2">🎯 After This Roadmap You Can:</p>
            <ul className="text-indigo-700 text-sm space-y-1.5">
              <li>✅ Build production ML pipelines with Airflow that train, evaluate, and deploy without human intervention</li>
              <li>✅ Serve ML models at low latency using FastAPI, Triton, or BentoML</li>
              <li>✅ Set up feature stores with Feast for training-serving consistency</li>
              <li>✅ Track experiments with MLflow and automate champion/challenger evaluation</li>
              <li>✅ Deploy ML workloads to Kubernetes with KServe and monitor with Evidently AI</li>
              <li>✅ Deploy and serve LLMs with vLLM, apply LoRA fine-tuning, and evaluate with RAGAS</li>
              <li>✅ Pass senior ML Engineer interviews at Indian product companies</li>
            </ul>
          </div>
        </section>

        <section id="vs-ds" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ML Engineer vs Data Scientist</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-3 text-left">Dimension</th>
                  <th className="px-4 py-3 text-left">ML Engineer</th>
                  <th className="px-4 py-3 text-left">Data Scientist</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Primary output', 'Production ML systems', 'Insights + model prototypes'],
                  ['Code quality bar', 'Production-grade, tested, reviewed', 'Exploratory, notebook-based'],
                  ['Key skills', 'Software eng, MLOps, DevOps', 'Statistics, domain knowledge, storytelling'],
                  ['Tools', 'Airflow, MLflow, Docker, K8s, Triton', 'Pandas, sklearn, Jupyter, Tableau'],
                  ['Daily work', 'Pipelines, serving, monitoring', 'EDA, modeling, experiments, reports'],
                  ['Salary premium', '+10–30% over Data Scientist', 'Baseline ML salary'],
                  ['Overlap', 'Must understand ML fundamentals deeply', 'Increasingly expected to deploy'],
                ].map(([dim, ml, ds], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-800 border-b border-gray-100">{dim}</td>
                    <td className="px-4 py-3 text-indigo-700 border-b border-gray-100">{ml}</td>
                    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{ds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="prerequisites" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Prerequisites</h2>
          <div className="space-y-3">
            {[
              { item: 'Python (intermediate–advanced)', required: true, note: 'Comfortable with classes, decorators, async, packaging, and type annotations.' },
              { item: 'ML fundamentals (sklearn level)', required: true, note: 'Understand supervised/unsupervised learning, train/test splits, cross-validation, and evaluation metrics.' },
              { item: 'SQL proficiency', required: true, note: 'JOINs, window functions, aggregations — you will write feature engineering SQL daily.' },
              { item: 'Docker basics', required: true, note: 'Build and run containers. Docker Compose for local development.' },
              { item: 'Linux command line', required: true, note: 'Navigate, script, and administer Linux environments.' },
              { item: 'Deep learning exposure', required: false, note: 'Prior PyTorch/TensorFlow experience accelerates Month 3–4 significantly.' },
              { item: 'Kubernetes basics', required: false, note: 'kubectl and pod concepts helpful for Month 9 but can be learned then.' },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Month-by-Month ML Engineer Roadmap</h2>
          <div className="space-y-6">
            {MONTHS.map((m, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-violet-700 px-6 py-4">
                  <span className="text-indigo-200 text-xs font-bold uppercase tracking-wider">{m.month}</span>
                  <h3 className="text-white font-bold text-xl">{m.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                    {m.topics.map((t, ti) => (
                      <li key={ti} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-indigo-500 mt-0.5 flex-shrink-0">✓</span>{t}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-700 font-semibold text-sm mb-1">🛠️ Project</p>
                      <p className="text-blue-600 text-sm">{m.project}</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="text-amber-700 font-semibold text-sm mb-1">🎯 Milestone</p>
                      <p className="text-amber-600 text-sm">{m.milestone}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ML Engineer Tool Stack 2026</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              { name: 'Python 3.12+', cat: 'Language', icon: '🐍' },
              { name: 'PyTorch 2.x', cat: 'Deep Learning', icon: '🔥' },
              { name: 'scikit-learn', cat: 'Classical ML', icon: '🔬' },
              { name: 'XGBoost / LGBM', cat: 'Boosting', icon: '🌲' },
              { name: 'MLflow', cat: 'Experiment Tracking', icon: '📊' },
              { name: 'DVC', cat: 'Data Versioning', icon: '📦' },
              { name: 'Feast', cat: 'Feature Store', icon: '🍽️' },
              { name: 'Apache Airflow', cat: 'Orchestration', icon: '🌬️' },
              { name: 'FastAPI', cat: 'Model Serving', icon: '⚡' },
              { name: 'NVIDIA Triton', cat: 'Inference Server', icon: '🔱' },
              { name: 'BentoML', cat: 'ML Serving', icon: '🍱' },
              { name: 'KServe', cat: 'K8s Serving', icon: '⚙️' },
              { name: 'Evidently AI', cat: 'Monitoring', icon: '👁️' },
              { name: 'vLLM', cat: 'LLM Serving', icon: '🦙' },
              { name: 'ONNX', cat: 'Model Export', icon: '🔄' },
              { name: 'Prometheus/Grafana', cat: 'Observability', icon: '📈' },
            ].map(tool => (
              <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-3 text-center hover:border-indigo-300 transition-colors">
                <div className="text-2xl mb-1">{tool.icon}</div>
                <div className="text-xs font-bold text-gray-900">{tool.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{tool.cat}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="salary" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ML Engineer Salary in India 2026</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 py-3 text-left">Experience</th>
                  <th className="px-4 py-3 text-left">Startup</th>
                  <th className="px-4 py-3 text-left">Unicorn / Product Co.</th>
                  <th className="px-4 py-3 text-left">AI Lab / MNC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0–2 yr (strong fundamentals)', '₹10–16 LPA', '₹16–25 LPA', '₹25–40 LPA'],
                  ['2–4 yr (mid-level)', '₹16–28 LPA', '₹25–42 LPA', '₹40–65 LPA'],
                  ['5–8 yr (senior)', '₹28–45 LPA', '₹42–70 LPA', '₹65–100 LPA'],
                  ['8+ yr (staff / ML platform lead)', '₹45–70 LPA', '₹65–100 LPA', '₹100–150+ LPA'],
                ].map(([exp, ...vals], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-semibold text-gray-900 border-b border-gray-100">{exp}</td>
                    {vals.map((v, vi) => (
                      <td key={vi} className="px-4 py-3 text-gray-600 border-b border-gray-100">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Source: Glassdoor India, LinkedIn Salary, AmbitionBox — December 2025. LLM infrastructure specialists command top-of-band salaries.</p>
        </section>

        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />
        </section>

        <div className="bg-gradient-to-r from-indigo-600 to-violet-700 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Ship ML Models to Production</h2>
          <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
            Structured ML Engineering training: pipelines, feature stores, model serving, and Kubernetes-based MLOps.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses/python-ai-aws-devops-combo" className="bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors">
              Enrol in ML Engineering Course →
            </Link>
            <Link href="/resources/interview-questions/machine-learning-engineer" className="bg-indigo-500/30 border border-indigo-300/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-500/50 transition-colors">
              ML Engineer Interview Prep
            </Link>
          </div>
        </div>

        <RelatedResources items={RELATED} />
      </article>
    </>
  );
}