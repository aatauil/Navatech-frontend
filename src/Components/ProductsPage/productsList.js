import React, {useImperativeHandle} from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import ALLPRODUCTS_QUERY from "../../Queries/ALLPRODUCTS_QUERY"
import Skeleton from '@yisheng90/react-loading';


const ProductsList = React.forwardRef((props,ref) => {

    useImperativeHandle(ref, () => ({

        refetchModel(e){
            
            if(e === 'All'){
                refetch({model: undefined})
            } else {
                refetch({model: e})
            }
       
        },

        refetchSuited(e){
            if(e === 'All'){
                refetch({suited: undefined})
            } else {
            refetch({suited: e})
            }
        },

        async resetFilter(){
            refetch({suited: undefined, model: undefined})
        }
    }));



    const { loading, error, data, refetch } = useQuery(ALLPRODUCTS_QUERY);
    if (loading) return (
        <div className=" md:w-8/12 w-full">   
                    <div className="box-border hidden md:flex  justify-between">
                    <div className="px-6 py-2 bg-gray font-bold">... Results </div> 
                        {/* <Select options={sortBy} placeholder="Sort by" className="w-64"/> */}
                    </div>
                    <div className=" grid grid-flow-row sm:grid-cols-2 m-2 h-auto gap-6 sm:my-6 ">
                                <article  className=" border border-black rounded p-10  flex flex-col h-full items-center">
                                    <Skeleton height="10rem" circle />
                                    <Skeleton width="100%" height="25px"/>
                                </article>
                                <article  className=" border border-black rounded p-10  flex flex-col h-full items-center">
                                    <Skeleton height="10rem" circle />
                                    <Skeleton width="100%" height="25px"/>
                                </article>
                                <article  className=" border border-black rounded p-10  flex flex-col h-full items-center">
                                    <Skeleton height="10rem" circle />
                                    <Skeleton width="100%" height="25px"/>
                                </article>
                                <article  className=" border border-black rounded p-10  flex flex-col h-full items-center">
                                    <Skeleton height="10rem" circle />
                                    <Skeleton width="100%" height="25px"/>
                                </article>
                                <article  className=" border border-black rounded p-10  flex flex-col h-full items-center">
                                    <Skeleton height="10rem" circle />
                                    <Skeleton width="100%" height="25px"/>
                                </article>
                                <article  className=" border border-black rounded p-10  flex flex-col h-full items-center">
                                    <Skeleton height="10rem" circle />
                                    <Skeleton width="100%" height="25px"/>
                                </article>
                    </div>

            </div>
    );
    if (error) return `Error! ${error.message}`;
    console.log(data)
    // let pArray = data.ProductsList.Name

    // let sorted = pArray.sort()
    // console.log(sorted)

    return (
        <div className=" md:w-8/12 w-full">   
                    <div className="box-border hidden md:flex  justify-between">
                    <div className="px-6 py-2 bg-gray font-bold">{data.allProducts.length} Results </div> 
                        {/* <Select options={sortBy} placeholder="Sort by" className="w-64"/> */}
                    </div>
                    <div className=" grid grid-flow-row sm:grid-cols-2 m-2 h-auto gap-6 sm:my-6 ">
                        {data.allProducts.map(product => (
                            <Link to={`/Product/${product.id}`} key={product.id}>
                                <article  className="transition delay-100 hover:shadow border border-black rounded flex flex-col h-full justify-end">
                                <img className="mx-auto" alt={product.Name} src={"https://navatech.herokuapp.com" + product.MainImage.url}></img>
                                <h2 className="font-bold text-center text-lg py-4">{product.Name}</h2>
                                </article>
                            </Link>
                        ))}
                    </div>

            </div>
    )
})

export default ProductsList
