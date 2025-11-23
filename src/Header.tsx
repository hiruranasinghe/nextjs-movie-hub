import React from 'react'
import Menuitem from './Menuitem'
import { AiFillHome } from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import DarkModeSwitch from './DarkModeSwitch'

const Menu = Menuitem as any

export default function Header() {
  return (
    <div>
        <div className="flex items-center justify-between p-4 bg-gray-900 text-white">
        
            <Menu title="Home" address="/" Icon={AiFillHome} />
            <Menu title="About" address="/about" Icon={BsFillInfoCircleFill} />
            
        </div>
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
        <span className="text-2xl font-bold "></span>
       <header className="w-full bg-gray-900 p-4 flex items-center justify-start">
      <h1 className="text-2xl font-bold text-green-500">
        My Movie Hub
      </h1>
    </header>
        <DarkModeSwitch />
        </div>
        
        <span className="text-xl hidden sm:inline">Welcome to My Movie Hub</span>
    </div>
  )
}
