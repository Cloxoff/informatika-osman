import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/hardware', label: t.nav.hardware },
    { to: '/languages', label: t.nav.languages },
    { to: '/news', label: t.nav.news },
    { to: '/quiz', label: t.nav.quiz },
  ];

  return (
    <footer className="mt-16 px-3 pb-6 sm:px-6">
      <div className="liquid-glass mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-3xl px-6 py-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span className="text-sm font-bold tracking-wide text-slate-900 dark:text-white">
              {t.nav.githubPages}
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{t.footer.tagline}</p>
        </div>

        <nav aria-label="Footer links" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs font-medium text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-white/40 px-4 py-2 dark:border-white/15 dark:bg-white/5">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {t.footer.madeBy}
          </span>
          <span className="osman-signature cursor-default select-none text-xl leading-none">
            Osman
          </span>
        </div>
      </div>
    </footer>
  );
}
