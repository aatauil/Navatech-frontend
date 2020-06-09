import React from 'react'
import { useParams } from "react-router-dom";
import SINGLEPRODUCT_QUERY from "../Queries/SINGLEPRODUCT_QUERY"
import { useQuery } from "@apollo/react-hooks";

function SingleProduct() {
        
    let productId = useParams()

    const { loading, error, data } = useQuery(SINGLEPRODUCT_QUERY, { productId: productId });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data)

    console.log(productId)
    return (
        <section className="my-16 container m-auto">
            <div>Products/product</div>
            <section className="grid grid-cols-2 gap-4 my-6">

                <div className="bg-gray w-full h-64">
                    <h2 className="h3-title text-left border-b-2 border-black">
                        Pool Information
                    </h2>
                </div>

                <div className="bg-gray w-full h-64">
                    <h2 className="h3-title text-left border-b-2 border-black">
                        Pool Information
                    </h2>
                </div>

                <div className="bg-gray w-full h-64">
                    <h2 className="h3-title text-left border-b-2 border-black">Best suited for</h2>
                </div>

                <div className="bg-gray w-full h-64">
                    <h2 className="h3-title text-left border-b-2 border-black">Warranty</h2>
                </div>
                <div className="bg-gray w-full h-64">
                    <h2 className="h3-title text-left border-b-2 border-black">Ship Freight</h2>
                </div>
                <div className="bg-gray w-full h-64">
                    <h2 className="h3-title text-left border-b-2 border-black">Buy in bulk</h2>
                </div>
            </section>
        </section>
    )
}

export default SingleProduct
