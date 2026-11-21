import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-[75svh] flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-mono text-sm tracking-wider text-indigo-300">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-400">
        The route you requested isn&apos;t part of this portfolio. Head back home, or jump straight
        to the projects.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href="/" className="btn-primary">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </a>
        <a href="/#projects" className="btn-secondary">
          View projects
        </a>
      </div>
    </section>
  );
}
