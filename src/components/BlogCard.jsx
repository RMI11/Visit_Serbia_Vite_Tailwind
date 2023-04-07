import React from "react";
import springImg from "../assets/spring.jpg";

const BlogCard = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-xl bg-white text-black">
      <div className="h-[200px]">
        <img
          className="w-full h-[100%] object-cover"
          src={springImg}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl xs:text-sm ss:text-sm mb-2">The Coldest Sunset</div>
        <p class="text-base xs:text-xs ss:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm xs:text-xs ss:text-xs font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm xs:text-xs ss:text-xs font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm xs:text-xs ss:text-xs font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
