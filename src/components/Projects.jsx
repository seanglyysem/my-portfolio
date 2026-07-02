import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { GitHubIcon } from "./BrandIcons"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl overflow-hidden group flex flex-col"
            >
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.comingSoon ? (
                      <span className="text-2xl font-bold text-white/70 tracking-widest uppercase">
                        Soon
                      </span>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center">
                        <span className="text-2xl font-bold gradient-text">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/25 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github !== "#" ? project.github : undefined}
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel={project.github !== "#" ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
                      project.comingSoon || project.github === "#"
                        ? "glass text-subtle opacity-50 cursor-not-allowed"
                        : "glass glass-hover text-secondary hover:text-primary"
                    }`}
                  >
                    <GitHubIcon size={16} className="github-icon-themed" />
                    GitHub
                  </a>
                  <a
                    href={project.demo !== "#" ? project.demo : undefined}
                    target={project.demo !== "#" ? "_blank" : undefined}
                    rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
                      project.comingSoon || project.demo === "#"
                        ? "glass text-subtle opacity-50 cursor-not-allowed"
                        : "bg-gradient-to-r from-accent-blue/15 to-accent-purple/15 border border-accent-blue/30 text-primary hover:border-accent-cyan/50"
                    }`}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
