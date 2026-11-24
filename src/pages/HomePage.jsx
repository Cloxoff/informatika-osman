import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  Code2,
  Newspaper,
  Trophy,
  Sparkles,
  Play,
  Layers,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GlassCard } from '../components/GlassCard';
import { PageTransition } from '../components/PageTransition';
import { assetUrl } from '../utils/assetUrl';

export function HomePage() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      {/* Hero Glass Showcase */}
      <section className="relative">
        <GlassCard className="overflow-hidden p-7 sm:p-12 lg:p-14">
          <div className="relative z-10 max-w-3xl">
            <div className="liquid-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-sky-700 dark:text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.home.eyebrow}</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              {t.home.heroTitleLine1}
              <span className="mt-1 block bg-gradient-to-r from-sky-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-indigo-300 dark:to-emerald-300">
                {t.home.heroTitleLine2}
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
              {t.home.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/hardware"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:scale-[1.02] hover:shadow-sky-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Cpu className="h-4 w-4" />
                <span>{t.home.ctaExplore}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/quiz"
                className="liquid-pill inline-flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:scale-[1.02] hover:border-emerald-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:text-white"
              >
                <Play className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
                <span>{t.home.ctaQuiz}</span>
              </Link>
            </div>
          </div>

          {/* Telemetry Stat Strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {t.home.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-900/10 bg-white/55 px-4 py-4 backdrop-blur-md dark:border-white/15 dark:bg-white/[0.04]"
              >
                <div className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* Four Interactive Preview Cards */}
      <section className="mt-14">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              <Layers className="h-3.5 w-3.5" />
              <span>4 MODULES</span>
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
              {t.home.sectionsHeading}
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
            {t.home.sectionsSubheading}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1: Hardware */}
          <Link to="/hardware" className="group block focus-visible:outline-none">
            <GlassCard interactive className="flex h-full flex-col justify-between overflow-hidden p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/20 to-indigo-500/20 text-sky-600 ring-1 ring-sky-400/30 dark:text-sky-300">
                    <Cpu className="h-5 w-5" />
                  </span>
                  <span className="liquid-pill rounded-full px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                    {t.home.cards.hardware.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">
                  {t.home.cards.hardware.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t.home.cards.hardware.desc}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2.5">
                  {['images/cpu.jpg', 'images/gpu.jpg', 'images/motherboard.jpg'].map((img, i) => (
                    <div
                      key={i}
                      className="aspect-[16/10] overflow-hidden rounded-xl border border-slate-900/10 dark:border-white/15"
                    >
                      <img
                        src={assetUrl(img)}
                        alt=""
                        fetchpriority={i === 0 ? 'high' : undefined}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-900/10 pt-4 dark:border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {t.home.cards.hardware.previewTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-900/5 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition group-hover:translate-x-1 dark:text-sky-300">
                  <span>{t.home.openSection}</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </GlassCard>
          </Link>

          {/* Card 2: Languages */}
          <Link to="/languages" className="group block focus-visible:outline-none">
            <GlassCard interactive className="flex h-full flex-col justify-between overflow-hidden p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400/20 to-fuchsia-500/20 text-violet-600 ring-1 ring-violet-400/30 dark:text-violet-300">
                    <Code2 className="h-5 w-5" />
                  </span>
                  <span className="liquid-pill rounded-full px-3 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
                    {t.home.cards.languages.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">
                  {t.home.cards.languages.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t.home.cards.languages.desc}
                </p>

                <div className="code-surface mt-5 rounded-2xl p-3.5 font-mono text-xs text-sky-200">
                  <div className="mb-2 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <pre className="overflow-x-auto whitespace-pre leading-relaxed text-emerald-300">
                    {t.home.cards.languages.previewSnippet}
                  </pre>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-900/10 pt-4 dark:border-white/10">
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] font-semibold">
                  {['Python', 'JS', 'C++', 'SQL'].map((l) => (
                    <span
                      key={l}
                      className="rounded-lg bg-slate-900/5 px-2 py-0.5 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 transition group-hover:translate-x-1 dark:text-violet-300">
                  <span>{t.home.openSection}</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </GlassCard>
          </Link>

          {/* Card 3: News 2026 */}
          <Link to="/news" className="group block focus-visible:outline-none">
            <GlassCard interactive className="flex h-full flex-col justify-between overflow-hidden p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 text-emerald-600 ring-1 ring-emerald-400/30 dark:text-emerald-300">
                    <Newspaper className="h-5 w-5" />
                  </span>
                  <span className="liquid-pill rounded-full px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    {t.home.cards.news.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">
                  {t.home.cards.news.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t.home.cards.news.desc}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {['images/news-quantum.jpg', 'images/news-photonic.jpg'].map((img, i) => (
                    <div
                      key={i}
                      className="aspect-[16/9] overflow-hidden rounded-xl border border-slate-900/10 dark:border-white/15"
                    >
                      <img
                        src={assetUrl(img)}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-900/10 pt-4 dark:border-white/10">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t.home.cards.news.previewTag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 transition group-hover:translate-x-1 dark:text-emerald-300">
                  <span>{t.home.openSection}</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </GlassCard>
          </Link>

          {/* Card 4: Quiz Projector */}
          <Link to="/quiz" className="group block focus-visible:outline-none">
            <GlassCard interactive className="flex h-full flex-col justify-between overflow-hidden p-6 sm:p-7">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-rose-500/20 text-amber-600 ring-1 ring-amber-400/30 dark:text-amber-300">
                    <Trophy className="h-5 w-5" />
                  </span>
                  <span className="liquid-pill rounded-full px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                    {t.home.cards.quiz.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">
                  {t.home.cards.quiz.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t.home.cards.quiz.desc}
                </p>

                <div className="mt-5 grid grid-cols-4 gap-2">
                  {t.home.cards.quiz.previewOptions.map((opt, idx) => (
                    <div
                      key={opt}
                      className={`flex h-12 items-center justify-center rounded-xl border font-bold ${
                        idx === 0
                          ? 'border-emerald-400/50 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                          : 'border-slate-900/10 bg-white/50 text-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200'
                      }`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-900/10 pt-4 dark:border-white/10">
                <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
                  12 Q • 20s • Streak
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition group-hover:translate-x-1 dark:text-amber-300">
                  <span>{t.home.openSection}</span>
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </GlassCard>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
