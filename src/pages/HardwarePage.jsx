import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  History,
  Sparkles,
  ArrowUpRight,
  Building2,
  Calendar,
  UserCheck,
  Lightbulb,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { hardwareCategories, hardwareItems } from '../data/hardwareData';
import { GlassCard } from '../components/GlassCard';
import { GlassModal } from '../components/GlassModal';
import { PageTransition } from '../components/PageTransition';
import { assetUrl } from '../utils/assetUrl';

export function HardwarePage() {
  const { tr, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return hardwareItems;
    return hardwareItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = useMemo(() => {
    const counts = { all: hardwareItems.length };
    for (const item of hardwareItems) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  return (
    <PageTransition>
      {/* Header */}
      <div className="max-w-3xl">
        <div className="liquid-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
          <Cpu className="h-3.5 w-3.5" />
          <span>{t.hardware.eyebrow}</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          {t.hardware.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {t.hardware.subtitle}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div
        role="tablist"
        aria-label={t.hardware.title}
        className="mt-6 flex flex-wrap items-center gap-2 sm:mt-8 sm:gap-2.5"
      >
        {hardwareCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative inline-flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
                isSelected
                  ? 'text-slate-950 dark:text-white'
                  : 'liquid-pill text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="hardwareFilterPill"
                  transition={{ type: 'spring', stiffness: 450, damping: 34 }}
                  className="absolute inset-0 -z-10 rounded-2xl bg-white shadow-md ring-1 ring-slate-900/10 dark:bg-sky-400/25 dark:ring-sky-300/40"
                />
              )}
              <span>{t.hardware.filters[cat.key]}</span>
              <span className="rounded-full bg-slate-900/10 px-2 py-0.5 text-xs font-bold dark:bg-white/15">
                {categoryCounts[cat.id] || 0}
              </span>
            </button>
          );
        })}
      </div>

      {/* Hardware Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item, idx) => (
          <GlassCard
            key={item.id}
            as="article"
            interactive
            onClick={() => setSelectedItem(item)}
            className="group flex cursor-pointer flex-col overflow-hidden"
          >
            {/* Real Photo */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-900/10 bg-slate-950/10 dark:border-white/10">
              <img
                src={assetUrl(item.image)}
                alt={tr(item.name)}
                fetchpriority={idx < 2 ? 'high' : undefined}
                loading={idx >= 2 ? 'lazy' : undefined}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="rounded-full border border-white/25 bg-slate-950/55 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                  {tr(item.shortTag)}
                </span>
              </div>
              <div className="absolute right-3 bottom-3">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-slate-950/60 px-2.5 py-1 font-mono text-[11px] font-semibold text-sky-200 backdrop-blur-md">
                  <History className="h-3 w-3" />
                  {item.history.year}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
                  {tr(item.name)}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {tr(item.summary)}
                </p>

                <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/45 p-3 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-300">
                    {t.hardware.historyBadge}
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs text-slate-700 dark:text-slate-300">
                    {tr(item.history.inventor)}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-900/10 pt-4 dark:border-white/10">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {t.hardware.filters[item.category]}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item);
                  }}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition group-hover:translate-x-0.5 dark:text-sky-300"
                >
                  <span>{t.hardware.detailsBtn}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Native <dialog> Liquid Glass Detail Modal */}
      {selectedItem && (
        <GlassModal
          isOpen
          onClose={() => setSelectedItem(null)}
          title={tr(selectedItem.name)}
          closeLabel={t.hardware.modal.close}
        >
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-900/10 dark:border-white/15">
              <img
                src={assetUrl(selectedItem.image)}
                alt={tr(selectedItem.name)}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                {tr(selectedItem.shortTag)}
              </span>
            </div>

            {/* Role & How it Works */}
            <div className="rounded-2xl border border-slate-900/10 bg-white/55 p-5 dark:border-white/12 dark:bg-white/[0.04]">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                <Sparkles className="h-4 w-4" />
                <span>{t.hardware.modal.roleTitle}</span>
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-200">
                {tr(selectedItem.role)}
              </p>
            </div>

            {/* History & Inventors */}
            <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.06] p-5 dark:border-indigo-400/25 dark:bg-indigo-500/10">
              <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                <History className="h-4 w-4" />
                <span>{t.hardware.modal.historyTitle}</span>
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {tr(selectedItem.history.story)}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-white/60 p-3 dark:bg-slate-950/40">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                    <UserCheck className="h-3.5 w-3.5 text-indigo-500" />
                    <span>{t.hardware.modal.inventors}</span>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-900 dark:text-white">
                    {tr(selectedItem.history.inventor)}
                  </div>
                </div>
                <div className="rounded-xl bg-white/60 p-3 dark:bg-slate-950/40">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                    <Building2 className="h-3.5 w-3.5 text-indigo-500" />
                    <span>{t.hardware.modal.company}</span>
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-900 dark:text-white">
                    {tr(selectedItem.history.company)}
                  </div>
                </div>
                <div className="rounded-xl bg-white/60 p-3 dark:bg-slate-950/40">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                    <Calendar className="h-3.5 w-3.5 text-indigo-500" />
                    <span>{t.hardware.modal.year}</span>
                  </div>
                  <div className="mt-1 font-mono text-sm font-bold text-indigo-700 dark:text-indigo-300">
                    {selectedItem.history.year}
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Specs */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {t.hardware.modal.specsTitle}
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {selectedItem.specs.map((spec, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-900/10 bg-white/55 px-4 py-3 dark:border-white/12 dark:bg-white/[0.04]"
                  >
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {tr(spec.label)}
                    </div>
                    <div className="mt-0.5 font-mono text-sm font-semibold text-slate-900 dark:text-white">
                      {tr(spec.value)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 p-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                <Lightbulb className="h-4 w-4" />
                <span>{t.hardware.modal.factTitle}</span>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                {tr(selectedItem.funFact)}
              </p>
            </div>
          </div>
        </GlassModal>
      )}
    </PageTransition>
  );
}
