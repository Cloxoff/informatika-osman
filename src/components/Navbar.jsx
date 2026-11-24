import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Cpu, Code2, Newspaper, Trophy, Home } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: '/', label: t.nav.home, icon: Home },
    { path: '/hardware', label: t.nav.hardware, icon: Cpu },
    { path: '/languages', label: t.nav.languages, icon: Code2 },
    { path: '/news', label: t.nav.news, icon: Newspaper },
    { path: '/quiz', label: t.nav.quiz, icon: Trophy },
  ];

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className="liquid-glass liquid-nav mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-2xl px-2.5 py-2 sm:px-3.5 sm:py-2.5"
      >
        {/* Left: Pulsing GITHUB Pages Online Badge */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          title={t.nav.onlineLabel}
          className="liquid-pill group inline-flex shrink-0 items-center gap-2 rounded-xl px-2.5 py-1.5 transition hover:border-emerald-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:gap-2.5 sm:px-3"
        >
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute hidden h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75 sm:inline-flex" />
            <span className="relative inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
          </span>
          <span className="text-[11px] font-extrabold tracking-wide text-slate-900 sm:text-xs dark:text-white">
            {t.nav.githubPages}
          </span>
        </Link>

        {/* Center: Desktop Route Links */}
        <ul className="hidden min-w-0 flex-nowrap items-center justify-center gap-0.5 xl:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`relative inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isActive
                      ? 'text-slate-950 dark:text-white'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-xl bg-white/80 shadow-sm ring-1 ring-white/90 dark:bg-white/15 dark:ring-white/25"
                    />
                  )}
                  <Icon className="h-3.5 w-3.5 shrink-0 opacity-80" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Right: RU | TM Switcher + Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label="Language switcher"
            className="liquid-pill inline-flex items-center rounded-xl p-0.5"
          >
            {['ru', 'tm'].map((code) => {
              const selected = lang === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={selected}
                  className={`relative rounded-[10px] px-2.5 py-1 text-xs font-bold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    selected
                      ? 'text-slate-950 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="langPill"
                      transition={{ type: 'spring', stiffness: 460, damping: 34 }}
                      className="absolute inset-0 -z-10 rounded-[10px] bg-white shadow-sm ring-1 ring-slate-900/5 dark:bg-sky-400/25 dark:ring-sky-300/35"
                    />
                  )}
                  {code.toUpperCase()}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? t.nav.switchToLight : t.nav.switchToDark}
            title={isDark ? t.nav.switchToLight : t.nav.switchToDark}
            className="liquid-pill inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 transition hover:scale-105 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:text-amber-300 dark:hover:text-amber-200"
          >
            <motion.span
              key={isDark ? 'sun' : 'moon'}
              initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="inline-flex"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4 text-indigo-600" />}
            </motion.span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
            className="liquid-pill inline-flex h-9 w-9 items-center justify-center rounded-xl text-slate-700 xl:hidden dark:text-slate-200"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="liquid-glass-strong mx-auto mt-2 max-w-7xl rounded-2xl p-2 xl:hidden"
          >
            <ul className="grid gap-1 sm:grid-cols-2 md:grid-cols-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2.5 rounded-xl px-3.5 py-3 text-sm font-medium transition ${
                        isActive
                          ? 'bg-sky-500/15 text-sky-700 ring-1 ring-sky-400/30 dark:bg-sky-400/20 dark:text-sky-200'
                          : 'text-slate-700 hover:bg-white/40 dark:text-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
