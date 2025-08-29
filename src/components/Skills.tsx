import React from "react";

const skills = [
  "Java 11",
  "Spring Boot",
  "Microservices",
  "Apache Spark",
  "Apache Solr",
  "Hadoop",
  "Python",
  "SQL",
  "Angular 14",
  "JUnit / Mockito",
  "MySQL",
  "Oracle",
  "Git / Jenkins",
  "TeamCity / uDeploy",
  "Docker",
  "Cloud (Oracle, GCP)",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow text-center font-medium hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
