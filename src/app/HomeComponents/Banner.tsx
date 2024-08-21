import React, { useContext } from "react";
import Image from "next/image";
// import bannerImage from "../../../public/Images/banner.svg"
import "./Banner.css";
import frame from "../../../public/Images/frame.svg";
import gifvideo from "../../../public/Images/ggivvideo.gif";
import { AppStateContext } from "../Context/AppStateContext";
import Affordablepricing from "../../../public/Images/mainpagebanner/image-removebg-preview.png";

const Banner = () => {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
    // setOpen((prevOpen:any) => !prevOpen);
  };
  const preventFullScreen = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="hhh flex items-center xl:h-[850px]  md:pt-[100px] md:pb-[50px] pt-[9.5rem] pb-14  mt-[-93px]   ">
        <div className="container">
          <div className=" xl:flex  xl:justify-between  lg:flex  lg:justify-between items-center  lg:gap-7  ">
            <div className="xl:w-[30%]  lg:w-[30%] w-[100%]">
              {/* <Image
                className="w-[30%]"
                src={Affordablepricing}
                alt="Affordablepricing"
              /> */}

              <h1 className="gk-h1 uppercase md:text-left text-center ">
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
                  <span className="omega">Book Your Meeting Today</span>
                </button>
              </div>
            </div>
            <div className="frame-class xl:w-[65%] lg:w-[65%] w-[100%] md:pt-[2.5rem] pt-[20%]">
              <div className="">
                {/* <Image src={frame} alt="frame" className="frame relative" /> */}
                <div className="relative">
                  <Image
                    className="w-[122px] lg:w-[158px] absolute right-[-9px] md:top-[-70px] top-[-65px] object-cover w-100 z-30 "
                    src={Affordablepricing}
                    alt="Affordablepricing"
                  />
                </div>
                <div className="md:block hidden">
                  <video
                    src="/Images/mainpagebanner/AppCartifyVideo.mp4"
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover rounded-[25px_0px_25px]"
                    onClick={preventFullScreen}
                  />
                </div>
                <div className="md:hidden block">
                <video
                  src="/Images/mainpagebanner/App.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover rounded-[25px_0px_25px]"
                />
              </div>

                {/* 
                <Image
                  className="gifframe  absolute xl:w-[519px] xl:h-[523px] xl:object-cover xl:left-[-32px] xl:top-[-21px] xl:rounded-[40px_0px_45px] lg:left-[-33px] lg:h-[370px] lg:top-[-30px] lg:w-[100%]  h-[335px] w-[92%] left-[-15px] top-[-18px] md:w-[100%]  md:-left-[0px] md:-top-[0px] md:h-[408px]"
                  src={gifvideo}
                  alt=""
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
