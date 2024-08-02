"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./TabComponentsUi.css";
import "./AppsAdd.css";
import Image from "next/image";
// import Ecommerce from "../../../public/Images/Ecommerce.png";
// import EcommerceSec from "../../../public/Images/Ecommerce2.png";
// import Restaurant from "../../../public/Images/Restaurant.png";
// import RestaurantSec from "../../../public/Images/Restaurant2.png";
// import Beauty from "../../../public/Images/Beauty.png";
// import BeautySec from "../../../public/Images/Beauty2.png";
// import Spots from "../../../public/Images/Spots.png";
// import SpotsSec from "../../../public/Images/Spots2.png";
// import Automotives from "../../../public/Images/Automotives.png";
// import Automotives221 from "../../../public/Images/Automotives 221.png";
// import Electronicshed from "../../../public/Images/Electronicshed.png";
// import Electronicshed221 from "../../../public/Images/Electronicshed221.png";

import Ecommerce from "../../../public/Images/tabsimages/Ecommerce.svg"
import Restaurant from "../../../public/Images/tabsimages/Restaurant.svg"
import Beauty from "../../../public/Images/tabsimages/Beauty.svg"
import Spots from "../../../public/Images/tabsimages/Spots.svg"
import Automotives from "../../../public/Images/tabsimages/Automotives.svg"
import Electronics from "../../../public/Images/tabsimages/Electronics.svg"

import { AppStateContext } from "../Context/AppStateContext";

const tabData = [
  {
    label: "Ecommerce",
    images: [Ecommerce, Ecommerce],
    title: "Order and Reservation Management",
    descriptions: [
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management.",
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management.",
    ],
  },
  {
    label: "Food & Restaurant",
    images: [Restaurant, Restaurant],
    title: "Menu and Delivery Solutions",
    descriptions: [
      "Display menu offerings, accept custom orders, manage deliveries, promote specials, and share baking tips for sweet success.",
      "Display menu offerings, accept custom orders, manage deliveries, promote specials, and share baking tips for sweet success.",
    ],
  },
  {
    label: "Beauty",
    images: [Beauty, Beauty],
    title: "Product and Style Management",
    descriptions: [
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management.",
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management.",
    ],
  },
  {
    label: "Sports",
    images: [Spots, Spots],
    title: "Inventory and Sales Tools",
    descriptions: [
      "Manage inventory, showcase products, process orders, handle returns, update sizing guides, provide expert tips, and analyze sales trends with our comprehensive sports store management tools.",
      "Manage inventory, showcase products, process orders, handle returns, update sizing guides, provide expert tips, and analyze sales trends with our comprehensive sports store management tools.",
    ],
  },
  {
    label: "Automotives",
    images: [Automotives, Automotives],
    title: "Inventory and Service Solutions",
    descriptions: [
      "Manage inventory, showcase vehicles, process service appointments, handle repairs, update vehicle specifications and provide maintenance tips, with our Shopify expertise.",
      "Manage inventory, showcase vehicles, process service appointments, handle repairs, update vehicle specifications and provide maintenance tips, with our Shopify expertise.",
    ],
  },
  {
    label: "Electronics",
    images: [Electronics, Electronics],
    title: "Inventory and Sales Solutions",
    descriptions: [
      "Manage inventory, showcase products, process orders, handle returns, update specifications, provide tech tips, and analyze sales trends with our electronics store management tools.",
      "Manage inventory, showcase products, process orders, handle returns, update specifications, provide tech tips, and analyze sales trends with our electronics store management tools.",
    ],
  },
];

export default function AppsAdd() {
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const { setState } = React.useContext(AppStateContext);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000); // Change image and description every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setState(true);
  };

  return (
    <>
      <section className="lg:hidden block">
        <div className="Tab_class bg-[#0E1014]">
          <div className="container">
            <div>
              <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center uppercase pt-9">
                Our <span style={{ color: "#96BF48" }}>Shopify Mobile App</span>{" "}
                Building Service is For Everyone
              </h2>
            </div>
            <div className="pt-6">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    className="mobile-tab pb-6"
                    value={false} // Prevents tab switching
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    {tabData.map((tab, index) => (
                      <Tab
                        key={index}
                        component="a" // Turn Tab into anchor link
                        href={`#section-${index}`} // Link to corresponding section
                        style={{
                          color: "white",
                          fontSize: window?.innerWidth <= 768 ? "14px" : "16px", // Adjust font size for mobile devices
                          position: "relative",
                          zIndex: 33,
                          border: "1px solid",
                          borderRadius: "6px",
                          width: window?.innerWidth <= 768 ? "48%" : "auto", // Adjust width for mobile devices
                        }}
                        label={tab.label}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          document
                            .getElementById(`section-${index}`)
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                      />
                    ))}
                  </Tabs>
                </Box>
                {tabData.map((tab, index) => (
                  <div
                    key={index}
                    id={`section-${index}`} // Add an ID to each section for linking
                    className="allproduct lg:flex lg:gap-9 lg:items-center lg:pt-9 md:pt-9 md:pb-9"
                  >
                    <div className="all-list lg:w-[60%]">
                      <div className="image_product">
                        <Image
                          src={tab.images[imageIndex]}
                          alt={tab.label}
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <h2 className="gk-h2 lg:text-left text-center uppercase lg:p-0 pt-4">
                          {tab.title}
                        </h2>
                        <p className="manrope-gk-p lg:text-left text-center lg:pt-[15px] lg:pb-[15px] pt-[5px] pb-[15px] ">
                          {tab.descriptions[imageIndex]}
                        </p>
                        <div className="btn pb-10 md:pb-0 lg:flex lg:justify-start flex justify-center">
                          <button
                            className="gk-button lg:block "
                            onClick={handleClick}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
