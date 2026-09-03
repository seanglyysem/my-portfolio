import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Mail, Copy } from "lucide-react"
import Toast from "./Toast"

export default function Hero() {
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const copyEmail = () => {
    navigator.clipboard.writeText("semseangly303@gmail.com")
    setToastMessage("Email copied to clipboard.")
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-xs font-mono font-medium text-accent-cyan tracking-wide uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary leading-[1.15]"
          >
            Building clean, reliable web applications and digital experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-secondary text-base md:text-lg leading-relaxed max-w-2xl"
          >
            I am a software developer with a strong foundation in React, Node.js, and modern web development. I enjoy turning practical ideas into well-structured, fast, and easy-to-use software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={15} />
            </a>

            <a href="#contact" className="btn-secondary">
              <Mail size={15} />
              <span>Contact Me</span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="btn-secondary cursor-pointer"
              title="Copy Email"
            >
              <Copy size={15} />
              <span>Copy Email</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
