"use client";
import Image from "next/image";
import React from "react";
import downloadgif from "../../../public/Images/featuresection/downloadanimation.gif";
const DownloadBrochure = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Images/brochure/Appcartify.pdf";
    link.download = "Appcartify.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative" onClick={handleDownload}>
      <div className="absolute w-full h-full flex justify-center items-center rotate-[336deg] brochure">
        <svg viewBox="0 0 100 100" width="125" height="125" fill="#000">
            <defs>
               <path id="circle"
                   d="
                   M 50, 50
                   m -37, 0
                   a 37,37 0 1,1 74,0
                   a 37,37 0 1,1 -74,0"/>
             </defs>
          <text font-size="12">
            <textPath xlinkHref="#circle">
              Download Brochure - Download Brochure -
            </textPath>
          </text>
        </svg>
      </div>
      <div className="bg-white w-max p-6 rounded-[50%] text-white transition">
        <Image
          src={downloadgif}
          alt=""
          width={1000}
          height={500}
          className="w-[30px] lg:w-[80px] "
        />
      </div>
    </div>
  );
};

export default DownloadBrochure;
