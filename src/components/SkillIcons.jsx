import { GitHubIcon } from "./BrandIcons"

const iconClass = "block shrink-0"

export function JavaScriptIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        fill="#000"
        d="M6.5 17.5l1.9-1.1c.4.7.7 1.3 1.5 1.3.8 0 1.3-.3 1.3-1.5V9h2.3v7.2c0 2.4-1.4 3.5-3.4 3.5-1.8 0-2.9-.9-3.6-2zm8.6-1.1c.4.7.9 1.3 1.8 1.3.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.5-1.4l-.5-.2c-1.5-.6-2.5-1.4-2.5-3 0-1.5 1.1-2.6 2.9-2.6 1.2 0 2.1.4 2.7 1.5l-1.8 1.1c-.4-.7-.8-1-1.5-1-.6 0-1 .4-1 1 0 .7.4 1 1.4 1.4l.5.2c1.8.7 2.8 1.4 2.8 3.2 0 1.8-1.4 2.8-3.3 2.8-1.9 0-3.1-.9-3.7-2.1z"
      />
    </svg>
  )
}

export function PythonIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="#3776AB"
        d="M11.9 2C7.1 2 7.4 4.2 7.4 4.2l.01 2.2h4.7v.7H5.1S2 6.4 2 11.5c0 5.1 2.8 4.9 2.8 4.9h1.7v-2.3s-.1-2.8 2.7-2.8h4.6s2.6.1 2.6-2.5V5.3S16.8 2 11.9 2zm-2.8 1.5a.9.9 0 110 1.8.9.9 0 010-1.8z"
      />
      <path
        fill="#FFD43B"
        d="M12.1 22c4.8 0 4.5-2.2 4.5-2.2l-.01-2.2h-4.7v-.7h7.1S22 17.6 22 12.5c0-5.1-2.8-4.9-2.8-4.9h-1.7v2.3s.1 2.8-2.7 2.8h-4.6s-2.6-.1-2.6 2.5v4.3S7.2 22 12.1 22zm2.8-1.5a.9.9 0 110-1.8.9.9 0 010 1.8z"
      />
    </svg>
  )
}

export function JavaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="#ED8B00"
        d="M8.9 18.7c-.4.5 1 1.3 2.8.9 1.5-.3 2.9-1 3.5-1.6.3-.3.1-.5-.2-.3-.9.5-2.3 1.1-3.8 1.1-1.2 0-2-.4-2.3-.1zm-1.2-2.4c-.3.4.8 1 2.2.9 1.3-.1 2.4-.5 2.8-.9.2-.3 0-.4-.3-.2-.8.4-2 .8-3.2.8-1 0-1.5-.3-1.5-.6z"
      />
      <path
        fill="#5382A1"
        d="M12 3.5c-3.5 1.2-3.3 4.8-3.3 4.8s3.9-.5 3.9 3.1c0 2.3-1.9 3.5-1.9 3.5s2.2-.4 2.2-2.5c0-2.5-3.2-2.4-3.2-5.4 0-2.2 1.7-3.5 1.7-3.5z"
      />
      <path
        fill="#ED8B00"
        d="M14.5 20.5c1.5.9 3.5.8 3.5.8l.1-.5s-1.2.1-2.5-.4c-1.3-.5-1.1-1.2-.1-.4zm-5.2-.3c.5.4 1.5.7 1.5.7l-.1-.4s-.9-.1-1.6-.5c-.7-.4-.1-.7.2-.2z"
      />
    </svg>
  )
}

export function CppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#00599C" d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10z" />
      <path
        fill="#fff"
        d="M12.5 7.5v1.8c1.5.3 2.6 1.6 2.6 3.2s-1.1 2.9-2.6 3.2V18c2.3-.3 4.1-2.2 4.1-4.5s-1.8-4.2-4.1-4.5zm-1 1.8V7.5c-2.3.3-4.1 2.2-4.1 4.5s1.8 4.2 4.1 4.5v-1.8c-1.5-.3-2.6-1.6-2.6-3.2s1.1-2.9 2.6-3.2z"
      />
      <path fill="#fff" d="M13.5 11h1.2v.8h-1.2V11zm2.2 0h.8v2.8h-.8V11zm-4.4 0h.8v2.8h-.8V11zm1.2 0h1.2v.8h-1.2v-.8z" />
    </svg>
  )
}

