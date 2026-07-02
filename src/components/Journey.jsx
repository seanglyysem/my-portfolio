import { motion } from "framer-motion"
import { GraduationCap, Globe, Rocket } from "lucide-react"

const timeline = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    description:
      "Studying programming, software development, algorithms, and computer science fundamentals.",
    colorFrom: "#3b82f6",
    colorTo: "#06b6d4",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building frontend & backend projects using React, Node.js, and modern web technologies.",
    colorFrom: "#06b6d4",
    colorTo: "#a855f7",
  },
  {
    icon: Rocket,
    title: "Project Practice",
    description:
      "Creating real full stack projects to improve coding skills and build a strong portfolio.",
    colorFrom: "#a855f7",
    colorTo: "#3b82f6",
  },
]

export default function Journey() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 section-glow-purple pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-xl">
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                <div
                  className="absolute left-3.5 md:left-5.5 top-6 w-5 h-5 rounded-full border-4 border-surface z-10"
                  style={{ background: `linear-gradient(135deg, ${item.colorFrom}, ${item.colorTo})` }}
                />

                <div className="glass glass-hover rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `linear-gradient(135deg, ${item.colorFrom}, ${item.colorTo})` }}
                    >
                      <item.icon size={20} className="text-white shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-secondary text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
