"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./TabComponentsUi.css";
import Image from "next/image";
import Ecommerce from "../../../public/Images/Ecommerce.png"
import EcommerceSec from "../../../public/Images/Ecommerce2.png"
import Restaurant from "../../../public/Images/Restaurant.png"
import RestaurantSec from "../../../public/Images/Restaurant2.png"
import Beauty from "../../../public/Images/Beauty.png"
import BeautySec from "../../../public/Images/Beauty2.png"
import Spots from "../../../public/Images/Spots.png"
import SpotsSec from "../../../public/Images/Spots2.png"
import Automotives from "../../../public/Images/Automotives.png"
import Automotives221 from "../../../public/Images/Automotives 221.png"


import { AppStateContext } from "../Context/AppStateContext";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabData = [
  {
    label: "Ecommerce",
    images: [Ecommerce, EcommerceSec],
    descriptions: [
      "Manage products, orders, payments, and customer interactions to optimize online shopping experiences and drive sales with Shopify app",
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management."
    ]
  },
  {
    label: "Restaurant",
    images: [Restaurant, RestaurantSec],
    descriptions: [
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management.",
      "Manage products, orders, payments, and customer interactions to optimize online shopping experiences and drive sales with Shopify app"
    ]
  },
  {
    label: "Beauty",
    images: [Beauty, BeautySec],
    descriptions: [
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management.",
      "Manage products, orders, payments, and customer interactions to optimize online shopping experiences and drive sales with Shopify app"
    ]
  },
  {
    label: "Spots",
    images: [Spots, SpotsSec],
    descriptions: [
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management.",
      "Manage products, orders, payments, and customer interactions to optimize online shopping experiences and drive sales with Shopify app"
    ]
  },
  {
    label: "Automotives",
    images: [Automotives, Automotives221],
    descriptions: [
      "Streamline orders, reservations, and menu updates for a seamless dining experience and efficient kitchen management.",
      "Manage products, orders, payments, and customer interactions to optimize online shopping experiences and drive sales with Shopify app"
    ]
  },
  
];

export default function TabComponentUi() {
  const [value, setValue] = React.useState<number>(0);
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <section>
        <div className="Tab_class bg-[#0E1014]">
          <div className="container">
            <div>
              <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center uppercase pt-9">
                Our <span style={{ color: "#96BF48" }}>Shopify Mobile App</span> Building Service is For Everyone
              </h2>
            </div>
            <div className="mmm pt-6">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    {tabData.map((tab, index) => (
                      <Tab
                        key={index}
                        style={{
                          color: "white",
                          fontSize: "16px",
                          position: "relative",
                          zIndex: "33",
                          border: "1px solid",
                          borderRadius: "6px",
                        }}
                        label={tab.label}
                        {...a11yProps(index)}
                      />
                    ))}
                  </Tabs>
                </Box>
                {tabData.map((tab, index) => (
                  <CustomTabPanel value={value} index={index} key={index}>
                    <div className="allproduct lg:flex lg:gap-9 lg:items-center lg:pt-9 md:pt-9 md:pb-9">
                      <div className="all-list lg:w-[60%]">
                        <div className="image_product">
                          <Image src={tab.images[imageIndex]} alt="" className="rounded-[20px]" />
                        </div>
                      </div>
                      <div className="allproduct lg:w-[40%]">
                        <div className="appproductpara">
                          <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px] ">
                            {tab.descriptions[imageIndex]}
                          </p>
                          <div className="btn">
                            <button className="gk-button lg:block hidden" onClick={handleClick}>
                              Book Your Meeting Today
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CustomTabPanel>
                ))}
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}