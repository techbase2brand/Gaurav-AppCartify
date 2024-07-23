
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./Accordian.css"

export default function Accordian() {
  return (
    <>
      <section className="bg-[#0E1014] lg:pb-[50px]">
        <div className="Accoinian">
          <div className="container">
            <div>
              <h2 className="gk-h2  text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6">
                {" "}
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h4 className="gk-h4 text-[#96BF48]">Can you integrate my existing Shopify store with the mobile app?</h4>
              </AccordionSummary>
              <AccordionDetails className="pb-3">
                <p className="manrope-gk-p-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maiores nulla enim unde dicta quam, beatae eos dolore
                  quasi ipsum nemo excepturi, optio eum itaque hic corporis,
                  expedita harum odit!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h4 className="gk-h4 text-[#96BF48]">What features can I expect in my Shopify mobile app?</h4>
              </AccordionSummary>
              <AccordionDetails className="pb-3">
                <p className="manrope-gk-p-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maiores nulla enim unde dicta quam, beatae eos dolore
                  quasi ipsum nemo excepturi, optio eum itaque hic corporis,
                  expedita harum odit!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h4 className="gk-h4 text-[#96BF48]">Will my Shopify mobile app be compatible with both iOS and Android devices?</h4>
              </AccordionSummary>
              <AccordionDetails className="pb-3">
                <p className="manrope-gk-p-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maiores nulla enim unde dicta quam, beatae eos dolore
                  quasi ipsum nemo excepturi, optio eum itaque hic corporis,
                  expedita harum odit!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h4 className="gk-h4 text-[#96BF48]">What support do you provide after the Shopify mobile app is launched?</h4>
              </AccordionSummary>
              <AccordionDetails className="pb-3">
                <p className="manrope-gk-p-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maiores nulla enim unde dicta quam, beatae eos dolore
                  quasi ipsum nemo excepturi, optio eum itaque hic corporis,
                  expedita harum odit!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h4 className="gk-h4 text-[#96BF48]">Why should I turn my Shopify store into a mobile app?</h4>
              </AccordionSummary>
              <AccordionDetails className="pb-3">
                <p className="manrope-gk-p-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maiores nulla enim unde dicta quam, beatae eos dolore
                  quasi ipsum nemo excepturi, optio eum itaque hic corporis,
                  expedita harum odit!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h4 className="gk-h4 text-[#96BF48]">Do I need technical expertise to get a Shopify mobile app?</h4>
              </AccordionSummary>
              <AccordionDetails className="pb-3">
                <p className="manrope-gk-p-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maiores nulla enim unde dicta quam, beatae eos dolore
                  quasi ipsum nemo excepturi, optio eum itaque hic corporis,
                  expedita harum odit!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h4 className="gk-h4 text-[#96BF48]">What features can be added to my Shopify app to enhance sales and customer engagement?</h4>
              </AccordionSummary>
              <AccordionDetails className="pb-3">
                <p className="manrope-gk-p-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maiores nulla enim unde dicta quam, beatae eos dolore
                  quasi ipsum nemo excepturi, optio eum itaque hic corporis,
                  expedita harum odit!
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
              <h4 className="gk-h4 text-[#96BF48]">How can I get started with AppCarify for my Shopify app development?</h4>
              </AccordionSummary>
              <AccordionDetails className="">
                <p className="manrope-gk-p-list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi maiores nulla enim unde dicta quam, beatae eos dolore
                  quasi ipsum nemo excepturi, optio eum itaque hic corporis,
                  expedita harum odit!
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
