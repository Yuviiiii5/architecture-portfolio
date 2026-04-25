import { useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './sections/Hero'
import Statement from './sections/Statement'
import SelectedWorks from './sections/SelectedWorks'
import About from './sections/About'
import DesignProcess from './sections/DesignProcess'
import Footer from './sections/Footer'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <Statement />
        <SelectedWorks />
        <About />
        <DesignProcess />
        <Footer />
      </main>
    </div>
  )
}