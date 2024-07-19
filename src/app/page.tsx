"use client";
import Banner from "@/Components/HomeComponents/Banner";
import TabComponentUi from "@/Components/HomeComponents/TabComponentUi";
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { FormModal } from "@/Components/HomeComponents/FormModal";
function Page() {
  const [open, setOpen] = React.useState(false);
  console.log("open", open);

  return (
    <>
      <Header setOpen={setOpen} />
      <Banner />
      <FormModal open={open} setOpen={setOpen} />
      <TabComponentUi />
      <Footer />
    </>
  );
}

export default Page;
