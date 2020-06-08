import React,{useState, Component}  from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFilter, faTimes} from "@fortawesome/free-solid-svg-icons"
import ALLPRODUCTS_QUERY from "../Queries/ALLPRODUCTS_QUERY"
import { useQuery } from "@apollo/react-hooks";
import Select from 'react-select'


function Products() {
    const [showFilter, setShowFilter] = useState(false)
    const { loading, error, data } = useQuery(ALLPRODUCTS_QUERY);
if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;

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

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]


    return (
        <section className="my-16 container m-auto">
            <div className="w-4/5 pt-4 flex justify-between m-auto items-center mb-8 md:w-full">
                <div className="">Home/Shop</div>
                <button className="px-6 py-2 bg-gray xl:hidden" onClick={() => setShowFilter(true)}> <FontAwesomeIcon icon={faFilter}/> Filter</button>

            </div>
            <section className="flex flex-col h-auto md:flex-row justify-between">
                <div className="hidden md:block h-auto w-4/12 mr-6 shadow rounded p-6 ">
                    <div className=" ">
                        <h2 className="font-bold text-2xl border-b border-black">Filter By</h2>
                        <Select isMulti options={options} placeholder="Model" className="pt-6"/>
                        <Select isMulti options={options} placeholder="Model" className="pt-6"/>
                        <Select isMulti options={options} placeholder="Model" className="pt-6"/>
                    </div>
                </div>
                
                <div className=" md:w-8/12 w-full">   
                    <div className=" box-border hidden md:flex  justify-between">
                        <div className=" px-6 py-2 bg-gray font-bold">Results 50</div> 
                        <div className=" px-6 py-2 bg-gray font-bold">Results 50</div> 
                    </div>
                    <div className=" grid grid-flow-row grid-cols-2  gap-6 my-6 ">
                        {data.allProducts.map(product => (
                            console.log(product.mainImage),
                            <article key={product.id}  className="border border-black rounded flex flex-col justify-end">
                                <img className="mx-auto" src={"http://localhost:1337" + product.MainImage.url}></img>
                            <h2 className="font-bold text-center text-lg py-4">{product.Name}</h2>
                            </article>

                        ))}
                    </div>
                </div>
            </section>
            {filter}
        </section>
    )
}

export default Products
