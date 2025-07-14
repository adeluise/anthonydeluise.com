'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-ecru dark:bg-near-black py-12 px-4 sm:px-6 lg:px-8 font-body transition-colors duration-200">
      <main className="max-w-3xl mx-auto">
        <div className="text-left">
          <button
            onClick={toggleDarkMode}
            className="absolute top-0 right-0 p-4 rounded-bl-lg bg-cornflower/10 dark:bg-cornflower/20 text-near-black dark:text-off-white"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <h1 className="font-heading text-4xl text-near-black dark:text-off-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Anthony DeLuise
          </h1>
          <p className="mt-3 text-base text-cornflower dark:text-cornflower sm:mt-5 sm:text-lg">
            Product Person &amp; Designer
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-2xl text-near-black dark:text-off-white">About Me</h2>
          <p className="mt-4 text-near-black dark:text-off-white">
           👋 Hello. I'm Anthony, a product person &amp; designer living in the Berkshires, Massachusetts.
          </p>
          <p className="mt-4 text-near-black dark:text-off-white">
            
          </p>
          <p className="mt-4 text-near-black dark:text-off-white">
            I'm head of product at {'\n'}
            <Link href="https://visitdays.com/" className="underline underline-offset-2 decoration-cornflower decoration-2 text-cornflower hover:text-near-black dark:text-off-white dark:hover:text-off-white" target="_blank" rel="noopener noreferrer">
              VisitDays
            </Link>
            , where I build tools for higher education admissions and enrollment pros to run campus visits, college fairs and international recruitment events. Experienced to lead others, but not afraid to get my hands dirty. My current interests lie at the confluence of the future of work and education, SaaS, automation and political economy. 
          </p>
          <p className="mt-4 text-near-black dark:text-off-white">
            Outside of work, I'm a bass player, avid collector of punk and metal records, and a budding student of chess. I might be related to Dom DeLuise.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-heading text-2xl text-near-black dark:text-off-white">Projects</h2>
          <ul className="mt-4 space-y-8">
            <li>
              <Link href="https://apps.apple.com/us/app/4rem-for-sleep/id6450610897" className="underline underline-offset-2 decoration-cornflower decoration-2 text-cornflower hover:text-near-black dark:text-off-white dark:hover:text-off-white" target="_blank" rel="noopener noreferrer">
                  4rem
              </Link>
              <p className="mt-2 text-near-black dark:text-off-white">iOS app &amp; IoT connected device antidote to screen time.</p>
            </li>
          </ul>
        </div>

        <div className="mt-16">  
          <div className="text-left space-x-2">
            <Link href="https://www.linkedin.com/in/anthonydeluise" className="underline underline-offset-2 decoration-cornflower decoration-2 text-cornflower hover:text-near-black dark:text-off-white dark:hover:text-off-white" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </Link>
            <span className="text-cornflower dark:text-cornflower">•</span>
            <Link href="https://www.producthunt.com/@adeluise" className="underline underline-offset-2 decoration-cornflower decoration-2 text-cornflower hover:text-near-black dark:text-off-white dark:hover:text-off-white" target="_blank" rel="noopener noreferrer">
                Product Hunt
            </Link>
            <span className="text-cornflower dark:text-cornflower">•</span>
            <Link href="https://x.com/adeluise" className="underline underline-offset-2 decoration-cornflower decoration-2 text-cornflower hover:text-near-black dark:text-off-white dark:hover:text-off-white" target="_blank" rel="noopener noreferrer">
                Twitter
            </Link>
            <span className="text-cornflower dark:text-cornflower">•</span>
            <Link href="https://github.com/adeluise" className="underline underline-offset-2 decoration-cornflower decoration-2 text-cornflower hover:text-near-black dark:text-off-white dark:hover:text-off-white" target="_blank" rel="noopener noreferrer">
                GitHub
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="mt-20 text-center">
        <p className="mt-8 text-sm text-near-black dark:text-off-white">&copy; 2024 Anthony DeLuise. All rights reserved. Built with NextJS, Tailwind CSS, Claude &amp; ☕️</p>
      </footer>
    </div>
  )
} 