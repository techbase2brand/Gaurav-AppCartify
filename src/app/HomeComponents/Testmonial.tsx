"use client";
import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import './Testmonial.css';

const CustomSlider: React.FC = () => {
  const flickityRef = useRef<Flickity | null>(null);

  useEffect(() => {
    const elem = document.querySelector('.main-carousel');
    if (elem) {
      flickityRef.current = new Flickity(elem, {
        cellAlign: 'left',
        pageDots: false,
        contain: true,
        autoPlay: 3000,
        wrapAround: true,
        groupCells: 1,
      });
    }

    return () => {
      if (flickityRef.current) {
        flickityRef.current.destroy();
      }
    };
  }, []);

  const slides = [
    {
      name: "Michael Davis",
      date: "30 january, 2024",
      rating: "★★★★★",
      text: "Our sales soared with Shopify mobile app. Seamless integration and easy updates made managing products and promotions effortless for our team.",
    },
    {
      name: "Kevin Wilson",
      date: "25 March, 2004",
      rating: "★★★★★",
      text: "AppCartify helped in making an exceptional Shopify app. Enhanced analytics helped refine our marketing strategies, increasing engagement and customer satisfaction beyond expectations.",
    },
    {
      name: "David Wilson",
      date: "23 December, 2024",
      rating: "★★★★★",
      text: "Shopify mobile app created this company to drive traffic and sales. The user-friendly design and personalized recommendations feature significantly boosted average order values.",
    },
    {
      name: "Jennifer Brown",
      date: "12 April, 2024",
      rating: "★★★★★",
      text: "Shopify app simplified Personalized notifications and managed seasonal events, enhancing customer satisfaction.",
    },
    {
      name: "Jennifer Brown",
      date: "21 January, 2024",
      rating: "★★★★★",
      text: "Shopify mobile app created this company to drive traffic and sales. The user-friendly design and personalized recommendations feature significantly boosted average order values.",
    },
  ];

  return (
    <section className=' testmonialbtn'>
      <div className="testimonial-value bg-[#151820] ">
        <h2 className="gk-h2 text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6">
          WHAT OUR <span style={{ color: '#96BF48' }}>CLIENTS SAY</span>
        </h2>
        <div className="slider-container lg:pt-9 lg:pb-10 pb-10">
          <div className="main-carousel">
            {slides.map((slide, index) => (
              <div key={index} className="carousel-cell slide-item">
                <div className="slide-back lg:h-[365px] h-[380px] flex items-center">
                  <div className="slide-content xl:p-[30px] xl:h-[275px] p-[35px]">
                    <div className="flex justify-between">
                      <p className="name text-[#82BC29] font-bold">{slide.name}</p>
                      <p className="date text-[#16161686] text-[16px] font-semibold">{slide.date}</p>
                    </div>
                    <p className="rating text-[#FF7F00]">{slide.rating}</p>
                    <p className="text text-[18px] pt-[10px]">{slide.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .carousel-cell {
          width: calc(33.33% - 10px); // Default: Show 3 slides at a time
          height: auto;
          margin-right: 10px;
        }
        @media (max-width: 1024px) { // Tablets
          .carousel-cell {
            width: calc(50% - 10px); // Show 2 slides at a time
          }
        }
        @media (max-width: 640px) { // Mobile
          .carousel-cell {
            width: 100%; // Show 1 slide at a time
          }
        }
      `}</style>
    </section>
  );
};

export default CustomSlider;
