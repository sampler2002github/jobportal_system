import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
   <>
   <div className='container d-flex'>  
     <div className='d-flex align-item-center justify-content-center  w-100 vh-40'>
        <div className='form_container p-5 rounded bg-ligth border w-80 my-1'>               
                <div className='text-center mb-2'>
                  <h4>Register Form</h4>
                </div>
                <form >
                <div className='form-group mb-2'>
                <label htmlFor='name' className='form-label'>
                    Name:
                    </label>   
                    <input type='text' className='form-control' placeholder='Enter your name'/> 
                </div>         
                <div className='form-group mb-2'>
                <label htmlFor='email' className='form-label'>
                    Email:
                    </label>   
                    <input type='email' className='form-control' placeholder='Enter your email'/> 
                </div>  
                <div className='form-group mb-2'>
                <label htmlFor='password' className='form-label'>
                    Password:
                    </label>   
                    <input type='password' className='form-control' placeholder='Enter your password'/> 
                </div>  
                <div className='form-group mb-2'>
                <label htmlFor='mobile' className='form-label'>
                    Mobile:
                    </label>   
                    <input type='text' className='form-control' placeholder='Enter your mobile'/> 
                </div>  
                <div className='mt-3 text-center'>
                    <button type='submit' className='btn btn-success'>Submit</button>                     
                 </div>  
                 <div className='mt-1 text-center'>
                 <Link to='/login'>Login</Link>
                 </div>
                </form> 
           </div>
        </div>
        </div>
   </>
  )
}

export default Register