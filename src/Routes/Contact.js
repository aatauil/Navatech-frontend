import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

function Contact() {
    return (
        <div className="p-3 my-6 container m-auto">
             <h1 className="h1-title my-12">Contact</h1>
            <div className="grid gap-2 md:gap-6 grid-cols-none md:grid-cols-2 ">
                 <div className="border rounded  w-full border-black p-16 flex flex-col justify-center align-center">
                 <span className=" text-4xl text-center text-red"><FontAwesomeIcon  icon={faMapMarkerAlt}/></span>
                    <h2 className="h2-title text-red">Reach Us</h2>
                    <div>
                        <p className="text-center">hello@navatech.sg</p>
                        <p className="text-center">+65 9336 8535</p>
                    </div>
                 </div>
                 <div className="border rounded  w-full border-black p-16 flex flex-col justify-center align-center">
                     <span className=" text-4xl text-center text-blue"><FontAwesomeIcon  icon={faMapMarkerAlt}/></span>
                    
                    <h2 className="h2-title text-blue">Availability</h2>
                    <p className="text-center ">Monday - Friday: <br></br> 9 am - 6 pm</p>
                </div>
                <form name="Contact Form" method="POST" data-netlify="true" className=" border w-full p-12 border-black row-span-2 col-span-1 md:col-span-2 m-auto mb-16">
                    <div className="grid  grid-cols-1 md:grid-cols-2 col-gap-20 py-6">
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="first-name">First Name:</label>
                                <div className="my-4">
                                    <input type="text" name="first-name" id="first-name" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="electricity">Last Name:</label>
                                <div className="my-4">
                                    <input type="number" name="last-name" id="last-name" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="electricity">Phone Number:</label>
                                <div className="my-4">
                                    <input type="tel" name="phone-number:" id="phone-number:" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="email">E-mail:</label>
                                <div className="my-4">
                                    <input type="e-mail" name="email" id="email" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                     </div>
                     <div className="mt-6 flex flex-col">
                        <label className="font-bold">Message:</label>
                        <textarea className="bg-gray  my-4 h-64"></textarea>
                     </div>
                     <div className="flex justify-center items-center my-6">
                         <input type="checkbox" id="privacy" name="privacy" className="mr-4"></input>
                         <label htmlFor="privacy" className="font-bold">I have read and agreed to the privacy policy of NAVATECH.</label>
                     </div>
                     <div className="w-full flex justify-center mt-12">
                     <input type="submit" className=" px-24 py-4 bg-blue text-white font-bold"></input>
                     </div>
                </form>
                </div>
        </div>
    )
}

export default Contact
