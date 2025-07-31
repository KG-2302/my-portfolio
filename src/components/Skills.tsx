const skills = {
  Frontend: [
    "React",
    "Vue.js (Quasar Framework)",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  Backend: ["Laravel (PHP)", "ASP.NET Core", "Node.js"],
  Databases: ["Firebase", "MySQL"],
  "Other Tools": [
    "Git & GitHub",
    "Java",
    "Python",
    "VB.Net",
    "Kotlin",
    "Flutter",
    "Pinia",
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-4 sm:px-6 lg:px-12 py-20"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-14">
        Technical Skills
      </h2>

      <div className="grid gap-16 max-w-6xl w-full">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-900 px-4 py-2 sm:px-5 sm:py-3 rounded-md shadow hover:bg-blue-200 hover:animate-bounce hover:[animation-delay:_100ms] transition text-sm sm:text-base font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Skills;
