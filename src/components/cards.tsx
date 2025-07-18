import React from "react";

const Cards = () => {
  return (
    <div className="">
        <div className="relative mt-[70px] mb-10 z-999 w-[70%] bg-white ml-32 left-[200px]">
            <button className="bg-[#F4796C] btn ">
                Exciting Categories
            </button>
            <button className="btn-lin "></button>
        </div>
      <div className="flex flex-wrap justify-center gap-[100px] mt-8 ">
        <div className="flex justify-center  text-2xl text-white bg-[url('/Link.png')] bg-cover bg-center w-[180px] h-[180px] rounded-[60px]">
          <button className="bg-[#FFFFFF4D] rounded-[5px] h-[35px] translate-y-[90px] ">
            Action
          </button>
        </div>
        <div className="flex justify-center  text-2xl text-white bg-[url('/asasin.jpg')] bg-cover bg-center w-[180px] h-[180px] rounded-[60px]">
          <button className="bg-[#FFFFFF4D] rounded-[5px] h-[35px] translate-y-[90px] ">
            Gaming
          </button>
        </div>
        <div className="flex justify-center  text-2xl text-white bg-[url('/racing.jpg')] bg-cover bg-center w-[180px] h-[180px] rounded-[60px]">
          <button className="bg-[#FFFFFF4D] rounded-[5px] h-[35px] translate-y-[90px] ">
            Racing
          </button>
        </div>
        <div className="flex justify-center  text-2xl text-white bg-[url('/animation.jpg')] bg-cover bg-center w-[180px] h-[180px] rounded-[60px]">
          <button className="bg-[#FFFFFF4D] rounded-[5px] h-[35px] translate-y-[90px] ">
            Animation
          </button>
        </div>
        <div className="flex justify-center  text-2xl text-white bg-[url('/fighter.jpg')] bg-cover bg-center w-[180px] h-[180px] rounded-[60px]">
          <button className="bg-[#FFFFFF4D] rounded-[5px] h-[35px] translate-y-[90px] ">
            Fighter
          </button>
        </div>
        <div className="flex justify-center  text-2xl text-white bg-[url('/story.jpg')] bg-cover bg-center w-[180px] h-[180px] rounded-[60px]">
          <button className="bg-[#FFFFFF4D] rounded-[5px] h-[35px] translate-y-[90px] ">
            Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
