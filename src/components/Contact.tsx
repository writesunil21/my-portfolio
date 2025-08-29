import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      <p className="text-lg text-gray-700 text-center mb-8">
        I’m open to freelance projects, collaborations, and opportunities.
        <br />
        Let’s build something great together 🚀
      </p>

      <div className="flex flex-col items-center space-y-4">
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

        <div className="flex space-x-4 mt-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
