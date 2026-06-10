export default function Stats() {
  const stats = [
    {
      value: "7+",
      label: "Major Projects",
    },
    {
      value: "1",
      label: "Industry Internship",
    },
    {
      value: "5th",
      label: "Year Dual Degree",
    },
    {
      value: "IIT",
      label: "Bhubaneswar",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-800 p-6 bg-zinc-900 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-4xl font-bold">
                {item.value}
              </h3>

              <p className="text-zinc-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}