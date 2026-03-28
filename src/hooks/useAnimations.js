import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animates children with fade+translateY and stagger when they enter the viewport.
 * @param {Object} options
 * @param {number} options.y - translateY offset in px (default: 30)
 * @param {number} options.duration - animation duration (default: 1)
 * @param {number} options.stagger - stagger delay between children (default: 0.15)
 * @param {string} options.start - ScrollTrigger start position (default: 'top 85%')
 */
export function useScrollReveal({
  y = 30,
  duration = 1,
  stagger = 0.15,
  start = 'top 85%',
} = {}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const children = el.querySelectorAll('[data-reveal]')
    if (children.length === 0) return

    gsap.set(children, { opacity: 0, y })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    })

    tl.to(children, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [y, duration, stagger, start])

  return containerRef
}

/**
 * GSAP parallax effect on scroll for background elements.
 * @param {number} speed - Parallax speed multiplier (default: 0.3)
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === (el.parentElement || el)) st.kill()
      })
    }
  }, [speed])

  return ref
}

/**
 * Mouse parallax effect for hero section elements.
 */
export function useMouseParallax() {
  const containerRef = useRef(null)
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    mouseRef.current = {
      x: (clientX / innerWidth - 0.5) * 2,
      y: (clientY / innerHeight - 0.5) * 2,
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const layers = container.querySelectorAll('[data-mouse-parallax]')

    const animate = () => {
      const { x, y } = mouseRef.current
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.mouseParallax) || 1
        const moveX = x * speed * 15
        const moveY = y * speed * 15
        gsap.to(layer, {
          x: moveX,
          y: moveY,
          duration: 0.8,
          ease: 'power2.out',
        })
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [handleMouseMove])

  return containerRef
}
