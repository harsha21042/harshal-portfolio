import Reveal from "./Reveal";

function About() {
  const facts = [
    { label: "Location", value: "Pune, Maharashtra, India" },
    { label: "Education", value: "B.E. Electronics & Telecommunication, SPPU (CGPA 8.41)" },
    { label: "Focus", value: "React · TypeScript · Node.js · MySQL" },
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
      text: "REST APIs, third-party integrations like GST services, and clean MySQL schemas with an average response under 300 ms.",
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
              I studied Electronics and Telecommunication engineering and
              built my way into web development, starting with an AWS cloud
              internship where I deployed and secured a web application on
              EC2, S3, and IAM.
            </p>
            <p>
              At <span className="text-white">Eligo Apptech</span>, I worked on
              DueDeck, a practice management platform for accounting and tax
              firms, building GST integrations, APIs, and validation that
              saved teams real time. At{" "}
              <span className="text-white">Pinaak Global Exporters</span>, I'm
              building an export-import training platform with an AI-powered
              assistant.
            </p>
            <p>
              I care about the details users actually notice: fast responses,
              clear validation, and interfaces that work on every screen. I'm
              always learning, and these days that includes Japanese too.
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