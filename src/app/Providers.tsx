'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {children}
      </div>
    </NextThemesProvider>
  );
}
