import React from 'react'

function FeedBack() {
  return (
     <>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4 border bg-light'>
              <div className='text-center mt-4'>
                  <h4>FeedBack Form</h4>
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
               <label htmlFor='contact' className='form-label'>
                  Mobile:
                </label>
               </div>
                <div className='col-9'>
                <input type='number' className='form-control'/>
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='email' className='form-label'>
                 Email:
                </label>
               </div>
                <div className='col-9'>
                <input type='email' className='form-control'/>
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='feedback' className='form-label'>
                 FeedBack:
                </label>
               </div>
               <div className='col-9'>
               <textarea type='text' className='form-control'/> 
               </div>
              </div> 
                
             <center> <button type='submit' className='btn btn-success mb-4 mt-2' >Send FeedBack</button></center>
              
             </form> 
          </div>
          <div className='col-4'></div>
        </div>
      </div>
     </>
  )
}

export default FeedBack