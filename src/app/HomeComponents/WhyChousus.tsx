import React from "react";
import Image from "next/image";
import ShopifyMobile from "../../../public/Images/logos/Shopify Mobile App Integrations.svg";
import DriveEngagement from "../../../public/Images/logos/Drive Engagement.svg";
import TailoredSolutions from "../../../public/Images/logos/Tailored Solutions.svg";

const WhyChousus = () => {
  return (
    <>
      <section className="Deceloper-section lg:pt-10 lg:pb-10  pt-10 pb-10">
        <div className="gk-section-context">
          <div className="container">
            <div className="brd border-2 rounded-[10px]">
            <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center pb-5 pt-5 ">
              <span style={{ color: "#96BF48", textTransform: "uppercase" }}>
                why choose us?
              </span>
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-1 lg:gap-[6rem] gap-[3rem] p-4 pb-[30px]  lg:pb-[50px]">
              <div>
                <div className="col-itom text">
                  <div className="image-c flex justify-center">
                    <Image
                      className="lg:h-auto h-[87px]"
                      src={TailoredSolutions}
                      alt="Tailored Solutions"
                    />
                  </div>
                  <h3 className="text-white text-center  mx-auto  pt-4">
                    Tailored Solutions
                  </h3>
                  <p className="manrope-gk-p-list text-center  pt-4">
                    Tailored solutions for your business needs, ensuring a
                    seamless mobile shopping experience.
                  </p>
                </div>
              </div>

              <div>
                <div className="col-itom">
                  <div className="image-c flex justify-center">
                    <Image
                      className="lg:h-auto h-[87px]"
                      src={DriveEngagement}
                      alt="Drive Engagement"
                    />
                  </div>
                  <h3 className="text-white text-center  mx-auto  pt-4">
                    Drive  Engagement
                  </h3>
                  <p className="manrope-gk-p-list text-center  pt-4">
                    Understanding your customers to craft intuitive mobile app
                    solutions that drive engagement and loyalty.
                  </p>
                </div>
              </div>
              <div>
                <div className="col-itom">
                  <div className="image-c flex justify-center">
                    <Image
                      className="lg:h-auto h-[87px]"
                      src={ShopifyMobile}
                      alt="Shopify Mobile App Integrations"
                    />
                  </div>
                  <h3 className="text-white text-center   mx-auto  pt-4">
                    Shopify Mobile App Integrations
                  </h3>
                  <p className="manrope-gk-p-list text-center  pt-4">
                    Proven expertise in Shopify mobile app integrations,
                    boosting sales and enhancing user satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChousus;
