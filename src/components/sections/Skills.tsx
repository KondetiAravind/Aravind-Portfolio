export default function Skills() {
  const skills = [
    "Python",
    "C",
    "C++",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "Data Engineering",
    "Power BI",
    "HTML",
    "CSS",
    "Git",
    "Linux",
    "Streamlit",
  ];

  return (
    <section
      id="skills"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-950/70 to-cyan-950/40 border border-blue-900/50 hover:border-blue-500 hover:scale-105 transition-all duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
