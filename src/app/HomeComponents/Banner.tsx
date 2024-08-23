import React, { useContext } from "react";
import Image from "next/image";
// import bannerImage from "../../../public/Images/banner.svg"
import "./Banner.css";
import frame from "../../../public/Images/frame.svg";
import gifvideo from "../../../public/Images/ggivvideo.gif";
import { AppStateContext } from "../Context/AppStateContext";
import Affordablepricing from "../../../public/Images/mainpagebanner/image-removebg-preview.png";
import Script from "next/script";

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
      <section className="hhh flex items-center xl:h-[800px]  md:pt-[100px] md:pb-[50px] pt-[5rem] pb-14  lg:mt-[0px]  md:mt-[0px]   ">
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
            <div className="frame-class xl:w-[65%] lg:w-[65%] w-[100%] md:pt-[1rem] pt-[6%]">
              <div className="">
                {/* <Image src={frame} alt="frame" className="frame relative" /> */}
                {/* <div className="relative">
                  <Image
                    className="w-[122px] lg:w-[158px] absolute right-[-9px] md:top-[-70px] top-[-65px] object-cover w-100 z-30 "
                    src={Affordablepricing}
                    alt="Affordablepricing"
                  />
                </div> */}
                <div className="md:block hidden">
                  <div className=" relative  xl:h-[597px] object-cover  lg:h-[500px] md:h-[417px]  ppp rounded-[50px] pt-3">   
                    <iframe
                      className=" w-[100%]"
                      src="https://player.vimeo.com/video/1001609897?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;loop=1"
                      title="App Cartify Video"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "98%",
                        height: "91%",
                        borderRadius: "35px 0",
                      }}
                    ></iframe>
                    <Script
                      src="https://player.vimeo.com/api/player.js"
                      strategy="afterInteractive"
                    />
                  </div>
                </div>

                <div className="md:hidden block ">
                  <div className=" relative h-[420px]">
                    <iframe
                      className=""
                      src="https://player.vimeo.com/video/1001641128?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;title=0&amp;byline=0&amp;portrait=0&amp;loop=1"
                      title="App Cartify Video"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "98%",
                        height: "91%",
                        borderRadius: "35px 0",
                      }}
                    ></iframe>
                    <Script
                      src="https://player.vimeo.com/api/player.js"
                      strategy="afterInteractive"
                    />
                  </div>
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
