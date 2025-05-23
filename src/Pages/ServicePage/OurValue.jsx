import React from "react";

const SkillBar = ({ title, percentage }) => {
  const getBarColor = () => {
    return "bg-gradient-to-r from-[#2f85e5] to-[#ff2ef9]";
  };

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center mb-2 sm:mb-3">
        <span className="text-lg sm:text-xl md:text-2xl font-semibold">
          {title}
        </span>
        <span className={`text-base sm:text-lg md:text-xl font-bold`}>
          {percentage}%
        </span>
      </div>
      <div className="relative w-full h-2 sm:h-3 bg-gray-200/20 overflow-hidden rounded-full">
        <div
          className={`${getBarColor()} h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const OurValue = () => {
  return (
    <div className="bg-[#0c0c35] py-10 sm:py-4 md:py-16 lg:py-20 ">
      <div className=" mx-auto px-4 sm:px-3 md:px-6 lg:px-16 xl:px-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 text-white">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 py-6 sm:py-8  md:py-10 ">
            <h6 className="text-lg sm:text-lg md:text-2xl lg:text-2xl uppercase font-bold text-[#db79de] font-sans tracking-wide">
              Our value
            </h6>
            <h2 className="text-2xl sm:text-xl md:text-3xl lg:text-6xl font-bold text-white mt-1 sm:mt-2 font-sans tracking-wide leading-tight">
              Crafting Games With Strategy, Art, and Technology.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mt-3 sm:mt-4">
              Posuere rutrum blandit viverra senectus tellus. Iaculis blandit
              risus elit himenaeos sagittis at tincidunt primis hac.
            </p>
          </div>

          {/* Skill Bars */}
          <div className="flex flex-col gap-5 sm:gap-4 md:gap-7 items-center justify-center">
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <SkillBar title="Web Base" percentage={80} />
            </div>
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <SkillBar title="Mobile Game" percentage={71} />
            </div>
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <SkillBar title="PC Game" percentage={93} />
            </div>
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <SkillBar title="Console Game" percentage={64} />
            </div>
            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <SkillBar title="Multiplatform" percentage={73} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValue;
