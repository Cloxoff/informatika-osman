import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

function getSystemTheme() {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStoredOverride() {
  try {
    const val = localStorage.getItem('color-scheme');
    return val === 'light' || val === 'dark' ? val : null;
  } catch {
    return null;
  }
}

export function ThemeProvider({ children }) {
  const [override, setOverride] = useState(() => readStoredOverride());
  const [systemTheme, setSystemTheme] = useState(() => getSystemTheme());

  const theme = override ?? systemTheme;

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === 'color-scheme') {
        const next = e.newValue === 'light' || e.newValue === 'dark' ? e.newValue : null;
        setOverride(next);
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  useEffect(() => {
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.content = override ?? 'light dark';
    }
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [override, theme]);

  const toggleTheme = useCallback(() => {
    const currentSys = getSystemTheme();
    const currentRendered = override ?? currentSys;
    const target = currentRendered === 'dark' ? 'light' : 'dark';

    try {
      if (target !== currentSys) {
        localStorage.setItem('color-scheme', target);
        setOverride(target);
      } else {
        localStorage.removeItem('color-scheme');
        setOverride(null);
      }
    } catch {
      setOverride(target !== currentSys ? target : null);
    }
  }, [override]);

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', override, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return ctx;
}
