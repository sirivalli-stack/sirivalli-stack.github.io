import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/profile';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);

  const openMenu = () => {
    setMenuMounted(true);
    setMenuOpen(true);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const onChange = () => {
      if (mediaQuery.matches) setMenuOpen(false);
    };
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, []);

  const linkClasses = (id: string) =>
    [
      'relative text-[13px] font-medium transition-colors duration-200',
      active === id ? 'text-white' : 'text-zinc-400 hover:text-zinc-100',
    ].join(' ');

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled || menuOpen
            ? 'border-b border-white/[0.07] bg-ink-950/85 backdrop-blur-xl'
            : 'border-b border-transparent',
        ].join(' ')}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <a href="#home" className="group flex items-center gap-2.5" aria-label="Home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 font-mono text-[13px] font-semibold text-indigo-200 transition group-hover:border-white/25">
              {profile.initials}
            </span>
            <span className="text-sm font-medium tracking-tight text-zinc-200">{profile.name}</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={linkClasses(link.id)}>
                {link.label}
                {active === link.id ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-indigo-400 to-cyan-400"
                  />
                ) : null}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white sm:flex"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/30 hover:text-white sm:flex"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              download="Sirivalli_Bethi_Resume.pdf"
              className="hidden items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[13px] font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/[0.08] sm:inline-flex"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
            <button
              type="button"
              onClick={() => (menuOpen ? closeMenu() : openMenu())}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200 transition hover:border-white/30 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {menuMounted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: menuOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          onAnimationComplete={() => {
            if (!menuOpen) setMenuMounted(false);
          }}
          className="fixed inset-0 z-40 bg-ink-950/95 pt-16 backdrop-blur-xl lg:hidden"
        >
          <nav className="container-x flex flex-col gap-1 py-8" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                className={[
                  'rounded-lg px-3 py-3 text-lg font-medium tracking-tight transition',
                  active === link.id ? 'bg-white/[0.05] text-white' : 'text-zinc-400 hover:text-white',
                ].join(' ')}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href={profile.resume}
              download="Sirivalli_Bethi_Resume.pdf"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + navLinks.length * 0.04, duration: 0.3 }}
              className="btn-primary mt-6 w-full"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-6 flex items-center gap-3 px-3"
            >
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-400"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="ml-auto font-mono text-xs text-zinc-500"
              >
                {profile.email}
              </a>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}
    </>
  );
}
