import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
};

export default function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <Reveal>
      <p className="font-mono text-xs tracking-wider text-indigo-300/90">
        {index} <span className="text-zinc-600">/</span> {label}
      </p>
      <h2 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400">{description}</p>
      ) : null}
    </Reveal>
  );
}
