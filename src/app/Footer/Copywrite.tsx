"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import calender from "../../../public/Images/Calenderico.svg"
import { AppStateContext } from "../Context/AppStateContext";
import { usePathname } from "next/navigation";


const Copywrite = () => {
  const { setState } = useContext(AppStateContext);
  const pathname = usePathname();
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
          © {new Date().getFullYear()} All rights reserved | Designed By
          <Link href="https://www.base2brand.com/" passHref target="_blank">
            {' '}Base2Brand
          </Link>
        </li>
      </div>
      {pathname !== "/thank-you" && 
      <div className="chin-popup md:hidden block overflow-hidden">
        <button className="footer-btn blue " onClick={handleClick}>
          <div className="flex justify-center gap-3 items-center">
          <span className="omega">Get In Touch</span>
          <span className="">
            <Image  className="w-[30px]" src={calender} alt="" />
          </span>
          </div>

        </button>
      </div>
}
    </>
  );
};

export default Copywrite;
