import React from "react";
import { data } from "../constants/data";

const CountryMap = (props) => {
  const handleMouseOver = (e) => {
    for (const attr of e.target.attributes) {
      if (attr.name === "name") {
        props.callback(attr.value);
      }
    }
  };

  const handleMouseLeave = (e) => {
    for (const attr of e.target.attributes) {
      if (attr.name === "name") {
        props.callback("");
      }
    }
  };

  return (
    <svg
      xmlns:mapsvg="http://mapsvg.com"
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      mapsvg:geoviewbox="18.814718 46.190251 23.006586 41.783590"
      width="544.1554"
      height="792.53302"
      className="drop-shadow-2xl mx-auto xs:ml-[-170px] ss:ml-[-30px] xs:scale-[0.5] ss:scale-[0.7] sm:scale-[0.8] md:scale-[0.7] lg:scale-[0.9]"
    >
      {data.map((item) => {
        return (
            <a href={item.link} key={item.id}>
              <path
                d={item.d}
                name={item.name}
                id={item.id}
                stroke="#000"
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                className=" fill-gray-100 hover:fill-red-400 transition-all duration-500 cursor-pointer"
              />
            </a>
        );
      })}
    </svg>
  );
};

export default CountryMap;
