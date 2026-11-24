import { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LiquidBackground } from './components/LiquidBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { HardwarePage } from './pages/HardwarePage';
import { LanguagesPage } from './pages/LanguagesPage';
import { NewsPage } from './pages/NewsPage';
import { QuizPage } from './pages/QuizPage';

function ScrollAndTitleManager() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const titleMap = {
      '/': t.nav.home,
      '/hardware': t.nav.hardware,
      '/languages': t.nav.languages,
      '/news': t.nav.news,
      '/quiz': t.nav.quiz,
    };
    const pageName = titleMap[pathname] || t.nav.home;
    document.title = `${pageName} — ${t.siteTitleSuffix}`;
  }, [pathname, t]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.16, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/hardware" element={<HardwarePage />} />
          <Route path="/languages" element={<LanguagesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <LanguageProvider>
          <HashRouter>
            <ScrollAndTitleManager />
            <div className="relative flex min-h-screen flex-col">
              <LiquidBackground />
              <Navbar />
              <div className="flex-1">
                <AnimatedRoutes />
              </div>
              <Footer />
            </div>
          </HashRouter>
        </LanguageProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}
