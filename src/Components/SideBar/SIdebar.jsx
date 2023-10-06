import React, { useMemo, useState } from "react";
import menuItems from "./sidebarData";
import {Setting, Logout  } from "../../Components/assets/Svg/index";


export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (label) => {
    setActiveItem(label);
  };

  const memoizedActiveItem = useMemo(() => activeItem, [activeItem]);

  return (
    <div
      className="w-[160px] h-[784px] border overflow-hidden fixed top-0 left-0 bg-white flex flex-col "
     
    >
      <div className="w-40 px-3  pt-4 pb-6">
        <img
          src="https://app.medhavhi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmedhavi-logo.911704b2.png&w=256&q=75"
          alt="company logo"
        />
      </div>

      <div className="text-Jet w-[152px]  overflow-hidden flex flex-col gap-1 flex-1">
        {menuItems.map((menuItem, index) => (
          <div
            key={index}
            className={`relative cursor-pointer rounded-l-none  pl-4 p-2 rounded-r-[8px] ${
              memoizedActiveItem === menuItem.label
                ? "bg-primaryColor text-white"
                : ""
            }`}
          >
            <div
              className={`flex items-center gap-2 ${
                memoizedActiveItem === menuItem.label
                  ? "bg-primaryColor text-white"
                  : ""
              }`}
              onClick={() => handleItemClick(menuItem.label)}
            >
              <span>{menuItem.icon}</span>
              <span>{menuItem.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center mt-24 gap-2 cursor-pointer  mx-auto py-3 rounded-lg px-5">
          <img src={Setting} alt="Settings" />
          <span>Settings</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer  px-5 mx-auto py-3 rounded-lg">
          <img src={Logout} alt="Logout" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
