import React from "react";
import img from "../assets/beograd.jpg";

const RegionsBanner = ({ path }) => {
  return (
    <div class="max-w-sm xs:w-[200px] ss:w-[200px] sm:w-[230px] md:w-[300px] lg:w-[400px] xs:h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src={img} alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 xs:mb-0 text-2xl xs:text-sm ss:text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {path}
          </h5>
        </a>
      </div>
    </div>
  );
};

export default RegionsBanner;
