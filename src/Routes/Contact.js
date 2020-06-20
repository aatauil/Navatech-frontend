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
                <input type="hidden" name="contact" value="contact" />
                </div>
        </div>
    )
}

export default Contact
