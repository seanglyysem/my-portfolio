import { motion } from "framer-motion"
import { Code2, Boxes, Server, Layout, Database, Terminal } from "lucide-react"
import { SkillIcon } from "./SkillIcons"
import { skillGroups } from "../data/skills"

const iconMap = {
  languages: Code2,
  frameworks: Boxes,
  backend: Server,
  frontend: Layout,
  databases: Database,
  "devops-tools": Terminal,
}

export default function Skills() {
  return (
    <section id="skills" className="section-container border-t border-theme">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
          Skills &amp; Technologies
        </h2>
        <p className="text-secondary text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
          The programming languages, frameworks, backend services, databases, and developer tools I work with.
        </p>
      </motion.div>

      {/* Clean Equal Horizontal Cards in Requested Order */}
      <div className="space-y-3.5">
        {skillGroups.map((group, idx) => {
          const Icon = iconMap[group.id] || Code2
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-2xl border border-theme bg-surface p-4 sm:p-5 flex flex-col md:flex-row md:items-center gap-3 sm:gap-6 hover:border-theme-strong transition-all duration-200"
            >
              {/* Category Title & Icon */}
              <div className="flex items-center gap-3 md:w-56 shrink-0">
                <div className="p-2 rounded-lg border border-theme bg-surface-panel text-accent-cyan">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-semibold text-primary">
                  {group.title}
                </h3>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap items-center gap-2 flex-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-theme bg-surface-panel/40 text-xs font-medium text-primary hover:bg-surface-panel hover:border-theme-strong transition-colors"
                  >
                    <SkillIcon skillName={skill} size={15} />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
