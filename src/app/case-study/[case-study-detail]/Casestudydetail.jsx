"use client"
import React from 'react'
import {casestudyData} from "../../jsondata";
import { usePathname } from 'next/navigation';
export default function Casestudydetail() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();

  const caseStudy = casestudyData.find(item => item.slug === slug);

  return (
    <div className="container pt-28">
      {caseStudy ? (
        <div className="p-4  h-max">
              <h3 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                {caseStudy.title}
              </h3>
              <h5 className="gk-h4 text-[#96BF48] lg:pb-[5px] pt-3">
                Client Overview
              </h5>
              <p className="manrope-gk-p-list pb-2">
                {caseStudy.subtitle}
              </p>

              <div className='text-white dnamic_row_data' dangerouslySetInnerHTML={{ __html: caseStudy.rawdata }} />
            </div>
      ) : (
        <div>Case study not found</div>
      )}
    </div>
  )
}
