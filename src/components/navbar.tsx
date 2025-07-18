import React from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
const NavBar: React.FC = () => {
  return (
    <>
      <div className="flex bg-gray-700  h-10 items-center justify-between">
        <div className="mycon flex bg-transparent text-white justify-between items-center w-full max-w-7xl mx-auto px-4">
          <nav>
            <ul className="flex gap-4 text-white text-15px">
              <li >
                <select name="" id="">
                  <option value="Home">Home</option>
                </select>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <select name="" id="">
                  <option value="features">Features</option>
                </select>
              </li>
              <li>
                <select name="" id="">
                  <option value="Category">Category</option>
                </select>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-5 text-white text-lg  ">
            <div className="flex gap text-[23px]">
              <button><CiHeart /></button>
              <button><CiShoppingBasket /></button>
            </div>
            <div className="flex gap-2 items-center">
              <button><RxAvatar /></button>
              <a href="">Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
