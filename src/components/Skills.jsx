
function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      title: 'Database & Tools',
      skills: ['MySQL', 'MongoDB', 'Git', 'GitHub'],
    },
  ];

  return (
    <section id="skills" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
          What I work with
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          My <span className="text-violet-400">Skills</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-5 text-lg font-semibold">{group.title}</h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
