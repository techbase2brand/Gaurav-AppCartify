import React, { useContext } from "react";
import Image from "next/image";
// import bannerImage from "../../../public/Images/banner.svg"
import "./Banner.css";
import frame from "../../../public/Images/frame.svg";
import gifvideo from "../../../public/Images/ggivvideo.gif";
import { AppStateContext } from "../Context/AppStateContext";

const Banner = () => {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
    // setOpen((prevOpen:any) => !prevOpen);
  };

  return (
    <>
      <section className="hhh flex items-center xl:h-[900px]  md:pt-[90px] md:pb-[50px] pt-[9.5rem] pb-14  mt-[-93px]   ">
        <div className="container">
          <div className=" xl:flex  xl:justify-between  lg:flex  lg:justify-between items-center   ">
            <div className="xl:w-[50%]  lg:w-[50%] w-[100%]">
              <h1 className="gk-h1 uppercase  ">
                Sell 3X Times More With{" "}
                <span style={{ color: "#96BF48" }}>Shopify Mobile App</span>
              </h1>
              <p className="manrope-gk-p">
                Convert your Shopify store into an app in just seven days and
                boost your sales
              </p>
              <div className="btn ">
                <button
                  className="gk-button lg:block hidden "
                  onClick={() => handleClick()}
                >
                {" "}
                  <span className="omega">
                  Book Your Meeting Today
                  </span>
                </button>
              </div>
            </div>
            <div className="frame-class xl:w-[40%] lg:w-[40%] w-[100%] pt-[2.5rem]">
              <div className="adbsframe relative lg:h-[400px] xl:h-[545px] h-[400px] w-[90%] mx-auto md:w-[100%]">
                {/* <Image src={frame} alt="frame" className="frame relative" /> */}
                <Image
                  className="gifframe  absolute xl:w-[519px] xl:h-[523px] xl:object-cover xl:left-[-32px] xl:top-[-21px] xl:rounded-[40px_0px_45px] lg:left-[-33px] lg:h-[370px] lg:top-[-30px] lg:w-[100%]  h-[335px] w-[92%] left-[-15px] top-[-18px] md:w-[100%]  md:-left-[0px] md:-top-[0px] md:h-[408px]"
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
