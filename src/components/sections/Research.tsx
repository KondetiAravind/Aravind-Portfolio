export default function Research() {
  const domains = [
    "Computer Vision",
    "Deep Learning",
    "NLP",
    "Multimodal AI",
    "Data Engineering",
    "Generative AI",
    "Machine Learning",
    "Data Analytics",
  ];

  return (
    <section
      id="research"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Research Interests
        </h2>

        <div className="flex flex-wrap gap-4">

          {domains.map((domain) => (
            <div
              key={domain}
              className="px-6 py-3 rounded-full border border-emerald-700/40 bg-gradient-to-r from-emerald-950/60 to-teal-950/40 text-emerald-300 hover:scale-105 transition-all duration-300"
            >
              {domain}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}