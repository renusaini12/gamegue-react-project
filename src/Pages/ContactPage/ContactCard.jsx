import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const features = [
  {
    title: "Head Office",
    description: "Jln Cempaka Wangi No 22 Jakarta - Indonesia",
    icon: <MdLocationOn />,
  },
  {
    title: "Email Us",
    description: "support@yourdomain.tld hello@yourdomain.tld",
    icon: <MdEmail />,
  },
  {
    title: "Let's talk",
    description: "Phone : +6221.2002.2012 Fax : +6221.2002.2013",
    icon: <MdPhone />,
  },
];

const ContactCard = () => {
  return (
    <div>
      <div className="bg-[#0c0c35] w-full  py-8">
        <div className=" mx-auto  sm:px-3 md:px-4 lg:px-10 ">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-4 md:gap-4 lg:gap-6 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#1F2530] hover:bg-slate-800  border border-gray-800 hover:border-[#db79de] p-8 sm:p-4 md:p-4 lg:p-10 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md flex flex-col items-center text-center justify-between h-full"
              >
                {/* Icon */}
                <div className="bg-[#db79de] text-white text-3xl sm:text-2xl md:text-2xl lg:text-4xl md:p-4 lg:p-8 p-6 sm:p-4  rounded-full shadow-md mb-4 sm:mb-6">
                  {feature.icon}
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-4 sm:space-y-6">
                  <h3 className="text-lg sm:text-sm md:text-sm lg:text-2xl text-[#db79de] font-semibold uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-2xl sm:text-xl md:text-xl lg:text-3xl">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
