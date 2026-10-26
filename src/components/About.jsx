import Reveal from "./Reveal";

function About() {
  const facts = [
    { label: "Location", value: "Pune, Maharashtra, India" },
    { label: "Education", value: "B.E. Electronics & Telecommunication, SPPU (CGPA 8.41)" },
    { label: "Focus", value: "React · Node.js · Express.js · MongoDB" },
    { label: "Languages", value: "English, Marathi, Hindi, Japanese (learning)" },
  ];

  const strengths = [
    {
      no: "01",
      title: "Interfaces that feel right",
      text: "Reusable React and TypeScript components with Tailwind CSS, responsive on desktop, tablet, and mobile.",
    },
    {
      no: "02",
      title: "Backends that hold up",
      text: "REST API development, third-party integrations such as GST services, and MongoDB database design and management.",
    },
    {
      no: "03",
      title: "Data you can trust",
      text: "Client and server-side validation across 15+ forms, reducing invalid submissions by 60%.",
    },
  ];

  return (
    <section id="about" className="bg-[#0d0d14] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            About me
          </p>
          <h2 className="max-w-3xl text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Clean code, reliable systems,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              happy users
            </span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-5">
          {/* LEFT: story */}
          <Reveal className="space-y-4 text-base leading-8 text-gray-400 sm:text-lg lg:col-span-3">
            <p>
              I studied Electronics and Telecommunication Engineering and transitioned into web development, building my skills in <span className="text-white">React.js, Node.js, Express.js, and MongoDB</span>. During my AWS cloud internship, I gained hands-on experience deploying and securing web applications using <span className="text-white">EC2, S3, and IAM</span>.
            </p>
            <p>
              At <span className="text-white">Eligo Apptech</span>, I contributed to DueDeck, a practice management platform for accounting and tax firms, working on <span className="text-white">GST API integrations, backend development, and data validation</span>.
            </p>
            <p>
              With 1.5 years of software development experience, I focus on building reliable backend functionality, developing and integrating APIs, managing database interactions, and creating responsive user interfaces. I'm continuously strengthening my full-stack development skills and exploring new technologies to build scalable web applications.
            </p>
          </Reveal>

          {/* RIGHT: quick facts */}
          <Reveal delay={150} className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold tracking-widest text-violet-400 uppercase">
                Quick facts
              </h3>
              <dl className="mt-5 space-y-5">
                {facts.map((f) => (
                  <div key={f.label} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <dt className="text-xs text-gray-500">{f.label}</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-200">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* What I bring */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {strengths.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50">
                <p className="text-sm font-semibold text-violet-400">{s.no}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;