import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { GitHubIcon } from "./BrandIcons"
import { projects } from "../data/projects"

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
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="rounded-2xl border border-theme bg-surface overflow-hidden flex flex-col hover:border-theme-strong transition-all duration-200"
          >
            {/* Image Preview */}
            <div className="h-48 bg-surface-panel relative overflow-hidden border-b border-theme">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center p-6 text-center">
                  <span className="text-sm font-medium text-secondary">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
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
                {project.demo !== "#" && (
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

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs"
                  >
                    <GitHubIcon size={14} />
                    <span>GitHub</span>
                  </a>
                )}

                {project.github === "#" && project.demo === "#" && (
                  <span className="text-xs text-subtle font-mono">
                    In progress
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
