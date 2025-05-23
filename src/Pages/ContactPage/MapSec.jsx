import React from "react";

const MapSec = () => {
  return (
    <div>
      <div className="w-full bg-[#0c0c35]">
        <div className="relative w-full pb-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112114.21719362658!2d77.23332629103102!3d28.5826937062764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x8cb2844875948653%3A0x31a70beb6225a223!2sD34%2C%20Red%20FM%20Road%2C%20D%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!3m2!1d28.5827186!2d77.3157277!5e0!3m2!1sen!2sin!4v1746080793509!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapSec;
