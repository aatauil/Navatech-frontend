import React from 'react'
import { Link } from 'react-router-dom';
import LANDINGPAGE_QUERY from "../../Queries/LANDINGPAGE_QUERY"
import { useQuery } from "@apollo/react-hooks";



function Landing() {
    

    const { loading, error, data } = useQuery(LANDINGPAGE_QUERY);

    if (loading) return (
        <article className="p-3 pt-20 md:py-24 w-full">
        <div className="max-w-screen-xl mx-auto md:flex">
        <div className="w-full md:w-2/4 ">
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold">Pool & Spa <span className="text-red">Heating</span> and <span className="text-blue">Cooling</span> Solutions</h1>
            <p className="pt-2 md:w-3/5">Enjoy desired pool temperature experiences</p>
            <div className="bg-white shadow p-6 mt-12 w-full md:w-4/5 xl:w-3/5">
                <h2 className="font-bold text-xl text-center md:text-left">Suitable Product</h2>
                <p className=" text-sm pt-2 text-center md:text-left">Discover the perfect heating solution for your pool or spa</p>
                <Link to={'/Evaluation'} className="flex justify-center md:justify-start">
                    <button className="bg-blue hover:bg-blue-700 text-white text-sm py-2 w-2/5 mt-4 rounded-full ">Discover</button>
                </Link>
            </div>
        </div>
        </div>
    </article>
    );
    if (error) return `Error! ${error.message}`;

    return (
        <article className="p-3 pt-20 md:py-24 w-full">
            <div className="max-w-screen-xl mx-auto md:flex">
            <div className="w-full md:w-2/4 ">
                <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold">Pool & Spa <span className="text-red">Heating</span> and <span className="text-blue">Cooling</span> Solutions</h1>
                <p className="pt-2 md:w-3/5">Enjoy desired pool temperature experiences</p>
                <div className="bg-white shadow p-6 mt-12 w-full md:w-4/5 xl:w-3/5">
                    <h2 className="font-bold text-xl text-center md:text-left">Suitable Product</h2>
                    <p className=" text-sm pt-2 text-center md:text-left">Discover the perfect heating solution for your pool or spa</p>
                    <Link to={'/Evaluation'} className="flex justify-center md:justify-start">
                        <button className="bg-blue hover:bg-blue-700 text-white text-sm py-2 w-2/5 mt-4 rounded-full ">Discover</button>
                    </Link>
                </div>
            </div>
            <div className="hidden w-2/4 md:flex justify-center items-center">
                <img className="w-3/5" alt="Product" src={"https://navatech.herokuapp.com" + data.landingPage.Image.url}></img>
            </div>

            </div>
        </article>
    )
}

export default Landing
