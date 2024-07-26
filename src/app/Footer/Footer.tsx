import React from "react";
import Image from "next/image";
import DowonlodApp from "../../../public/Images/Dowonlodapp.svg"
import Copywrite from "./Copywrite";

const Footer = () => {
  return (
    <>
      <section className="bg-[#0e1014] lg:pt-9 lg:pb-12 pb-12 pt-6 ">
        <div className="container">
          <h2 className="gk-h2   uppercase lg:pt-[40px] lg:pb-[10px] pb-5 pt-6 ">
            Get Ready to Create Your Success <span style={{ color: "#96BF48" }}>  Roadmap</span>{" "}
           With Us
          </h2>
          <p className="text-white  lg:text-[22px] lg:font-medium  font-normal text-[18px] lg:w-[60%]">
            Our Team is Ready To Turn Your Goals Into Implementation Ensuring
            Your Vision Turns Into Reality
          </p>

          <div className="heee flex justify-end">
            {/* <button className="gk-button ">Get App Now</button> */}

            <Image className="lg:w-auto lg:h-auto  h-[100px] cursor-pointer" src={DowonlodApp} alt="" />

          </div>
        </div>


      </section>
      <Copywrite/>
    </>
  );
};

export default Footer;
