import React from 'react'

function Partners() {
    return (
        <section className="my-20 max-w-screen-xl mx-auto ">
             <div className="flex items-center justify-center">
            <div className="hidden md:inline h-1 bg-gray w-1/3 inline"></div>
             <h2 className="text-left h2-title w-full md:w-1/4 p-3 whitespace-no-wrap">Partners</h2>
             <div className="hidden md:inline h-1 bg-gray w-1/3 inline"></div>
             </div>
            <ol className="md:flex md:justify-center grid grid-cols-2 grid-rows-auto">
                <li className="flex flex-col">
                    <h3 className="text-center h3-title">Villa</h3>
                </li>
                <li className="flex flex-col">
            
                    <h3 className="text-center h3-title">Residential</h3>
                </li>
                <li className="flex flex-col">
                   
                    <h3 className="text-center h3-title">Hotel & Resort</h3>
                </li>
                <li className="flex flex-col">
  
                    <h3 className="text-center h3-title">Aquatic Center</h3>
                </li>
            </ol>
        </section>
    )
}

export default Partners
