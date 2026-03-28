export default function Footer() {
  const socialLinks = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Email', href: 'mailto:alifanandosekolah@gmail.com' },
  ]

  return (
    <footer className="bg-neutral-950 w-full py-20 px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full border-t border-white/5 pt-12 max-w-7xl mx-auto">
        <div className="font-headline font-bold text-neutral-200 text-xl tracking-tighter">
          ALIFANANDO.
        </div>
        <p className="font-label font-medium text-[10px] tracking-widest uppercase text-neutral-500 text-center">
          © 2025 Alifanando Yusuf Suwandono. Designed for the Cinematic Void.
        </p>
        <div className="flex gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="font-label font-medium text-[10px] tracking-widest uppercase text-neutral-500 hover:text-purple-400 transition-all duration-300 hover:-translate-y-[2px]"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
