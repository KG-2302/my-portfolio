const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-blue-50 px-4 sm:px-6 lg:px-12 py-20"
    >
      <div className="max-w-3xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8">
          About Me
        </h2>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
          Hello! I'm{" "}
          <span className="font-semibold text-blue-600">
            Kouichi Guisihan
          </span>
          , a passionate web developer with a strong focus on building
          responsive, user-friendly web and mobile applications. My journey in
          tech started with curiosity and grew into a full-blown passion for
          software development.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
          I recently graduated and completed my OJT at the City Hall of Tagum,
          where I helped develop systems using technologies like Vue.js, Quasar,
          Laravel, React, and Flutter. I enjoy solving real-world problems with
          code and continuously learning new technologies to sharpen my skills.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          When I'm not coding, I’m usually exploring new tools, tinkering with
          design ideas, or studying software architecture to grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;
