export type ExperienceItem = {
  kind: 'Internship' | 'Position of Responsibility';
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experiences: ExperienceItem[] = [
  {
    kind: 'Internship',
    role: 'Industry-Oriented Training — React.js, Node.js & MySQL',
    org: 'Blackbucks',
    period: 'May 2025 – July 2025',
    points: [
      'Built a full-stack web application (React.js, Node.js, Express.js, MySQL) to manage medicine inventory, orders, stock dispatch, and expiry tracking.',
      'Implemented secure authentication, real-time inventory updates, automated order workflows, and analytics dashboards.',
    ],
  },
  {
    kind: 'Position of Responsibility',
    role: 'PRO, Computer Science & Machine Learning Association (CSMA)',
    org: 'Student Association',
    period: 'Hackathon Organising Team',
    points: [
      'Part of the organising team (lead organiser: Centle) for a 1,200+ student hackathon; took an active role in planning and execution.',
    ],
  },
];
