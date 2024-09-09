'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image'

import { navItems } from '../constants/index'
import Link from 'next/link'

const Navbar = () => {
  const [mobileDrawerOpen, SetMobileDrawerOpen] = useState(false)

  const toggleNavBar = () => {
    SetMobileDrawerOpen(!mobileDrawerOpen)
  }

  return (
    <nav className="sticky top-0 z-50 py-6 bg-white ">
      <div className="container px-4  mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Link key="/" href="/">
              VIT+
            </Link>
            <span className="text-xl tracking-tighter font-[500] lg:bold-88"></span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <div className="">
              <a
                href="#"
                className="py-2 px-4 border rounded-full caret-blue-400"
              >
                Nous joindre
              </a>
            </div>
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full h-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Nous joindre
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
