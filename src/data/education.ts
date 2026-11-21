export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  detail: string;
  current?: boolean;
};

export const education: EducationItem[] = [
  {
    school: 'Kakatiya Institute of Technology and Science',
    degree: 'B.Tech, Computer Science & Engineering (AI & ML)',
    period: '2023 – 2027',
    detail: 'CGPA 8.53',
    current: true,
  },
  {
    school: 'Orugallu Junior College',
    degree: 'Intermediate (MPC)',
    period: '2021 – 2023',
    detail: '95%',
  },
  {
    school: 'Oxford High School',
    degree: 'Secondary School Certificate (SSC)',
    period: '2020 – 2021',
    detail: '10 CGPA',
  },
];
