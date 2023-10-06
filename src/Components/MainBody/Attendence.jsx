import React, { useState } from "react";
import {Calendartwo,DownL, Chart, ChartB, Wright } from "../assets/Image/index";
import {
  AnnouncementData,
  ColorItems,
  CommunitiesData,
  Data,
  FeesData1,
  FeesData2,
  Items,
  Statuses,
} from "./DataAttendence";

export default function Attendence() {
  const [activeItems, SetActiveItem] = useState("Attendance");

  const clickHandler = (label) => {
    SetActiveItem(label);
  };

 

  return (
    <div className=" h-[952px] flex-grow min-w-0 w-3/4 rounded-[16px] bg-DavyGray bg-opacity-[1%] ">
      <div className=" flex flex-col gap-4  ">
        <div className=" flex w-full flex-col rounded-2xl bg-white pb-2 gap-4">
          <div className=" flex items-center border-b justify-between  ">
            <ul className=" flex items-center   ">
              {Items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    clickHandler(item);
                  }}
                  className={`px-4 py-[14px] cursor-pointer ${
                    activeItems === item ? "buttonColor" : ""
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="mx-4 my-2 py-2 px-4 bg-Disable bg-opacity-20 flex items-center gap-2 ">
              <span className=" text-xs font-medium text-DavyGray ">
                22-12-2023
              </span>
              <img src={Calendartwo} alt="Calendartwo" />
            </div>
          </div>

          <div className=" flex px-4 gap-4 ">
            <div className="w-full h-[280px] border rounded-[16px]  shadow-sm bg-white  ">
              <div className=" flex flex-col  ">
                <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
                  <span className="  font-semibold text-[14px] leading-[19.6px">
                    Attendance Summary
                  </span>
                  <div className=" flex items-center gap-2 py-[9px] bg-opacity-20 bg-Disable  px-4  ">
                    <span className=" font-medium text-xs  ">All class</span>
                    <img src={DownL} alt="DownL" />
                  </div>
                </div>

                <div className=" flex flex-col items-center ">
                  <img
                    className=" mt-3 w-[150px] h-[150px] "
                    src={Chart}
                    alt="Chart"
                  />
                  <div className=" flex  pb-[28px] gap-4 mt-3 ">
                    {Statuses.map((status, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className={`w-3 h-3 rounded-full bg-${status.color}`}
                        ></div>
                        <span className="text-sm">{status.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[280px] overflow-hidden border rounded-[16px] shadow-sm bg-white  ">
              <div className=" flex flex-col ">
                <span className=" py-[14px] font-semibold text-sm border-b pl-[16px] ">
                  Attendance
                </span>

                {Data.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b"
                  >
                    <div className="flex flex-col gap-1 py-2 pl-4">
                      <div className="font-semibold text-base leading-[20px]">
                        {item.className}
                      </div>
                      <div className="text-sm text-BGreen">
                        {item.percentage}
                      </div>
                    </div>
                    <div className="flex flex-col text-sm gap-1 py-2 pr-4">
                      <div className="text-BGreen">{item.present}</div>
                      <div className="text-Disable">{item.absent}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex  w-full  gap-4 ">
          <div className="  h-[280px] border rounded-[16px] w-full">
            <div className=" flex flex-col bg-white rounded-[16px] ">
              <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
                <span className=" font-semibold text-sm  ">Users</span>
                <div className=" flex items-center gap-2 py-[9px] bg-opacity-20 bg-Disable  px-4  ">
                  <span className=" text-xs font-medium   ">By Device</span>
                  <img src={DownL} alt="DownL" />
                </div>
              </div>
              <div className=" flex items-center gap-[135px] mt-[21px] pl-[40px] pr-[56px] pb-[35px]   ">
                <img className=" w-40 h-40 " src={ChartB} alt="ChartB" />

                <div className=" flex flex-col  gap-2  ">
                  {ColorItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full bg-${item.color}`}
                      ></div>
                      <span className="text-base leading-[20px] font-semibold">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="  h-[280px] bg-white rounded-[16px] border w-full ">
            <div className=" flex flex-col gap-2 ">
              <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
                <span className=" text-md font-semibold  ">
                  Announcements & Notifications
                </span>
                <button className=" font-medium text-xs px-4 text-white py-2 bg-primaryColor rounded-[8px] ">
                  Add new
                </button>
              </div>
              <div className=" flex py-2 flex-col gap-4">
                {AnnouncementData.map((item, index) => (
                  <div
                    key={index}
                    className="pl-4 flex flex-col gap-2 pb-2 border-b"
                  >
                    <span className="font-semibold text-base leading-[20px]">
                      {item.title}
                    </span>
                    <div className="text-[12px]">{item.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex  gap-4 ">
          <div className="  h-[280px] bg-white rounded-[16px] border w-full ">
            <div className=" flex flex-col gap-2 ">
              <span className=" font-semibold text-sm  py-[14px] border-b pl-[16px] ">
                Communities
              </span>

              {CommunitiesData.map((item, index) => (
                <div
                  key={index}
                  className="flex border-b items-center justify-between pt-4 pr-4 py-2 pl-4"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.logo} alt={item.companyName} />
                    <div className="font-medium text-xs">
                      {item.companyName}
                    </div>
                  </div>
                  <div className="flex items-end flex-col gap-1">
                    <img src={Wright} alt="RedTwo" />
                    <div className="font-medium text-[13px] text-Disable">
                      {item.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="  h-[280px] bg-white overflow-hidden rounded-[16px] border w-full ">
            <div className=" flex  flex-col">
              <div className=" flex border-b  items-center justify-between  ">
                <span className=" font-semibold py-[14px] pl-4 text-sm leading-[19.6px] ">
                  Fees & Accounting
                </span>
                <div className=" flex items-center gap-2 py-[9px] my-2 mr-4 bg-opacity-20 bg-Disable  px-4  ">
                  <span className=" font-medium text-xs leading-[14.4px] ">
                    All class
                  </span>
                  <img src={DownL} alt="DownL" />
                </div>
              </div>

              <div className=" flex  w-full  ">
                {FeesData1.map((item, index) => (
                  <div
                    key={index}
                    className="flex py-2 w-full pl-4 flex-col gap-2 border border-l-none"
                  >
                    <span className="text-xs leading-[15.6px]">
                      Received Today
                    </span>
                    <p
                      className={`font-semibold text-base leading-[22.4px] ${item.colorClass}`}
                    >
                      {item.amount}
                    </p>
                  </div>
                ))}
              </div>

              <div className=" flex flex-col  ">
                {FeesData2.map((item, index) => (
                  <div
                    key={index}
                    className="flex text-sm leading-[19.6px] border-b items-center px-6 justify-between py-2"
                  >
                    <div className="flex item-center gap-3">
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                    <div>{item.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
