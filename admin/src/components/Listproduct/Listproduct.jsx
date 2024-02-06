import React,{useState,useEffect} from "react";
import "./Listproduct.css";
const Listproduct = () => {
    const [products,setProducts]=useState([]);
   
    const  getproducts= async ()=>{
        await fetch("http://localhost:5000/getproducts")
        .then((res)=>res.json()).then((result)=>{
            setProducts(result);
        })
    }
    const deleteproduct=(id)=>{
        fetch(`http://localhost:5000/deleteProduct/${id}`,{
            method:"DELETE"
        }).then((res)=>res.json()).then((result)=>{
            console.log(result);
            getproducts();
        })
    }

    useEffect(()=>{
        getproducts();
    },[])
    // console.log(products);

    return (
        <>
          <div className="container list_product">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive mt-5 d-flex">
                            <table className="table  border-success  rounded text-center table-striped table-hover text-dark">
                                <thead className="table-danger">
                                    <tr className="">
                                        <th className=""><p className="mt-3">Id</p></th>
                                        <th className=""><p className="mt-3">Image</p></th>
                                        <th className=""><p className="mt-3">Product Name</p></th>
                                        <th className=""><p className="mt-3">Old Price</p></th>
                                        <th className=""><p className="mt-3">New Price</p></th>
                                        <th className=""><p className="mt-3">Category</p></th>
                                        <th className=""><p className="mt-3">Action</p></th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {
                                        products.map((product,index)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td><p className="mt-4">{index+1}</p></td>
                                                        <td><img src={product.image} className="img_product" alt="" /></td>
                                                        <td><p className="mt-4">{product.name}</p></td>
                                                        <td><p className="mt-4">{product.old_price}</p></td>
                                                        <td><p className="mt-4">{product.new_price}</p></td>
                                                        <td><p className="mt-4">{product.category}</p></td>
                                                        <td className="h4 delete_btn" onClick={()=>deleteproduct(product.id)}><p className="mt-4"><i class=" bi bi-x-circle-fill"></i></p></td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>      
          </div>
        </>
    );
}
export default Listproduct;