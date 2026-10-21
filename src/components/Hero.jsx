function Hero() {
  const stats = [
    { value: "2.8+", label: "Years of experience" },
    { value: "150+", label: "Clients served via GST automation" },
    { value: "40%", label: "Less manual data entry" },
  ];

  const tech = ["React", "TypeScript", "Node.js", "Express", "MySQL", "Tailwind CSS"];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0f] px-6 pt-28 pb-10 text-white"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="anim-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for Full Stack Developer Opportunities
          </p>

          <p
            className="anim-fade-up mb-4 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase"
            style={{ animationDelay: "100ms" }}
          >
            Hello, I'm Harshal Aher
          </p>

          <h1
            className="anim-fade-up text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "200ms" }}
          >
            I build full stack web apps that solve{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              real business problems
            </span>
          </h1>

          <p
            className="anim-fade-up mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg"
            style={{ animationDelay: "300ms" }}
          >
            Full Stack Developer from Pune with 2.8 years of experience in
            React, TypeScript, Node.js, and MySQL. I build responsive
            interfaces, REST APIs, and third-party integrations that make
            business workflows faster and more reliable.
          </p>

          <div
            className="anim-fade-up mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: "400ms" }}
          >
            <a
              href="#projects"
              className="rounded-lg bg-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:shadow-violet-500/30"
            >
              View My Work
            </a>
            <a
              href="/Harshal_Aher_Resume.pdf"
              download
              className="rounded-lg border border-violet-400/40 bg-violet-400/10 px-6 py-3 font-medium text-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-200 transition hover:border-violet-400"
            >
              Contact Me
            </a>
          </div>

          <div
            className="anim-fade-up mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8"
            style={{ animationDelay: "500ms" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: code card */}
        <div
          className="anim-fade-up hidden lg:block"
          style={{ animationDelay: "400ms" }}
        >
          <div className="anim-float rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-violet-500/10 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 text-xs text-gray-500">harshal.js</span>
            </div>

            <div className="space-y-1 p-6 font-mono text-sm leading-7">
              <p>
                <span className="text-pink-400">const</span>{" "}
                <span className="text-sky-300">harshal</span> = {"{"}
              </p>
              <p className="pl-6">
                <span className="text-violet-300">role</span>:{" "}
                <span className="text-green-300">"Full Stack Developer"</span>,
              </p>
              <p className="pl-6">
                <span className="text-violet-300">location</span>:{" "}
                <span className="text-green-300">"Pune, India"</span>,
              </p>
              <p className="pl-6">
                <span className="text-violet-300">experience</span>:{" "}
                <span className="text-green-300">"2.8 years"</span>,
              </p>
              <p className="pl-6">
                <span className="text-violet-300">stack</span>: [
              </p>
              <p className="pl-12 text-green-300">
                "React", "TypeScript", "Node.js", "MySQL"
              </p>
              <p className="pl-6">],</p>
              <p className="pl-6">
                <span className="text-violet-300">learning</span>:{" "}
                <span className="text-green-300">"Japanese"</span>,
              </p>
              <p className="pl-6">
                <span className="text-violet-300">openToWork</span>:{" "}
                <span className="text-orange-300">true</span>,
              </p>
              <p>{"};"}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs text-violet-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;