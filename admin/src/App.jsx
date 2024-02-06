import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Admin from "./pages/Admin/Admin.jsx";

const App = () => {
    return (
        <>
            <Navbar/>
            <Admin/>
        </>
    );
}
export default App;