import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer"
export default function Toyotacorolla(){
    return(
        <div className="bg-white text-black">
            <h1 className="bg-white text-black text-center font-bold text-3xl">TOYOTA COROLLA CAR DETAILS</h1>
            <br />
            <div className="bg-white text-black h-44 w-full items-center px-96">
            <Image
src="/images/corolla.png"
 alt="car image"
 height={900}
 width={900}
 className="items-center h-44 w-[600px]" />
                </div><div>
        <p className=" text-center text-lg py-4 px-4">The Toyota Corolla is known for its exceptional reliability and long-lasting
 performance, making it a top choice for drivers seeking a dependable vehicle. With excellent fuel efficiency,the Corolla 
 helps you save on gas while providing a smooth and comfortable driving experience, perfect for daily commuting or 
 long trips.With excellent fuel efficiency, the Corolla helps you save on gas while 
 providing a smooth and comfortable driving experience, perfect for daily commuting or long trips.Equipped with Toyota’s advanced safety systems like lane departure 
                alert, adaptive cruise control, and automatic emergency braking, the Corolla ensures a safe 
                ride for you and your passengers.</p></div>  
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
                 <Footer />
                </div>
    )
}