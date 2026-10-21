import { useEffect, useState } from "react";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const offset = window.scrollY + 140; // navbar height + thoda buffer
      let current = links[0].id;

      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }

      // page ke bilkul neeche pahunche to last section (Contact) active
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 4;
      if (atBottom) current = links[links.length - 1].id;

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0f]/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-xl font-bold text-white">
          Harshal Aher
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map(({ label, id }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 text-sm transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-violet-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-600"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;