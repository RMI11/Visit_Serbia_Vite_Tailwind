import React from "react";
import { seasons } from "../constants/4seasonsData";
import { Link } from "react-router-dom";
import Divider from "../common/Divider";

const Seasons = () => {
  return (
    <section
      id="seasons"
      className="mx-auto py-[150px] xs:py-20 ss:py-20 sm:py-32 relative overflow-hidden"
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <h2 className="text-7xl text-center xs:text-[2rem] ss:text-[2rem] sm:text-[3rem] font-[900] text-white py-10 sm:py-4 xs:py-4 mx-20 xs:mx-0">
        Four seasons <br /> <span className="text-red-500">in Serbia</span>
      </h2>
      <article className="grid grid-cols-4 xs:grid-cols-1 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:container xlg:container mx-auto pt-16 xs:pt-5 gap-6">
        {seasons.map((item) => {
          return (
            <Link
              to={"/single"}
              key={item.id}
              className="flex justify-center items-center relative cursor-pointer transition-all duration-300 hover:opacity-50"
            >
              <img
                src={item.image}
                alt="season"
                className="w-[300px] xlg:w-[100%] sm:w-[90%] h-[300px] sm:h-[15rem] md:h-[15rem] rounded-2xl mx-auto xs:mx-0"
              />
              <p className="text-4xl ss:text-2xl sm:text-3xl absolute top-[55%] xs:text-2xl ss:left-[20%] sm:left-[5%] md:left-[10%] left-[-25px] xs:left-[10%] -rotate-90 text-white font-bold drop-shadow-xl">
                {item.title}
              </p>
            </Link>
          );
        })}
      </article>
      <Divider />
    </section>
  );
};

export default Seasons;
