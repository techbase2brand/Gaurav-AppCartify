"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./TabComponentsUi.css";
import Image from "next/image";
import Ecommerce from "../../../public/Images/tabsimages/Ecommerce.webp";
import Restaurant from "../../../public/Images/tabsimages/Restaurant.webp";
import Beauty from "../../../public/Images/tabsimages/Beauty.webp";
import Spots from "../../../public/Images/tabsimages/Spots.webp";
import Automotives from "../../../public/Images/tabsimages/Automotives.webp";
import Electronics from "../../../public/Images/tabsimages/Electronics.webp";

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

export default function TabComponentUi() {
  const [value, setValue] = React.useState<number>(0);
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const [direction, setDirection] = React.useState<"forward" | "backward">(
    "forward"
  );
  const { setState } = React.useContext(AppStateContext);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 2);
    },3000); // Change image and description every 2 seconds

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => {
        let newValue;
        if (direction === "forward") {
          newValue = prevValue + 1;
          if (newValue >= tabData.length) {
            newValue = tabData.length - 1;
            setDirection("backward");
          }
        } else {
          newValue = prevValue - 1;
          if (newValue < 0) {
            newValue = 0;
            setDirection("forward");
          }
        }
        return newValue;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [direction]);

  const handleClick = () => {
    setState(true);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="block">
        <div className="Tab_class bg-[#0E1014]">
          <div className="container">
            <div>
              <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center uppercase pt-9" data-aos-duration="1500" data-aos="fade-up">
                Our <span style={{ color: "#96BF48" }}>Shopify Mobile App</span>{" "}
                Building Service is For Everyone 
              </h2>
            </div>
            <div className="mmm pt-6">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    className="desktop-tab flex-wrap"
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
                          zIndex: 33,
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
                        <div className="image_product" data-aos="zoom-in" data-aos-duration="1500">
                          <Image
                            src={tab.images[imageIndex]}
                            alt=""
                            className="rounded-[20px] w-full"
                          />
                        </div>
                      </div>
                      <div className="allproduct lg:w-[40%]" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="appproductpara">
                          <h2 className="gk-h2 lg:text-left text-center uppercase lg:p-0 pt-4">
                            {tab.title}
                          </h2>
                          <p className="manrope-gk-p lg:text-left text-center lg:pt-[15px] lg:pb-[15px] pt-[5px] pb-[15px] ">
                            {tab.descriptions[imageIndex]}
                          </p>
                          <div className="btn ">
                            <button
                              className="gk-button lg:block "
                              onClick={handleClick}
                            >
                              <span className="omega">
                                Get In Touch
                              </span>
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
