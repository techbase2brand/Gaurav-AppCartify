"use client";
import React, { useContext, useEffect } from "react";
import { AppStateContext } from "../Context/AppStateContext";
import Image from "next/image";
import logoAppcartify from "../../../public/Images/logoAppcartify.svg";
import ImgAppcartify from "../../../public/Images/appcartifyimg.png";
import { usePathname } from "next/navigation";
import whtasapp from "../../../public/Images/whatsapp-icon-header.png";
import Link from "next/link";
const Header = () => {
  const { setState } = useContext(AppStateContext);
  const pathname = usePathname();
  const handleClick = () => {
    setState(true);
  };
  useEffect(() => {}, []);
  return (
    <>
      <header className="z-[999] fixed w-full bg-black top-0">
        <div className="container">
          <div className="grid grid-rows-1 grid-flow-col gap-4 place-content-between items-center   pt-3  pb-3  ">
            <div>
              <Link href='/'>
              <div className="logo_icon">
                <Image
                  src={logoAppcartify}
                  alt="appcartifylogo "
                  className="lg:w-auto w-[95%]"
                />
                <Image
                  src={ImgAppcartify}
                  alt="appcartifylogo "
                  className="lg:w-auto w-[60%]"
                  style={{ display: "none" }}
                />
              </div>
              </Link>
            </div>
            <div className="flex gap-2 md:gap-5">
            {/* <a  href="https://wa.me/+917889101844" target="_blank" className="m-auto"> 
            <div className="flex items-center gap-1">
              <Image
              src={whtasapp}
              alt="whtasapp"
              width={1000}
              height={500}
              className="h-[40px] md:h-[65px] w-[40px] md:w-[65px]"
              />
              <span className="text-[#96BF48] underline hidden lg:block">
                +91-7889101844
              </span>
            </div>
            </a>  */}
            {pathname !== "/thank-you" && (
              <div className="m-auto">
                <div
                  className="flex justify-center items-center "
                  onClick={() => handleClick()}
                >
                  <button className="relative px-3 md:px-8 py-0 md:py-2 text-[#82bc29] border-2 border-[#82bc29] rounded-lg uppercase font-medium overflow-hidden transition-colors duration-300 group">
                    <span className="absolute inset-0 bg-[#82bc29] transition-all duration-300 transform translate-x-full group-hover:translate-x-0"></span>
                    <span className="relative text-white text-base md:text-lg">
                      Contact Us
                    </span>
                  </button>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
