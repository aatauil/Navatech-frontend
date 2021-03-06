import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTimes , faArrowsAltH} from "@fortawesome/free-solid-svg-icons"
import countries from '../Assets/JSON/countries';

function PoolEvalutation() {
    return (
        <section className="p-3 my-16 container m-auto">
            <h1 className="h1-title mb-6">POOL <span className="text-red">HEATING</span>  EVALUATION</h1>
            <form name="pool-evaluation" method="POST" action="/Thankyou" data-netlify="true">
                <input type='hidden' name='form-name' value='pool-evaluation' />
                <article className="p-12 border-2 border-dark">
                    <h2 className="h3-title text-left border-b-2 border-black">
                        Pool Information
                    </h2>
                    <div className="grid grid-flow-row  grid-cols-1 xl:grid-cols-2 py-6">
                        <div className="mt-12">
                        <fieldset>
                            <legend className="font-bold">What is your pool dimensions: (m)</legend>
                            <div className="my-4">
                                <label htmlFor="dimension-length" className="hidden"></label>
                                <input type="number" min="0" step="0.1" id="dimension-length" name="dimension-length" className="ml-0 p-6  md:w-32 md:h-12 bg-gray mb-2 h-4 w-full" placeholder="Lentgh"></input>
                                <FontAwesomeIcon icon={faTimes} className="hidden md:inline mx-2"/>
                                <label htmlFor="dimension-width" className="hidden"></label>
                                <input type="number" min="0" step="0.1"  id="dimension-width" name="dimension-width" className="ml-0 p-6  md:w-32 md:h-12  bg-gray mb-2  h-4 w-full" placeholder="Width"></input>
                                <FontAwesomeIcon icon={faTimes} className="hidden md:inline mx-2"/>
                                <label htmlFor="dimension-depth" className="hidden"></label>
                                <input type="number" min="0" step="0.1"  id="dimension-depth" name="dimension-depth"  className="ml-0 p-6  md:w-32 md:h-12  bg-gray mb-2  h-4 w-full" placeholder="Depth"></input>
                                <div className="mt-6">                                
                                    <input type="checkbox" className="mx-4" id="no-overflow"></input>
                                    <label className="my-4" name="no-overflow" htmlFor="no-overflow">Free form pool</label>
                                </div>

                            </div> 
                        </fieldset>
                        </div>
                        <div className="mt-12">
                            <label className="font-bold" htmlFor="pool-area">What is your pool area:</label>
                            <div className="my-4">
                                <input type="number" min="0" name="pool-area" id="pool-area" required="true" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className="text-xl"> m²</span>
                            </div> 

                        </div>
                        <div className="mt-12">
                            <label className="font-bold" htmlFor="volume">What is your pool volume:</label>
                            <div className="my-4">
                                <input type="number" min="0" name="volume" id="volume" required="true" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className="text-xl"> m³</span>
                            </div> 

                        </div>
                        <div className="mt-12">
                            <label className="font-bold">Is your pool an indoor/outdoor pool:</label>
                            <div className="my-4">
                                <input type="radio" className="mr-2" name="in-outdoor" id="indoor" required="true" value="indoor"></input>
                                <label className="mr-6" htmlFor="indoor">Indoor</label>
                                <input type="radio" className="mr-2" name="in-outdoor" id="outdoor" required="true" value="outdoor"></input>
                                <label htmlFor="outdoor">Outdoor</label>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold" htmlFor="shade">Percentage shade over the pool:</label>
                            <div className="my-4">
                                <input type="number" min="0" max="100"  name="shade" id="shade" required="true" className="p-6 mr-2 w-32 h-12 bg-gray"></input><span className="text-xl">%</span>
                            </div> 
                        </div>
                        <div className="mt-12">
                        <fieldset>
                            <legend className="font-bold">What is your infinity edge or overflow or waterfall dimensions: (m)</legend>
                            <div className="my-4">
                                <label htmlFor="overflow-length" className="hidden"></label>
                                <input type="number" step="0.1"  min="0" id="overflow-length" name="length" className="p-6 mx-2 w-32 h-12 bg-gray" placeholder="Lentgh"></input>
                                <FontAwesomeIcon icon={faTimes}/>
                                <label htmlFor="overflow-width" className="hidden"></label>
                                <input type="number" step="0.1"  min="0" id="overflow-width" name="width"  className="p-6 mx-2 w-32 h-12  bg-gray" placeholder="Width"></input>
                                <div>
                                    <input type="checkbox" className="mt-6 mx-4"  id="no-overflow"></input>
                                    <label className="mt-6" name="no-overflow" htmlFor="no-overflow">Not Applicable</label>
                                </div>
                            </div> 
                        </fieldset>
                        </div>
                        <div className="mt-12">
                            <label className="font-bold">Do you use a pool cover daily after usage:</label>
                            <div className="my-4">
                                <input type="radio" className="mr-2" name="pool-cover" required="true" id="cover-yes" value="cover-yes"></input>
                                <label className="mr-6" htmlFor="cover-yes">Yes</label>
                                <input type="radio" className="mr-2" name="pool-cover" required="true" id="cover-no" value="cover-no"></input>
                                <label htmlFor="cover-no">No</label>
                            </div> 

                        </div>
                        <div className="mt-12">
                            <label className="font-bold" htmlFor="pool-users">What is the number of pool users per day:</label>
                            <div className="my-4">
                                <input type="number" min="0" name="pool-users" id="pool-users" required="true" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className=""> Users</span>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold">What is your pool colour:</label>
                            <div className="my-4">
                                <input type="radio" className="mr-2" name="pool-color" required="true" id="color-light" value="color-light"></input>
                                <label className="mr-6" htmlFor="color-light">Light</label>
                                <input type="radio" className="mr-2" name="pool-color" required="true" id="color-dark" value="color-dark"></input>
                                <label htmlFor="color-dark">Dark</label>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold" htmlFor="temperature">What is your desired pool temperature:</label>
                            <div className="my-4">
                                <input type="number" min="0" name="temperature" id="temperature" required="true" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className="">Degrees Celsius</span>
                            </div> 
                        </div>
                        <div className="mt-12">
                        <fieldset>
                            <legend className="font-bold">What are your pool operating hours:</legend>
                            <div className="my-4">
                                <label htmlFor="pm" className="hidden"></label>
                                <input type="number" min="0" max="12" id="am" name="am" required="true" className="p-6 mx-2 w-32 h-12 bg-gray" placeholder="am"></input>
                                <FontAwesomeIcon icon={faArrowsAltH}/>
                                <label htmlFor="pm" className="hidden"></label>
                                <input type="number" min="0" max="12" id="pm" name="pm" required="true" className="p-6 mx-2 w-32 h-12  bg-gray" placeholder="pm"></input>
            
                            </div> 
                        </fieldset>
                        </div>
                        <div className="mt-12">
                            <label className="font-bold">What is water pump & filtration system operational timing:</label>
                            <div className="my-4">
                                <div className="block md:inline">
                                    <input type="radio" className="mr-2" name="filtration" required="true" id="twelve" value="twelve"></input>
                                    <label className="mr-6 whitespace-no-wrap" htmlFor="twelve">12 hours</label>
                                </div>
                                <div className="block md:inline">
                                    <input type="radio" className="mr-2" name="filtration" required="true" id="twenty-four" value="twenty-four"></input>
                                    <label className="mr-6 whitespace-no-wrap" htmlFor="twenty-four" >24 hours</label>
                                </div>
                                <div className="block md:inline">
                                    <input type="radio" className="mr-2" name="filtration" required="true" id="seven-to-ten" value="seven-to-ten"></input>
                                    <label htmlFor="seven-to-ten whitespace-no-wrap" >7am-10pm</label>
                                </div>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold">What is the wind effect:</label>
                            <div className="my-4">
                                <div className="block md:inline">
                                    <input type="radio" className="mr-2" name="wind-effect" required="true" id="sheltered" value="sheltered"></input>
                                    <label className="mr-6" htmlFor="sheltered">Sheltered No Wind</label>
                                </div>
                                <div className="block md:inline">
                                    <input type="radio" className="mr-2" name="wind-effect" required="true" id="suburban" value="suburban"></input>
                                    <label className="mr-6" htmlFor="suburban" >Normal Suburban</label>
                                </div>
                                <div className="block md:inline">
                                    <input type="radio" className="mr-2" name="wind-effect" required="true" id="high-wind" value="high-wind"></input>
                                    <label htmlFor="high-wind" >High Wind</label>
                                </div>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold" htmlFor="electricity">What is your electricity tariff rate:</label>
                            <div className="my-4">
                                <input type="number" min="0" name="electricity" id="electricity" required="true" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className="">cents USD per kWh</span>
                            </div> 
                        </div>
                    </div>
                </article>
                <article className="mt-6 border-2 p-12 border-dark">
                    <h2 className="h3-title text-left border-b-2 border-black">
                    Personal Information
                    </h2>
                    <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 col-gap-20 py-6">
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="first-name">First Name:</label>
                                <div className="my-4">
                                    <input type="text" name="first-name" id="first-name" required="true" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="last-name">Last Name:</label>
                                <div className="my-4">
                                    <input type="text" min="0" name="last-name" id="last-name" required="true" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="electricity">Phone Number:</label>
                                <div className="my-4">
                                    <input type="tel" name="phone-number:" id="phone-number:" required="true" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="email">E-mail:</label>
                                <div className="my-4">
                                    <input type="e-mail" name="email" id="email" required="true" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        
                        <div className="mt-6">
                                <label className="font-bold" htmlFor="location">Pool Location (State/City): </label>
                                <div className="my-4">
                                    <input type="text" name="location" id="location" required="true" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
                                </div> 
                        </div>
                        <div className="mt-6">
                        <label className="font-bold" htmlFor="country">Country:</label>
                            <div className="relative">
                                <select required="true" className="my-4 block cursor-pointer appearance-none w-full bg-gray-200 border border-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-dark" id="grid-state">
                                    <option>Select your country</option>
                                    {countries.map(country => (
                                        <option value={country} key={country}>{country}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>     
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <label className="font-bold">Message:</label>
                        <textarea required="true" className="bg-gray p-3 my-4 h-64"></textarea>
                    </div>
                    <div className="flex justify-center items-center my-6">
                        <input type="checkbox" id="privacy" required="true" name="privacy" className="mr-4"></input>
                        <label htmlFor="privacy" className="font-bold">I have read and agreed to the privacy policy of NAVATECH.</label>
                    </div>
                    <div className="w-full flex justify-center mt-12">
                        <input type="submit" required="true" className=" px-24 py-4 bg-blue text-white font-bold"></input>
                    </div>
                </article>
            </form>
        </section>
    )
}

export default PoolEvalutation
