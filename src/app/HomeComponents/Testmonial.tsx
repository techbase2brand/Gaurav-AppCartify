import React, { useState, useEffect, useRef } from "react";
import "./Testmonial.css";

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      name: "Michael Davis",
      date: "2 March, 2024",
      rating: "★★★★★",
      text: "Our sales soared with Shopify mobile app. Seamless integration and easy updates made managing products and promotions effortless for our team.",
    },
    {
      name: "Kevin Wilson",
      date: "2 March, 2004",
      rating: "★★★★★",
      text: "AppCartify helped in making an exceptional Shopify app. Enhanced analytics helped refine our marketing strategies, increasing engagement and customer satisfaction beyond expectations.",
    },
    {
      name: "David Wilson",
      date: "2 March, 2024",
      rating: "★★★★★",
      text: "Shopify mobile app created this company to drive traffic and sales. The user-friendly design and personalized recommendations feature significantly boosted average order values.",
    },
    {
      name: "Jennifer Brown",
      date: "2 March, 2024",
      rating: "★★★★★",
      text: "Shopify app simplified Personalized notifications and managed seasonal events, enhancing customer satisfaction.",
    },
    {
      name: "Jennifer Brown",
      date: "2 March, 2024",
      rating: "★★★★★",
      text: "Shopify mobile app created this company to drive traffic and sales. The user-friendly design and personalized recommendations feature significantly boosted average order values.",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // Show 1 slide on mobile
      } else {
        setSlidesToShow(3); // Show 3 slides on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current); // Clean up interval on component unmount
      }
    };
  }, []);

  return (
    <section>
      <div className="testimonial-value bg-[#151820]">
        <h2 className="gk-h2  text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6 ">WHAT OUR <span style={{color:'#96BF48'}}> CLIENT SAY</span></h2>
        <div className="slider-container">
          <div className="slider pb-16">
            <div
              className="slider-inner"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
                transition: 'transform 1s ease-in-out',
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="slide-item">
                  <div className="slide-back h-[365px]">
                    <div className="slide-content xl:p-[45px] xl:h-[275px] p-[35px]">
                      <div className="flex justify-between">
                        <p className="name">{slide.name}</p>
                        <p className="date">{slide.date}</p>
                      </div>

                      <p className="rating text-[#FF7F00]">{slide.rating}</p>

                      <p className="text">{slide.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              {slides.map((slide, index) => (
                <div key={index + totalSlides} className="slide-item">
                  <div className="slide-back h-[365px] ">
                    <div className="slide-content xl:p-[45px] xl:h-[275px] p-[35px]">
                      <div className="flex justify-between">
                        <p className="name">{slide.name}</p>
                        <p className="date">{slide.date}</p>
                      </div>

                      <p className="rating text-[#FF7F00]">{slide.rating}</p>

                      <p className="text">{slide.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSlider;
