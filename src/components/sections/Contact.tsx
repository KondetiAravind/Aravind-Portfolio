import { personal } from "@/src/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10">
          Contact
        </h2>

        <div className="space-y-4">

          <p>
            Email: {personal.email}
          </p>

          <p>
            GitHub: {personal.github}
          </p>

          <p>
            LinkedIn: {personal.linkedin}
          </p>

        </div>

      </div>
    </section>
  );
}