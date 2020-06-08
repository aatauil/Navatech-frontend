import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTimes , faArrowsAltH} from "@fortawesome/free-solid-svg-icons"
import CreatableSelect from 'react-select/creatable';

function PoolEvalutation() {

    const countryOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <section className="my-16 container m-auto">
            <h1 className="h1-title mb-6">POOL HEATING EVALUATION</h1>
            <form>
                <article className="p-12 border-2 border-dark">
                    <h2 className="h3-title text-left border-b-2 border-black">
                        Pool Information
                    </h2>
                    <div className="grid grid-flow-row  grid-cols-1 xl:grid-cols-2 py-6">
                        <div className="mt-12">
                        <fieldset>
                            <legend className="font-bold">What is your pool dimensions: (m³)</legend>
                            <div className="my-4">
                                <label for="dimension-length" className="hidden"></label>
                                <input type="number" id="dimension-length" name="dimension-length" className="p-6 mx-2 w-32 h-12 bg-gray" placeholder="Lentgh"></input>
                                <FontAwesomeIcon icon={faTimes}/>
                                <label for="dimension-width" className="hidden"></label>
                                <input type="number" id="dimension-width" name="dimension-width" className="p-6 mx-2 w-32 h-12  bg-gray" placeholder="Width"></input>
                                <FontAwesomeIcon icon={faTimes}/>
                                <label for="dimension-depth" className="hidden"></label>
                                <input type="number" id="dimension-depth" name="dimension-depth"  className="p-6 mx-2 w-32 h-12  bg-gray" placeholder="Depth"></input>
                            </div> 
                        </fieldset>
                        </div>
                        <div className="mt-12">
                            <label className="font-bold" for="pool-area">What is your pool area:</label>
                            <div className="my-4">
                                <input type="number" name="pool-area" id="pool-area" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className="text-xl"> m²</span>
                            </div> 

                        </div>
                        <div className="mt-12">
                            <label className="font-bold">Is your pool an indoor/outdoor pool:</label>
                            <div className="my-4">
                                <input type="radio" className="mr-2" name="in-outdoor" id="indoor" value="indoor"></input>
                                <label className="mr-6" for="indoor">Indoor</label>
                                <input type="radio" className="mr-2" name="in-outdoor" id="outdoor" value="outdoor"></input>
                                <label for="outdoor">Outdoor</label>
                            </div> 

                        </div>
                        <div className="mt-12">
                            <label className="font-bold" for="volume">What is your pool volume:</label>
                            <div className="my-4">
                                <input type="number" name="volume" id="volume" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className="text-xl"> m³</span>
                            </div> 

                        </div>
                        <div className="mt-12">
                            <label className="font-bold" for="shade">Percentage shade over the pool:</label>
                            <div className="my-4">
                                <input type="number" name="shade" id="shade" className="p-6 mr-2 w-32 h-12 bg-gray"></input><span className="text-xl">%</span>
                            </div> 
                        </div>
                        <div className="mt-12">
                        <fieldset>
                            <legend className="font-bold">What is your infinity edge or overflow or waterfall dimensions: (m³)</legend>
                            <div className="my-4">
                                <label for="dimension-length" className="hidden"></label>
                                <input type="number" id="dimension-length" name="length" className="p-6 mx-2 w-32 h-12 bg-gray" placeholder="Lentgh"></input>
                                <FontAwesomeIcon icon={faTimes}/>
                                <label for="dimension-width" className="hidden"></label>
                                <input type="number" id="dimension-width" name="width" className="p-6 mx-2 w-32 h-12  bg-gray" placeholder="Width"></input>
                                <input type="checkbox" className="mx-4" id="no-overflow"></input>
                                <label className="my-4" name="no-overflow" for="no-overflow">Not Applicable</label>
                            </div> 
                        </fieldset>
                        </div>
                        <div className="mt-12">
                            <label className="font-bold">Do you use a pool cover daily after usage:</label>
                            <div className="my-4">
                                <input type="radio" className="mr-2" name="pool-cover" id="cover-yes" value="cover-yes"></input>
                                <label className="mr-6" for="cover-yes">Yes</label>
                                <input type="radio" className="mr-2" name="pool-cover" id="cover-no" value="cover-no"></input>
                                <label for="cover-no">No</label>
                            </div> 

                        </div>
                        <div className="mt-12">
                            <label className="font-bold" for="pool-users">What is the number of pool users per day:</label>
                            <div className="my-4">
                                <input type="number" name="pool-users" id="pool-users" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className=""> Users</span>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold">What is your pool colour:</label>
                            <div className="my-4">
                                <input type="radio" className="mr-2" name="pool-color" id="color-light" value="color-light"></input>
                                <label className="mr-6" for="color-light">Light</label>
                                <input type="radio" className="mr-2" name="pool-color" id="color-dark" value="color-dark"></input>
                                <label for="color-dark">Dark</label>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold" for="temperature">What is your desired pool temperature:</label>
                            <div className="my-4">
                                <input type="number" name="temperature" id="temperature" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className="">Degrees Celsius</span>
                            </div> 
                        </div>
                        <div className="mt-12">
                        <fieldset>
                            <legend className="font-bold">What are your pool operating hours:</legend>
                            <div className="my-4">
                                <label for="pm" className="hidden"></label>
                                <input type="number" id="am" name="am" className="p-6 mx-2 w-32 h-12 bg-gray" placeholder="am"></input>
                                <FontAwesomeIcon icon={faArrowsAltH}/>
                                <label for="pm" className="hidden"></label>
                                <input type="number" id="pm" name="pm" className="p-6 mx-2 w-32 h-12  bg-gray" placeholder="pm"></input>
            
                            </div> 
                        </fieldset>
                        </div>
                        <div className="mt-12">
                            <label className="font-bold">What is water pump & filtration system operational timing:</label>
                            <div className="my-4">
                                <input type="radio" className="mr-2" name="filtration" id="twelve" value="twelve"></input>
                                <label className="mr-6" for="twelve">12 hours</label>
                                <input type="radio" className="mr-2" name="filtration" id="twenty-four" value="twenty-four"></input>
                                <label className="mr-6" for="twenty-four" >24 hours</label>
                                <input type="radio" className="mr-2" name="filtration" id="seven-to-ten" value="seven-to-ten"></input>
                                <label for="seven-to-ten" >7am-10pm</label>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold">What is the wind effect:</label>
                            <div className="my-4">
                                <input type="radio" className="mr-2" name="wind-effect" id="sheltered" value="sheltered"></input>
                                <label className="mr-6" for="sheltered">Sheltered No Wind</label>
                                <input type="radio" className="mr-2" name="wind-effect" id="suburban" value="suburban"></input>
                                <label className="mr-6" for="suburban" >Normal Suburban</label>
                                <input type="radio" className="mr-2" name="wind-effect" id="high-wind" value="high-wind"></input>
                                <label for="high-wind" >High Wind</label>
                            </div> 
                        </div>
                        <div className="mt-12">
                            <label className="font-bold" for="electricity">What is your electricity tariff rate:</label>
                            <div className="my-4">
                                <input type="number" name="electricity" id="electricity" className="p-6 mr-2 w-32 h-12 bg-gray" ></input><span className="">cents USD per kWh</span>
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
                                <label className="font-bold" for="electricity">Name:</label>
                                <div className="my-4">
                                    <input type="number" name="electricity" id="electricity" className="p-6 mr-2 w-full h-12 bg-gray" ></input>
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
                        <div className="mt-6">
                                <label className="font-bold" for="country">Country:</label>
                                <div className="my-4">
                                <CreatableSelect className="mr-2  h-12 "  isClearable  options={countryOptions}/>
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


            </form>
        </section>
    )
}

export default PoolEvalutation
