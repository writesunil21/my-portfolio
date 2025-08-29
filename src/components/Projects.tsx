import React from "react";

const projects = [
  {
    name: "School Management System",
    description:
      "Full-stack app with React + Spring Boot. Features AI integrations: face recognition attendance, OCR, and speech-to-text.",
    tags: ["React", "Spring Boot", "AI", "PostgreSQL"],
    github: "https://github.com/your-username/school-management-system",
  },
  {
    name: "OCR & Document Scanner API",
    description:
      "Python Flask + Tesseract OCR service with preprocessing (denoise, resize, thresholding) for high accuracy text extraction.",
    tags: ["Python", "Flask", "OCR", "Docker"],
    github: "https://github.com/your-username/ocr-api",
  },
  {
    name: "Face Recognition Attendance",
    description:
      "Realtime attendance system using Python face recognition, React frontend, and Spring Boot backend.",
    tags: ["React", "Spring Boot", "Computer Vision"],
    github: "https://github.com/your-username/face-attendance",
  },
  {
    name: "Portfolio Website",
    description:
      "Personal portfolio built with React + TypeScript + Tailwind, showcasing skills, projects, and experience.",
    tags: ["React", "TailwindCSS", "TypeScript"],
    github: "https://github.com/your-username/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {project.name}
              </h3>
              <p className="mt-2 text-gray-700">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-100 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
