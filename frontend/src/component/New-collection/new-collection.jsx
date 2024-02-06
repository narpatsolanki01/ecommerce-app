import React, { useEffect, useState }  from "react";
// import new_collection from "../Assets/new_collections.js";
import Item from "../Items/item.jsx";
const collection=()=>{
    const [new_collection,setnew_collection]=useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/getproducts')
        .then((res)=>res.json()).then((data)=>setnew_collection(data))
    },[]);
    return(
        <>
            <div className="mt-5">   
                <h1 className="mb-5">NEW COLLECTIONS </h1><hr/>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {new_collection.map((val,ind)=>{ 
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
                    }) }
                </div>
            </div>
        </>
    );
}
export default collection;