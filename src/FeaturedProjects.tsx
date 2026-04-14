import type React from 'react'
import { ArrowUpRight } from 'lucide-react'

type Project = {
  id: number
  title: string
  image: string
  href?: string
  badge?: string
}

const leftColumnProjects: Project[] = [
  {
    id: 1,
    title: 'THE NAIL CLUB',
    image:
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 2,
    title: 'CAMPAIGN DESIGN',
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 3,
    title: 'WEBSITE & SEO',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80',
  },
]

const rightColumnProjects: Project[] = [
  {
    id: 4,
    title: 'BRANDING & PACKAGING',
    image:
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1400&q=80',
    badge: 'View Demo',
  },
  {
    id: 5,
    title: 'BRAND IDENTITY',
    image:
      'https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&w=1400&q=80',
  },
  {
    id: 6,
    title: 'PERFORMANCE MARKETING',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80',
  },
]

function FeaturedProjectCard({
  project,
  tall,
}: {
  project: Project
  tall?: boolean
}) {
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100

    event.currentTarget.style.setProperty('--mx', `${x}%`)
    event.currentTarget.style.setProperty('--my', `${y}%`)
  }

  const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--mx', '50%')
    event.currentTarget.style.setProperty('--my', '50%')
  }

  return (
    <article className="featured-card">
      <a href={project.href ?? '#'} className="group block">
        <div
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className={`featured-media relative overflow-hidden bg-neutral-200 [--mx:50%] [--my:50%] ${
            tall ? 'h-[620px] md:h-[960px]' : 'h-[300px] md:h-[420px]'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="featured-image h-full w-full object-cover"
          />

          <div className="featured-liquid-layer" aria-hidden="true">
            <img
              src={project.image}
              alt=""
              className="featured-liquid-image"
              style={{ filter: 'url(#featured-liquid-filter)' }}
            />
            <span className="featured-liquid-highlight" />
          </div>

          {project.badge ? (
            <div className="absolute right-6 top-6 z-30 flex h-24 w-24 items-center justify-center rounded-full bg-white text-base font-medium text-black">
              {project.badge}
            </div>
          ) : null}
        </div>

        <h3 className="mt-5 text-4xl font-black uppercase tracking-tight text-[#0f1115] md:text-5xl">
          {project.title}
        </h3>
      </a>
    </article>
  )
}

export default function FeaturedProjects() {
  return (
    <section className="relative w-full bg-[#f1f1f1] py-28">
      <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
        <filter id="featured-liquid-filter" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.028"
            numOctaves="2"
            seed="8"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="4s"
              values="0.009 0.028;0.018 0.04;0.01 0.025;0.009 0.028"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="36"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#202127]">
            <span className="h-2 w-2 rounded-full bg-[#ef2f17]" />
            Featured Projects
          </p>

          <a
            href="#"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[#ef2f17] px-6 py-2.5 text-lg font-semibold text-white"
          >
            View all Works
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12">
          <div className="space-y-14">
            {leftColumnProjects.map((project, index) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                tall={index === 0}
              />
            ))}
          </div>

          <div className="space-y-14">
            {rightColumnProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
