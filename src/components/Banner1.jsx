import React from "react";
import banner from "../assets/banner2.jpg";

const Banner2 = () => {
  return (
    <div className="relative">
    <div>
      <img
        src={banner}
        alt="banner"
        className="h-[500px] xs:h-[400px] ss:h-[400px] sm:h-[400px] object-cover mb-[100px] w-full"
      />
    </div>
    <div className="banner_shadow w-[100%] h-[500px] absolute left-0 top-0">

    </div>
  </div>
  );
};

export default Banner2;
