import React from 'react'
import { Link } from 'react-router-dom'

function JobSeekerLayout() {
  return (
    <div className='container border mt-2'> 
    <div className='row p-2'>
    <div className='col-3'>
      <div className='row border'>
      <div className='text-center mb-2 border'>
        <h5>Welcome</h5>
        </div> 
        <div className='form-group mb-2'>
         <img src="/Logo/KPF.jpg" alt='Public' style={{marginLeft:'80px'}} />
        </div>
        <div className='mt-3 mb-1 text-center'>
         <input type='file' />
        </div>
      </div>
      <div className='row border mt-2'>
        <div className='form-group text-center border mt-1'> 
               <Link to='/jobseekeraccount'>My Account</Link> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <Link to='/to'>Job Matches</Link> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <Link to='/to'>Profile Matches</Link> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <Link to='/to'>Applied Job</Link> 
         </div>  
         <div className='form-group text-center border mt-1 mb-1'> 
                 <Link to='/to'>Change Password</Link> 
         </div> 
      </div>
     </div>


     <div className='col-6'>
       <div className='container border'>
        <div className='text-center mb-2 border'>
          <h5>Find Job here within a second!!</h5>
         </div>
         <div className='row'>
         <div className='col-1'>
           <label htmlFor='name' className='form-label'>Name:</label> 
         </div>
         <div className='col-4'>  
          <input type='text' className='form-control'/> 
         </div> 
         <div className='col-1'>
         <label htmlFor='skill' className='form-label'>Skill:</label>
           </div> 
           <div className='col-4'>  
          <select className='form-control'>
           <option>ASP.Net</option>
           </select> 
         </div> 
         </div>
         <div className='row mt-2 mb-3'>
         <div className='col-3'>
           <label htmlFor='qualification' className='form-label'>Qualification:</label> 
         </div>
         <div className='col-4'>  
          <select className='form-control'>
           <option>MBA</option>
           </select> 
         </div> 
         <div className='col-2'>
         <button type='submit' className='btn btn-success'>Search</button>  
         </div>
         </div>
         <div className='row border text-center' style={{height:'250px'}}> 
               
               
         </div>
       </div>
     </div>
     <div className='col-3'>
     <div className='row border mt-2'>
        <div className='form-group text-center border mt-1'> 
                 <Link to='/'>Log Out</Link> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <Link to='/to'>My Message</Link> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <Link to='/to'>My Inbox</Link> 
         </div> 
         <div className='form-group text-center border mt-1 mb-1'> 
                 <Link to='/to'>My Sent</Link> 
         </div>   
      </div>
     </div>
    </div>
   </div>
  )
}

export default JobSeekerLayout