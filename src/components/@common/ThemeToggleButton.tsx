'use client';

import useMounted from '@/hooks/useMounted';
import { useTheme } from '@/providers/ThemeProvider';
import { Theme } from '@/types';
import { motion } from 'framer-motion';
import { MoonStar, Sun } from 'lucide-react';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 cursor-pointer"
      onClick={toggleTheme}>
      {theme === Theme.Light ? <MoonStar /> : <Sun />}
    </motion.button>
  );
};

export default ThemeToggleButton;
