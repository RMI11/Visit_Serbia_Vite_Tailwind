import React from "react";
import img from "../assets/beograd.jpg";
import Banner2 from "../components/Banner1";
import Divider from "../common/Divider";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import SinglePageSlider from "../common/SinglePageSlider";
import Events from "../components/Events";
import { motion, useScroll, useSpring } from "framer-motion";

const SinglePage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  
  fetch('https://posetisrbiju.net/api/province/1')
  .then(res => console.log(res))

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="relative">
        <div className="flex flex-col justify-center items-center space-y-10 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-10 text-center">
          <motion.h1
            animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            className="text-8xl xs:text-[3rem] ss:text-[4rem] sm:text-[5rem] text-white font-[900]"
          >
            Dobro došli u <br /> <span className="text-red-500">Beograd</span>
          </motion.h1>
        </div>
        <div className="h-[500px]">
          <img
            src={img}
            className="w-[100%] h-[100%] object-cover brightness-[.7]"
          />
        </div>
      </div>

      <div className="relative overflow-hidden singleWrapper xs:px-4 ss:px-6 sm:px-8 md:px-12 lg:px-14 px-48 h-[100%] mx-auto text-center text-white py-32">
        <h2 className="text-3xl xs:text-base ss:text-base md:text-xl inline mx-2">
          <ImQuotesLeft className="inline w-[20px] xs:w-[12px]" /> Beograd je
          izgrađen na raskrsnici puteva, na ušću Save u Dunav, i mnogi ga s
          pravom nazivaju „kapijom Balkana“ i „vratima srednje Evrope”. Ovaj
          grad sa sobom nosi duboko kulturno i istorijsko nasleđe, koje se
          između ostalog ogleda i u velikom broju muzeja: Narodnog, Vojnog
          muzeja, Muzeja savremene umetnosti i Muzeja Nikole Tesle. Brojni
          spomenici koji su s vremenom postali svojevrsni simboli grada, kao što
          su Pobednik, Spomenik knezu Mihajlu ili nekadašnja rezidencija
          kraljevske porodice Beli dvor, govore o burnoj istoriji Srbije i
          srpske prestonice. U savremenom Beogradu javljaju se nova urbana mesta
          na kojima se okupljaju mladi ljudi željni zabave, kulture i umetnosti.
          <ImQuotesRight className="inline w-[18px] xs:w-[12px]" />
        </h2>
        <Divider />
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] top-0 rounded-full blue__gradient" />
      </div>

      <div className="popular h-[100vh]">
        <h2 className="text-8xl xs:text-[3rem] ss:text-[4rem] sm:text-[5rem] font-[900] text-center text-white pb-10 mx-20">
          What to visit <br /> <span className="text-red-500">Belgrade</span>
        </h2>
        <article className="px-20 pt-16">
          <SinglePageSlider />
        </article>
        <Divider />
      </div>

      <div className="events">
        <h2 className="text-8xl xs:text-[3rem] ss:text-[4rem] sm:text-[5rem] font-[900] text-center text-white pb-10 mx-20">
          Events in <br /> <span className="text-red-500">Belgrade</span>
        </h2>
        <article className="grid grid-cols-4 xs:grid-cols-1 ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md: gap-10 m-20">
          <Events />
          <Events />
          <Events />
          <Events />
          <Events />
          <Events />
          <Events />
          <Events />
        </article>
        <Divider />
      </div>

      <Banner2 />
    </>
  );
};

export default SinglePage;
