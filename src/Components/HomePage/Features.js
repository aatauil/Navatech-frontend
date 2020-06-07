import React from 'react'
import ForceImg from "../../Assets/PixelBased/Force-Features.png"

function Features() {

    var backgroundForce = {
        backgroundImage: "url(" +  ForceImg  + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "250px"
    }

    return ( 
        <div className="text-xs my-10 flex flex-col max-w-screen-xl mx-auto ">
            <div className="flex md:items-center md:justify-center">
            <div className="h-1 bg-gray w-1/3 hidden md:inline"></div>
             <h2 className="h2-title md:w-1/4">Features</h2>
             <div className="h-1 bg-gray w-1/3 hidden md:inline"></div>
             </div>
             <div className="md:flex md:my-16">
             <ol className="text-center px-4 md:w-1/3 md:list-disc list-inside direction-rtl">
                 <li className="py-4 my-2 rounded shadow md:text-right md:shadow-none">Extremely energy efficient, C.O.P. up to 16.28</li>
                 <li className="py-4 my-2 rounded shadow md:text-right md:shadow-none">Eco-friendly and safe R32 refrigerant</li>
                 <li className="py-4 my-2 rounded shadow md:text-right md:shadow-none">Automatic defrost system</li>
                 <li className="py-4 my-2 rounded shadow md:text-right md:shadow-none">Sleek design</li>
                 <li className="py-4 my-2 rounded shadow md:text-right md:shadow-none">Guaranteed stable performance from -15°C air</li>
                 <li className="py-4 my-2 rounded shadow md:text-right md:shadow-none">Designed to work with solar PV panels</li>
             </ol>
             <div className="h-64 md:w-1/3 md:h-auto" style={backgroundForce}></div>
             <ol className="text-center px-4 md:w-1/3 md:list-disc">
                 <li className="py-4 my-2 shadow rounded md:text-left md:shadow-none">Latest full stepless inverter technology</li>
                 <li className="py-4 my-2 shadow rounded md:text-left md:shadow-none ">Heating and cooling capability</li>
                 <li className="py-4 my-2 shadow rounded md:text-left md:shadow-none">Built-in timers</li>
                 <li className="py-4 my-2 shadow rounded md:text-left md:shadow-none">Easy to use colour LCD touchscreen </li>
                 <li className="py-4 my-2 shadow rounded md:text-left md:shadow-none">Wi-Fi control</li>
                 <li className="py-4 my-2 shadow rounded md:text-left md:shadow-none"> Low noise fan blades</li>
             </ol>
             </div>
        </div>
    )
}

export default Features
