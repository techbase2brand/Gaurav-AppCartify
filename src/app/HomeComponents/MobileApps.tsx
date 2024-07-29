import React, { useContext } from "react";
import Image from "next/image";
import MobileApp from "../../../public/Images/Mobile Apps.png";
import pointer from "../../../public/Images/point.svg";
import "./MobileApp.css"
import { AppStateContext } from "../Context/AppStateContext";
import image221 from "../../../public/Images/mob221.png"

const MobileApps = () => {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
    // setOpen((prevOpen:any) => !prevOpen); 
  };

  return (
    <>
      <section className=" Mobile-bann-set lg:pt-20 lg:pb-20 pt-5 pb-5">
        <div className="container">
          <h2 className="gk-h2  text-center  lg:hidden block pt-6 uppercase ">
            Integration with <span style={{color:'#96BF48'}}>Mobile Apps</span>  Enhances Sales Potential
          </h2>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:grid-rows-1 lg:gap-[6rem] gap-[3rem] p-4  items-center">
            <div>
              <div className="image-bar">
                <Image className="" src={image221} alt="Integration with Mobile Apps" />
              </div>
            </div>
            <div>
              <div className="mobile-app-txt-gk">
                <h2 className="gk-h2  lg:block hidden  pb-5 uppercase">
                  Integration with <span style={{color:'#96BF48'}}>Mobile Apps</span> Enhances Sales Potential
                </h2>
                <div className="pointer-main flex flex-col xl:gap-7 lg:gap-[0.75rem] gap-[10px]">
                  <div className="point flex items-baseline relative lg:gap-7  md:gap-[0.75rem] gap-[10px] ">
                    <Image className="relative  top-3" src={pointer} alt="pointer" />

                    <p className="manrope-gk-p-list">
                      Shopify mobile app users experience up to 30% higher
                      conversion rates compared to desktop users.
                    </p>
                  </div>
                  <div className="point flex items-baseline relative lg:gap-7  md:gap-[0.75rem]  gap-[10px]">
                    <Image className="relative  top-3" src={pointer} alt="pointer" />

                    <p className="manrope-gk-p-list">
                    Mobile app users engage with promotions and offers 5 times more frequently than web users.

                    </p>
                  </div>
                  <div className="point flex items-baseline relative lg:gap-7  md:gap-[0.75rem]  gap-[10px]">
                    <Image className="relative  top-3" src={pointer} alt="pointer" />

                    <p className="manrope-gk-p-list">
                    Orders placed through Shopify mobile apps are on average 20% higher in value than web orders.

                    </p>
                  </div>
                </div>
              </div>
              <button className="gk-button lg:block hidden mt-9" onClick={() => handleClick()}> Book Your Meeting Today</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileApps;
