import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 14,
        scale: visible ? 1 : 0.95,
      }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink-900/90 text-zinc-300 shadow-xl shadow-black/40 backdrop-blur transition-colors hover:border-white/30 hover:text-white"
    >
      <ChevronUp className="h-5 w-5" />
    </motion.button>
  );
}
