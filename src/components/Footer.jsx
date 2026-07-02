import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-theme py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-subtle"
        >
          © 2026 Seangly SEM. Built with React, Tailwind CSS, and Framer Motion.
        </motion.p>
      </div>
    </footer>
  )
}
