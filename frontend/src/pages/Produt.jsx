import React from 'react';
import { useParams } from 'react-router-dom';
import { Shopcontext } from '../context/Shopcontext';
import { useContext } from 'react';
import Beadcrumb from '../component/Breadcum/Breadcum.jsx';    
import ProductDisplay from '../component/ProductDisplay/Displayproduct.jsx';
import DescriptionBox from '../component/DescriptionBox/DescriptionBox.jsx';
import Related from '../component/Related/RelatedPro.jsx';

const Product = () => { 
    const {all_product}=useContext(Shopcontext);
    const {productId}=useParams();
    const product=all_product.find((val)=>val.id===Number(productId));
    return (
        <>
            {/* <Beadcrumb product={product}/> */}
            <ProductDisplay product={product}/>
            <DescriptionBox product={product}/>
            <Related/>
        </>
    );  
}
export default Product;
