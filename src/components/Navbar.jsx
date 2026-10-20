import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0a0a0f]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-2xl font-bold text-white">
          Harshal<span className="text-violet-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-gray-400 transition-colors hover:text-violet-400" href="#home">
            Home
          </a>
          <a
            className="text-sm text-gray-400 transition-colors hover:text-violet-400"
            href="#about"
          >
            About
          </a>
          <a
            className="text-sm text-gray-400 transition-colors hover:text-violet-400"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-sm text-gray-400 transition-colors hover:text-violet-400"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="text-sm text-gray-400 transition-colors hover:text-violet-400"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-sm text-gray-400 transition-colors hover:text-violet-400"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="hidden rounded-lg bg-violet-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-600 sm:inline-block"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-2xl text-white md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {[
              ['Home', '#home'],
              ['About', '#about'],
              ['Skills', '#skills'],
              ['Projects', '#projects'],
              ['Experience', '#experience'],
              ['Contact', '#contact'],
            ].map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="text-sm text-gray-400 transition-colors hover:text-violet-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
