
'use client'

import React from 'react'
import Menuitem from './Menuitem'
import { AiFillHome } from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch'

const Menu = Menuitem as any

export default function Header() {
  return (
  
    <div className="
      border-b-2 border-gray-200 dark:border-gray-800
      bg-white dark:bg-gray-800
      text-gray-900 dark:text-white
    ">
        {/* First div (Menu) */}
        <div className="flex items-center justify-between p-4">
            <Menu title="Home" address="/" Icon={AiFillHome} />
            <Menu title="About" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        
        {/* Second div (Title and Switch) */}
        <div className="flex items-center justify-between px-4 py-2">
            <header className="flex items-center justify-start">
              <h1 className="text-2xl font-bold text-green-500">
                My Movie Hub
              </h1>
            </header>
            
            <div className="flex items-center space-x-4">
              <span className="text-xl hidden sm:inline">Welcome to My Movie Hub</span>
              <DarkModeSwitch />
            </div>
        </div>
    </div>
  )
}