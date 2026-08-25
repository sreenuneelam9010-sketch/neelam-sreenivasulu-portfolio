import { Project, SkillCategory, Experience, Education, Certification, GitHubRepo, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "NEELAM SREENIVASULU",
  shortName: "Neelam",
  monogram: "NS.",
  title: "Software Developer",
  roleSubtitles: [
    "Full Stack Development",
    "Machine Learning",
    "Backend & Databases",
    "AI Systems & Problem Solving"
  ],
  tagline: "Software Developer | Full Stack Developer | AI/ML Enthusiast",
  bioHeadline: "Turning ideas into practical software solutions.",
  bioIntro: "I am a Software Developer with strong foundations in Full Stack Development, Machine Learning, Backend Engineering, and Database Architecture. Graduating with a B.Tech in Computer Science and Engineering specializing in AI & Machine Learning from Kalasalingam Academy of Research and Education, I combine rigorous algorithmic understanding with practical web and software development skills.",
  bioPhilosophy: "My engineering approach is centered on writing clean, modular code, enforcing robust data security, and applying machine learning pipelines where they deliver tangible value. From building real-world farm management systems and encrypted healthcare platforms to implementing predictive models and high-throughput reservation engines, I thrive on turning complex requirements into responsive, production-ready software.",
  email: "sreenuneelam9010@gmail.com",
  phone: "+91-9392589010",
  location: "India",
  github: "https://github.com/sreenuneelam9010-sketch",
  linkedin: "https://www.linkedin.com/in/neelam-sreenivasulu-60445a2b4",
  stats: [
    { label: "CGPA", value: "8.38", helper: "B.Tech CSE-AIML", icon: "GraduationCap" },
    { label: "Major Projects", value: "4", helper: "Real-World & ML Systems", icon: "FolderCode" },
    { label: "Internship", value: "3 Months", helper: "Java Full Stack Developer", icon: "Briefcase" },
    { label: "B.Tech CSE-AIML", value: "2021–2025", helper: "Kalasalingam Academy", icon: "Calendar" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    description: "Core algorithmic languages for system development and scripting",
    iconName: "Code2",
    skills: [
      { name: "Java", description: "Object-oriented design, collections, multi-threading, backend logic" },
      { name: "Python", description: "Scripting, ML pipelines, Flask backends, data manipulation" },
      { name: "C", description: "Memory management, pointers, foundational system programming" },
      { name: "C++", description: "Object-oriented programming, data structures, algorithm design" }
    ]
  },
  {
    id: "web-dev",
    name: "Web Development",
    description: "Modern frontend technologies for crafting responsive user interfaces",
    iconName: "Layout",
    skills: [
      { name: "HTML", description: "Semantic markup, accessibility, modern HTML5 APIs" },
      { name: "CSS", description: "Responsive layouts, Flexbox, CSS Grid, custom UI styling" },
      { name: "JavaScript", description: "ES6+, DOM manipulation, asynchronous programming, event handling" }
    ]
  },
  {
    id: "backend-db",
    name: "Backend & Database",
    description: "Server architectures, RESTful APIs, and relational data stores",
    iconName: "Database",
    skills: [
      { name: "Java", description: "Backend application development, servlet architectures, services" },
      { name: "Flask", description: "Lightweight Python microframework for REST APIs & web apps" },
      { name: "MySQL", description: "Relational database modeling, schema design, ACID transactions" },
      { name: "SQL", description: "Complex queries, joins, indexing, data integrity constraints" }
    ]
  },
  {
    id: "data-ml",
    name: "Data Science & Machine Learning",
    description: "End-to-end ML workflows from data exploration to predictive models",
    iconName: "Cpu",
    skills: [
      { name: "Python", description: "Core data science workflows and package ecosystem" },
      { name: "Pandas", description: "Dataframe manipulation, data cleaning, aggregation, time-series" },
      { name: "NumPy", description: "Vectorized numerical computations and multi-dimensional matrices" },
      { name: "Scikit-Learn", description: "Model training, cross-validation, hyperparameter tuning" },
      { name: "Random Forest", description: "Ensemble decision trees for robust classification & regression" },
      { name: "SVC (Support Vector Classifier)", description: "Kernel-based classification for high-dimensional feature spaces" },
      { name: "Data Preprocessing", description: "Missing value imputation, categorical encoding, feature scaling" },
      { name: "Feature Engineering", description: "Feature selection, correlation analysis, dimensional transformation" },
      { name: "Model Evaluation", description: "Accuracy, Precision, Recall, F1-Score, ROC-AUC, Confusion Matrix" }
    ]
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Development environments, version control, and UI utilities",
    iconName: "Wrench",
    skills: [
      { name: "Git", description: "Version control, branch management, merge conflict resolution" },
      { name: "GitHub", description: "Remote repository collaboration, code review, issue tracking" },
      { name: "Linux", description: "CLI operations, shell scripting, environment configuration" },
      { name: "Bootstrap", description: "Responsive grid systems and utility-first UI components" }
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "project-01",
    number: "01",
    title: "Sri Venkateswara Lakshmi Venkateswara Farm Management System",
    subtitle: "Real-Time Farm Management & Livestock Management Application",
    category: "Real-World Full Stack",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Git", "GitHub"],
    description: "A real-world full-stack application designed to simplify and manage day-to-day farm operations through a centralized digital platform. I developed approximately 90% of the application and worked extensively on its core functionality, user workflows, backend logic, database integration, and management features.",
    keyHighlights: [
      "Centralized livestock management tracking health, category distributions, and inventory records",
      "Digital farm inventory management monitoring feeds, supplies, and automated reorder alerts",
      "Customer & order management pipelines coordinating client requests, transactions, and status tracking",
      "Role-Based Access Control (RBAC) supporting Owner, Worker, and Customer operational tiers",
      "Relational database integration ensuring transactional data integrity across all farm activities",
      "Designed for practical operational workflows rather than a simple demonstration project"
    ],
    githubUrl: "https://github.com/sreenuneelam9010-sketch/Farm-management-system",
    visualType: "farm-management",
    isFlagship: true,
    myContribution: "~90% Developed by Me",
    badges: [
      "Real-World Application",
      "Full Stack Development",
      "Farm Management",
      "Role-Based Access",
      "Database Management",
      "My Contribution: ~90%"
    ],
    stats: [
      { label: "My Contribution", value: "~90% Developed" },
      { label: "Access Model", value: "RBAC (Owner / Worker / Customer)" },
      { label: "Database", value: "MySQL Relational" }
    ]
  },
  {
    id: "project-02",
    number: "02",
    title: "Hospital Management System for Secure Healthcare",
    subtitle: "End-to-End Encrypted Healthcare Information System",
    category: "Full Stack & Security",
    technologies: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    description: "A secure healthcare management application focused on protecting sensitive patient information and improving medical record management with cryptographic safeguards.",
    keyHighlights: [
      "AES (Advanced Encryption Standard) encryption for patient medical records and confidential clinical data",
      "SHA-1 cryptographic hashing for tamper-proof password storage and integrity verification",
      "Email-verified encrypted key access mechanism ensuring only authenticated practitioners access private records",
      "Robust MySQL relational database integration structured for compliance and swift record retrieval",
      "Granular role-based access control (RBAC) separating administrative, doctor, and patient capabilities"
    ],
    githubUrl: "https://github.com/sreenuneelam9010-sketch",
    visualType: "security",
    stats: [
      { label: "Security", value: "AES-256 / SHA-1" },
      { label: "Architecture", value: "Flask + MySQL" },
      { label: "Access Model", value: "Role-Based + OTP" }
    ]
  },
  {
    id: "project-03",
    number: "03",
    title: "Customer Churn Prediction System",
    subtitle: "Predictive Telecommunications Analytics Pipeline",
    category: "AI & Machine Learning",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    description: "A machine learning project focused on analyzing telecom customer behavior metrics to identify churn risks early and formulate proactive customer retention strategies.",
    keyHighlights: [
      "Rigorous data preprocessing pipeline handling null values, outlier mitigation, and categorical encoding",
      "Advanced feature engineering with statistical correlation analysis and feature importance scoring",
      "Comparative modeling implementing Random Forest ensemble and Support Vector Classification (SVC)",
      "Comprehensive accuracy evaluation measuring precision, recall, F1-scores, and ROC-AUC curves",
      "Interactive confusion matrix analysis demonstrating clear classification boundaries between churn vs. retention"
    ],
    githubUrl: "https://github.com/sreenuneelam9010-sketch",
    visualType: "machine-learning",
    stats: [
      { label: "Pipeline", value: "EDA → Scikit-Learn" },
      { label: "Classifiers", value: "Random Forest & SVC" },
      { label: "Metrics", value: "Accuracy & Confusion Matrix" }
    ]
  },
  {
    id: "project-04",
    number: "04",
    title: "Ticket Booking Web Application",
    subtitle: "Enterprise Relational Reservation Engine",
    category: "Web & Backend",
    technologies: ["Java", "HTML", "CSS", "JavaScript", "MySQL", "Git", "GitHub"],
    description: "A web-based ticket booking application featuring scalable backend business logic, robust database transaction handling, and secure multi-user authentication.",
    keyHighlights: [
      "RESTful API design powering seamless seat selection, booking confirmation, and status querying",
      "Robust Java backend architecture handling core scheduling, availability calculation, and reservations",
      "Relational MySQL integration with transactional ACID consistency for real-time seat inventory",
      "Responsive, cross-device interface allowing frictionless booking across desktop and mobile screens",
      "Complete user authentication system with secure registration, credential verification, and session control"
    ],
    githubUrl: "https://github.com/sreenuneelam9010-sketch",
    visualType: "ticket-booking",
    stats: [
      { label: "Core Backend", value: "Java" },
      { label: "Database", value: "MySQL ACID" },
      { label: "Interface", value: "Responsive Web" }
    ]
  }
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: "Wedding-Invitation",
    description: "An elegant, interactive wedding invitation web application featuring animated design elements, RSVP handling, event itinerary, and responsive mobile-first layouts.",
    language: "JavaScript",
    url: "https://github.com/sreenuneelam9010-sketch/Wedding-Invitation",
    stars: 1,
    forks: 0,
    topics: ["html", "css", "javascript", "invitation", "responsive-design"]
  },
  {
    name: "Farm-management-system",
    description: "Sri Venkateswara Lakshmi Venkateswara Farm Management System: Real-time farm and livestock management application with role-based access (Owner/Worker/Customer), inventory tracking, order workflows, and relational database persistence (~90% developed).",
    language: "Python",
    url: "https://github.com/sreenuneelam9010-sketch/Farm-management-system",
    stars: 1,
    forks: 0,
    topics: ["farm-management", "livestock", "rbac", "python", "mysql", "fullstack"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-01",
    role: "Java Full Stack Developer Intern",
    company: "Aivariant",
    period: "September 2025 – December 2025",
    duration: "3 Months",
    location: "Remote / Hybrid",
    type: "Internship",
    responsibilities: [
      "Developed interactive and accessible web pages using HTML, CSS, JavaScript, and Bootstrap.",
      "Assisted with Java-based backend application development, implementing business rules and service layers.",
      "Worked with MySQL database integration, executing schema updates, queries, and connection handling.",
      "Participated actively in debugging, code reviews, and ongoing application maintenance.",
      "Collaborated with cross-functional team members on real-time web development projects under agile practices."
    ],
    technologies: ["Java", "HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL", "Git"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "edu-01",
    degree: "Bachelor of Technology — CSE-AIML",
    institution: "Kalasalingam Academy of Research and Education",
    period: "2021 – 2025",
    grade: "8.38",
    gradeType: "CGPA",
    description: "Specialized curriculum in Computer Science & Engineering with an emphasis on Artificial Intelligence, Machine Learning algorithms, Data Structures, and Database Management Systems.",
    location: "Tamil Nadu, India"
  },
  {
    id: "edu-02",
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    institution: "Narayana Junior College",
    period: "2019 – 2021",
    grade: "89.7%",
    gradeType: "Percentage",
    description: "Rigorous analytical foundation in advanced mathematics, physics, and computational logic.",
    location: "Andhra Pradesh, India"
  },
  {
    id: "edu-03",
    degree: "Secondary Education (10th Standard)",
    institution: "Sri Chaitanya High School",
    period: "2018 – 2019",
    grade: "9.8",
    gradeType: "CGPA",
    description: "Graduated with academic excellence in science, mathematics, and foundational computer studies.",
    location: "Andhra Pradesh, India"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-01",
    title: "Full Stack Developer Internship",
    issuer: "Aivariant",
    date: "Dec 2025",
    type: "Internship",
    skillsGained: ["Java Backend", "HTML/CSS/JS", "Bootstrap", "MySQL", "Agile Collaboration"]
  },
  {
    id: "cert-02",
    title: "Full Stack Developer Course Completion",
    issuer: "ExcelR",
    date: "2024",
    type: "Course",
    skillsGained: ["Full Stack Architecture", "Core Java", "Web Technologies", "Relational Databases", "Project Lifecycle"]
  },
  {
    id: "cert-03",
    title: "Oracle Cloud Infrastructure 2023 Data Science Professional",
    issuer: "Oracle",
    date: "2023",
    type: "Professional Certification",
    skillsGained: ["Cloud ML Workflows", "Model Deployment", "Data Science Lifecycle", "OCI AI Services"]
  },
  {
    id: "cert-04",
    title: "IIITDM Kancheepuram — Vashist'24 Hackathon",
    issuer: "IIITDM Kancheepuram",
    date: "2024",
    type: "Hackathon",
    skillsGained: ["Rapid Prototyping", "Team Problem Solving", "Hackathon Project Presentation"]
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: "2018",
    title: "Secondary Education",
    subtitle: "Sri Chaitanya High School",
    description: "Achieved 9.8 CGPA, laying a strong quantitative and analytical foundation.",
    type: "education",
    tag: "9.8 CGPA"
  },
  {
    year: "2019–2021",
    title: "Intermediate — MPC",
    subtitle: "Narayana Junior College",
    description: "Focused on advanced Mathematics, Physics, and analytical problem-solving with 89.7%.",
    type: "education",
    tag: "89.7%"
  },
  {
    year: "2021–2025",
    title: "B.Tech in CSE-AIML",
    subtitle: "Kalasalingam Academy of Research and Education",
    description: "Specialized in Computer Science with AI & Machine Learning, completing foundational systems and data modeling with 8.38 CGPA.",
    type: "education",
    tag: "8.38 CGPA"
  },
  {
    year: "2025",
    title: "Java Full Stack Developer Internship",
    subtitle: "Aivariant (3 Months)",
    description: "Delivered production-grade web interfaces and assisted with Java backend services and MySQL databases.",
    type: "experience",
    tag: "Industry Experience"
  },
  {
    year: "Present",
    title: "Software Developer",
    subtitle: "Full Stack • Machine Learning • AI",
    description: "Building resilient web applications, secure database integrations, and applied machine learning solutions.",
    type: "present",
    tag: "Active Engineering"
  }
];

export const WHAT_I_BRING = [
  {
    id: "bring-1",
    title: "Full Stack Development",
    subtitle: "Frontend to Backend Cohesion",
    description: "Building responsive frontend interfaces with HTML, CSS, JavaScript, and Bootstrap paired with structured Java & Flask backend services.",
    icon: "Layers",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/30",
    tag: "Architecture"
  },
  {
    id: "bring-2",
    title: "Machine Learning",
    subtitle: "Data-Driven Intelligence",
    description: "Hands-on experience in data preprocessing, feature engineering, and training predictive models like Random Forest and Support Vector Classifiers.",
    icon: "BrainCircuit",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/30",
    tag: "AI / ML"
  },
  {
    id: "bring-3",
    title: "Problem Solving",
    subtitle: "Analytical & Systematic",
    description: "Approaching complex software and algorithmic challenges with structured decomposition, clean logic, and reliable database schema design.",
    icon: "Lightbulb",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
    tag: "Methodology"
  },
  {
    id: "bring-4",
    title: "Continuous Learning",
    subtitle: "Adaptable & Growth-Minded",
    description: "Continuously deepening my expertise in modern software development ecosystems, emerging AI/ML paradigms, and cloud tooling.",
    icon: "Sparkles",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
    tag: "Growth"
  }
];
