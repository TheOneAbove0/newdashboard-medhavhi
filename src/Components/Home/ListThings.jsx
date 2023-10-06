import React from "react";

import ListData from "./ListThingsData";

export default function ListThings() {
  return (
    <div className=" py-4 px-6 ">
      <div className="w-full h-[88px] flex  gap-4">
        {ListData.map((item, index) => (
          <div
            key={index}
            className="h-[88px] bg-white w-full flex flex-col justify-center items-center gap-2 rounded-2xl"
          >
            <img className="w-9 h-9" src={item.Photo} alt="Assignment" />
            <span className="text-[14px] leading-[19.6px]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
