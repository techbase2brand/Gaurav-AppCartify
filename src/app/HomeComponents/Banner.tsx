import React, { useContext } from "react";
import "./Banner.css";
import { AppStateContext } from "../Context/AppStateContext";

const Banner = () => {
  const { setState } = useContext(AppStateContext);

  const handleClick = () => {
    setState(true);
  };

  const videoConfig = {
    desktop: "1001609897",
    mobile: "1001641128",
  };

  const VideoPlayer = ({ videoId }: { videoId: string }) => (
    <iframe
      className="video-frame"
      src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&controls=0&title=0&byline=0&portrait=0&loop=1`}
      title="App Cartify Video"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      loading="lazy" // Lazy load the iframe
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "60px 0",
      }}
    ></iframe>
  );

  return (
    <>
      <section
        className="banner-section flex items-center xl:h-[800px] md:pt-[100px] md:pb-[50px] pt-[5rem] pb-14 bg-[url('/Images/banner.webp')] bg-no-repeat bg-cover bg-center"
      >
        <div className="container lg:max-w-[1280px] xl:max-w-[1440px] px-2">
          <div className="flex flex-col xl:flex-row lg:flex-row justify-between items-center gap-7">
            <div className="text-content xl:w-[30%] lg:w-[44%] w-[100%]">
              <h1 className="banner-title uppercase md:text-left text-center">
                Sell 3X Times More With{" "}
                <span style={{ color: "#96BF48" }}>Shopify Mobile App</span>
              </h1>
              <p className="text-white text-lg lg:text-xl">
                Convert your Shopify store into an app in just seven days and
                boost your sales
              </p>
              <div className="button-container flex justify-center lg:justify-start">
                <button
                  className="gk-button lg:block hidden"
                  onClick={handleClick}
                >
                  <span className="button-text">Book Your Meeting Today</span>
                </button>
              </div>
            </div>
            <div className="video-container xl:w-[65%] w-[100%] md:pt-[1rem] pt-[6%] relative">
              {/* Video Player for Desktop */}
              <div className="video-wrapper md:block hidden">
                <div className="relative xl:h-[550px] md:h-[417px]">
                  <VideoPlayer videoId={videoConfig.desktop} />
                </div>
              </div>
              {/* Video Player for Mobile */}
              <div className="video-wrapper md:hidden block">
                <div className="relative h-[300px] w-[100%]">
                  <VideoPlayer videoId={videoConfig.mobile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
