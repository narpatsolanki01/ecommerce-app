import React from "react";
import data_product from "../Assets/data.js";
import Item from "../Items/item.jsx";

const Related=()=>{
        return (
            <>
               <div className="container">
                        <h1 className="mt-5 mb-5">Related Products</h1>
                        <div className="row">
                            {data_product.map((val,ind)=>{
                                return(
                                    <>
                                        <Item
                                            key={ind}
                                            id={val.id}
                                            image={val.image}
                                            name={val.name}
                                            new_price={val.new_price}
                                            old_price={val.old_price}
                                        />
                                    </>
                                )
                            })}
                        </div>
               </div>
                
            </>
        )
}
export default Related;