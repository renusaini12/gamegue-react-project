import React from "react";
import cybergame from "../../assets/cybergame.jpg";

const WhoWeAre = () => {
  return (
    <div>
      <div className="w-full bg-[#0c0c35]">
        <div className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 text-white">
            {/* Text Content */}
            <div className="w-full space-y-6 sm:space-y-8 md:space-y-10 py-6 sm:py-8 md:py-10 lg:py-0 order-2 lg:order-1">
              <div>
                <h6 className="text-sm sm:text-lg md:text-xl lg:text-2xl md:px-10 lg:px-0 uppercase font-bold text-[#db79de] font-sans tracking-wide">
                  Who we are
                </h6>
              </div>

              <div>
                <h2 className="text-2xl xs:text-4xl sm:text-xl lg:text-6xl md:text-3xl  font-bold text-white mt-1 sm:mt-2 tracking-wide font-sans">
                  Gaming Redefined: Discover the gamequ Experience.
                </h2>
              </div>

              <div>
                <p className="text-base sm:text-lg md:text-lg lg:text-2xl text-gray-400 mt-2 sm:mt-3 md:mt-4">
                  Neque eleifend elit vel fringilla rhoncus dolor nisi sodales
                  tempor. Dui donec risus tristique sapien metus. Placerat eu
                  nisi sollicitudin amet proin id litora natoque vitae euismod.
                </p>
              </div>

              {/* Button */}
              <div className="text-center lg:text-left">
                <button className="w-full sm:w-auto  px-6 py-3 md:px-8  md:py-3 lg:px-10 lg:py-4 tracking-wider sm:tracking-[3px] md:tracking-[5px] bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-sm sm:text-sm md:text-sm lg:text-lg uppercase font-semibold rounded-full hover:opacity-90 hover:shadow-lg transition-all duration-300">
                  Discover more
                </button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative order-1 lg:order-2">
              <img
                src={cybergame} // Make sure to replace {cybergame} with your actual image path or import
                alt="Cyber Game"
                className="rounded-xl sm:rounded-2xl md:rounded-3xl w-full sm:h-[300px] md:h-[500px] object-cover"
              />

              {/* Stats Badge - Responsive Positioning */}
              <div className="absolute -top-10 sm:-top-16 md:-top-12 -right-6 sm:-right-10 md:-right-16 mt-2 sm:mt-4 mr-2 sm:mr-4 bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-40 md:h-40 lg:w-72 lg:h-72 flex flex-col justify-center items-center shadow-lg p-4 sm:p-6">
                <h3 className="text-4xl sm:text-5xl md:text-4xl lg:text-7xl font-semibold text-center">
                  7M+
                </h3>
                <p className="text-sm sm:text-base md:text-sm lg:text-xl xl:text-2xl font-semibold text-center mt-1 sm:mt-2">
                  Game Downloaded
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
