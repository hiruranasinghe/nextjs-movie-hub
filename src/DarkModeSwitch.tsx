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
    <div>
      {theme === 'dark' ? (
        <MdLightMode
          className="cursor-pointer text-2xl hover:text-amber-300 transition-colors duration-300"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MdDarkMode
          className="cursor-pointer text-2xl hover:text-amber-300 transition-colors duration-300"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  )
}
