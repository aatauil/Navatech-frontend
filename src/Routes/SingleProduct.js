import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import SINGLEPRODUCT_QUERY from "../Queries/SINGLEPRODUCT_QUERY"
import { useQuery } from "@apollo/react-hooks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons"
import Skeleton from '@yisheng90/react-loading';
const ReactMarkdown = require('react-markdown/with-html')

function SingleProduct() {

    
    const [topImage, setTopImage] = useState(false);
        
    let productId = useParams()
    const { loading, error, data } = useQuery( SINGLEPRODUCT_QUERY, { variables: { singleProductId: productId.id} });
    if (loading) return (
        <section className="my-16 p-3 container m-auto">
            <div className="">
                    <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span className="text-red">loading...</span> 
            </div>
            <section className="grid grid-cols-1 md:p-0 md:grid-cols-2 gap-8 md:gap-10 my-6">
                <div className="mb-8 mb-0 w-full flex ">
                <div className="flex flex-col h-full justify-evenly">

                        <div className="w-16 h-16 flex items-center border border-black m-auto">
                        <Skeleton circle />
                        </div>
                        <div className="w-16 h-16 flex items-center border border-black m-auto">
                        <Skeleton circle />
                        </div>
                        <div className="w-16 h-16 flex items-center border border-black m-auto" >
                        <Skeleton  circle />
                        </div>
                    </div>
                    <div className="m-auto">
                     <Skeleton height="10rem" circle />
                    </div>
                  
                </div>

                <div className=" w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">
                        Loading...
                    </h2>
                    <div className="h-auto md:h-64">
                        <Skeleton width="100%" height="25px"/>
                        <Skeleton width="100%" height="25px"/>  
                        <Skeleton width="100%" height="25px"/>
                    </div>
                </div>

                <div className=" w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Best suited for</h2>
                    <ul className=" h-auto md:h-64">
                    <Skeleton width="100%" height="25px"/>
                    <Skeleton width="100%" height="25px"/>
                    <Skeleton width="100%" height="25px"/>
                    </ul>
                  
                </div>

                <div className=" w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Warranty</h2>
                    <Skeleton width="100%" height="25px"/>
                    <Skeleton width="100%" height="25px"/>
                    <Skeleton width="100%" height="25px"/>
                </div>
                <div className="w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Ship Freight</h2>
                    <Skeleton width="100%" height="25px"/>
                    <Skeleton width="100%" height="25px"/>
                    <Skeleton width="100%" height="25px"/>
                </div>
                <div className="mb-8 md:mb-0 w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Buy in bulk</h2>
                    <Skeleton width="100%" height="25px"/>
                    <Skeleton width="100%" height="25px"/>
                    <Skeleton width="100%" height="25px"/>
                </div>
            </section>

        </section>

    );
    
    if (error) return `Error! ${error.message}`;
    let productData = data.allProduct;
    let currentID = productData.id
    const similar = productData.model.Products
    const filtered = similar.filter(product => product.id !== currentID)
    let contactRoute = `/Contact/${productData.Name}`

    
    return (
        <section className="my-16 p-3 container m-auto">
            <div className="">
                    <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <span className="text-red">{productData.Name}</span> 
            </div>
            <section className="grid grid-cols-1 md:p-0 md:grid-cols-2 gap-8 md:gap-10 my-6">
                <div className="mb-8 mb-0 w-full flex ">
                <div className="flex flex-col h-full justify-evenly">
                    {productData.Images.slice(0, 3).map(product => (
                        <div className="w-16 h-16 flex items-center border border-black m-auto" key={product.id} onClick={() => setTopImage("https://navatech.herokuapp.com" + product.url)}>
                            <img className="p-1" alt={product.Name} src={"https://navatech.herokuapp.com" + product.url} ></img>
                        </div>
                    ))}
                    </div>
                    <div className="m-auto">
                        <img className="m-auto " alt="active product" src={topImage ? topImage : `https://navatech.herokuapp.com${productData.Images[0].url}`}></img>
                    </div>
                  
                </div>

                <div className=" w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">
                        {productData.Name}
                    </h2>
                    <div className="h-auto md:h-64">
                        <p className="">{productData.Description}</p>
                        <Link to={contactRoute}>
                            <button className="bg-blue hover:bg-blue-700 text-white text-sm py-2 w-2/5 mt-4 rounded-full flex justify-around items-center md:w-1/3">Enquire <FontAwesomeIcon icon={faArrowAltCircleRight}/></button>
                        </Link>
                    </div>
                </div>

                <div className=" w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Best suited for</h2>
                    <ul className=" h-auto md:h-64">
                    {productData.best_suited_fors.map(product => (
                        
                     <li key={product.id} className="font-bold py-2 pl-2 bg-gray my-2">{product.Type}</li>
                    ))}
                    </ul>
                  
                </div>

                <div className=" w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Warranty</h2>
                    <ReactMarkdown
                    className="h-auto md:h-64"
                    source={productData.Warranty}
                    escapeHtml={false}
                    />
                </div>
                <div className="w-full shadow p-3 md:shadow-none">
                    <h2 className="h3-title mb-4 text-left border-b-2 border-black">Ship Freight</h2>
                    <ReactMarkdown
                    className="h-auto md:h-64"
                    source={productData.Freight}
                    escapeHtml={false}
                    />
                </div>
                <div className="mb-8 md:mb-0 w-full shadow p-3 md:shadow-none">
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
                    <div className=" grid grid-flow-row md:grid-cols-3 my-6 gap-6 ">
                        {filtered.map(product => (
                            <Link key={product.id} to={`/Product/${product.id}`}>
                                <article  className="border border-black rounded flex flex-col justify-end">
                                <img className="mx-auto" alt={product.Name} src={"https://navatech.herokuapp.com" + product.MainImage.url}></img>
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
