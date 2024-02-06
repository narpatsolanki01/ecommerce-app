import React from "react";
import "./displayproduct.css";
import { useContext } from "react";
// import { Shopcontext } from "../../context/Shopcontext";
const productDisplay=(props)=>{
    const {product}=props;
    return(
        <>      
            <section className="m-0 p-0 mt-5">
                <div className="container ">
                    <div className="row ">
                        <div className="col-lg-5 mb-5 m-0">
                            <div className="d-flex justify-content-around">
                                <div className="left_side-img d-none d-xl-block">
                                    <img src={product.image}  className="" alt="" />
                                    <img src={product.image}  className="" alt="" />
                                    <img src={product.image}  className="" alt="" />
                                    <img src={product.image}  className="" alt="" />
                                </div>
                                <div>   
                                    <img src={product.image}  className="main_image p-3 m-0" alt="" />
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-7 px-3">
                            <div className="text-start">
                                <h4 className="h2 text-start ">{product.name}</h4>
                                <div className="d-flex">
                                    <i class=" text-warning mx-1 h5 bi bi-star-fill"></i>
                                    <i class=" text-warning mx-1 h5 bi bi-star-fill"></i>          
                                    <i class=" text-warning mx-1 h5 bi bi-star-fill"></i>          
                                    <i class=" text-warning mx-1 h5 bi bi-star-fill"></i>          
                                    <i class=" text-warning mx-1 h5 bi bi-star"></i>    
                                    <p>(122)</p>      
                                </div>
                                
                                <div className="d-flex">
                                    <h4 className="old_price">{product.old_price} $</h4>
                                    <h4 className="text-danger mx-4">{product.new_price}$</h4>
                                </div>
                                <div className="mt-3">
                                    <p>
                                        A lightweigth,usually knitted ,pullover shirt ,close-fitting and with 
                                        a round neckline and short<br/> sleeves, worn as an undershirt or outer garment.
                                    </p>
                                </div>
                                <div className="">
                                    <h4 className="mb-3">Select Size</h4>
                                    <div className="size_item">
                                        <button className="btn btn-outline-dark">S</button>
                                        <button className="btn btn-outline-dark">M</button>
                                        <button className="btn btn-outline-dark">L</button>
                                        <button className="btn btn-outline-dark">XL</button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p><b>Category:</b> {product.category},T-Shirt,Crop Top</p>
                                    <p><b>Tags:</b> Modern,Lotest</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>
        </>
    )
}
export default productDisplay;