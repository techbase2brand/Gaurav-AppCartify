"use client";
import React, { useContext } from "react";
import { AppStateContext } from "../Context/AppStateContext";
import Image from "next/image";
import logoAppcartify from "../../../public/Images/logoAppcartify.svg";

const Header = () => {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
    // setOpen((prevOpen:any) => !prevOpen);
  };

  return (
    <>
      <header className=" relative z-10">
        <div className="container">
          <div className="grid grid-rows-1 grid-flow-col gap-4 place-content-between items-center   pt-3  pb-3  ">
            <div>
              <div className="logo_icon">
                {/* <h1 className="text-[26px] font-bold text-white">Appcartify</h1> */}
                <Image
                  src={logoAppcartify}
                  alt=""
                  className="lg:w-auto w-[60%]"
                />
              </div>
            </div>

            <div>
              <button
                className="Contact_btn md:p-[10px_25px] p-[9px_10px] font-medium md:font-semibold rounded-[10px] relative  bg-transparent cursor-pointer md:text-[22px]  text-[16px] "
                style={{
                  position: "relative",
                  // // fontSize: '22px',
                  // color: 'black',
                  // zIndex: 1,
                  // border: 'none',
                }}
                onClick={() => handleClick()}
              >
                Contact Us
                <span
                  style={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: "10px",
                    padding: "2px", // Border width
                    background: "linear-gradient(to right, #82bc29, #4d8f2d)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    zIndex: -1, // Place it behind the button content
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
