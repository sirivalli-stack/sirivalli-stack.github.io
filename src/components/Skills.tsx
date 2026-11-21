import { skillCategories } from '../data/skills';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="Skills"
          title="The stack I build with."
          description="Drawn from the tools actually used across my projects — languages, core CS foundations, ML/DL frameworks, backend services, databases, and the engineering tooling around them."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={i * 0.06} className="h-full">
                <div className="card h-full p-5 hover:border-white/[0.15]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-indigo-300">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm font-semibold tracking-tight text-zinc-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>

                  {category.subgroup ? (
                    <div className="mt-4 border-t border-white/[0.06] pt-3.5">
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-indigo-300/80">
                        {category.subgroup.label}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {category.subgroup.items.map((item) => (
                          <span key={item} className="chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
