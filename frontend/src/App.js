import './App.css';
import Navbar from './component/Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import bcrypt from 'bcrypt';

import { BrowserRouter,Route,Routes } from 'react-router-dom'; 
import Cart from './pages/Cart.jsx';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Produt.jsx';
import LoginSignUP from './pages/LoginSignUP.jsx';
import men_banner  from './component/Assets/offermen.png';
import women_banner from './component/Assets/offerwomen.png';
import kids_banner from './component/Assets/offerkid1.png';
import Footer from "./component/footer/footer.jsx";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Shop/>} />
                <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
                <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
                <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
                <Route path='/product/:productId' element={<Product/>} />  
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<LoginSignUP/>}/>  
            </Routes>
            <Footer/> 
        </BrowserRouter>
    </div>
  );
}

export default App;
