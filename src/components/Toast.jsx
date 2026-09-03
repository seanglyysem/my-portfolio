import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"

export default function Toast({ message, isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-4 py-3 rounded-xl glass shadow-2xl border border-accent-cyan/30 text-primary text-sm font-medium"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
            <Check size={13} strokeWidth={2.5} />
          </div>
          <span>{message}</span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="ml-2 text-subtle hover:text-primary transition-colors cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
