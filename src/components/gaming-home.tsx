import { MdOutlineDateRange, MdOutlineUpdate } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaRegEnvelope,
} from "react-icons/fa";

import { RxAvatar } from "react-icons/rx";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Gaming() {
  return (
    <div className="w-[80%] mx-auto ">
      <div className="flex gap-[50px] mt-8 justify-center">
        <div className="relative mt-[70px] mb-10 z-999 w-[60%] bg-white ml-32 ">
          <button className="bg-[#F4796C] btn ">Today’s Spotlight</button>
          <button className="btn-lin "></button>
        </div>
        <div className="relative mt-[70px] mb-10 z-999 w-[20%] bg-white ml-32 ">
          <button className="bg-[#F4796C] btn ">Folow Us</button>
          <button className="btn-lin "></button>
        </div>
      </div>
      <div className="flex justify-center gap-[150px] items-center w-[90%] ml-[150px]">
        <div className="flex gap-[50px] mt-8 justify-center w-auto h-auto">
          <div className="w-[498px] h-[400px] bg-white ">
            <img
              src="/Container(3).png"
              alt=""
              className="w-full h-[300px] object-cover"
            />
            <button className="text-black text-2xl mt-2 font-[inter]">
              Racing
            </button>
            <h3 className="text-3xl font-[inter] gap-3 mt-3">
              How To Build A Magazine Layout With CSS Grid Areas
            </h3>
            <div className="flex text-gray-400 gap-4 flex-wrap">
              <div className="flex items-center gap-1 mt-3">
                <RxAvatar />
                <span>BY ADMIN</span>
              </div>
              <div className="flex items-center gap-1 mt-3">
                <MdOutlineDateRange />
                <span>27 August, 2024</span>
              </div>
              <div className="flex items-center gap-1 mt-3">
                <MdOutlineUpdate />
                <span>20 mins</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 p-6 max-w-md mx-auto">
            <div className="flex gap-4">
              <div className="flex-1">
                <span className="text-xs font-semibold text-gray-500 border px-2 py-0.5 rounded">
                  ACTION
                </span>
                <h3 className="mt-2 text-base font-semibold text-[#151515] leading-snug">
                  Fortnite Ratings Are Skyrocketing
                </h3>
                <p className="text-xs text-gray-500 mt-2">27 AUGUST, 2024</p>
              </div>
              <div className="w-[140px] h-[140px] overflow-hidden rounded-md">
                <img
                  src="/animation.jpg"
                  alt="Fortnite Ratings"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <span className="text-xs font-semibold text-gray-500 border px-2 py-0.5 rounded">
                  FIGHTER
                </span>
                <h3 className="mt-2 text-base font-semibold text-[#151515] leading-snug">
                  Everything You Need To Know About
                </h3>
                <p className="text-xs text-gray-500 mt-2">27 AUGUST, 2024</p>
              </div>
              <div className="w-[140px] h-[140px] overflow-hidden rounded-md">
                <img
                  src="/fighter.jpg"
                  alt="Fighter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <span className="text-xs font-semibold text-gray-500 border px-2 py-0.5 rounded">
                  GAMING
                </span>
                <h3 className="mt-2 text-base font-semibold text-[#151515] leading-snug">
                  We Can’t Wait To Try This Gaming Area
                </h3>
                <p className="text-xs text-gray-500 mt-2">27 AUGUST, 2024</p>
              </div>
              <div className="w-[140px] h-[140px] overflow-hidden rounded-md">
                <img
                  src="/asasin.jpg"
                  alt="Gaming"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-4 ml-[300px]">
          <div className="flex gap-5 mb-10 w-full max-w-md ml-10">
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                <FaFacebookF />
                Facebook
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600">
                <FaTwitter />
                Twitter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700">
                <FaInstagram />
                Instagram
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                <FaYoutube />
                YouTube
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-900">
                <FaLinkedinIn />
                LinkedIn
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                <FaPinterestP />
                Pinterest
              </button>
            </div>
          </div>

          <div className="bg-[#1a2b4b] text-white p-8 rounded-lg shadow-lg w-[398px] max-w-md text-center relative overflow-hidden h-[269px]  mt-10">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 text-white">
              <FaRegEnvelope className="text-9xl" />
            </div>

            <h2 className="text-3xl font-bold mb-4 relative z-10">
              Daily Newsletter
            </h2>
            <p className="text-md mb-6 relative z-10">
              Get All The Top Stories From Blogs To Keep Track.
            </p>

            <div className="relative z-10 flex">
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="flex-grow p-3 rounded-l-md border-none outline-none text-gray-800"
              />
              <button className="bg-[#ff6b6b] text-white p-3 rounded-r-md flex items-center justify-center">
                <FaArrowUpRightFromSquare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gaming;

