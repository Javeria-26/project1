export default function PostYourAd(){
    return(
        <div>
            <h1 className="font-bold items-center text-2xl text-align-center ">Enter Your Details And post Your Ad</h1>
            <div>
            <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
                <input type="Name" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Name" />

<input type="number" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Contact Number" />

<input type="Text" className="p-2 rounded-2xl w-2/5 border border-red-800"
                 placeholder="Enter your Car Model" />

                <button className=" py-3 px-7 rounded-lg 
                 bg-blue-500 text-white">Post Your Ad</button>
            </form>
            </div>
            
        </div>
    )
}