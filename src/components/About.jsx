import { motion } from "framer-motion"
import { Lightbulb, Zap, Hammer, GraduationCap } from "lucide-react"
import profilePhoto from "../assets/DSC_9080.jpg"

// ============================================
// EDIT YOUR ABOUT INFO HERE
// ============================================
const aboutInfo = {
  role: "Full Stack Developer",
  paragraphs: [
    "I am a passionate software developer dedicated to solving complex problems and creating impactful digital experiences. My core focus lies in web development, software engineering, and translating innovative ideas into robust, scalable applications.",
    "I thrive on learning new technologies and continuously refining my craft through hands-on project building. My ultimate goal is to architect solutions that are not only highly functional and clean, but also provide an exceptional user experience.",
  ],
}

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Breaking down complex challenges into clear, workable solutions.",
    colorFrom: "#3b82f6",
    colorTo: "#06b6d4",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly picking up new languages, frameworks, and concepts.",
    colorFrom: "#06b6d4",
    colorTo: "#a855f7",
  },
  {
    icon: Hammer,
    title: "Project Builder",
    description: "Turning ideas into real, functional software through hands-on building.",
    colorFrom: "#a855f7",
    colorTo: "#3b82f6",
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
        style={{ backgroundColor: "var(--theme-section-glow-purple)" }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-xl">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto lg:mx-0 max-w-[340px]">
              <div className="absolute -top-3 -left-3 w-full h-full rounded-[10px] border border-accent-cyan/30" />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-[10px] border border-accent-purple/30" />
              <div className="absolute -inset-1 rounded-[10px] bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-purple/20 blur-md" />
              <img
                src={profilePhoto}
                alt="Profile photo"
                className="relative w-full h-auto rounded-[10px] border shadow-2xl"
                style={{
                  borderColor: "var(--theme-photo-border)",
                  boxShadow: `0 25px 50px var(--theme-photo-shadow)`,
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full glass text-sm font-mono text-accent-cyan mb-6">
              <GraduationCap size={16} />
              {aboutInfo.role}
            </div>

            <div className="space-y-5 mb-10">
              {aboutInfo.paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                  className="text-secondary text-base md:text-lg leading-relaxed pl-5 border-l-2 border-accent-blue/40 hover:border-accent-cyan/60 transition-colors"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover rounded-xl p-4 group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `linear-gradient(135deg, ${item.colorFrom}, ${item.colorTo})` }}
                  >
                    <item.icon size={18} className="text-white shrink-0" />
                  </div>
                  <h3 className="text-sm font-semibold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-subtle text-xs leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
