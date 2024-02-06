import  React,{useState} from 'react';
import './Css/Loginsignup.css';
// import {useNavigate} from 'react-router-dom';
const LoginSignUP = () =>{
    const [loginsign,setsignlogin]=useState("Login");
    const [errormassage,seterrormassage]=useState();
    const [loginerror,setloginerror]=useState();
    // const Navigate=useNavigate(); 
    const [formData,setformData]=useState({
        username:"",
        email:"",
        password:"" 
       })
    const login = async ()=>{
        let resonseDate;
        await fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{
                Append:'application/form-data',
                'Content-Type':'application/Json'
            },
            body:JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>resonseDate=data);
        if(resonseDate.success){
            localStorage.setItem('auth-token',resonseDate.token);
            window.location.replace('/');
            setloginerror("");
        }
        else{
            setloginerror(resonseDate.wrong_password);
            seterrormassage(resonseDate.message);
            // alert(resonseDate.message);
        }
    }
    const signup =async()=>{
        // console.log("Sign Up",formData);
        // let nformData;
        let responseData;
        await fetch("http://localhost:5000/sign",{
            method:'POST',
            headers: {
            Append:'application/form-data',
            'Content-Type':'application/Json',
            },
            body:JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>responseData=data);
        // console.log(responseData.success,responseData.token);

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
            // Navigate("/");
            seterrormassage("");
        }
        else{
            seterrormassage(responseData.message);
            alert(responseData.message);
        }
    }
    const changeHandler=async(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    }
    return(    
       <>
            <section className='login p-4'>
                <div className='container '>
                    <div className='row'>
                        <div className='bg-white p-4 text-start form_login m-auto '>
                            <div>
                                <h1 className='text-center mb-3'>{loginsign}</h1>
                                {loginsign==="SignUp"? 
                                    <div className='form-group mb-3'>
                                        <label className='mb-2'>Name</label>
                                        <input type="text" value={setformData.username} name="username" onChange={changeHandler} className='form-control shadow-none ' placeholder='Enter Name' />
                                    </div>
                                : <></>}
                                <div className='form-group mb-3'>
                                    <label htmlFor="" className='mb-2'>Email</label>
                                    <input type="email" value={setformData.email} name="email" onChange={changeHandler} className='form-control shadow-none' placeholder='Enter Email' />
                                    <span className='text-danger mt-1'>{errormassage}</span>
                                </div>
                                <div className='form-group mb-3'>
                                    <label htmlFor="" className='mb-2'>Password</label>
                                    <input type="password" value={setformData.password} name="password" onChange={changeHandler} className='form-control shadow-none' placeholder='Enter Password' />
                                    <span className='text-danger mt-1'>{loginerror}</span>
                                </div>
                                <div className='mb-3'>
                                    <input type="checkbox" className=''/>
                                    <span> Continuing i aggeer to the terms of use & privacy policy </span>
                                </div>
                                <button className="btn btn-danger rounded-0 w-100" onClick={()=>{loginsign ==='Login'?login():signup()}}>{loginsign}</button>
                                <div className='mt-3'>
                                    { 
                                    loginsign==='SignUp' ?
                                        <p>Already Have on account <span className='text-danger'><b className='changepage' onClick={()=>{setsignlogin("Login")}}>Login Here</b></span> </p>
                                    :
                                        <p>Create a account <span className='text-danger'><b className='changepage' onClick={()=>{setsignlogin("SignUp")}}>Click Here</b></span> </p>
                                    } 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    );  
}
export default LoginSignUP;