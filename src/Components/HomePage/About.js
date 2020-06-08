import React from 'react'
import Villa from '../../Assets/PixelBased/Villa.png'
import Residential from '../../Assets/PixelBased/Residential.png'
import Hotel from '../../Assets/PixelBased/Hotel&Resort.png'
import Aquatic from '../../Assets/PixelBased/Aquatic-center.png'

function About() {
    return (
        <section className="my-20 pt-12 border-t border-black max-w-screen-xl mx-auto ">
            <h2 className="h2-title">About us</h2>
            <p className="p-6 text-center w-full md:w-2/3 m-auto">We are passionate and keen to create a lovely desired pool temperature experiences for as many pool owners and their families or their users to enjoy. We work with the team at EVOHEAT to assist you in getting the BEST pool heat pump solutions for all your pool heating or pool cooling requirements.</p>
            <ol className="flex justify-center">
                <li className="hidden md:inline">
                    <img src={Villa} className="h-56 object-cover "></img>
                    <h3 className="text-center h3-title">Villa</h3>
                </li>
                <li className="hidden md:inline">
                    <img src={Residential} className="h-56 object-cover"></img>
                    <h3 className="text-center h3-title">Residential</h3>
                </li>
                <li className="hidden md:inline">
                    <img src={Hotel} className="h-56 object-cover"></img>
                    <h3 className="text-center h3-title">Hotel & Resort</h3>
                </li>
                <li className="hidden md:inline">
                    <img src={Aquatic} className="h-56 object-cover"></img>
                    <h3 className="text-center h3-title">Aquatic center</h3>
                </li>
            </ol>
        </section>
    )
}

export default About
