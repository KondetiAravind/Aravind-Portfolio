const featuredProjects = [
  {
    title: "Driving Assistant for Unstructured Environments",
    category: "Computer Vision + Autonomous Navigation",
    status: "Ongoing Research",
    link: "#",
    color: "from-purple-600/20 to-pink-600/20",
    border: "hover:border-purple-500",
  },
  {
    title: "RoBERTa Sentiment Analysis",
    category: "NLP + Deep Learning",
    link: "https://github.com/KondetiAravind/Sentiment-Analysis-on-Movie-Reviews-using-RoBERTa",
    color: "from-blue-600/20 to-cyan-600/20",
    border: "hover:border-cyan-500",
  },
  {
    title: "RISC-V MiniCPU Engine",
    category: "Computer Architecture",
    link: "https://github.com/KondetiAravind/RISC-V_MiniCPU_Engine",
    color: "from-orange-600/20 to-red-600/20",
    border: "hover:border-orange-500",
  },
  {
    title: "Cache Prefetching Schemes",
    category: "Performance Optimization",
    link: "https://github.com/KondetiAravind/Cache-Prefetching-Schemes",
    color: "from-emerald-600/20 to-teal-600/20",
    border: "hover:border-emerald-500",
  },
];

const allProjects = [
  ["RO Digital Twin Analytics","https://github.com/KondetiAravind/ro-digital-twin-ro-plant-analytics"],
  ["Multi Drone Conveyance System","https://github.com/KondetiAravind/multi-drone-conveyance-system"],
  ["Amazon Sales Dashboard","https://github.com/KondetiAravind/Amazon-Sales-Dashboard"],
  ["Book Your Show","https://github.com/KondetiAravind/Book_Your_Show-Full_Stack-Movie_Ticket_Booking_Platform"],
  ["Contact Management System","https://github.com/KondetiAravind/CONTACT_MANAGEMENT_SYSTEM"],
  ["Hospital Management System","https://github.com/KondetiAravind/Hospital_Management_System"],
  ["Cache Prefetching & Memory Latency","https://github.com/KondetiAravind/Cache-Prefetching-and-Memory-Latency-Characterization-for-Performance-Optimization"],
  ["Portfolio Website","https://github.com/KondetiAravind/Aravind-Portfolio"],
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-14">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group
                rounded-3xl
                p-10
                border
                border-white/10
                bg-gradient-to-br
                ${project.color}
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-3
                ${project.border}
              `}
            >
              <div className="flex justify-between items-start">

                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-lg">
                    {project.category}
                  </p>
                </div>

                <span className="text-4xl">
                  🚀
                </span>

              </div>

              {"status" in project && (
                <div className="mt-8 inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-300">
                  {project.status}
                </div>
              )}

              <div className="mt-10 text-blue-400 font-semibold text-lg group-hover:translate-x-2 transition-transform">
                Click to View Project →
              </div>

            </a>
          ))}

        </div>

        <h2 className="text-5xl font-bold mt-24 mb-12">
          More Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {allProjects.map(([name, link]) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                h-44
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-br
                from-zinc-900
                to-zinc-950
                hover:from-blue-950
                hover:to-violet-950
                hover:border-blue-500
                flex
                flex-col
                items-center
                justify-center
                text-center
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
              "
            >
              <h3 className="font-bold text-lg">
                {name}
              </h3>

              <span className="mt-4 text-blue-400 text-sm">
                View Repository →
              </span>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}