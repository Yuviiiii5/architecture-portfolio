import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: '山谷礼堂',
    location: '云南大理',
    year: '2024',
    category: '文化建筑',
    image: '/valley-chapel.jpg',
  },
  {
    name: '混凝土书屋',
    location: '浙江杭州',
    year: '2023',
    category: '公共建筑',
    image: '/concrete-library.jpg',
  },
  {
    name: '桥间茶室',
    location: '江苏苏州',
    year: '2023',
    category: '商业空间',
    image: '/bridge-teahouse.jpg',
  },
  {
    name: '沙丘瞭望站',
    location: '河北秦皇岛',
    year: '2022',
    category: '观景建筑',
    image: '/dune-tower.jpg',
  },
]

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Title animation
    const titleTween = gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
    })

    // Project cards staggered animation
    const projectTweens = projectRefs.current.map((ref, i) => {
      if (!ref) return null
      return gsap.to(ref, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref,
          start: 'top 85%',
        },
      })
    })

    return () => {
      titleTween.kill()
      projectTweens.forEach((t) => t?.kill())
    }
  }, [])

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative bg-[#fafafa] py-[15vh] px-[clamp(24px,5vw,80px)]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
        <div
          ref={titleRef}
          className="flex items-end justify-between mb-[10vh] pb-8 border-b border-[#1a1a1a]/10"
          style={{ opacity: 0, transform: 'translateY(30px)' }}
        >
          <div>
            <span className="text-[#999] text-xs tracking-[0.15em] uppercase block mb-3">
              Selected Works
            </span>
            <h2
              className="text-[#1a1a1a] font-bold tracking-[-0.02em]"
              style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
            >
              精选作品
            </h2>
          </div>
          <span className="text-[#999] text-sm font-light hidden sm:block">
            01 — 04
          </span>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-[12vh]">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => { projectRefs.current[i] = el }}
              className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
              style={{ opacity: 0, transform: 'translateY(60px)' }}
            >
              {/* Image */}
              <div
                className={`lg:col-span-7 overflow-hidden ${
                  i % 2 === 1 ? 'lg:col-start-6' : ''
                }`}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Info */}
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 lg:text-right' : ''
                }`}
              >
                <span className="text-[#999] text-xs tracking-[0.15em] uppercase block mb-3">
                  {project.category}
                </span>
                <h3
                  className="text-[#1a1a1a] font-bold tracking-[-0.01em] mb-4"
                  style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
                >
                  {project.name}
                </h3>
                <div className="flex items-center gap-4 text-[#999] text-sm font-light">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-[#999]" />
                  <span>{project.year}</span>
                </div>
                <div className="mt-8">
                  <span className="inline-flex items-center gap-2 text-[#1a1a1a] text-sm tracking-wide group-hover:gap-4 transition-all duration-300">
                    查看项目
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
