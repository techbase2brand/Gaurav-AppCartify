import React, { useContext } from "react";
import { AppStateContext } from "../Context/AppStateContext";

const ShopifyApp = () => {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
    // setOpen((prevOpen:any) => !prevOpen);
  };

  return (
    <section className="bg-[#0E1014] lg:pt-6 lg:pb-12 pb-8  pt-8">
      <div className="Shopifyapp">
        <div className="container">
          <div className="manue-app">
            <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center uppercase" data-aos="fade-up"  data-aos-duration="800">
              How Does <span style={{ color: "#96BF48" }}>
                Shopify App
              </span>{" "}
              Development Work?
            </h2>

            <div className="text-itom">
              <div data-aos="fade-up"  data-aos-duration="1200">
                <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
                  1 .Understanding Client Needs
                </h4>
                <p className="manrope-gk-p-list pb-4">
                  In the researching phase, we engage in thorough consultations,
                  analyze market dynamics, and define scope to align with your
                  business goals.
                </p>
              </div>
              <div data-aos="fade-up"  data-aos-duration="1200">
                <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
                  2. Implementing and Building they App
                </h4>
                <p className="manrope-gk-p-list pb-4">
                  During implementation, we create prototypes, develop robust
                  functionalities, and customize designs to ensure a seamless
                  Shopify app tailored to your brand.
                </p>
              </div>
              <div data-aos="fade-up"  data-aos-duration="1200">
                <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
                  3. Testing to Ensure Quality and Functionality
                </h4>
                <p className="manrope-gk-p-list pb-4">
                  Testing involves meticulous quality assurance, user acceptance
                  tests, and performance evaluations to guarantee your Shopify
                  app performs flawlessly across all scenarios.
                </p>
              </div>
              <div data-aos="fade-up"  data-aos-duration="1200">
                <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
                  4. Launching and Deploying
                </h4>
                <p className="manrope-gk-p-list pb-4">
                  Upon completion, we deploy your Shopify app, provide
                  comprehensive documentation, training, and ongoing support to
                  ensure its success and longevity.
                </p>
              </div>
            </div>
            <button className="gk-button " onClick={() => handleClick()} data-aos="fade-up"  data-aos-duration="1200">
              {" "}<span className="omega">Get In Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyApp;
