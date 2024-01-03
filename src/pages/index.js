'use client'
import Hero from './Hero.js'
import Header from './Header.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './Preloader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    (

      async () => {

        setTimeout(() => {

          setIsLoading(false);

          document.body.style.cursor = 'default'

          window.scrollTo(0, 0);

        }, 2000)
      }

    )()

  }, [])
  return (
    <main>
      <AnimatePresence mode='wait'>

        {isLoading && <Preloader />}

      </AnimatePresence>
      <Header />
      <Hero />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Contact />
    </main>
  )
}
