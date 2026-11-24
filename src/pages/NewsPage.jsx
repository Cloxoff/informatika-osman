import { useState } from 'react';
import { Newspaper, Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { newsArticles } from '../data/newsData';
import { GlassCard } from '../components/GlassCard';
import { GlassModal } from '../components/GlassModal';
import { PageTransition } from '../components/PageTransition';
import { assetUrl } from '../utils/assetUrl';

export function NewsPage() {
  const { tr, t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <PageTransition>
      <div className="max-w-3xl">
        <div className="liquid-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
          <Newspaper className="h-3.5 w-3.5" />
          <span>{t.news.eyebrow}</span>
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          {t.news.title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {t.news.subtitle}
        </p>
      </div>

      {/* Editorial Grid of 6 News Cards */}
      <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsArticles.map((article, idx) => (
          <GlassCard
            key={article.id}
            as="article"
            interactive
            onClick={() => setSelectedArticle(article)}
            className="group flex cursor-pointer flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-900/10 dark:border-white/10">
              <img
                src={assetUrl(article.image)}
                alt={tr(article.title)}
                fetchpriority={idx < 2 ? 'high' : undefined}
                loading={idx >= 2 ? 'lazy' : undefined}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
              <span
                className={`absolute top-3 left-3 rounded-full bg-gradient-to-r ${article.categoryColor} px-3 py-1 text-[11px] font-bold text-white shadow-md`}
              >
                {tr(article.category)}
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {tr(article.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {tr(article.readTime)}
                  </span>
                </div>

                <h2 className="mt-3 text-lg font-bold leading-snug tracking-tight text-slate-950 dark:text-white">
                  {tr(article.title)}
                </h2>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {tr(article.excerpt)}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-900/10 pt-4 dark:border-white/10">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedArticle(article);
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition group-hover:translate-x-1 dark:text-sky-300"
                >
                  <span>{t.news.readMore}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <GlassModal
          isOpen
          onClose={() => setSelectedArticle(null)}
          title={tr(selectedArticle.title)}
          closeLabel={t.news.closeArticle}
        >
          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-slate-900/10 dark:border-white/15">
              <img
                src={assetUrl(selectedArticle.image)}
                alt={tr(selectedArticle.title)}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <span
                className={`absolute bottom-3 left-3 rounded-full bg-gradient-to-r ${selectedArticle.categoryColor} px-3.5 py-1 text-xs font-bold text-white shadow-md`}
              >
                {tr(selectedArticle.category)}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-sky-500" />
                {tr(selectedArticle.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-emerald-500" />
                {tr(selectedArticle.readTime)}
              </span>
            </div>

            <div className="space-y-4">
              {(tr(selectedArticle.content) || []).map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-200"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                {t.news.takeawaysTitle}
              </h2>
              <ul className="mt-3 space-y-2.5">
                {selectedArticle.keyTakeaways.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{tr(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassModal>
      )}
    </PageTransition>
  );
}
