import type { Course, CoursePrice } from "./types";

const inr = (amount: number, formatted: string): CoursePrice => ({
  amount,
  currency: "INR",
  formatted,
  emiAvailable: true,
  emiMonths: 6,
  emiAmount: Math.ceil(amount / 6),
  emiFormatted: `₹${Math.ceil(amount / 6).toLocaleString("en-IN")}/mo`,
});

export const courses: Course[] = [
  // ─────────────────────────────────────────────
  // PYTHON PROGRAMMING
  // ─────────────────────────────────────────────
  {
    slug: "python-ai-aws-devops-combo",
    name: "Python + AI + AWS DevOps Engineering",
    shortName: "Python + AI + DevOps",
    category: "AI & Cloud Engineering",
    tags: [
      "python",
      "artificial-intelligence",
      "machine-learning",
      "aws",
      "devops",
      "cloud",
      "django",
      "terraform",
      "jenkins",
      "cicd",
      "backend-development",
    ],
    status: "published",
    offeredAtLocations: true,
    level: "beginner",
    durationWeeks: 12,
    totalHours: 150,
    basePrice: {
      amount: 19999,
      currency: "INR",
      formatted: "₹19,999",
    },
    prerequisites: [
      "Basic computer literacy",
      "No prior programming experience required",
      "Interest in software development and cloud technologies",
    ],
    learningOutcomes: [
      "Write production-ready Python applications",
      "Build backend systems using Django and Django REST Framework",
      "Create secure REST APIs and integrate databases",
      "Understand AI and Machine Learning fundamentals",
      "Deploy applications on AWS cloud infrastructure",
      "Implement CI/CD pipelines using Jenkins and GitHub",
      "Provision cloud infrastructure using Terraform",
      "Monitor and manage cloud applications using AWS CloudWatch",
      "Apply DevOps best practices in real-world projects",
      "Build and deploy AI-powered web applications",
    ],
    toolsUsed: [
      "Python 3.11+",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "AWS EC2",
      "AWS IAM",
      "Git",
      "GitHub",
      "Jenkins",
      "Terraform",
      "CloudWatch",
      "VS Code",
      "Postman",
    ],
    certificationOffered: true,
    certificationName:
      "ArivuOn Python + AI + AWS DevOps Engineering Certificate",
    certificationProvider: "ArivuOn Academy",
    syllabus: [
      {
        order: 1,
        title: "Python Programming Foundations",
        topics: [
          "Python syntax and variables",
          "Data structures and collections",
          "Functions and OOP concepts",
          "Exception handling and file operations",
        ],
        durationHours: 30,
      },
      {
        order: 2,
        title: "Django Backend Development",
        topics: [
          "Django architecture",
          "Models, Views and Templates",
          "Authentication and authorization",
          "Django REST Framework APIs",
        ],
        durationHours: 25,
      },
      {
        order: 3,
        title: "Database and API Engineering",
        topics: [
          "PostgreSQL integration",
          "ORM relationships",
          "API design principles",
          "Performance optimization",
        ],
        durationHours: 20,
      },
      {
        order: 4,
        title: "Artificial Intelligence Fundamentals",
        topics: [
          "Introduction to AI",
          "Machine Learning concepts",
          "Data preprocessing",
          "AI-powered application development",
        ],
        durationHours: 20,
      },
      {
        order: 5,
        title: "AWS Cloud Infrastructure",
        topics: [
          "IAM users, roles and policies",
          "EC2 deployment",
          "Security groups and networking",
          "Cloud deployment strategies",
        ],
        durationHours: 20,
      },
      {
        order: 6,
        title: "Git and CI/CD Automation",
        topics: [
          "Git workflow and branching",
          "GitHub collaboration",
          "Jenkins setup and configuration",
          "CI/CD pipeline implementation",
        ],
        durationHours: 15,
      },
      {
        order: 7,
        title: "Infrastructure as Code & Monitoring",
        topics: [
          "Terraform fundamentals",
          "AWS resource provisioning",
          "CloudWatch monitoring",
          "Production deployment automation",
        ],
        durationHours: 12,
      },
      {
        order: 8,
        title: "Capstone Project",
        topics: [
          "AI-powered Django application",
          "AWS deployment",
          "CI/CD implementation",
          "Production-ready presentation",
        ],
        durationHours: 8,
      },
    ],
    targetAudience:
      "Students, graduates, career changers, aspiring backend developers, cloud engineers, AI enthusiasts, and working professionals looking to transition into AI and DevOps roles.",
    description:
      "ArivuOn's Python + AI + AWS DevOps Engineering program is a comprehensive 12-week career accelerator designed to transform beginners into industry-ready AI and cloud professionals. Students learn Python programming, Django backend development, AI fundamentals, AWS cloud infrastructure, CI/CD automation, and Infrastructure as Code. The curriculum is built around real-world projects that simulate enterprise software development and deployment workflows.",
    shortDescription:
      "Master Python, AI, Django, AWS, CI/CD, and Terraform in one industry-focused career program.",
    careerPaths: [
      "Python Developer",
      "Backend Developer",
      "Django Developer",
      "AI Engineer",
      "Machine Learning Engineer",
      "Cloud Engineer",
      "AWS Engineer",
      "DevOps Engineer",
      "Site Reliability Engineer",
      "Platform Engineer",
    ],
    averageSalaryRange: "₹5 LPA – ₹12 LPA (entry to mid-level, India)",
    thumbnailUrl: "/images/courses/python-ai-aws-devops-combo.jpg",
    iconUrl: "/images/icons/python-ai-devops.svg",
    seo: {
      metaTitle:
        "Python + AI + AWS DevOps Engineering Course — ArivuOn Academy",
      metaDescription:
        "Master Python, Artificial Intelligence, Django, AWS, CI/CD, Jenkins, and Terraform. Build intelligent applications and deploy them to production with industry mentorship.",
      canonicalUrl:
        "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",
      focusKeyword: "Python AI AWS DevOps Course",
      robots: "index, follow",
    },
    schema: {
      schemaType: "Course",
      educationalLevel: "Beginner to Advanced",
      teaches: [
        "Python",
        "Artificial Intelligence",
        "Django",
        "REST APIs",
        "PostgreSQL",
        "AWS",
        "CI/CD",
        "Jenkins",
        "Terraform",
        "DevOps",
      ],
      about: "Python + AI + AWS DevOps Engineering",
    },
    relatedCourseSlugs: [
      "python-course",
      "data-science",
      "machine-learning",
      "aws-devops",
      "full-stack-development",
      "ai-engineering",
    ],
    canonicalCourseUrl:
      "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",
  },
  {
    slug: "python-course",
    name: "Python Programming",
    shortName: "Python",
    category: "Programming",
    tags: ["python", "backend", "automation", "scripting", "beginner-friendly"],
    status: "published",
    offeredAtLocations: true,
    level: "beginner",
    durationWeeks: 10,
    totalHours: 120,
    basePrice: inr(8999, "₹8,999"),
    prerequisites: [
      "Basic computer literacy",
      "No prior programming experience required",
    ],
    learningOutcomes: [
      "Write clean, idiomatic Python code following PEP 8 standards",
      "Build command-line applications and automation scripts",
      "Work with Python data structures, file I/O, and exception handling",
      "Use Python libraries including NumPy, Pandas, and Requests",
      "Build REST APIs using Flask or FastAPI",
      "Write and run unit tests with pytest",
      "Use Git for version control in team environments",
    ],
    toolsUsed: [
      "Python 3.11+",
      "Flask",
      "FastAPI",
      "Pandas",
      "NumPy",
      "pytest",
      "Git",
      "VS Code",
      "Postman",
    ],
    certificationOffered: true,
    certificationName: "ArivuOn Python Developer Certificate",
    certificationProvider: "ArivuOn Academy",
    syllabus: [
      {
        order: 1,
        title: "Python Foundations",
        topics: [
          "Syntax, data types, variables",
          "Control flow: if/else, loops",
          "Functions and scope",
          "Modules and packages",
        ],
        durationHours: 20,
      },
      {
        order: 2,
        title: "Data Structures & OOP",
        topics: [
          "Lists, tuples, dicts, sets",
          "Classes and objects",
          "Inheritance and polymorphism",
          "File I/O and JSON handling",
        ],
        durationHours: 25,
      },
      {
        order: 3,
        title: "Python Libraries",
        topics: [
          "NumPy arrays and operations",
          "Pandas DataFrames",
          "Data cleaning and manipulation",
          "Matplotlib basics",
        ],
        durationHours: 25,
      },
      {
        order: 4,
        title: "Web APIs with Flask/FastAPI",
        topics: [
          "HTTP fundamentals",
          "Building REST endpoints",
          "Request/response handling",
          "Authentication basics",
          "Database integration with SQLite",
        ],
        durationHours: 30,
      },
      {
        order: 5,
        title: "Testing & Version Control",
        topics: [
          "pytest fundamentals",
          "Writing testable code",
          "Git workflow for teams",
          "GitHub and pull requests",
        ],
        durationHours: 12,
      },
      {
        order: 6,
        title: "Capstone Project",
        topics: [
          "Full Python application build",
          "REST API + data processing",
          "Deployment to cloud",
          "Portfolio presentation",
        ],
        durationHours: 8,
      },
    ],
    targetAudience:
      "Engineering graduates, career changers, and working professionals with no prior programming experience who want to become Python developers.",
    description:
      "ArivuOn's Python Programming course is a 10-week, project-first program that takes students from zero programming knowledge to a deployable Python application. The curriculum is built around real-world tasks — data processing, API development, automation — rather than theoretical exercises. Students graduate with three portfolio projects and the Python skills that entry-level developer roles demand.",
    shortDescription:
      "A 10-week beginner-to-developer Python course. Build APIs, automate tasks, and process data with industry-standard libraries.",
    careerPaths: [
      "Python Developer",
      "Backend Developer",
      "Data Engineer",
      "Software Engineer",
      "Automation Engineer",
    ],
    averageSalaryRange: "₹3.5 LPA – ₹6.5 LPA (entry level, India)",
    thumbnailUrl: "/images/courses/python-course.jpg",
    iconUrl: "/images/icons/python.svg",
    seo: {
      metaTitle: "Python Programming Course — ArivuOn Academy",
      metaDescription:
        "Learn Python from scratch in 10 weeks. Build APIs, automate tasks, and process data. Industry-aligned curriculum with placement support.",
      canonicalUrl: "https://academy.arivuon.in/courses/python",
      focusKeyword: "Python programming course",
      robots: "index, follow",
    },
    schema: {
      schemaType: "Course",
      educationalLevel: "Beginner",
      teaches: ["Python", "REST APIs", "Data Processing", "Flask", "Git"],
      about: "Python Programming",
    },
    relatedCourseSlugs: [
      "data-science",
      "machine-learning",
      "full-stack-development",
    ],
    canonicalCourseUrl: "https://academy.arivuon.in/courses/python",
  },

  // ─────────────────────────────────────────────
  // FULL STACK DEVELOPMENT
  // ─────────────────────────────────────────────
  {
    slug: "full-stack-development",
    name: "Full Stack Development",
    shortName: "Full Stack",
    category: "Web Development",
    tags: ["javascript", "react", "node", "full-stack", "web-development"],
    status: "published",
    offeredAtLocations: true,
    level: "beginner",
    durationWeeks: 16,
    totalHours: 200,
    basePrice: inr(14999, "₹14,999"),
    prerequisites: [
      "Basic computer literacy",
      "No prior web development experience required",
    ],
    learningOutcomes: [
      "Build responsive, accessible HTML/CSS layouts",
      "Write modern JavaScript (ES6+) including async/await",
      "Build interactive single-page applications with React",
      "Develop REST APIs with Node.js and Express",
      "Design and query relational databases using PostgreSQL",
      "Deploy full-stack applications to cloud platforms",
      "Work with Git in team environments using feature branches",
    ],
    toolsUsed: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "React 18",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Vercel",
      "Railway",
    ],
    certificationOffered: true,
    certificationName: "ArivuOn Full Stack Developer Certificate",
    certificationProvider: "ArivuOn Academy",
    syllabus: [
      {
        order: 1,
        title: "HTML, CSS & Responsive Design",
        topics: [
          "Semantic HTML5",
          "CSS Flexbox and Grid",
          "Responsive design and media queries",
          "Accessibility basics",
        ],
        durationHours: 30,
      },
      {
        order: 2,
        title: "JavaScript Fundamentals",
        topics: [
          "ES6+ syntax",
          "DOM manipulation",
          "Async JavaScript: callbacks, promises, async/await",
          "Fetch API and REST consumption",
        ],
        durationHours: 40,
      },
      {
        order: 3,
        title: "React",
        topics: [
          "Components and props",
          "State and hooks",
          "React Router",
          "Context API",
          "API integration",
          "React Query",
        ],
        durationHours: 50,
      },
      {
        order: 4,
        title: "Node.js & Express Backend",
        topics: [
          "Node.js runtime",
          "Express REST API",
          "Middleware and routing",
          "Authentication with JWT",
          "File uploads",
        ],
        durationHours: 40,
      },
      {
        order: 5,
        title: "Databases",
        topics: [
          "PostgreSQL design and queries",
          "Prisma ORM",
          "MongoDB basics",
          "Database security",
        ],
        durationHours: 20,
      },
      {
        order: 6,
        title: "Deployment & Capstone",
        topics: [
          "Cloud deployment (Vercel, Railway)",
          "CI/CD basics",
          "Full-stack capstone project",
          "Portfolio review",
        ],
        durationHours: 20,
      },
    ],
    targetAudience:
      "Engineering graduates and working professionals who want to build complete web applications and become employable as full-stack developers.",
    description:
      "ArivuOn's Full Stack Development course is a 16-week program covering the complete web development stack from HTML/CSS through React on the frontend to Node.js, Express, and PostgreSQL on the backend. Students build three progressively complex projects culminating in a full-stack deployed application as their portfolio centrepiece.",
    shortDescription:
      "A 16-week end-to-end web development course. Master React, Node.js, and PostgreSQL to build and deploy real applications.",
    careerPaths: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Software Engineer",
      "Web Developer",
    ],
    averageSalaryRange: "₹4 LPA – ₹8 LPA (entry level, India)",
    thumbnailUrl: "/images/courses/full-stack.jpg",
    iconUrl: "/images/icons/full-stack.svg",
    seo: {
      metaTitle: "Full Stack Development Course — ArivuOn Academy",
      metaDescription:
        "Learn full-stack web development in 16 weeks. React, Node.js, PostgreSQL. Build and deploy real applications with placement support.",
      canonicalUrl: "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",
      focusKeyword: "full stack development course",
      robots: "index, follow",
    },
    schema: {
      schemaType: "Course",
      educationalLevel: "Beginner",
      teaches: [
        "React",
        "Node.js",
        "PostgreSQL",
        "JavaScript",
        "Full Stack Development",
      ],
      about: "Full Stack Web Development",
    },
    relatedCourseSlugs: ["react", "aws-devops", "python-course"],
    canonicalCourseUrl: "https://academy.arivuon.in/courses/python-ai-aws-devops-combo",
  },

  // ─────────────────────────────────────────────
  // DATA SCIENCE
  // ─────────────────────────────────────────────
  {
    slug: "data-science",
    name: "Data Science",
    shortName: "Data Science",
    category: "Data & Analytics",
    tags: [
      "data-science",
      "python",
      "analytics",
      "machine-learning",
      "statistics",
    ],
    status: "published",
    offeredAtLocations: true,
    level: "intermediate",
    durationWeeks: 14,
    totalHours: 160,
    basePrice: inr(12999, "₹12,999"),
    prerequisites: [
      "Basic Python knowledge (or completion of ArivuOn Python course)",
      "Basic mathematics/statistics understanding",
    ],
    learningOutcomes: [
      "Collect, clean, and explore large datasets using Pandas",
      "Apply statistical analysis and hypothesis testing",
      "Build and evaluate supervised machine learning models",
      "Create data visualisations with Matplotlib and Seaborn",
      "Work with SQL databases for data extraction",
      "Build and present data dashboards",
      "Deploy a trained ML model as a web service",
    ],
    toolsUsed: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "SQL",
      "Jupyter Notebook",
      "Streamlit",
      "Power BI",
    ],
    certificationOffered: true,
    certificationName: "ArivuOn Data Science Certificate",
    certificationProvider: "ArivuOn Academy",
    syllabus: [
      {
        order: 1,
        title: "Data Analysis with Python",
        topics: [
          "Pandas for data manipulation",
          "NumPy arrays and operations",
          "Data cleaning and transformation",
          "EDA workflows",
        ],
        durationHours: 30,
      },
      {
        order: 2,
        title: "Statistics for Data Science",
        topics: [
          "Descriptive statistics",
          "Probability distributions",
          "Hypothesis testing",
          "Correlation and regression",
        ],
        durationHours: 25,
      },
      {
        order: 3,
        title: "Machine Learning Fundamentals",
        topics: [
          "Supervised vs unsupervised learning",
          "Linear and logistic regression",
          "Decision trees and random forests",
          "Model evaluation metrics",
        ],
        durationHours: 40,
      },
      {
        order: 4,
        title: "Data Visualisation & Dashboards",
        topics: [
          "Matplotlib and Seaborn",
          "Storytelling with data",
          "Streamlit dashboard building",
          "Power BI basics",
        ],
        durationHours: 25,
      },
      {
        order: 5,
        title: "SQL & Data Engineering Basics",
        topics: [
          "SQL queries and joins",
          "Database design for analytics",
          "Data pipelines introduction",
          "ETL concepts",
        ],
        durationHours: 20,
      },
      {
        order: 6,
        title: "Capstone Project",
        topics: [
          "End-to-end data science project",
          "Model deployment",
          "Portfolio presentation",
          "GitHub documentation",
        ],
        durationHours: 20,
      },
    ],
    targetAudience:
      "Engineers and graduates with basic Python knowledge who want to transition into data analyst or data science roles.",
    description:
      "ArivuOn's Data Science course is a 14-week program covering the complete data science workflow from data collection and cleaning through statistical analysis, machine learning model building, and deployment. Students work with real datasets throughout and graduate with a deployed data project suitable for job applications.",
    shortDescription:
      "A 14-week data science program. Master Pandas, Scikit-learn, and data visualisation. Build and deploy a real ML model.",
    careerPaths: [
      "Data Analyst",
      "Data Scientist",
      "Business Analyst",
      "Machine Learning Engineer",
      "BI Analyst",
    ],
    averageSalaryRange: "₹4.5 LPA – ₹9 LPA (entry level, India)",
    thumbnailUrl: "/images/courses/data-science.jpg",
    iconUrl: "/images/icons/data-science.svg",
    seo: {
      metaTitle: "Data Science Course — ArivuOn Academy",
      metaDescription:
        "Learn data science in 14 weeks. Pandas, Scikit-learn, statistics, ML, and dashboards. Real projects, placement support.",
      canonicalUrl: "https://academy.arivuon.in/courses/data-science",
      focusKeyword: "data science course",
      robots: "index, follow",
    },
    schema: {
      schemaType: "Course",
      educationalLevel: "Intermediate",
      teaches: [
        "Data Science",
        "Machine Learning",
        "Python",
        "Statistics",
        "SQL",
      ],
      about: "Data Science and Machine Learning",
    },
    relatedCourseSlugs: ["machine-learning", "python-course", "ai-engineering"],
    canonicalCourseUrl: "https://academy.arivuon.in/courses/data-science",
  },

  // ─────────────────────────────────────────────
  // MACHINE LEARNING
  // ─────────────────────────────────────────────
  {
    slug: "machine-learning",
    name: "Machine Learning",
    shortName: "Machine Learning",
    category: "AI & ML",
    tags: ["machine-learning", "python", "deep-learning", "tensorflow", "ai"],
    status: "published",
    offeredAtLocations: true,
    level: "intermediate",
    durationWeeks: 16,
    totalHours: 180,
    basePrice: inr(16999, "₹16,999"),
    prerequisites: [
      "Python proficiency",
      "Basic statistics",
      "Familiarity with NumPy and Pandas",
    ],
    learningOutcomes: [
      "Implement and tune classic ML algorithms from scratch and with Scikit-learn",
      "Build deep learning models with TensorFlow and Keras",
      "Apply computer vision techniques using CNNs",
      "Work with NLP pipelines for text classification and generation",
      "Design and run ML experiments with MLflow",
      "Deploy ML models as production APIs",
      "Critically evaluate model performance and address overfitting/underfitting",
    ],
    toolsUsed: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "HuggingFace",
      "MLflow",
      "FastAPI",
      "Docker",
    ],
    certificationOffered: true,
    certificationName: "ArivuOn Machine Learning Engineer Certificate",
    certificationProvider: "ArivuOn Academy",
    syllabus: [
      {
        order: 1,
        title: "ML Foundations & Algorithms",
        topics: [
          "Regression, classification, clustering",
          "Feature engineering and selection",
          "Cross-validation and hyperparameter tuning",
          "Ensemble methods",
        ],
        durationHours: 40,
      },
      {
        order: 2,
        title: "Deep Learning with TensorFlow",
        topics: [
          "Neural network architecture",
          "Backpropagation",
          "CNNs and image classification",
          "Transfer learning",
        ],
        durationHours: 50,
      },
      {
        order: 3,
        title: "NLP Fundamentals",
        topics: [
          "Text preprocessing",
          "TF-IDF and word embeddings",
          "Sequence models (LSTM)",
          "Transformer basics and HuggingFace",
        ],
        durationHours: 30,
      },
      {
        order: 4,
        title: "MLOps & Experiment Tracking",
        topics: [
          "MLflow experiments",
          "Model versioning",
          "Docker containers for ML",
          "REST API deployment",
        ],
        durationHours: 30,
      },
      {
        order: 5,
        title: "Capstone ML Project",
        topics: [
          "Problem definition and dataset curation",
          "End-to-end model pipeline",
          "Model deployment",
          "Portfolio presentation",
        ],
        durationHours: 30,
      },
    ],
    targetAudience:
      "Engineers and data science graduates who want to specialise in machine learning engineering and applied AI.",
    description:
      "ArivuOn's Machine Learning course is a 16-week program that progresses from classical ML algorithms through deep learning, NLP, and production deployment. Students build models on real datasets across computer vision, natural language processing, and tabular data domains, graduating with a portfolio of ML projects and deployment experience.",
    shortDescription:
      "A 16-week ML program. Master Scikit-learn, TensorFlow, NLP, and model deployment. Build real ML projects for your portfolio.",
    careerPaths: [
      "Machine Learning Engineer",
      "Data Scientist",
      "AI Engineer",
      "Computer Vision Engineer",
      "NLP Engineer",
    ],
    averageSalaryRange: "₹6 LPA – ₹14 LPA (India)",
    thumbnailUrl: "/images/courses/data-science.jpg",
    iconUrl: "/images/icons/ml.svg",
    seo: {
      metaTitle: "Machine Learning Course — ArivuOn Academy",
      metaDescription:
        "Learn machine learning end-to-end in 16 weeks. TensorFlow, Scikit-learn, NLP, and ML deployment. Real projects and placement support.",
      canonicalUrl: "https://academy.arivuon.in/courses/data-science",
      focusKeyword: "machine learning course",
      robots: "index, follow",
    },
    schema: {
      schemaType: "Course",
      educationalLevel: "Intermediate",
      teaches: [
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "NLP",
        "MLOps",
      ],
      about: "Machine Learning and Deep Learning",
    },
    relatedCourseSlugs: ["data-science", "ai-engineering", "python-course"],
    canonicalCourseUrl: "https://academy.arivuon.in/courses/data-science",
  },

  // ─────────────────────────────────────────────
  // AWS DEVOPS
  // ─────────────────────────────────────────────
  {
    slug: "aws-devops",
    name: "AWS DevOps",
    shortName: "AWS DevOps",
    category: "Cloud & DevOps",
    tags: ["aws", "devops", "cloud", "ci-cd", "docker", "kubernetes"],
    status: "published",
    offeredAtLocations: true,
    level: "intermediate",
    durationWeeks: 12,
    totalHours: 140,
    basePrice: inr(18999, "₹18,999"),
    prerequisites: [
      "Basic Linux command line",
      "Familiarity with at least one programming language",
      "Basic networking concepts",
    ],
    learningOutcomes: [
      "Provision and manage AWS infrastructure using EC2, S3, RDS, and VPC",
      "Build CI/CD pipelines with GitHub Actions and AWS CodePipeline",
      "Containerise applications with Docker and orchestrate with Kubernetes",
      "Implement infrastructure as code using Terraform",
      "Set up monitoring and alerting with CloudWatch and Grafana",
      "Apply security best practices including IAM and secret management",
      "Prepare for AWS Solutions Architect or AWS DevOps Professional certification",
    ],
    toolsUsed: [
      "AWS (EC2, S3, RDS, ECS, Lambda, CloudWatch, IAM)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "Ansible",
      "Grafana",
      "Prometheus",
    ],
    certificationOffered: true,
    certificationName: "ArivuOn AWS DevOps Certificate",
    certificationProvider: "ArivuOn Academy",
    syllabus: [
      {
        order: 1,
        title: "AWS Fundamentals",
        topics: [
          "AWS global infrastructure",
          "EC2, S3, RDS, IAM",
          "VPC and security groups",
          "AWS CLI and SDKs",
        ],
        durationHours: 30,
      },
      {
        order: 2,
        title: "Docker & Containers",
        topics: [
          "Container architecture",
          "Docker build and run",
          "Docker Compose",
          "Container registries (ECR)",
        ],
        durationHours: 25,
      },
      {
        order: 3,
        title: "Kubernetes",
        topics: [
          "K8s architecture",
          "Pods, services, deployments",
          "Helm charts",
          "EKS on AWS",
        ],
        durationHours: 30,
      },
      {
        order: 4,
        title: "CI/CD Pipelines",
        topics: [
          "GitHub Actions workflows",
          "AWS CodePipeline",
          "Automated testing in CI",
          "Blue-green deployments",
        ],
        durationHours: 25,
      },
      {
        order: 5,
        title: "Infrastructure as Code",
        topics: [
          "Terraform basics",
          "Terraform state and modules",
          "Ansible playbooks",
          "CloudFormation",
        ],
        durationHours: 20,
      },
      {
        order: 6,
        title: "Monitoring & Security",
        topics: [
          "CloudWatch metrics and alarms",
          "Grafana dashboards",
          "IAM best practices",
          "Secrets Manager",
          "Security audit",
        ],
        durationHours: 10,
      },
    ],
    targetAudience:
      "Developers and IT professionals who want to move into cloud engineering and DevOps roles, and engineers preparing for AWS certification.",
    description:
      "ArivuOn's AWS DevOps course is a 12-week hands-on program that covers cloud infrastructure, containerisation, CI/CD pipelines, and infrastructure as code. Students gain practical AWS experience through lab-based learning on real AWS accounts, graduating with the skills required for cloud engineer and DevOps engineer roles.",
    shortDescription:
      "A 12-week AWS and DevOps program. Master Docker, Kubernetes, Terraform, and CI/CD pipelines on real AWS infrastructure.",
    careerPaths: [
      "DevOps Engineer",
      "Cloud Engineer",
      "Site Reliability Engineer",
      "Platform Engineer",
      "AWS Solutions Architect",
    ],
    averageSalaryRange: "₹6 LPA – ₹15 LPA (India)",
    thumbnailUrl: "/images/courses/devops.jpg",
    iconUrl: "/images/icons/aws.svg",
    seo: {
      metaTitle: "AWS DevOps Course — ArivuOn Academy",
      metaDescription:
        "Learn AWS, Docker, Kubernetes, and CI/CD in 12 weeks. Hands-on labs on real AWS. Placement support for DevOps and Cloud Engineer roles.",
      canonicalUrl: "https://academy.arivuon.in/courses/devops",
      focusKeyword: "AWS DevOps course",
      robots: "index, follow",
    },
    schema: {
      schemaType: "Course",
      educationalLevel: "Intermediate",
      teaches: ["AWS", "DevOps", "Docker", "Kubernetes", "Terraform", "CI/CD"],
      about: "Cloud Computing and DevOps",
    },
    relatedCourseSlugs: ["full-stack-development", "machine-learning"],
    canonicalCourseUrl: "https://academy.arivuon.in/courses/devops",
  },

  // ─────────────────────────────────────────────
  // REACT
  // ─────────────────────────────────────────────
  {
    slug: "react",
    name: "React Development",
    shortName: "React",
    category: "Web Development",
    tags: ["react", "javascript", "frontend", "typescript", "spa"],
    status: "published",
    offeredAtLocations: true,
    level: "intermediate",
    durationWeeks: 10,
    totalHours: 120,
    basePrice: inr(11999, "₹11,999"),
    prerequisites: [
      "JavaScript fundamentals (ES6+)",
      "Basic HTML and CSS",
      "Understanding of HTTP and APIs",
    ],
    learningOutcomes: [
      "Build production-ready React applications with functional components and hooks",
      "Manage complex application state with React Query and Zustand",
      "Write type-safe React code with TypeScript",
      "Implement routing with React Router v6",
      "Test React components with React Testing Library and Vitest",
      "Build and consume REST APIs and GraphQL endpoints from React",
      "Deploy React applications to Vercel or Netlify with CI/CD",
    ],
    toolsUsed: [
      "React 18",
      "TypeScript",
      "Vite",
      "React Router v6",
      "React Query",
      "Zustand",
      "Tailwind CSS",
      "React Testing Library",
      "Vitest",
      "Vercel",
    ],
    certificationOffered: true,
    certificationName: "ArivuOn React Developer Certificate",
    certificationProvider: "ArivuOn Academy",
    syllabus: [
      {
        order: 1,
        title: "React Fundamentals",
        topics: [
          "JSX and component model",
          "Props and state",
          "useState, useEffect, useRef",
          "Component lifecycle",
        ],
        durationHours: 25,
      },
      {
        order: 2,
        title: "Advanced Hooks & State",
        topics: [
          "useContext, useReducer, useMemo",
          "Custom hooks",
          "React Query for data fetching",
          "Zustand global state",
        ],
        durationHours: 25,
      },
      {
        order: 3,
        title: "TypeScript with React",
        topics: [
          "TypeScript fundamentals",
          "Typing components and hooks",
          "Generic types",
          "Type-safe API calls",
        ],
        durationHours: 20,
      },
      {
        order: 4,
        title: "Routing & Performance",
        topics: [
          "React Router v6",
          "Nested and dynamic routes",
          "Code splitting and lazy loading",
          "Performance optimisation",
        ],
        durationHours: 20,
      },
      {
        order: 5,
        title: "Testing & Deployment",
        topics: [
          "React Testing Library",
          "Vitest setup",
          "Component and integration tests",
          "Vercel deployment",
          "CI with GitHub Actions",
        ],
        durationHours: 18,
      },
      {
        order: 6,
        title: "Capstone Project",
        topics: [
          "Full React application with TypeScript",
          "API integration",
          "Testing suite",
          "Deployed portfolio project",
        ],
        durationHours: 12,
      },
    ],
    targetAudience:
      "JavaScript developers and engineers who want to specialise in React and become frontend or full-stack developers at product companies.",
    description:
      "ArivuOn's React Development course is a 10-week program for developers with JavaScript fundamentals who want to build production-grade React applications. The course covers React 18, TypeScript, modern state management, testing, and deployment — the exact skill set product companies and startups hire for.",
    shortDescription:
      "A 10-week React specialisation. React 18, TypeScript, React Query, and testing. Build and deploy production-grade SPAs.",
    careerPaths: [
      "Frontend Developer",
      "React Developer",
      "Full Stack Developer",
      "UI Engineer",
    ],
    averageSalaryRange: "₹5 LPA – ₹12 LPA (India)",
    thumbnailUrl: "/images/courses/react.jpg",
    iconUrl: "/images/icons/react.svg",
    seo: {
      metaTitle: "React Development Course — ArivuOn Academy",
      metaDescription:
        "Learn React 18, TypeScript, and modern state management in 10 weeks. Build production-grade SPAs. Placement support for frontend roles.",
      canonicalUrl: "https://academy.arivuon.in/courses/react",
      focusKeyword: "React development course",
      robots: "index, follow",
    },
    schema: {
      schemaType: "Course",
      educationalLevel: "Intermediate",
      teaches: [
        "React",
        "TypeScript",
        "Frontend Development",
        "React Query",
        "Testing",
      ],
      about: "React Frontend Development",
    },
    relatedCourseSlugs: ["full-stack-development", "javascript", "aws-devops"],
    canonicalCourseUrl: "https://academy.arivuon.in/courses/react",
  },

  // ─────────────────────────────────────────────
  // AI ENGINEERING
  // ─────────────────────────────────────────────
  {
    slug: "ai-engineering",
    name: "AI Engineering",
    shortName: "AI Engineering",
    category: "AI & ML",
    tags: ["ai", "llm", "langchain", "openai", "generative-ai", "rag"],
    status: "published",
    offeredAtLocations: true,
    level: "advanced",
    durationWeeks: 16,
    totalHours: 200,
    basePrice: inr(24999, "₹24,999"),
    prerequisites: [
      "Python proficiency",
      "Basic ML concepts",
      "REST API development experience",
    ],
    learningOutcomes: [
      "Build production LLM-powered applications using OpenAI, Anthropic, and open-source models",
      "Design and implement Retrieval Augmented Generation (RAG) pipelines",
      "Use LangChain and LlamaIndex to build AI agent workflows",
      "Fine-tune language models on domain-specific datasets",
      "Build and deploy AI APIs with FastAPI and Docker",
      "Evaluate LLM outputs using industry-standard evaluation frameworks",
      "Apply responsible AI practices including bias detection and output monitoring",
    ],
    toolsUsed: [
      "Python",
      "OpenAI API",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "ChromaDB",
      "HuggingFace",
      "FastAPI",
      "Docker",
      "AWS Bedrock",
      "Anthropic Claude API",
    ],
    certificationOffered: true,
    certificationName: "ArivuOn AI Engineer Certificate",
    certificationProvider: "ArivuOn Academy",
    syllabus: [
      {
        order: 1,
        title: "LLM Fundamentals",
        topics: [
          "Transformer architecture and attention",
          "Prompt engineering techniques",
          "OpenAI and Anthropic APIs",
          "Token economics and context windows",
        ],
        durationHours: 35,
      },
      {
        order: 2,
        title: "RAG Systems",
        topics: [
          "Vector databases (Pinecone, ChromaDB)",
          "Document chunking strategies",
          "Embedding models",
          "End-to-end RAG pipeline",
          "Retrieval evaluation",
        ],
        durationHours: 40,
      },
      {
        order: 3,
        title: "AI Agents & Orchestration",
        topics: [
          "LangChain agents and tools",
          "LlamaIndex workflows",
          "ReAct patterns",
          "Multi-agent architectures",
          "Tool use and function calling",
        ],
        durationHours: 40,
      },
      {
        order: 4,
        title: "Fine-tuning & Model Customisation",
        topics: [
          "Dataset preparation for fine-tuning",
          "LoRA and QLoRA techniques",
          "HuggingFace Trainer",
          "RLHF basics",
          "Model evaluation",
        ],
        durationHours: 35,
      },
      {
        order: 5,
        title: "Production AI Systems",
        topics: [
          "AI API design with FastAPI",
          "Containerised AI deployment",
          "LLM monitoring and observability",
          "Cost optimisation",
          "Responsible AI",
        ],
        durationHours: 30,
      },
      {
        order: 6,
        title: "AI Engineering Capstone",
        topics: [
          "Build a production AI application",
          "RAG or agent-based system",
          "Evaluation and deployment",
          "Portfolio presentation",
        ],
        durationHours: 20,
      },
    ],
    targetAudience:
      "Python developers and ML engineers who want to specialise in building production AI applications powered by large language models.",
    description:
      "ArivuOn's AI Engineering course is a 16-week advanced program for developers who want to build production AI applications. Covering LLM APIs, RAG systems, AI agents, fine-tuning, and production deployment, this course positions graduates for the fastest-growing job category in India's technology sector — AI/ML engineering with a focus on generative AI and LLM application development.",
    shortDescription:
      "A 16-week generative AI program. Build RAG systems, AI agents, and production LLM apps with OpenAI, LangChain, and more.",
    careerPaths: [
      "AI Engineer",
      "LLM Engineer",
      "Generative AI Developer",
      "AI Solutions Architect",
      "Machine Learning Engineer",
    ],
    averageSalaryRange: "₹9 LPA – ₹25 LPA (India)",
    thumbnailUrl: "/images/courses/ai-engineering.jpg",
    iconUrl: "/images/icons/ai.svg",
    seo: {
      metaTitle: "AI Engineering Course — ArivuOn Academy",
      metaDescription:
        "Learn to build production AI applications in 16 weeks. LLMs, RAG, AI agents, LangChain, fine-tuning. India's most advanced AI Engineering program.",
      canonicalUrl: "https://academy.arivuon.in/courses/ai-engineering",
      focusKeyword: "AI Engineering course India",
      robots: "index, follow",
    },
    schema: {
      schemaType: "Course",
      educationalLevel: "Advanced",
      teaches: [
        "AI Engineering",
        "LLMs",
        "RAG",
        "LangChain",
        "Generative AI",
        "Fine-tuning",
      ],
      about: "AI Engineering and Large Language Models",
    },
    relatedCourseSlugs: ["machine-learning", "data-science", "python-course"],
    canonicalCourseUrl: "https://academy.arivuon.in/courses/ai-engineering",
  },
];

// ─────────────────────────────────────────────
// QUERY HELPERS
// ─────────────────────────────────────────────

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(
    (c) => c.slug === slug && c.status === "published" && c.offeredAtLocations,
  );
}

export function getAllLocationCourses(): Course[] {
  return courses.filter(
    (c) => c.status === "published" && c.offeredAtLocations,
  );
}

export function getAllCourseSlugs(): { "course-slug": string }[] {
  return getAllLocationCourses().map((c) => ({ "course-slug": c.slug }));
}

export function getCoursesByCategory(category: string): Course[] {
  return courses.filter(
    (c) =>
      c.category === category &&
      c.status === "published" &&
      c.offeredAtLocations,
  );
}
