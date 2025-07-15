'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Sun, Moon } from 'lucide-react'

export function Navigation() {
  const [darkMode, setDarkMode] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }



  return (
    <nav className="px-4 sm:px-6 lg:px-8 h-8 pt-4">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link 
            href="/"
            className={`text-near-black dark:text-off-white hover:text-cornflower relative overflow-hidden before:absolute before:left-0 before:right-0 before:top-1 before:bottom-1 before:bg-cornflower before:bg-opacity-20 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-out after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-cornflower after:origin-left after:transition-transform after:duration-200 after:ease-in ${pathname === '/' ? 'after:scale-x-100' : 'after:scale-x-0'}`}
          >
            Home
          </Link>
          <Link 
            href="/inspiration"
            className={`text-near-black dark:text-off-white hover:text-cornflower relative overflow-hidden before:absolute before:left-0 before:right-0 before:top-1 before:bottom-1 before:bg-cornflower before:bg-opacity-20 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-out after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-cornflower after:origin-left after:transition-transform after:duration-200 after:ease-in ${pathname === '/inspiration' ? 'after:scale-x-100' : 'after:scale-x-0'}`}
          >
            Inspiration
          </Link>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="text-near-black dark:text-off-white hover:text-cornflower dark:hover:text-cornflower h-12 w-12"
        >
          <div className="relative w-8 h-8 overflow-hidden">
            <Sun className={`absolute inset-0 h-8 w-8 transition-all duration-500 ease-in-out ${
              darkMode 
                ? 'opacity-0 translate-y-4' // Sun sets down when dark mode activates
                : 'opacity-100 translate-y-0' // Sun rises up when light mode activates
            }`} />
            <Moon className={`absolute inset-0 h-8 w-8 transition-all duration-500 ease-in-out ${
              darkMode 
                ? 'opacity-100 translate-y-0' // Moon rises up when dark mode activates
                : 'opacity-0 translate-y-4' // Moon sets down when light mode activates
            }`} />
          </div>
        </Button>
      </div>
    </nav>
  )
} 