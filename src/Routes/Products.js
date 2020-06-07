import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFilter} from "@fortawesome/free-solid-svg-icons"
import Filter from "../Components/ProductsPage/Filter"
import ALLPRODUCTS_QUERY from "../Queries/ALLPRODUCTS_QUERY"
import { useQuery } from "@apollo/react-hooks";

function Products() {
    const { loading, error, data } = useQuery(ALLPRODUCTS_QUERY);
    console.log(data)
if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;

    return (
        <section className="mt-16">
            <div className="relative container mx-auto">
                <div className="absolute">breadcrumbs</div>
                <h1 className="container m-auto text-center font-bold text-4xl">Products</h1>
                <button className="absolute right-0 top-0 px-6 py-2 bg-gray"> <FontAwesomeIcon icon={faFilter}/> Filter</button>

              
            </div>
            <section>
            {data.allProducts.map(product => (
                <article>
                    <img></img>
                    <h2></h2>
                </article>

            ))}
            </section>
            {/* <Filter/> */}
        </section>
    )
}

export default Products
