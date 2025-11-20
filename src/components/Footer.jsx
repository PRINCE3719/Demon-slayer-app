import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = ({ homeRef, characterRef }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="relative bg-gray-900 text-white w-full">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <p className="text-2xl font-bold tracking-wider text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-purple-600">
            Demon Slayer App
          </p>
          <p className="text-gray-300 text-sm italic">Your ultimate character guide</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <button
            onClick={() => scrollToSection(homeRef)}
            className="hover:text-red-500 transition duration-300 font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(characterRef)}
            className="hover:text-red-500 transition duration-300 font-semibold"
          >
            Characters
          </button>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          {[FaInstagram, FaGithub].map((Icon, i) => (
            <a
              key={i}
              href="https://www.instagram.com/_pr_i_nce/#"
              className="
                p-3 rounded-full 
                bg-black 
                text-white border-white hover:shadow-lg hover:scale-110 
                transition transform duration-300
              "
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="relative border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Demon Slayer App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
