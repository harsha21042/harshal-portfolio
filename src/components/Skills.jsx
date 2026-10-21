import Reveal from "./Reveal";

function Skills() {
  const coreStack = ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL"];

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Custom Hooks",
        "Responsive Design",
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        "Node.js",
        "Express.js",
        "PHP",
        "Laravel",
        "REST APIs",
        "JSON",
        "Third-Party API Integration",
      ],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQL", "MongoDB", "Schema Design", "CRUD Operations"],
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "Vercel"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "Jira", "Figma", "Webpack", "NPM", "VS Code"],
    },
    {
      title: "Practices",
      skills: [
        "Agile / Scrum",
        "SDLC",
        "Data Structures",
        "Unit Testing",
        "UAT",
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#0a0a0f] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            What I work with
          </p>
          <h2 className="max-w-3xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            A toolkit built for{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              shipping real products
            </span>
          </h2>
        </Reveal>

        {/* Core stack */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/5 p-6">
            <p className="text-xs font-semibold tracking-widest text-violet-300 uppercase">
              Core stack
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {coreStack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl border border-violet-400/40 bg-violet-500/20 px-5 py-2.5 text-base font-medium text-white shadow-lg shadow-violet-500/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Groups */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
                <h3 className="mb-5 text-lg font-semibold">{group.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-sm text-gray-300 transition hover:border-violet-400/60 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;