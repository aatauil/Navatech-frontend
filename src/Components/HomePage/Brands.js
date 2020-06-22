import React from 'react'
import evoheat from '../../Assets/PixelBased/evoheat.webp'

function Brands() {
    return (
        <section className="my-20 max-w-screen-xl mx-auto ">
             <div className="flex items-center justify-center">
            <div className="hidden md:inline h-1 bg-gray w-1/3 inline"></div>
             <h2 className="text-center h2-title w-full md:w-1/4 whitespace-no-wrap">Brands</h2>
             <div className="hidden md:inline h-1 bg-gray w-1/3 inline"></div>
             </div>
            <div className="w-full mt-6">
                <img src={evoheat} className="m-auto h-24 md:h-32 object-cover " alt="Evoheat logo"></img>
            </div>
        </section>
    )
}

export default Brands
