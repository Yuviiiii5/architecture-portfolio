import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[clamp(24px,5vw,80px)] py-6 transition-all duration-700"
      style={{
        backgroundColor: scrolled ? 'rgba(250,250,250,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(26,26,26,0.06)' : '1px solid transparent',
      }}
    >
      <button
        onClick={() => scrollTo('hero')}
        className="text-[#1a1a1a] text-sm tracking-[0.08em] font-medium hover:opacity-60 transition-opacity duration-300"
      >
        述筑
      </button>
      <div className="flex gap-12">
        {[
          { label: '作品', id: 'works' },
          { label: '关于', id: 'about' },
          { label: '过程', id: 'process' },
          { label: '联系', id: 'contact' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-[#1a1a1a] text-sm tracking-[0.04em] font-normal hover:opacity-60 transition-opacity duration-300 relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full" />
          </button>
        ))}
      </div>
    </nav>
  )
}