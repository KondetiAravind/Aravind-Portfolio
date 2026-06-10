export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
            KA
          </div>

          <span className="font-semibold text-white hidden sm:block text-lg">
            Kondeti Aravind
          </span>

        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">

          <a
            href="#projects"
            className="text-zinc-400 hover:text-blue-400 transition-all duration-300"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-zinc-400 hover:text-orange-400 transition-all duration-300"
          >
            Experience
          </a>

          <a
            href="#research"
            className="text-zinc-400 hover:text-emerald-400 transition-all duration-300"
          >
            Research
          </a>

          <a
            href="#contact"
            className="text-zinc-400 hover:text-violet-400 transition-all duration-300"
          >
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}