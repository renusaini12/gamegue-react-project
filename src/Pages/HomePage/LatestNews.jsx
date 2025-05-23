import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import boyplaying from "../../assets/boy-playing-videogame.jpg";
import smileman from "../../assets/smiling-man.jpg";
import asianYoungWoman from "../../assets/asian-young-woman.jpg";
import asianbeautifulWoman from "../../assets/asian-beautiful-woman.jpg";
import gamerplaying from "../../assets/gamer-playing-video.jpg";
import youngCyber from "../../assets/young-pro-cyber.jpg";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const blogPosts = [
  {
    id: 1,
    date: "06/02/2024",
    title: "The Soundtrack of Success: Importance of Audio in Game Design",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    imageSrc: boyplaying,
    buttonText: "Sound Design",
  },
  {
    id: 2,
    date: "06/02/2024",
    title:
      "Behind the Scenes: The Journey from Game Concept to Playable Reality",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    imageSrc: smileman,
    buttonText: "Game Development",
  },
  {
    id: 3,
    date: "06/02/2024",
    title:
      "Revolutionizing Gameplay: Exploring the Potential of AR and VR in Gaming",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    imageSrc: asianYoungWoman,
    buttonText: "Innovation",
  },
  {
    id: 4,
    date: "06/02/2024",
    title: "The Art of Storytelling in Games: Crafting Compelling Narratives",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    imageSrc: asianbeautifulWoman,
    buttonText: "Game Design",
  },
  {
    id: 5,
    date: "06/02/2024",
    title: "Mastering Game Development: A Comprehensive Guide for Beginners",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    imageSrc: gamerplaying,
    buttonText: "Tips and tutorials",
  },
  {
    id: 6,
    date: "06/02/2024",
    title:
      "Optimizing for Success: Strategies for Multi-Platform Game Development",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    imageSrc: youngCyber,
    buttonText: "Game development",
  },
];

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full cursor-pointer"
  >
    <MdOutlineArrowBackIosNew className="text-white text-xl sm:text-lg lg:text-3xl" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full cursor-pointer"
  >
    <MdOutlineArrowForwardIos className="text-white text-xl sm:text-lg lg:text-3xl" />
  </div>
);

const LatestNews = () => {
  const [display, set] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="w-full bg-[#0c0c35] px-4 sm:px-1 md:px-4 lg:px-10 py-8 sm:py-6 md:py-8 text-white">
        {/* Heading Section */}
        <div className="text-center pb-6 sm:pb-8 md:pb-10 lg:pb-12">
          <h2 className="text-2xl xs:text-3xl sm:text-xl md:text-4xl lg:text-6xl font-bold tracking-wide font-sans">
            Latest news & articles
          </h2>
        </div>

        {display && (
          <div className="mx-auto  px-2 sm:px-1">
            <Slider {...settings}>
              {blogPosts.map((post) => (
                <div key={post.id} className="px-2 sm:px-1 md:px-2 lg:px-4 ">
                  <div className="border border-slate-700 hover:border-[#db79de] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                    {/* Image with Tag */}
                    <div className="relative">
                      <img
                        src={post.imageSrc}
                        alt={post.title}
                        className="w-full h-[200px] xs:h-[250px] sm:h-[300px] md:h-[300px] lg:h-[400px] object-cover"
                      />
                      <button className="absolute top-3 sm:top-4 right-0 bg-white text-[#db79d3] uppercase text-xs xs:text-sm sm:text-sm md:text-lg lg:text-xl font-medium px-6 xs:px-8 sm:px-10 md:px-12  py-1 sm:py-2 border-l-4 border-l-[#db79de] shadow-md hover:shadow-lg transition-all duration-300">
                        {post.buttonText}
                      </button>
                    </div>

                    {/* Content */}
                    <div className="bg-[#131925] p-4 sm:p-5 space-y-3 sm:space-y-4 h-[220px] xs:h-[250px] sm:h-[280px] lg:h-[300px] flex flex-col justify-between">
                      <div>
                        <div className="text-sm xs:text-base sm:text-lg md:text-lg text-[#db79de] font-semibold mb-1 sm:mb-2">
                          {post.date}
                        </div>
                        <h5 className=" lg:text-2xl md:text-lg sm:text-xl text-sm font-semibold hover:text-purple-400 transition">
                          <Link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#db79de]"
                          >
                            {post.title}
                          </Link>
                          <div className="w-full border-t border-slate-700 mt-4 sm:mt-6 "></div>
                        </h5>
                      </div>
                      <p className="text-gray-400 text-sm xs:text-base sm:text-lg md:text-lg lg:text-2xl line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
};

export default LatestNews;
