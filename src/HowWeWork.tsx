type ProcessStep = {
  id: string
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    id: '01',
    title: 'DISCOVER',
    description:
      'We explore your market deeply to reveal insights that guide direction and sharpen brand clarity.',
  },
  {
    id: '02',
    title: 'STRATEGIZE',
    description:
      'We build sharp, scalable plans shaped by insight, creativity, and commercial sense.',
  },
  {
    id: '03',
    title: 'CREATE',
    description:
      'Design, messaging, and campaigns come alive, tailored to your voice and built for performance.',
  },
  {
    id: '04',
    title: 'OPTIMIZE',
    description:
      'We monitor, test, and refine continuously so your brand grows stronger with every cycle.',
  },
]

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#f1f1f1] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#22242a]">
              <span className="h-2 w-2 rounded-full bg-[#ef2f17]" />
              How We Work
            </p>

            <h2 className="text-[4.4rem] font-black uppercase leading-[0.86] tracking-tight text-[#0d0f14] md:text-[6.5rem]">
              OUR
              <br />
              PROCESS
            </h2>
          </div>

          <div className="relative pb-10 lg:pb-[44vh]">
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <article
                  key={step.id}
                  className="bg-[#ececf0] p-8 md:p-12 lg:sticky lg:top-24"
                  style={{ zIndex: index + 1 }}
                >
                  <div className="mb-12 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#ef2f17] text-4xl font-black italic text-white md:h-18 md:w-18">
                    {step.id}
                  </div>

                  <h3 className="text-4xl font-black uppercase leading-tight tracking-tight text-[#111318] md:text-5xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-xl leading-relaxed text-[#2a2d34]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
