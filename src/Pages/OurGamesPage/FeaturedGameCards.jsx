import React from "react";
import { Link } from "react-router-dom";
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
  },
  {
    id: 2,
    title: "Role Playing",
    description: "Shadowblade: Nightfall Assassin.",
    image: img1,
  },
  {
    id: 3,
    title: "Multiplayer Game",
    description: "CyberGuardians: Rise of the Machines.",
    image: img2,
  },
  {
    id: 4,
    title: "Role Playing",
    description: "Starbound Odyssey: Galactic Explorer.",
    image: img3,
  },
  {
    id: 5,
    title: "Role Playing",
    description: "NeonSorcery: Wizards of the Future",
    image: img5,
  },
  {
    id: 6,
    title: "Multiplayer Game",
    description: "Knight's Valor: Fields of Glory.",
    image: img6,
  },
  {
    id: 7,
    title: "Role Playing",
    description: "Journeys Across Dimensions.",
    image: img8,
  },
  {
    id: 8,
    title: "Multiplayer Game",
    description: "Skater Pro: The Xtreme Game 2024",
    image: img7,
  },
];

const FeaturedGameCards = () => {
  return (
    <div>
      {/* Featured Games Section */}
      <div className="w-full bg-[#0c0c35]">
        <div className="container mx-auto text-white text-center p-4 md:p-4 lg:p-10  ">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold font-sans tracking-[1px]">
            Featured Games
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8  px-4 sm:px-3  md:px-6 lg:px-10 ">
          {gameData.map((game) => (
            <div
              key={game.id}
              className="w-full max-w-2xl rounded-2xl p-4 md:p-4 lg:p-8  bg-[#343944]/70 border border-transparent hover:border-[#db79de] overflow-hidden shadow-lg transition-transform duration-300 mx-auto"
            >
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.description}
                  className="w-full h-48 sm:h-56 md:h-52 lg:h-80 object-cover rounded-lg"
                />
              </div>
              <Link to="/Card-detail">
                <div className="p-2 sm:p-3  bg-[#343944]/10 text-center space-y-4 sm:space-y-2 md:space-y-2 lg:space-y-8">
                  <h2 className="text-lg sm:text-sm md:text-sm lg:text-2xl font-bold text-[#db79de] mb-1 sm:mb-2 uppercase font-sans tracking-[1px]">
                    {game.title}
                  </h2>
                  <p className="text-white text-xl sm:text-lg md:text-xl lg:text-3xl font-medium mb-2 sm:mb-4 font-sans tracking-[1px]">
                    {game.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedGameCards;
