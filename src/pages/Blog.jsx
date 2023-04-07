import React from "react";
import { useParams } from "react-router";
import summerImg from "../assets/summer.jpg";
import { BlogCard } from "../components";
import Banner from "../components/Banner";
import { motion } from "framer-motion";

const Blog = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div className="relative">
      
        <div className="flex flex-col justify-center items-center space-y-10 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-10 text-center">
          <motion.h1
            animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            className="text-8xl xs:text-[4rem] ss:text-[4rem] sm:text-[5rem] text-white font-[900]"
          >
            {" "}
            BLOG{" "}
          </motion.h1>
          <p className="text-white text-center sm:text-base xs:text-sm ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore,
            sed?
          </p>
        </div>
        <div className="h-[500px]">
          <img
            src={summerImg}
            className="w-[100%] h-[100%] z-0 brightness-[.7]"
          />
        </div>
      </div>

      <div className="relative grid grid-cols-4 sm:grid-cols-3 ss:grid-cols-2 xs:grid-cols-1 gap-10 m-20">
        <BlogCard />
        
      </div>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] top-[100%] rounded-full blue__gradient" />
      <Banner />
    </>
  );
};

export default Blog;
