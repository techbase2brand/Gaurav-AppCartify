"use client";
import React from "react";
import "./AppCartify.css";
import Developer from "../HomeComponents/ShopifyDevSection";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/Images/facebookfooter.svg";
import instagram from "../../../public/Images/instagramfooter.svg";
import youtube from "../../../public/Images/youtubeicon.svg";
const Thankyou = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Images/brochure/Appcartify.pdf";
    link.download = "Appcartify.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <div className="container-thank-you">
        <h2 className="gk-h2 xl:pt-10 xl:pb-10 text-center text-[#96bf48] uppercase pt-9 mb-4">
          Thank You for Reaching Out!
        </h2>
        <div className="logo-thank-you">
          <a
            href="https://www.appcartify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.appcartify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappcartifyimg.0d92e419.png&w=384&q=75"
              alt="Company Logo"
            />
          </a>
        </div>

        <div className="header-thank-you">
          <p>
            We’ve received your inquiry, and our team will get back to you shortly. Your interest in AppCartify is truly appreciated.
          </p>
        </div>

        <div className="body-text-thank-you">
          <p className="text-xl">Team AppCartify.</p>
          <div className="flex-container-thank-you">
            <a
              href="https://www.appcartify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.appcartify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappcartifyimg.0d92e419.png&w=384&q=75"
                alt="Company Logo"
              />
            </a>
            <div className="flex-box-thank-you">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:hello@appcartify.com">hello@appcartify.com</a>
              </p>
              <p>
                <strong>Contact:</strong>
                <a href="https://wa.me/917889101844"> +91-7889101844</a> {" "}
                <a href="https://wa.me/918360116967"> +91-8360116967</a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div>
            <span className="text-white ">Follow Us</span>
            <div className="flex gap-5 mt-3">
              <Link
                href="https://www.facebook.com/profile.php?id=61562039261967"
                target="_blank"
              >
                <span>
                  <Image src={facebook} alt="Facebookicon" />
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/appcartify/"
                target="_blank"
              >
                <span>
                  <Image src={instagram} alt="Instagramicon" />
                </span>
              </Link>
              <Link href="https://www.youtube.com/@Appcartify" target="_blank">
                <span>
                  <Image src={youtube} alt="YouTubeicon" />
                </span>
              </Link>
            </div>
          </div>
          <div
            className="text-[#96bf48] flex items-center gap-2 cursor-pointer"
            onClick={handleDownload}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="#96bf48"
                d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1M5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1"
              />
            </svg>
            Download Brochure
          </div>
        </div>
      </div>
      <Developer />
    </div>
  );
};

export default Thankyou;
