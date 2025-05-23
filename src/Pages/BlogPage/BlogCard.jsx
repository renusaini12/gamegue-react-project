import React from "react";
import { Link } from "react-router-dom";
import boyplaying from "../../assets/boy-playing-videogame.jpg";
import smileman from "../../assets/smiling-man.jpg";
import asianYoungWoman from "../../assets/asian-young-woman.jpg";
import asianbeautifulWoman from "../../assets/asian-beautiful-woman.jpg";
import gamerplaying from "../../assets/gamer-playing-video.jpg";
import youngCyber from "../../assets/young-pro-cyber.jpg";

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

const BlogCard = () => {
  return (
    <div className="w-full bg-[#0c0c35] px-4 sm:px-2  lg:px-10 py-8 sm:py-10 md:py-12 lg:py-8 text-white ">
      {/* Heading Section */}
      <div className="text-center py-4 sm:py-6 md:py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide font-sans">
          Latest news & articles
        </h2>
      </div>

      {/* Blog Posts Grid */}
      <div className="mx-auto grid gap-4 lg:gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="px-2 sm:px-1 md:px-4">
            <div className="border border-slate-700 hover:border-[#db79de] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl">
              {/* Image with Tag */}
              <div className="relative">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="w-full h-[200px] sm:h-[250px] md:h-[200px] lg:h-[350px] xl:h-[400px] object-cover"
                />
                <button className="absolute top-3 sm:top-4 right-0 bg-white text-[#db79d3] uppercase text-xs sm:text-sm md:text-base lg:text-lg font-medium px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-1 sm:py-2 border-l-2 sm:border-l-4 border-l-[#db79de] shadow-md hover:bg-[#db79de] hover:text-white transition-all duration-300">
                  {post.buttonText}
                </button>
              </div>

              {/* Content Section */}
              <div className="bg-[#131925] p-4 sm:p-[2.25rem] lg:p-6 space-y-3 sm:space-y-4  h-[240px] sm:h-[280px]  flex flex-col justify-between">
                <div>
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl text-[#db79de] font-bold mb-1 sm:mb-2">
                    {post.date}
                  </div>
                  <h5 className="text-xl sm:text-lg md:text-lg lg:text-2xl font-semibold hover:text-[#db79de] transition-colors duration-300">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white "
                    >
                      {post.title}
                    </Link>{" "}
                  </h5>
                  <div className="w-full border-t sm:border-t-2 border-slate-700 mt-3 "></div>
                </div>
                <p className="text-gray-400 text-base sm:text-lg md:text-lg lg:text-2xl line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
