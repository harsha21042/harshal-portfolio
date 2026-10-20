
function Projects() {
  const projects = [
    {
      title: 'React AI Tool',
      description:
        'An AI-powered chat application with conversation history, chat management, and responsive UI.',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Groq API'],
      link: 'https://react-ai-tool-using-groq-api.vercel.app/',
      github: 'https://github.com/harsha21042/React-AI-Tool',
    },
    {
      title: 'Export-Import Training Platform',
      description:
        'A web application for export-import training and consultancy, with course, registration, and enquiry features.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
      link: '',
      github: '',
    },
    {
      title: 'MERN User Management',
      description:
        'A user management application for displaying user records and working with add-user functionality.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      link: '',
      github: '',
    },
  ];

  return (
    <section id="projects" className="bg-[#0d0d14] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
          What I've built
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Featured <span className="text-violet-400">Projects</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 leading-7 text-gray-400">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-violet-400/10 px-3 py-1.5 text-sm text-violet-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-violet-400 hover:text-violet-300"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-gray-300 hover:text-white"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
