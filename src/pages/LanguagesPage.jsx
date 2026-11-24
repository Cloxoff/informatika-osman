import { Code2, Gauge, GraduationCap, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { programmingLanguages } from '../data/languagesData';
import { GlassCard } from '../components/GlassCard';
import { CodeBlock } from '../components/CodeBlock';
import { PageTransition } from '../components/PageTransition';

function MetricBar({ label, value, max = 10, gradientClass, hint, icon: Icon }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="rounded-2xl border border-slate-900/10 bg-white/45 p-3 sm:p-3.5 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="flex items-center justify-between gap-2 text-xs font-semibold">
        <span className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
          <Icon className="h-3.5 w-3.5 shrink-0 opacity-75" />
          <span>{label}</span>
        </span>
        <span className="shrink-0 font-mono text-slate-900 dark:text-white">
          {value}/{max}
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
        <div
          style={{ width: `${pct}%` }}
          className={`h-full rounded-full bg-gradient-to-r transition-all duration-500 ${gradientClass}`}
        />
      </div>
      <div className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">{hint}</div>
    </div>
  );
}

export function LanguagesPage() {
  const { tr, t } = useLanguage();

  return (
    <PageTransition>
      <div className="max-w-3xl">
        <div className="liquid-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-violet-700 dark:text-violet-300">
          <Code2 className="h-3.5 w-3.5" />
          <span>{t.languages.eyebrow}</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          {t.languages.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {t.languages.subtitle}
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:mt-9 sm:gap-7 lg:grid-cols-2">
        {programmingLanguages.map((langItem) => (
          <GlassCard key={langItem.id} as="article" interactive className="flex min-w-0 flex-col justify-between overflow-hidden p-4 sm:p-6 lg:p-7">
            <div>
              {/* Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${langItem.color} font-mono text-sm font-extrabold text-white shadow-lg sm:h-12 sm:w-12`}
                  >
                    {langItem.badge}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl dark:text-white">
                      {langItem.name}
                    </h2>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {tr(langItem.paradigm)}
                    </p>
                  </div>
                </div>

                <div className="liquid-pill rounded-xl px-3 py-1.5 text-left text-[11px] font-medium text-slate-600 sm:text-right dark:text-slate-300">
                  <div>
                    {t.languages.creatorPrefix} <strong className="text-slate-900 dark:text-white">{langItem.creator}</strong>
                  </div>
                  <div className="font-mono text-[10px] opacity-80">{langItem.year}</div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                {tr(langItem.description)}
              </p>

              {/* Used For Chips */}
              <div className="mt-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {t.languages.usedForLabel}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {langItem.usedFor.map((use, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-900/10 bg-white/50 px-3 py-1 text-xs font-semibold text-slate-800 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200"
                    >
                      <Terminal className="h-3 w-3 text-sky-500" />
                      {tr(use)}
                    </span>
                  ))}
                </div>
              </div>

              {/* Difficulty & Speed Bars */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <MetricBar
                  icon={GraduationCap}
                  label={t.languages.difficultyLabel}
                  value={langItem.difficulty}
                  gradientClass="from-emerald-400 via-amber-400 to-rose-500"
                  hint={tr(langItem.difficultyLabel)}
                />
                <MetricBar
                  icon={Gauge}
                  label={t.languages.speedLabel}
                  value={langItem.speed}
                  gradientClass="from-sky-400 to-indigo-500"
                  hint={tr(langItem.speedLabel)}
                />
              </div>
            </div>

            {/* Interactive Code Snippet */}
            <div className="mt-5">
              <CodeBlock
                code={tr(langItem.code)}
                fileName={langItem.fileName}
                syntaxLang={langItem.syntaxLang}
              />
            </div>
          </GlassCard>
        ))}
      </div>
    </PageTransition>
  );
}
