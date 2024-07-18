import React from "react";
import Image from "next/image";
// import bannerImage from "../../../public/Images/banner.svg"
import "./Banner.css";
import frame from "../../../public/Images/frame.svg";
import gifvideo from "../../../public/Images/ggivvideo.gif";

const Banner = () => {
  return (
    <>
      <section className="hhh flex items-center xl:h-[900px]  md:pt-[50px] md:pb-[50px]  ">
        <div className="container">
          <div className=" lg:flex  lg:justify-between items-center flex gap-5 ">
            <div className="xl:w-[50%]  lg:w-[50%] w-[100%]">
              <h1 className="gk-h1 uppercase">
                Sell 3X Times More With{" "}
                <span style={{ color: "#96BF48" }}>Shopify Mobile App</span>
              </h1>
              <p className="manrope-gk-p">
                Convert your Shopify store into an app in just seven days and
                boost your sales
              </p>
              <button className="gk-button"> Book Your Meeting Today</button>
            </div>
            <div className="frame-class xl:w-[40%] lg:w-[40%] w-[100%]">
              <div className="adbsframe relative lg:h-[400px] xl:h-[545px] h-[400px]">
                {/* <Image src={frame} alt="frame" className="frame relative" /> */}
                <Image
                  className="gifframe  absolute xl:w-[519px] xl:h-[513px] xl:object-cover xl:left-[-32px] xl:top-[-21px] xl:rounded-[40px_0px_45px] lg:left-[-33px] lg:h-[386px] lg:top-[-30px]"
                  src={gifvideo}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
