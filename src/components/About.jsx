
function About() {
  return (
    <section id="about" className="bg-[#0d0d14] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
          Get to know me
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          About <span className="text-violet-400">Me</span>
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
          I'm a software developer with experience in building web applications
          and working with modern frontend technologies. I enjoy solving
          practical problems, learning new tools, and creating responsive,
          user-friendly applications.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Frontend</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
            React, JavaScript, Tailwind CSS
            </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Backend</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
            Node.js, Express.js, REST APIs
            </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold text-white">Database</h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
            MySQL, MongoDB
            </p>
        </div>
        </div>

      </div>
    </section>
  );
}

export default About;
