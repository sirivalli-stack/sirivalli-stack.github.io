import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projectFilters, projects as allProjects, type Project } from '../data/projects';
import { GitHubIcon } from './BrandIcons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const featured = Boolean(project.featured);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease }}
      className={[
        'card group relative flex h-full flex-col p-6 sm:p-7',
        featured ? 'md:col-span-2' : '',
      ].join(' ')}
    >
      {featured ? (
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent"
        />
      ) : null}

      <div className={featured ? 'grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10' : ''}>
        {/* Primary: identity + problem + overview */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-indigo-300/80">{project.index}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-[1.35rem]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{project.subtitle}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-zinc-400">
              {project.tags[0]}
            </span>
          </div>

          <div className="mt-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
              Problem
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{project.problem}</p>
          </div>

          <div className="mt-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
              Overview
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{project.overview}</p>
          </div>
        </div>

        {/* Detail: approach + tech + metrics + link */}
        <div className="flex flex-col">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
              Approach
            </p>
            <ul className="mt-2.5 space-y-2.5">
              {project.approach.map((step) => (
                <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-indigo-400/80"
                  />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span key={tech} className="chip chip-mono">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2.5 rounded-xl border border-white/[0.06] bg-black/30 p-3.5">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-mono text-lg font-medium tracking-tight text-white">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-zinc-500">{metric.label}</p>
              </div>
            ))}
          </div>

          {project.footnote ? (
            <p className="mt-2 font-mono text-[11px] text-zinc-500">{project.footnote}</p>
          ) : null}

          <div className="mt-auto pt-5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
              View repository
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<string>('All');

  const visible = useMemo(() => {
    if (active === 'All') return allProjects;
    return allProjects.filter((project) => project.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Projects"
          title="Projects I've built."
          description="Multi-agent pipelines, state-aware conversation, and explainable ML platforms — each shown with the evaluation numbers it was measured at."
        />

        <Reveal className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={[
                  'rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200',
                  active === filter
                    ? 'border-white/25 bg-white text-ink-950'
                    : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white',
                ].join(' ')}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className="font-mono text-xs text-zinc-500">
            {String(visible.length).padStart(2, '0')} / {String(allProjects.length).padStart(2, '0')}{' '}
            projects
          </p>
        </Reveal>

        <div key={active} className="mt-6 grid gap-6 md:grid-cols-2">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
