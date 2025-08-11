import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaLaravel,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiQuasar,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiFirebase,
  SiMysql,
  SiKotlin,
  SiFlutter,
} from "react-icons/si";
import { MdOutlineExtension } from "react-icons/md";
import { TbBrandVscode } from "react-icons/tb";

const skills = {
  Frontend: [
    { name: "React", icon: FaReact },
    { name: "Vue.js (Quasar Framework)", icon: SiQuasar },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  Backend: [
    { name: "Laravel (PHP)", icon: FaLaravel },
    { name: "ASP.NET Core", icon: SiDotnet },
    { name: "Node.js", icon: FaNodeJs },
  ],
  Databases: [
    { name: "Firebase", icon: SiFirebase },
    { name: "MySQL", icon: SiMysql },
  ],
  "Other Tools": [
    { name: "Git & GitHub", icon: FaGitAlt },
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "VB.Net", icon: TbBrandVscode },
    { name: "Kotlin", icon: SiKotlin },
    { name: "Flutter", icon: SiFlutter },
    { name: "Pinia", icon: MdOutlineExtension },
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
            <div className="flex flex-wrap justify-center gap-10">
              {items.map(({ name, icon: Icon }, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-blue-700 transition-transform hover:-translate-y-1"
                >
                  <Icon className="text-5xl mb-2 hover:animate-bounce" />
                  <span className="text-sm sm:text-base font-medium">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
