import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: '场地阅读',
    desc: '深入理解场地的自然特征、人文脉络与气候条件，建立设计的第一直觉。',
    image: '/sketch.jpg',
  },
  {
    num: '02',
    title: '概念生成',
    desc: '从场地精神中提炼核心概念，以草图与模型探索空间的可能性。',
    image: '/concrete-texture.jpg',
  },
  {
    num: '03',
    title: '深化落地',
    desc: '将概念转化为可建造的现实，在材料、节点与施工工艺中保持设计的纯粹性。',
    image: '/construction.jpg',
  },
]

export default function DesignProcess() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const tweens: gsap.core.Tween[] = []

    tweens.push(
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    )

    cardsRef.current.forEach((card, i) => {
      if (!card) return
      tweens.push(
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      )
    })

    return () => {
      tweens.forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#fafafa] py-[15vh] px-[clamp(24px,5vw,80px)]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div
          ref={headerRef}
          className="mb-[8vh] pb-8 border-b border-[#1a1a1a]/10"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <span className="text-[#999] text-xs tracking-[0.15em] uppercase block mb-3">
            Design Process
          </span>
          <h2
            className="text-[#1a1a1a] font-bold tracking-[-0.02em]"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
          >
            设计过程
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el }}
              className="group"
              style={{ opacity: 0, transform: 'translateY(50px)' }}
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex items-baseline gap-4 mb-3">
                <span className="text-[#999] text-xs font-mono tracking-widest">
                  {step.num}
                </span>
                <div className="flex-1 h-[1px] bg-[#1a1a1a]/10" />
              </div>
              <h3 className="text-[#1a1a1a] text-xl font-bold tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-[#999] text-sm leading-[1.8] font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
