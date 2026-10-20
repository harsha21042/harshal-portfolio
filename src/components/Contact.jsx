
function Contact() {
  return (
    <section id="contact" className="bg-[#0d0d14] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
          Get in touch
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Let's Work <span className="text-violet-400">Together</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
          I'm interested in software development opportunities where I can
          contribute my skills, solve real-world problems, and continue learning.
          Feel free to reach out!
        </p>

        <a
          href="mailto:harshalaher21@gmail.com"
          className="mt-8 inline-flex items-center rounded-lg bg-violet-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600"
        >
          Email Me ↗
        </a>
      </div>
    </section>
  );
}

export default Contact;
