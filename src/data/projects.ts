export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  problem: string;
  overview: string;
  approach: string[];
  tech: string[];
  metrics: ProjectMetric[];
  footnote?: string;
  github: string;
  tags: string[];
  featured?: boolean;
};

export const projectFilters = ['All', 'AI & ML', 'LLM Agents', 'Full-Stack', 'Backend'] as const;

export const projects: Project[] = [
  {
    id: 'reconagent',
    index: '01',
    title: 'ReconAgent',
    subtitle: 'Multi-Agent Financial Reconciliation System',
    problem:
      'Payment-gateway, bank, and ledger records rarely line up. Reconciling them manually is slow, and matching logic buried in scripts is hard to audit or trust.',
    overview:
      'A multi-agent pipeline — ingestion, matching, verifier, exception, audit — that reconciles payment-gateway, bank, and ledger records across 1:1, N:1, and 1:N matches using a deterministic matching engine.',
    approach: [
      'Deterministic matching engine covering 1:1, N:1, and 1:N record relationships across three source systems.',
      'Independent Verifier Agent recomputes match confidence from raw records, with isolation enforced by tests.',
      'Append-only audit trail plus optional LLM resolution for ambiguous cases routed through an exception queue.',
      'Automated testing and CI with Pytest and GitHub Actions.',
    ],
    tech: ['Python', 'LLM Agents', 'Pytest', 'GitHub Actions'],
    metrics: [
      { value: '100%', label: 'Precision' },
      { value: '89.1%', label: 'Recall' },
      { value: '94.2%', label: 'F1 score' },
    ],
    footnote: 'Synthetic benchmark — 57 TP, 0 FP, 7 FN',
    github: 'https://github.com/sirivalli-stack/Recon-Agent',
    tags: ['LLM Agents', 'Backend'],
    featured: true,
  },
  {
    id: 'sage',
    index: '02',
    title: 'Sage',
    subtitle: 'State-Aware Conversational Agent (research prototype)',
    problem:
      'General-purpose LLM chatbots answer without knowing how the user is actually doing — a serious gap for sensitive conversations.',
    overview:
      'A FastAPI backend that fuses sentiment, emotion, and risk classifiers into a user-state model conditioning Llama 3.1 8B responses, with pre- and post-generation safety checks.',
    approach: [
      'PyTorch and Hugging Face classifiers fused into a user-state model that conditions every LLM response (Llama 3.1 8B via Ollama).',
      'Pre- and post-generation safety checks wrapping the generation path.',
      'REST APIs with token authentication and salted password hashing, SQLite/SQLAlchemy persistence, session memory, and a React chat interface.',
      'Four-profile ablation study comparing the LLM-only baseline against the state-aware pipeline.',
    ],
    tech: ['Python', 'FastAPI', 'PyTorch', 'Hugging Face', 'SQLAlchemy', 'React'],
    metrics: [
      { value: '489', label: 'Backend tests' },
      { value: '93%', label: 'Line coverage' },
      { value: '4', label: 'Ablation profiles' },
    ],
    github: 'https://github.com/sirivalli-stack/mental-health-agent',
    tags: ['LLM Agents', 'AI & ML', 'Full-Stack'],
  },
  {
    id: 'attrition',
    index: '03',
    title: 'Employee Attrition Prediction',
    subtitle: 'Retention Intelligence Platform',
    problem:
      'Attrition only becomes visible once someone resigns. HR teams need a ranked, explainable signal of who is at risk — and why.',
    overview:
      'A full-stack attrition prediction platform: FastAPI REST backend and React dashboard with three gradient-boosted models trained and compared head-to-head.',
    approach: [
      'Trained and compared XGBoost, LightGBM, and CatBoost, reaching 88% accuracy.',
      'SHAP and LIME explanations attached to every prediction so the dashboard shows the drivers behind each risk score.',
      'JWT-secured, role-based APIs and automated PDF retention reports.',
    ],
    tech: ['FastAPI', 'React', 'XGBoost', 'LightGBM', 'CatBoost', 'SHAP/LIME', 'MySQL'],
    metrics: [
      { value: '88%', label: 'Accuracy' },
      { value: '3', label: 'Models compared' },
      { value: 'PDF', label: 'Auto reports' },
    ],
    github: 'https://github.com/sirivalli-stack/employee-attrition-prediction',
    tags: ['AI & ML', 'Full-Stack'],
  },
  {
    id: 'amazon-reviews',
    index: '04',
    title: 'Amazon Product Review Intelligence',
    subtitle: 'Transformer-based Review Analysis Platform',
    problem:
      'Product reviews mix genuine signal with noise — sentiment, spam, and buried aspects are hard to read at scale.',
    overview:
      'A Transformer-based review analysis platform covering sentiment classification, aspect-based sentiment, fake review detection, and review summarisation, served through FastAPI with explanations.',
    approach: [
      'Transformer model reaching 89% sentiment classification accuracy.',
      'Aspect-based sentiment analysis, fake review detection, and review summarisation in one platform.',
      'FastAPI REST endpoints with SHAP/LIME explainability for transparent predictions.',
    ],
    tech: ['Hugging Face Transformers', 'PyTorch', 'FastAPI', 'SHAP/LIME', 'NLTK'],
    metrics: [
      { value: '89%', label: 'Sentiment accuracy' },
      { value: '4', label: 'Analysis modes' },
    ],
    github: 'https://github.com/sirivalli-stack/amazon-review-intelligence',
    tags: ['AI & ML', 'Backend'],
  },
];
