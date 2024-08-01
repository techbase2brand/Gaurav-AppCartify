"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./TabComponentsUi.css";
import Image from "next/image";
import AllprodectImage from "../../../public/Images/allproduct.jpg";
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

export default function TabComponentUi() {
  const [value, setValue] = React.useState<number>(0);
  const { setState } = React.useContext(AppStateContext);
  const handleClick = () => {
    setState(true);
    // setOpen((prevOpen:any) => !prevOpen);
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
              <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center ">
                {" "}
                Our <span style={{ color: "#96BF48" }}>
                  Shopify Mobile App
                </span>{" "}
                Building Service is For Everyone
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
                    <Tab
                      style={{
                        color: "white",
                        fontSize: "16px",
                        position: "relative",
                        zIndex: "33",
                        border: "2px solid",
                        borderRadius: "6px",
                      }}
                      label="All"
                      {...a11yProps(0)}
                    />
                    <Tab
                      style={{
                        color: "white",
                        fontSize: "16px",
                        position: "relative",
                        zIndex: "33",
                        border: "2px solid",
                        borderRadius: "6px",
                      }}
                      label="Restaurant"
                      {...a11yProps(1)}
                    />
                    <Tab
                      style={{
                        color: "white",
                        fontSize: "16px",
                        position: "relative",
                        zIndex: "33",
                        border: "2px solid",
                        borderRadius: "6px",
                      }}
                      label="eCommerce"
                      {...a11yProps(2)}
                    />

                    <Tab
                      style={{
                        color: "white",
                        fontSize: "16px",
                        position: "relative",
                        zIndex: "33",
                        border: "2px solid",
                        borderRadius: "6px",
                      }}
                      label="Beauty"
                      {...a11yProps(3)}
                    />
                    <Tab
                      style={{
                        color: "white",
                        fontSize: "16px",
                        position: "relative",
                        zIndex: "33",
                        border: "2px solid",
                        borderRadius: "6px",
                      }}
                      label="Electronics"
                      {...a11yProps(4)}
                    />
                  </Tabs>
                </Box>

                <CustomTabPanel value={value} index={0}>
                  <div className="allproduct lg:flex lg:flex-row lg:gap-9 lg:items-center  ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px] ">
                          Streamline orders, reservations, and menu updates for
                          a seamless dining experience and efficient kitchen
                          management.
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="allproduct lg:flex lg:flex-row-reverse lg:gap-9 lg:items-center md:pt-9 md:pb-9 ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px]">
                          Manage products, orders, payments, and customer
                          interactions to optimize online shopping experiences
                          and drive sales with Shopify app
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div className="allproduct lg:flex lg:flex-row lg:gap-9 lg:items-center  ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px] ">
                          Streamline orders, reservations, and menu updates for
                          a seamless dining experience and efficient kitchen
                          management.
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="allproduct lg:flex lg:flex-row-reverse lg:gap-9 lg:items-center md:pt-9 md:pb-9 ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px]">
                          Manage products, orders, payments, and customer
                          interactions to optimize online shopping experiences
                          and drive sales with Shopify app
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                  <div className="allproduct lg:flex lg:flex-row lg:gap-9 lg:items-center  ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px] ">
                          Streamline orders, reservations, and menu updates for
                          a seamless dining experience and efficient kitchen
                          management.
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="allproduct lg:flex lg:flex-row-reverse lg:gap-9 lg:items-center md:pt-9 md:pb-9 ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px]">
                          Manage products, orders, payments, and customer
                          interactions to optimize online shopping experiences
                          and drive sales with Shopify app
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                  <div className="allproduct lg:flex lg:flex-row lg:gap-9 lg:items-center  ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px] ">
                          Streamline orders, reservations, and menu updates for
                          a seamless dining experience and efficient kitchen
                          management.
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="allproduct lg:flex lg:flex-row-reverse lg:gap-9 lg:items-center md:pt-9 md:pb-9 ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px]">
                          Manage products, orders, payments, and customer
                          interactions to optimize online shopping experiences
                          and drive sales with Shopify app
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                  <div className="allproduct lg:flex lg:flex-row lg:gap-9 lg:items-center  ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px] ">
                          Streamline orders, reservations, and menu updates for
                          a seamless dining experience and efficient kitchen
                          management.
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div className="allproduct lg:flex lg:flex-row-reverse lg:gap-9 lg:items-center md:pt-9 md:pb-9 ">
                    <div className="all-list lg:w-[60%] ">
                      <div className="image_product">
                        <Image
                          src={AllprodectImage}
                          alt=""
                          className="rounded-[20px]"
                        />
                      </div>
                    </div>
                    <div className="allproduct lg:w-[40%]">
                      <div className="appproductpara">
                        <p className="manrope-gk-p lg:text-left text-center pt-[15px] pb-[15px]">
                          Manage products, orders, payments, and customer
                          interactions to optimize online shopping experiences
                          and drive sales with Shopify app
                        </p>
                        <div className="btn ">
                          <button
                            className="gk-button lg:block hidden"
                            onClick={() => handleClick()}
                          >
                            <span className="omega">
                              Book Your Meeting Today
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CustomTabPanel>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
