import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom';
import {faFacebookF,faTwitter,faInstagram,faLinkedin} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <footer className="bg-gray" >
            <div className="container pt-16 md:pb-16 mx-auto">
                <div className="grid grid-flow-row gap-4 md:grid-cols-4 xl:grid-cols-5">
                <div className=" md:border-b-0 text-center md:text-left border-black w-full">
                    <h2 className="font-bold text-2xl mb-3 ">Contact</h2>
                    <ol className="list-none mb-10">
                        <li className="pb-2">
                            hello@navatech.sg
                        </li>
                        <li>
                          +65 9336 8535
                        </li>
                    </ol>
                </div>
                <div className=" hidden xl:inline ">
                    <h2 className="font-bold text-2xl mb-3 ">Discover</h2>
                    <nav className="list-none mb-10">
                    <li className="pb-2">
                        <Link to="/products">Products</Link>
                    </li>
                    <li className="pb-2">
                        <Link to="/Evaluation">Evaluation</Link>
                    </li>
                    <li className="pb-2">
                        <Link to="/Contact">Contact</Link>
                    </li>
                    </nav>
                </div>
                <div className=" text-center md:text-left">
                    <h2 className="font-bold text-2xl mb-3 ">General</h2>
                    <ol className="list-none mb-10">
                    <li className="pb-2">
                        <a href="https://www.privacypolicygenerator.info/live.php?token=0qmYpfh0AP6509IxyvxIU1YAoi64K2hu" className="hover:text-gray-800">Privacy Policy</a>
                    </li>
                    <li className="pb-2">
                        <a href="https://www.cookiepolicygenerator.com/live.php?token=sGu3ylS76xXAgHh1cbky4TF7JhFwii9v" className="hover:text-gray-800">Cookie Policy</a>
                    </li>
                    </ol>
                </div>
                <div className=" hidden md:inline col-span-2">
                    <h2 className="font-bold text-2xl mb-3">Newsletter</h2>
                    <div className="list-none mb-10">
                    <p>Subscribe to our newsletter and receive product news and promotions</p>
                    <form name="newsletter" method="POST" data-netlify="true" className="mt-4 flex ">
                        <input type='hidden' name='form-name' value='newsletter' />
                        <input required className="w-full w-40 bg-white mr-4 text-base py-2 px-4" placeholder="E-mail" type="email" />
                        <input type="submit" className="inline-flex text-white bg-black py-2 px-6 " value="Subscribe"></input>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="border border-black py-6 px-2">
                <div className="container flex justify-center md:justify-between items-center mx-auto">
                
                <div className="inline-flex justify-center md:justify-start md:w-auto text-xl">
                    <a href="https://facebook.com" className="text-gray-500 bg-white px-4 py-2 text-blue" >
                        <FontAwesomeIcon icon={faFacebookF}/>
                    </a>
                    <a href="https://twitter.com" className="hidden ml-3 text-gray-500 bg-white px-4 py-2  text-blue">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                    <a href="https://instagram.com" className="hidden ml-3 text-gray-500 bg-white px-4 py-2">
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a href="https://linkedin.com" className="ml-3 text-gray-500 bg-white px-4 py-2 text-blue">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </div>
                <a href="/" className="hidden md:block text-gold md:text-lg font-bold bg-white px-4 py-2" >NAVATECH</a>
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
