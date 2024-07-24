"use client";
import Banner from "@/app/HomeComponents/Banner";
import TabComponentUi from "@/app/HomeComponents/TabComponentUi";
import React from "react";
import { FormModal } from "./HomeComponents/FormModal";
import Developer from "./HomeComponents/ShopifyDevSection";
import MobileApps from "./HomeComponents/MobileApps";
import ShopifyApp from "./HomeComponents/ShopifyApp";
import WhyChousus from "./HomeComponents/WhyChousus";
import ShopifyStore from "./HomeComponents/ShopifyStore";
import ScanandExperienc from "./HomeComponents/ScanandExperienc";
import Accordian from "./HomeComponents/Accordian";
import QuestionForm from "./HomeComponents/QuestionForm";
import CustomSlider from "./HomeComponents/Testmonial";
import Testing from "./HomeComponents/Testing";



function Page() {

  return (
    <>
      <Banner />
      <FormModal/>
      <TabComponentUi />
      <Developer/>
      <MobileApps/>
      <ShopifyApp/>
      <WhyChousus/>
      <ShopifyStore/>
      <ScanandExperienc/>
      <Accordian/>
      <QuestionForm/>
      <CustomSlider/>
      {/* <Testing/> */}

    </>
  );
}

export default Page;
