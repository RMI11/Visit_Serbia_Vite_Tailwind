import React from "react";

export default function SearchBar() {
  return (
    <div className="flex w-[200px] xs:w-[150px] justify-center">
        <input
          type="text"
          className="px-4 py-1 w-[80%] text-[14px] bg-white border border-black rounded-md transition-all duration-300 focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring focus:ring-opacity-40  focus:w-[100%]"
          placeholder="Search..."
        />
    </div>
  );
}
