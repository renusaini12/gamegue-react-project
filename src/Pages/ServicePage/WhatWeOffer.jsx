import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgCard1 from "../../assets/card1.png";
import imgCard2 from "../../assets/card2.png";
import imgCard3 from "../../assets/card3.png";
import imgCard4 from "../../assets/card4.png";
import imgCard5 from "../../assets/card5.png";
import imgCard6 from "../../assets/card6.png";

const services = [
  {
    id: 1,
    title: "Game Development",
    description:
      "Sit placerat mattis sociosqu metus nibh ut egestas cras elementum euismod nisi rhoncus ultricies",
    image: imgCard1,
    link: "#",
  },
  {
    id: 2,
    title: "Graphics & Animation",
    description:
      "Sit placerat mattis sociosqu metus nibh ut egestas cras elementum euismod nisi rhoncus ultricies",
    image: imgCard2,
    link: "#",
  },
  {
    id: 3,
    title: "Quality Assurance Testing",
    description:
      "Sit placerat mattis sociosqu metus nibh ut egestas cras elementum euismod nisi rhoncus ultricies",
    image: imgCard3,
    link: "#",
  },
  {
    id: 4,
    title: "Quality Assurance Testing",
    description:
      "Sit placerat mattis sociosqu metus nibh ut egestas cras elementum euismod nisi rhoncus ultricies",
    image: imgCard4,
    link: "#",
  },
  {
    id: 5,
    title: "Quality Assurance Testing",
    description:
      "Sit placerat mattis sociosqu metus nibh ut egestas cras elementum euismod nisi rhoncus ultricies",
    image: imgCard5,
    link: "#",
  },
  {
    id: 6,
    title: "Quality Assurance Testing",
    description:
      "Sit placerat mattis sociosqu metus nibh ut egestas cras elementum euismod nisi rhoncus ultricies",
    image: imgCard6,
    link: "#",
  },
];

const WhatWeOffer = () => {
  return (
    <div>
      <div className="bg-[#0c0c35] w-full py-10 sm:py-12 md:py-16 lg:py-20">
        <div className=" mx-auto px-4 sm:px-3 md:px-6 lg:px-10 xl:px-10">
          {/* Heading Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h6 className="text-lg sm:text-lg md:text-2xl lg:text-2xl text-[#db79de] font-bold uppercase font-sans tracking-wide">
              What we offer
            </h6>
            <h2 className="text-xl sm:text-xl md:text-4xl lg:text-7xl font-bold mt-2 sm:mt-3 text-white font-sans tracking-wide leading-tight">
              Game Design, Development,
              <br /> and Art{" "}
              <span className="hidden sm:inline-block">
                <br />
              </span>{" "}
              Services Overview.
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 text-white">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative w-full  bg-[#343944]/70 backdrop-blur-md border border-white/10 p-6 sm:p-4 md:p-3 lg:p-12 xl:p-16 transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:rounded-br-[60px] sm:hover:rounded-br-[80px] lg:hover:rounded-br-[120px]"
              >
                {/* Top Section: Image and Title */}
                <div className="flex items-center gap-4 sm:gap-5 md:gap-2 mb-4 sm:mb-5 md:mb-6">
                  <div className="min-w-[50px] sm:min-w-[60px] md:min-w-[70px] lg:min-w-[80px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] p-2 sm:p-3 rounded-lg"
                    />
                  </div>
                  <h5 className="text-sm sm:text-lg md:text-lg lg:text-3xl whitespace-nowrap font-semibold">
                    {service.title}
                  </h5>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-slate-500/50"></div>

                {/* Description */}
                <p className="text-gray-300 text-base sm:text-lg md:text-lg lg:text-2xl font-sans mb-6 sm:mb-8 mt-4 sm:mt-6">
                  {service.description}
                </p>

                {/* Button */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white font-semibold text-sm sm:text-sm md:text-sm lg:text-lg uppercase tracking-wide hover:opacity-90 transition"
                >
                  Learn more
                  <FaArrowRight className="text-white text-xs sm:text-sm md:text-base" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
