import React from 'react'

function Login() {
  return (
    <>
    <div className='col-4 d-flex-col'>  
     <div className='d-flex align-item-center justify-content-center w-100 vh-40'>
        <div className='form_container p-5 rounded bg-dark text-white w-80 my-1'>               
                <div className='text-center mb-2'>
                  <h4>Login Form</h4>
                </div>
                <form >
                <div className='form-group mb-2'>
                <label htmlFor='email' className='form-label'>
                    Email Address:
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
                   <input type='checkbox'/>
                   <label>Remember me</label>
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
  )
}

export default Login