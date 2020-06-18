import React,{useState, useRef}  from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import FILTERITEMS_QUERY from "../Queries/FILTERITEMS_QUERY"
import { useQuery } from "@apollo/react-hooks";
import ProductsList from '../Components/ProductsPage/productsList';

function Products(props) {
    const [showFilter, setShowFilter] = useState(false)
    const childRef = useRef();

    const { loading, error, data} = useQuery(FILTERITEMS_QUERY);


    if (loading) return (
        <section className="my-16 container m-auto">
            <div className="p-3 flex justify-between m-auto items-center mb-8 md:w-full">
                <div className="">Home/Shop</div>
                <button className="px-6 py-2 bg-gray md:hidden" onClick={() => setShowFilter(true)}> <FontAwesomeIcon icon={faFilter}/> Filter</button>
            </div>
            <section className="flex flex-col h-auto md:flex-row justify-between">
            <div className="hidden md:block h-auto w-4/12 mr-6 shadow rounded p-6 ">
                    <div className="">
                        <h2 className="font-bold text-2xl border-b border-black">Filter By</h2>
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-6" htmlFor="grid-state">
                            Model
                        </label>
                        <div className="relative">
                            <select className="block cursor-not-allowed appearance-none w-full bg-gray border border-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-dark" id="grid-state">
                                <option>All</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-6" htmlFor="grid-state">
                            Use Case
                        </label>
                        <div className="relative">
                            <select className="block cursor-not-allowed appearance-none w-full bg-gray border border-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-dark" id="grid-state">
                                <option>All</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <ProductsList ref={childRef} />

                
            </section>
        </section>
    );
    if (error) return `Error! ${error.message}`;

    return (
        <section className="my-16 container m-auto">
            <div className=" p-3 flex justify-between m-auto items-center mb-8 md:w-full">
                <div className="">Home/Shop</div>
                <button className="px-6 py-2 bg-gray md:hidden" onClick={() => setShowFilter(true)}> <FontAwesomeIcon icon={faFilter}/> Filter</button>
            </div>
            <section className="flex flex-col h-auto md:flex-row justify-between">
            <div className="hidden md:block h-auto w-4/12 mr-6 shadow rounded p-6 ">
                    <div className="">
                        <h2 className="font-bold text-2xl border-b border-black">Filter By</h2>
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2 mt-6" htmlFor="grid-state">
                            Model
                        </label>
                        <div className="relative">
                            <select onChange={(e) => childRef.current.refetchModel(e.target.value)}  className="block cursor-pointer appearance-none w-full bg-gray-200 border border-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-dark" id="grid-state">
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
                            <select onChange={(e) => childRef.current.refetchSuited(e.target.value)} className="block cursor-pointer appearance-none w-full bg-gray-200 border border-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-dark" id="grid-state">
                                <option>All</option>
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
                
                <ProductsList ref={childRef} />

            </section>
        </section>
    )
}

export default Products
