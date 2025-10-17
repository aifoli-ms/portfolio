"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        setStatus("error")
        setErrorMessage("Please fill in all fields")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        setStatus("error")
        setErrorMessage("Please enter a valid email address")
        return
      }

      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id"
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id"
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Shaun Ato Aifoli Esua-Mensah", // Your name
      }

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      // Success
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000)
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
      setErrorMessage("Failed to send message. Please try again.")
    }
  }

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me & Contact</h2>
        <p className="text-gray-400 mb-12 max-w-2xl leading-relaxed">
        My name is Shaun Ato Aifoli Esua-Mensah, a Computer Science student at Ashesi University passionate about AI, data, and software innovation. 
        I’ve worked on projects from optimizing risk models at FIDO Micro Credit to advancing GPT-4o research with Algoverse AI.
        
        As founder of Code Endelea, I’m building an interactive coding platform powered by an AI tutor to make learning more engaging and accessible.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-lg border border-cyan-500/30 bg-slate-800 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-cyan-500/30 bg-slate-800 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full rounded-lg border border-cyan-500/30 bg-slate-800 text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
            />
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
              <CheckCircle size={20} />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
              <AlertCircle size={20} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="text-right">
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2 ml-auto"
            >
              {status === "loading" ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Mail size={20} />
                  Submit
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
