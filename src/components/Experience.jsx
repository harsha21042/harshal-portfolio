
function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Pinaak Global Exporters',
      period: 'May 2025 – Present',
      description:
        'Contributing to the development of an export-import training and consultancy web application using React.js and TypeScript.',
      points: [
        'Worked on course, registration, enquiry, and other application modules.',
        'Developed reusable React components and form validation.',
        'Worked with REST API integration and responsive user interfaces.',
      ],
    },
    {
      role: 'Software Developer',
      company: 'Eligo Apptech Pvt. Ltd.',
      period: 'Jan 2024 – May 2025',
      description:
        'Contributed to DueDeck, a practice management application for CAs, CSs, and tax consultants.',
      points: [
        'Worked on Task Management, GST, Reports, Client Management, and Testimonials modules.',
        'Implemented CRUD functionality and form validation using Laravel and MySQL.',
        'Integrated GST API functionality to retrieve and validate GSTIN details.',
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
          My journey
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Work <span className="text-violet-400">Experience</span>
        </h2>

        <div className="mt-10 space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="mt-1 text-violet-400">{experience.company}</p>
                </div>

                <p className="text-sm text-gray-500">{experience.period}</p>
              </div>

              <p className="mt-5 leading-7 text-gray-400">
                {experience.description}
              </p>

              <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-7 text-gray-400">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
