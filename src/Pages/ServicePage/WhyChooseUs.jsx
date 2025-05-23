import React from "react";
import img1 from "../../assets/img1.png";
import bgImg from "../../assets/pattern1.png";
import { MdPhonelink } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiLayers } from "react-icons/fi";

const serviceItem = [
  {
    icon: <MdPhonelink />,
    title: "Innovative Game Development",
  },
  {
    icon: <IoGameControllerOutline />,
    title: "Comprehensive Development Expertise",
  },
  {
    icon: <FiLayers />,
    title: "Community Building Support",
  },
];

const WhyChooseUs = () => {
  return (
    <div
      className="relative w-full bg-[#0c0c35] min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#0c0c35]/70 z-0" />

      {/* Main content */}
      <div className="relative z-10  mx-auto py-12 sm:py-16 md:py-20 lg:py-14 px-4 sm:px-3 md:px-6 lg:px-10 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 text-white">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <h6 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#db79de] uppercase font-sans tracking-wide">
              Why Choose Us
            </h6>

            <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-5xl xl:text-6xl font-bold font-sans tracking-wide leading-tight">
              Elevate Your Play with gamequ's Innovative Game Development
            </h2>

            <p className="text-base sm:text-lg md:text-lg lg:text-2xl text-[#acbad4] max-w-3xl">
              Sodales neque odio fames molestie porttitor turpis. Ultricies eros
              sollicitudin dictumst vestibulum natoque netus vitae mattis
              facilisi phasellus. Ad ac suspendisse cursus hac suscipit lacinia
              et senectus. Innovative Game Development
            </p>

            <div className="hidden sm:block border-t border-gray-600/50 my-4 sm:my-6 md:my-8"></div>

            {/* Services */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {serviceItem.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 md:gap-5 border border-white/10 hover:border-[#db79de] p-3 sm:p-4 md:p-5 hover:bg-[#343944]/70  rounded-2xl sm:rounded-3xl transform transition-all duration-300 hover:translate-x-2 sm:hover:translate-x-6 hover:shadow-lg"
                >
                  <div className="bg-[#db79de] p-3 sm:p-2 md:p-5 rounded-full text-white  sm:text-3xl md:text-3xl  lg:text-4xl  flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-sm md:text-2xl lg:text-2xl text-white font-bold mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#acbad4] text-sm sm:text-sm md:text-lg lg:text-2xl">
                      Metus lobortis feugiat ullamcorper et suspendisse bibendum
                      urna curae augue vel egestas
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center order-first lg:order-last mb-8 lg:mb-0">
            <img
              src={img1}
              alt="Why Choose Us Illustration"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl opacity-100 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
