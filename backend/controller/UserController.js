import Usermodel from '../model/users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
class UserController{
    static createUser=async(req,res)=>{
       //Existing user check
       const {username,email,password}=req.body;
       
                let check=await Usermodel.findOne({email:email});
            try{    
                if(check){
                   return res.status(400).json({success:false,message:"email already exist"});
                }
                else{
                    //password bcrypt hashed
                    const hashedpassword= await bcrypt.hash(password,10);
                    // const result =await
                    
                    let cart={};
                    for(let i=0; i<3; i++){
                       cart[i]=0;
                    }
                    const User=new Usermodel({
                        name:username,
                        email:email,
                        password:hashedpassword,
                        CartData:cart,
                    });
               
                    const newUser=await User.save();
                    // res.status(201).json(newUser);
                    //jwt token     
                    const token=jwt.sign({email:User.email,id:User._id},"NOTESAPI");
                    res.status(201).json({success:true,token:token});
                }
            }
            catch(err){
                res.status(400).json({success:false,message:err.message});
            }
    }
    static signIn= async(req,res)=>{
         const {email,password}=req.body;
         try{
            const check =await Usermodel.findOne({email:email});
            if(!check){
              return  res.status(404).json({success:false,message:"Invalid Email"});
            }
            else{
               const matchpassword= await bcrypt.compare(password,check.password)
               if(!matchpassword){
                   return res.status(400).json({wrong_password:"Invalid Credentials"});
               }
               else{
                   const token =jwt.sign({email:check.email,id:check._id},"NOTESAPI");
                   res.status(201).json({success:true,token:token})
               }
            }
        }  
        catch(error){
            res.status(400).json({success:false,message:err.message});
        }     
    }
}    
export default UserController;  