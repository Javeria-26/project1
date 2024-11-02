import Link from "next/link"
export default function PostYourAd(){
    return(
        <div>
            <h1 className="font-bold items-center text-2xl text-align-center ">Enter Your Details And register your car</h1>
            <div>
            <form className="mt-14 flex gap-5 justify-center items-center flex-col border">
                <input type="Name" className="p-2 rounded-2xl w-2/5 border border-red-800 text-black"
                 placeholder="Enter your Name" />

<input type="number" className="p-2 rounded-2xl w-2/5 border border-red-800 text-black"
                 placeholder="Enter your Contact Number" />

<input type="Text" className="p-2 rounded-2xl w-2/5 border border-red-800 text-black"
                 placeholder="Enter your Car Model" />


                <Link href="/lastpage"><button className=" py-3 px-7 rounded-lg 
                
                 bg-blue-500 text-white items-center w-full h-9">Register Your Car</button></Link>

                
                 </form>
            </div>
            
        </div>
    )
}