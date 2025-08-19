"use client";
import Banner from "@/app/HomeComponents/Banner";
// import TabComponentUi from "@/app/HomeComponents/TabComponentUi";
import React from "react";

import Developer from "./HomeComponents/ShopifyDevSection";
import MobileApps from "./HomeComponents/MobileApps";
import ShopifyApp from "./HomeComponents/ShopifyApp";
// import WhyChousus from "./HomeComponents/WhyChousus";
import ShopifyStore from "./HomeComponents/ShopifyStore";
import ScanandExperienc from "./HomeComponents/ScanandExperienc";
// import Accordian from "./HomeComponents/Accordian";
import QuestionForm from "./HomeComponents/QuestionForm";
// import CustomSlider from "./HomeComponents/Testmonial";
import dynamic from "next/dynamic";
import AccodianTilt from "./HomeComponents/AccodianTilt";
import AppsAdd from "./HomeComponents/AppsAdd";
import Feature from "./HomeComponents/Feature";
import Maplocation from "./HomeComponents/Maplocation";
import Aboutus from "./HomeComponents/Aboutus";
import Casestudy from "./HomeComponents/Casestudy";
import Footerwrap from "./Footer/Footerwrap";

const Testmonial = dynamic(
  () => import("@/app/HomeComponents/TabComponentUi"),
  { ssr: false }
);
const CustomSlider = dynamic(() => import("./HomeComponents/Testmonial"), {
  ssr: false
});

function Maincomponent() {
  return (
    <div>
      <Banner />
      <Feature />
      <Testmonial />
      <AppsAdd />
      <Developer />
      <MobileApps />
      <ShopifyApp />
      <ShopifyStore />
      <ScanandExperienc />
      <AccodianTilt />
      <QuestionForm />
      <Aboutus />
      <CustomSlider />
      <Casestudy/>
      <Maplocation />
      <Footerwrap/> 
    </div>
  );
}

export default Maincomponent;
