import React from "react";
import logo from "../Assets/logo_big.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
           <section className=" bg-light p-4 mt-5">
                <div className="container">
                     <div>
                         <div className="d-flex justify-content-center align-items-center">
                             <img src={logo} className="" alt="" />
                             <h1 className="mt-4 mx-4">SHOPPER</h1>
                         </div>
                         <div className="my-5 d-flex justify-content-center">
                             <ul className="nav ">
                                 <li className="nav-item"><Link className="nav-link text-dark ">Company</Link></li>
                                 <li className="nav-item "><Link className="nav-link text-dark ">Products</Link></li>
                                 <li className="nav-item "><Link className="nav-link text-dark ">offices</Link></li>
                                 <li className="nav-item "><Link className="nav-link text-dark ">About</Link></li>
                                 <li className="nav-item "><Link className="nav-link text-dark ">Contact</Link></li>
                             </ul>
                         </div>
                         <div className="d-flex justify-content-center">
                             <i className="mx-4 bi bi-facebook text-primary h4"></i>
                             <i className="mx-4 bi bi-instagram text-warning h4"></i>
                             <i className="mx-4 bi bi-twitter text-primary h4"></i>
                             <i className="mx-4 bi bi-youtube text-danger h4"></i>
                         </div>
                     </div><hr/>
                     <p className="text-center">copyright @ 2024-All Right Reserved</p>
                </div>
           </section>
        </>
    )
}
export default Footer;
