import React from "react";
import assets from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar  = () => {
    return (
        <>
            <header className="bg-light p-1 border ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="logo " >
                                    <img src={assets} className="" alt="" />
                                </div>
                                <div className="">
                                    <span><i class="bi h2 bi-person-circle " data-toggle="dropdown"></i></span>
                                </div>  
                            </div>
                        </div>
                        <div>
                            <div className="dropdown-menu">
                                <Link>Home</Link>                                
                                <Link>Logout</Link>                               
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Navbar;