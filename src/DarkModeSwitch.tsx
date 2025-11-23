'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)


  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="cursor-pointer text-2xl">
      {theme === 'dark' ? (
        <MdLightMode onClick={() => setTheme('light')} />
      ) : (
        <MdDarkMode onClick={() => setTheme('dark')} />
      )}
    </div>
  )
}
