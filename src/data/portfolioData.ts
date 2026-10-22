export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  githubLabel?: string;
  liveDemoUrl?: string;
  apiDocsUrl?: string;
  category: string;
  disclaimer?: string;
  highlightKey: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  description: string;
}

export interface InternshipSubProject {
  year: string;
  title: string;
  period: string;
  bullets: string[];
  technologies?: string[];
}

export interface InternshipExperience {
  id: string;
  company: string;
  yearRange: string;
  role: string;
  period?: string;
  location?: string;
  bullets?: string[];
  projects?: InternshipSubProject[];
  note?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeTag?: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface SocialLink {
  name: string;
  url: string;
  username: string;
  type: 'github' | 'linkedin' | 'instagram' | 'leetcode';
}

export const PERSONAL_INFO = {
  name: "Athira Arun",
  initials: "AA",
  roleEyebrow: "AI & MACHINE LEARNING · GENERATIVE AI · SOFTWARE ENGINEERING",
  headlinePrefix: "I build ",
  headlineHighlight: "intelligent systems",
  headlineSuffix: " that solve real problems.",
  introduction:
    "I'm Athira Arun, a computer science undergraduate passionate about Artificial Intelligence, Machine Learning, Natural Language Processing, and Generative AI. I enjoy transforming technical ideas into practical applications, from intelligent educational tools to computer vision and full-stack AI systems.",
  status: "Open to internships and collaborations",
  email: "athiraarun@karunya.edu.in",
  location: "Coimbatore, Tamil Nadu / Bangalore, India",
  college: "Karunya Institute of Technology and Sciences",
  degree: "B.Tech in Computer Science and Engineering (AI & ML)",
  graduationYear: "2024–2028",
  resumePath: "/assets/aistudio/ATHIRA_ARUN_Resume_updated3_92197ff1.pdf",
  hasResumePdf: true,
};

export const ABOUT_DATA = {
  heading: "Curious by nature. Building with purpose.",
  narrative: [
    "I am an undergraduate engineer specializing in Artificial Intelligence and Machine Learning at Karunya Institute of Technology and Sciences. My work centers on the intersection of deep learning, natural language processing, and pragmatic software engineering.",
    "Rather than treating machine learning as an isolated exercise in model training, I focus on the entire lifecycle: structuring problem definitions, experimenting with deep neural architectures, engineering reliable backend APIs, and crafting intuitive interfaces that make complex AI accessible to users.",
    "Whether exploring convolutional neural networks for medical imaging, fine-tuning large language models for domain-specific workflows, or designing real-time risk evaluation pipelines, I prioritize analytical clarity, clean architecture, and continuous learning."
  ],
  focusAreas: [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Designing, training, and evaluating classical and modern ML architectures for tabular, text, and multimodal problems."
    },
    {
      title: "NLP & Large Language Models",
      description: "Leveraging state-of-the-art transformer architectures, prompt engineering, embeddings, and semantic search pipelines."
    },
    {
      title: "Generative AI Applications",
      description: "Building production-minded conversational agents, contextual reasoning engines, and assistive productivity tools."
    },
    {
      title: "Computer Vision & Deep Learning",
      description: "Developing CNN-based image classification and feature extraction pipelines with a focus on medical and visual analysis."
    },
    {
      title: "Full-Stack & Backend Development",
      description: "Developing modular APIs with FastAPI and Flask, architecting relational data schemas, and deploying responsive React frontends."
    }
  ]
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "brain-tumor-ai",
    title: "BrainTumorAI — Brain Tumor Classification",
    subtitle: "Medical Imaging & Deep Learning",
    description:
      "An experimental deep-learning project that classifies brain MRI images into glioma, meningioma, pituitary tumor, and no-tumor categories.",
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Medical Image Classification"],
    githubUrl: "https://github.com/athiraarun06",
    githubLabel: "Explore on GitHub",
    category: "Computer Vision & Deep Learning",
    disclaimer: "Educational AI project strictly for exploratory and academic study. Not evaluated or certified for clinical diagnosis.",
    highlightKey: "4 MRI Classes"
  },
  {
    id: "ats-enhancement-frappe",
    title: "ATS Enhancement — Frappe HRMS",
    subtitle: "Enterprise Workflow & HR Automation",
    description:
      "A recruitment workflow enhancement built around Frappe HRMS and ERPNext, focusing on candidate management, resume handling, interview workflows, and recruitment automation.",
    technologies: ["Python", "Frappe Framework", "ERPNext HRMS", "MariaDB", "Redis", "JavaScript"],
    githubUrl: "https://github.com/athiraarun06/ATS-FrappeHR",
    githubLabel: "View Repository",
    category: "Enterprise Software Engineering",
    highlightKey: "Frappe + ERPNext"
  },
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection AI",
    subtitle: "Real-time Risk Scoring & Explainable AI",
    description:
      "A full-stack fraud detection platform combining machine learning risk scoring and business rules to analyze potentially suspicious transactions. The project explores transaction monitoring, risk explanations, alerts, analytics, and an interactive fraud operations dashboard.",
    technologies: ["Python", "FastAPI", "React", "scikit-learn", "XGBoost", "SHAP", "SQL"],
    githubUrl: "https://github.com/athiraarun06/CreditCardFraudDetectionAI",
    githubLabel: "View Repository",
    liveDemoUrl: "https://credit-card-fraud-detection-ai-athira-arun.vercel.app/",
    apiDocsUrl: "https://creditcard-fraud-backend.onrender.com/docs",
    category: "Full-Stack AI & Analytics",
    highlightKey: "FastAPI + ML + SHAP"
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for algorithms, machine learning pipelines, and application engineering.",
    skills: ["Python", "Java", "C", "SQL", "JavaScript"]
  },
  {
    title: "AI and Machine Learning",
    description: "Theoretical foundations and applied frameworks for intelligent systems and data modeling.",
    skills: [
      "Natural Language Processing (NLP)",
      "Large Language Models (LLMs)",
      "Generative AI Systems",
      "Deep Learning",
      "Emotion Detection",
      "Recommendation and Matching Systems",
      "Explainable AI (XAI)"
    ]
  },
  {
    title: "Web and Backend Development",
    description: "Server architecture, API design, database schemas, and interface engineering.",
    skills: [
      "Flask",
      "FastAPI",
      "API Development",
      "AI Model Integration",
      "Database Integration",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "Tools and Technologies",
    description: "Version control, deep learning libraries, computer vision tools, and hardware prototyping.",
    skills: [
      "Git",
      "GitHub",
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "Arduino",
      "IoT Sensors"
    ]
  },
  {
    title: "Professional Skills",
    description: "Engineering habits that drive collaborative, high-impact technical outcomes.",
    skills: [
      "Problem Solving",
      "Analytical Thinking",
      "Project Documentation",
      "Communication",
      "Collaboration"
    ]
  }
];

