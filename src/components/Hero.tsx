import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-24 text-center flex flex-col items-center">
        {/* Profile Image */}
        <img
          src="/images/profile.jpg"
          alt="Sunil Kumar"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg border-4 border-white mb-6"
        />

        {/* Name + Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold">Sunil Kumar</h1>
        <p className="mt-4 text-xl md:text-2xl font-medium opacity-90">
          Full-Stack Java Developer | 15+ Years Experience
        </p>

        {/* Summary */}
        <p className="mt-6 max-w-3xl mx-auto text-lg opacity-80">
          Highly skilled and motivated Java developer with 15 years of
          experience in enterprise-level applications. Proficient in Java, Spring
          Boot, Microservices, Apache Spark, and Python. Passionate about AI
          integrations (OCR, Face Recognition, Speech-to-Text) and delivering
          client-focused solutions.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-200"
          >
            Hire Me
          </a>
          <a
            href="/resume.pdf" download
            className="px-6 py-3 border border-white rounded-lg hover:bg-white/10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
