import Head from 'next/head'
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
    <div className="min-h-screen bg-custom-bg dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-body transition-colors duration-200">
      <Head>
        <title>Anthony DeLuise ☕️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-3xl mx-auto">
        <div className="text-left">
          <button
            onClick={toggleDarkMode}
            className="absolute top-0 right-0 p-4 rounded-bl-lg bg-slate-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <h1 className="font-header text-4xl text-custom-text dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Anthony DeLuise
          </h1>
          <p className="mt-3 text-base text-custom-primary dark:text-gray-400 sm:mt-5 sm:text-lg">
            Product Person &amp; Designer
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-header text-2xl text-gray-900 dark:text-gray-100">About Me</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
           👋 Hello. I'm Anthony, a product person &amp; designer living in the Berkshires, Massachusetts.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            I'm head of product at {'\n'}
            <Link href="https://visitdays.com/" className="underline underline-offset-2 decoration-slate-400 decoration-2 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100" target="_blank" rel="noopener noreferrer">
              VisitDays
            </Link>
            , where I build tools for higher education admissions and enrollment pros to run campus visits, college fairs and international recruitment events. Experienced to lead others, but not afraid to get my hands dirty. My current interests lie at the confluence of the future of work and education, SaaS, automation and political economy. 
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Outside of work, I'm a bass player, avid collector of punk and metal records, and a budding student of chess. I might be related to Dom DeLuise.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="font-header text-2xl text-gray-900 dark:text-gray-100">Projects</h2>
          <ul className="mt-4 space-y-8">
            <li>
              <Link href="https://apps.apple.com/us/app/4rem-for-sleep/id6450610897" className="underline underline-offset-2 decoration-slate-400 decoration-2 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                  4rem
              </Link>
              <p className="mt-2 text-gray-500 dark:text-gray-400">iOS app &amp; IoT connected device antidote to screen time.</p>
            </li>
          </ul>
        </div>

        <div className="mt-16">  
          <div className="text-left space-x-2">
            <Link href="https://www.linkedin.com/in/anthonydeluise" className="underline underline-offset-2 decoration-slate-400 decoration-2 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </Link>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <Link href="https://www.producthunt.com/@adeluise" className="underline underline-offset-2 decoration-slate-400 decoration-2 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                Product Hunt
            </Link>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <Link href="https://x.com/adeluise" className="underline underline-offset-2 decoration-slate-400 decoration-2 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                Twitter
            </Link>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <Link href="https://github.com/adeluise" className="underline underline-offset-2 decoration-slate-400 decoration-2 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100" target="_blank" rel="noopener noreferrer">
                GitHub
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="mt-20 text-center">
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">&copy; 2024 Anthony DeLuise. All rights reserved. Built with NextJS, Tailwind CSS, Claude &amp; ☕️</p>
      </footer>
    </div>
  )
}
