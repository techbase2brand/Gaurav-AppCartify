import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="gk-h1 uppercase text-center pt-5">Privacy Policy</h1>
          <h2 className="gk-h2 xl:pt-[3%] xl:pb-6 uppercase pt-9 pb-4 text-center">
            AppCartify Privacy Policy
          </h2>
          <h4 className="lg:text-[22px] font-medium text-[20px] text-white xl:pt-[1%] xl:pb-[2%] pt-2 pb-3">
            Effective Date: 09-07-2024
          </h4>

          <p className="lg:text-[24px] font-medium text-[20px] text-white pt-2">
            1. Introduction
          </p>
          <p className="manrope-gk-p-list lg:mt-3 text-white">
            Welcome to AppCartify. We value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard your data.
          </p>

          <p className="lg:text-[24px] font-medium text-[20px] text-white pt-4">
            2. Information We Collect
          </p>
          <ul className="manrope-gk-p-list text-white">
            <li className="manrope-gk-p-list">
              Personal Information: Name, email address, shipping address, phone
              number.
            </li>
            <li className="manrope-gk-p-list">
              Payment Information: Credit card details, billing information.
            </li>
            <li className="manrope-gk-p-list">
              Usage Data: Device information, IP address, browsing history, app
              usage statistics.
            </li>
          </ul>

          <p className="lg:text-[24px] font-medium text-[20px] text-white pt-4">
            3. How We Use Your Information
          </p>
          <ul className="manrope-gk-p-list text-white">
            <li className="manrope-gk-p-list">
              To process and fulfill your orders.
            </li>
            <li className="manrope-gk-p-list">To provide customer support.</li>
            <li className="manrope-gk-p-list">
              To improve our app and services.
            </li>
            <li className="manrope-gk-p-list">
              To send you promotional materials (with your consent).
            </li>
          </ul>

          <p className="lg:text-[24px] font-medium text-[20px] text-white pt-4">
            4. Data Sharing
          </p>
          <p className="manrope-gk-p-list lg:mt-3">
            We do not sell or rent your personal information to third parties.
            We may share data with:
          </p>
          <ul className="list-disc text-white">
            <li className="manrope-gk-p-list">
              Service providers who help us operate our business.
            </li>
            <li className="manrope-gk-p-list">
              Legal authorities if required by law.
            </li>
          </ul>

          <p className="lg:text-[24px] font-medium text-[20px] text-white pt-4">
            5. Data Security
          </p>
          <p className="text-white lg:mt-3 manrope-gk-p-list">
            We implement robust security measures to protect your data from
            unauthorized access.
          </p>

          <p className="lg:text-[24px] font-medium text-[20px] text-white pt-4">
            6. Your Rights
          </p>
          <p className="text-white lg:mt-3 manrope-gk-p-list">
            You have the right to access, update, or delete your personal
            information. Contact us at [email] to exercise these rights.
          </p>

          <p className="lg:text-[24px] font-medium text-[20px] text-white pt-4">
            7. Changes to This Policy
          </p>
          <p className="text-white lg:mt-3 manrope-gk-p-list">
            We may update this policy from time to time. We will notify you of
            any changes by posting the new policy on our app.
          </p>

          <p className="lg:text-[24px] font-medium text-[20px] text-white pt-4">
            8. Contact Us
          </p>
          <p className="text-white lg:mt-3 manrope-gk-p-list">
            For any questions or concerns, please contact us at{" "}
            <a
              href="mailto:tech@base2brand.com"
              className="underline text-white"
            >
              tech@base2brand.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
