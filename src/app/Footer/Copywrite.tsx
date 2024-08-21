"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import calender from "../../../public/Images/calenderico.svg"
import { AppStateContext } from "../Context/AppStateContext";


const Copywrite = () => {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
  };
  return (
    <>
      <div>
        <li
          className="lg:text-[18px] text-[15px] font-normal lg:leading-9 p-4 text-white bg-[#151820] text-center"
          style={{ wordSpacing: "2px" }}
        >
          © 2024 All rights reserved | Designed By{" "}
          <Link href="https://www.base2brand.com/" passHref target="_blank">
            Base2Brand
          </Link>
        </li>
      </div>
      <div className="chin-popup md:hidden block">
        <button className="footer-btn" onClick={handleClick}>
          <div className="flex justify-center gap-3 items-center">
          <span className="omega">Book Your Meeting Today</span>
          <span className="">
            <Image  className="w-[30px]" src={calender} alt="" />
          </span>
          </div>

        </button>
      </div>
    </>
  );
};

export default Copywrite;
