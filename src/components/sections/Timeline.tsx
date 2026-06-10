import { timeline } from "@/src/data/timeline";

export default function Timeline() {
  return (
    <section id="timeline" className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Journey
        </h2>

        <div className="space-y-8">

          {timeline.map((item) => (
            <div
              key={item.year}
              className="border-l-2 pl-6"
            >
              <p className="font-bold text-xl">
                {item.year}
              </p>

              <h3 className="font-semibold text-lg mt-1">
                {item.title}
              </h3>

              <p className="text-zinc-500 mt-2">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}