export function HtmlIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#E34F26" d="M4.5 2l1.4 15.5 6.1 1.7 6.1-1.7L19.5 2H4.5z" />
      <path fill="#EF652A" d="M12 18.2l4.9-1.4.7-7.4H12v8.8z" />
      <path fill="#fff" d="M12 5.5h5.5l-.3 3.5H12V5.5zm0 5.3h4.6l-.3 3.5-4.3 1.2V10.8z" />
    </svg>
  )
}

export function CssIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#1572B6" d="M4.5 2l1.4 15.5 6.1 1.7 6.1-1.7L19.5 2H4.5z" />
      <path fill="#33A9DC" d="M12 18.2l4.9-1.4.9-9.3H12v11.7z" />
      <path
        fill="#fff"
        d="M12 5.5h5.5l-.2 2.2H12V5.5zm0 4.4h4.3l-.2 2.5-4.1 1.1V9.9zm-2.2 4.4l.1 1.2 3.1.8.1-1.2-3.3-.8z"
      />
    </svg>
  )
}

export function ReactIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1.2"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        fill="none"
        stroke="#61DAFB"
        strokeWidth="1.2"
        transform="rotate(120 12 12)"
      />
    </svg>
  )
}

export function TailwindIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="#06B6D4"
        d="M12 6c-2.7 0-4.4 1.3-5.1 3.9 1-1.4 2.1-1.9 3.4-1.7 1.2.2 2 .8 2.9 1.5.9.7 1.9 1.5 4.1 1.5 2.7 0 4.4-1.3 5.1-3.9-1 1.4-2.1 1.9-3.4 1.7-1.2-.2-2-.8-2.9-1.5C15.2 6.8 14.2 6 12 6zm-5.1 5.1C4.2 11.1 2.5 12.4 1.8 15c1-1.4 2.1-1.9 3.4-1.7 1.2.2 2 .8 2.9 1.5.9.7 1.9 1.5 4.1 1.5 2.7 0 4.4-1.3 5.1-3.9-1 1.4-2.1 1.9-3.4 1.7-1.2-.2-2-.8-2.9-1.5-.9-.7-1.9-1.5-4.1-1.5z"
      />
    </svg>
  )
}

export function ResponsiveIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="#22D3EE" strokeWidth="1.5" />
      <rect x="16" y="8" width="6" height="12" rx="1.5" stroke="#A855F7" strokeWidth="1.5" />
      <path d="M6 9h6M6 12h4" stroke="#22D3EE" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function FramerMotionIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#BB4BE4" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h16v7H4v-7z" />
    </svg>
  )
}

export function GitIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path
        fill="#F05032"
        d="M23.5 10.8L13.2.5a1.7 1.7 0 00-2.4 0L9.6 1.7l3 3a1 1 0 01-1.3 1.3l-2.8-2.8-2.2 2.2 2.8 2.8a1 1 0 11-1.3 1.3L2.5 7.4a1.7 1.7 0 000 2.4l10.3 10.3a1.7 1.7 0 002.4 0l8.3-8.3a1.7 1.7 0 000-2.4z"
      />
    </svg>
  )
}

export const GitHubSkillIcon = GitHubIcon

export function VsCodeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#007ACC" d="M2 3.5L14.5 12 2 20.5V3.5z" />
      <path fill="#1F9CF0" d="M14.5 12L22 7v10l-7.5-5z" />
      <path fill="#007ACC" d="M14.5 12L9 16.5 2 20.5V3.5L9 7.5 14.5 12z" opacity=".6" />
    </svg>
  )
}

export function VercelIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconClass}
      aria-hidden="true"
    >
      <path d="M12 2L2 19.5h20L12 2z" />
    </svg>
  )
}

export function FigmaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#F24E1E" d="M8 24a4 4 0 004-4v-4H8a4 4 0 000 8z" />
      <path fill="#A259FF" d="M4 12a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" />
      <path fill="#F24E1E" d="M4 4a4 4 0 014-4h4v8H8a4 4 0 01-4-4z" />
      <path fill="#1ABCFE" d="M12 0h4a4 4 0 010 8h-4V0z" />
      <path fill="#0ACF83" d="M20 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

