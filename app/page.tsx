'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-body transition-colors duration-200">
      <main className="max-w-3xl mx-auto">
        <div className="text-left">
          <h1 className="font-heading text-4xl text-near-black dark:text-off-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Hello. I'm Anthony.
          </h1>
          <p className="mt-4 text-near-black dark:text-off-white">
            I'm a product builder based in the Berkshires, Massachusetts. 
          </p>
          <p className="mt-4 text-near-black dark:text-off-white">
            Most recently, I spent over a decade at {'\n'}
            <Link href="https://visitdays.com/" className="underline underline-offset-2 decoration-cornflower decoration-2 text-near-black dark:text-off-white hover:text-cornflower relative overflow-hidden before:absolute before:left-0 before:right-0 before:top-1 before:bottom-1 before:bg-cornflower before:bg-opacity-20 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-out" target="_blank" rel="noopener noreferrer">
              VisitDays
            </Link>, an education SaaS company I helped grow from mockups to a platform used by 100+ universities. We built tools for recruiting, enrollment, and virtual events, and helped over a million students find their best-fit college. Before that, I went to school in DC thinking I'd work in politics. I still think a lot about systems, incentives, and how people make decisions, just in a different context.
          </p>
          <p className="mt-4 text-near-black dark:text-off-white">
            A few of my beliefs...
          </p>
            <ul className="list-disc list-inside text-near-black dark:text-off-white">
              <li>Done {'>'}  Perfect</li>
              <li>Skeptical != Cynical</li>
              <li>Say the quiet thing outloud (respectfully).</li>
              <li>Regrets are grudges held against oneself. Don't hold grudges.</li>
            </ul>
            
          <p className="mt-4 text-near-black dark:text-off-white">
            Right now, I'm taking time to reset, learning how to be a dad, exploring my next play as a B2B product leader.
          </p>
          <p className="mt-4 text-near-black dark:text-off-white">
            I play bass, collect punk and metal records, and may be related to Dom DeLuise (though we're not 100% sure). I love helping people and am always up for a coffee chat.
          </p>
        </div>

        <div className="mt-12">  
          <p className="text-left text-near-black dark:text-off-white">
            Send me a note on{' '}
            <Link href="https://www.linkedin.com/in/anthonydeluise" className="underline underline-offset-2 decoration-cornflower decoration-2 text-near-black dark:text-off-white hover:text-cornflower relative overflow-hidden before:absolute before:left-0 before:right-0 before:top-1 before:bottom-1 before:bg-cornflower before:bg-opacity-20 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-out" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
            {' '}or read my mostly vibecoded code on{' '}
            <Link href="https://github.com/adeluise" className="underline underline-offset-2 decoration-cornflower decoration-2 text-near-black dark:text-off-white hover:text-cornflower relative overflow-hidden before:absolute before:left-0 before:right-0 before:top-1 before:bottom-1 before:bg-cornflower before:bg-opacity-20 before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300 before:ease-out" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>.
          </p>
        </div>
      </main>

    </div>
  )
} 