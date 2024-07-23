import React from "react";
import Image from "next/image";
import ScanSrction from "../../../public/Images/scanner.png";
import scannerplaystore from "../../../public/Images/Scannerplaystore (1).png";
import appstore from "../../../public/Images/Scannerappstore.png";
import scannall from "../../../public/Images/scanall.png";
import "./ScanandExperienc.css";

const ScanandExperienc = () => {
  return (
    <>
      <section className="gk-bg-background lg:pb-[50px] lg:pt-[50px] pt-14 pb-14">
        <div className="container">
          <div className="main-center">
            <div className="gk-ctrl  lg:pb-[50px] rounded-2xl bg-white ">
              <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center uppercase  xl:w-[70%] mx-auto">
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
              <div className="lg:flex lg:justify-center lg:gap-5 ">
                <div className="text-center ">
                  <Image
                    className="lg:w-[60%] mx-auto"
                    src={scannall}
                    alt="ScanSrction"
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
