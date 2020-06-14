import React from 'react'
import { Link } from 'react-router-dom';
import LANDINGPAGE_QUERY from "../../Queries/LANDINGPAGE_QUERY"
import { useQuery } from "@apollo/react-hooks";


function Landing() {
    const { loading, error, data } = useQuery(LANDINGPAGE_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <article className="p-3 pt-20 md:py-24 w-full">
            <div className="max-w-screen-xl mx-auto md:flex">
            <div className="w-4/5 md:w-2/4 ">
                <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold">Pool and Spa <span className="text-red">Heating</span> & <span className="text-blue">Cooling</span> Solution.</h1>
                <p className="pt-2 md:w-3/5">You deserve a pool with the desired temperature experience.</p>
                <div className="hidden md:block bg-white shadow p-6 mt-6 w-full md:w-3/5">
                    <h2 className="font-bold text-xl">Suitable Product</h2>
                    <p className="font-bold text-sm pt-2">Discover the perfect heating solution for your pool or spa</p>
                    <Link to={'/Evaluation'}>
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
