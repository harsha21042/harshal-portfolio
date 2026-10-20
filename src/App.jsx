
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
     <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0f] px-6 pt-24 text-white">
        <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center py-20">        
        <p className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
          <span className="h-2 w-2 rounded-full bg-green-400"></span>
          Available for opportunities
        </p>
          <p className="mb-5 text-sm font-medium tracking-[0.3em] text-violet-400 uppercase">
            Hello, I'm Harshal
          </p>        
          <h1 className="max-w-4xl text-5xl leading-tight font-bold tracking-tight sm:text-6xl md:text-7xl">
            Full Stack Developer building modern web applications.
          </h1>      
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build responsive web applications using React, JavaScript, and modern
            web technologies, with a focus on clean code, practical solutions, and
            seamless user experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:shadow-violet-500/30">
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-gray-200 transition hover:border-violet-400"
            >
              Contact Me
            </a>
          </div>

          <p className="mt-16 text-sm text-gray-500">
            React · JavaScript · Tailwind CSS
          </p>
        </section>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
