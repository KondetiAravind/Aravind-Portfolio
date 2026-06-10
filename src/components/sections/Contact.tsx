import { personal } from "@/src/data/personal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Contact
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href={`mailto:${personal.email}`}
            className="group rounded-3xl p-8 bg-gradient-to-br from-blue-950/70 to-cyan-950/30 border border-blue-800/40 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">📧</div>

            <h3 className="text-2xl font-bold">
              Email
            </h3>

            <p className="text-zinc-300 mt-4 break-all">
              {personal.email}
            </p>

            <p className="mt-6 text-cyan-400 font-medium">
              Send Message →
            </p>
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl p-8 bg-gradient-to-br from-violet-950/70 to-purple-950/30 border border-violet-800/40 hover:border-violet-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">💻</div>

            <h3 className="text-2xl font-bold">
              GitHub
            </h3>

            <p className="text-zinc-300 mt-4">
              View Repositories
            </p>

            <p className="mt-6 text-violet-400 font-medium">
              Explore Projects →
            </p>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl p-8 bg-gradient-to-br from-emerald-950/70 to-teal-950/30 border border-emerald-800/40 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-4xl mb-4">🚀</div>

            <h3 className="text-2xl font-bold">
              LinkedIn
            </h3>

            <p className="text-zinc-300 mt-4">
              Connect Professionally
            </p>

            <p className="mt-6 text-emerald-400 font-medium">
              Let's Connect →
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}
