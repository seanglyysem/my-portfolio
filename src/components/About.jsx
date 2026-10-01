import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="section-container border-t border-theme">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
          About Me
        </h2>
        <p className="text-secondary text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
          A brief introduction to who I am, what I build, and how I approach software development.
        </p>
      </motion.div>

      {/* Narrative */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-5 text-secondary text-base md:text-lg leading-relaxed"
      >
        <p>
          I am a software developer passionate about solving practical problems and creating intuitive digital products. My journey began with core computer science fundamentals, learning algorithms and object-oriented programming, and evolved into full stack web development.
        </p>
        <p>
          I enjoy working across both the frontend and backend — from designing responsive UI layouts to creating reliable REST APIs and structuring database models. I focus on writing clean, readable code and continuously improving my engineering skills through real-world projects.
        </p>
        <p>
          Outside of core application development, I stay curious about emerging developer tools, mobile platforms, and exploring practical AI integrations to streamline software workflows.
        </p>
      </motion.div>
    </section>
  )
}
