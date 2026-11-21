export const profile = {
  name: 'Sirivalli Bethi',
  firstName: 'Sirivalli',
  initials: 'SB',
  title: 'Aspiring Software Engineer · AI/ML Engineer · Full-Stack Developer',
  tagline: 'Building intelligent systems. Engineering meaningful solutions.',
  summary:
    'Computer Science undergraduate (AI & ML) who builds backend services and ML systems in Python and Java. Experienced with REST APIs (FastAPI), SQL/NoSQL databases, multi-agent pipelines, model evaluation, explainable AI, and automated testing. Strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and DBMS.',
  heroIntro:
    'Computer Science undergraduate specialising in AI & ML, building backend services and ML systems in Python and Java — REST APIs, multi-agent pipelines, model evaluation, and explainable AI, grounded in DSA, OOP, and DBMS.',
  about: [
    "I'm a Computer Science undergraduate specialising in Artificial Intelligence and Machine Learning at Kakatiya Institute of Technology and Science, graduating in 2027 with a CGPA of 8.53. My work centres on backend services and ML systems built in Python and Java: REST APIs with FastAPI, SQL and NoSQL persistence, and model pipelines that ship with tests.",
    'Most of my projects sit where machine learning meets software engineering — a multi-agent financial reconciliation pipeline with a deterministic matching engine and an independent verifier agent; a state-aware conversational agent that fuses sentiment, emotion, and risk classifiers to condition LLM responses; and full-stack prediction platforms where every inference carries a SHAP or LIME explanation.',
    'I care about what makes ML systems hold up in practice: evaluation, explainability, and automated testing. ReconAgent benchmarks at 94.2% F1 under a Pytest and GitHub Actions pipeline; the Sage backend carries 489 tests at 93% line coverage. I am looking for software engineering, AI/ML, and backend roles where I can keep building systems like these.',
  ],
  highlights: [
    {
      title: 'Backend & APIs',
      text: 'FastAPI, Flask, Node.js and Express services with JWT authentication, role-based access, and SQL/NoSQL persistence.',
    },
    {
      title: 'ML Systems',
      text: 'Gradient boosting, transformers, and LLM agent pipelines — trained, evaluated, and compared with documented metrics.',
    },
    {
      title: 'Quality Engineering',
      text: 'Pytest suites, GitHub Actions CI, 489-test backend at 93% coverage, and coverage-driven development habits.',
    },
  ],
  location: 'Warangal, India',
  email: 'sirivallibethi@gmail.com',
  links: {
    github: 'https://github.com/sirivalli-stack',
    linkedin: 'https://linkedin.com/in/bethi-sirivalli',
  },
  resume: '/resume.pdf',
  educationLine: 'B.Tech CSE (AI & ML) · Class of 2027 · CGPA 8.53',
  availability: 'Open to SWE, AI/ML & backend internships — Class of 2027',
} as const;

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

export const heroResults = [
  { value: '94.2%', label: 'F1 score', note: 'ReconAgent reconciliation benchmark' },
  { value: '88%', label: 'Accuracy', note: 'Attrition models — XGBoost / LightGBM / CatBoost' },
  { value: '89%', label: 'Accuracy', note: 'Review sentiment classification' },
  { value: '489', label: 'Backend tests', note: 'Sage — 93% line coverage' },
] as const;
