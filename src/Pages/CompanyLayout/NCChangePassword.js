import React from 'react'

function NCChangePassword() {
  return (
    <>
    <div className='container vh-auto bg-light'>
    <form>
       
       <div className='row mt-1'>
       <div className='col-5'>
          <label htmlFor='newpassword' className='form-label'>New Password:</label>
         </div>
         <div className='col-7'>
            <input type='text' className='form-control' placeholder='Enter New Password'  autoComplete='of'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-5'>
          <label htmlFor='cofirmpassword' className='form-label'>Confirm Password:</label>
         </div>
         <div className='col-7'>
            <input type='text' className='form-control' placeholder='Enter Confirm Password'  autoComplete='of'/>
          </div>
       </div>
        <center><button type='submit' className='btn btn-success mt-2 mb-2 btn-sm'>Submit</button></center>
        </form> 
    </div> 
    </>
  )
}

export default NCChangePassword