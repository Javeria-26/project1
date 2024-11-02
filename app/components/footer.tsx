import Link from "next/link"
export default function Footer(){
    return(
        <div>
        <footer>
<div className="grid grid-cols-1 grid-rows-1 bg-green-400 w-full h-10">
    <div className="bg-green-400 text-center text-red-800 text-lg"><Link href="/contact us">
    contact us</Link></div>
</div>
<div className="bg-green-400 text-right text-red-800 text-lg">Made By Javeria Asad</div>
</footer>
</div>
)
    }