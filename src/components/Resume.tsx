const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white to-blue-50 px-4 sm:px-6 lg:px-12 py-20 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">Resume</h2>

      {/* Summary */}
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
        I am a passionate Web Developer with hands-on experience in building real-world systems using React, Vue.js, Laravel, and Firebase. I thrive in solving problems with clean, scalable, and maintainable code.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-800 max-w-5xl w-full mb-12">
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Skills</h3>
          <ul className="list-disc list-inside text-sm sm:text-base leading-relaxed">
            <li>React, Vue.js, Quasar Framework</li>
            <li>TypeScript, JavaScript, Tailwind CSS</li>
            <li>Laravel, Firebase, MySQL</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Experience</h3>
          <ul className="list-disc list-inside text-sm sm:text-base leading-relaxed">
            <li>OJT at CICTMO – OJT/Immersion System</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Education</h3>
          <p className="text-sm sm:text-base leading-relaxed">
            Bachelor’s in Information Technology<br />
            2021 - 2025<br />
            University of Mindanao Tagum City
          </p>
        </div>
      </div>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm sm:text-base font-medium hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
