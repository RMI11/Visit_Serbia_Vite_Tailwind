import React from "react";
import Divider from "../common/Divider";
import PopularSlider from "../common/PopularSlider";

const Popular = () => {
  return (
    <section id="popular">
      <h2 className="text-7xl text-center xs:text-[2rem] ss:text-[2rem] sm:text-[3rem] font-[900] text-white py-10 sm:py-4 xs:py-4 mx-20 xs:mx-0">
        Popular <br /> <span className="text-red-500">Destinations</span>
      </h2>
      <article className="px-20 pt-16 xs:pt-6">
        <PopularSlider />
      </article>
      <Divider />
    </section>
  );
};

export default Popular;
