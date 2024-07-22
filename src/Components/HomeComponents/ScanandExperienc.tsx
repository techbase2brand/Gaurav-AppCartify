import React from "react";
import Image from "next/image";
import ScanSrction from "../../../public/Images/scanner.png";
import scannerplaystore from "../../../public/Images/Scannerplaystore (1).png"
import appstore from "../../../public/Images/Scannerappstore.png"

const ScanandExperienc = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="main-center bg-red-300">
            <div className="gk-ctrl">
              <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center uppercase  xl:w-[70%] mx-auto">
                <span
                  style={{
                    color: "#161616",
                  }}
                >
                  Scan and Experience&nbsp;
                  <span style={{ color: "#96BF48" }}>
                    appcartify Mobile App
                  </span>
                  &nbsp;Interface Firsthand on Your&nbsp;
                  <span style={{ color: "#96BF48" }}> Mobile Device </span>
                </span>
              </h2>
                    <div className="grid grid-cols-2 gap-4 align-middle">
                        <div className="text-center">
                            <Image src={scannerplaystore} alt="ScanSrction" />
                        </div>
                        <div className="text-center">
                       <Image className="" src={appstore}  alt=""/>
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
