import React from "react";
import CountryMap from "./CountryMap";
import { useState } from "react";
import Divider from "../common/Divider";
import RegionsBanner from "./RegionsBanner";

const Regions = () => {
  const [path, setPath] = useState("");
  const handlePath = (name) => {
    setPath(name);
  };

  return (
    <section id="regions" className="relative  xs:mx-0 py-20 ss:py-8 overflow-hidden">
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient" />
      <article className="grid grid-cols-1 container mx-auto sm:gap-0">
        <div className="flex flex-col items-left sm:items-center justify-center space-y-10">
          <h2 className="text-7xl text-center xs:text-[2rem] ss:text-[2rem] sm:text-[3rem] font-[900] text-white py-10 sm:py-4 xs:py-4 mx-20 xs:mx-0">
            Regions in <span className="text-red-500">Serbia</span>
          </h2>
        </div>
        <div className="xlg:mx-auto xs:h-[80%]">
          <CountryMap callback={handlePath} />
        </div>
        <div className="absolute xs:mt-10 ss:mt-4 lg:mt-6 xlg:mt-8 xs:top-[15%] ss:top-[10%] sm:top-[15%] md:top-[20%] lg:top-[15%] xlg:top-[15%] xs:right-10 ss:right-2 sm:right-4 md:right-6 lg:right-8 xlg:right-14">
          {path ? <RegionsBanner path={path} /> : " "}
        </div>
      </article>

      <div className="xs:mt-[-200px] ss:mt-[-100px]">
        <Divider />
      </div>
    </section>
  );
};

export default Regions;
