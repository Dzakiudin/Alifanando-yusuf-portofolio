import { useScrollReveal } from '../hooks/useAnimations'

export default function Contact() {
  const revealRef = useScrollReveal({ y: 40, stagger: 0.2 })

  return (
    <section
      className="py-40 px-8 bg-surface-container-low relative overflow-hidden"
      id="contact"
      ref={revealRef}
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-30" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span
          data-reveal
          className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-8 block"
        >
          Inquiries
        </span>
        <h2
          data-reveal
          className="font-headline text-6xl md:text-8xl font-black tracking-tighter mb-12"
        >
          Let&apos;s collaborate.
        </h2>
        <p
          data-reveal
          className="font-body text-xl text-on-surface-variant mb-16 max-w-2xl mx-auto font-light"
        >
          Currently open to projects, creative collaborations, and opportunities. If you have a vision, let&apos;s bring it to life.
        </p>
        <div
          data-reveal
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <a
            className="w-full md:w-auto flex items-center justify-center gap-3 px-12 py-5 bg-on-surface text-surface font-headline text-sm uppercase tracking-widest btn-glow-cyan transition-all duration-500 rounded-sm"
            href="mailto:alifanandosekolah@gmail.com"
          >
            <span className="material-symbols-outlined text-xl">mail</span>
            Email Me
          </a>
          <a
            className="w-full md:w-auto flex items-center justify-center gap-3 px-12 py-5 ghost-border text-on-surface font-headline text-sm uppercase tracking-widest transition-all duration-500 rounded-sm"
            href="https://wa.me/6281326346241"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-xl">chat</span>
            WhatsApp
          </a>
        </div>

        {/* Additional contact info */}
        <div data-reveal className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center text-neutral-500 font-label text-xs uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-primary">mail</span>
            alifanandosekolah@gmail.com
          </span>
          <span className="hidden md:block w-1 h-1 bg-outline-variant/30 rounded-full" />
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-secondary">phone</span>
            +62 813 2634 6241
          </span>
          <span className="hidden md:block w-1 h-1 bg-outline-variant/30 rounded-full" />
          <span className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-on-surface-variant">location_on</span>
            Semarang, Indonesia
          </span>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
    </section>
  )
}
