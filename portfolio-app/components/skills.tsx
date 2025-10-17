"use client"

import { useState } from "react"
import { Code2, Database, Cloud, GitBranch, Brain, BarChart } from "lucide-react"

const skillCategories = [
  { id: "programming", label: "Programming", icon: Code2 },
  { id: "mlai", label: "AI & Machine Learning", icon: Brain },
  { id: "data", label: "Data & Analytics", icon: BarChart },
  { id: "backend", label: "Backend & Cloud", icon: Database },
  { id: "git", label: "Git & Collaboration", icon: GitBranch },
]

const skills: Record<string, { name: string; level: number }[]> = {
  programming: [
    { name: "Python", level: 85 },
    { name: "Java", level: 75 },
    { name: "HTML & CSS", level: 80 },
    { name: "PHP", level: 50 },
  ],
  mlai: [
    { name: "Scikit-learn", level: 80 },
    { name: "TensorFlow", level: 70 },
    { name: "PyTorch", level: 75 },
    { name: "Hugging Face Transformers", level: 80 },
  ],
  data: [
    { name: "Pandas", level: 80 },
    { name: "NumPy", level: 75 },
    { name: "Data Visualization", level: 70 },
  ],
  backend: [
    { name: "MySQL", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "Snowflake", level: 65 },
  ],
  git: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 80 },
    { name: "Version Control", level: 85 },
  ],
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>("programming")

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 md:py-24 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Skills & Tech Stack</h2>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as keyof typeof skills)}
                className={`flex items-center gap-3 rounded-lg border p-4 transition-all duration-200 ${
                  activeCategory === category.id
                    ? "border-cyan-500 bg-cyan-500/20 text-cyan-400"
                    : "border-cyan-500/20 bg-slate-700/50 text-gray-300 hover:border-cyan-500/50"
                }`}
              >
                <Icon size={24} />
                <span className="font-bold hidden sm:inline">{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Skills List */}
        <div className="space-y-6">
          {skills[activeCategory].map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <p className="font-medium text-white">{skill.name}</p>
                <p className="text-sm text-gray-400">{skill.level}%</p>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-700">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}