import { motion } from "framer-motion"
import { Code, Layout, Wrench, Brain, Server } from "lucide-react"
import { skillCategories } from "../data/skills"
import { getSkillIcon } from "./SkillIcons"

const categoryIconMap = {
  code: Code,
  layout: Layout,
  wrench: Wrench,
  brain: Brain,
  server: Server,
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 section-glow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-xl">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = categoryIconMap[category.icon]
            const isLanguages = category.id === "languages"

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center border border-theme">
                    <CategoryIcon size={20} className="text-accent-cyan" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {category.title}
                  </h3>
                </div>

                <div
                  className={
                    isLanguages
                      ? "grid grid-cols-2 sm:grid-cols-3 gap-3"
                      : "flex flex-wrap gap-2.5"
                  }
                >
                  {category.skills.map((skill, i) => {
                    const SkillIcon = getSkillIcon(skill)

                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIndex * 0.1 + i * 0.05,
                        }}
                        whileHover={{ scale: 1.03 }}
                        className={
                          isLanguages
                            ? "flex flex-col items-center gap-2.5 p-4 rounded-xl chip border border-theme hover:border-accent-cyan/40 transition-all cursor-default"
                            : "inline-flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-secondary chip border border-theme rounded-xl hover:border-accent-cyan/40 hover:text-primary transition-all"
                        }
                      >
                        <div
                          className={
                            isLanguages
                              ? "w-11 h-11 rounded-xl chip border border-theme flex items-center justify-center text-primary"
                              : "w-7 h-7 rounded-lg chip border border-theme flex items-center justify-center shrink-0 text-primary"
                          }
                        >
                          <SkillIcon size={isLanguages ? 22 : 16} />
                        </div>
                        <span
                          className={
                            isLanguages
                              ? "text-xs sm:text-sm text-secondary text-center font-medium leading-tight"
                              : "font-medium"
                          }
                        >
                          {skill}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
