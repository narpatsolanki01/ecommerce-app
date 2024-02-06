import react ,{useState} from "react";
import "./Navbar.css";
import logo from '../Assets/logo.png';
import { useContext } from "react";
import { Shopcontext } from "../../context/Shopcontext";
import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {  
        const [manu, setManu] = useState("Shop");
        const {gettotalitems}=useContext(Shopcontext);
        const [Mobile,setMobile]=useState(true);
        const manuRef=react.useRef();
        const Navigate =useNavigate();
        const nav_toggle=(e)=>{
            manuRef.current.classList.toggle("active");
            // e.target.classList.toggle("open");
            console.log(manuRef.current);
        }
        const logout=async(e)=>{
            localStorage.removeItem('auth-token')
            Navigate('/');
        }
    return (
       <>
           <header className=" bg-light p-2">
                <nav>
                    <div className="container-fulid">
                        <div className="navs">
                            <div className="nav_img">
                                <img src={logo} className="" alt="" />
                            </div>
                            <div className="navs-manu">
                                                         
                                <ul className={Mobile ? "mobile_navList ":"nav_list"} onClick={()=>setMobile(false)}>
                                    <li className="nav-item"onClick={()=>{setManu("Shop")}} ><Link className="nav-link text-dark" to="/">Shop</Link>{manu==="Shop"?<hr/>:<></>}</li>
                                    <li className="nav-item"onClick={()=>{setManu("Men")}} ><Link className="nav-link text-dark" to="/mens">Men</Link>{manu==="Men"?<hr/>:<></>}</li>
                                    <li className="nav-item"onClick={()=>{setManu("Women")}} ><Link className="nav-link text-dark" to="/womens">Women</Link>{manu==="Women"?<hr/>:<></>}</li>
                                    <li className="nav-item"onClick={()=>{setManu("Kids")}} ><Link className="nav-link text-dark" to="/kids">Kids</Link>{manu==="Kids"?<hr/>:<></>}</li>
                                    {localStorage.getItem('auth-token')?
                                        <li className="nav-item logout" onClick={()=>logout()}>Logout</li>
                                        :<li className="nav-item " onClick={()=>{setManu("login")}}><Link className="nav-link" to="login">Login{manu==="login"?<hr/>:<></>}</Link></li>
                                    }
                                    </ul>
                            </div>
                            <div className="navs-login">
                                <ul className="">
                                    
                                </ul>
                            </div>
                            <div>   
                                <Link className="nav-link text-dark" to="/cart">
                                    <div className=" cart">
                                        <i className="bi bi-cart text-dark h3"></i>
                                        <span className="badge  bg-danger count">{gettotalitems()}</span>
                                    </div>
                                </Link>
                            </div> 
                            <button className="nav_btn btn btn-primary shadow-none button_click" onClick={()=>{setMobile(!Mobile)}} ><i class="bi bi-list"></i></button>  
                        </div>                        
                    </div> 
                </nav>                     
           </header>
       </>
    );
    };
export default Navbar;