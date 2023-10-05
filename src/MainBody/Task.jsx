import React from "react";
import IMAGES from "../assets";

export default function Task() {
  return (
    <div className="  h-[540px] w-[360px] bg-white  rounded-[16px]">
      <div className=" flex  flex-col">
        <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
          <span>Task & Reminders</span>
          <img src={IMAGES.Add} alt="Add" />
        </div>

        <div className="flex flex-col  ">
          <div className=" flex flex-col gap-2  py-2 pl-4  border-b  ">
            <span>Call Sabin</span>
            <p className=" text-[12px] ">Today 7:45</p>
          </div>
          <div className=" flex flex-col gap-2  py-2 pl-4 border-b    ">
            <span>Call Sabin</span>
            <p className=" text-[12px] ">Dec 20 2022, 1:00 Pm - 3:30 Pm</p>
          </div>
          <div className=" flex flex-col gap-2  py-2 pl-4 border-b    ">
            <span>Call Sabin</span>
            <p className=" text-[12px] ">Dec 20 2022, 1:00 Pm - 3:30 Pm</p>
          </div>
          <div className=" flex flex-col gap-2  py-2 pl-4  border-b   ">
            <span>Call Sabin</span>
            <p className=" text-[12px] ">Dec 20 2022, 1:00 Pm - 3:30 Pm</p>
          </div>
          <div className=" flex flex-col gap-2  py-2 pl-4  border-b   ">
            <span>Call Sabin</span>
            <p className=" text-[12px] ">Dec 20 2022, 1:00 Pm - 3:30 Pm</p>
          </div>
          <div className=" flex flex-col gap-2  py-2 pl-4  border-b   ">
            <span>Call Sabin</span>
            <p className=" text-[12px] ">Dec 20 2022, 1:00 Pm - 3:30 Pm</p>
          </div>
          <div className=" flex flex-col gap-2  py-2 pl-4    ">
            <span>Call Sabin</span>
            <p className=" text-[12px] ">Dec 20 2022, 1:00 Pm - 3:30 Pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}
