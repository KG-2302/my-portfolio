import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-4 sm:px-6 lg:px-12 py-20 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">Contact</h2>

      <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        Whether you have a project in mind, want to collaborate, or just want to say hi — I’d love to hear from you!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-2 text-gray-800 text-sm sm:text-base mb-8">
        <a
          href="mailto:kouichiguisihan@gmail.com"
          className="text-blue-600 hover:underline transition"
        >
          kouichiguisihan@gmail.com
        </a>
        <p>+63 921 723 23508</p>
        <p>+63 906 861 43210</p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-2xl sm:text-3xl mt-2">
        <a
          href="https://www.facebook.com/kouichiguisihan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/_kouichiguisihan_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/KG-2302"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
