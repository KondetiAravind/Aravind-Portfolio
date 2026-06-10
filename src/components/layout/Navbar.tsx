export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 flex items-center justify-center font-bold text-white">
            KA
          </div>

          <span className="font-semibold text-white hidden sm:block">
            Kondeti Aravind
          </span>

        </div>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">

          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>

          <a href="#experience" className="hover:text-orange-400 transition-colors">
            Experience
          </a>

          <a href="#research" className="hover:text-emerald-400 transition-colors">
            Research
          </a>

          <a href="#contact" className="hover:text-violet-400 transition-colors">
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}
