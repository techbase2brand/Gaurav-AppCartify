import React, { useContext } from "react";
import Image from "next/image";
import store from "../../../public/Images/Shopify store.png";
import "./shopifyStore.css";
import laptop from "../../../public/Images/laptopimage.png";
import { AppStateContext } from "../Context/AppStateContext";

const ShopifyStore = () => {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
    // setOpen((prevOpen:any) => !prevOpen); 
  };

  return (
    <>
      <section className="Mobile-bann-set ">
        <div className="container">
          <h2 className="gk-h2  text-center  lg:hidden block pt-6 pb-12">
            Turn Your <span style={{ color: "#96BF48" }}>Shopify store</span> into
            a Sales Friendly App
          </h2>
        </div>
        <div className="row lg:flex  lg:flex-row xl:gap-16 gap-[1rem] lg:pt-20 lg:pb-20  items-center md:flex md:flex-col lg:gap-1">
          <div className=" ">
            <Image className=" lg:block hidden" src={store} alt="" />
            <Image className="laptop   lg:hidden block" src={laptop} alt="" />
          </div>
          <div className=" custom_text xl:pr-[30px] 2xl:pr-[260px] lg:pr-[2rem] p-[1rem]">
            <h2 className="gk-h2  lg:block hidden">
              Turn Your <span style={{ color: "#96BF48" }}>Shopify store</span>{" "}
              into a Sales Friendly App
            </h2>
            <p className="manrope-gk-p lg:mt-3 lg:text-left md:text-center">
              Transform your Shopify store into a sales-friendly app with our
              expertise. Enhance user experience, boost sales, and enhance
              functionalities to maximize engagement and customer satisfaction
              seamlessly across all platforms.
            </p>
            <div className="widd md:flex md:justify-center lg:justify-start flex justify-center">
              <button className="gk-button " onClick={() => handleClick()}>Book Your Meeting Today</button>
            </div>
          </div>

        </div>

      </section>
    </>
  );
};

export default ShopifyStore;
