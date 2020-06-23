import React from 'react'
import Villa from '../../Assets/PixelBased/Villa.png'
import Residential from '../../Assets/PixelBased/Residential.png'
import Hotel from '../../Assets/PixelBased/Hotel&Resort.png'
import Aquatic from '../../Assets/PixelBased/Aquatic-center.png'

function About() {
    return (
        <section className="my-16 py-12 bg-gray md:bg-white max-w-screen-xl mx-auto ">
           <div className="flex items-center justify-center">
            <div className="hidden md:inline h-1 bg-gray w-1/3 inline"></div>
             <h2 className="text-center h2-title w-full md:w-1/4 p-3 whitespace-no-wrap">About us</h2>
             <div className="hidden md:inline h-1 bg-gray w-1/3 inline"></div>
             </div>
            <p className="p-6 text-center w-full md:w-2/3 m-auto">We are passionate and keen to create lovely desired pool temperature experiences for as many pool owners and their families or their users to enjoy. We work with the team at EVOHEAT to assist you in getting the BEST pool heat pump solutions for all your pool heating or pool cooling requirements.</p>
            <ol className="md:flex md:justify-center grid grid-cols-2 grid-rows-auto">
                <li className="flex flex-col">
                    <img src={Villa} className="h-auto md:h-64 object-cover " alt="Villa"></img>
                    <h3 className="text-center h3-title">Villa</h3>
                </li>
                <li className="flex flex-col">
                    <img src={Residential} className="h-auto md:h-64 object-cover" alt="Residential"></img>
                    <h3 className="text-center h3-title">Residential</h3>
                </li>
                <li className="flex flex-col">
                    <img src={Hotel} className="h-auto md:h-64 object-cover" alt="Hotel"></img>
                    <h3 className="text-center h3-title">Hotel & Resort</h3>
                </li>
                <li className="flex flex-col">
                    <img src={Aquatic} className="h-auto md:h-64 object-cover" alt="Aquatic Center"></img>
                    <h3 className="text-center h3-title">Aquatic Center</h3>
                </li>
            </ol>
        </section>
    )
}

export default About
