import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'nav-solid'
          : 'bg-neutral-950/60 backdrop-blur-xl border-none'
        }`}
    >
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto w-full">
        {/* Logo */}
        <div className="font-headline font-black text-2xl tracking-tighter text-neutral-100">
          ALIFANANDO.
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 font-headline font-bold tracking-tighter uppercase text-sm"
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:alifanandosekolah@gmail.com"
            className="text-purple-500 dark:text-purple-400 hover:text-purple-400 transition-all duration-300 active:scale-95"
            aria-label="Email"
          >
            <span className="material-symbols-outlined">mail</span>
          </a>
          <a
            href="https://wa.me/6281326346241"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 dark:text-purple-400 hover:text-purple-400 transition-all duration-300 active:scale-95"
            aria-label="WhatsApp"
          >
            <span className="material-symbols-outlined">chat</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-neutral-100 transition-all duration-300"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileOpen ? 'close' : 'menu'}
            </span>
          </button>

          <div className="hidden md:block w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20">
            <img
              alt="Alifanando Yusuf Portrait"
              className="w-full h-full object-cover"
              src="https://files.catbox.moe/t2vl80.png"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-t border-outline-variant/10 px-8 py-6">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 font-headline font-bold tracking-tighter uppercase text-sm"
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
