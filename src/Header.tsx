import React from 'react'
import Menuitem from './Menuitem'
import { AiFillHome } from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'

const Menu = Menuitem as any

export default function Header() {
  return (
    <div>
        <div className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <Menu title="Home" address="/" Icon={AiFillHome} />
            <Menu title="About" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        
        <div className="text-2xl font-bold p-4 bg-gray-900 text-green-500">My Movie Hub</div>
        <span className="text-xl hidden sm:inline">Welcome to My Movie Hub</span>
    </div>
  )
}
