import Image from "next/image"
import Link from "next/link"
export default function Mehran(){
    return(
        <div className="bg-white text-black">
            <h1 className="bg-white text-black text-center font-bold text-3xl px-96">SUZUKI MEHRAN CAR DETAILS</h1>
            <br />
            <div className="bg-white text-black h-44 w-full px-96 items-center ">
            <Image
src="/images/mehran1.png"
 alt="car image"
 height={900}
 width={900}
 className=" items-center h-44 w-[600px]" />
                </div><div>
        <p className=" text-center text-lg py-4 px-12 h-full">The Suzuki Mehran is a popular choice for drivers looking for
             an economical and reliable car. Its compact size makes it perfect for urban environments, offering easy
              maneuverability through narrow streets and tight parking spaces. The Mehran is well-known for its low 
              running and maintenance costs, making it an affordable vehicle to own and maintain over time. With its
               simple yet durable design, the Mehran provides a dependable driving experience, ideal for 
               budget-conscious buyers or those seeking a basic, no-frills car.
             </p></div> 
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