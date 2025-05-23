import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  { name: "Tournaments", to: "/tournaments" },
  { name: "Help Center", to: "/help-center" },
  { name: "Privacy and Policy", to: "/privacy-policy" },
  { name: "Terms of Use", to: "/terms-of-use" },
  { name: "Contact Us", to: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-transparent text-white px-4 sm:px-6 py-8 sm:py-10 md:py-12">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {/* Logo & About */}
        <div className="mb-6 sm:mb-0">
          <div className="flex items-center gap-2 mb-4 header-logo">
            <img
              src="/logo.png"
              alt="logo"
              className="w-40 sm:w-48 md:w-48 h-auto max-h-20"
            />
          </div>
          <p className="text-base sm:text-sm md:text-lg lg:text-xl text-gray-300 leading-relaxed">
            Our success in creating business solutions is due in large part to
            our talented and highly committed team.
          </p>
          <div className="flex gap-3 mt-4 sm:mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
              <div key={i} className="relative">
                <button className="bg-[#9841FF4D] hover:bg-purple-600 transition w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 flex items-center justify-center shadow-md">
                  <Icon className="text-white text-xl sm:text-2xl" />
                </button>
                <span className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#0a0a2a] rotate-45 translate-x-1/2 -translate-y-1/2"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="mb-6 sm:mb-0">
          <h2 className="font-bold text-xl sm:text-xl lg:text-2xl mb-3 sm:mb-4 relative">
            Useful Links
            <span className="block w-12 sm:w-16 h-0.5 sm:h-1 bg-purple-500 mt-1" />
          </h2>
          <ul className="space-y-1 sm:space-y-2 text-base sm:text-sm md:text-lg lg:text-xl text-gray-300">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6 sm:mb-0">
          <h2 className="font-bold text-xl sm:text-xl lg:text-2xl mb-3 sm:mb-4 relative">
            Contact Us
            <span className="block w-12 sm:w-16 h-0.5 sm:h-1 bg-purple-500 mt-1" />
          </h2>
          <div className="text-base sm:text-sm md:text-lg lg:text-xl text-gray-300 space-y-2 sm:space-y-3">
            <div>
              <span className="text-purple-400 font-semibold block mb-1">
                Location:
              </span>
              <p>
                153 Williamson Plaza,
                <br />
                Maggieberg, MT 09514
              </p>
            </div>
            <div>
              <span className="text-purple-400 font-semibold block mb-1">
                Join Us:
              </span>
              <p>Info@YourGmail24.com</p>
            </div>
            <div>
              <span className="text-purple-400 font-semibold block mb-1">
                Phone:
              </span>
              <p>+1 (062) 109-9222</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="font-bold text-xl sm:text-xl lg:text-2xl mb-3 sm:mb-4 relative">
            Newsletter Signup
            <span className="block w-12 sm:w-16 h-0.5 sm:h-1 bg-purple-500 mt-1" />
          </h2>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base md:text-lg bg-[#10102a] text-white border border-purple-800 rounded-md focus:outline-none mb-3 sm:mb-4"
          />
          <button className="relative px-4 sm:px-3 py-2 sm:py-3 lg:px-6 text-white font-semibold text-xs sm:text-sm md:text-sm lg:text-xl uppercase bg-btn hover:bg-[#9841ff] shadow-lg hover:opacity-90 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Subscribe Now</span>
            <span className="absolute right-0 top-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#0a0a2a] -rotate-45 translate-x-1/2 -translate-y-1/2"></span>
          </button>
        </div>
      </div>

      {/* Back to Top */}
      <div className="mt-8 sm:mt-10 flex justify-end">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gradient-to-r bg-btn p-2 sm:p-3 rounded-tr-xl rounded-bl-md hover:scale-105 transition-transform"
        >
          <span className="text-white text-lg sm:text-xl">↑</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
