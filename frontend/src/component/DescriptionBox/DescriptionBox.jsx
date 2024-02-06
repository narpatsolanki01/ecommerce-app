import React from "react";
import { useContext } from "react";
import { Shopcontext } from "../../context/Shopcontext";    
const Description= (props) => {
    const {addtocart}=useContext(Shopcontext);
    const {product}=props;
    return (
        <>
            <section>
                <div className="container text-start">
                    <div className="w-50 m-auto"> 
                        <button className="w-100 btn btn-danger mt-5  rounded-0" onClick={()=>addtocart(product.id)}>ADD TO CART</button>
                    </div>
                    <div className="  mt-5">
                        <button className="btn rounded-0 btn-outline-warning rounded-0 ">Description</button>
                        <button className="btn btn-outline-warning  rounded-0">Reviews(122)</button>
                    </div>
                    <div className="card mt-4">
                        <div className="card-body text-start p-5 ">
                            <p>
                                An e-commerce website in an online platform the buying and selling of products or scrvices over the internet. It serves an  a virtual market place where businesses and individuals can showcase their products interact with custamers and conduct transaction without the need for a physical E-commerce websites have gained immense popularity due 
                                to their convenience and user-friendly nature. 
                            </p>
                             <p>They are also a great way for retailers to expand their business and reach new customers. With the help of e-commerce websites, customers can easily research products, compare prices, and buy products from the comfort of their homes.</p>
                            <p>
                                E-commerce websites are online portals that facilitate online transactions of goods and services through means of the transfer of information and funds over the Internet. In the early days, e-commerce was done partially through emails and phone calls. Now, with a single website, anything and everything that a transaction needs, can be executed online.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Description;