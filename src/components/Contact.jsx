import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { GmailIcon, GitHubIcon, LinkedInIcon, TelegramIcon } from "./BrandIcons"
import Toast from "./Toast"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("semseangly303@gmail.com")
    setToastMessage("Email copied to clipboard.")
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:semseangly303@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: "", email: "", message: "" })
    }, 4000)
  }

  const isValid = form.name.trim() && form.email.trim() && form.message.trim()

  return (
    <section id="contact" className="section-container border-t border-theme">
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary">
          Get in Touch
        </h2>
        <p className="text-secondary text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
          I am actively looking for software engineering roles, internships, and opportunities to build impactful software.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Icon-Only Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-primary">
              Direct Channels
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Feel free to connect directly through any platform or send me an email.
            </p>

            {/* Icon-Only Row */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy Email (semseangly303@gmail.com)"
                aria-label="Copy Email"
                className="w-12 h-12 rounded-xl border border-theme bg-surface flex items-center justify-center text-secondary hover:text-primary hover:border-theme-strong hover:bg-surface-panel transition-all cursor-pointer"
              >
                <GmailIcon size={20} />
              </button>

              <a
                href="https://www.linkedin.com/in/seanglysem"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-xl border border-theme bg-surface flex items-center justify-center text-secondary hover:text-primary hover:border-theme-strong hover:bg-surface-panel transition-all"
              >
                <LinkedInIcon size={20} />
              </a>

              <a
                href="https://github.com/SeanglySEM"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                aria-label="GitHub"
                className="w-12 h-12 rounded-xl border border-theme bg-surface flex items-center justify-center text-secondary hover:text-primary hover:border-theme-strong hover:bg-surface-panel transition-all"
              >
                <GitHubIcon size={20} />
              </a>

              <a
                href="https://t.me/semseanglyy"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram Profile"
                aria-label="Telegram"
                className="w-12 h-12 rounded-xl border border-theme bg-surface flex items-center justify-center text-secondary hover:text-primary hover:border-theme-strong hover:bg-surface-panel transition-all"
              >
                <TelegramIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-theme bg-surface p-6 md:p-8">
            <h3 className="text-base font-bold text-primary mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-secondary mb-6">
              Fill in your details below and it will prepare a draft in your email client.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-2"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-base font-bold text-primary">Message Ready in Email App</h4>
                <p className="text-xs text-secondary max-w-sm">
                  Thank you for reaching out. I will reply to your message as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-primary mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-theme bg-surface-panel/50 text-sm text-primary placeholder:text-subtle outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-primary mb-1.5">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-theme bg-surface-panel/50 text-sm text-primary placeholder:text-subtle outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-primary mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hi Seangly, I'd like to discuss an opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-theme bg-surface-panel/50 text-sm text-primary placeholder:text-subtle outline-none resize-none focus:border-accent-cyan transition-colors"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={`w-full py-2.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                      isValid
                        ? "btn-primary cursor-pointer"
                        : "opacity-40 cursor-not-allowed bg-surface-panel border border-theme text-subtle"
                    }`}
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
