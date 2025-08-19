import React from "react";
import { casestudyData } from "../jsondata";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
export default function Casestudy() {
  const router = useRouter();
  const handleClick = (slug: string) => {
    router.push(`/case-study/${slug}`);
  };
  return (
    <div className="py-12">
      <div className="container px-0 ">
        <h2 className="gk-h2 text-center uppercase lg:pt-[40px] lg:pb-[40px] pb-6 pt-6">
          Case Study
        </h2>
        <div className="gap-6">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            speed={1000}
            modules={[Autoplay]}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              991: {
                slidesPerView: 2
              }
            }}
          >
            {casestudyData.map((item, index) =>
              <SwiperSlide key={index} >
                <div className="p-4 m-4 border-2 border-white hover:border-[#96BF48] cursor-pointer rounded-md h-full rounded-tl-[60px] duration-500"   onClick={() => handleClick(item.slug)}>
                    <Image
                     src={item.bannerImage}
                     alt={item.title}
                     width={1000}
                     height={500}
                     className="rounded-tl-[50px]"
                     />
                  <h4 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                    {item.title}
                  </h4>
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
