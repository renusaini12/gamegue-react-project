import React from "react";
import backgroundImage from "../../assets/imageabout.jpg";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="overflow-auto">
      <div
        className="w-full bg-cover bg-no-repeat min-h-[200px] sm:min-h-[400px] md:min-h-[300px] lg:min-h-[600px] bg-center flex items-center justify-center py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6"
        style={{
          backgroundImage: `linear-gradient(90deg, #DB79DECC 65%, #6B9FF5CC 100%), url(${backgroundImage})`,
        }}
      >
        <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 border-b border-b-white/30 rounded-xl sm:rounded-2xl md:rounded-3xl max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-center text-white">
          <h2 className="text-3xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 font-sans tracking-wide">
            Latest & News
          </h2>
          <p className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-4xl font-normal tracking-wide">
            Archieve
          </p>
        </div>
      </div>
      <BlogCard />
    </div>
  );
};

export default Blog;
