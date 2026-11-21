# Sirivalli Bethi — Developer Portfolio

A premium, dark-themed personal portfolio for **Sirivalli Bethi** — Computer Science (AI & ML) undergraduate, backend & ML systems builder. Built as a production-ready single-page site with a custom 404 route.

**Stack:** React 18 · Vite 7 · TypeScript · Tailwind CSS · Framer Motion · Lucide React · React Router

---

## Features

- **Hero** with ambient gradient background, animated introduction, and a "selected results" panel sourced from real project benchmarks
- **About** — professional summary based on the resume
- **Skills** — six animated categories (Languages, CS Fundamentals, ML/DL + Explainable AI, Frameworks & Backend, Databases, Developer Tools)
- **Projects** — interactive filtering (All / AI & ML / LLM Agents / Full-Stack / Backend), featured layout for ReconAgent, per-project problem, overview, approach, tech stack, measured results, and GitHub links
- **Experience** — internship + leadership timeline (Blackbucks, CSMA PRO)
- **Certifications** — Google Skills and AWS Educate credential cards
- **Education** — degrees with CGPA/percentages
- **Contact** — validated form that opens a pre-filled email, plus direct email / LinkedIn / GitHub channels
- Sticky navigation with scroll-spy active state, mobile full-screen menu, scroll progress bar, back-to-top button, smooth scrolling, scroll-reveal animations
- SEO metadata, JSON-LD, SVG favicon, custom 404 page
- Respects `prefers-reduced-motion`, keyboard-focus styles, and WCAG-conscious contrast

---

## Project structure

```
Sirivalliportfolio/
├── public/
│   ├── favicon.svg          # SB monogram favicon
│   └── resume.pdf           # downloadable resume
├── src/
│   ├── components/          # Navbar, Hero, About, Skills, Projects, Experience,
│   │                        # Certifications, Education, Contact, Footer, Reveal, …
│   ├── data/                # profile, skills, projects, experience, certifications, education
│   ├── pages/               # NotFound (404)
│   ├── App.tsx              # routing + layout shell
│   ├── main.tsx
│   └── index.css            # Tailwind layers, base styles, utilities
├── index.html               # SEO metadata, fonts, JSON-LD
├── tailwind.config.cjs
├── vite.config.ts
├── vercel.json              # SPA rewrite for deep links / 404
├── tsconfig.json
└── package.json
```

---

## Run locally

Prerequisites: **Node.js 20+** (tested on Node 24)

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Type-check + production build (outputs to dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## Deploy to Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New → Project** and import the repository.
3. Vercel auto-detects Vite — build command `npm run build`, output directory `dist` (no changes needed).
4. Deploy. `vercel.json` already contains the SPA rewrite so deep links and unknown routes serve the custom 404 page.

---

## Updating content

All visible copy lives in `src/data/`:

| File | What to edit |
|------|--------------|
| `profile.ts` | Name, tagline, summary, about paragraphs, contact links, availability line |
| `projects.ts` | Project titles, problems, approaches, metrics, GitHub URLs, filter tags |
| `skills.ts` | Skill categories and technologies |
| `experience.ts` | Internship and leadership entries |
| `certifications.ts` | Certification names, organizations, years |
| `education.ts` | Schools, degrees, periods, results |

To change the resume download, replace `public/resume.pdf` (keep the filename).

The contact form opens the visitor's email client via `mailto:` — no backend required. To use a form service later (Formspree, Resend, etc.), replace the `handleSubmit` logic in `src/components/Contact.tsx`.
