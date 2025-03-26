'use client';

import { motion } from 'framer-motion';
import { CONSTANT } from '@/constants';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeToggleButton from '../@common/ThemeToggleButton';

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-100 w-full bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-foreground">
            <Link href="/">Jiwon Kim</Link>
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav>
              <ul className="flex gap-6">
                {CONSTANT.NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.path}
                      target={item.target}
                      className={`text-sm font-medium transition-colors ${
                        pathname === item.path
                          ? 'text-primary'
                          : 'text-foreground'
                      }`}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeToggleButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggleButton />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 cursor-pointer">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden">
          <nav className="py-4">
            <ul className="flex flex-col gap-4">
              {CONSTANT.NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    target={item.target}
                    className={`text-lg block font-medium transition-colors ${
                      pathname === item.path
                        ? 'text-primary'
                        : 'text-foreground'
                    }`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
