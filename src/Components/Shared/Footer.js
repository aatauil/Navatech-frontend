import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF,faTwitter,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className="bg-gray" >
            <div className="container pt-16 md:pb-16 mx-auto">
                <div className="flex md:flex-grow flex-col md:flex-row">
                <div className="xl:w-1/5 px-4  md:border-b-0 md:w-1/3 text-center md:text-left mb-6 border-black w-full">
                    <h2 className="font-bold text-2xl mb-3 ">Contact</h2>
                    <ol className="list-none mb-10">
                        <li className="pb-2">
                            <a className="hover:text-gray-800 ">E: hello@navatech.sg</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-800">Mob:  +65 9336 8535</a>
                        </li>
                    </ol>
                </div>
                <div className=" w-1/5 px-4 border-l-2 border-black hidden xl:inline ">
                    <h2 className="font-bold text-2xl mb-3 ">Discover</h2>
                    <nav className="list-none mb-10">
                    <li className="pb-2">
                        <a className="hover:text-gray-800">Products</a>
                    </li>
                    <li className="pb-2">
                        <a className="hover:text-gray-800">Evaluation</a>
                    </li>
                    <li className="pb-2">
                        <a className="hover:text-gray-800">Contact</a>
                    </li>
                    </nav>
                </div>
                <div className="w-full md:w-1/3 xl:w-1/5 px-4 md:border-l-2 border-black text-center md:text-left">
                    <h2 className="font-bold text-2xl mb-3 ">General</h2>
                    <ol className="list-none mb-10">
                    <li className="pb-2">
                        <a className="hover:text-gray-800">Terms & Services</a>
                    </li>
                    <li className="pb-2">
                        <a className="hover:text-gray-800">Privacy Policy</a>
                    </li>
                    <li className="pb-2">
                        <a className="hover:text-gray-800">Cookie Policy</a>
                    </li>
                    </ol>
                </div>
                <div className="xl:w-1/3 px-4 md:border-l-2 border-black 2/3 hidden md:inline">
                    <h2 className="font-bold text-2xl mb-3">Newsletter</h2>
                    <div className="list-none mb-10">
                    <p>Subscribe to our newsletter and receive product news and promotions</p>
                    <div className="mt-4 flex ">
                        <input className="w-full w-40 bg-white mr-4 text-base py-2 px-4" placeholder="E-mail" type="text" />
                        <button className="inline-flex text-white bg-black py-2 px-6 ">Subscribe</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="border border-black py-6 px-2">
                <div className="container flex justify-center md:justify-between items-center mx-auto">
                
                <div className="inline-flex justify-center md:justify-start md:w-auto text-xl">
                    <a className="text-gray-500 bg-white px-4 py-2 text-blue">
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                    <a className="ml-3 text-gray-500 bg-white px-4 py-2  text-blue">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a className="ml-3 text-gray-500 bg-white px-4 py-2">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a className="ml-3 text-gray-500 bg-white px-4 py-2 text-blue">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>
                <a href="#" className="hidden md:block text-gold md:text-lg font-bold bg-white px-4 py-2" >NAVATECH</a>
                </div>
            </div>
        <div className="">
            <div className=" bg-white py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
            <p className=" text-sm text-center sm:text-left max-w-screen-xl mx-auto">©2020 NAVA TECH.</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer
