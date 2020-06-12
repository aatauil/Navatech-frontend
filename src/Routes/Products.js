import React,{useState, useRef}  from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFilter, faTimes} from "@fortawesome/free-solid-svg-icons"
import ALLPRODUCTS_QUERY from "../Queries/ALLPRODUCTS_QUERY"
import { useQuery } from "@apollo/react-hooks";
import { Link } from 'react-router-dom';


function Products() {
    const [showFilter, setShowFilter] = useState(false)
    const [modelFilter, setModelFilter] = useState()
    const [modelSuited, setSuitedFilter] = useState()
    const optionRef = useRef();

    

    const { loading, error, data, refetch } = useQuery(ALLPRODUCTS_QUERY, { variables: { $model: []} });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    // Creates Filter component -----------------------------------------

    let filter;

    if(showFilter){
        filter =
        <div className="absolute top-0 bg-white w-screen h-screen">
             <button className="px-6 py-4 bg-gray w-full" onClick={() => setShowFilter(false)}> <FontAwesomeIcon icon={faTimes}/> Close Filter</button>
                <div>Filter 1</div>
                <div>Filter 2</div>
                <div>Filter 3</div>
        </div>  
        
    }



    
    function refetchModel(e){
        refetch({model: e})
        setModelFilter(e)
    }

    function refetchSuited(e){
        refetch({suited: e})
 
    }

    return (
        <section className="my-16 container m-auto">
            <div className=" pt-4 flex justify-between m-auto items-center mb-8 md:w-full">
                <div className="">Home/Shop</div>
                <button className="px-6 py-2 bg-gray md:hidden" onClick={() => setShowFilter(true)}> <FontAwesomeIcon icon={faFilter}/> Filter</button>

            </div>
            <section className="flex flex-col h-auto md:flex-row justify-between">
                <div className="hidden md:block h-auto w-4/12 mr-6 shadow rounded p-6 ">
                    <div className=" ">
                        <h2 className="font-bold text-2xl border-b border-black ">Filter By</h2>
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-6" htmlFor="grid-state">
                            Model
                        </label>
                        <div className="relative">
                            <select onChange={(e) => refetchModel(e.target.value, e)} className="block appearance-none w-full bg-gray-200 border border-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-dark" id="grid-state">
                                <option>All</option>
                                {data.evoheatModels.map(product => (
                                    <option value={product.id} key={product.id}>{product.Name}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-6" htmlFor="grid-state">
                            Use Case
                        </label>
                        <div className="relative">
                            <select onChange={(e) => refetchSuited(e.target.value)} className="block appearance-none w-full bg-gray-200 border border-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-dark" id="grid-state">
                                <option default>All</option>
                                {data.bestSuitedFors.map(product => (
                                    <option value={product.id} key={product.id}>{product.Type}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                
                </div>
                
                <div className=" md:w-8/12 w-full">   
                    <div className="box-border hidden md:flex  justify-between">
                    <div className="px-6 py-2 bg-gray font-bold">{data.allProducts.length} Results </div> 
                        {/* <Select options={sortBy} placeholder="Sort by" className="w-64"/> */}
                    </div>
                    <div className=" grid grid-flow-row sm:grid-cols-2 m-2 h-auto gap-6 sm:my-6 ">
                        {data.allProducts.map(product => (
                            <Link to={`/Product/${product.id}`} key={product.id}>
                                <article  className="border border-black rounded flex flex-col h-full justify-end">
                                <img className="mx-auto" alt={product.Name} src={"http://localhost:1337" + product.MainImage.url}></img>
                                <h2 className="font-bold text-center text-lg py-4">{product.Name}</h2>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {filter}
        </section>
    )
}

export default Products
