import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { relative } from "path";
import "./AccodianTilt.css"


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={props.expandIcon} {...props} />
))(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "baseline",
  flexDirection: "row",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  background: "transparent",
}));

const faqItems = [
  {
    panel: "panel1",
    question:
      "Can you integrate my existing Shopify store with the mobile app?",
    answer:
      "Yes, we specialize in integrating your current Shopify store seamlessly into the mobile app, preserving your branding and ensuring a cohesive shopping experience across platforms.",
  },
  {
    panel: "panel2",
    question: "What features can I expect in my Shopify mobile app?",
    answer:
      "You can expect features such as easy product browsing, secure checkout, push notifications, personalized offers, and integration with payment gateways like Apple Pay and Google Pay.",
  },
  {
    panel: "panel3",
    question:
      "Will my Shopify mobile app be compatible with both iOS and Android devices?",
    answer:
      "Yes, we develop Shopify mobile apps that are compatible with both iOS (Apple devices) and Android devices, ensuring a broad reach among mobile users.",
  },
  {
    panel: "panel4",
    question:
      "What support do you provide after the Shopify mobile app is launched?",
    answer:
      "We provide ongoing support and maintenance to ensure your Shopify mobile app operates smoothly. This includes updates, troubleshooting, and assistance with any new features or optimizations you may require.",
  },
  {
    panel: "panel5",
    question: "Why should I turn my Shopify store into a mobile app?",
    answer:
      "Turning your Shopify store into a mobile app enhances user experience, boosts customer engagement, and potentially increases sales through features like push notifications and mobile-specific optimizations.",
  },
  {
    panel: "panel6",
    question: "Do I need technical expertise to get a Shopify mobile app?",
    answer:
      "No, our team of experts handles all aspects of app development, from design to deployment. We ensure a hassle-free process for transforming your Shopify store into a mobile app.",
  },
  {
    panel: "panel7",
    question:
      "What features can be added to my Shopify app to enhance sales and customer engagement?",
    answer:
      "AppCarify offers over 20 new features including enhanced UI/UX design, advanced analytics, and seamless integrations, aimed at driving business growth and competitiveness.",
  },
  {
    panel: "panel8",
    question:
      "How can I get started with AppCartify for my Shopify app development?",
    answer:
      "Simply contact us to discuss your project requirements. We'll guide you through our process from initial consultation to deployment, ensuring a successful app launch and ongoing support.",
  },
];

function AccodianTilt() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const renderExpandIcon = (panel: string) => {
    return expanded === panel ? (
      <RemoveCircleIcon
        sx={{
          color: "white",
          // position:"relative",
          // top:"-8px",
        }}
      />
    ) : (
      <AddCircleIcon
        sx={{
          color: "white",
          // position:"relative",
          // top:"4px", .
        }}
      />
    );
  };

  return (
    <>
      <section className="bg-[#0E1014] lg:pb-[50px] lg:pt-[50px] pb-10">
        <div className="container">
          <div>
            <h2 className="gk-h2 text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6">
              Frequently Asked Questions
            </h2>
            {faqItems.map((item) => (
              <Accordion
                key={item.panel}
                expanded={expanded === item.panel}
                onChange={handleChange(item.panel)}
                className=" border-none border-b-2  "
                style={{
                  borderBottom: "1px solid #ffffff6b",
                  background: "#ff000000",
                }}
              >
                <AccordionSummary
                  aria-controls={`${item.panel}d-content`}
                  id={`${item.panel}d-header`}
                  className="border-b-2 pt-[10px] pb-[10px] pl-0 gk-push "
                  style={{
                    padding: window?.innerWidth <= 640 ? "5px" : "10px",
                  }}
                  expandIcon={renderExpandIcon(item.panel)}
                  
                >
                  <Typography
                    className="text-[#96BF48] lg:text-[25px] font-medium text-[20px]"
                    style={{
                      fontFamily: "Manrope",
                      fontWeight:"600",
                      
                    }}
                    sx={{
                      fontSize: {
                        xs: '18px', // for extra-small screens
                        sm: '18px', // for small screens
                        md: '22px', // for medium and up screens
                      },
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="lg:pt-4 lg:pl-2 lg:pb-4 pt-2 pb-2 ">
                  <Typography className="manrope-gk-p-list"
                  style={{
                    fontSize: window?.innerWidth <= 768 ? "16px" : "18px", // Adjust
                    fontFamily: "Manrope",
                  }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AccodianTilt;
