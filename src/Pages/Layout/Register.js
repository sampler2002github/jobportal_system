import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Register=()=>{
  const [id, setId]=useState(""); 
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [mobile, setMobile]=useState("");
  const [btnChange, setBtnChnage]=useState("Submit");

  useEffect (()=>{
    fetchRegister()
  },[]);
 
  const fetchRegister=async()=>{
    try {
      const response=await axios
      .get("https://localhost:7070/api/Registers/GetAllRegisters") 
      console.log(response.data);

    } catch (error) {
      console.error("Error Fetchingdata!!",error);
    }
  }

  const addRegister=(e)=>{
    e.preventDefault();
    if(btnChange==="Submit"){
      axios
      .post("https://localhost:7070/api/Registers/AddRegister",{name,email,password,mobile})
      .then((result)=>{
        console.log(result);
        alert("Register Successfully!!");
        fetchRegister();
        setName();
        setEmail();
        setPassword();
        setMobile();
      })
      .catch((error)=>{
        console.error("Error Register!",error);
        });
    }
    else{
      axios
      .put("https://localhost:7070/api/Registers/UpdateRegister",{id,name,email,password,mobile})
      .then((result)=>{
        console.log(result);
        alert("Update Register Successfully!!");
        fetchRegister();
        setId();
        setName();
        setEmail();
        setPassword();
        setMobile();
        setBtnChnage("Submit");
      })
      .catch((error)=>{
        console.error("Error Updating Register!!",error);
    })
    }
  };

  return (
   <>
   <div className='container border w-50 vh-auto bg-light mt-3'>
     <div className='row align-item-center justify-content-center p-3'>
       <div className='text-center mb-2'>
         <h4>Register Form</h4>
       </div> 
       <hr/>
      <form onSubmit={addRegister}>
         <div className='form-group mb-2'>
         <label htmlFor='name' className='form-label'>Name:</label>  
         <input type='text' className='form-control' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} autoComplete='of'/> 
         </div>
         <div className='form-group mb-2'>
            <label htmlFor='email' className='form-label'>Email:</label>   
            <input type='email' className='form-control' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='of'/> 
         </div>  
         <div className='form-group mb-2'>
           <label htmlFor='password' className='form-label'>Password:</label>   
           <input type='password' className='form-control' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} autoComplete='of'/> 
         </div>  
         <div className='form-group mb-2'>
            <label htmlFor='mobile' className='form-label'>Mobile:</label>   
            <input type='text' className='form-control' placeholder='Enter your mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} autoComplete='of' maxLength={10} /> 
         </div>  
         <div className='mt-3 text-center'>
           <button type="submit" className="btn btn-success btn-sm">{btnChange==="Submit"}Submit</button>  
         </div>  
         <div className='mt-1 text-center'><Link to='/login'>Login</Link></div> 
       </form> 
     </div>
   </div>
   </>
  )
}

export default Register