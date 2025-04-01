import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken, setLogout }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => {
          setToken("");
          setLogout(true);
        }}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-gray-800"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
