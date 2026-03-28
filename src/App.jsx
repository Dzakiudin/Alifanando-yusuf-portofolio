import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  // Initialize Lenis smooth scrolling
  useLenis()

  // Setup GSAP parallax for background glow elements
  useEffect(() => {
    // Multi-layer scroll parallax for decorative elements
    const bgGlows = document.querySelectorAll('[data-parallax-bg]')
    const fgElements = document.querySelectorAll('[data-parallax-fg]')

    bgGlows.forEach((el) => {
      gsap.to(el, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    })

    fgElements.forEach((el) => {
      gsap.to(el, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.8,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
