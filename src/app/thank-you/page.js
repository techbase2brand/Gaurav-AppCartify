import React from 'react';
import './AppCartify.css';
import Developer from '../HomeComponents/ShopifyDevSection';

const page = () =>{
    return (
        <>
            <div className="container-thank-you">
                {/* Logo Section */}
                <div className="logo-thank-you">
                    <a href="https://www.appcartify.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://www.appcartify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappcartifyimg.0d92e419.png&w=384&q=75"
                            alt="Company Logo"
                        />
                    </a>
                </div>

                {/* Header Section */}
                <div className="header-thank-you">
                    <h1>Thank you for contacting us. Our team will get back to you in the next 24 Hours.</h1>
                </div>

                {/* Body Text Section */}
                <div className="body-text-thank-you">
                    <p>Team AppCartify.</p>
                    <div className="flex-container-thank-you">
                        <a href="https://www.appcartify.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://www.appcartify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappcartifyimg.0d92e419.png&w=384&q=75"
                                alt="Company Logo"
                            />
                        </a>
                        <div className="flex-box-thank-you">
                            <p><strong>Email:</strong> <a href="mailto:hello@appcartify.com">hello@appcartify.com</a></p>
                            <p>
                                <strong>Contact:</strong>
                                <a href="https://wa.me/917889101844"> +917889101844</a> /
                                <a href="https://wa.me/918360116967"> +918360116967</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Developer />
        </>
    );
};

export default page;
