export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="font-bold text-lg">
          KA
        </div>

        <nav className="hidden md:flex gap-8 text-sm">

          <a href="#about">About</a>

          <a href="#timeline">Journey</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>

        </nav>

      </div>
    </header>
  );
}