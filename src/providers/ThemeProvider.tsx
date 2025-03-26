'use client';

import { Theme } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface IThemeProvider {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || Theme.Light;
    }

    return Theme.Light;
  });

  // 테마 변경 함수
  const applyTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle(
      Theme.Dark,
      newTheme === Theme.Dark
    );
  };

  // 초기 테마 설정
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme(prefersDark ? Theme.Dark : Theme.Light);
    }

    // 시스템 테마 변경 감지
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? Theme.Dark : Theme.Light);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // 초기 로드 후 transition 클래스 추가
    setTimeout(() => {
      document.documentElement.classList.add('theme-transition');
    }, 0);

    return () =>
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  const toggleTheme = () =>
    applyTheme(theme === Theme.Light ? Theme.Dark : Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

export default ThemeProvider;
