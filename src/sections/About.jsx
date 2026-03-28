import { useScrollReveal } from '../hooks/useAnimations'

export default function About() {
  const revealRef = useScrollReveal({ y: 40, stagger: 0.2 })

  return (
    <section className="py-32 px-8 bg-surface" id="about" ref={revealRef}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <span
            data-reveal
            className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            The Specialist
          </span>
          <h2
            data-reveal
            className="font-headline text-5xl font-extrabold mb-8 tracking-tighter"
          >
            Bridging Vision <br />
            with Communication.
          </h2>
          <div data-reveal className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed max-w-xl">
            <p>
              I&apos;m Alifanando Yusuf Suwandono, an Applied Foreign Language student at the Vocational Faculty of Diponegoro University, Semarang. With a GPA of 3.90/4.00, I combine academic excellence with hands-on creative experience.
            </p>
            <p>
              Passionate about communication and foreign languages, I bring a holistic perspective to every project — from event management and media design to public speaking and community leadership. My goal is to ensure every message is not just heard, but felt.
            </p>
          </div>
          <div
            data-reveal
            className="mt-10 grid grid-cols-3 gap-8 border-t border-outline-variant/10 pt-10"
          >
            <div>
              <span className="font-headline text-3xl text-secondary">
                3.90
              </span>
              <p className="font-label text-[10px] uppercase tracking-widest mt-2 text-neutral-500">
                GPA / 4.00
              </p>
            </div>
            <div>
              <span className="font-headline text-3xl text-primary">483</span>
              <p className="font-label text-[10px] uppercase tracking-widest mt-2 text-neutral-500">
                TOEFL Score
              </p>
            </div>
            <div>
              <span className="font-headline text-3xl text-secondary">8+</span>
              <p className="font-label text-[10px] uppercase tracking-widest mt-2 text-neutral-500">
                Events &amp; Orgs
              </p>
            </div>
          </div>
        </div>

        {/* Portrait Image */}
        <div className="order-1 lg:order-2 relative" data-reveal>
          <div className="aspect-[4/5] bg-surface-container-low p-2 group overflow-hidden">
            <img
              alt="Alifanando Yusuf Creative Portrait"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              src="https://files.catbox.moe/t2vl80.png"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-secondary/30" />
        </div>
      </div>
    </section>
  )
}
