function Footer() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      label: "Visit GitHub profile",
      href: "https://github.com/harsha21042",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.29-2.61 5.23-5.1 5.5.4.35.76 1.02.76 2.06V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      label: "Visit LinkedIn profile",
      href: "https://www.linkedin.com/in/harshalaher2104",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.97V9h2.96v9.5ZM6.45 7.7a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44ZM19 18.5h-2.96v-4.62c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.7H9.76V9h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.97 3.56 4.53v5.21Z" />
        </svg>
      ),
    },
    {
      label: "Send an email",
      href: "mailto:harshalaher21@gmail.com",
      external: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0f] px-6 py-6 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold">
              Harshal<span className="text-violet-400">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
              Full Stack Developer building with React, TypeScript, and Node.js.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-gray-400 transition hover:text-violet-300"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-3 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Harshal Aher. All rights reserved.</p>
          <p>Built with React and Tailwind CSS</p>
          <a href="#home" className="transition hover:text-violet-300">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;