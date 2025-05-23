import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import bg4 from "../../assets/bg4.jpg";
const backgroundImages = [bg1, bg2, bg3, bg4];

const PlaySection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-[400px] sm:min-h-[600px] lg:min-h-[800px] bg-cover bg-center relative flex items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative text-center px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-6 max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl z-10">
        <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-sans tracking-[1px] sm:tracking-[2px]">
          Play with anyone, anywhere, on any device.
        </h1>

        <p className="text-white text-base sm:text-xl md:text-2xl font-sans font-medium sm:font-semibold px-2 sm:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <Link
          to="#"
          className="inline-block bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-sm sm:text-sm md:text-lg lg:text-2xl tracking-[3px] sm:tracking-[5px] font-semibold px-6 py-2 sm:px-10 sm:py-3 md:px-8 md:py-3 lg:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Explore The Game
        </Link>
      </div>
    </div>
  );
};

export default PlaySection;
