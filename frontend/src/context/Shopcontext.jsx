import {createContext} from 'react';
import all_product from '../component/Assets/all_product.js';
import {useState} from 'react';
export const Shopcontext = createContext(null);

const getDefaultCart=()=>{
    let cart ={};   
    for(let i=0;i<all_product.length;i++){
        cart[i]=0;
        
    }
    return cart;
}

const ShopContextProvider =(props)=>{

    const [cartItems,setCartItems]=useState(getDefaultCart());
   

    const addtocart=(id)=>{
       setCartItems((prev)=>({...prev ,[id]:prev[id]+1}));
       console.log(cartItems);
    } 
    // const addtocart=()=>{
    //     console.log("hello World");
    // }
    const removefromcart=(id)=>{
        setCartItems((prev)=>({...prev,[id]:prev[id]-1}));
    }
    // console.log(cartItems);
    const gettotalitems=()=>{
        let totalitems=0;
        for(const item in cartItems){
            totalitems += cartItems[item];
        }
        return totalitems;
    }
    const gettotalamount=()=>{
        let totalamount=0;
       for(const item in cartItems){
        if(cartItems[item]>0){
            let iteminfo   = all_product.find((val)=>val.id===Number(item));
            totalamount += iteminfo.new_price*cartItems[item];
        }
        }
        return totalamount;
    }
    const contextvalue={all_product,cartItems,addtocart,removefromcart,gettotalamount,gettotalitems};
    return (
        
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
export default ShopContextProvider ;