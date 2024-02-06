import React from 'react'; 
import { useContext } from 'react'; 
import './Css/ShopCategory.css';
import {Shopcontext}  from "../context/Shopcontext.jsx";
import Item from '../component/Items/item.jsx';
const ShopCategory = (props)=>{
    const {all_product} = useContext(Shopcontext);
    return (
        <>
            <section className='men_offer '>
                <div className="container">
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center text-start align-items-center'>
                            <div>
                                <div>
                                    <h1 className='display-2 mt-5 mb-3'><b>FLAT 50% OFF</b></h1>
                                    <h4 className='h2 text-warning mb-4'>12 <span className='text-dark'>Hours</span> 20 <span className='text-dark'>Mins</span></h4>
                                    <button className='btn btn-warning rounded-pill px-4'><b>Explore new</b></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={props.banner} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5'>
                <div className='container mt-5'>
                    <div className='row'>
                        {all_product.map((val,ind)=>{  
                           if(val.category===props.category){
                                return(
                                     <>
                                         <Item
                                             key={ind}
                                             id={val.id}
                                             image={val.image}
                                             name={val.name}
                                             new_price={val.new_price}
                                             old_price={val.old_price}
                                         />
                                     </>
                                 )
                           }
                           else{
                                return null;
                           } 
                        })}
                    </div>
                    <div>
                        <button className='btn  btn-outline-success rounded-pill mx-5'><b>Load More..</b></button>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ShopCategory;
