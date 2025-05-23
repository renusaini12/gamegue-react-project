import React from "react";
import { MdPhonelink } from "react-icons/md";
import { FaPenAlt } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import img1 from "../../assets/image.png";
import GameCard from "./GameCard";
import ServiceCard from "./ServiceCard";
import LatestNews from "./LatestNews";
import GetkingUpdate from "./GetkingUpdate";
import PlaySection from "./PlaySection";

const Home = () => {
  return (
    <div>
      <PlaySection />
      {/* Our Services */}

      <div className=" bg-[#0c0c35] ">
        <div className=" mx-auto px-4 sm:px-1 md:px-4 lg:px-8  ">
          <div className="flex flex-col lg:flex-row">
            {/* Text Content */}
            <div className="w-full p-6 sm:p-3 md:p-12 lg:p-16 order-2 lg:order-1 relative z-10 lg:w-1/2">
              {/* Heading Section */}
              <div className="mb-8 space-y-4 md:space-y-14">
                <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-sans text-[#db79de] uppercase tracking-wider">
                  Our Services
                </h6>
                <h2 className="text-2xl sm:text-xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-[2px] font-sans text-white">
                  Crafting Stories, Building Worlds, Shaping Adventures
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#acbad4] max-w-3xl">
                  Quisque nascetur lorem duis dapibus viverra. Cras dictum mi
                  nascetur aliquam egestas. Fermentum nunc iaculis praesent
                  cubilia elementum ante condimentum pretium et torquent montes.
                </p>
              </div>

              {/* Services Grid */}
              <div className="space-y-6 sm:space-y-4 mb-8 sm:mb-10">
                {/* Service 1 */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 bg-[#db79de] p-4 sm:p-5 md:p-6 rounded-full">
                    <FaPenAlt className="w-6 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-bold font-sans text-white mb-1 sm:mb-2">
                      Top-Tier Graphics and Animation
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#acbad4]">
                      Lorem curae rutrum lectus platea dis primis luctus quisque
                      tincidunt magna sociosqu
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 bg-[#db79de] p-4 sm:p-5 md:p-6 rounded-full">
                    <MdPhonelink className="w-6 h-6 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-lg md:text-2xl lg:text-3xl font-bold font-sans text-white mb-1 sm:mb-2">
                      Multi-Platform Optimization
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#acbad4]">
                      Lorem curae rutrum lectus platea dis primis luctus quisque
                      tincidunt magna sociosqu
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block border-t border-gray-600 my-6 sm:my-8"></div>

              {/* Button */}
              <div className="text-center sm:text-left mt-16">
                <button className="w-full sm:w-auto px-6 py-3 sm:px-4 sm:py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 tracking-[3px] sm:tracking-[5px] bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-sm sm:text-base md:text-lg lg:text-xl uppercase font-bold rounded-full hover:opacity-90 transition duration-300">
                  Discover more
                </button>
              </div>
            </div>

            {/* Image and Lottie Animation */}
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[500px] lg:w-1/2 order-1 lg:order-2 relative">
              {/* Lottie Animation Background */}
              <div className="absolute inset-0 flex justify-center items-center mr-0 sm:mr-28">
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/2c3e7eaa-7cc7-4add-85c6-0933c10ede80/0rBSpJGF0b.json"
                  className="w-3/4 sm:w-2/3 md:w-[500px] lg:w-[750px] opacity-100 "
                />
              </div>

              {/* Foreground Image */}
              <div className="relative z-10 flex md:p-16  justify-center items-center w-full h-full">
                <img
                  src={img1}
                  alt="Services illustration"
                  className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceCard />
      <GameCard />
      <LatestNews />
      <GetkingUpdate />
    </div>
  );
};

export default Home;
