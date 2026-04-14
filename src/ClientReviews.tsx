import type { CSSProperties } from 'react'
import { Star, UserRound } from 'lucide-react'

type ReviewTone = 'light' | 'dark' | 'accent'

type Review = {
  id: number
  quote: string
  author: string
  tone: ReviewTone
  floatDelay: string
  desktopStyle: CSSProperties
}

const reviews: Review[] = [
  {
    id: 1,
    quote:
      'Outstanding digital marketing team. They delivered clear strategies, strong campaigns, and measurable results that exceeded expectations.',
    author: 'Amit Mistry',
    tone: 'light',
    floatDelay: '0s',
    desktopStyle: { left: '-14%', bottom: '34px', transform: 'rotate(-8deg)' },
  },
  {
    id: 2,
    quote:
      'Professional, creative, and results-driven team. Our campaigns are performing better than ever thanks to their strategy and execution.',
    author: 'Simonel Lobo',
    tone: 'accent',
    floatDelay: '0.5s',
    desktopStyle: { left: '13%', bottom: '-8px', transform: 'rotate(2.2deg)' },
  },
  {
    id: 3,
    quote:
      'Working with this team was a game-changer. Our brand awareness and engagement improved significantly across social and search channels.',
    author: 'Durva S M',
    tone: 'dark',
    floatDelay: '1.1s',
    desktopStyle: { left: '30%', bottom: '28px', transform: 'rotate(-1.8deg)' },
  },
  {
    id: 4,
    quote:
      'Excellent experience! Their digital marketing expertise helped our brand reach the right audience and boost online visibility. Highly recommend!',
    author: 'Shoyab Khan',
    tone: 'light',
    floatDelay: '0.35s',
    desktopStyle: { left: '47%', bottom: '-6px', transform: 'rotate(-7deg)' },
  },
  {
    id: 5,
    quote:
      'Amazing service! They helped us increase leads and grow our online presence with smart, targeted marketing solutions.',
    author: 'Tejas Khadtare',
    tone: 'light',
    floatDelay: '0.9s',
    desktopStyle: { left: '64%', bottom: '26px', transform: 'rotate(-5.6deg)' },
  },
  {
    id: 6,
    quote:
      'Our small production house was struggling to stand out in a crowded entertainment industry, and our online presence did not reflect quality.',
    author: 'Rohan Mahadik',
    tone: 'accent',
    floatDelay: '0.2s',
    desktopStyle: { left: '83%', bottom: '-10px', transform: 'rotate(2deg)' },
  },
]

const toneClasses: Record<ReviewTone, string> = {
  light: 'bg-[#f4f4f5] text-[#0f1117]',
  dark: 'bg-[#262a31] text-white',
  accent: 'bg-[#ef2f17] text-white',
}

function RatingPill() {
  return (
    <div className="mx-auto mt-6 inline-flex items-center gap-4 rounded-full border border-white/20 bg-black/65 px-5 py-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black">
        <span className="text-4xl font-black leading-none text-white">
          C<span className="text-[#ef2f17]">•</span>
        </span>
      </div>

      <div>
        <p className="flex items-center gap-2 text-lg font-bold leading-none text-white">
          4.9/5
          <span className="flex items-center gap-0.5 text-[#ef2f17]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={14} fill="currentColor" strokeWidth={1.5} />
            ))}
          </span>
        </p>
        <p className="mt-1 text-base font-medium text-white/60">Based on 24 reviews on Clutch</p>
      </div>
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const avatarTone = review.tone === 'dark' ? 'bg-white text-black' : 'bg-black text-white'

  return (
    <article
      className={`client-review-card pointer-events-auto w-[320px] border-[4px] border-black px-6 py-7 shadow-[0_18px_28px_rgba(0,0,0,0.34)] md:w-[355px] ${toneClasses[review.tone]}`}
      style={{ animationDelay: review.floatDelay }}
    >
      <p className="min-h-[180px] text-[1.18rem] font-medium leading-[1.34]">{review.quote}</p>

      <div className="mt-6 flex items-center gap-3">
        <span className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${avatarTone}`}>
          <UserRound size={22} />
        </span>
        <p className="text-[1.95rem] font-bold leading-none tracking-tight">{review.author}</p>
      </div>
    </article>
  )
}

export default function ClientReviews() {
  return (
    <section className="client-reviews-section relative overflow-hidden py-24 md:py-32">
      <div className="client-reviews-noise pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute inset-0">
        <div className="client-globe-core" />
        <div className="client-globe-orbit" />
        <div className="client-globe-orbit client-globe-orbit--inner" />
      </div>

      <div className="relative mx-auto w-full max-w-[1720px] px-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[960px] rounded-[38px] border border-white/10 bg-black/35 px-4 pb-44 pt-14 shadow-[0_16px_80px_rgba(0,0,0,0.65)] backdrop-blur-[1px] md:px-10 md:pb-56 md:pt-16">
          <h2 className="text-center text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            Client Reviews
          </h2>

          <RatingPill />
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-4 md:hidden">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="relative -mt-24 hidden h-[420px] md:block">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="client-review-shell absolute"
              style={review.desktopStyle}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
