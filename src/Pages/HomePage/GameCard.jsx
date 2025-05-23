import React from "react";
import { Link } from "react-router-dom";
import { FaXbox, FaPlaystation, FaGooglePlay } from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpeg";
import img3 from "../../assets/img3.jpeg";
import img4 from "../../assets/img4.jpeg";
import img5 from "../../assets/img5.jpeg";
import img6 from "../../assets/img6.jpeg";
import img7 from "../../assets/img7.jpeg";
import img8 from "../../assets/img8.jpeg";

// Sample data for games
const gameData = [
  {
    id: 1,
    title: "Multiplayer Game",
    description: "The Lost Viking Saga 2024",
    image: img4,
    platforms: [FaXbox, FaPlaystation, SiNintendoswitch, FaGooglePlay],
  },
  {
    id: 2,
    title: "Role Playing",
    description: "Shadowblade:Nightfall Assassin.",
    image: img1,
    platforms: [FaXbox, FaPlaystation, SiNintendoswitch, FaGooglePlay],
  },
  {
    id: 3,
    title: "Multiplayer Game",
    description: "CyberGuardians : Rise of the Machines.",
    image: img2,
    platforms: [FaXbox, FaPlaystation, SiNintendoswitch, FaGooglePlay],
  },

  {
    id: 4,
    title: "Role Playing",
    description: "Starbound Odeyssey: Galactic Explorer.",
    image: img3,
    platforms: [FaXbox, FaPlaystation, SiNintendoswitch, FaGooglePlay],
  },
  {
    id: 5,
    title: "Role Playing",
    description: "NeonSorcery: Wizards of the future",
    image: img5,
    platforms: [FaXbox, FaPlaystation, SiNintendoswitch, FaGooglePlay],
  },
  {
    id: 6,
    title: "Multiplayer Game",
    description: "Knight's Valor: Fields of Glory.",
    image: img6,
    platforms: [FaXbox, FaPlaystation, SiNintendoswitch, FaGooglePlay],
  },
  {
    id: 7,
    title: "Role Playing",
    description: "Journeys Across Dimensions.",
    image: img8,
    platforms: [FaXbox, FaPlaystation, SiNintendoswitch, FaGooglePlay],
  },
  {
    id: 8,
    title: "Multiplayer Game",
    description: "Skater Pro: The Xtreme Game 2024",
    image: img7,
    platforms: [FaXbox, FaPlaystation, SiNintendoswitch, FaGooglePlay],
  },
];

const GameCard = () => {
  return (
    <div>
      {/* Featured Games */}
      <div className="w-full bg-[#0c0c35]">
        {/* Heading Section */}
        <div className="container mx-auto text-white text-center  lg:p-6 xl:p-6">
          <h2 className="text-2xl xs:text-3xl sm:text-xl md:text-4xl lg:text-6xl font-bold tracking-wide font-sans">
            Featured Games
          </h2>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 py-6 sm:py-8 md:py-12 px-4 sm:px-3 md:px-8 lg:px-12 xl:px-16">
          {gameData.map((game) => (
            <div
              key={game.id}
              className="group relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 bg-[#1F2530] border border-transparent hover:border-[#db79de]/80 hover:bg-slate-800 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mx-auto"
            >
              {/* Image Container */}
              <div className="relative">
                <img
                  src={game.image}
                  alt="Game Poster"
                  className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg"
                />

                {/* Buy Now Button */}
                <Link to="/">
                  <button className="absolute top-2 right-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm xs:text-base sm:text-lg font-semibold px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-md hover:from-purple-600 hover:to-indigo-700">
                    Buy Now
                  </button>
                </Link>
              </div>

              {/* Game Info */}
              <div className="p-2 sm:p-3 text-center space-y-2 sm:space-y-3 md:space-y-4">
                <h2 className="text-base xs:text-lg sm:text-sm md:text-lg lg:text-2xl font-bold text-[#db79de] uppercase font-sans tracking-wide">
                  {game.title}
                </h2>
                <p className="text-white text-lg sm:text-xl md:text-xl lg:text-3xl font-medium font-sans tracking-wide">
                  {game.description}
                </p>
                <div className="flex justify-center space-x-2 sm:space-x-3 mt-2 sm:mt-3">
                  {game.platforms.map((Icon, idx) => (
                    <Link
                      to="#"
                      key={idx}
                      className="p-1 sm:p-1.5 rounded-full hover:bg-[#db79de]/50 text-white text-lg sm:text-xl hover:scale-110 transition-transform"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex items-center justify-center ">
          <Link
            to="/our-games"
            className="inline-block bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold px-8 sm:px-12 md:px-12 lg:px-20 tracking-wider py-2 sm:py-3 md:py-2 lg:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
