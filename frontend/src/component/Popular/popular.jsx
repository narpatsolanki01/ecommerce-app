import React  from "react";
import all_product from "../Assets/all_product.js";
import Item from "../Items/item.jsx"; 
const popular = () => {
    // const [product,setProduct]=React.useState([]);
    return(
        <>
            <section className="mt-5">
                <div className="popular">
                    <div  className="heading">
                    <h1 className="mt-5 mb-5">POPULAR IN WOMEN</h1>
                    <span></span>
                    </div>
                    <hr/>
                    <div className="container mt-5">
                    <div className="row">
                         {
                            all_product.map((val,nid)=>{
                                return(
                                    <>
                                        <Item
                                            key={nid}
                                            id={val.id}
                                            image={val.image}
                                            name={val.name}
                                            new_price={val.new_price}
                                            old_price={val.old_price}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default popular;