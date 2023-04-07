import React from "react";
import springImg from "../assets/spring.jpg";

const Events = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-xl bg-white text-black">
      <div className="h-[200px]">
        <img
          className="w-full h-[100%] object-cover block"
          src={springImg}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 py-8">
        <div className="font-bold text-xl xs:text-sm ss:text-sm sm:text-base">The Coldest Sunset</div>
        <p className="text-base xs:text-xs ss:text-xs sm:text-sm my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
        <button className="bg-red-500 py-4 px-8 rounded-[30px] text-white hover:bg-[#0C4076] font-bold transition-all duration-500 z-10">More info</button>
      </div>
    </div>
  );
};

export default Events;
