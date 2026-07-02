import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { GitHubIcon, TelegramIcon } from "./BrandIcons"

// ============================================
// EDIT YOUR CONTACT LINKS HERE
// ============================================
const contactLinks = [
  {
    icon: Mail,
    label: "Gmail",
    value: "Seangly SEM",
    href: "mailto:semseangly303@gmail.com",
    colorFrom: "#ea4335",
    colorTo: "#fbbc05",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "Seangly SEM",
    href: "https://github.com/SeanglySEM",
    colorFrom: "#24292e",
    colorTo: "#57606a",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "Seangly SEM",
    href: "https://t.me/semseanglyy",
    colorFrom: "#2aabee",
    colorTo: "#229ed9",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple mx-auto rounded-full mb-6" />
          <p className="text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            I am open to learning opportunities, collaboration, internships, and
            software development projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`glass glass-hover rounded-2xl p-5 md:p-6 flex items-center gap-4 ${
                  link.href ? "cursor-pointer" : ""
                }`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `linear-gradient(135deg, ${link.colorFrom}, ${link.colorTo})` }}
                >
                  <link.icon size={20} className="text-white shrink-0" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-subtle uppercase tracking-wider mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-sm md:text-base text-primary truncate">
                    {link.value}
                  </p>
                </div>
              </motion.div>
            )

            return link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={link.label}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