export const INTERNSHIP_EXPERIENCE: InternshipExperience[] = [
  {
    id: "cynaris-solutions",
    company: "Cynaris Solutions",
    yearRange: "2025–2026",
    role: "AI Intern | ERP Development Intern",
    location: "Bangalore, India",
    projects: [
      {
        year: "2025",
        title: "Career Guidance Chatbot",
        period: "June–July 2025",
        bullets: [
          "Developed an AI-powered career guidance chatbot using Python, NLP, Streamlit, and Generative AI.",
          "Integrated a language model API and structured prompts to produce personalized career recommendations.",
          "Implemented session history and structured career summaries with curated learning resources."
        ],
        technologies: ["Python", "NLP", "Streamlit", "Generative AI", "LLM APIs"]
      },
      {
        year: "2026",
        title: "ATS Enhancement using Frappe HRMS",
        period: "June–August 2026",
        bullets: [
          "Customized recruitment workflows, candidate management, resume handling, and interview processes.",
          "Worked with Python, Frappe Framework, ERPNext HRMS, MariaDB, Redis, and JavaScript.",
          "Troubleshot file storage, database connectivity, and server configuration."
        ],
        technologies: ["Python", "Frappe Framework", "ERPNext HRMS", "MariaDB", "Redis", "JavaScript"]
      }
    ]
  },
  {
    id: "mindenious-edutech",
    company: "Mindenious Edutech",
    yearRange: "2026",
    role: "Machine Learning Intern",
    period: "June–August 2026",
    bullets: [
      "Worked on a credit card fraud detection system combining machine learning and business rules.",
      "Developed functionality involving transaction risk scoring, fraud monitoring, alerts, analytics, and explainable AI.",
      "Worked with React, FastAPI, scikit-learn, database technologies, and authentication."
    ]
  },
  {
    id: "unified-mentor",
    company: "Unified Mentor",
    yearRange: "2025",
    role: "Full-Stack Web Development Intern",
    period: "June–July 2025",
    bullets: [
      "Worked with frontend and backend development concepts.",
      "Built web application components using HTML, CSS, and JavaScript.",
      "Learned REST API integration, database connectivity, and deployment workflows."
    ]
  },
  {
    id: "codtech-it-solutions",
    company: "CodTech IT Solutions",
    yearRange: "2025",
    role: "Java Programming Intern",
    period: "June 2025",
    bullets: [
      "Practiced object-oriented programming, modular Java applications, debugging, and problem-solving.",
      "Developed a foundation in clean code and software development workflows."
    ]
  },
  {
    id: "proglint",
    company: "Proglint",
    yearRange: "Engagement Programme",
    role: "Internship cum Employment Engagement Programme",
    note: "Shortlisted for the next stage following an R&D workshop and hackathon."
  }
];

