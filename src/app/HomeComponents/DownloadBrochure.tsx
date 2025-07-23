"use client"
import Image from "next/image";
import React from "react";
import downloadgif from "../../../public/Images/featuresection/downloadanimation.gif"
const DownloadBrochure = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Images/brochure/Appcartify Dubai.pdf"; 
    link.download = "Appcartify.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      onClick={handleDownload}
      className="bg-white w-max p-4 rounded-[50%] text-white transition"
    >
     <Image 
     src={downloadgif}
     alt=""
     width={1000}
     height={500}
     className="w-[50px] lg:w-[80px] "
     />
    </div>
  );
};

export default DownloadBrochure