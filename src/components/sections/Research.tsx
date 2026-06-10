export default function Research() {
  return (
    <section id="research" className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Research Interests
        </h2>

        <div className="flex flex-wrap gap-4">

          {[
            "Computer Vision",
            "Deep Learning",
            "Multimodal Learning",
            "NLP",
            "Data Engineering",
            "Explainable AI",
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-2 border rounded-xl"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}