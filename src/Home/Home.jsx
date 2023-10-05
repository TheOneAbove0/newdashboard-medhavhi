import React from "react";
import SIdebar from "../SideBar/SIdebar";
import Navbar from "../Navbar/Navbar";
import MainBody from "./MainBody";
import Main from "../MainBody/Main";

export default function Home() {
  return (
    <div className="flex items-start">
      <div >

      <SIdebar />
      </div>

      <div className=" flex flex-col ml-40 w-full h-full ">
        <Navbar />
        <div className= "flex flex-col  bg-GreyBackground bg-opacity-20  rounded-md ">
          <MainBody />
          <Main />
        </div>
      </div>
    </div>
  );
}
