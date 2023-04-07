import React, { useState } from "react";
import video from "../assets/hero-video.mp4";
import Button from "../common/Button";
import spring from "../assets/spring.jpg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="relative">
      <div className="flex flex-col justify-center items-center space-y-10 ss:space-y-5 xs:space-y-4 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-10 text-center">
        <motion.h1
          animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          className="text-8xl xs:text-[4rem] ss:text-[4rem] sm:text-[6rem] text-white font-[900]"
        >
          Welcome to <span className="text-red-500">Serbia</span>
        </motion.h1>
        <p className="text-white text-center sm:text-base xs:text-sm xs:py-2 ss:py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quod
          omnis possimus illo, voluptatibus perferendis?
        </p>
        <a href="#regions">
          <Button />
        </a>
      </div>
      <div>
        <video
          src={video}
          muted
          loop
          autoPlay
          className="xs:hidden ss:hidden sm:hidden w-[100%] z-0"
        ></video>
        <img
          className="md:hidden lg:hidden xlg:hidden brightness-[.7]"
          src={spring}
          alt="header_image"
        />
      </div>
    </header>
  );
};

export default Header;
