import Reveal from "./Reveal";

/* ---------- Visual: screenshot, diagram, or placeholder ---------- */
function ProjectVisual({ project }) {
  // 1) Real screenshot (personal projects)
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-contain object-center"
      />
    );
  }

  // 2) Diagram (confidential company projects)
  if (project.visual) {
    const { label, modules = [], flow = [] } = project.visual;
    return (
      <div className="absolute inset-0 flex flex-col gap-4 p-5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 text-[11px] tracking-wide text-gray-400">
            🔒 {label}
          </span>
        </div>

        {modules.length > 0 && (
          <div className="grid flex-1 grid-cols-3 gap-2">
            {modules.map((m, i) => (
              <div
                key={m}
                className="flex flex-col justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2"
              >
                <span className="text-[10px] font-semibold text-violet-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 text-xs leading-4 text-gray-200">{m}</span>
              </div>
            ))}
          </div>
        )}

        {flow.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 rounded-lg border border-violet-400/20 bg-violet-400/10 p-3">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-md bg-[#0a0a0f]/70 px-2.5 py-1 text-[11px] text-violet-200">
                  {step}
                </span>
                {i < flow.length - 1 && (
                  <span className="text-xs text-violet-400">→</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 3) Fallback placeholder
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
      <span className="text-2xl font-bold text-white/30">{project.title}</span>
    </div>
  );
}

/* ---------- Compact card (personal projects) ---------- */
function CompactCard({ project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40">
      <div className="relative h-52 bg-gradient-to-br from-violet-600/30 via-[#14141f] to-fuchsia-600/20">
        <ProjectVisual project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="self-start rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
          {project.type}
        </span>

        <h4 className="mt-4 text-xl font-semibold">{project.title}</h4>
        <p className="mt-2 text-sm leading-6 text-gray-400">{project.description}</p>

        <ul className="mt-4 space-y-2 text-sm leading-6 text-gray-300">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-md bg-violet-400/10 px-2.5 py-1 text-xs text-violet-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-600"
            >
              Live Demo ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-violet-400"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* ---------- Main section ---------- */
function Projects() {
  const projects = [
    {
      title: "DueDeck: Practice Management Platform",
      category: "company",
      type: "Company Project · Eligo Apptech",
      isPrivate: true,
      description:
        "A practice management platform used by accounting and tax firms to manage clients, tasks, GST workflows, and reports.",
      highlights: [
        "Integrated third-party GST APIs with Node.js and Express.js to validate GSTINs and auto-fetch business details, cutting manual data entry by 40% for 150+ clients",
        "Built RESTful APIs and relational MySQL schemas with foreign keys and constraints, keeping average API response under 300 ms",
        "Developed client-side and server-side validation across 15+ forms, reducing invalid submissions by 60%",
        "Worked in an Agile team of 8–9 using Git and Jira, reducing reported production bugs by 35%",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "Node.js",
        "Express.js",
        "MySQL",
        "REST APIs",
        "Third-Party API Integration",
      ],
      image: "",
      visual: {
        label: "Company project · UI not shown",
        modules: [
          "Task Management",
          "GST",
          "Reports",
          "Client Management",
          "Testimonials",
        ],
        flow: ["Client", "GST API", "Node + Express", "MySQL"],
      },
      link: "", 
      github: "",
    },
    // {
    //   title: "Export-Import Training Platform",
    //   category: "company",
    //   type: "Company Project · Pinaak Global Exporters",
    //   isPrivate: true,
    //   description:
    //     "A web platform for export-import training and consultancy where users explore courses, register, submit enquiries, and get guidance from an AI Export Assistant.",
    //   highlights: [
    //     "Delivered Course, Registration, Enquiry, Testimonials, Resources, and Contact modules for 50+ users",
    //     "Integrated an AI-powered Export Assistant: user input, API communication, and response rendering",
    //     "Added client-side validation to registration and enquiry flows for accurate data entry",
    //     "Handled async data, loading states, and error scenarios across REST API calls",
    //   ],
    //   technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    //   image: "",
    //   visual: {
    //     label: "Company project · UI not shown",
    //     modules: [
    //       "Courses",
    //       "Registration",
    //       "Enquiry",
    //       "Testimonials",
    //       "Resources",
    //       "Contact",
    //     ],
    //     flow: ["User", "React UI", "REST API", "AI Export Assistant"],
    //   },
    //   link: "", 
    //   github: "",
    // },
    {
      title: "React AI Tool",
      category: "personal",
      type: "Personal Project",
      isPrivate: false,
      description:
        "An AI-powered chat application with conversation history, chat management, and a responsive sidebar UI.",
      highlights: [
        "Integrated the Groq API with async requests and graceful error handling for failed calls",
        "Built chat management (create, rename, delete, auto-titles) with LocalStorage persistence",
        "Rendered AI replies with Markdown and syntax-highlighted code blocks",
        "Organized chat logic with reusable components and custom hooks",
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Groq API", "Vercel"],
      image: "/images/DevPulse-1.png",
      link: "https://react-ai-tool-using-groq-api.vercel.app/",
      github: "https://github.com/harsha21042/React-Ai-Tool-using-GroqAPI",
    },
    {
      title: "MERN User Management",
      category: "personal",
      type: "Personal Project",
      isPrivate: false,
      description:
        "A full stack user management application for displaying user records and adding new users.",
      highlights: [
        "Built a React frontend connected to an Express.js and Node.js REST API",
        "Stored and retrieved user records using MongoDB",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "", 
      link: "",
      github: "", 
    },
  ];

  const companyProjects = projects.filter((p) => p.category === "company");
  const personalProjects = projects.filter((p) => p.category === "personal");

  return (
    <section id="projects" className="bg-[#0d0d14] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            What I've built
          </p>
          <h2 className="max-w-3xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </Reveal>

        {/* Professional work */}
        <Reveal>
          <h3 className="mt-7 text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Professional work
          </h3>
        </Reveal>

        <div className="mt-3 space-y-8">
          {companyProjects.map((project, i) => (
            <Reveal key={project.title}>
              <article className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-violet-400/40 md:grid-cols-2">
                <div
                  className={`relative min-h-72 bg-gradient-to-br from-violet-600/30 via-[#14141f] to-fuchsia-600/20 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <ProjectVisual project={project} />
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <span className="self-start rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                    {project.isPrivate && "🔒 "}
                    {project.type}
                  </span>

                  <h4 className="mt-4 text-2xl font-semibold">{project.title}</h4>
                  <p className="mt-3 leading-7 text-gray-400">{project.description}</p>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-300">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-violet-400/10 px-3 py-1.5 text-xs text-violet-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-600"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.isPrivate && !project.link && (
                      <span className="text-sm text-gray-500">
                        Company project. UI and source code are confidential.
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Personal projects */}
        <Reveal>
          <h3 className="mt-8 text-sm font-semibold tracking-widest text-gray-400 uppercase">
            Personal projects
          </h3>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          {personalProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <CompactCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;