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
        <div className="hidden md:block text-xs md: text-md my-10 flex flex-col max-w-screen-xl mx-auto ">
            <div className="flex items-center justify-center">
            <div className="h-1 bg-gray w-1/3 inline"></div>
             <h2 className="text-center h2-title w-1/4 p-3 ">Features</h2>
             <div className="h-1 bg-gray w-1/3 inline"></div>
             </div>
             <div className="md:flex md:my-16">
             <ol className="text-center px-4 md:w-1/3 md:list-disc list-inside direction-rtl">
                 <li className="py-2 my-2 rounded border md:text-right md:border-none">Extremely energy efficient, C.O.P. up to 16.28</li>
                 <li className="py-2 my-2 rounded border md:text-right md:border-none">Eco-friendly and safe R32 refrigerant</li>
                 <li className="py-2 my-2 rounded border md:text-right md:border-none">Automatic defrost system</li>
                 <li className="py-2 my-2 rounded border md:text-right md:border-none">Sleek design</li>
                 <li className="py-2 my-2 rounded border md:text-right md:border-none">Guaranteed stable performance from -15°C air</li>
                 <li className="py-2 my-2 rounded border md:text-right md:border-none">Designed to work with solar PV panels</li>
             </ol>
             <div className="h-64 md:w-1/3 md:h-auto" style={backgroundForce}></div>
             <ol className="text-center px-4 md:w-1/3 md:list-disc">
                 <li className="py-2 my-2 border rounded md:text-left md:border-none">Latest full stepless inverter technology</li>
                 <li className="py-2 my-2 border rounded md:text-left md:border-none ">Heating and cooling capability</li>
                 <li className="py-2 my-2 border rounded md:text-left md:border-none">Built-in timers</li>
                 <li className="py-2 my-2 border rounded md:text-left md:border-none">Easy to use colour LCD touchscreen </li>
                 <li className="py-2 my-2 border rounded md:text-left md:border-none">Wi-Fi control</li>
                 <li className="py-2 my-2 border rounded md:text-left md:border-none"> Low noise fan blades</li>
             </ol>
             </div>
        </div>
    )
}

export default Features
