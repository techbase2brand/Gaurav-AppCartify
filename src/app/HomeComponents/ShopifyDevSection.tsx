// import React from 'react'

// const ShopifyDevSection = () => {
//   return (
//     <div>ShopifyDevSection</div>
//   )
// }

// export default ShopifyDevSection
import './ShopifyDevSection.css'
import React from "react";
import Image from "next/image";
import reward from "../../../public/Images/reward.svg";
import meating from "../../../public/Images/meating.svg";
import team from "../../../public/Images/team.svg";
function Developer() {
  // Corrected function declaration (lowercase 'f')
  return (
    <>
      <section className="Deceloper-section lg:pt-10 lg:pb-10  pt-10 pb-10">
        <div className="gk-section-context">
          <div className="container">
            <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center  uppercase">
              Our Proven Excellence in
              <span style={{ color: "#96BF48" }}> Shopify App Development</span>
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-1 lg:gap-[6rem] gap-[3rem] p-4 ">
              <div>
                <div className="col-itom text">
                  <div className="image-c flex justify-center">
                    <Image className="lg:h-auto h-[87px]" src={reward} alt="reward" />
                  </div>
                  <h3 className="text-[#96BF48] text-center lg w-[74%] mx-auto  pt-4 font-medium">
                    100+ Successful Shopify App Deployments
                  </h3>
                  <p className="manrope-gk-p-list text-center  pt-4">
                    Developed apps for different industries, catering to unique
                    needs.
                  </p>
                </div>
              </div>

              <div>
                <div className="col-itom">
                  <div className="image-c flex justify-center">
                    <Image className="lg:h-auto h-[87px]" src={meating} alt="meating" />
                  </div>
                  <h3 className="text-[#96BF48] text-center  w-[67%] mx-auto  pt-4 font-medium " >
                    Trusted across 90+ countries
                  </h3>
                  <p className="manrope-gk-p-list text-center  pt-4">
                    We have global trust and reliability in our mobile app
                    development Service
                  </p>
                </div>
              </div>
              <div>
                <div className="col-itom">
                  <div className="image-c flex justify-center">
                    <Image className="lg:h-auto h-[87px]" src={team} alt="team" />
                  </div>
                  <h3 className="text-[#96BF48] text-center   w-[54%] mx-auto  pt-4 font-medium" >
                    98% Client Satisfaction
                  </h3>
                  <p className="manrope-gk-p-list text-center  pt-4">
                    Our client satisfaction rate showcases our dedication to
                    exceptional service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Developer;
