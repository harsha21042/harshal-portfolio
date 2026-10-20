
function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <a href="#home" className="text-xl font-bold">
          Harshal<span className="text-violet-400">.</span>
        </a>

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Harshal. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/harsha21042"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 transition hover:text-violet-400"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-400 transition hover:text-violet-400"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
