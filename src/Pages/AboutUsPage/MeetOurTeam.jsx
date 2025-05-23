import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";

const gameData = [
  {
    id: 1,
    title: "Brandon James",
    description: "Founder",
    image: pic1,
    platforms: [FaFacebookF, FaLinkedinIn, MdEmail],
  },
  {
    id: 2,
    title: "Olivia Rogers",
    description: "Co-Founder",
    image: pic2,
    platforms: [FaFacebookF, FaLinkedinIn, MdEmail],
  },
  {
    id: 3,
    title: "Victoria Thomas",
    description: "Graphic Designer",
    image: pic3,
    platforms: [FaFacebookF, FaLinkedinIn, MdEmail],
  },

  {
    id: 4,
    title: "Taylor Murray",
    description: "Programer",
    image: pic4,
    platforms: [FaFacebookF, FaLinkedinIn, MdEmail],
  },
];

const MeetOurTeam = () => {
  return (
    <div>
      {/* Featured Games */}
      <div className="w-full bg-[#0c0c35] bg-[url('./assets/pattern1.png')] bg-contain bg-center bg-no-repeat">
        <div className="container mx-auto text-white text-center p-4 md:p-8 lg:p-16">
          <h6 className="sm:text-lg md:text-xl lg:text-2xl  text-[#db79de] font-bold uppercase font-sans tracking-[1px]">
            Meet our team
          </h6>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mt-3 font-sans tracking-[1px]">
            We talk a lot about hope helping and teamwork.{" "}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:py-14 sm:px-3  md:px-5 lg:px-10">
          {gameData.map((game) => (
            <div
              key={game.id}
              className="group relative w-full max-w-2xl rounded-2xl p-4 md:p-5 bg-[#343944]/60  border border-transparent hover:border-[#db79de] overflow-hidden shadow-lg transition-all duration-500 mx-auto"
            >
              {/* Background Overlay (moves in from bottom) */}
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden z-0">
                <div className="w-full h-full bg-gradient-to-r from-purple-800 to-blue-800 transform translate-y-full group-hover:translate-y-0 transition-all duration-500"></div>
              </div>

              {/* Image */}
              <div className="relative z-10">
                <img
                  src={game.image}
                  alt="Game Poster"
                  className="w-full h-48 sm:h-56 md:h-80 object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-2 sm:p-3 md:p-0 lg:p-10 text-center mt-3">
                <h2 className="text-white text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium mb-2 sm:mb-4">
                  {game.title}
                </h2>
                <p className="text-white text-xl sm:text-xl md:text-xl lg:text-2xl font-medium mb-2 sm:mb-4">
                  {game.description}
                </p>
                <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 mt-2 ">
                  {game.platforms.map((Icon, idx) => (
                    <Link
                      to="#"
                      key={idx}
                      className="p-1 sm:p-4 rounded-full bg-gray-600 hover:bg-white  hover:text-purple-800 text-white text-xl sm:text-2xl md:text-xl lg:text-2xl hover:scale-125 transition-transform"
                    >
                      <Icon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
