import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const HeaderSide: React.FC = () => {
  return (
    <header className="w-full bg-gray-800 text-white px-4 py-3 shadow ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="w-100 h-10 object-contain" />
          <button className="text-white w-18 h-33 flex  text-3xl items-center justify-center ">
            <IoMdMenu />
          </button>
        </div>

        <div className="flex items-center gap-4 ">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1 text-black hidden sm:block w-200 bg-gray-800 input-i rounded-[20px]"
          />
          <div className="flex gap-3 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSide;
