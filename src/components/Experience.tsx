import React from "react";

const experiences = [
  {
    role: "Java Microservices Lead Developer",
    company: "Affluentgs",
    client: "Proximus",
    duration: "Oct 2024 – Apr 2025",
    details: [
      "Worked on enhancements and bug fixes for Proximus, a telecom provider.",
      "Developed and optimized microservices to improve system functionality and customer experience.",
      "Collaborated with cross-functional teams to resolve technical challenges in the telco domain.",
    ],
  },
  {
    role: "Lead Java Developer",
    company: "Tata Consultancy Services",
    client: "Deutsche Bank AG",
    duration: "Jun 2015 – Jul 2024",
    details: [
      "5+ years of client-facing onsite experience in London as Technical Lead.",
      "Implemented trade surveillance feeds and pricing data ingestion (Reuters, Mercury, internal systems).",
      "Designed and developed microservices using Spring Boot.",
      "Implemented RESTful APIs for microservice communication.",
      "Created and optimized database schema for efficient data retrieval.",
      "Conducted code reviews and implemented automated testing (JUnit, Mockito).",
    ],
  },
  {
    role: "Senior Java Developer",
    company: "Accenture",
    client: "T-Mobile",
    duration: "Oct 2014 – Jun 2015",
    details: [
      "Enhanced the T-Mobile web portal with recharge and data rollover features.",
      "Collaborated with QA, DevOps, and product teams to deliver improvements.",
      "Followed Agile methodology with regular story grooming and task updates.",
    ],
  },
  {
    role: "Java Developer",
    company: "Headstrong Capital Market",
    client: "Morgan Stanley",
    duration: "Apr 2011 – Sep 2014",
    details: [
      "Developed and enhanced Listed Derivative Datawarehouse for Morgan Stanley.",
      "Handled upstream XML messages and downstream reporting requirements.",
      "Created Autosys batch jobs and dashboards for real-time/batch processing.",
    ],
  },
  {
    role: "Java Developer",
    company: "Amdocs",
    client: "Sensis Australia",
    duration: "Apr 2010 – May 2011",
    details: [
      "Worked on Sensis Yellow Pages search service (online & offline).",
      "Handled database modifications and implemented new customer features.",
      "Fixed bugs and improved marketing spend effectiveness for advertisers.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">
              {exp.role} –{" "}
              <span className="text-blue-600">{exp.company}</span>
            </h3>
            <p className="text-gray-600 text-sm">
              {exp.client} | {exp.duration}
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1 text-gray-700">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
