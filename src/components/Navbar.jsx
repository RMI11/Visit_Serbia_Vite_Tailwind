import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import SearchBar from "./Searchbar";
import close from "../assets/icon-close.svg";
import menu from "../assets/icon-hamburger.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const imgRef = useRef();

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== imgRef.current) {
        setToggle(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <>
      {location.pathname === "/" ? (
        <nav className="flex justify-between items-center px-20  xs:px-4 ss:px-10 sm:px-12 py-4 sticky top-0 z-50 bg-white">
          <Link to="/">
            <h3 className="text-xl xs:text-base font-bold text-black">
              Visit <span className="text-red-500">Serbia</span>
            </h3>
          </Link>

          <div className="font-bold text-black sm:hidden ss:hidden xs:hidden md:hidden">
            <ul className="flex">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="px-6 transition-all duration-300 hover:text-red-500"
                >
                  <a href={`${nav.linkTo}`}>{nav.title}</a>
                </li>
              ))}
              <Link
                className="px-6 transition-all duration-300 hover:text-red-500"
                to={`/blog`}
              >
                Blog
              </Link>
            </ul>
          </div>

          <div>
            <SearchBar />
          </div>

          <img
            className={`bg-white lg:hidden xlg:hidden z-50 p-2 rounded-full`}
            src={`${toggle ? close : menu}`}
            alt="icon"
            ref={imgRef}
            onClick={handleToggle}
          />

          <div
            className={`${
              toggle ? "block" : "hidden"
            } font-bold text-black lg:hidden xlg:hidden absolute left-0 right-0 top-[100%] bg-white z-40`}
          >
            <ul className="flex flex-col justify-center items-center py-8 space-y-4">
              {navLinks.map((nav) => (
                <li
                  onClick={() => setToggle(false)}
                  key={nav.id}
                  className="px-6 transition-all duration-300 hover:text-red-500"
                >
                  <a href={`${nav.linkTo}`}>{nav.title}</a>
                </li>
              ))}
              <Link
                onClick={() => setToggle(false)}
                className="px-6 transition-all duration-300 hover:text-red-500"
                to={`/blog`}
              >
                Blog
              </Link>
            </ul>
          </div>

          <div
            className={`${
              toggle ? "block" : "hidden"
            } overlay fixed w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 bg-black opacity-60`}
          ></div>
        </nav>
      ) : (
        <nav className="flex justify-between items-center px-20 xs:px-6 py-4 sticky top-0 z-30 bg-white">
          <Link to="/">
            <h3 className="text-xl xs:text-md font-bold text-black">
              Visit <span className="text-red-500">Serbia</span>
            </h3>
          </Link>

          <div>
            <SearchBar />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
