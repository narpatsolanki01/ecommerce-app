import React from "react";
import { useContext } from "react";
import { Shopcontext } from "../../context/Shopcontext";
import "./Cartitem.css";
const Cartitem =()=>{
    const {all_product,cartItems,addtocart,removefromcart,gettotalamount}=useContext(Shopcontext);
    return (
        <>
            <div className="container mt-5 ">
                <div className="table-responsive ">
                    <table className="teble border table-bordered  w-100 mb-5 ">
                       <tr>
                            <th className="p-2">Products</th>
                            <th className="p-2">Title</th>
                            <th className="p-2">Price</th>
                            <th className="p-2">Quantity</th>
                            <th className="p-2">Total</th>
                            <th className="p-2">Remove</th>
                        </tr>  

                        {all_product.map((val)=>{
                                if(cartItems[val.id]>0){
                                    return <>
                                        <br/><tr>
                                            <td><img src={val.image} className="cart_image p-2 " alt="" /></td>
                                            <td>{val.name}</td>
                                            <td>{val.new_price}</td>
                                            <td className=""><span className="badge text-danger border  p-2 h1 rounded-1 mt-3">{cartItems[val.id]}</span></td>
                                            <td>{val.new_price*cartItems[val.id]}</td>
                                            <td><h4 className="btn mt-3 text-danger shadow-none " onClick={()=>{removefromcart()}}><i class="bi bi-trash-fill "></i></h4></td>
                                        </tr>
                                    </>
                            }
                            return null;
                        })}
                    </table>
                </div>
                <div className="row">
                    <div className="text-start">
                        <h4 className="text-center my-5">Cart Totals</h4>
                        <div className="cart_totals">
                            <div className="d-flex justify-content-around">
                                <p>Subtotal</p>
                                <p>${gettotalamount()}</p>
                            </div><hr/>
                            <div className="d-flex justify-content-around">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div><hr/>
                            <div className="d-flex justify-content-around mb-4">
                                <p><b>Total</b></p>
                                <p><b>${gettotalamount()}</b></p>
                            </div>
                            <div className=" my-5 w-75 m-auto ">
                            <p>If you have a promocode, Enter it here</p>
                            <div className="input-group mt-2 mb-5 ">
                                <input type="text" placeholder="Promo code" className="form-control shadow-none rounded-0" />
                                <button className="btn btn-dark rounded-0">Submit</button>
                            </div>
                            <button className="btn btn-danger rounded-0">PROCEED TO CHECKOUT</button>
                       </div>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </>
    )
}
     
export default Cartitem;