import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Button from "@mui/material/Button";
import "./Accordian.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function Accordian() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <section className="bg-[#0E1014] lg:pb-[50px]">
        <div className="Accoinian">
          <div className="container">
            <div>
              <h2 className="gk-h2 text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6">
                Frequently Asked Questions
              </h2>
            </div>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                className="bg-transparent gk-line"
              >
                <AccordionSummary
                  expandIcon={
                    expanded === `panel${index}` ? (
                      <RemoveCircleIcon className="removeio" />
                    ) : (
                      <AddCircleIcon className=" addio"/>
                    )
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <h4 className="gk-h4 text-[#96BF48]">{faq.question}</h4>
                </AccordionSummary>
                <AccordionDetails className="pb-3">
                  <p className="manrope-gk-p-list">{faq.answer}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const faqData = [
  {
    question:
      "Can you integrate my existing Shopify store with the mobile app?",
    answer:
      "Yes, we specialize in integrating your current Shopify store seamlessly into the mobile app, preserving your branding and ensuring a cohesive shopping experience across platforms.",
  },
  {
    question: "What features can I expect in my Shopify mobile app?",
    answer:
      "You can expect features such as easy product browsing, secure checkout, push notifications, personalized offers, and integration with payment gateways like Apple Pay and Google Pay.",
  },
  {
    question:
      "Will my Shopify mobile app be compatible with both iOS and Android devices?",
    answer:
      "Yes, we develop Shopify mobile apps that are compatible with both iOS (Apple devices) and Android devices, ensuring a broad reach among mobile users.",
  },
  {
    question:
      "What support do you provide after the Shopify mobile app is launched?",
    answer:
      "We provide ongoing support and maintenance to ensure your Shopify mobile app operates smoothly. This includes updates, troubleshooting, and assistance with any new features or optimizations you may require.",
  },
  {
    question: "Why should I turn my Shopify store into a mobile app?",
    answer:
      "Turning your Shopify store into a mobile app enhances user experience, boosts customer engagement, and potentially increases sales through features like push notifications and mobile-specific optimizations.",
  },
  {
    question: "Do I need technical expertise to get a Shopify mobile app?",
    answer:
      "No, our team of experts handles all aspects of app development, from design to deployment. We ensure a hassle-free process for transforming your Shopify store into a mobile app.",
  },
  {
    question:
      "What features can be added to my Shopify app to enhance sales and customer engagement?",
    answer:
      "AppCarify offers over 20 new features including enhanced UI/UX design, advanced analytics, and seamless integrations, aimed at driving business growth and competitiveness.!",
  },
  {
    question:
      "How can I get started with AppCarify for my Shopify app development?",
    answer:
      "Simply contact us to discuss your project requirements. We'll guide you through our process from initial consultation to deployment, ensuring a successful app launch and ongoing support.",
  },
];
