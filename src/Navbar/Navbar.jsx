import React from "react";
import IMAGES from "../assets/index";

export default function Navbar() {
  return (
    <div className="bg-white  w-full  h-[68px]  sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-2    ">
      
        <div className="flex items-center gap-3 text-Jet leading-6 tracking-[0.024] text-lg">
          <span>
            Good Morning <strong>Medhavhi</strong>
          </span>
        </div>
      
      <div className=" flex gap-6 items-center ">
        <div className=" pl-4 w-[325px]  gap-2 border rounded-full flex items-center  ">
          <img className=" object-cover w-[20px] h-[20px] " src={IMAGES.SearchNormal} alt="Search" />
          <input className=" py-3 focus:outline-none " type="text" placeholder="Search" />
        </div>

        <div>
          <button className=" bg-primaryColor cursor-pointer w-36 h-[52px]  px-6 ml-auto py-4 text-white rounded-lg flex items-center gap-2 ">
            <img src={IMAGES.AddCirCle} alt="Dashboard" />

            <span>Create</span>
          </button>
        </div>

        <div>
          <img src={IMAGES.Notification} alt="Notification" />
        </div>
        <div className="w-10 h-10 cursor-pointer  rounded-full overflow-hidden border  ">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNOeZ__-W8I9I8_0p0IS42vAq2xPUObTOfGC4yB8r-3kKldwQ2"
            alt="random-person"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
