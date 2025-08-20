"use client";
import React from "react";
import Image from "next/image";
import DowonlodApp from "../../../public/Images/Dowonlodapp.svg";
import Copywrite from "./Copywrite";
import Link from "next/link";
import facebook from "../../../public/Images/facebookfooter.svg";
import instagram from "../../../public/Images/instagramfooter.svg";
import youtube from "../../../public/Images/youtubeicon.svg";

const isAppleDevice = () => {
  if (typeof window !== "undefined") {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    return /iPad|iPhone|iPod|Macintosh/.test(userAgent);
  }
  return false;
};

const handleAppDownload = () => {
  if (isAppleDevice()) {
    window.open("https://apps.apple.com/in/app/appcartify/id6532601014", "_blank");
  } else {
    window.open("https://play.google.com/store/apps/details?id=com.AppCatify&pcampaignid=web_share", "_blank");
  }
};

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0e1014] lg:pt-9 lg:pb-12 pb-12 pt-14 ckjvnkdf md:pt-6 ">
        <div className="container lg:flex relative">
        <div className="lg:w-[85%]">
          <h2 className="gk-h2 uppercase lg:pt-[40px] lg:pb-[10px] pb-5 pt-6">
            Get Ready to Create Your Success{" "}
            <span style={{ color: "#96BF48" }}>Roadmap</span> With Us
          </h2>
          <p className="text-white lg:text-[22px] lg:font-medium font-normal text-[18px] lg:w-[50%]">
            Our Team is Ready To Turn Your Goals Into Implementation. Ensuring
            Your Vision Turns Into Reality.
          </p>
          <div className="pt-5">
            <h4 className="text-2xl text-white pb-2 font-semibold">Contact Us</h4>
            <p className="text-white lg:text-[22px] lg:font-medium font-normal text-[18px] flex items-center gap-3">
                <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="none" />
    <g
      fill="none"
      stroke="#96BF48"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
    >
      <path
        strokeDasharray="64"
        strokeDashoffset="64"
        d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="1.2s"
          values="64;0"
        />
        <animateTransform
          id="SVG3Jm2WHSS"
          fill="freeze"
          attributeName="transform"
          begin="1.2s;SVG3Jm2WHSS.begin+5.4s"
          dur="1s"
          type="rotate"
          values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"
        />
      </path>
      <path
        strokeDasharray="4"
        strokeDashoffset="4"
        d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="SVG3Jm2WHSS.begin+0s"
          dur="5.4s"
          keyTimes="0;0.111;0.259;0.37;1"
          values="4;0;0;4;4"
        />
      </path>
      <path
        strokeDasharray="6"
        strokeDashoffset="6"
        d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="SVG3Jm2WHSS.begin+0.4s"
          dur="5.4s"
          keyTimes="0;0.074;0.185;0.333;0.444;1"
          values="6;6;0;0;6;6"
        />
      </path>
    </g>
               </svg>
              <a href="tel:+917889101844">
                +91-7889101844
              </a>
            </p>
            <p className="text-white lg:text-[22px] lg:font-medium font-normal text-[18px] flex items-center gap-3">
               <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 48 48"
  >
    <rect width="48" height="48" fill="none" />
    <path
      fill="none"
      stroke="#96BF48"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13.39 12.145v26.39H7.06a2.56 2.56 0 0 1-2.56-2.54v-19.18m30.11-4.67v26.39h6.33a2.56 2.56 0 0 0 2.56-2.54v-19.18"
    />
    <path
      fill="none"
      stroke="#96BF48"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m24 31.445l19.5-14.45v-3.6a3.94 3.94 0 0 0-6.28-3.16L24 20.055l-13.22-9.82a3.94 3.94 0 0 0-6.28 3.16v3.6z"
    />
               </svg>
              <a href="mailto:hello@appcartify.com">hello@appcartify.com</a>
            </p>
          </div>
          <div className="flex gap-5 pt-7">
            <Link href="https://www.facebook.com/profile.php?id=61562039261967" target="_blank">
              <span>
                <Image src={facebook} alt="Facebookicon" />
              </span>
            </Link>
            <Link href="https://www.instagram.com/appcartify/" target="_blank">
              <span>
                <Image src={instagram} alt="Instagramicon" />
              </span>
            </Link>
            <Link href="https://www.youtube.com/@Appcartify" target="_blank">
              <span>
                <Image src={youtube} alt="YouTubeicon" />
              </span>
            </Link>
          </div>
      
        </div>
          <div className="heee flex  items-end pt-6 absolute bottom-[100px] right-0">
            <span onClick={handleAppDownload} className="cursor-pointer">
              <Image
                className="lg:w-auto lg:h-auto h-[100px]"
                src={DowonlodApp}
                alt="appcartifylink"
              />
            </span>
          </div>
        </div>
      </div>  
      <Copywrite />
    </div>
  );
};

export default Footer;
