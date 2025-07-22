import React, { useContext } from "react";
import image221 from "../../../public/Images/mob221.webp";
import Image from "next/image";
import Ecommerce from "../../../public/Images/tabsimages/Ecommerce.webp";
import { AppStateContext } from "../Context/AppStateContext";
export default function Aboutus() {
  const { setState } = useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
  };
  return (
    <div>
      <div className="container py-12">
        <h2 className="gk-h2 text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6">
          About Us
        </h2>
        <div>
          <div>
            <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
              Empowering Shopify Stores with the Power of Mobile Apps
            </h4>
            <p className="manrope-gk-p-list pb-4">
              At AppCartify, we believe that your online store deserves more
              than just a web presence — it deserves a seamless mobile
              experience that drives engagement, conversions, and growth. Our
              mission is simple yet powerful: to help Shopify merchants 3X their
              sales by transforming their stores into high-performing mobile
              apps — in just 7 days.
            </p>
          </div>
          <div className="">
            <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
              Our Mission
            </h4>
            <p className="manrope-gk-p-list pb-4">
              Our mission is to empower businesses of all sizes to thrive in the
              mobile-first world. We help Shopify store owners boost customer
              engagement, streamline operations, and unlock new revenue
              opportunities through beautifully designed, conversion-focused
              mobile applications.
            </p>
          </div>
          <div>
            <h4 className="gk-h4 text-[#96BF48] lg:pt-5 lg:pb-[5px] pt-4">
              Who We Are?
            </h4>
            <p className="manrope-gk-p-list pb-4">
              AppCartify is a team of passionate Shopify experts, designers, and
              developers who specialize in building mobile apps that sell. With
              a proven track record of 100+ successful deployments across 12+
              countries, we understand the unique challenges of eCommerce and
              provide custom solutions that deliver results.
            </p>
            <p className="manrope-gk-p-list pb-4">
              Our mobile apps are more than just functional — they are
              intuitive, responsive, fast, and tailored to your brand. From push
              notifications and cart upsells to real-time inventory sync and
              integrated analytics, we offer everything you need to drive mobile
              sales like never before.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 pt-12">
          <div className="image-bar flex items-center justify-center">
            <Image
              className="w-full lg:w-[90%]"
              src={image221}
              alt="about us default banner"
            />
          </div>
          <div className="pt-4 lg:pt-0">
            <h2 className="gk-h2 text-center lg:text-start uppercase">
              Why Choose AppCartify?
            </h2>
            <div>
              <div>
                <h4 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                  1. Ready-to-Go Industry Themes
                </h4>
                <p className="manrope-gk-p-list pb-2">
                  We offer pre-built themes for five popular industries, helping
                  you launch quickly without sacrificing design.
                </p>
              </div>
              <div>
                <h4 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                  2. Powerful Built-In Features
                </h4>
                <p className="manrope-gk-p-list pb-2">
                  From direct checkout integrations to upsell modules and push
                  notifications, we equip your app with tools to maximize
                  conversions.
                </p>
              </div>
              <div>
                <h4 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                  3. Driver & Delivery App Integration
                </h4>
                <p className="manrope-gk-p-list pb-2">
                  Manage logistics and deliveries with ease using our dedicated
                  driver app and assignment system.
                </p>
              </div>
              <div>
                <h4 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                  4. Analytics That Matter
                </h4>
                <p className="manrope-gk-p-list pb-2">
                  Track user behavior, time spent on pages, and popular sections
                  with our built-in custom analytics tool.
                </p>
              </div>
              <div>
                <h4 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                  5. Real-Time Inventory Sync
                </h4>
                <p className="manrope-gk-p-list pb-2">
                  Ensure your stock levels are always accurate — no overselling,
                  no customer complaints.
                </p>
              </div>
              <div>
                <h4 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                  6. Higher Conversion Rates
                </h4>
                <p className="manrope-gk-p-list pb-2">
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
            <h2 className="gk-h2 text-center lg:text-start uppercase">
              Our Values
            </h2>
            <div>
              <div className="mt-4">
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
                  We deliver full-featured Shopify apps within a week — without
                  compromising quality.
                </p>
              </div>
              <div className="mt-4">
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
              <div className="mt-4">
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
              <div className="mt-4">
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
                  communication — from idea to app store.
                </p>
              </div>
            </div>
          </div>
          <div className="image-bar flex items-center justify-center pt-4 lg:pt-0">
            <Image
              className="w-full lg:w-[90%] rounded-2xl"
              src={Ecommerce}
              alt="about us default banner"
            />
          </div>
        </div>
        <div className="pt-12 flex justify-center">
          <button className="gk-button " onClick={() => handleClick()}>
            <span className="omega">Book Your Meeting Today</span>
          </button>
        </div>
      </div>
    </div>
  );
}
