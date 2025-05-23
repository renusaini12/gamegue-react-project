import React from "react";
import { MdCallMade } from "react-icons/md";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Player-First Philosophy",
    description:
      "Mauris quis gravida volutpat congue augue massa neque tellus malesuada nam justo.",
  },
  {
    title: "Creative-Driven Team",
    description:
      "Mauris quis gravida volutpat congue augue massa neque tellus malesuada nam justo.",
  },
  {
    title: "Cross-Platform Expertise",
    description:
      "Mauris quis gravida volutpat congue augue massa neque tellus malesuada nam justo.",
  },
];

const features2 = [
  {
    title: "Scalable Solutions",
    description: (
      <>
        Mauris quis gravida volutpat <br />
        congue augue massa neque tellus <br />
        malesuada nam justo.
      </>
    ),
  },
];

const features3 = [
  {
    title: "Unique Art & Style",
    description:
      "Mauris quis gravida volutpat congue augue massa neque tellus malesuada nam justo.",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <div className="bg-[#0c0c35] w-full py-8">
        <div className="w-full mx-auto sm:px-3 lg:px-10">
          <div className="text-center mb-10">
            <h6 className=" sm:text-lg md:text-xl lg:text-2xl text-[#db79de] font-bold uppercase font-sans tracking-[1px]">
              Why Choose Us
            </h6>
            <h2 className="text-xl sm:text-lg md:text-4xl lg:text-6xl font-bold mt-2 text-white font-sans tracking-[1px]">
              Expert Game Developers Committed <br /> to Your Vision
            </h2>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" bg-[#343944]/70 border border-gray-800 p-6 sm:p-8 md:p-6 lg:p-14 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-row-reverse items-start mb-4">
                  <div className="bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-2xl sm:text-3xl p-4 rounded-full ml-4 shadow-md">
                    <MdCallMade />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-lg md:text-lg lg:text-3xl font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg md:text-lg lg:text-2xl mt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <Link>
                  <button className="mt-4 px-6 py-3 sm:px-4 sm:py-2 lg:px-8 lg:py-4  bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-sm sm:text-lg md:text-lg lg:text-2xl tracking-wide font-semibold shadow-md hover:brightness-110 transition duration-300 rounded-full">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-white mt-10">
            {/* Left Column (Main Content) */}
            <div className="lg:col-span-8 space-y-8">
              {features2.map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-[url('./assets/family.jpg')] bg-cover bg-center rounded-lg overflow-hidden shadow-sm hover:shadow-md border border-gray-800"
                >
                  <div className="absolute inset-0 bg-black/70 z-0"></div>
                  <div className="relative z-10 p-6 sm:p-10 md:p-5 lg:p-16">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
                      <div>
                        <h3 className="text-xl sm:text-lg md:text-lg lg:text-3xl font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-base sm:text-lg md:text-lg mt-3">
                          {feature.description}
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-2xl sm:text-3xl p-4 rounded-full">
                        <MdCallMade />
                      </div>
                    </div>
                    <Link href="#">
                      <button className="mt-4 px-6 py-3 sm:px-4 sm:py-2 lg:px-8 lg:py-4  bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-sm sm:text-base md:text-lg lg:text-2xl tracking-wide font-semibold shadow-md hover:opacity-90 transition duration-300 rounded-full">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column (Sidebar Cards) */}
            <div className="lg:col-span-4 space-y-4">
              {features3.map((feature, index) => (
                <div
                  key={index}
                  className=" bg-[#343944]/70 border border-gray-800 p-6 sm:p-8 md:p-6 lg:p-14 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="flex flex-row-reverse items-start mb-4">
                    <div className="bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-2xl sm:text-3xl p-4 rounded-full ml-4 shadow-md">
                      <MdCallMade />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-lg md:text-lg lg:text-3xl font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-base sm:text-lg md:text-lg lg:text-2xl mt-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <Link>
                    <button className="mt-4 px-6 py-3 sm:px-4 sm:py-2 lg:px-8 lg:py-4   bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide font-semibold shadow-md hover:brightness-110 transition duration-300 rounded-full">
                      Learn More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
