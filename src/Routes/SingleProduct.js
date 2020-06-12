import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import SINGLEPRODUCT_QUERY from "../Queries/SINGLEPRODUCT_QUERY"
import { useQuery } from "@apollo/react-hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"
const ReactMarkdown = require('react-markdown/with-html')

function SingleProduct() {

    
    const [topImage, setTopImage] = useState(false);
        
    let productId = useParams()
    const { loading, error, data } = useQuery( SINGLEPRODUCT_QUERY, { variables: { productId: productId.id} });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    let productData = data.allProduct;

    
    return (
        <section className="my-16 container m-auto">
            <div>Products/product</div>
            <section className="grid grid-cols-1 p-2 md:p-0 md:grid-cols-2 gap-10 my-6">
                <div className=" w-full flex ">
                <div className="flex flex-col h-full justify-evenly">
                    {productData.Images.slice(0, 3).map(product => (
                        <div className="w-16 h-16 border border-black" key={product.Name} onClick={() => setTopImage("http://localhost:1337" + product.url)}>
                            <img className="p-1 object-cover" alt={product.Name} src={"http://localhost:1337" + product.url} ></img>
                        </div>
                    ))}
                    </div>
                    <img className="mx-auto h-full" alt="active product" src={topImage ? topImage : `http://localhost:1337${productData.Images[0].url}`}></img>
                </div>

                <div className=" w-full">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">
                        {productData.Name}
                    </h2>
                    <div className=" h-64">
                        <p className="">{productData.Description}</p>
                        <button className="bg-blue hover:bg-blue-700 text-white text-sm py-2 w-2/5 mt-4 rounded-full flex justify-around items-center md:w-1/3">Enquire <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                    </div>
                </div>

                <div className=" w-full">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Best suited for</h2>
                    <ul className=" h-64">
                    {productData.best_suited_fors.map(product => (
                     <li key={product.id} className="font-bold py-2 pl-2 bg-gray my-2">{product.Type}</li>
                    ))}
                    </ul>
                  
                </div>

                <div className=" w-full">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Warranty</h2>
                    <ReactMarkdown
                    className=" h-64"
                    source={productData.Warranty}
                    escapeHtml={false}
                    />
                </div>
                <div className="w-full">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Ship Freight</h2>
                    <ReactMarkdown
                    className=" h-64"
                    source={productData.Freight}
                    escapeHtml={false}
                    />
                </div>
                <div className=" w-full">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Buy in bulk</h2>
                    <ReactMarkdown
                    className=""
                    source={productData.Bulk}
                    escapeHtml={false}
                    />
                </div>
            </section>
            <section className="my-6 ">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">
                        Similar Products
                    </h2>
                    <div className=" grid grid-flow-row md:grid-cols-3 my-6 p-2  gap-6 ">
                        {productData.model.Products.map(product => (
                            <Link to={`/Product/${product.id}`}>
                                <article className="border border-black rounded flex flex-col justify-end">
                                <img className="mx-auto" alt={product.Name} src={"http://localhost:1337" + product.MainImage.url}></img>
                                <h2 className="font-bold text-center text-lg py-4">{product.Name}</h2>
                                </article>
                            </Link>

                        ))}
                    </div>
            </section>
        </section>
        
    )
}

export default SingleProduct
