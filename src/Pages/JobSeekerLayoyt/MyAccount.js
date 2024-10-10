import React from 'react'

function MyAccount() {
  return (
    <>
    <div className='container border w-50 vh-auto'>
       <div className='row mt-1'>
         <div className='col-3'>
          <label htmlFor='name' className='form-label'>First Name:</label>
         </div>
         <div className='col-9'>
            <input type='text' className='form-control' placeholder='Enter First Name'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='name' className='form-label'>Last Name:</label>
         </div>
         <div className='col-9'>
            <input type='text' className='form-control' placeholder='Enter Last Name'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='name' className='form-label'>Address:</label>
         </div>
         <div className='col-9'>
            <input type='text' className='form-control' placeholder='Enter Address'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='name' className='form-label'>City:</label>
         </div>
         <div className='col-9'>
             <select  className='form-control'>
                <option>Delhi</option>
             </select>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='name' className='form-label'>Pincode:</label>
         </div>
         <div className='col-9'>
         <input type='text' className='form-control' placeholder='Enter Pincode'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='contact' className='form-label'>Contact:</label>
         </div>
         <div className='col-9'>
         <input type='text' className='form-control' placeholder='Enter Contact Person'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='mobile' className='form-label'>Mobile:</label>
         </div>
         <div className='col-9'>
         <input type='text' className='form-control' placeholder='Enter Mobile'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='degree' className='form-label'>Degree:</label>
         </div>
         <div className='col-9'>
         <select  className='form-control'>
                <option>Select</option>
             </select>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='degree' className='form-label'>Skill:</label>
         </div>
         <div className='col-9'>
         <select  className='form-control'>
                <option>Select</option>
             </select>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='degree' className='form-label'>Details:</label>
         </div>
         <div className='col-9'>
         <input type='text' className='form-control' placeholder='Good Communication'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='degree' className='form-label'>PassingYear:</label>
         </div>
         <div className='col-9'>
         <input type='text' className='form-control' placeholder='Enter PassingYear'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='experience' className='form-label'>Experience:</label>
         </div>
         <div className='col-9'>
         <select  className='form-control'>
                <option>Select</option>
             </select>
          </div>
       </div> 
        <button className='btn btn-success mt-2'>Update Details</button> 
    </div>
    </>
  )
}

export default MyAccount