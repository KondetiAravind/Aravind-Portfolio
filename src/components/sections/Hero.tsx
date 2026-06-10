import Image from "next/image";
import { personal } from "@/src/data/personal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-zinc-400 text-lg mb-4">
              {personal.role}
            </p>

            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6">
              {personal.name}
            </h1>

            <p className="text-2xl text-zinc-300 mb-6">
              {personal.tagline}
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10">
              {personal.shortBio}
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/resumes/aravind-sde.pdf"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300"
              >
                SDE Resume
              </a>

              <a
                href="/resumes/aravind-ds.pdf"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300"
              >
                DS Resume
              </a>

              <a
                href={personal.github}
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300"
              >
                GitHub
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300"
              >
                LinkedIn
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-violet-600/30 blur-3xl" />

              <Image
                src="/images/profile/profile.jpeg"
                alt="Kondeti Aravind"
                width={420}
                height={420}
                className="relative rounded-full object-cover border border-zinc-800"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}