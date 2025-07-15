'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Sun, Moon } from 'lucide-react'

export function Navigation() {
  const [darkMode, setDarkMode] = useState(false)

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
    <nav className="max-w-3xl mx-auto flex items-center justify-end px-4 sm:px-6 lg:px-8 h-16">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="text-near-black dark:text-off-white hover:text-cornflower dark:hover:text-cornflower h-12 w-12"
      >
        {darkMode ? <Sun className="h-8 w-8" /> : <Moon className="h-8 w-8" />}
      </Button>
    </nav>
  )
} 