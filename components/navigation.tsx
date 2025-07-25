'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

// Helper function to get the system preference
const getSystemPreference = (): boolean => {
  // Return false (light mode) during SSR or if matchMedia is not available
  if (typeof window === 'undefined' || !window.matchMedia) {
    return false
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function Navigation() {
  // Initialize to false during SSR to prevent hydration mismatch
  const [darkMode, setDarkMode] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check if the document already has dark class (from our blocking script)
    const hasDarkClass = document.documentElement.classList.contains('dark')
    
    if (hasDarkClass) {
      // If dark class exists, use it
      setDarkMode(true)
    } else {
      // Otherwise, check system preference
      const systemPreference = getSystemPreference()
      setDarkMode(systemPreference)
      
      // Apply the class if system prefers dark mode
      if (systemPreference) {
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  useEffect(() => {
    // Update document class when darkMode state changes
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
    <nav className="px-4 sm:px-6 lg:px-8 py-4">
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
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="text-near-black dark:text-off-white hover:text-cornflower dark:hover:text-cornflower"
        >
          <div className="relative w-6 h-6 overflow-hidden">
            <Sun className={`absolute inset-0 h-6 w-6 transition-all duration-500 ease-in-out ${
              darkMode 
                ? 'opacity-0 translate-y-2' 
                : 'opacity-100 translate-y-0'
            }`} />
            <Moon className={`absolute inset-0 h-6 w-6 transition-all duration-500 ease-in-out ${
              darkMode 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-2'
            }`} />
          </div>
        </button>
      </div>
    </nav>
  )
} 