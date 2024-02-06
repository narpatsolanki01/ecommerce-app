import React from "react";
import "./NewLetter.css";

const NewLetter = () => {   
    
    return (
       <>
           <section className="exclusive">
                <div className="container ">
                     <div className="my-5">
                         <h1 >Get Exclusive Offers On Your Email</h1>
                         <p className="my-5">Subscribe to our newLetter and stay updated</p>
                         <div className="input-group w-50 m-auto mb-4">
                             <input type="email" className="form-control shadow-none" placeholder="Subscribe" />
                             <button className="btn btn-danger" >Subscribe</button>
                         </div>
                     </div>
                </div>
           </section>
       </>
    );
}
export default NewLetter;