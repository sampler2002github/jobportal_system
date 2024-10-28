import React from 'react' 
import { Link } from 'react-router-dom'

function AdminLayout() {
  return (
    <>
     <div className='container border mt-2'>  
    <div className='row p-2'>
    <div className='col-3'>
      <div className='row border text-center mb-2'> 
        <h5>Welcome Admin</h5>  
      </div>
      <div className='row border mt-2'>
        <div className='form-group text-center border mt-1'> 
               <Link to='/to'>Jobseeker Report</Link> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <Link to='/to'>Company Report</Link> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <Link to='/to'>FeedBack Report</Link> 
         </div>  
         <div className='form-group text-center border mt-1 mb-1'> 
                 <Link to='/to'>Log Out</Link> 
         </div>
      </div>
     </div>


     <div className='col-9'>
       <div className='container border'>
        <div className='row text-center mb-2 border' style={{backgroundColor:"lightGray"}}>
          <h5>JobSeeker Report</h5>
         </div>
         <div className='row'> 
         <div className='col-3'>
         <label htmlFor='skill' className='form-label'>Select JobSeeker:</label>
           </div> 
           <div className='col-4'>  
          <select className='form-control'>
           <option>a23@gmail.com</option>
           </select> 
         </div> 
         <div className='col-2 mb-5'>
         <button type='submit' className='btn btn-success'>Select</button>  
         </div>
         </div> 
       </div>
     </div>
     
    </div>
   </div>
    </>
  )
}

export default AdminLayout