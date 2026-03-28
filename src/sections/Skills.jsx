import { useScrollReveal } from '../hooks/useAnimations'

const skillCards = [
  {
    icon: 'campaign',
    iconColor: 'text-primary',
    title: 'Communication',
    dotColor: 'bg-primary',
    items: ['Public Speaking', 'Master of Ceremonies', 'Media Relations', 'Event Management'],
  },
  {
    icon: 'palette',
    iconColor: 'text-secondary',
    title: 'Media & Design',
    dotColor: 'bg-secondary',
    items: ['Canva', 'CapCut', 'Content Strategy', 'Visual Design (Banners & Feeds)'],
  },
  {
    icon: 'computer',
    iconColor: 'text-white',
    title: 'Digital Tools',
    dotColor: 'bg-white',
    items: ['Ms. Word', 'Ms. PowerPoint', 'Ms. Teams', 'ChatGPT / AI Tools'],
  },
]

const languages = [
  { name: 'Indonesian', level: 'Native', width: 'w-full' },
  { name: 'English', level: 'Intermediate', width: 'w-[70%]' },
  { name: 'Japanese', level: 'Intermediate', width: 'w-[55%]' },
]

const swotAnalysis = [
  {
    type: 'Strengths',
    icon: 'bolt',
    color: 'text-primary',
    dotColor: 'bg-primary',
    items: [
      'High Academic Achievement (GPA 3.90/4.00)',
      'Diverse Capabilities (Communication, Design, Logistics)',
      'Multilingual Proficiency (ID, EN, JP)',
      'Strong Leadership & Organizational Adaptability',
    ],
  },
  {
    type: 'Weaknesses',
    icon: 'construction',
    color: 'text-secondary',
    dotColor: 'bg-secondary',
    items: [
      'Currently completing university studies',
      'Early-stage professional career scope',
      'Primarily focused on campus-scoped level projects',
    ],
  },
  {
    type: 'Opportunities',
    icon: 'explore',
    color: 'text-primary',
    dotColor: 'bg-primary',
    items: [
      'Expanding demand for multimedia communication specialists',
      'Global reach potential through multilingual skills',
      'University network for future large-scale projects',
    ],
  },
  {
    type: 'Threats',
    icon: 'warning',
    color: 'text-secondary',
    dotColor: 'bg-secondary',
    items: [
      'Highly competitive design and media industry',
      'Rapidly evolving AI and digital tools ecosystem',
      'High standards required in corporate visual identities',
    ],
  },
]


export default function Skills() {
  const revealRef = useScrollReveal({ y: 30, stagger: 0.15 })

  return (
    <section className="py-32 px-8 bg-surface-container-lowest" id="skills" ref={revealRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div data-reveal>
            <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">
              Capabilities
            </span>
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter">
              Strategic &amp; <br />
              Creative Toolkit.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-neutral-500 text-sm font-body leading-relaxed">
            A multi-disciplinary skill set combining communication expertise, design tools, and foreign language proficiency for high-impact results.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Skill Cards */}
          {skillCards.map((card) => (
            <div
              key={card.title}
              data-reveal
              className="bg-surface-container/60 backdrop-blur-xl p-10 ghost-border hover:bg-surface-container transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className={`material-symbols-outlined text-6xl ${card.iconColor}`}>
                  {card.icon}
                </span>
              </div>
              <h3 className="font-headline text-2xl mb-6 text-on-surface">
                {card.title}
              </h3>
              <ul className="space-y-4 font-body text-on-surface-variant">
                {card.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 ${card.dotColor} rounded-full shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Languages Card */}
          <div
            data-reveal
            className="bg-surface-container/60 backdrop-blur-xl p-10 ghost-border hover:bg-surface-container transition-all duration-500 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-secondary">
                translate
              </span>
            </div>
            <h3 className="font-headline text-2xl mb-6 text-on-surface">
              Languages
            </h3>
            <div className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-xs font-label uppercase tracking-widest mb-2">
                    <span>{lang.name}</span>
                    <span className="text-secondary">{lang.level}</span>
                  </div>
                  <div className="w-full h-[2px] bg-outline-variant/20">
                    <div
                      className={`${lang.width} h-full bg-secondary shadow-[0_0_8px_rgba(0,210,253,0.5)]`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SWOT Section */}
        <div className="mt-32">
          <div data-reveal className="mb-16">
            <span className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-4 block text-center">
              Personal Analysis
            </span>
            <h3 className="font-headline text-4xl font-extrabold tracking-tighter text-center">
              SWOT Matrix.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {swotAnalysis.map((swot) => (
              <div
                key={swot.type}
                data-reveal
                className="bg-surface/40 backdrop-blur-md p-10 outline outline-1 outline-outline-variant/20 hover:outline-outline-variant/50 transition-all duration-500 rounded-sm relative overflow-hidden group"
              >
                {/* Background glow effect on hover */}
                <div className={`absolute -right-20 -bottom-20 w-64 h-64 ${swot.dotColor}/5 rounded-full blur-[80px] group-hover:blur-[60px] transition-all duration-700`} />
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-surface border border-outline-variant/30 flex items-center justify-center`}>
                    <span className={`material-symbols-outlined ${swot.color}`}>
                      {swot.icon}
                    </span>
                  </div>
                  <h4 className="font-headline text-2xl text-on-surface">
                    {swot.type}
                  </h4>
                </div>
                
                <ul className="space-y-4 font-body text-on-surface-variant relative z-10">
                  {swot.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-2 w-1.5 h-1.5 ${swot.dotColor} rounded-full shrink-0`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
