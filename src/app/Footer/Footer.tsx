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
    <>
      <section className="bg-[#0e1014] lg:pt-9 lg:pb-12 pb-12 pt-6">
        <div className="container lg:flex">
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
            <p className="text-white lg:text-[22px] lg:font-medium font-normal text-[18px]">
              <a href="tel:+917889101844">
                +91-7889101844
              </a>
            </p>
            <p className="text-white lg:text-[22px] lg:font-medium font-normal text-[18px]">
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
          <div className="heee flex  items-end pt-6">
            <span onClick={handleAppDownload} className="cursor-pointer">
              <Image
                className="lg:w-auto lg:h-auto h-[100px]"
                src={DowonlodApp}
                alt="appcartifylink"
              />
            </span>
          </div>
        </div>
      </section>
      <Copywrite />
    </>
  );
};

export default Footer;
