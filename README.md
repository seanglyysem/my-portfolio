# Seangly SEM — Developer Portfolio

A high-performance, accessible, and responsive web portfolio engineered with modern frontend architecture. Designed for production reliability, clean code organization, and intuitive user experiences across desktop, tablet, and mobile devices.

Live Demonstration: [https://seanglysem.vercel.app](https://seanglysem.vercel.app)

---

## Technical Architecture & Stack

| Layer | Technologies |
|---|---|
| Core Runtime | React 19, JavaScript (ESNext), HTML5 Semantic Structure |
| Styling & Design System | Tailwind CSS v4, Semantic CSS Variables, Glassmorphism Tokens |
| Motion & Telemetry | Framer Motion (GPU-accelerated scroll tracking, spring physics) |
| Icons & Visuals | Lucide React, Handcrafted Brand Vector Components |
| Build Tooling | Vite 8, Vite Image Optimizer, Rollup Manual Chunking |
| Code Quality | ESLint (Flat Config), React Hooks Rules, Fast Refresh |

---

## Key Engineering Features

- **Hardware-Accelerated Scroll Progress**: Uses Framer Motion's `useScroll` with spring physics to achieve smooth progress tracking without React state thrashing.
- **Isolated Terminal Engine**: The quote terminal typewriter runs inside an isolated, memoized subcomponent to prevent extraneous parent re-renders.
- **Dynamic Theme Persistence**: Zero-FOUC theme hydration with instant local storage synchronization and automatic `prefers-color-scheme` matching.
- **Accessible Modal Architecture**: Keyboard `Escape` dismiss handling, backdrop click traps, body scroll locking, and strict ARIA dialog roles.
- **Optimized Bundle Splitting**: Rollup chunk isolation for React, Framer Motion, and icon libraries to improve browser caching and initial load performance.
- **Asset Optimization Pipeline**: Automated Sharp and SVGO image compression integrated directly into the Vite build step.

---

## Project Structure

```text
portfolio/
├── public/                  # Static assets (favicons, Open Graph previews, screenshots)
├── src/
│   ├── assets/              # Compressed raster assets
│   ├── components/          # Reusable UI modules & section components
│   │   ├── About.jsx        # Professional background & skill highlights
│   │   ├── BrandIcons.jsx   # SVG brand icons (GitHub, LinkedIn, Telegram, Gmail)
│   │   ├── Contact.jsx      # Contact portal & direct inquiry forms
│   │   ├── Footer.jsx       # Global footer & social channel anchors
│   │   ├── Hero.jsx         # Landing section & executive introduction
│   │   ├── Journey.jsx      # Technical milestones & academic timeline
│   │   ├── Navbar.jsx       # Adaptive navigation bar with scroll spy
│   │   ├── Projects.jsx     # Filterable project gallery & detail modals
│   │   ├── QuoteTerminal.jsx# Isolated typewriter terminal component
│   │   ├── ScrollProgress.jsx # GPU-accelerated reading telemetry
│   │   ├── SkillIcons.jsx   # Vector tech stack icons
│   │   ├── Skills.jsx       # Structured technology competencies
│   │   ├── ThemeToggle.jsx  # Theme toggle switcher
│   │   └── Toast.jsx        # Accessible status notification toast
│   ├── context/             # ThemeContext and custom hooks
│   ├── data/                # Data models for projects and technical skills
│   ├── index.css            # Tailwind theme tokens and base styles
│   ├── App.jsx              # Main layout orchestration
│   └── main.jsx             # Application entry point
├── eslint.config.js         # ESLint configuration
├── vite.config.js           # Vite build pipeline & chunk optimizer
└── package.json             # Dependencies and project scripts
```

---

## Getting Started

### Prerequisites

- Node.js (v18.0 or higher recommended)
- npm (v9.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SeanglySEM/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

6. Run the code linter:
   ```bash
   npm run lint
   ```

---

## Contact & Inquiries

- Name: Seangly SEM
- Email: [semseangly303@gmail.com](mailto:semseangly303@gmail.com)
- LinkedIn: [linkedin.com/in/seanglysem](https://www.linkedin.com/in/seanglysem)
- GitHub: [github.com/SeanglySEM](https://github.com/SeanglySEM)
