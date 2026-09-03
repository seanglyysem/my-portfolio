import { ArrowUp } from "lucide-react"
import { GmailIcon, GitHubIcon, LinkedInIcon, TelegramIcon } from "./BrandIcons"

const channels = [
  {
    icon: GmailIcon,
    name: "Email",
    title: "Email",
    href: "mailto:semseangly303@gmail.com",
  },
  {
    icon: LinkedInIcon,
    name: "LinkedIn",
    title: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/seanglysem",
  },
  {
    icon: GitHubIcon,
    name: "GitHub",
    title: "GitHub Profile",
    href: "https://github.com/SeanglySEM",
  },
  {
    icon: TelegramIcon,
    name: "Telegram",
    title: "Telegram Profile",
    href: "https://t.me/semseanglyy",
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-theme py-8 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-secondary text-center sm:text-left">
            © 2026 Seangly SEM · Full Stack Developer
          </div>

          <div className="flex items-center gap-2">
            {channels.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target={c.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                title={c.title}
                aria-label={c.name}
                className="w-8 h-8 rounded-lg border border-theme flex items-center justify-center text-secondary hover:text-primary hover:border-theme-strong transition-colors"
              >
                <c.icon size={15} />
              </a>
            ))}

            <a
              href="#home"
              title="Back to top"
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg border border-theme flex items-center justify-center text-secondary hover:text-primary hover:border-theme-strong transition-colors"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
