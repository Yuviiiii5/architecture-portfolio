import { useState } from 'react'

export default function Footer() {
  const [hoveredEmail, setHoveredEmail] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer
      id="contact"
      className="relative bg-[#1a1a1a] text-white"
    >
      <div className="px-[clamp(24px,5vw,80px)] py-[12vh]">
        <div className="max-w-[1440px] mx-auto">
          {/* Top */}
          <div className="flex flex-col lg:flex-row justify-between gap-16 mb-[8vh]">
            <div>
              <h2
                className="font-bold tracking-[-0.02em] mb-8"
                style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
              >
                开始对话
              </h2>
              <a
                href="mailto:studio@shuzhu-arch.com"
                className="relative inline-block text-lg lg:text-xl font-light tracking-wide group"
                onMouseEnter={() => setHoveredEmail(true)}
                onMouseLeave={() => setHoveredEmail(false)}
              >
                studio@shuzhu-arch.com
                <span
                  className="absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-500 origin-left"
                  style={{
                    width: '100%',
                    transform: hoveredEmail ? 'scaleX(1)' : 'scaleX(0)',
                  }}
                />
              </a>
            </div>

            <div className="flex flex-col lg:items-end gap-8">
              <div className="lg:text-right">
                <p className="text-white/30 text-xs tracking-[0.15em] uppercase mb-2">
                  Location
                </p>
                <p className="text-white/70 text-sm font-light">
                  上海市黄浦区外滩中心<br />
                  33层 述筑建筑事务所
                </p>
              </div>
              <div className="flex gap-8">
                {[
                  { label: '作品', id: 'works' },
                  { label: '关于', id: 'about' },
                  { label: '过程', id: 'process' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs tracking-widest">
              © 2024 述筑建筑事务所
            </p>
            <p className="text-white/20 text-xs tracking-[0.2em] uppercase">
              Shuzhu Architecture Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
