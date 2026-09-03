import { motion } from "framer-motion"
import { GraduationCap, Briefcase, BookOpen, Code } from "lucide-react"

const milestones = [
  {
    icon: BookOpen,
    period: "2022",
    title: "High School Graduation",
    description:
      "Graduated high school with a strong passion for technology and computing, laying the foundation for higher education in software engineering.",
  },
  {
    icon: GraduationCap,
    period: "2023 – 2026",
    title: "University Studies in Computer Science",
    description:
      "Pursuing a Bachelor's degree in Computer Science. Studying core fundamentals including algorithms, data structures, object-oriented programming, software engineering, and database systems.",
  },
  {
    icon: Briefcase,
    period: "May 11 – Aug 11, 2026",
    title: "Digital Marketing Internship",
    description:
      "Completed a digital media and marketing internship, managing end-to-end content production, creative media storytelling, and post-production workflows.",
    tasks: ["Content Research", "Script Writing", "Video Shooting", "Video Editing"],
  },
  {
    icon: Code,
    period: "Aug 20, 2026 – Present",
    title: "Full Stack Developer Internship",
    description:
      "Actively developing full-stack web applications, engineering responsive user interfaces, implementing backend endpoints, and collaborating on software features.",
    tasks: ["React", "Node.js", "REST APIs", "Full Stack Development"],
  },
]

export default function Journey() {
  return (
    <section id="journey" className="section-container border-t border-theme">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
          Education &amp; Experience
        </h2>
        <p className="text-secondary text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
          My academic path through computer science studies and practical industry experience.
        </p>
      </motion.div>

      {/* Clean Timeline */}
      <div className="space-y-4">
        {milestones.map((m, idx) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="rounded-2xl border border-theme bg-surface p-6 flex flex-col sm:flex-row sm:items-start gap-4 hover:border-theme-strong transition-colors"
          >
            <div className="p-2.5 rounded-xl border border-theme bg-surface-panel text-accent-cyan shrink-0 self-start">
              <m.icon size={18} />
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-primary">
                  {m.title}
                </h3>
                <span className="text-xs font-mono font-medium text-accent-cyan px-2.5 py-0.5 rounded bg-surface-panel border border-theme">
                  {m.period}
                </span>
              </div>
              <p className="text-sm text-secondary leading-relaxed pt-1">
                {m.description}
              </p>

              {/* Tasks / Skills Tags */}
              {m.tasks && (
                <div className="flex flex-wrap gap-1.5 pt-2.5">
                  {m.tasks.map((task) => (
                    <span
                      key={task}
                      className="px-2.5 py-0.5 rounded text-xs font-mono text-secondary bg-surface-panel border border-theme"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
