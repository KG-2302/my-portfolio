import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const sections = ["home", "skills", "about", "projects", "resume", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const checkActiveSection = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const element = document.getElementById(section);

    if (element) {
      const offsetTop = element.offsetTop;

      // Highlight when section top is within half the viewport
      if (scrollY + windowHeight / 2 >= offsetTop) {
        setActiveSection(section);
        break;
      }
    }
  }
};


  useEffect(() => {
    const handleScroll = () => {
      checkActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const handleNavClick = () => {
  setIsMenuOpen(false);
  setTimeout(() => {
    checkActiveSection();
  }, 50);
};


  return (
    <nav className="bg-white shadow px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">KG</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 text-sm font-medium text-gray-700">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                onClick={handleNavClick}
                className={`hover:text-blue-500 transition ${
                  activeSection === sec ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-blue-700 focus:outline-none"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-sm font-medium text-gray-700 md:hidden">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                onClick={handleNavClick}
                className={`block hover:text-blue-500 transition ${
                  activeSection === sec ? "text-blue-600 font-semibold" : ""
                }`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
