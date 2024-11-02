import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <div>
<Link href="/PostYourAd"></Link>
<Link href="/regsiteryourcar"></Link>
<Link href="/Lastpage"></Link>
<Link href="/makepayment"></Link>
<Link href="/contact"></Link>

        <div>
  <div className="bg-green-400 text-red-800 w-full gap-2.5 py-1 px-3">
    download App via sms </div>
  
  <hr className="color:white w-full "/>
<nav className="flex bg-green-400 h-20 w-full text-red-800" >
    <div className="px-3">
    <Image
src="/images/logo.png"
 alt="car image"
 height={200}
 width={400}
 className="h-16 w-[200px]" /></div> 
        {/* <div className=" bg-black w-28 h-5 text-white text-center gap-5 px-3">PAK WHEELS.COM</div></div> */}
    <div className=" bg-green-400 w-44 h-5 text-red-800 text-center gap-5"><Link href="/usedcars">used cars</Link></div>
    <div className=" bg-green-400 w-44 h-5 text-red-800 text-center gap-9">New cars</div>
    <div className=" bg-green-400 w-44 h-5 text-red-800 text-center gap-2">Bikes</div>
    <div className=" bg-green-400 w-44 h-5 text-red-800 text-center gap-2">Auto Store</div>
    <div className=" bg-green-400 w-44 h-5 text-red-800 text-center gap-2">videos</div>
    <div className=" bg-green-400 w-44 h-5 text-red-800 text-center gap-2">forums</div>
    <div className=" bg-green-400 w-44 h-5 text-red-800 text-center gap-2">blogs</div>
    <div className=" bg-green-400 w-44 h-5 text-red-800 text-center gap-2">More</div>
    <Link href="/PostYourAd"><button className="bg-red-700 w-32 h-7 text-black text-center">Post an Ad</button></Link>
    </nav>
        </div>
        </div>
    )
}

