import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LiaGamepadSolid } from "react-icons/lia";

const OurValue = () => {
  return (
    <div>
      <div className="w-full bg-[#0c0c35] text-white">
        <div className="max-w-full mx-auto px-4 sm:px-2 md:px-4 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-4 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="space-y-6 sm:space-y-4 md:space-y-8  sm:px-4  md:py-10 ">
              <h6 className="text-lg sm:text-lg md:text-2xl lg:text-2xl uppercase font-bold text-[#db79de] font-sans tracking-wide">
                Our value
              </h6>
              <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-6xl font-bold text-white mt-1 sm:mt-2 font-sans tracking-wide leading-tight">
                Crafting Joyful Pixels: gamequ's Artistry in Game Development{" "}
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mt-3 sm:mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* Right Column - Cards */}
            <div className="grid grid-rows-2 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-2 md:p-1  order-2 md:order-2">
              {/* Vision Card */}
              <div className="p-6 sm:p-4 md:p-8 lg:p-10 bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] border-b border-b-white/30 rounded-xl sm:rounded-2xl shadow-md w-full hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-3 md:gap-4">
                  <div className="flex items-center justify-center bg-white rounded-full p-3 sm:p-2 lg:p-4 text-blue-500 text-4xl sm:text-5xl md:text-2xl lg:text-5xl shadow-md">
                    <HiOutlineLightBulb />
                  </div>

                  <div className="text-left">
                    <div className="text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
                      Our Vision
                    </div>
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl leading-relaxed sm:leading-loose">
                      Tortor morbi lorem neque ex scelerisque accumsan.
                      Curabitur urna sapien congue aliquam consectetur feugiat
                      pretium. Dictumst litora donec cubilia dolor nulla
                      lobortis felis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="p-6 sm:p-4 md:p-8 lg:p-10 bg-[#323741]/70 rounded-xl sm:rounded-2xl shadow-md w-full border-b border-b-white/30 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-3 md:gap-4">
                  <div className="flex items-center justify-center bg-white rounded-full p-3 sm:p-2 lg:p-4 text-blue-500 text-4xl sm:text-5xl md:text-2xl lg:text-5xl shadow-md">
                    <LiaGamepadSolid />
                  </div>

                  <div className="text-left">
                    <div className="text-xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl font-semibold text-white mb-2 sm:mb-3 md:mb-4">
                      Our Mission
                    </div>
                    <p className="text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-2xl leading-relaxed sm:leading-loose">
                      Tortor morbi lorem neque ex scelerisque accumsan.
                      Curabitur urna sapien congue aliquam consectetur feugiat
                      pretium. Dictumst litora donec cubilia dolor nulla
                      lobortis felis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
