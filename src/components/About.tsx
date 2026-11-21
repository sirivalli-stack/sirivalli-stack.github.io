import { profile } from '../data/profile';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              index="01"
              label="About"
              title={
                <>
                  Software that holds&nbsp;up under test.
                </>
              }
            />
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-5">
              {profile.about.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <p
                    className={[
                      'leading-relaxed',
                      i === 0
                        ? 'text-[16px] text-zinc-300'
                        : 'text-[15px] text-zinc-400',
                    ].join(' ')}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {profile.highlights.map((highlight, i) => (
                <Reveal key={highlight.title} delay={0.12 + i * 0.08} className="h-full">
                  <div className="card h-full p-5 hover:border-white/[0.16]">
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      <h3 className="text-sm font-semibold tracking-tight text-zinc-100">
                        {highlight.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-[13px] leading-relaxed text-zinc-500">
                      {highlight.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
