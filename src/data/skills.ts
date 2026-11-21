import { Brain, Database, Server, Terminal, Wrench, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
  subgroup?: { label: string; items: string[] };
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    items: ['Python', 'Java', 'SQL'],
  },
  {
    title: 'Computer Science Fundamentals',
    icon: Cpu,
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS'],
  },
  {
    title: 'Machine Learning & Deep Learning',
    icon: Brain,
    items: [
      'Scikit-learn',
      'PyTorch',
      'TensorFlow',
      'Hugging Face Transformers',
      'XGBoost',
      'LightGBM',
      'CatBoost',
      'Pandas',
      'NumPy',
      'LLM Agents',
    ],
    subgroup: {
      label: 'Explainable AI',
      items: ['SHAP', 'LIME', 'Grad-CAM', 'GNNExplainer'],
    },
  },
  {
    title: 'Frameworks & Backend',
    icon: Server,
    items: ['REST APIs', 'FastAPI', 'Flask', 'Node.js', 'Express', 'React', 'JWT Authentication'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MySQL', 'MongoDB', 'SQLite', 'SQLAlchemy'],
  },
  {
    title: 'Developer Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'GitHub Actions', 'Pytest', 'Docker', 'Postman', 'Jupyter', 'VS Code'],
  },
];