export function DataStructuresIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <circle cx="12" cy="4" r="2.5" fill="#3B82F6" />
      <circle cx="6" cy="14" r="2.5" fill="#22D3EE" />
      <circle cx="18" cy="14" r="2.5" fill="#A855F7" />
      <circle cx="12" cy="20" r="2.5" fill="#3B82F6" />
      <path d="M12 6.5L6.5 12M12 6.5l5.5 5.5M8 14.5h8M12 16.5V17.5" stroke="#94A3B8" strokeWidth="1.2" />
    </svg>
  )
}

export function AlgorithmsIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M4 6h6v4H4V6zm10 0h6v4h-6V6zM4 14h6v4H4v-4zm10 0h6v4h-6v-4z" stroke="#22D3EE" strokeWidth="1.5" />
      <path d="M10 8h4M10 16h4" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function OopIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <rect x="3" y="5" width="8" height="8" rx="1.5" stroke="#3B82F6" strokeWidth="1.5" />
      <rect x="13" y="5" width="8" height="8" rx="1.5" stroke="#22D3EE" strokeWidth="1.5" />
      <rect x="8" y="13" width="8" height="8" rx="1.5" stroke="#A855F7" strokeWidth="1.5" />
    </svg>
  )
}

export function DatabaseIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#22D3EE" strokeWidth="1.5" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#22D3EE" strokeWidth="1.5" />
      <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" stroke="#3B82F6" strokeWidth="1.5" />
    </svg>
  )
}

export function SoftwareEngineeringIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path
        d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"
        stroke="#A855F7"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="#22D3EE" strokeWidth="1.2" />
    </svg>
  )
}

export function DefaultSkillIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path
        d="M8 9l4-4 4 4M12 5v10M6 19h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NodeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#339933" d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 1.9L4.6 8.3v7.4l7.4 4.3 7.4-4.3V8.3L12 3.9z" />
    </svg>
  )
}

export function ExpressIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
      <text x="12" y="16" fontSize="12" fontWeight="bold" fill="currentColor" textAnchor="middle">EX</text>
    </svg>
  )
}

export function MongoIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#47A248" d="M12 2c0 0-4 4.5-4 11s4 9 4 9 4-2.5 4-9-4-11-4-11z" />
    </svg>
  )
}

export function PostgresIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <path fill="#336791" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <path fill="#336791" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 7.5 12 7.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" />
    </svg>
  )
}

export function RestApiIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MachineLearningIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.5" stroke="#A78BFA" strokeWidth="1.5" fill="#8B5CF6" fillOpacity="0.2" />
    </svg>
  )
}

export function LlmIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M12 3l1.9 5.8a2 2 0 001.3 1.3L21 12l-5.8 1.9a2 2 0 00-1.3 1.3L12 21l-1.9-5.8a2 2 0 00-1.3-1.3L3 12l5.8-1.9a2 2 0 001.3-1.3L12 3z" stroke="#06B6D4" strokeWidth="1.5" strokeLinejoin="round" fill="#06B6D4" fillOpacity="0.2" />
    </svg>
  )
}

export function ViteIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M20.5 4.5l-8 15-8-15 8 2.5 8-2.5z" stroke="#BD34FE" strokeWidth="1.5" fill="#41D1FF" fillOpacity="0.2" />
      <path d="M14.5 4l-4 7h3l-3 6 6.5-8.5h-3.5l3-4.5h-2z" fill="#FFD43B" />
    </svg>
  )
}

export function TypeScriptIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path fill="#fff" d="M11.5 11.5H8v1.8h1.2v6.2h1.8v-6.2h1.2v-1.8zm4.3 3.6c-.6-.3-1-.6-1-1.1 0-.6.5-.9 1.2-.9.7 0 1.2.3 1.5.8l1.4-.9c-.6-.9-1.6-1.4-2.9-1.4-1.8 0-3 1.1-3 2.6 0 1.5 1 2.2 2.2 2.7.7.3 1.2.6 1.2 1.1 0 .6-.6 1-1.4 1-.9 0-1.6-.4-2-1.1l-1.4.9c.7 1.2 1.9 1.8 3.4 1.8 2 0 3.3-1.1 3.3-2.7 0-1.6-1.1-2.3-2.5-2.7z" />
    </svg>
  )
}

export function DartIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M4 4l9.5 9.5-3.5 6.5-6-6V4z" fill="#00B4AB" />
      <path d="M4 4l12 1.5 4 4-6.5 4.5L4 4z" fill="#01579B" />
      <path d="M20 9.5l-2.5 8.5-7.5 2 4-6 6-4.5z" fill="#29B6F6" />
    </svg>
  )
}

