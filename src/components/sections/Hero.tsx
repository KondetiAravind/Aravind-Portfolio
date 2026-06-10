import Image from "next/image";
import { personal } from "@/src/data/personal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-black to-violet-950/50" />

      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-violet-500/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-blue-300 text-lg mb-4">
              {personal.role}
            </p>

            <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6 text-white">
              {personal.name}
            </h1>

            <p className="text-3xl text-zinc-300 mb-6 font-medium">
              {personal.tagline}
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10">
              {personal.shortBio}
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="/resumes/aravind-sde.pdf"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                SDE Resume
              </a>

              <a
                href="/resumes/aravind-ds.pdf"
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-105 transition-all duration-300"
              >
                DS Resume
              </a>

              <a
                href={personal.github}
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-violet-500 hover:bg-violet-500/10 hover:scale-105 transition-all duration-300"
              >
                GitHub
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500/10 hover:scale-105 transition-all duration-300"
              >
                LinkedIn
              </a>

            </div>

          </div>

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 blur-[80px] opacity-40" />

              <Image
                src="/images/profile/profile.jpeg"
                alt="Kondeti Aravind"
                width={450}
                height={450}
                className="relative rounded-full object-cover border-4 border-white/10"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}