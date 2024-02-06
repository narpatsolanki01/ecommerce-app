import React,{ useEffect, useState } from "react";
import Item from "../Items/item.jsx"; 

const Newpro = () => {
    let url="https://fakestoreapi.com/products";
    const [products,setProduct]=useState([]);
    useEffect(()=>{
         const getProducts=async()=>{
            const response=await fetch(url);
            const data=await response.json();
            setProduct(data);        
        }
        getProducts();
    },[]);
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        products.map((val,nid)=>{ 
                            return(
                                <>
                                    <Item
                                        key={nid}
                                        id={val.id}
                                        image={val.images[0]}
                                        name={val.title}
                                        new_price={val.price}
                                        old_price={val.discountPercentage}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Newpro;