export function KotlinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M22 2H2v20l10-10L22 2z" fill="#7F52FF" />
      <path d="M2 12l10 10H2V12z" fill="#C711E1" />
      <path d="M12 12l10 10H12V12z" fill="#E4485D" opacity="0.9" />
    </svg>
  )
}

export function NextjsIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M9.5 8v8M14.5 8l-5 8" stroke="var(--theme-surface, #fff)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FlutterIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M13.5 2L4 11.5l3 3L19.5 2h-6z" fill="#02569B" />
      <path d="M13.5 12.5L8.5 17.5 13.5 22.5h6l-7.5-7.5 7.5-2.5h-6z" fill="#0175C2" />
      <path d="M12 14l3.5 3.5-3.5 3.5-2.5-2.5 2.5-4.5z" fill="#29B6F6" />
    </svg>
  )
}

export function AndroidIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M6 18a2 2 0 002 2h8a2 2 0 002-2v-7H6v7zM7 9a5 5 0 0110 0H7z" fill="#3DDC84" />
      <circle cx="9" cy="7" r="0.75" fill="#fff" />
      <circle cx="15" cy="7" r="0.75" fill="#fff" />
      <path d="M7 4.5L5.5 2M17 4.5L18.5 2" stroke="#3DDC84" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function MySqlIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M4 6c0-2.2 3.6-4 8-4s8 1.8 8 4-3.6 4-8 4-8-1.8-8-4z" stroke="#00758F" strokeWidth="1.5" />
      <path d="M4 6v6c0 2.2 3.6 4 8 4s8-1.8 8-4V6" stroke="#F29111" strokeWidth="1.5" />
      <path d="M4 12v6c0 2.2 3.6 4 8 4s8-1.8 8-4v-6" stroke="#00758F" strokeWidth="1.5" />
    </svg>
  )
}

export function DockerIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M2 13c1.5-1 3.5-1 5 0 1.5 1 3.5 1 5 0 1.5-1 3.5-1 5 0 1.5 1 3.5 1 5 0" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 13c.5 4 4.5 7 9 7s8.5-3 9-7" stroke="#2496ED" strokeWidth="1.5" />
      <rect x="6" y="9" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="10" y="9" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="14" y="9" width="3" height="3" rx="0.5" fill="#2496ED" />
      <rect x="10" y="5.5" width="3" height="3" rx="0.5" fill="#2496ED" />
    </svg>
  )
}

export function LinuxIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M12 2C9.2 2 7 4.2 7 7c0 2.5 1.5 4.5 2 6.5-.5 1-2 2-2 4 0 2 2.2 3 5 3s5-1 5-3c0-2-1.5-3-2-4 .5-2 2-4 2-6.5 0-2.8-2.2-5-5-5z" fill="#FCC624" />
      <circle cx="10" cy="7" r="1" fill="#000" />
      <circle cx="14" cy="7" r="1" fill="#000" />
      <path d="M11 9.5c.5.5 1.5.5 2 0" stroke="#E95420" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

export function NginxIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="#009639" fillOpacity="0.2" stroke="#009639" strokeWidth="1.5" />
      <path d="M8 8v8l8-8v8" stroke="#009639" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function NgrokIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="4" fill="#1F1E38" />
      <path d="M7 8h2v8H7V8zm4 0h2v4.5l2.5-4.5H18l-3.5 5.5 4 6.5h-2.5L13 13.5V16h-2V8z" fill="#1F69FF" />
    </svg>
  )
}

export function CloudflareIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path fill="#F38020" d="M18.72 10.74C18.28 6.55 14.73 3.3 10.5 3.3c-3.5 0-6.47 2.33-7.3 5.46C1.45 9.17 0 10.77 0 12.7c0 2.37 1.93 4.3 4.3 4.3h13.4c2.37 0 4.3-1.93 4.3-4.3 0-2.22-1.7-4.04-3.86-4.23z" />
    </svg>
  )
}

export function SqlIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="#0284C7" strokeWidth="1.5" />
      <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" stroke="#0284C7" strokeWidth="1.5" />
      <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" stroke="#38BDF8" strokeWidth="1.5" />
    </svg>
  )
}

