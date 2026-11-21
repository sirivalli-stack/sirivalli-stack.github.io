import { experiences } from '../data/experience';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Experience"
          title="Where I've applied it."
          description="Industry-oriented training building full-stack production features, plus a leadership role running a 1,200+ student hackathon."
        />

        <div className="relative mt-10">
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[11px] top-3 w-px bg-gradient-to-b from-indigo-500/60 via-white/[0.12] to-transparent"
          />

          {experiences.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.1} className="relative mb-8 pl-10 last:mb-0">
              <span
                aria-hidden="true"
                className="absolute left-[6px] top-[7px] h-3 w-3 rounded-full border border-indigo-400/70 bg-ink-950"
              />

              <div className="card p-6 transition hover:border-white/[0.15] sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="inline-block rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[11px] text-indigo-300">
                      {item.kind}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.org}</p>
                  </div>
                  <p className="font-mono text-xs text-zinc-500">{item.period}</p>
                </div>

                <ul className="mt-4 space-y-2.5 border-t border-white/[0.06] pt-4">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                      <span
                        aria-hidden="true"
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-indigo-400/80"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
