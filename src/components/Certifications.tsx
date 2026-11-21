import { Award } from 'lucide-react';
import { certifications } from '../data/certifications';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Certifications"
          title="Credentials & coursework."
          description="Cloud fundamentals, IAM, AI agents, and prompt engineering from Google and AWS."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 0.07} className="h-full">
              <div className="card group h-full p-5 hover:border-white/[0.16]">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-indigo-300 transition group-hover:border-indigo-400/40">
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-zinc-500">
                    {cert.meta}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-medium leading-snug tracking-tight text-zinc-100">
                  {cert.name}
                </h3>
                <p className="mt-1.5 text-[13px] text-zinc-500">{cert.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
