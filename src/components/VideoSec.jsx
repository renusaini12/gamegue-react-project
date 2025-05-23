import React from "react";
import gamevideo from "../assets/video/game.mp4";

const VideoSec = () => {
  return (
    <div>
      {/* Video Section */}
      <div className="relative w-full h-[600px] sm:h-[620px] overflow-hidden bg-black">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={gamevideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Center Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:max-w-4xl h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[400px] lg:h-[550px] hover:border-blue-700 rounded-3xl mx-auto z-10 flex flex-col border-2 border-white/20 items-center justify-center text-center text-white px-4 sm:px-6 py-3 sm:py-10">
          <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-3 sm:mb-4 md:mb-6 leading-tight  sm:leading-snug tracking-[1px] font-sans">
            Weaving Narratives, Forging Connections, Creating Fun.
          </h1>
          <p className="text-sm sm:text-sm md:text-lg lg:text-2xl mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto px-2 sm:px-0">
            Porta nostra massa nullam dis commodo magnis. natoque etiam rutrum
            id ridiculus nullam purus nisl dictum fusce tincidunt. Nec dignissim
            primis erat elementum lacinia proin eleifend maecenas eu tristique
            ut.
          </p>
          <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 lg:px-10 lg:py-4 tracking-[2px] sm:tracking-[3px] md:tracking-[5px] bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9] text-white text-xs sm:text-sm md:text-xs lg:text-lg uppercase font-semibold rounded-full hover:opacity-90 transition duration-300">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSec;
