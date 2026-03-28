import { useMouseParallax } from '../hooks/useAnimations'

export default function Hero() {
  const containerRef = useMouseParallax()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-surface-container-lowest"
    >
      {/* Background Parallax Elements */}
      <div className="absolute inset-0 z-0">
        <div
          data-mouse-parallax="2"
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]"
        />
        <div
          data-mouse-parallax="1.5"
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary-container/10 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(157,78,221,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span
          data-mouse-parallax="0.3"
          className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-6 block opacity-80"
        >
          Portfolio 2025
        </span>
        <h1
          data-mouse-parallax="0.5"
          className="font-headline text-6xl md:text-9xl font-black tracking-tighter text-on-surface leading-[0.9] mb-8"
        >
          Hi, I&apos;m <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Alifanando Yusuf
          </span>
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
          Applied Foreign Language Student &amp; Communication Enthusiast at Diponegoro University, crafting cinematic narratives through media &amp; creative experiences.
        </p>
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
          <a
            className="px-10 py-4 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-headline text-sm uppercase tracking-widest btn-glow-purple transition-all duration-500 rounded-sm"
            href="#work"
            onClick={(e) => handleNavClick(e, '#work')}
          >
            View Work
          </a>
          <a
            className="px-10 py-4 ghost-border text-on-surface font-headline text-sm uppercase tracking-widest transition-all duration-500 rounded-sm"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <span className="material-symbols-outlined text-3xl">
          expand_more
        </span>
      </div>
    </section>
  )
}
