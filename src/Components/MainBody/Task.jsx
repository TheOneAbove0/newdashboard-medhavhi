import React from "react";
import {Add} from "../assets/Image/index";
import { TaskData } from "./TaskData";

export default function Task() {
  return (
    <div className="  h-[540px] flex-shrink w-1/4 bg-white  rounded-[16px]">
      <div className=" flex  flex-col">
        <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
          <span>Task & Reminders</span>
          <img src={Add} alt="Add" />
        </div>

        <div className="flex flex-col  ">
          {TaskData.map((item, index) => (
            <div
              key={index}
              className="flex font-semibold text-sm flex-col gap-2 py-2 pl-4 border-b"
            >
              <span>{item.text}</span>
              <p className="text-[12px] font-medium text-DavyGray">
                {item.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
