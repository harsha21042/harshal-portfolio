import Reveal from "./Reveal";

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Pinaak Global Exporters",
      period: "June 2025 – Present",
      description:
        "A web platform for export-import (EXIM) training and consultancy where users explore courses, register, submit enquiries, and get automated guidance from an AI-powered Export Assistant.",
      metrics: [
        { value: "50+", label: "users served" },
        { value: "6", label: "modules delivered" },
      ],
      points: [
        "Developed a responsive React.js and TypeScript application with Course, Registration, Enquiry, Testimonials, Resources, and Contact modules.",
        "Integrated an AI-powered Export Assistant into the frontend, handling user input, API communication, and response rendering for EXIM guidance.",
        "Built reusable, typed React components with Tailwind CSS that work across desktop, tablet, and mobile.",
        "Implemented client-side validation for registration and enquiry flows, improving data accuracy and the user experience.",
        "Integrated REST APIs while handling async data, loading states, and error scenarios.",
      ],
      tech: ["React.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
    {
      role: "Software Developer",
      company: "Eligo Apptech Pvt. Ltd.",
      period: "Jan 2024 – May 2025",
      description:
        "DueDeck, a practice management platform used by accounting and tax firms to manage clients, tasks, GST workflows, and reports.",
      metrics: [
        { value: "40%", label: "less manual data entry" },
        { value: "60%", label: "fewer invalid submissions" },
        { value: "35%", label: "fewer production bugs" },
        { value: "<300ms", label: "avg. API response" },
      ],
      points: [
        "Integrated third-party GST APIs with Node.js and Express.js to validate GSTINs and auto-fetch business details, cutting manual data entry by 40% for 150+ clients.",
        "Built RESTful APIs and designed relational MySQL schemas with foreign keys and constraints for Task Management, GST, Reports, Client Management, and Testimonials modules.",
        "Developed client-side and server-side validation across 15+ forms, reducing invalid submissions and data-entry errors by 60%.",
        "Debugged validation and database issues in an Agile team of 8–9 using Git and Jira, reducing reported production bugs by 35%.",
      ],
      // Verify: keep "Laravel" only if you really worked with it at Eligo
      tech: ["Node.js", "Express.js", "MySQL", "Laravel", "REST APIs", "Git", "Jira"],
    },
    {
      role: "AWS Virtual Cloud Intern",
      company: "AICTE / NEAT, supported by AWS Academy",
      period: "Oct 2021 – Dec 2021",
      description:
        "Launched EC2 instances inside a custom VPC and managed S3 buckets and IAM roles with least-privilege access to host and secure a web application.",
      metrics: [],
      points: [],
      tech: ["AWS EC2", "S3", "IAM", "VPC"],
    },
  ];

  return (
    <section id="experience" className="bg-[#0a0a0f] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            My journey
          </p>
          <h2 className="max-w-3xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Where I've{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              made an impact
            </span>
          </h2>
        </Reveal>

        <div className="relative mt-6 border-l border-white/10 pl-8 sm:pl-10">
          {experiences.map((exp) => (
            <Reveal key={exp.company} className="relative pb-10 last:pb-0">
              {/* timeline dot */}
              <span className="absolute top-8 -left-[2.55rem] flex h-4 w-4 items-center justify-center sm:-left-[3.05rem]">
                <span className="absolute h-4 w-4 rounded-full bg-violet-500/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              </span>

              <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-violet-400/40 sm:p-8">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="mt-1 text-violet-400">{exp.company}</p>
                  </div>
                  <p className="rounded-full border border-white/10 px-3 py-1 text-xs whitespace-nowrap text-gray-400 sm:self-start">
                    {exp.period}
                  </p>
                </div>

                <p className="mt-5 leading-7 text-gray-400">{exp.description}</p>

                {exp.metrics.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {exp.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border border-violet-400/20 bg-violet-400/10 px-4 py-3"
                      >
                        <p className="text-xl font-bold text-white">{m.value}</p>
                        <p className="mt-0.5 text-xs leading-4 text-gray-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {exp.points.length > 0 && (
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-gray-300">
                    {exp.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-violet-400/10 px-3 py-1.5 text-xs text-violet-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;