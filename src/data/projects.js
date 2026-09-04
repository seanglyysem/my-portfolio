// ============================================
// PROJECTS DATA
// ============================================

export const projects = [
  {
    id: 1,
    title: "My Dashboard",
    description:
      "A customizable personal dashboard built with HTML, CSS, and vanilla JavaScript. Features live local weather, rotating inspirational quotes, a countdown timer, and personalized video or image background settings.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "#",
    demo: "#",
    codeSnippet: {
      file: "dashboard.js",
      lang: "JavaScript",
      code: `// Fetch local weather and greeting routine
async function initDashboard(coords) {
  const weather = await fetchWeather(coords);
  renderWeatherWidget(weather);
  startQuoteRotation({ intervalMs: 30000 });
}`,
    },
    features: [
      "Current weather and greeting based on user location",
      "Rotating inspirational quotes and trivia facts every 30 seconds",
      "Customizable animated video or static wallpaper background",
      "Built-in countdown timer and quick task widgets",
    ],
  },
  {
    id: 2,
    title: "Attendance Management System",
    description:
      "A web-based employee attendance and shift tracking platform designed for companies. Manages daily punch-in/out records, employee leave workflows, automated overtime calculations, and exportable payroll reports.",
    tags: ["Java", "Spring Boot", "MySQL"],
    github: "#",
    demo: "#",
    codeSnippet: {
      file: "AttendanceController.java",
      lang: "Java",
      code: `@PostMapping("/records/check-in")
public ResponseEntity<Record> recordCheckIn(@Valid @RequestBody CheckInDto req) {
    Employee employee = employeeRepo.findById(req.getEmployeeId())
        .orElseThrow(() -> new RecordNotFoundException());
    return ResponseEntity.ok(attendanceService.markPresent(employee));
}`,
    },
    features: [
      "Real-time employee punch-in/out tracking and shift attendance logs",
      "Leave request management workflows with automated absence records",
      "Exportable attendance analytics and payroll-ready monthly summaries",
    ],
  },
  {
    id: 3,
    title: "AI Chatbot",
    description:
      "An interactive conversational assistant powered by large language model APIs. Features streaming responses, multi-turn chat memory, prompt template presets, and clean markdown rendering.",
    tags: ["React", "Node.js", "OpenAI API"],
    github: "#",
    demo: "#",
    codeSnippet: {
      file: "chatStream.js",
      lang: "Node.js",
      code: `export async function streamChatResponse(prompt, history) {
  const stream = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: PERSONA }, ...history, { role: "user", content: prompt }],
    stream: true,
  });
  return stream;
}`,
    },
    features: [
      "Streaming conversation generation with low-latency API handling",
      "Context-aware chat history and prompt customization",
      "Syntax-highlighted code blocks and markdown rendering",
    ],
  },
  {
    id: 4,
    title: "Task Automation Tool",
    description:
      "A workflow automation engine built to streamline repetitive developer tasks. Manages scheduled cron triggers, data transformation pipelines, and automated multi-channel notifications.",
    tags: ["Python", "Automation", "REST APIs"],
    github: "#",
    demo: "#",
    codeSnippet: {
      file: "pipeline_runner.py",
      lang: "Python",
      code: `@scheduler.cron("0 */2 * * *")
async def run_sync_pipeline():
    logger.info("Executing automated sync job...")
    raw_payload = await fetch_external_records()
    clean_data = transform_schema(raw_payload)
    await dispatch_webhook(target="alerts", data=clean_data)`,
    },
    features: [
      "Automated pipeline scheduler and background script runner",
      "Webhook listeners and structured JSON data transformation",
      "Error logging and instant alert delivery via webhooks",
    ],
  },
  {
    id: 5,
    title: "Full Stack Website",
    description:
      "A production-ready full-stack web application featuring secure JWT authentication, responsive interface components, and relational database persistence with PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    github: "#",
    demo: "#",
    codeSnippet: {
      file: "auth.controller.js",
      lang: "Express",
      code: `router.post("/auth/login", async (req, res) => {
  const { email, password } = loginSchema.parse(req.body);
  const user = await db.user.findUnique({ where: { email } });
  if (!user || !(await verifyHash(password, user.passwordHash))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  return res.json({ token: signToken(user.id) });
});`,
    },
    features: [
      "Secure user authentication and role-based access control",
      "RESTful API architecture connected to PostgreSQL database",
      "Responsive, accessible UI with system dark and light modes",
    ],
  },
]
