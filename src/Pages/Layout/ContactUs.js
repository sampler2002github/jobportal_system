import React from 'react'

function ContactUs() {
  return (
   <>
   <div className='container mt-3'>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4 border bg-light'>
              <div className='text-center mt-4'>
                  <h4>Contact Us</h4>
               </div>
               <hr/>
             <form>
              <div className='row mb-2'>
                <div className='col-3'>
                <label htmlFor='name' className='form-label'>
                  Name:
                </label>
                </div>
                <div className='col-9'>
                <input type='text' className='form-control'/>
                </div>
              </div>
              <div className='row mb-2'>
                <div className='col-3'>
                <label htmlFor='email' className='form-label'>
                  Email:
                </label>
                </div>
                <div className='col-9'>
                <input type='text' className='form-control'/>
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='mobile' className='form-label'>
                  Mobile:
                </label>
               </div>
                <div className='col-9'>
                <input type='text' className='form-control'/>
                </div>
              </div> 
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='feedback' className='form-label'>
                 Message:
                </label>
               </div>
               <div className='col-9'>
               <textarea type='text' className='form-control'/> 
               </div>
              </div> 
                
             <center> <button type='submit' className='btn btn-success mb-4 mt-2' >Submit</button></center>
              
             </form> 
          </div>
          <div className='col-4'></div>
        </div>
      </div>
   </>
  )
}

export default ContactUs