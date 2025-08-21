import React, { useContext } from "react";
import Image from "next/image";
import Ecommerce from "../../../public/Images/tabsimages/Ecommerce.webp";
import { AppStateContext } from "../Context/AppStateContext";
import ourmission from "../../../public/Images/ourmission.jpg"
import howareyou from "../../../public/Images/howareyou.jpg"
export default function Aboutus() {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
  };
  return (
    <div>
      <div className="container py-12">
        <h2 className="gk-h2 text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6"  data-aos="fade-up"  data-aos-duration="1100">
          Know About Us – How We Turn Shopify Stores into Powerful Mobile Apps That Drive 3X Sales
        </h2>
        <div>
          <div className="text-start lg:text-center">
            <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4" data-aos="fade-up"  data-aos-duration="1200">
              Empowering Shopify Stores with the Power of Mobile Apps
            </h4>
            <p className="manrope-gk-p-list pb-4" data-aos="fade-up"  data-aos-duration="1300">
              At AppCartify, we believe that your online store deserves more
              than just a web presence   it deserves a seamless mobile
              experience that drives engagement, conversions, and growth. Our
              mission is simple yet powerful: to help Shopify merchants 3X their
              sales by transforming their stores into high-performing mobile
              apps   in just 7 days.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 py-0 lg:py-12">
            <div className="m-auto" data-aos="zoom-in"  data-aos-duration="1600">
              <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
                Our Mission
              </h4>
              <p className="manrope-gk-p-list pb-4">
                Our mission is to empower businesses of all sizes to thrive in
                the mobile-first world. We help Shopify store owners boost
                customer engagement, streamline operations, and unlock new
                revenue opportunities through beautifully designed,
                conversion-focused mobile applications.
              </p>
            </div>
            <div>
              <Image src={ourmission} alt="" width={1000} height={500} className="max-h-[400px] w-[100%] md:w-[80%] m-auto rounded-lg object-cover"  data-aos="zoom-in"  data-aos-duration="1600"/>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 py-0 lg:py-12">
            <div>
              <Image src={howareyou} alt="" width={1000} height={500} className="max-h-[400px] w-[100%] md:w-[80%] m-auto rounded-lg object-cover" data-aos="zoom-in"  data-aos-duration="1600"/>
            </div>
            <div className="text-start md:text-end m-auto"  data-aos="zoom-in"  data-aos-duration="1600">
              <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
                Who We Are?
              </h4>
              <p className="manrope-gk-p-list pb-4">
                AppCartify is a team of passionate Shopify experts, designers,
                and developers who specialize in building mobile apps that sell.
                With a proven track record of 100+ successful deployments across
                12+ countries, we understand the unique challenges of eCommerce
                and provide custom solutions that deliver results.
              </p>
            </div>
          </div>
          <p className="manrope-gk-p-list pb-4 text-s text-center pt-6"  data-aos="fade-up"  data-aos-duration="1100">
            Our mobile apps are more than just functional they are intuitive,
            responsive, fast, and tailored to your brand. From push
            notifications and cart upsells to real time inventory sync and
            integrated analytics, we offer everything you need to drive mobile
            sales like never before.
          </p>
        </div>
        <div className="pt-12 ">
          <div className="pt-4 lg:pt-0">
            <h2 className="gk-h2 text-center uppercase py-2" data-aos="fade-up">
              Why Choose AppCartify?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              <div className="group p-4 border-[1px] border-[#96BF48] m-2 rounded-2xl hover:bg-[#96BF48] duration-500 cursor-pointer"
               data-aos="zoom-in">
                <div className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3 flex items-center gap-2 group-hover:text-black font-semibold">
                  <span className="p-4 bg-[#96BF48] group-hover:bg-black group-hover:text-white rounded-[50%] w-[50px] h-[50px] flex justify-center items-center text-black">
                    1
                  </span>{" "}
                  Ready-to-Go Industry Themes
                </div>
                <p className="manrope-gk-p-list pb-2 ">
                  We offer pre-built themes for five popular industries, helping
                  you launch quickly without sacrificing design.
                </p>
              </div>
              <div className="group p-4 border-[1px] border-[#96BF48] m-2 rounded-2xl hover:bg-[#96BF48] duration-500 cursor-pointer"
               data-aos="zoom-in" data-aos-duration="1100">
                <div className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3 flex items-center gap-2 group-hover:text-black font-semibold">
                  <span className="p-4 bg-[#96BF48] group-hover:bg-black group-hover:text-white rounded-[50%] w-[50px] h-[50px] flex justify-center items-center text-black">
                    2
                  </span>
                  Powerful Built-In Features
                </div>
                <p className="manrope-gk-p-list pb-2 ">
                  From direct checkout integrations to upsell modules and push
                  notifications, we equip your app with tools to maximize
                  conversions.
                </p>
              </div>
              <div className="group p-4 border-[1px] border-[#96BF48] m-2 rounded-2xl hover:bg-[#96BF48] duration-500 cursor-pointer"
               data-aos="zoom-in" data-aos-duration="1300">
                <div className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3 flex items-center gap-2 group-hover:text-black font-semibold">
                  <span className="p-4 bg-[#96BF48] group-hover:bg-black group-hover:text-white rounded-[50%] w-[50px] h-[50px] flex justify-center items-center text-black">
                    3
                  </span>
                  Driver & Delivery App Integration
                </div>
                <p className="manrope-gk-p-list pb-2 ">
                  Manage logistics and deliveries with ease using our dedicated
                  driver app and assignment system.
                </p>
              </div>
              <div className="group p-4 border-[1px] border-[#96BF48] m-2 rounded-2xl hover:bg-[#96BF48] duration-500 cursor-pointer"
               data-aos="zoom-in" data-aos-duration="1500">
                <div className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3 flex items-center gap-2 group-hover:text-black font-semibold">
                  <span className="p-4 bg-[#96BF48] group-hover:bg-black group-hover:text-white rounded-[50%] w-[50px] h-[50px] flex justify-center items-center text-black">
                    4
                  </span>
                  Analytics That Matter
                </div>
                <p className="manrope-gk-p-list pb-2 ">
                  Track user behavior, time spent on pages, and popular sections
                  with our built-in custom analytics tool.
                </p>
              </div>
              <div className="group p-4 border-[1px] border-[#96BF48] m-2 rounded-2xl hover:bg-[#96BF48] duration-500 cursor-pointer"
               data-aos="zoom-in" data-aos-duration="1700">
                <div className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3 flex items-center gap-2 group-hover:text-black font-semibold">
                  <span className="p-4 bg-[#96BF48] group-hover:bg-black group-hover:text-white rounded-[50%] w-[50px] h-[50px] flex justify-center items-center text-black">
                    5
                  </span>
                  Real-Time Inventory Sync
                </div>
                <p className="manrope-gk-p-list pb-2 ">
                  Ensure your stock levels are always accurate   no overselling,
                  no customer complaints.
                </p>
              </div>
              <div className="group p-4 border-[1px] border-[#96BF48] m-2 rounded-2xl hover:bg-[#96BF48] duration-500 cursor-pointer"
               data-aos="zoom-in" data-aos-duration="1900">
                <div className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3 flex items-center gap-2 group-hover:text-black font-semibold">
                  <span className="p-4 bg-[#96BF48] group-hover:bg-black group-hover:text-white rounded-[50%] w-[50px] h-[50px] flex justify-center items-center text-black">
                    6
                  </span>
                  Higher Conversion Rates
                </div>
                <p className="manrope-gk-p-list pb-2 ">
                  Shopify mobile apps deliver up to 30% higher conversions, 20%
                  bigger orders, and 5x more engagement compared to desktop
                  websites.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 pt-12">
          <div>
            <h2 className="gk-h2 text-center lg:text-start uppercase" data-aos="fade-up" data-aos-duration="1500">
              Our Values
            </h2>
            <div>
              <div className="mt-4" data-aos="fade-up" data-aos-duration="1500">
                <p className="manrope-gk-p-list lg:text-left">
                  <span
                    style={{
                      color: "#96BF48",
                      fontWeight: "600",
                      fontSize: "24px"
                    }}
                  >
                    {" "}Speed & Quality:{" "}
                  </span>
                  We deliver full-featured Shopify apps within a week  without
                  compromising quality.
                </p>
              </div>
              <div className="mt-4" data-aos="fade-up" data-aos-duration="1500">
                <p className="manrope-gk-p-list lg:text-left">
                  <span
                    style={{
                      color: "#96BF48",
                      fontWeight: "600",
                      fontSize: "24px"
                    }}
                  >
                    {" "}Client-Centricity:{" "}
                  </span>
                  With a 98% client satisfaction rate, your goals and growth are
                  always our priority.
                </p>
              </div>
              <div className="mt-4" data-aos="fade-up" data-aos-duration="1500">
                <p className="manrope-gk-p-list lg:text-left">
                  <span
                    style={{
                      color: "#96BF48",
                      fontWeight: "600",
                      fontSize: "24px"
                    }}
                  >
                    {" "}Innovation:{" "}
                  </span>
                  We constantly upgrade our tech stack to meet the evolving
                  needs of online commerce.
                </p>
              </div>
              <div className="mt-4" data-aos="fade-up" data-aos-duration="1500">
                <p className="manrope-gk-p-list lg:text-left">
                  <span
                    style={{
                      color: "#96BF48",
                      fontWeight: "600",
                      fontSize: "24px"
                    }}
                  >
                    {" "}Transparency:{" "}
                  </span>
                  No hidden charges, honest timelines, and continuous
                  communication   from idea to app store.
                </p>
              </div>
            </div>
          </div>
          <div className="image-bar flex items-center justify-center pt-4 lg:pt-0">
            <Image
              className="w-full lg:w-[90%] rounded-2xl"
              src={Ecommerce}
              alt="about us default banner"
              data-aos="zoom-in" data-aos-duration="1600"
            />
          </div>
        </div>
        <div className="pt-12 flex justify-center">
          <button className="gk-button " onClick={() => handleClick()} data-aos="fade-up" data-aos-duration="1500">
            <span className="omega">Get In Touch</span>
          </button>
        </div>
      </div>
    </div>
  );
}
