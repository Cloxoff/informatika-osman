export function LiquidBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base ambient gradient canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-[#EBF0F8] to-sky-100/80 dark:from-[#04060D] dark:via-[#070B16] dark:to-[#0A0F22] transition-colors duration-500" />

      {/* Mesh Orb 1: Cyan / Sky */}
      <div
        className="mesh-orb-1 absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full blur-[95px]
          bg-gradient-to-br from-sky-300/60 via-cyan-200/50 to-indigo-300/40
          dark:from-sky-500/25 dark:via-cyan-400/18 dark:to-indigo-600/20"
      />

      {/* Mesh Orb 2: Violet / Magenta */}
      <div
        className="mesh-orb-2 absolute top-[28%] -right-28 h-[32rem] w-[32rem] rounded-full blur-[105px]
          bg-gradient-to-tr from-indigo-300/50 via-purple-200/55 to-pink-200/40
          dark:from-indigo-500/24 dark:via-fuchsia-500/18 dark:to-purple-700/20"
      />

      {/* Mesh Orb 3: Emerald / Teal */}
      <div
        className="mesh-orb-3 absolute -bottom-36 left-[24%] h-[30rem] w-[36rem] rounded-full blur-[110px]
          bg-gradient-to-r from-emerald-200/55 via-teal-200/45 to-sky-200/45
          dark:from-emerald-500/16 dark:via-teal-400/16 dark:to-sky-500/18"
      />

      {/* Subtle glass micro-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.22) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
