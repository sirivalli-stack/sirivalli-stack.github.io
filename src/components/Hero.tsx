import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Activity } from 'lucide-react';
import { heroResults, profile } from '../data/profile';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pb-24 pt-28 sm:pt-32">
      <div className="container-x w-full">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] font-medium text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                {profile.availability}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className="mt-7 text-[2.6rem] font-semibold leading-[1.07] tracking-[-0.035em] text-white sm:text-6xl lg:text-[4.1rem]"
            >
              <span className="text-zinc-500">Hi, I&apos;m </span>
              {profile.name}.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="text-gradient mt-5 text-xl font-medium leading-snug tracking-tight sm:text-2xl lg:text-[1.7rem]"
            >
              Building intelligent systems. Engineering meaningful solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-zinc-400"
            >
              {profile.heroIntro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-zinc-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
              <span className="hidden h-3 w-px bg-white/10 sm:block" />
              <span>{profile.educationLine}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.resume}
                download="Sirivalli_Bethi_Resume.pdf"
                className="btn-secondary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <span className="mx-1 hidden h-8 w-px bg-white/10 sm:block" />
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="card p-6 lg:col-span-5"
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                Selected results
              </p>
              <Activity className="h-3.5 w-3.5 text-zinc-600" aria-hidden="true" />
            </div>

            <div className="mt-4 divide-y divide-white/[0.06]">
              {heroResults.map((result) => (
                <div
                  key={result.label + result.value}
                  className="flex items-center justify-between gap-4 py-3.5"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-xl font-medium tracking-tight text-white">
                      {result.value}
                    </p>
                    <p className="mt-0.5 text-[13px] text-zinc-400">{result.label}</p>
                  </div>
                  <p className="max-w-[54%] text-right text-[11px] leading-snug text-zinc-500">
                    {result.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-white/[0.06] bg-black/30 px-3.5 py-2.5 text-center font-mono text-[11px] text-zinc-500">
              Pytest · GitHub Actions · CI
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
