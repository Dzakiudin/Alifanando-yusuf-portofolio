import { useScrollReveal } from '../hooks/useAnimations'

const experiences = [
  {
    period: 'March 2025 — Present',
    company: 'Yuktalk Community',
    role: 'Community Member',
    roleColor: 'text-primary',
    dotColor: 'bg-primary',
    dotGlow: 'shadow-[0_0_15px_#e0b6ff]',
    description:
      'Contributed to the Yuktalk community, an off-campus organization focused on event and seminar planning.',
    side: 'left',
  },
  {
    period: '2025 — 2026',
    company: 'Media & Information Office (KMI)',
    role: 'Junior Staff',
    roleColor: 'text-secondary',
    dotColor: 'bg-secondary',
    dotGlow: 'shadow-[0_0_15px_#a2e7ff]',
    description:
      'Responsible for managing media platforms (Instagram) and ensuring the effective dissemination of information. Actively contributing to the Media and Information Department.',
    side: 'right',
  },
  {
    period: '2025',
    company: 'JASS (Job & Scholarship Seminar)',
    role: 'PDD Division',
    roleColor: 'text-primary',
    dotColor: 'bg-primary',
    dotGlow: 'shadow-[0_0_15px_#e0b6ff]',
    description:
      'Conceptualized and designed engaging Instagram feed content to promote event visibility and increase participant engagement.',
    side: 'left',
  },
  {
    period: '2025',
    company: 'STUDYEAY Event (SDN 1 Kalisidi)',
    role: 'Logistics & Master of Ceremonies',
    roleColor: 'text-secondary',
    dotColor: 'bg-secondary',
    dotGlow: 'shadow-[0_0_15px_#a2e7ff]',
    description:
      'Served as MC, managing event flow and engaging young participants. Also managed procurement and distribution of event supplies as Logistics Coordinator.',
    side: 'right',
  },
  {
    period: '2025',
    company: 'AspiraLink',
    role: 'PDD Division — Visual Designer',
    roleColor: 'text-white',
    dotColor: 'bg-white',
    dotGlow: 'shadow-[0_0_15px_rgba(255,255,255,0.5)]',
    description:
      'Designed and produced banners for the event.',
    side: 'left',
  },
  {
    period: '2024',
    company: 'LKMM-PD',
    role: 'PDD Division — Visual Designer',
    roleColor: 'text-primary',
    dotColor: 'bg-primary',
    dotGlow: 'shadow-[0_0_15px_#e0b6ff]',
    description:
      'Designed and produced banners for the Leadership Training program.',
    side: 'right',
  },
  {
    period: '2025',
    company: 'Research School',
    role: 'Logistics Division',
    roleColor: 'text-secondary',
    dotColor: 'bg-secondary',
    dotGlow: 'shadow-[0_0_15px_#a2e7ff]',
    description:
      'Responsible for equipment preparation, inventory, and technical setup to ensure smooth session execution.',
    side: 'left',
  },
]

const education = [
  {
    period: 'January 2025 — Present',
    institution: 'Diponegoro University, Semarang',
    detail: 'Vocational Faculty, Applied Foreign Language',
    extra: 'GPA 3.90 / 4.00',
  },
  {
    period: 'Jul 2021 — Jun 2024',
    institution: 'SMAN 2, Pati',
    detail: 'High School',
    extra: 'Ranked among top 50 students',
  },
  {
    period: 'Jul 2018 — Jun 2021',
    institution: 'SMPN 2, Pati',
    detail: 'Junior High School',
    extra: null,
  },
]

export default function Experience() {
  const revealRef = useScrollReveal({ y: 40, stagger: 0.2 })

  return (
    <section className="py-32 px-8 bg-surface" id="experience" ref={revealRef}>
      <div className="max-w-5xl mx-auto">
        <span
          data-reveal
          className="font-label text-primary tracking-[0.3em] uppercase text-xs mb-4 block text-center"
        >
          The Journey
        </span>
        <h2
          data-reveal
          className="font-headline text-5xl font-extrabold mb-24 tracking-tighter text-center"
        >
          Experience &amp; Education
        </h2>

        {/* Experience Timeline */}
        <div className="space-y-20 relative mb-32">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-20" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              data-reveal
              className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center group"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 w-3 h-3 ${exp.dotColor} rounded-full ${exp.dotGlow} z-10 transition-transform duration-500 group-hover:scale-150`}
              />

              {exp.side === 'left' ? (
                <>
                  <div className="md:w-[45%] pl-8 md:pl-0 md:text-right">
                    <span className="font-label text-xs text-neutral-500 tracking-widest mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="font-headline text-xl text-on-surface">
                      {exp.company}
                    </h3>
                    <p className={`${exp.roleColor} text-sm font-label uppercase tracking-wider mb-4`}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="md:w-[45%] pl-8 md:pl-0 mt-4 md:mt-0">
                    <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-[45%] order-1 md:order-2 pl-8 md:pl-0">
                    <span className="font-label text-xs text-neutral-500 tracking-widest mb-2 block">
                      {exp.period}
                    </span>
                    <h3 className="font-headline text-xl text-on-surface">
                      {exp.company}
                    </h3>
                    <p className={`${exp.roleColor} text-sm font-label uppercase tracking-wider mb-4`}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="md:w-[45%] order-2 md:order-1 pl-8 md:pl-0 mt-4 md:mt-0 md:text-right">
                    <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div>
          <span
            data-reveal
            className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block text-center"
          >
            Education
          </span>
          <h3
            data-reveal
            className="font-headline text-3xl font-extrabold mb-16 tracking-tighter text-center"
          >
            Academic Background
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                data-reveal
                className="bg-surface-container/60 backdrop-blur-xl p-8 ghost-border hover:bg-surface-container transition-all duration-500 group"
              >
                <span className="font-label text-xs text-neutral-500 tracking-widest mb-3 block">
                  {edu.period}
                </span>
                <h4 className="font-headline text-lg text-on-surface mb-2">
                  {edu.institution}
                </h4>
                <p className="font-body text-on-surface-variant text-sm mb-3">
                  {edu.detail}
                </p>
                {edu.extra && (
                  <span className="inline-block font-label text-[10px] uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-sm">
                    {edu.extra}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
