"use client";
import Banner from "@/Components/HomeComponents/Banner";
import TabComponentUi from "@/Components/HomeComponents/TabComponentUi";
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { FormModal } from "@/Components/HomeComponents/FormModal";
import Developer from "@/Components/HomeComponents/ShopifyDevSection";
import MobileApps from "@/Components/HomeComponents/MobileApps";
import ShopifyApp from "@/Components/HomeComponents/ShopifyApp";
import WhyChousus from "@/Components/HomeComponents/WhyChousus";
import ShopifyStore from "@/Components/HomeComponents/ShopifyStore";
import ScanandExperienc from "@/Components/HomeComponents/ScanandExperienc";

function Page() {
  const [open, setOpen] = React.useState(false);
  console.log("open", open);

  return (
    <>
      <Header setOpen={setOpen} />
      <Banner />
      <FormModal open={open} setOpen={setOpen} />
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
