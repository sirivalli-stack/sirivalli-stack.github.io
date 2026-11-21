import { profile } from '../data/profile';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="container-x flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] font-mono text-[13px] font-semibold text-indigo-300">
              {profile.initials}
            </span>
            <span className="text-sm font-medium tracking-tight text-zinc-200">{profile.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">{profile.tagline}</p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex items-center gap-2">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Sirivalli Bethi"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white"
            >
              <span className="text-sm font-medium">@</span>
            </a>
          </div>
          <p className="font-mono text-xs text-zinc-500">
            © 2026 {profile.name} · React · TypeScript · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
