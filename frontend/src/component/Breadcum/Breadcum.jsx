import React from "react";
import "./Breadcum.css";
const breadcrumb = (props) => {
        const {product}=props;
    return(
        <>
           <div className=" mt-4 mb-5">
                <nav aria-label="breadcrumb ">
                     <ol class="breadcrumb">
                         <li class="breadcrumb-item active" aria-current="page">Home</li>
                         <li class="breadcrumb-item active" aria-current="page">Shop</li>
                         <li class="breadcrumb-item active" aria-current="page">{product.category}</li>
                         <li class="breadcrumb-item " aria-current="page">{product.name}</li>
                     </ol>
                 </nav>
           </div>
        </>
    )
}
export default breadcrumb;