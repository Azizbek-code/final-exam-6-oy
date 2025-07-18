import { RxAvatar } from "react-icons/rx";
import { MdOutlineDateRange, MdOutlineUpdate } from "react-icons/md";

const Images = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 h-[600px] bg-[url('/Container(1).png')] bg-cover bg-center flex items-end justify-center">
        <div className="w-[90%] md:w-[60%] flex flex-col items-center justify-end p-4 text-white">
          <button className="bg-[#F4796C] w-[78px] h-[26px] text-sm rounded mb-2 items-center">
            Fighter
          </button>
          <div className="text-3xl font-semibold leading-tight mb-3  text-center">
            Mobile Apple Planning Big Mac Redesign Under Night HalfMacShare
          </div>
          <div className="text-gray-300 text-sm mt-2 flex flex-wrap gap-x-3 gap-y-1 items-center">
            <div className="flex items-center gap-1">
              <RxAvatar />
              <span>BY ADMIN</span>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineDateRange />
              <span>27 August, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineUpdate />
              <span>20 mins</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[600px] bg-[url('/Container(2).png')] bg-cover bg-center flex items-end justify-center">
        <div className="w-[90%] md:w-[60%] flex flex-col items-center justify-end p-4 text-white">
          <button className="bg-[#F4796C] w-[78px] h-[26px] text-sm rounded mb-2 items-center">
            Action
          </button>
          <div className="text-3xl font-semibold leading-tight mb-3  text-center">
            How To Build A Magazine Layout With CSS Grid Areas
          </div>
          <div className="text-gray-300 text-sm mt-2 flex flex-wrap gap-x-3 gap-y-1 items-center">
            <div className="flex items-center gap-1">
              <RxAvatar />
              <span>BY ADMIN</span>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineDateRange />
              <span>27 August, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineUpdate />
              <span>20 mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
