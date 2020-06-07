import React from 'react'
import EVOMODELS_QUERY from "../../Queries/EVOMODELS_QUERY"
import { useQuery } from "@apollo/react-hooks";
import grayCircle from '../../Assets/VectorBased/gray-circle.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"


function EvoModelsList() {
const { loading, error, data } = useQuery(EVOMODELS_QUERY);

if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;

var backgroundCircle = {
    backgroundImage: "url(" +  grayCircle  + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 10% ",
    backgroundSize: "200px"
}



return (
    <section className="mt-20 max-w-screen-xl mx-auto">
    <div className="flex md:items-center md:justify-start">
        <h2 className="h2-title text-left p-3">Featured Products</h2>
        <div className="h-1 bg-gray flex-grow hidden md:inline"></div>
        <button className="p-3 text-blue">See all</button>
    </div>

    <ol className="p-3 pr-6 flex flex-no-wrap overflow-x-auto md:flex-col md:items-center" >
        {data.evoheatModels.map(models => (
            
            <li style={backgroundCircle} className="bg-white shadow mb-3 mr-4 h-auto flex justify-end flex-col items-center w-3/5 lg:w-4/5 pb-6 px-2 flex-none md:shadow-none  md:flex-row md:my-16 " key={models.id}>
                <div className="md:w-1/2 h-auto">
                    <img key={models.id} className="pt-6 pb-6 object-cover h-auto md:m-auto" src={"http://localhost:1337" + models.Image.url} ></img>
                </div>
                <div className="w-full flex flex-col items-center md:items-start md:w-1/2">
                    <h3 className="font-bold text-center w-4/5 md:text-left md:text-xl">{models.FullName}</h3>
                    <p className="hidden md:block md:my-4">{models.Description}</p>
                    <button className=" bg-blue hover:bg-blue-700 text-white text-sm py-2 w-3/5 mt-4 rounded-full flex justify-around items-center md:w-1/3">View Product <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                </div>
            </li>
        ))}
    </ol>
</section>

);
}
export default EvoModelsList;