"use client";
import Banner from "@/app/HomeComponents/Banner";
import TabComponentUi from "@/app/HomeComponents/TabComponentUi";
import React from "react";
import Footer from "./Footer/Footer";
import { FormModal } from "@/app/HomeComponents/FormModal";
import Developer from "@/app/HomeComponents/ShopifyDevSection";
import MobileApps from "@/app/HomeComponents/MobileApps";
import ShopifyApp from "@/app/HomeComponents/ShopifyApp";
import WhyChousus from "@/app/HomeComponents/WhyChousus";
import ShopifyStore from "@/app/HomeComponents/ShopifyStore";

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
      {/* <ScanandExperienc/> */}
      <Footer />
    </>
  );
}

export default Page;
