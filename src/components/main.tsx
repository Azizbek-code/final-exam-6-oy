import { MdOutlineDateRange, MdOutlineUpdate } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

function Main() {
  return (
    <>
      <div className="w-[80%] mx-auto ">
        <div className="flex gap-[50px] mt-8 justify-center">
          <div className="relative mt-[70px] mb-10 z-999 w-[60%] bg-white ml-32 ">
            <button className="bg-[#F4796C] btn ">Our Popular News</button>
            <button className="btn-lin "></button>
            <div className="flex gap-[10px]">
              <div className="bg-[url('/Container(4).png')] bg-cover bg-center h-[300px] w-[50%] mt-[45px] rounded-[10px]">
                <div className="gap-8  max-w-md ">
                  <button className="text-1xl text-white bg-slate-400 w-[80px] h-[30px] mt-[80px]">
                    Racing
                  </button>
                  <h3 className="text-2xl font-[inter] gap-3 mt-3 text-white ">
                    Racing Games Browned Butte roadert Cookies Daily Breakfast
                  </h3>
                  <div className="flex text-gray-400 gap-3 flex-wrap mt-3 items-center w-full">
                    <RxAvatar />
                    <span>BY ADMIN</span>
                    <MdOutlineDateRange />
                    <span>27 August, 2024</span>
                    <MdOutlineUpdate />
                    <span>20 mins</span>
                  </div>
                </div>
              </div>
              <div className="bg-[url('/Link(1).png')] bg-cover bg-center h-[300px] w-[50%] mt-[45px] rounded-[10px]">
                <div className="gap-8 p-6 max-w-md ">
                  <button className="text-1xl text-white bg-slate-400 w-[80px] h-[30px] mt-[80px]">
                    Racing
                  </button>
                  <h3 className="text-2xl font-[inter] gap-3 mt-3 text-white ">
                    Racing Games Browned Butte roadert Cookies Daily Breakfast
                  </h3>
                  <div className="flex text-gray-400 gap-3 flex-wrap mt-3 items-center w-full">
                    <RxAvatar />
                    <span>BY ADMIN</span>
                    <MdOutlineDateRange />
                    <span>27 August, 2024</span>
                    <MdOutlineUpdate />
                    <span>20 mins</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-8 w-[100%] h-[80%] ">
              <div className="bg-[url('/Container(1).png')] rounded-[20px] bg-cover bg-center w-[400px] h-[300px] items-center">
                <button className="items-center flex ml-6 bg-slate-400 text-black mt-[100px]">
                  Fighter
                </button>
                <h3 className="text-2xl font-[inter] mt-[4px] ml-6">
                  The Magic Of February 2024 Wallpapers
                </h3>
                <div className="flex text-gray-400 gap-2 mt-3 items-center w-full justify-center">
                  <RxAvatar />
                  <span>BY ADMIN</span>
                  <MdOutlineDateRange />
                  <span>27 August, 2024</span>
                  <MdOutlineUpdate />
                  <span>20 mins</span>
                </div>
              </div>
              <div className="bg-[url('/animation.jpg')] rounded-[20px] bg-cover bg-center w-[400px] h-[300px] items-center">
                <button className="items-center flex ml-6 bg-slate-400 text-black mt-[100px]">
                  Animation
                </button>
                <h3 className="text-2xl font-[inter] mt-[4px] ml-6">
                  Customization And Animation
                </h3>
                <div className="flex text-gray-400 gap-2 mt-3 items-center w-full justify-center">
                  <RxAvatar />
                  <span>BY ADMIN</span>
                  <MdOutlineDateRange />
                  <span>27 August, 2024</span>
                  <MdOutlineUpdate />
                  <span>20 mins</span>
                </div>
              </div>
              <div className="bg-[url('/Container(2).png')] rounded-[20px] bg-cover bg-center w-[400px] h-[300px] items-center">
                <button className="items-center flex ml-6 bg-slate-400 text-black mt-[100px]">
                  Story
                </button>
                <h3 className="text-2xl font-[inter] mt-[4px] ml-6">
                  Better ROI For Your Digital Products
                </h3>
                <div className="flex text-gray-400 gap-2 mt-3 items-center w-full justify-center">
                  <RxAvatar />
                  <span>BY ADMIN</span>
                  <MdOutlineDateRange />
                  <span>27 August, 2024</span>
                  <MdOutlineUpdate />
                  <span>20 mins</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-[70px] mb-10 z-999 w-[20%] bg-white ml-32 ">
            <button className="bg-[#F4796C] btn ">Recent Posts</button>
            <button className="btn-lin "></button>
            <div className="mt-9 ml-4 flex items-start gap-3  bg-white rounded-xl shadow-md w-[90%] max-w-md">
              <img
                src="/racing.jpg"
                alt="Racing"
                className="w-[100px] h-[100px] object-cover rounded-lg"
              />

              <div className="flex flex-col justify-between">
                <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded-md w-fit hover:bg-blue-700 transition">
                  Racing
                </button>

                <h4 className="text-lg font-semibold text-gray-800 mt-2">
                  The Butter Chocolate Cookies Daily
                </h4>

                <div className="flex items-center text-gray-500 text-sm mt-2 gap-3 flex-wrap">
                  <div className="flex items-center gap-1">
                    <MdOutlineDateRange className="text-lg" />
                    <span>27 August, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineUpdate className="text-lg" />
                    <span>20 mins</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-9 ml-4 flex items-start gap-3  bg-white rounded-xl shadow-md w-[90%] max-w-md">
              <img
                src="/racing.jpg"
                alt="Racing"
                className="w-[100px] h-[100px] object-cover rounded-lg"
              />

              <div className="flex flex-col justify-between">
                <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded-md w-fit hover:bg-blue-700 transition">
                  Racing
                </button>

                <h4 className="text-lg font-semibold text-gray-800 mt-2">
                  The Butter Chocolate Cookies Daily
                </h4>

                <div className="flex items-center text-gray-500 text-sm mt-2 gap-3 flex-wrap">
                  <div className="flex items-center gap-1">
                    <MdOutlineDateRange className="text-lg" />
                    <span>27 August, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineUpdate className="text-lg" />
                    <span>20 mins</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-9 ml-4 flex items-start gap-3  bg-white rounded-xl shadow-md w-[90%] max-w-md">
              <img
                src="/racing.jpg"
                alt="Racing"
                className="w-[100px] h-[100px] object-cover rounded-lg"
              />

              <div className="flex flex-col justify-between">
                <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded-md w-fit hover:bg-blue-700 transition">
                  Racing
                </button>

                <h4 className="text-lg font-semibold text-gray-800 mt-2">
                  The Butter Chocolate Cookies Daily
                </h4>

                <div className="flex items-center text-gray-500 text-sm mt-2 gap-3 flex-wrap">
                  <div className="flex items-center gap-1">
                    <MdOutlineDateRange className="text-lg" />
                    <span>27 August, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineUpdate className="text-lg" />
                    <span>20 mins</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-9 ml-4 flex items-start gap-3  bg-white rounded-xl shadow-md w-[90%] max-w-md">
              <img
                src="/racing.jpg"
                alt="Racing"
                className="w-[100px] h-[100px] object-cover rounded-lg"
              />

              <div className="flex flex-col justify-between">
                <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded-md w-fit hover:bg-blue-700 transition">
                  Racing
                </button>

                <h4 className="text-lg font-semibold text-gray-800 mt-2">
                  The Butter Chocolate Cookies Daily
                </h4>

                <div className="flex items-center text-gray-500 text-sm mt-2 gap-3 flex-wrap">
                  <div className="flex items-center gap-1">
                    <MdOutlineDateRange className="text-lg" />
                    <span>27 August, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineUpdate className="text-lg" />
                    <span>20 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
            <img src="/advertisement04.jpg.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Main;
