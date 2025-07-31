type Project = {
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Garbage Collection System",
    description:
      "A smart system to locate and track garbage truck issues using Flutter Maps and Firebase. Improves route efficiency and monitoring.",
  },
  {
    title: "Booking System",
    description:
      "Built with Flutter and Firebase Realtime Database. Allows users to book appointments, view availability, and track admin approval status.",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal web developer portfolio built with React, TypeScript, and Tailwind CSS to showcase projects, resume, and technical skills.",
  },
  {
    title: "Student Quiz Web App",
    description:
      "An interactive IT skills assessment system using Vue.js (Quasar), Node.js, and MySQL. Designed for academic institutions to assess technical knowledge.",
  },
  {
    title: "Barangay Information System",
    description:
      "Full-stack Laravel and MySQL system used to manage citizen records, issue documents, and provide digital access to barangay services.",
  },
  {
    title: "OJT/Immersion Management System",
    description:
      "Developed with Vue.js (Quasar Framework), Pinia, and Laravel. Enables schools to manage student on-the-job training records, track hours, and generate reports.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-4 sm:px-6 lg:px-12 py-20 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">Projects</h2>
      <p className="text-gray-600 text-base sm:text-lg mb-12 max-w-2xl mx-auto">
        A collection of applications and systems I've developed using a range of modern frontend and backend technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition p-6 text-left"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-3">
              {proj.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
              {proj.description}
            </p>
            {proj.link && (
              <a
                href={proj.link}
                className="text-blue-500 text-sm font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
