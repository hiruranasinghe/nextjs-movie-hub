'use client'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    // 'attribute="class"' tells next-themes to apply the 'dark' class to the <html> element.
    <NextThemesProvider attribute="class" defaultTheme="system">
      {/* CRITICAL FIX: Removed the specific Tailwind classes (bg-white, dark:bg-gray-900, etc.)
        They should be applied globally in layout.tsx for the body.
      */}
      <div> 
        {children}
      </div>
    </NextThemesProvider>
  )
}