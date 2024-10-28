import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login=({onLogin})=>{
  const navigate=useNavigate(); 
  const [userId, setUserId]=useState("");
  const [password, setPassword]=useState("");
  const [error,setError]=useState("");
  
  const handelLogin=async(e)=>{
    e.preventDefault();
    
    if(!userId || !password){
      setError("Please enter both Email & Password");
      return;
    }
    try {
      const response=await axios.post("https://localhost:7070/api/Logins",{userId,password});
      const data=response.data;
      console.log(data);
      
      /*Login based on the Role....*/
      switch(data.role){
        case "Admin": 
        navigate("/adminlayout")
        break;
        case "Company":
        navigate("/newcompanylayout")
        break;
        case "JobSeeker":
        navigate("/jobseekerlayout")
        break;
        default:
        setError("This is Unaxcepted Role!!");
      }
      if(onLogin){
        onLogin(data);
      }
    } catch (error) {
      setError("Login Faild!!");
    }

  };  
   
  return (
    <>
    <div className='col-4 d-flex-col'>  
     <div className='d-flex align-item-center justify-content-center w-100 vh-40'>
        <div className='form_container p-5 rounded bg-dark text-white w-80 my-1'>  

                <form onSubmit={handelLogin}>
                  {error && <div className='alert alert-danger'>{error}</div>}
                <div className='text-center mb-2'>
                  <h4>Login Form</h4>
                </div>
                <div className='form-group mb-2'>
                <label htmlFor='email' className='form-label'>
                    Email Address:
                    </label>   
                    <input type='email' className='form-control' placeholder='Enter your email' value={userId} onChange={(e)=>setUserId(e.target.value)}/> 
                </div>         
                <div className='form-group mb-2'>
                <label htmlFor='password' className='form-label'>
                    Password:
                    </label>   
                    <input type='password' className='form-control' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/> 
                </div>  
               <div className='row'>
               <div className='col-sm-4 mx-4'>
                    <button type='submit' className='btn btn-primary'>Login</button>
                  </div> 
                  <div className='col-sm-4'>
                    <button type='submit' className='btn btn-primary'>SignUp</button>
                  </div>
               </div>
                </form> 
           </div>
        </div>
        </div>
    </>
  );
};

export default Login