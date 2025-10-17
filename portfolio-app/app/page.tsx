"use client"

import type React from "react"

import { useState, useRef } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")
  const heroRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    setActiveSection(section)
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      hero: heroRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    }
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 dark">
      <Header onNavigate={scrollToSection} />
      <main className="flex-1">
        <div ref={heroRef}>
          <Hero onCTAClick={() => scrollToSection("projects")} />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
    </div>
  )
}
