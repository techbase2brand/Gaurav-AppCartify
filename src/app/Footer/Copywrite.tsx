import React from 'react';
import Link from 'next/link';

const Copywrite = () => {
  return (
    <>
      <div>
        <li className='lg:text-[18px] text-[15px] font-normal lg:leading-9 p-4 text-white bg-[#151820] text-center'
          style={{ wordSpacing: '2px' }}
        >
          © 2024 All rights reserved  |  
          Designed By <Link href="https://www.base2brand.com/" passHref target="_blank">
           Base2Brand
          </Link>
        </li>
      </div>
    </>
  );
}

export default Copywrite;
