import React from "react";
import Image from "next/image";
import DowonlodApp from "../../../public/Images/Dowonlodapp.svg";
import Copywrite from "./Copywrite";
import Link from "next/link";
import facebook from "../../../public/Images/facebookfooter.svg";
import instagram from "../../../public/Images/instagramfooter.svg";
import youtube from "../../../public/Images/youtubeicon.svg"

const Footer = () => {
  return (
    <>
      <section className="bg-[#0e1014] lg:pt-9 lg:pb-12 pb-12 pt-6 ">
        <div className="container">
          <h2 className="gk-h2   uppercase lg:pt-[40px] lg:pb-[10px] pb-5 pt-6 ">
            Get Ready to Create Your Success{" "}
            <span style={{ color: "#96BF48" }}> Roadmap</span> With Us
          </h2>
          <p className="text-white  lg:text-[22px] lg:font-medium  font-normal text-[18px] lg:w-[50%]">
            Our Team is Ready To Turn Your Goals Into Implementation. Ensuring
            Your Vision Turns Into Reality.
          </p>
          <div className=" flex gap-5 pt-5">
            <Link href=" https://www.facebook.com/profile.php?id=61562039261967" target="blank">
              <span className="oooo">
                <Image src={facebook} alt="Facebookicon" />
              </span>
            </Link>

            <Link href=" https://www.instagram.com/appcartify/" target="blank">
              <span>
                <Image src={instagram} alt="instagramicon" />
              </span>
            </Link>
            <Link href=" https://www.youtube.com/@Appcartify " target="blank">
              <span>
                <Image src={youtube} alt="instagramicon" />
              </span>
            </Link>
          </div>
          <div className="heee flex justify-end">
            <Link
              href="https://play.google.com/store/apps/details?id=com.AppCatify&pcampaignid=web_share"
              target="blank"
              passHref
            >
              <Image
                className="lg:w-auto lg:h-auto h-[100px] cursor-pointer"
                src={DowonlodApp}
                alt="appcartifylink"
              />
            </Link>
          </div>
        </div>
      </section>
      <Copywrite />
    </>
  );
};

export default Footer;
