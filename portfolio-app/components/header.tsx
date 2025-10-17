"use client"

import { Github, Linkedin, Mail } from "lucide-react"

interface HeaderProps {
  onNavigate: (section: string) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-slate-900/80 backdrop-blur-md px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="size-6 text-cyan-400">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_319">
                  <rect fill="white" height="48" width="48" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-lg font-bold text-white">Portfolio</h2>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onNavigate("hero")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => onNavigate("projects")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => onNavigate("skills")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/aifoli-ms"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaun-esua-mensah/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:shaunemensah@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
          >
            <Mail size={20} />
          </a>
          <div className="ml-2 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
        </div>
      </div>
    </header>
  )
}
