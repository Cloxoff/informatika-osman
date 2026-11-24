import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Timer,
  Flame,
  Maximize2,
  Minimize2,
  Monitor,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { quizQuestions } from '../data/quizData';
import { GlassCard } from '../components/GlassCard';
import { PageTransition } from '../components/PageTransition';

const QUESTION_SECONDS = 20;

export function QuizPage() {
  const { tr, t } = useLanguage();

  const [phase, setPhase] = useState('lobby'); // 'lobby' | 'playing' | 'finished'
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_SECONDS);
  const [selectedOption, setSelectedOption] = useState(null); // number | 'timeout' | null
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [projectorXL, setProjectorXL] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentIdx];
  const isAnswered = selectedOption !== null;

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {}
  };

  const startQuiz = useCallback(() => {
    setPhase('playing');
    setCurrentIdx(0);
    setTimeLeft(QUESTION_SECONDS);
    setSelectedOption(null);
    setScore(0);
    setCorrectCount(0);
    setStreak(0);
    setBestStreak(0);
  }, []);

  const handleSelectOption = useCallback(
    (optionIndex) => {
      if (phase !== 'playing' || selectedOption !== null) return;
      setSelectedOption(optionIndex);

      if (optionIndex === currentQuestion.correctIndex) {
        const nextStreak = streak + 1;
        const speedBonus = Math.ceil(timeLeft * 2);
        const streakBonus = Math.min(nextStreak * 15, 60);
        setScore((prev) => prev + 100 + speedBonus + streakBonus);
        setCorrectCount((prev) => prev + 1);
        setStreak(nextStreak);
        setBestStreak((prev) => Math.max(prev, nextStreak));
      } else {
        setStreak(0);
      }
    },
    [phase, selectedOption, currentQuestion, streak, timeLeft]
  );

  const handleNext = useCallback(() => {
    if (currentIdx + 1 >= totalQuestions) {
      setPhase('finished');
    } else {
      setCurrentIdx((prev) => prev + 1);
      setTimeLeft(QUESTION_SECONDS);
      setSelectedOption(null);
    }
  }, [currentIdx, totalQuestions]);

  // Countdown timer
  useEffect(() => {
    if (phase !== 'playing' || isAnswered) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerId);
          setSelectedOption('timeout');
          setStreak(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [phase, isAnswered]);

  // Keyboard shortcuts for Smartboard / Classroom Presenter (1-4, A-D, Enter)
  useEffect(() => {
    if (phase !== 'playing') return;
    const onKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (!isAnswered) {
        const map = { '1': 0, a: 0, '2': 1, b: 1, '3': 2, c: 2, '4': 3, d: 3 };
        if (key in map) {
          e.preventDefault();
          handleSelectOption(map[key]);
        }
      } else if (key === 'enter' || key === ' ') {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [phase, isAnswered, handleSelectOption, handleNext]);

  const timePct = (timeLeft / QUESTION_SECONDS) * 100;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);

  const gradeText =
    accuracy >= 85
      ? t.quiz.results.grades.master
      : accuracy >= 65
      ? t.quiz.results.grades.great
      : accuracy >= 40
      ? t.quiz.results.grades.good
      : t.quiz.results.grades.starter;

  return (
    <PageTransition className={projectorXL ? 'max-w-[88rem]' : 'max-w-7xl'}>
      {/* Top Bar Controls */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="liquid-pill inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
            <Trophy className="h-3.5 w-3.5" />
            <span>{t.quiz.eyebrow}</span>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
            {t.quiz.title}
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
            {t.quiz.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setProjectorXL((prev) => !prev)}
            aria-pressed={projectorXL}
            className={`liquid-pill inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
              projectorXL
                ? 'border-sky-400/60 bg-sky-500/15 text-sky-700 dark:text-sky-200'
                : 'text-slate-700 dark:text-slate-200'
            }`}
          >
            <Monitor className="h-4 w-4" />
            <span>{t.quiz.projectorMode}</span>
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="liquid-pill inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:text-slate-200 dark:hover:text-white"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            <span>{isFullscreen ? t.quiz.fullscreenExit : t.quiz.fullscreenEnter}</span>
          </button>
        </div>
      </div>

      {/* Main Quiz Arena */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {phase === 'lobby' && (
            <motion.div
              key="lobby"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <GlassCard className="p-8 sm:p-12">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-xl shadow-amber-500/30">
                    <Trophy className="h-10 w-10" />
                  </div>
                  <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                    {t.quiz.startTitle}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                    {t.quiz.startDesc}
                  </p>

                  <div className="mt-8 grid gap-3 text-left sm:grid-cols-2">
                    {t.quiz.rules.map((rule, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/55 px-4 py-3.5 dark:border-white/15 dark:bg-white/[0.04]"
                      >
                        <Sparkles className="h-4 w-4 shrink-0 text-sky-500" />
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                          {rule}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={startQuiz}
                    className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-sky-500/30 transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <span>{t.quiz.startBtn}</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {phase === 'playing' && currentQuestion && (
            <motion.div
              key={`q-${currentQuestion.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <GlassCard className="p-6 sm:p-10">
                {/* Classroom HUD */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-2xl bg-slate-900 px-4 py-2 font-mono text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                      {t.quiz.questionCounter} {currentIdx + 1} {t.quiz.of} {totalQuestions}
                    </span>
                    <span className="liquid-pill rounded-2xl px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                      {tr(currentQuestion.topic)}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="liquid-pill flex items-center gap-2 rounded-2xl px-4 py-2">
                      <Trophy className="h-4 w-4 text-amber-500" />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {t.quiz.scoreLabel}:
                      </span>
                      <span className="font-mono text-base font-extrabold text-slate-950 dark:text-white">
                        {score}
                      </span>
                    </div>

                    <div className="liquid-pill flex items-center gap-2 rounded-2xl px-4 py-2">
                      <Flame
                        className={`h-4 w-4 ${
                          streak > 0 ? 'text-orange-500' : 'text-slate-400'
                        }`}
                      />
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {t.quiz.streakLabel}:
                      </span>
                      <span className="font-mono text-base font-extrabold text-orange-600 dark:text-orange-300">
                        {streak}x
                      </span>
                    </div>

                    <div
                      className={`liquid-pill flex items-center gap-2 rounded-2xl px-4 py-2 ${
                        timeLeft <= 5 && !isAnswered
                          ? 'border-rose-500/60 bg-rose-500/15 text-rose-600 dark:text-rose-300'
                          : ''
                      }`}
                    >
                      <Timer className="h-4 w-4" />
                      <span className="font-mono text-base font-extrabold">
                        {timeLeft}
                        {t.quiz.secUnit}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timer Progress Bar */}
                <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-linear ${
                      timeLeft > 10
                        ? 'bg-gradient-to-r from-emerald-400 to-sky-500'
                        : timeLeft > 5
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                        : 'bg-gradient-to-r from-rose-500 to-red-600'
                    }`}
                    style={{ width: `${timePct}%` }}
                  />
                </div>

                {/* Large Projector Question Text */}
                <h2
                  className={`mt-7 font-extrabold leading-snug tracking-tight text-slate-950 dark:text-white ${
                    projectorXL ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl lg:text-3xl'
                  }`}
                >
                  {tr(currentQuestion.question)}
                </h2>

                {/* Wide High-Contrast A / B / C / D Buttons */}
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {currentQuestion.options.map((opt, idx) => {
                    const isCorrect = idx === currentQuestion.correctIndex;
                    const isPicked = selectedOption === idx;

                    let cardStyle =
                      'border-slate-900/15 bg-white/70 text-slate-900 hover:border-sky-500/60 hover:bg-white/95 dark:border-white/20 dark:bg-white/[0.06] dark:text-white dark:hover:border-sky-400/60 dark:hover:bg-white/15';
                    let badgeStyle =
                      'bg-slate-900/10 text-slate-900 dark:bg-white/15 dark:text-white';

                    if (isAnswered) {
                      if (isCorrect) {
                        cardStyle =
                          'border-emerald-500 bg-emerald-500/20 text-emerald-950 shadow-lg shadow-emerald-500/20 dark:border-emerald-400 dark:bg-emerald-500/25 dark:text-white';
                        badgeStyle = 'bg-emerald-500 text-white';
                      } else if (isPicked) {
                        cardStyle =
                          'border-rose-500 bg-rose-500/20 text-rose-950 dark:border-rose-400 dark:bg-rose-500/25 dark:text-white';
                        badgeStyle = 'bg-rose-500 text-white';
                      } else {
                        cardStyle =
                          'border-slate-900/10 bg-white/30 text-slate-500 opacity-60 dark:border-white/10 dark:bg-white/[0.02] dark:text-slate-400';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(idx)}
                        className={`flex w-full items-center gap-4 rounded-2xl border-2 p-5 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                          !isAnswered ? 'cursor-pointer hover:-translate-y-0.5' : 'cursor-default'
                        } ${cardStyle}`}
                      >
                        <span
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-mono text-lg font-extrabold ${badgeStyle}`}
                        >
                          {opt.id}
                        </span>
                        <span
                          className={`flex-1 font-semibold leading-snug ${
                            projectorXL ? 'text-lg sm:text-xl' : 'text-base sm:text-lg'
                          }`}
                        >
                          {tr(opt.text)}
                        </span>
                        {isAnswered && isCorrect && (
                          <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-500" />
                        )}
                        {isAnswered && isPicked && !isCorrect && (
                          <XCircle className="h-6 w-6 shrink-0 text-rose-500" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Feedback & Explanation */}
                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-7 flex flex-col justify-between gap-5 rounded-2xl border p-5 sm:flex-row sm:items-center ${
                        selectedOption === currentQuestion.correctIndex
                          ? 'border-emerald-500/40 bg-emerald-500/15'
                          : 'border-rose-500/40 bg-rose-500/15'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 text-base font-extrabold">
                          {selectedOption === currentQuestion.correctIndex ? (
                            <>
                              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                              <span className="text-emerald-700 dark:text-emerald-300">
                                {t.quiz.correctToast}
                              </span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-5 w-5 text-rose-500" />
                              <span className="text-rose-700 dark:text-rose-300">
                                {selectedOption === 'timeout'
                                  ? t.quiz.timeoutToast
                                  : t.quiz.wrongToast}
                              </span>
                            </>
                          )}
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-800 sm:text-base dark:text-slate-100">
                          <strong className="mr-1.5">{t.quiz.explanationPrefix}</strong>
                          {tr(currentQuestion.explanation)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:bg-white dark:text-slate-950"
                      >
                        <span>
                          {currentIdx + 1 >= totalQuestions
                            ? t.quiz.finishQuiz
                            : t.quiz.nextQuestion}
                        </span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          )}

          {phase === 'finished' && (
            <motion.div
              key="finished"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="p-8 text-center sm:p-12">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-white shadow-2xl shadow-emerald-500/30">
                  <Trophy className="h-12 w-12" />
                </div>

                <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
                  {t.quiz.results.title}
                </h2>
                <p className="mt-2 text-lg font-semibold text-sky-700 dark:text-sky-300">
                  {gradeText}
                </p>

                <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-4">
                  <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 dark:border-white/15 dark:bg-white/[0.05]">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {t.quiz.results.scoreOutOf}
                    </div>
                    <div className="mt-1 font-mono text-3xl font-extrabold text-slate-950 dark:text-white">
                      {score}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 dark:border-white/15 dark:bg-white/[0.05]">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {t.quiz.results.correctCount}
                    </div>
                    <div className="mt-1 font-mono text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                      {correctCount}/{totalQuestions}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 dark:border-white/15 dark:bg-white/[0.05]">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {t.quiz.results.accuracy}
                    </div>
                    <div className="mt-1 font-mono text-3xl font-extrabold text-sky-600 dark:text-sky-400">
                      {accuracy}%
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-900/10 bg-white/60 p-4 dark:border-white/15 dark:bg-white/[0.05]">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {t.quiz.results.bestStreak}
                    </div>
                    <div className="mt-1 font-mono text-3xl font-extrabold text-orange-600 dark:text-orange-400">
                      {bestStreak}x
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={startQuiz}
                  className="mt-9 inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-sky-500/25 transition hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <RotateCcw className="h-5 w-5" />
                  <span>{t.quiz.results.playAgain}</span>
                </button>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