export const EDUCATION_DATA: EducationEntry[] = [
  {
    institution: "Karunya Institute of Technology and Sciences",
    degree: "B.Tech, Computer Science and Engineering — Artificial Intelligence & Machine Learning",
    period: "2024–2028",
    location: "Coimbatore, Tamil Nadu, India",
    details: "Rigorous curriculum focused on Machine Learning, Deep Neural Networks, Natural Language Processing, Data Structures & Algorithms, and Computer Vision."
  },
  {
    institution: "Silicon City Academy of Secondary Education",
    degree: "Schooling",
    period: "2012–2024",
    location: "Bangalore, Karnataka, India",
    details: "Comprehensive academic foundation emphasizing mathematics, computer science fundamentals, science, and analytical problem-solving."
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "oracle-ai",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    badgeTag: "AI & Cloud"
  },
  {
    id: "ibm-ai",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    badgeTag: "AI Fundamentals"
  },
  {
    id: "infosys-ds",
    title: "Data Science",
    issuer: "Infosys Springboard",
    badgeTag: "Data Science"
  },
  {
    id: "infosys-python",
    title: "Programming Fundamentals using Python",
    issuer: "Infosys Springboard",
    badgeTag: "Python"
  },
  {
    id: "infosys-java",
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    badgeTag: "Java"
  },
  {
    id: "nptel-llm",
    title: "Introduction to Large Language Models (LLMs)",
    issuer: "NPTEL, IIT Madras, Elite",
    badgeTag: "Elite / IIT Madras"
  },
  {
    id: "nptel-cloud",
    title: "Google Cloud Computing",
    issuer: "NPTEL, Elite",
    badgeTag: "Elite / Cloud"
  },
  {
    id: "nptel-design",
    title: "Software Conceptual Design",
    issuer: "NPTEL, Elite",
    badgeTag: "Elite / Architecture"
  },
  {
    id: "redhat-sysadmin",
    title: "Red Hat System Administration I (RH124 – RHA)",
    issuer: "Red Hat",
    badgeTag: "Linux / Systems"
  },
  {
    id: "cisco-ccna",
    title: "Cisco Networking Academy CCNA Program: Introduction to Networks, Switching, Routing & Wireless Essentials, and Enterprise Networking, Security & Automation",
    issuer: "Cisco Networking Academy",
    badgeTag: "Networking & Security"
  }
];

export const LANGUAGES_DATA: Language[] = [
  { name: "English", proficiency: "Fluent" },
  { name: "Kannada", proficiency: "Fluent" },
  { name: "Malayalam", proficiency: "Native/Fluent" },
  { name: "Tamil", proficiency: "Fluent" },
  { name: "Hindi", proficiency: "Basic" },
  { name: "Telugu", proficiency: "Basic" }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/athiraarun06",
    username: "athiraarun06",
    type: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/athira-arun-168a96332/",
    username: "athira-arun",
    type: "linkedin"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/athiraarun._/?igsh=MWQzMGcxZmpiNXE4OA==",
    username: "@athiraarun._",
    type: "instagram"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/athiraarun/",
    username: "athiraarun",
    type: "leetcode"
  }
];
