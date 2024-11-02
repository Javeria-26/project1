import Link from "next/link"
export default function Makepayment(){
    return(
        <div>
            <h1 className="font-bold items-center text-2xl text-align-center ">Enter Your Details And confirm your car now</h1>
            <div>
            <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
                <input type="Name" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Name" />

<input type="number" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Contact Number" />

<input type="Text" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Car Model" />
                 

<input type="email" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Email" />



<input type="number" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Card CVV" />
                 <div>
                <Link href="/lastpage" className="w-full h-4 bg-red-700 text-white">
                <button className="w-full h-4 bg-red-700 text-white item center py-3 px-7 rounded-lg">
                    Make Payment</button></Link></div>
                
                 </form>
            </div>
        </div>
    )
}