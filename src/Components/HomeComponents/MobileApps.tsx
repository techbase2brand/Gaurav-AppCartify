import React from 'react'
import Image from 'next/image'
import MobileApp from "../../../public/Images/Mobile Apps.png"

const MobileApps = () => {
  return (
  <>
  
<section>

<div className="container">

<div className="grid lg:grid-cols-2 md:grid-cols-2 lg:grid-rows-1 lg:gap-[6rem] gap-[3rem] p-4 ">


    <div>
       <div className="image-bar">
     <Image className='' src={MobileApp} alt=''/>

       </div>
    </div>
    <div>
        safdsdf
    </div>
</div>

</div>


</section>
  
  
  </>
  )
}

export default MobileApps