export function SupabaseIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      <path
        d="M21.362 9.354H12V.396a.396.396 0 00-.716-.233L.12 14.342a.396.396 0 00.316.638H12v8.958a.396.396 0 00.716.233l11.164-14.179a.396.396 0 00-.518-.638z"
        fill="#3ECF8E"
      />
    </svg>
  )
}

export function AwsIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden="true">
      {/* The orange smile */}
      <path d="M11.53 17.15c-1.53 0-3.06-.29-4.51-.83l.42-1.09c1.33.52 2.74.78 4.1.78 1.45 0 2.89-.28 4.23-.83l.44 1.06c-1.48.59-3.13.91-4.68.91zm10.74 1.2c-2.73 1.94-6.15 2.91-9.66 2.91-3.32 0-6.54-.86-9.25-2.51l.66-1.02c2.56 1.56 5.58 2.37 8.68 2.37 3.25 0 6.44-.88 9.07-2.61l.5 1.15V18.6z" fill="#FF9900" />
      {/* The AWS letters that should adapt to text color in light/dark mode */}
      <path d="M7.4 12.01h1.53l.76 2.45h.02l.74-2.45h1.5l1.09 3.96h-1.34l-.45-2.22h-.03l-.71 2.22H9.3l-.7-2.22h-.03l-.5 2.22H6.75l.65-3.96zm4.8 1.92c0 .94.61 1.34 1.35 1.34.8 0 1.27-.47 1.27-1.12 0-1.48-2.29-1.2-2.29-2.58 0-.64.55-1.15 1.43-1.15.75 0 1.36.31 1.54.91l-1.17.47c-.12-.27-.4-.44-.72-.44-.31 0-.61.16-.61.47 0 1.03 2.29.83 2.29 2.5 0 .8-.56 1.28-1.51 1.28-1.01 0-1.63-.5-1.74-1.21l1.17-.46zm6.81-.51h-2.12v.72c0 .54.4.82.93.82.47 0 .86-.23.95-.6l1.24.32c-.32.74-1 1.25-2.2 1.25-1.39 0-2.31-1-2.31-2.38s.92-2.38 2.3-2.38c1.39 0 2.2 1 2.2 2.29v.05zm-2.12-.96h1.02c0-.5-.33-.8-.85-.8-.53 0-.89.3-.98.8h.81zm-4.73 3.51h1.45V10.4h-1.45v3.96z" fill="currentColor" />
    </svg>
  )
}

// Map skill names to their icons — add new entries when you add skills in skills.js
const skillIconMap = {
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  Python: PythonIcon,
  Dart: DartIcon,
  Kotlin: KotlinIcon,
  SQL: SqlIcon,
  "Next.js": NextjsIcon,
  React: ReactIcon,
  "Express.js": ExpressIcon,
  Flutter: FlutterIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  "Tailwind CSS": TailwindIcon,
  "Node.js": NodeIcon,
  Supabase: SupabaseIcon,
  "REST API": RestApiIcon,
  "REST APIs": RestApiIcon,
  "Kotlin / Android": AndroidIcon,
  Android: AndroidIcon,
  MySQL: MySqlIcon,
  PostgreSQL: PostgresIcon,
  MongoDB: MongoIcon,
  Git: GitIcon,
  GitHub: GitHubSkillIcon,
  Docker: DockerIcon,
  Linux: LinuxIcon,
  Nginx: NginxIcon,
  ngrok: NgrokIcon,
  Cloudflare: CloudflareIcon,
  AWS: AwsIcon,
  Java: JavaIcon,
  "C++": CppIcon,
  "Responsive Design": ResponsiveIcon,
  "Framer Motion": FramerMotionIcon,
  "Machine Learning": MachineLearningIcon,
  LLMs: LlmIcon,
  "VS Code": VsCodeIcon,
  Vite: ViteIcon,
  Vercel: VercelIcon,
  Figma: FigmaIcon,
  "Data Structures": DataStructuresIcon,
  Algorithms: AlgorithmsIcon,
  "Object-Oriented Programming": OopIcon,
  "Database Basics": DatabaseIcon,
  "Software Engineering": SoftwareEngineeringIcon,
}

export function SkillIcon({ skillName, size = 18 }) {
  const IconComponent = skillIconMap[skillName] || DefaultSkillIcon
  return <IconComponent size={size} />
}

