import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <>
            <section className=" sidebar bg-white d">
                <div className="container">
                    <div className="row">
                        <div className=" sidebar_item">
                            <Link to={'/addproduct'} className="sidebar_link p-3 rounded text-success text-decoration-none">
                                <div className="bg-light p-2">
                                    <i class="bi bi-cart-plus mx-2 h3"></i>
                                    <span className="h6">Add Product</span>
                                </div>   
                            </Link>
                            <Link to={'/productlist'} className="sidebar_link1 p-3 mx-md-4 text-success text-decoration-none">
                                <div  className="bg-light p-2">
                                <i class="bi bi-folder2-open h3 mx-2"></i>
                                <span className="h6">Product List</span>                                        
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
export default Sidebar;