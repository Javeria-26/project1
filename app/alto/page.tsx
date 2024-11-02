import Image from "next/image"
import Link from "next/link"
export default function Alto(){
    return(
        <div className="bg-white text-black h-full">
            <h1 className="bg-white text-black text-center font-bold text-3xl">SUZUKI ALTO CAR DETAILS</h1>
            <br />
            <div className="bg-white text-black h-44 w-full items-center px-96">
            <Image
src="/images/alto.png"
 alt="car image"
 height={900}
 width={900}
 className="items-center h-44 w-[600px]" />
                </div><div>
        <p className=" text-center text-lg py-4 px-4">The Suzuki Alto is an affordable option for those seeking a 
            budget-friendly vehicle, offering great value for money without compromising on essential features.
            Its compact size makes the Alto ideal for city driving, allowing for easy parking and smooth 
            navigation through tight spaces and crowded streets.Known for its excellent fuel economy, the 
            Alto is perfect for drivers looking to reduce their fuel costs while enjoying a reliable ride.With 
            its simple design and durable components, the Alto is easy to maintain, ensuring low running costs 
            and minimal upkeep over time.</p>
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