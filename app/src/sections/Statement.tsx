import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Statement() {
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const tween = gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.kill()
    }
  }, [])

  return (
    <section className="relative bg-[#fafafa] py-[20vh] px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-start gap-8 lg:gap-16">
          <div className="hidden lg:block w-12 h-[1px] bg-[#1a1a1a] mt-4 flex-shrink-0" />
          <p
            ref={textRef}
            className="text-[#1a1a1a] font-light leading-[1.5] tracking-[-0.01em]"
            style={{
              fontSize: 'clamp(24px, 3.5vw, 48px)',
              opacity: 0,
              transform: 'translateY(40px)',
            }}
          >
            我们剥离多余的装饰，让光线、风和重力成为空间的主角。最动人的几何，诞生于对自然最谦卑的模仿。
          </p>
        </div>
      </div>
    </section>
  )
}
