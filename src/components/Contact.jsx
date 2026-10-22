import Reveal from "./Reveal";

function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "harshalaher21@gmail.com",
      href: "mailto:harshalaher21@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/harshalaher2104",
      href: "https://www.linkedin.com/in/harshalaher2104",
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/harsha21042",
      href: "https://github.com/harsha21042",
      external: true,
    },
    {
      label: "Phone",
      value: "+91 97634 13415",
      href: "tel:+919763413415",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0d0d14] px-6 py-12 text-white"
    >
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-violet-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            Get in touch
          </p>
          <h2 className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              great together
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400 sm:text-lg">
            I'm open to full stack developer roles where I can build
            React and Node.js products, solve real business problems, and keep
            growing with a strong team. If you have an opportunity or a project
            in mind, I'd love to hear about it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:harshalaher21@gmail.com?subject=Opportunity%20for%20Full%20Stack%20Developer"
              className="rounded-lg bg-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600"
            >
              Email Me ↗
            </a>
            <a
              href="/resume/Harshal_Aher-resume(2.8_YOE).pdf"
              download
              className="rounded-lg border border-violet-400/40 bg-violet-400/10 px-6 py-3 font-medium text-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex h-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50"
              >
                <div className="min-w-0">
                  <p className="text-xs tracking-widest text-gray-500 uppercase">
                    {c.label}
                  </p>
                  <p className="mt-1 truncate text-sm text-gray-200 sm:text-base">
                    {c.value}
                  </p>
                </div>
                <span className="text-violet-400 transition group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;