import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tweens: gsap.core.Tween[] = []

    tweens.push(
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      })
    )

    tweens.push(
      gsap.to(statsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        },
      })
    )

    return () => {
      tweens.forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#1a1a1a] text-white py-[15vh] px-[clamp(24px,5vw,80px)]"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Text */}
          <div
            ref={textRef}
            style={{ opacity: 0, transform: 'translateY(40px)' }}
          >
            <span className="text-white/40 text-xs tracking-[0.15em] uppercase block mb-6">
              About Studio
            </span>
            <h2
              className="font-bold tracking-[-0.02em] mb-10"
              style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
            >
              关于述筑
            </h2>
            <div className="space-y-6 text-white/60 text-base lg:text-lg font-light leading-[1.8]">
              <p>
                述筑建筑事务所由建筑师周述于2020年创立于上海。我们专注于文化、公共与居住空间的设计实践，始终秉持"以纯粹几何重构自然感知"的核心信念。
              </p>
              <p>
                在每一个项目中，我们试图剥离形式的冗余，回归建筑与场地最本真的对话。光线如何穿透墙壁，风如何在空间中流动，重力如何引导人的行走——这些被我们视为设计的真正命题。
              </p>
              <p>
                我们相信，好的建筑不是对自然的征服，而是对自然的谦卑回应。
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div
            ref={statsRef}
            className="flex flex-col justify-end"
            style={{ opacity: 0, transform: 'translateY(40px)' }}
          >
            <div className="grid grid-cols-2 gap-12">
              {[
                { num: '24', label: '建成项目', en: 'Completed' },
                { num: '12', label: '在建项目', en: 'On Site' },
                { num: '8', label: '设计奖项', en: 'Awards' },
                { num: '15', label: '团队成员', en: 'Members' },
              ].map((stat, i) => (
                <div key={i} className="border-t border-white/10 pt-6">
                  <span
                    className="text-white font-bold tracking-[-0.03em] block mb-2"
                    style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
                  >
                    {stat.num}
                  </span>
                  <span className="text-white/40 text-sm block">{stat.label}</span>
                  <span className="text-white/20 text-xs tracking-widest uppercase">
                    {stat.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
