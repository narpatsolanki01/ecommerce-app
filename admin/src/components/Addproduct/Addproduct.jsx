import React from "react";
import "./Addproduct.css";
import upload from "../../assets/upload.png";
import { useNavigate } from "react-router-dom";
const Addproduct = () => {

    const [image,setimage] = React.useState();
    const [productDetails,setproductDetails] = React.useState({
        name:"",
        old_price:"",
        new_price:"",
        category:"",
        image:""
    });
    const Navigate= useNavigate();

    const imageHandler = (e) => {
        const image = e.target.files[0];
        setimage(image);
    }
    const changeHandler = (e) => {
        setproductDetails({...productDetails,[e.target.name]:e.target.value});
    }
    const submitHandler = async (e) => {
        // console.log(productDetails);
        let resonseDate;
        let product =productDetails;
        let formData = new FormData();
        e.preventDefault();
        formData.append('product',image);
        
        console.log(formData);
          await fetch("http://localhost:5000/upload",{
            method:"POST",
            headers:{
                Accept:'application/json',
            },
            body:formData
        }).then((res) => res.json()).then((data) =>{resonseDate = data});   
       
        if(resonseDate.success){
            product.image = resonseDate.image_url;
            console.log(product);
             await fetch("http://localhost:5000/createpro",{
                 method:"POST",
                 headers:{
                     Accept:'application/json',
                     "Content-Type":"application/json"
                 },
                 body:JSON.stringify(product)
             }).then((res) => res.json()).then((data) =>{data.success?alert("Product Added"):alert("Something went wrong")});
             Navigate("/productlist");
            }

    }
    return (
        <>
           <section className="mt-5 addproduct">
                <div className="container">
                    
                    <div >
                        <div className="form-group mb-4">
                            <label className="mb-2" htmlFor="">Product Title</label>
                            <input type="text" value={productDetails.name} onChange={changeHandler} className="form-control shadow-none" name="name" placeholder="Type here" />
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-group mb-4">
                                <label className="mb-2" htmlFor="">Price</label>
                                <input type="text" value={productDetails.old_price} onChange={changeHandler} name="old_price" className="form-control shadow-none" placeholder="Type here" />
                            </div>
                            <div className="form-group mb-4">
                                <label className="mb-2" htmlFor="">Offer Price</label>
                                <input type="text" value={productDetails.new_price} onChange={changeHandler} placeholder="Type here" className="form-control shadow-none" name="new_price" />
                            </div>
                        </div>
                        <div className="form-group mb-4">
                            <label className="mb-2" htmlFor="">Product Category</label>
                            <select name="category" id="" className="form-control shadow-none" value={productDetails.category} onChange={changeHandler}>
                               <option value=""></option>
                                <option value="women">Women</option>
                                <option value="men">Men</option>
                                <option value="kid">Kid</option>
                            </select>
                        </div>
                        <div className="form-group mb-4">
                            <label className="mb-2" htmlFor="file-input">
                               <div className="">
                                     <img src={image?URL.createObjectURL(image):upload} className="w-25" alt=""/>
                               </div>
                            </label>
                            <input onChange={imageHandler} type="file" id="file-input" hidden name="image" className=""/>
                        </div>
                        <div className="form-group mb-4">
                            <button onClick={submitHandler} type="submit" className="btn btn-primary">Add </button>
                        </div>
                    </div>
                </div>
           </section>
        </>
    );
}   
export default Addproduct;
