import React from 'react'
import { Link } from 'react-router-dom';
import EVOMODELS_QUERY from "../../Queries/EVOMODELS_QUERY"
import { useQuery } from "@apollo/react-hooks";
import grayCircle from '../../Assets/VectorBased/gray-circle.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"
import Skeleton from '@yisheng90/react-loading';


function EvoModelsList() {
const { loading, error, data } = useQuery(EVOMODELS_QUERY);

if (loading) return (
    <section className="mt-20 max-w-screen-xl mx-auto">
    <div className="flex md:items-center justify-center md:justify-start">
        <h2 className="h2-title text-center p-3">Featured Products</h2>
        <div className="h-1 bg-gray flex-grow hidden md:inline"></div>
        <Link to={'/products'}> <button className="p-3 hidden md:inline text-blue">See all</button> </Link>
       
    </div>

    <ol className="p-3 flex flex-no-wrap overflow-x-auto flex-col md:items-center" >
       
            <li  className="bg-white shadow mb-3 mr-4 h-auto flex justify-end flex-col items-center w-full lg:w-4/5 p-12  flex-none md:shadow-none  md:flex-row md:my-8 " >
                <div className="md:w-1/2 h-auto">
                <Skeleton height="10rem" circle />
                </div>
                <div className="w-full flex flex-col items-center md:items-start md:w-1/2">
                    <h3 className="font-bold text-center w-4/5 md:text-left md:text-xl">loading...</h3>
                        <Skeleton width="100%" height="25px"/>
                    <div className=" flex justify-center w-full">
                    <   Skeleton width="100%" height="25px"/>
                    </div>
                </div>
            </li>
            <li className="bg-white shadow mb-3 mr-4 h-auto flex justify-end flex-col items-center w-full lg:w-4/5 p-12  flex-none md:shadow-none  md:flex-row md:my-8 " >
                <div className="md:w-1/2 h-auto">
                <Skeleton height="10rem" circle />
                </div>
                <div className="w-full flex flex-col items-center md:items-start md:w-1/2">
                    <h3 className="font-bold text-center w-4/5 md:text-left md:text-xl">loading...</h3>
                        <Skeleton width="100%" height="25px"/>
                    <div className=" flex justify-center w-full">
                    <   Skeleton width="100%" height="25px"/>
                    </div>
                </div>
            </li>
            <li  className="bg-white shadow mb-3 mr-4 h-auto flex justify-end flex-col items-center w-full lg:w-4/5 p-12  flex-none md:shadow-none  md:flex-row md:my-8 " >
                <div className="md:w-1/2 h-auto">
                <Skeleton height="10rem" circle />
                </div>
                <div className="w-full flex flex-col items-center md:items-start md:w-1/2">
                    <h3 className="font-bold text-center w-4/5 md:text-left md:text-xl">loading...</h3>
                        <Skeleton width="100%" height="25px"/>
                    <div className=" flex justify-center w-full">
                    <   Skeleton width="100%" height="25px"/>
                    </div>
                </div>
            </li>

    </ol>
</section>
);
if (error) return `Error! ${error.message}`;

var backgroundCircle = {
    backgroundImage: "url(" +  grayCircle  + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 10% ",
    backgroundSize: "30vh"
}



return (
    <section className="mt-20 max-w-screen-xl mx-auto">
    <div className="flex md:items-center justify-center md:justify-start">
        <h2 className="h2-title text-center p-3">Featured Products</h2>
        <div className="h-1 bg-gray flex-grow hidden md:inline"></div>
        <Link to={'/products'}> <button className="p-3 hidden md:inline text-blue">See all</button> </Link>
       
    </div>

    <ol className="p-3 flex flex-no-wrap overflow-x-auto flex-col md:items-center" >
        {data.evoheatModels.map(models => (
            
            <li style={backgroundCircle} className="bg-white shadow mb-3 mr-4 h-auto flex justify-end flex-col items-center w-full lg:w-4/5 pb-6 px-2 flex-none md:shadow-none  md:flex-row md:my-8 " key={models.id}>
                <div className="md:w-1/2 h-auto">
                    <img className="pt-6 pb-6 object-cover h-auto md:m-auto" src={"https://navatech.herokuapp.com" + models.Image.url} alt={models.Name} ></img>
                </div>
                <div className="w-full flex flex-col items-center md:items-start md:w-1/2">
                    <h3 className="font-bold text-center w-4/5 md:text-left md:text-xl">{models.FullName}</h3>
                    <p className="hidden md:block md:my-4">{models.Description}</p>
                    <Link to={`/products/${models.Name}`} className=" flex justify-center w-40">
                        <button className="bg-blue px-2 hover:bg-blue-700 text-white text-sm py-2 mt-4 rounded-full flex justify-around items-center w-full "> View Product <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                    </Link>
                </div>
            </li>
        ))}
    </ol>
</section>

);
}
export default EvoModelsList;