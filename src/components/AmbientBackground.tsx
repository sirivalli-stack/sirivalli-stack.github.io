export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-indigo-600/[0.10] blur-[120px] animate-float-slow" />
      <div className="absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.06] blur-[110px] animate-float-slow" style={{ animationDelay: '-6s' }} />
      <div className="absolute bottom-[-15%] left-[-8%] h-[380px] w-[380px] rounded-full bg-violet-600/[0.07] blur-[110px] animate-float-slow" style={{ animationDelay: '-11s' }} />
    </div>
  );
}
