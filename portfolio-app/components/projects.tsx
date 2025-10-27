"use client"

const projects = [
  {
    id: 1,
    title: "Code Endelea",
    description:
      "An interactive coding education platform that lets students pause lecture videos to write and run code directly within them. Includes Endi, an AI coding tutor built on a scalable system architecture.",
    tech: ["React", "PostgreSQL", "Python"],
    image: "/CodeEndeleaLogo.png",
    website: "https://codeendelea.vercel.app/student",
  },
  {
    id: 2,
    title: "AmbuLink",
    description:
      "AmbuLink is a mobile-first application designed to drastically reduce emergency response times. It allows users to request an ambulance with a single tap, sending their precise location and critical details directly to nearby dispatch centers and responders.",
    tech: ["TypeScript", "JavaScript", "REST API"],
    image: "/AmbuLink.png",
    website: "https://ambu-frontend.vercel.app",
  },
  {
    id: 3,
    title: "Rosetta-PL",
    description:
      "Applied machine learning research conducted under the Algoverse AI Program, testing GPT-4o's reasoning capabilities and achieving 99.89% accuracy on unseen logic problems. Presented at NAACL SRW 2025.",
    tech: ["Python", "PyTorch", "Hugging Face Transformers"],
    image: "/research_paper.png",
    website: "https://arxiv.org/pdf/2505.00001",
  },
]
export default function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block"
            >
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4 bg-slate-800 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-cyan-500/20 backdrop-blur-sm rounded-full p-2">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-sm text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
