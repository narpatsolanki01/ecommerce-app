import React  from "react";
import exclusive from "../Assets/exclusive_image.png";
import "./Offer.css";
const offer=()=>{
    return (
        <>
            <section className="offer_1 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-start d-flex justify-content-center align-items-center ">
                            <div>   
                                <h1 className="display-1 text-start"><b>Exclusive<br/><span className=""> Offer For You</span></b></h1>
                                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                                <button className="btn btn-danger">Check Now</button>
                            </div>
                            
                        </div>
                        <div className="col-md-6">
                            <img src={exclusive} className="exclusive" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default offer;