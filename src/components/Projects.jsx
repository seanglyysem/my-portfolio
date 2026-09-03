import { motion } from "framer-motion"
import {
  ExternalLink,
  LayoutDashboard,
  UserCheck,
  Bot,
  Workflow,
  Layers,
} from "lucide-react"
import { GitHubIcon } from "./BrandIcons"
import { projects } from "../data/projects"

// Icon mappings and themes for each project
const projectMeta = {
  1: {
    icon: LayoutDashboard,
    category: "Personal Utility",
    gradient: "from-blue-500/15 via-cyan-500/10 to-transparent",
    iconBg: "bg-blue-500/10 border-blue-500/30 text-cyan-400",
  },
  2: {
    icon: UserCheck,
    category: "Academic / Enterprise",
    gradient: "from-emerald-500/15 via-teal-500/10 to-transparent",
    iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  },
  3: {
    icon: Bot,
    category: "AI & LLM Integration",
    gradient: "from-purple-500/15 via-pink-500/10 to-transparent",
    iconBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  },
  4: {
    icon: Workflow,
    category: "Automation & DevOps",
    gradient: "from-amber-500/15 via-orange-500/10 to-transparent",
    iconBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  },
  5: {
    icon: Layers,
    category: "Full Stack Architecture",
    gradient: "from-indigo-500/15 via-sky-500/10 to-transparent",
    iconBg: "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
  },
}

export default function Projects() {
  return (
    <section id="projects" className="section-container border-t border-theme">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
          Featured Projects
        </h2>
        <p className="text-secondary text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
          A selection of projects I have built, exploring modern frontend interfaces, backend APIs, and database persistence.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const meta = projectMeta[project.id] || projectMeta[1]
          const IconComp = meta.icon

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="group rounded-2xl border border-theme bg-surface overflow-hidden flex flex-col hover:border-theme-strong transition-all duration-300"
            >
              {/* Interactive Banner: Centered Icon that rolls left and reveals text on hover */}
              <div
                className={`h-40 relative flex items-center justify-center px-6 bg-gradient-to-br ${meta.gradient} bg-surface-panel/40 border-b border-theme overflow-hidden`}
              >
                {/* Subtle Grid Accent Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Unified Interactive Pill / Capsule */}
                <div
                  className={`relative z-10 inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-full border ${meta.iconBg} bg-surface/90 backdrop-blur-sm shadow-sm transition-all duration-300 ease-out group-hover:px-4 group-hover:shadow-md`}
                >
                  {/* Icon that rolls slightly to the left */}
                  <span className="shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-12 group-hover:scale-105">
                    <IconComp size={22} />
                  </span>

                  {/* Category text that unfolds and appears */}
                  <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap text-xs font-mono tracking-wide transition-all duration-300 ease-out group-hover:max-w-[220px] group-hover:opacity-100 text-primary">
                    {meta.category}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-primary mb-2">
                  {project.title}
                </h3>

                <p className="text-secondary text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs font-mono text-secondary bg-surface-panel border border-theme"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-2">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs"
                    >
                      <GitHubIcon size={14} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-theme text-subtle bg-surface-panel/60 cursor-not-allowed select-none"
                      title="Code repository in development"
                    >
                      <GitHubIcon size={13} className="opacity-60" />
                      <span>In Development</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
