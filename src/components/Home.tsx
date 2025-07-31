import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="text-blue-700 font-extrabold">
            <Typewriter
              words={['Kouichi Guisihan']}
              loop={Infinity}
              typeSpeed={90}
              deleteSpeed={40}
              delaySpeed={1600}
            />
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 min-h-[2rem]">
          <Typewriter
            words={['Web Developer']}
            loop={1}
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1800}
          />
        </p>

        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base sm:text-lg font-medium transition duration-300 shadow-lg"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
