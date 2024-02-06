import React from "react";
import Hero from "../component/Hero/Hero.jsx";
import Popular from "../component/Popular/popular.jsx";
import Offer from "../component/Offer/Offer.jsx";
import New_collection from "../component/New-collection/New_collection.js";
import NewLetter from "../component/NewLetter/NewLetter.jsx";
// import Apiproduct from "../component/Apiproduct/Apiproduct.jsx";
const Shop = () => {    
    return (
       <>
        <Hero/>
        <Popular/>
        <Offer/>
        <New_collection/>
        <NewLetter/>
         {/* <Apiproduct/> */}
       </>
    );
}   
export default Shop;