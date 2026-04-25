import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.4,
      ease: 'power3.out',
    })
      .to(
        subtitleRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
        },
        '-=1.0'
      )
      .to(
        lineRef.current,
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.inOut',
        },
        '-=0.6'
      )
      .to(
        scrollRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4'
      )

    // Scroll indicator pulse
    gsap.to(scrollRef.current, {
      y: 8,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] bg-[#fafafa] flex flex-col justify-end overflow-hidden"
    >
      <div className="px-[clamp(24px,5vw,80px)] pb-[12vh]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h1
                ref={titleRef}
                className="text-[#1a1a1a] font-black leading-[1.0] tracking-[-0.03em]"
                style={{
                  fontSize: 'clamp(56px, 10vw, 140px)',
                  opacity: 0,
                  transform: 'translateY(80px)',
                }}
              >
                述筑
              </h1>
              <div
                ref={lineRef}
                className="w-24 h-[2px] bg-[#1a1a1a] mt-6 mb-6 origin-left"
                style={{ transform: 'scaleX(0)', opacity: 0 }}
              />
              <p
                ref={subtitleRef}
                className="text-[#999] text-lg lg:text-xl font-light tracking-wide max-w-md leading-relaxed"
                style={{ opacity: 0, transform: 'translateY(30px)' }}
              >
                以纯粹几何重构自然感知<br />
                <span className="text-sm tracking-widest mt-2 inline-block">Architecture Studio</span>
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-[#999] text-xs tracking-[0.15em] uppercase">Est. 2020 · Shanghai</p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0 }}
      >
        <span className="text-[#999] text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-[#1a1a1a]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[#1a1a1a]" />
        </div>
      </div>
    </section>
  )
}