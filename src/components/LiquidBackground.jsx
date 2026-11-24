export function LiquidBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base ambient canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-[#EBF0F8] to-sky-100/80 dark:from-[#04060D] dark:via-[#070B16] dark:to-[#0A0F22]" />

      {/* Lightweight radial-gradient mesh layers (zero CSS filter:blur GPU overhead) */}
      <div className="mesh-orb-1 absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full sm:h-[36rem] sm:w-[36rem]" />
      <div className="mesh-orb-2 absolute top-[26%] -right-24 h-[24rem] w-[24rem] rounded-full sm:h-[34rem] sm:w-[34rem]" />
      <div className="mesh-orb-3 absolute -bottom-28 left-[15%] h-[24rem] w-[28rem] rounded-full sm:h-[32rem] sm:w-[38rem]" />
    </div>
  );
}
