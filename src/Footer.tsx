import {
  Aperture,
  ArrowUpRight,
  Camera,
  Globe,
  Send,
} from 'lucide-react'

const quickLinks = ['HOME', 'ABOUT', 'SERVICES', 'BLOG', 'CONTACT US']

export default function Footer() {
  return (
    <footer className="w-full border-t-8 border-black bg-[#f1f1f1] pt-20 md:pt-24">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:gap-16 lg:grid-cols-[1.4fr_1fr_1.1fr] lg:gap-12">
          <div>
            <h2 className="text-[3rem] font-black leading-[0.95] tracking-tight text-[#0d0f14] md:text-[5.2rem]">
              Stay in the
              <br />
              Hive.
              <br />
              Stay <span className="text-[#ef2f17]">BUGZZ</span>
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8e9] text-[#1a1c22] transition hover:bg-[#ef2f17] hover:text-white"
              >
                <Send size={18} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8e9] text-[#1a1c22] transition hover:bg-[#ef2f17] hover:text-white"
              >
                <Aperture size={18} />
              </a>
              <a
                href="#"
                aria-label="Dribbble"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8e9] text-[#1a1c22] transition hover:bg-[#ef2f17] hover:text-white"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8e9] text-[#1a1c22] transition hover:bg-[#ef2f17] hover:text-white"
              >
                <Camera size={18} />
              </a>
            </div>
          </div>

          <div className="pt-2 md:pt-4 lg:pt-8">
            <p className="mb-5 flex items-center gap-3 text-4xl font-semibold tracking-tight text-[#22242a] md:text-5xl">
              <span className="h-2 w-2 rounded-full bg-[#ef2f17]" />
              Quick links
            </p>

            <div className="flex max-w-[460px] flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="inline-flex items-center rounded-full bg-[#ef2f17] px-6 py-2.5 text-lg font-bold text-white transition hover:bg-[#ca230f]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-2 md:pt-4 lg:pt-8">
            <p className="mb-5 flex items-center gap-3 text-4xl font-semibold tracking-tight text-[#22242a] md:text-5xl">
              <span className="h-2 w-2 rounded-full bg-[#ef2f17]" />
              Contact Us
            </p>

            <div className="space-y-4 text-3xl font-medium leading-[1.35] text-[#2a2d34] md:text-[2rem] lg:text-[2.2rem]">
              <p>aiads.digital@gmail.com</p>
              <p>+91 99309 35549</p>
              <p>
                3C Rafiganj | 2nd flor Amazon Office | 
                <br />
                opp SSY College | Aurangabad 
                <br />
               Pin Code- 824125

                <br />
                Bihar, India
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden pt-4">
          <h3 className="text-[3.1rem] font-black uppercase leading-none tracking-tight text-[#0d0f14] sm:text-[4.5rem] md:text-[6.2rem] lg:text-[9.4rem]">
            BRAND
            <span className="ml-3 text-[#ef2f17]">AI</span>
            <span className="text-[#e19aa1]">A</span>
            <span className="text-[#ef2f17]">DS</span>
          </h3>

          <div className="absolute left-[72%] top-0 hidden items-center gap-2 rounded-full bg-transparent text-xl md:flex">
            <span className="text-3xl">🐞</span>
            <ArrowUpRight size={20} className="text-[#ef2f17]" />
          </div>
        </div>

        <p className="pb-6 pt-4 text-center text-2xl font-medium text-[#3d4047] md:text-3xl">
          ©2025 THE BRAND
          <span className="text-[#ef2f17]"> AI</span>
          <span className="text-[#e19aa1]">A</span>
          <span className="text-[#ef2f17]">DS .</span>
        </p>
      </div>
    </footer>
  )
}
