import { motion } from "framer-motion"
import { ArrowRight, Mail, Download } from "lucide-react"

const terminalLines = [
  { text: "> npm run build-future", className: "text-[#06b6d4]" },
  { text: "> Building projects...", className: "text-[#3b82f6]" },
  { text: "> Learning algorithms...", className: "text-[#a855f7]" },
  { text: "> Deploying ideas...", className: "text-primary" },
]

function GlowingOrb({ style, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={style}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 md:pt-32 overflow-hidden"
    >
      <GlowingOrb
        className="w-72 h-72 top-20 -left-20"
        style={{ backgroundColor: "var(--theme-orb-1)" }}
        delay={0}
      />
      <GlowingOrb
        className="w-96 h-96 top-40 right-0"
        style={{ backgroundColor: "var(--theme-orb-2)" }}
        delay={2}
      />
      <GlowingOrb
        className="w-64 h-64 bottom-20 left-1/3"
        style={{ backgroundColor: "var(--theme-orb-3)" }}
        delay={4}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent-cyan text-sm md:text-base font-mono mb-4 tracking-wider"
            >
              &lt; Hello World /&gt;
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary"
            >
              Hi, I&apos;m Seangly{" "}
              <span className="gradient-text block sm:inline">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              I build projects, learn new technologies, and turn ideas into
              practical software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                Contact
              </a>
              {/* <a href="#" download="#" className="btn-secondary"></a> */}

              <a href="#" className="btn-secondary">
                <Download size={18} />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden glow-cyan">
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-theme"
                style={{ backgroundColor: "var(--theme-terminal-header)" }}
              >
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-xs text-subtle font-mono">
                  lyshii@dev ~ terminal
                </span>
              </div>

              <div className="p-5 md:p-6 font-mono text-sm md:text-base space-y-2 min-h-[180px]">
                {terminalLines.map((line, i) => (
                  <motion.div
                    key={line.text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.4 }}
                    className="text-secondary"
                  >
                    <span className={line.className}>{line.text}</span>
                    {i === terminalLines.length - 1 && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-2 h-4 bg-accent-blue ml-1 align-middle"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -inset-4 rounded-3xl border border-theme -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
