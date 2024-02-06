import React from "react";
import { Routes,Route } from "react-router-dom";
import Addproduct from "../../components/Addproduct/Addproduct.jsx";
import Listproduct from "../../components/Listproduct/Listproduct.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import "./Admin.css";
const Admin = () => {
    return (
        <>
            {/* <h1>Admin</h1> */}
           <div className="admin">
                <Sidebar/>
                <Routes>
                     <Route path="/addproduct" element={<Addproduct/>}/>
                     <Route path="/productlist" element={<Listproduct/>}/>
                 </Routes>
           </div>
        </>
    );
}
export default Admin;