"use client"

import Image from "next/image"

interface HeroProps {
  onCTAClick: () => void
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-[500px] px-4 sm:px-6 lg:px-10 py-16 md:py-24 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/20 p-8 md:p-16">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 opacity-50" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
                Crafting Digital Experiences
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                My name is Shaun Ato Aifoli Esua-Mensah, a Computer Science student at Ashesi University passionate about AI, data, and software innovation.
                I’ve worked on projects from optimizing risk models at FIDO Micro Credit to advancing GPT-4o research with Algoverse AI. 
                As founder of Code Endelea, I’m building an interactive coding platform powered by an AI tutor to make learning more engaging and accessible.
              </p>
              <button
                onClick={onCTAClick}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-cyan-500/50"
              >
                View Case Studies
              </button>
            </div>

            <div className="relative w-full max-w-sm mx-auto">
              <div className="rounded-2xl bg-slate-900/60 backdrop-blur border border-cyan-500/20 p-3 shadow-xl shadow-cyan-900/20">
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-xl overflow-hidden">
                  <Image
                    src="/my_img.jpg"
                    alt="Portrait of Shaun Ato Aifoli Esua-Mensah"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 360px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
