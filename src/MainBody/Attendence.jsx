import React from "react";
import IMAGES from "../assets";

export default function Attendence() {
  return (
    <div className=" h-[952px] w-[976px]  rounded-[16px] bg-white ">
      <div className=" flex flex-col gap-4  ">
        <div className=" flex flex-col gap-4">
          <div className=" flex items-center justify-between  ">
            <ul className=" flex items-center   ">
              <li className=" px-4 py-[14px]">Attendance</li>
              <li className="  px-4 py-[14px] ">Assignments</li>
              <li className="  px-4 py-[14px] ">Test scores</li>
              <li className="  px-4 py-[14px] ">Grades</li>
            </ul>
            <div className="mx-4 my-2 py-2 px-4 bg-DavyGray bg-opacity-20 flex items-center gap-2 ">
              <span>22-12-2023</span>
              <span>l</span>
            </div>
          </div>

          <div className=" flex px-4 gap-4 ">
            <div className="w-full h-[280px] border rounded-[16px]  shadow-sm bg-white  ">
              <div className=" flex flex-col  ">
                <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
                  <span>Attendance Summary</span>
                  <div className=" flex items-center gap-2 py-[9px] bg-opacity-20 bg-DavyGray  px-4  ">
                    <span>All class</span>
                    <span>l</span>
                  </div>
                </div>

                <div className=" flex flex-col items-center ">
                  <img
                    className=" mt-3 w-[150px] h-[150px] "
                    src={IMAGES.Chart}
                    alt="Chart"
                  />
                  <div className=" flex pb-[28px] gap-4 mt-3 ">
                    <div className="  flex items-center gap-2">
                      <div className=" w-3 h-3 rounded-full bg-black "></div>
                      <span>Present</span>
                    </div>
                    <div className="  flex items-center gap-2">
                      <div className=" w-3 h-3 rounded-full bg-black "></div>
                      <span>Absent</span>
                    </div>
                    <div className="  flex items-center gap-2">
                      <div className=" w-3 h-3 rounded-full bg-black "></div>
                      <span> On leave</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[280px] overflow-hidden border rounded-[16px] shadow-sm bg-white  ">
              <div className=" flex flex-col ">
                <span className=" py-[14px] border-b pl-[16px] ">
                  Attendance
                </span>

                <div className=" flex items-center justify-between pt-2    ">
                  <div className=" flex flex-col gap-1 py-2 pl-4  ">
                    <div>Class 9, A</div>
                    <div>98%</div>
                  </div>
                  <div className=" flex flex-col gap-1 py-2 pr-4 ">
                    <div>12 present</div>
                    <div>1 Absent</div>
                  </div>
                </div>

                <div className=" flex items-center justify-between pt-2    ">
                  <div className=" flex flex-col gap-1 py-2 pl-4  ">
                    <div>Class 9, A</div>
                    <div>98%</div>
                  </div>
                  <div className=" flex flex-col gap-1 py-2 pr-4 ">
                    <div>12 present</div>
                    <div>1 Absent</div>
                  </div>
                </div>

                <div className=" flex items-center justify-between pt-2    ">
                  <div className=" flex flex-col gap-1 py-2 pl-4  ">
                    <div>Class 9, A</div>
                    <div>98%</div>
                  </div>
                  <div className=" flex flex-col gap-1 py-2 pr-4 ">
                    <div>12 present</div>
                    <div>1 Absent</div>
                  </div>
                </div>

                <div className=" flex items-center justify-between pt-2    ">
                  <div className=" flex flex-col gap-1 py-2 pl-4  ">
                    <div>Class 9, A</div>
                    <div>98%</div>
                  </div>
                  <div className=" flex flex-col gap-1 py-2 pr-4 ">
                    <div>12 present</div>
                    <div>1 Absent</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className=" flex px-4 gap-4 ">
          <div className="  h-[280px] border rounded-[16px] w-full">
            <div className=" flex flex-col ">
              <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
                <span>Users</span>
                <div className=" flex items-center gap-2 py-[9px] bg-opacity-20 bg-DavyGray  px-4  ">
                  <span>By Device</span>
                  <span>l</span>
                </div>
              </div>
              <div className=" flex items-center gap-[135px] mt-[21px] pl-[40px] pr-[56px]  ">
                <img className=" w-40 h-40 " src={IMAGES.ChartB} alt="ChartB" />
                <div className=" flex flex-col  gap-2  ">
                    <div className="  flex  items-center gap-3">
                      <div className=" w-4 h-4 rounded-full bg-black "></div>
                      <span>Android</span>
                    </div>
                    <div className="  flex items-center gap-3">
                      <div className=" w-4 h-4 rounded-full bg-black "></div>
                      <span>Web</span>
                    </div>
                    <div className="  flex items-center gap-3">
                      <div className=" w-4 h-4 rounded-full bg-black "></div>
                      <span>iOS</span>
                    </div>
                  </div>

              </div>
            </div>
          </div>

          <div className="  h-[280px] rounded-[16px] border w-full ">
            <div className=" flex flex-col gap-2 ">
              <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
                <span>Announcements & Notifications</span>
                <button className="  px-4 text-white py-2 bg-primaryColor rounded-[8px] ">
                  Add new
                </button>
              </div>
              <div className=" flex flex-col gap-3">
                <div className=" pl-4 flex flex-col gap-2 ">
                  <span>Online form oprn for section officer</span>
                  <div className=" text-[12px] ">2023-08-17 11:57 AM</div>
                </div>
                <div className=" pl-4 flex flex-col gap-2 ">
                  <span>Online form oprn for section officer</span>
                  <div className=" text-[12px] ">2023-08-17 11:57 AM</div>
                </div>
                <div className=" pl-4 flex flex-col gap-2 ">
                  <span>Online form oprn for section officer</span>
                  <div className=" text-[12px] ">2023-08-17 11:57 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className=" flex px-4 gap-4 ">

        <div className="  h-[280px] rounded-[16px] border w-full ">
            <div className=" flex flex-col gap-2 ">
                <span className=" py-[14px] border-b pl-[16px] ">
                Communities
                </span>

                <div className=" flex items-center justify-between pt-2    ">
                  <div className=" flex items-center  gap-4 py-2 pl-4  ">
                    <img src={IMAGES.Smile} alt="Smile" />
                    <div>Acme Corporation</div>
                  </div>
                  <div className=" flex flex-col items-end gap-1 py-2 pr-4 ">
                    <img src={IMAGES.RedTwo} alt="RedTwo" />
                    <div>4:30 PM</div>
                  </div>
                </div>

                <div className=" flex items-center justify-between pt-2    ">
                  <div className=" flex items-center  gap-4 py-2 pl-4  ">
                  <img src={IMAGES.Flower} alt="Flower" />
                    <div>Bluth Company</div>
                  </div>
                  <div className=" flex items-end flex-col gap-1 py-2 pr-4 ">
                  <img src={IMAGES.Wright} alt="RedTwo" />
                    <div>4:30 PM</div>
                  </div>
                </div>

                <div className=" flex items-center justify-between pt-2    ">
                  <div className=" flex  items-center gap-4 py-2 pl-4  ">
                  <img src={IMAGES.Bhawani} alt="Bhawani" />
                    <div>4:30 PM</div>
                  </div>
                  <div className=" flex items-end flex-col gap-1 py-2 pr-4 ">
                  <img src={IMAGES.Wright} alt="RedTwo" />
                    <div>4:30 PM</div>
                  </div>
                </div>

                
              </div>
            </div>

                
            <div className="  h-[280px] overflow-hidden rounded-[16px] border w-full ">
            <div className=" flex  flex-col">
                <div className=" flex border-b py-[14px]  px-[16px] items-center justify-between  ">
                  <span>Fees & Accounting</span>
                  <div className=" flex items-center gap-2 py-[9px] bg-opacity-20 bg-DavyGray  px-4  ">
                    <span>All class</span>
                    <span>l</span>
                  </div>
                </div>

                <div className=" flex  w-full  ">
                    <div className=" flex py-2 pl-4 w-40 flex-col gap-2 border border-l-none ">
                        <span>Received Today</span>
                        <p>Rs. 74720023</p>
                    </div>
                    <div className=" flex py-2 pl-4 w-40 flex-col gap-2 border border-l-none ">
                        <span>Received Today</span>
                        <p>Rs. 74720023</p>
                    </div>
                    <div className=" w-40 py-2 pl-4 flex flex-col gap-2 border border-l-none ">
                        <span>Received Today</span>
                        <p>Rs. 74720023</p>
                    </div>

                </div>

                <div className=" flex flex-col  ">
                    <div className=" flex border-b items-center px-6  justify-between py-2 ">
                        <div className=" flex item-center gap-3  ">
                            <img src={IMAGES.P1} alt="p1" />
                            <span>Sharad Shakya</span>
                        </div>
                        <div>Rs. 200232</div>
                    </div>
                    <div className=" flex border-b items-center px-6  justify-between py-2 ">
                        <div className=" flex item-center gap-3  ">
                            <img src={IMAGES.P2} alt="p1" />
                            <span>Prabin Thapa</span>
                        </div>
                        <div>Rs. 200232</div>
                    </div>
                    <div className=" flex items-center px-6  justify-between py-2 ">
                        <div className=" flex item-center gap-3  ">
                            <img src={IMAGES.P3} alt="p1" />
                            <span>Sujab Shrestha</span>
                        </div>
                        <div>Rs. 200232</div>
                    </div>
                    <div className=" flex items-center px-6  justify-between py-2 ">
                        <div className=" flex item-center gap-3  ">
                            <img src={IMAGES.P3} alt="p1" />
                            <span>Sharad Shakya</span>
                        </div>
                        <div>Rs. 200232</div>
                    </div>

                </div>


                
            </div>
            </div>



        </div>
      </div>
    </div>
  );
}
