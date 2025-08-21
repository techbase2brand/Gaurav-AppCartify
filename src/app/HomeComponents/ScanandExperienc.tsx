import React from "react";
import Image from "next/image";
import scannall from "../../../public/Images/scanall.webp";
import scannall221 from "../../../public/Images/scanall221.png";
import "./ScanandExperienc.css";

const ScanandExperienc = () => {
  return (
    <>
      <section className="gk-bg-background lg:pb-[50px] lg:pt-[50px] pt-14 pb-14">
        <div className="container">
          <div className="main-center">
            <div className="gk-ctrl  lg:pb-[50px] rounded-2xl bg-[#FAFFF3] ">
              <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center uppercase  xl:w-[70%] mx-auto p-[20px]"  data-aos="fade-up"  data-aos-duration="800">
                <span
                  style={{
                    color: "#161616",
                    width: "100%",
                  }}
                >
                  Scan and Experience
                  <span style={{ color: "#96BF48" }}>
                    {" "}
                    appcartify Mobile App{" "}
                  </span>{" "}
                  Interface Firsthand on Your{" "}
                  <span style={{ color: "#96BF48" }}> Mobile Device </span>
                </span>
              </h2>
              <div className="lg:flex lg:justify-center lg:gap-5 md:w-[60%] m-auto">
                <div className="text-center ">
                  <Image
                    className="lg:w-[100%] mx-auto md:p-[30px] block"
                    src={scannall}
                    alt="ScanSrction"
                     data-aos="zoom-in"  data-aos-duration="1200"
                  />
                   <Image
                    className="w-[100%] mx-auto hidden  pt-6 pb-6 object-cover pl-7 pr-7"
                    src={scannall221}
                    alt="ScanSrction"
                     data-aos="zoom-in"  data-aos-duration="800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScanandExperienc;
