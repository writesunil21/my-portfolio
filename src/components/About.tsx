import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
        Highly skilled and motivated Java developer with 15 years of experience
        in designing and developing enterprise-level applications. I have over 5
        years of experience in client-facing onsite roles, serving as a
        technical lead and engaging in direct client discussions. Proficient in
        Java, Spring Boot, Microservices, Apache Spark, Angular, and Python.
        Passionate about learning new technologies, AI integrations (OCR, Face
        Recognition, Speech-to-Text), and delivering scalable, client-focused
        solutions.
      </p>

      <div className="mt-8 flex flex-col items-center space-y-3 text-gray-800">
        <p>
          📧{" "}
          <a
            href="mailto:writesunil21@gmail.com"
            className="text-blue-600 hover:underline"
          >
            writesunil21@gmail.com
          </a>
        </p>
        <p>
          📱{" "}
          <a
            href="tel:+919650511966"
            className="text-blue-600 hover:underline"
          >
            +91 9650511966
          </a>
        </p>
        <p>📍 India</p>
      </div>
    </section>
  );
}
