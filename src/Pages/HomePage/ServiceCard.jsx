import React, { useState } from "react";
import Img2 from "../../assets/bg_pattern3.png";
import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { GiTeamDowngrade } from "react-icons/gi";
import { HiComputerDesktop } from "react-icons/hi2";

const services = [
  {
    title: "Game Development",
    description:
      "Pellentesque tellus felis sem eleifend in suscipit maecenas adipiscing blandit quam laoreet pede dis dui mi",
    icon: <FaGamepad className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    link: "#",
  },
  {
    title: "Graphics and Animation",
    description:
      "Pellentesque tellus felis sem eleifend in suscipit maecenas adipiscing blandit quam laoreet pede dis dui mi",
    icon: <FaPenAlt className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    link: "#",
  },
  {
    title: "Quality Assurance (QA) Testing",
    description:
      "Pellentesque tellus felis sem eleifend in suscipit maecenas adipiscing blandit quam laoreet pede dis dui mi",
    icon: (
      <FaClipboardList className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
    ),
    link: "#",
  },
  {
    title: "Game Monetization Strategies",
    description:
      "Pellentesque tellus felis sem eleifend in suscipit maecenas adipiscing blandit quam laoreet pede dis dui mi",
    icon: (
      <IoGameController className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
    ),
    link: "#",
  },
  {
    title: "Community Management",
    description:
      "Pellentesque tellus felis sem eleifend in suscipit maecenas adipiscing blandit quam laoreet pede dis dui mi",
    icon: (
      <GiTeamDowngrade className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
    ),
    link: "#",
  },
  {
    title: "Consultation on Industry Trends",
    description:
      "Pellentesque tellus felis sem eleifend in suscipit maecenas adipiscing blandit quam laoreet pede dis dui mi",
    icon: (
      <HiComputerDesktop className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
    ),
    link: "#",
  },
];

const ServiceCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <div className=" min-h-screen relative bg-[#0c0c35] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(${Img2})`,
          }}
        ></div>

        {/* Content */}
        <div className="relative w-full max-w-7xl px-4 py-8 md:py-3 lg:py-4 mx-auto">
          <div className="text-center px-4">
            <h2 className="text-2xl sm:text-xl md:text-4xl lg:text-6xl font-bold tracking-[1px] font-sans text-white">
              Play Beyond Boundaries with <br className="hidden sm:block" />{" "}
              gamequ's Innovation Hub.
            </h2>
          </div>
        </div>

        <div className="w-full pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-3 md:px-2 lg:px-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full flex justify-center items-center  md:p-6"
              >
                <div
                  className="w-full max-w-xl bg-[#343944]/60 border border-purple-500 p-4 sm:p-6 md:p-4 lg:p-12 rounded-2xl shadow-lg relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Popup */}
                  <div
                    className={`absolute left-0 w-full bg-gradient-to-r from-purple-800 to-blue-800 text-white font-semibold text-center py-4 rounded-b-2xl transition-all duration-500 ${
                      hoveredIndex === index ? "bottom-0" : "-bottom-full"
                    }`}
                    style={{ height: "100%" }}
                  ></div>

                  {/* Main Content */}
                  <div className="flex flex-col space-y-4 sm:space-y-4 md:space-y-5 lg:space-y-10 relative z-10">
                    {/* Icon */}
                    <div className="bg-[#6b9ff5] text-white  p-3 sm:p-3 md:p-2 lg:p-6 rounded-full shadow-md w-fit">
                      {service.icon}
                    </div>

                    {/* Title and Description */}
                    <div>
                      <h3 className=" sm:text-xl md:text-lg lg:text-3xl font-bold  text-white mb-1 sm:mb-2 font-sans">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base md:text-sm lg:text-xl font-sans font-semibold">
                        {service.description}
                      </p>
                    </div>

                    {/* Button */}
                    <div>
                      <Link
                        to={service.link}
                        className="inline-flex items-center uppercase tracking-[2px] sm:tracking-[3px] md:tracking-[2px] lg:tracking-[5px] text-xs sm:text-sm md:text-xs lg:text-xl gap-1 sm:gap-2 px-4 sm:px-6 md:px-4 lg:px-6 py-2 sm:py-2 lg:py-4 bg-white hover:bg-black text-[#db79de] font-semibold rounded-full  hover:text-white transition"
                      >
                        Learn more
                        <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
