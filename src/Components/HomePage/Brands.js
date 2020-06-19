import React from 'react'

function Brands() {
    return (
        <section className="my-20 max-w-screen-xl mx-auto ">
             <div className="flex items-center justify-center">
            <div className="hidden md:inline h-1 bg-gray w-1/3 inline"></div>
             <h2 className="text-center h2-title w-full md:w-1/4 whitespace-no-wrap">Brands</h2>
             <div className="hidden md:inline h-1 bg-gray w-1/3 inline"></div>
             </div>
            <div className="w-full flex justify-center mt-6">
                <img className="w-48 object-cover" src="https://navatech.herokuapp.com/uploads/Evoheat-logo_7db68520cf.png" alt="Evoheat logo"></img>
            </div>
        </section>
    )
}

export default Brands
