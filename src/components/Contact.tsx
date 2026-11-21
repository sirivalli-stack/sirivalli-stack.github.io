import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Mail, MapPin, Send } from 'lucide-react';
import { profile } from '../data/profile';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Errors = { name?: string; email?: string; message?: string };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Enter a valid email address.';
    if (!form.message.trim()) next.message = 'Please enter a message.';
    else if (form.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters.';
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry — ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const channels = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail className="h-4 w-4" aria-hidden="true" />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/bethi-sirivalli',
      href: profile.links.linkedin,
      icon: <LinkedInIcon className="h-4 w-4" />,
    },
    {
      label: 'GitHub',
      value: 'github.com/sirivalli-stack',
      href: profile.links.github,
      icon: <GitHubIcon className="h-4 w-4" />,
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="07"
          label="Contact"
          title="Get in touch."
          description="Open to software engineering, AI/ML, and backend roles — internships and graduate positions. Email is the fastest route; GitHub and LinkedIn are open too."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <Reveal>
            <div className="flex h-full flex-col gap-3">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.label === 'Email' ? undefined : '_blank'}
                  rel={channel.label === 'Email' ? undefined : 'noreferrer'}
                  className="card group flex items-center gap-4 p-5 hover:border-white/[0.18]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-indigo-300 transition group-hover:border-indigo-400/40">
                    {channel.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-zinc-200">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-zinc-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </a>
              ))}

              <div className="card flex items-center gap-4 p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-400">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                    Location
                  </span>
                  <span className="mt-0.5 block text-sm text-zinc-200">{profile.location}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className={`field mt-2 ${errors.name ? 'border-red-500/60' : ''}`}
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                    className={`field mt-2 ${errors.email ? 'border-red-500/60' : ''}`}
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="Tell me about the role, project, or problem you're working on."
                  aria-invalid={Boolean(errors.message)}
                  className={`field mt-2 resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                ) : null}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary">
                  <Send className="h-4 w-4" />
                  Send message
                </button>
                <p className="text-xs leading-relaxed text-zinc-500">
                  Opens your email client with the message pre-filled.
                </p>
              </div>

              {sent ? (
                <p className="mt-4 flex items-start gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/[0.07] px-3.5 py-2.5 text-[13px] leading-relaxed text-emerald-300">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  Your email client should have opened. If it didn't, email me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
                    {profile.email}
                  </a>
                  .
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
