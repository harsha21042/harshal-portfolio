import Reveal from "./Reveal";

function Projects() {
  const projects = [
    {
      title: "React AI Tool",
      type: "Personal Project",
      description:
        "An AI-powered chat application with conversation history, chat management, and a responsive sidebar UI.",
      highlights: [
        "Integrated the Groq API with async requests and graceful error handling for failed calls",
        "Built chat management (create, rename, delete, auto-titles) with LocalStorage persistence",
        "Rendered AI replies with Markdown and syntax-highlighted code blocks",
        "Organized chat logic with reusable components and custom hooks",
      ],
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Groq API", "Vercel"],
      image: "/projects/react-ai-tool.png",
      link: "https://react-ai-tool-using-groq-api.vercel.app/",
      github: "https://github.com/harsha21042/React-Ai-Tool-using-GroqAPI",
    },
    {
      title: "Export-Import Training Platform",
      type: "Professional Project · Pinaak Global Exporters",
      description:
        "A web platform for export-import training and consultancy where users explore courses, register, submit enquiries, and get guidance from an AI Export Assistant.",
      highlights: [
        "Delivered Course, Registration, Enquiry, Testimonials, Resources, and Contact modules for 50+ users",
        "Integrated an AI-powered Export Assistant: user input, API communication, and response rendering",
        "Added client-side validation to registration and enquiry flows for accurate data entry",
        "Handled async data, loading states, and error scenarios across REST API calls",
      ],
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      image: "/projects/export-platform.png",
      link: "",
      github: "",
    },
    {
      title: "MERN User Management",
      type: "Personal Project",
      description:
        "A full stack user management application for displaying user records and adding new users.",
      highlights: [
        // Add what you actually built here, e.g. edit/delete, validation, search
        "Built a React frontend connected to an Express.js and Node.js REST API",
        "Stored and retrieved user records using MongoDB",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "",
      link: "",
      github: "",
    },
  ];

  return (
    <section id="projects" className="bg-[#0d0d14] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            What I've built
          </p>
          <h2 className="max-w-3xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <Reveal key={project.title}>
              <article className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-violet-400/40 md:grid-cols-2">
                {/* Image */}
                <div
                  className={`relative min-h-64 bg-gradient-to-br from-violet-600/30 via-[#14141f] to-fuchsia-600/20 ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                      <span className="text-2xl font-bold text-white/30">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 sm:p-8">
                  <span className="self-start rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-300">
                    {project.type}
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:border-violet-400"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {!project.link && !project.github && (
                      <span className="text-sm text-gray-500">
                        Private project, details available on request
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;