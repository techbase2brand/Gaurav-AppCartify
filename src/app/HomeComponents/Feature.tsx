import React from "react";
import Image from "next/image";
import Industries from "../../../public/Images/Industries.svg";
import carticon from "../../../public/Images/featuresection/carticon.svg"
import shopiftcheckout from "../../../public/Images/featuresection/checkoutpuzzle.svg"
import thirdparty from "../../../public/Images/featuresection/3thirdpartycheckout.svg"
import pushnotifaction from "../../../public/Images/featuresection/pustnotifaction.svg"
import driverapp from "../../../public/Images/featuresection/driverapp.svg"
import Analytics from "../../../public/Images/featuresection/Analytics.svg"
// 
import realtime from "../../../public/Images/featuresection/Analytics.svg"

const Feature = () => {
  return (
    <>
      <div>
        <section className="bg-[#000] lg:pt-11 lg:pb-11 pt-5 pb-5 feature-section">
          <div className="container">
            <div className=" ">
              <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center uppercase pt-9">
                amazing aPPCARTIFY
                <span style={{color: "#96BF48",}}> features </span>
               </h2>

              <div className=" flex md:gap-5 items-center lg:flex-row flex-col gap-6 justify-center feature-span  lg:pt-0 lg:pb-0 pt-5 pb-5 ">
                <div className=" flex md:flex-col lg:gap-5  md:gap-5  xl:gap-12 flex-col gap-8 lg:w-[33%] w-[100%]">
                  <div className="flex md:gap-4 gap-3  items-center lg:flex-row justify-end flex-row-reverse ">
                  <p className="manrope-gk-p-list lg:text-right text-left   ">
                      Ready to 
                      <span
                        style={{
                          color: "#96BF48",
                          fontWeight:"600",
                          fontSize:"24px"
                        }}
                      > Go Live Themes </span>
                      
                       available for 5 different Industries
                    </p>
                    <Image
                      className="xl:w-auto lg:w-[28%] md:w-[15%] w-[18%] "
                      src={Industries}
                      alt=""
                    />
                  </div>
                  <div className="flex md:gap-4  gap-3  items-center lg:flex-row justify-end flex-row-reverse ">
                    <p className="manrope-gk-p-list lg:text-right text-left   ">
                      Built in 
                      <span
                        style={{
                          color: "#96BF48",
                          fontWeight:"600",
                          fontSize:"24px"
                        }}
                      > Upsell Feature </span>
                       for Cart page connected via
                      metafields
                    </p>
                    <Image
                      className="xl:w-auto lg:w-[28%] md:w-[15%] w-[18%] "
                      src={carticon}
                      alt=""
                    />
                  </div> 
                  <div className="flex md:gap-4  gap-3  items-center lg:flex-row justify-end flex-row-reverse   ">
                  <p className="manrope-gk-p-list lg:text-right text-left   ">
                      Direct <span
                        style={{
                          color: "#96BF48",
                          fontWeight:"600",
                          fontSize:"24px"
                        }}
                      > Shopify checkout </span> integration
                    </p>
                    <Image
                      className="xl:w-auto lg:w-[28%] md:w-[15%] w-[18%] "
                      src={shopiftcheckout}
                      alt=""
                    />
                  </div>
                  <div className="flex md:gap-4  gap-3  items-center lg:flex-row justify-end flex-row-reverse ">
                  <p className="manrope-gk-p-list lg:text-right text-left   ">
                    <span
                        style={{
                          color: "#96BF48",
                          fontWeight:"600",
                          fontSize:"24px"
                        }}
                      >  3rd party checkout </span>
                     integration also available (Terms and
                      Conditions apply)
                    </p>
                    <Image
                      className="xl:w-auto lg:w-[28%] md:w-[15%] w-[18%] "
                      src={thirdparty}
                      alt=""
                    />
                  </div>
                </div>

                <div className="video-set lg:w-[35%] xl:w-[30%] md:w-[60%] m-0">
                  <video
                    src="/Images/featuresection/appmobile.mp4"
                    autoPlay
                    loop
                    muted
                    className="lg:w-[100%]  object-cover rounded-[25px_0px_25px]"
                  />
                </div>

                <div className=" flex md:flex-col lg:gap-5 md:gap-5 xl:gap-12 flex-col gap-8  lg:w-[33%] w-[100%]">
                  <div className="flex md:gap-4  gap-3  items-center lg:flex-row flex-row-reverse  ">
                    <Image
                      className="xl:w-auto lg:w-[28%] md:w-[15%] w-[18%] "
                      src={pushnotifaction}
                      alt=""
                    />
                    <p className="manrope-gk-p-list lg:text-left text-right   ">
                    <span
                        style={{
                          color: "#96BF48",
                          fontWeight:"600",
                          fontSize:"24px"
                        }}
                      >  Push notifications </span>
                     available
                    </p>
                  </div>
                  <div className="flex md:gap-4  gap-3  items-center lg:flex-row  flex-row-reverse ">
                    <Image
                      className="xl:w-auto lg:w-[28%] md:w-[15%] w-[18%] "
                      src={driverapp}
                      alt=""
                    />
                   <p className="manrope-gk-p-list lg:text-left text-right   ">
                    <span
                        style={{
                          color: "#96BF48",
                          fontWeight:"600",
                          fontSize:"24px"
                        }}
                      > Driver delivery app </span>
                     integration available ( a separate app
                      will be provided for driver delivery and assigning )
                    </p>
                  </div>
                  <div className="flex md:gap-4  gap-3  items-center lg:flex-row flex-row-reverse  ">
                    <Image
                      className="xl:w-auto lg:w-[28%] md:w-[15%] w-[18%] "
                      src={Analytics}
                      alt=""
                    />
                  <p className="manrope-gk-p-list lg:text-left text-right   ">
                    <span
                        style={{
                          color: "#96BF48",
                          fontWeight:"600",
                          fontSize:"24px"
                        }}
                      > Custom analytics </span>
                     tracking (How much time is being spent by
                      customers on which page)
                    </p>
                  </div>
                  <div className="flex md:gap-4  gap-3  items-center lg:flex-row flex-row-reverse  ">
                    <Image
                      className="xl:w-auto lg:w-[28%] md:w-[15%] w-[18%] "
                      src={realtime}
                      alt=""
                    />
                  <p className="manrope-gk-p-list lg:text-left text-right   ">
                    <span
                        style={{
                          color: "#96BF48",
                          fontWeight:"600",
                          fontSize:"24px"
                        }}
                      > Real-time inventory  </span>
                     sync ensures accurate stock levels,
                      reflecting updates instantly across your app
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Feature;