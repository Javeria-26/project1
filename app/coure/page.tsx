import Image from "next/image"
import Link from "next/link"
export default function Coure(){
    return(
        <div className="bg-white text-black">
            <h1 className="bg-white text-black text-center font-bold text-3xl">SUZUKI COURE CAR DETAILS</h1>
            <br />
            <div className="bg-white text-black h-44 w-full items-center px-96">
            <Image
src="/images/coure.png"
 alt="car image"
 height={900}
 width={900}
 className="items-center h-44 w-[600px]" />
                </div><div>
        <p className=" text-center text-lg py-4 px-4">The Daihatsu Cuore stands out for its superior build quality 
            and smooth driving experience in the small car segment. Known for its compact design, the Cuore is 
            perfect for navigating busy city roads with ease, while its spacious interior provides comfort for both
             the driver and passengers. It offers great fuel efficiency, allowing drivers to enjoy a cost-effective
              ride without compromising on performance. Additionally, the Cuore robust engine and low maintenance
               needs make it a reliable and durable option for long-term ownership.</p>
            </div>  
            <div className="grid grid-rows-1 grid-cols-5">
                   <div className="bg-white "></div> 
                   <div className="bg-white items-center"> </div>
                   
                   <div className="bg-white items-center px-12"> 
            <Link href="/registeryourcar">
            <button className="bg-green-500 w-32 h-7 text-black text-center">Make Payment</button>
            </Link></div>
            <div className="bg-white items-center"> </div>
                 <div className="bg-white item-center px-4 py-4 "></div>
                 </div>
                 </div>
                 
               
    )
}