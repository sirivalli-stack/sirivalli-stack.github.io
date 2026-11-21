import { education } from '../data/education';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="06"
          label="Education"
          title="Academic record."
          description="Computer Science & Engineering (AI & ML) at KITS, with a strong school and intermediate record."
        />

        <Reveal className="mt-10">
          <div className="divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
            {education.map((entry) => (
              <div
                key={entry.school}
                className="flex flex-col gap-3 p-6 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-7"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2.5">
                    {entry.current ? (
                      <span
                        aria-label="In progress"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse-dot"
                      />
                    ) : null}
                    <h3 className="text-[15px] font-semibold tracking-tight text-zinc-100 sm:text-base">
                      {entry.school}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm text-zinc-400">{entry.degree}</p>
                </div>

                <div className="flex shrink-0 items-center gap-5 sm:flex-col sm:items-end sm:gap-1.5">
                  <span className="font-mono text-xs text-zinc-500">{entry.period}</span>
                  <span className="font-mono text-sm font-medium text-indigo-300">
                    {entry.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
