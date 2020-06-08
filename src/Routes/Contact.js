import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt , faArrowsAltH} from "@fortawesome/free-solid-svg-icons"

function Contact() {
    return (
        <div>
             <h1 className="h1-title my-12">Contact</h1>

             <div className="flex justify-center flex-wrap">
                 <div className="flex justify-around m-2 flex-col border rounded p-16 w-2/5 border-black">
                 <span className=" text-4xl text-center"><FontAwesomeIcon  icon={faMapMarkerAlt}/></span>
                    <h2 className="h2-title">Reach Us</h2>
                    <div>
                        <p className="text-center">Hello@navatch.sg</p>
                        <p className="text-center">+65 9336 8535</p>
                    </div>
                 </div>
                 <div className="border rounded w-2/5 m-2 border-black p-16 flex flex-col justify-center align-center">
                     <span className=" text-4xl text-center"><FontAwesomeIcon  icon={faMapMarkerAlt}/></span>
                    
                    <h2 className="h2-title">Availability</h2>
                    <p>Monday - Friday: 9.am - 5.30 pm</p>
                 </div>
             </div>
             <article className="mt-6 border p-12 border-black w-4/5 m-auto">
                     <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 col-gap-20 py-6">
                        <div className="mt-6">
                                <label className="font-bold" for="first-name">First Name:</label>
                                <div className="my-4">
                                    <input type="text" name="first-name" id="first-name" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" for="electricity">Last Name:</label>
                                <div className="my-4">
                                    <input type="number" name="last-name" id="last-name" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" for="electricity">Phone Number:</label>
                                <div className="my-4">
                                    <input type="tel" name="phone-number:" id="phone-number:" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" for="email">E-mail:</label>
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
                         <label for="privacy" className="font-bold">I have read and agreed to the privacy policy of NAVATECH.</label>
                     </div>
                     <div className="w-full flex justify-center mt-12">
                     <input type="submit" className=" px-24 py-4 bg-blue text-white font-bold"></input>
                     </div>
                </article>
        </div>
    )
}

export default Contact
