import { useScrollReveal } from '../hooks/useAnimations'

const projects = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFK6kfUdtuDJqaI9j3n3GsZjDS0ub8nmVcL-TWLyoA8oSfor8Ns6jsvrUNCAMr44iUAmjwCEiPy-PxKsf4oaS-EO2HuRQKqXldZ5DbHXrBaYtc8VESz4dIdhSkK41irKb_Md9TkJFmFS0rj5irP5KMthUes2s72FUbioYljw-Dav1ecfujWsuMzxpJRGeZnh65QlcfWyvZ-4cSflNm14V5wzX5mvpni5v_4TxkmMVdoVcyoNgcMv8NMLbIgq3RVNWXR5FVOUSUsED8',
    alt: 'Corporate Branding Design',
    category: 'Graphic Design',
    title: "Corporate Identity 24'",
    accentColor: 'text-primary',
    lineColor: 'bg-primary',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjuMk_B4uAcoNEGRpHXQsjhn-ir_E32oSaLVG1B8TCTswh8C3Yn_OHbyh3kfR93u76kbR4XhG6x75j8TU-KV0QHnryS5P85ak1C3PZ3Bmp1ioFOZ4Agzx6GDSeErxJRjlMoVHiv5013cFPxJemo1Re-oiApr-r5NRuJNAv94xZyITMEalh39OlCuVGXYPfP1aXlOhLEg3w_S33RGihRdBKZtSoRNwe8YJbDW7dedryz9AMvSIVnooYeL8GAgQJPVhyvj3vSncKdRPX',
    alt: 'Event Coverage',
    category: 'Event Documentation',
    title: 'JASS Regional 2021',
    accentColor: 'text-secondary',
    lineColor: 'bg-secondary',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1rmuhrAKN_MAztG3O0wYiczBa43lQeHdf2ZNhirvua8EaBvgsvU1NU6DGbbc3wOpwk2ggaoO3JjI_RpD1sZPr6S7x40poVntfMKgR2XU6dbspePI4jCXh-XPkQZEkuXGY5P2wP6BnbODezdB76GOmnZWOSHKYwTG7LifFaeFFNNhWZoOSIuLYP_1X2k6G3eQcgXBJkpZ6XuoSo1-3_JTKIOazqW3v5ZeLphEQ6wUULrRFqQpBF6WBg8zG_6KoyXPAGMxYpJn3F7bJ',
    alt: 'Content Production',
    category: 'Video Production',
    title: 'Short Film: The Void',
    accentColor: 'text-white',
    lineColor: 'bg-white',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDYAf9rSOmFNOuTY1ndD1up93US0H4bQxKdr46cvQprTnXurSREhka2vs02m4I2cgA5juLEUjA_hgxZ9Yej69BAIX6q2T4cCtuHE-UmDEdYjN3mMZ_TzPgZb3lGb7_V3PwEI0PDnaMAaMYaUNaiyVpgVF6Eh9OT1m-VHChl9kqt4dqR23rU1a5nQE5BTll4qBzU4n4aPVnkR64Iow2MDyKkP_n31USBhgNngDe6pbp0eRVdVFPjmEPaolgtMtqkdIlQnRkDOKIbDM2',
    alt: 'Social Media Strategy',
    category: 'Media Strategy',
    title: 'Yuktalk Rebrand',
    accentColor: 'text-primary',
    lineColor: 'bg-primary',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBISmmuUpZVD7Y-1DixrMHw0AD7hk7dqlkBzm1yTsn-9heryRfSaxG25K92stkyCrmM_J7Dg5yFRPspXFSJ58ccqvy3xbXvfiHkOPZDKcjGa9Yw8Qu-M1Si0ZmNDr5Vqu5z4lBwkoxTyZrH4uG_7DwNt8VdykIyN9JwBuRgdBrRmALlmgkwfqdqlfw5K95lgXmTn08WWOC93AquWGOMGvMaXQNgNQ-wxLuqlU_PMHmf8cXOFQSQB8dtrO6Et-Qn50CXxeYooqm9EZjZ',
    alt: 'Commercial Photography',
    category: 'Photography',
    title: 'Neon Perspectives',
    accentColor: 'text-secondary',
    lineColor: 'bg-secondary',
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo0BHjF0VQjItwnvi9EwN4WmmMpkgnA3Mjc_niDj_PViUm_N75xd-z1mmk1-NdkKfzZ1J2Sb84yHST7JyJjGvbm3i0bboZwqXLtEeDYprilyoRnp64gDDZuTNlW1LBZneqP6-lQ0bUxC7_NtYc0-k6MbOImDfvl1oscJQ_p5LQcQ6rrR4dMooRULBClrSKqp5sVZXfD0uQLtfaSZ9XV98mdhhqZRS03uq82wPLdMTbWMaXPsrTDddeqsKPU9jAxfoO-4EXdMj-fwWS',
    alt: 'Layout Design',
    category: 'Editorial',
    title: 'Visual Narrative Vol.1',
    accentColor: 'text-white',
    lineColor: 'bg-white',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="group relative aspect-square overflow-hidden bg-surface-container cursor-pointer">
      <img
        alt={project.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={project.img}
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-950/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
        <span
          className={`font-label text-[10px] uppercase ${project.accentColor} tracking-[0.2em] mb-2`}
        >
          {project.category}
        </span>
        <h4 className="font-headline text-xl text-on-surface">
          {project.title}
        </h4>
        <div
          className={`h-px w-0 group-hover:w-full ${project.lineColor} transition-all duration-700 mt-4`}
        />
      </div>
    </div>
  )
}

export default function Projects() {
  const revealRef = useScrollReveal({ y: 30, stagger: 0.1 })

  return (
    <section
      className="py-32 px-8 bg-surface-container-lowest"
      id="work"
      ref={revealRef}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-16">
          <div data-reveal>
            <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4 block">
              Selected Works
            </span>
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter">
              Cinematic Projects.
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} data-reveal>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center" data-reveal>
          <button className="font-label text-xs uppercase tracking-[0.4em] text-neutral-500 hover:text-on-surface transition-colors">
            Load more projects
          </button>
        </div>
      </div>
    </section>
  )
}
