export default function Projects() {
  const featuredProjects = [
    {
      name: "Driving Assistant for Unstructured Environments",
      description: "Computer Vision + Autonomous Navigation",
      ongoing: true,
    },
    {
      name: "RoBERTa Sentiment Analysis",
      description: "NLP + Deep Learning",
      link: "https://github.com/KondetiAravind/Sentiment-Analysis-on-Movie-Reviews-using-RoBERTa",
    },
    {
      name: "RISC-V MiniCPU Engine",
      description: "Computer Architecture",
      link: "https://github.com/KondetiAravind/RISC-V_MiniCPU_Engine",
    },
    {
      name: "Cache Prefetching Schemes",
      description: "Performance Optimization",
      link: "https://github.com/KondetiAravind/Cache-Prefetching-Schemes",
    },
  ];

  const allProjects = [
    {
      name: "RO Digital Twin Analytics",
      link: "https://github.com/KondetiAravind/ro-digital-twin-ro-plant-analytics",
    },
    {
      name: "Multi Drone Conveyance System",
      link: "https://github.com/KondetiAravind/multi-drone-conveyance-system",
    },
    {
      name: "Amazon Sales Dashboard",
      link: "https://github.com/KondetiAravind/Amazon-Sales-Dashboard",
    },
    {
      name: "Book Your Show",
      link: "https://github.com/KondetiAravind/Book_Your_Show-Full_Stack-Movie_Ticket_Booking_Platform",
    },
    {
      name: "Contact Management System",
      link: "https://github.com/KondetiAravind/CONTACT_MANAGEMENT_SYSTEM",
    },
    {
      name: "Hospital Management System",
      link: "https://github.com/KondetiAravind/Hospital_Management_System",
    },
    {
      name: "Memory Latency Characterization",
      link: "https://github.com/KondetiAravind/Cache-Prefetching-and-Memory-Latency-Characterization-for-Performance-Optimization",
    },
    {
      name: "Portfolio Website",
      link: "https://github.com/KondetiAravind/Aravind-Portfolio",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">

          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold">
                {project.name}
              </h3>

              <p className="text-zinc-400 mt-4">
                {project.description}
              </p>

              {project.ongoing ? (
                <span className="inline-block mt-6 px-3 py-1 rounded-full text-sm bg-violet-600/20 text-violet-400">
                  Ongoing Research
                </span>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-blue-400"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}

        </div>

        <h2 className="text-3xl font-bold mb-8">
          All Projects
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">

          {allProjects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[280px] bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold">
                {project.name}
              </h3>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
