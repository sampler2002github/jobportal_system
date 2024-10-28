
import React, { useState } from 'react' 
import MyAccount from './MyAccount'
import JobMatches from './JobMatches';
import ProfileMatches from './ProfileMatches';
import AppliedJob from './AppliedJob';
import JSChangePassword from './JSChangePassword';
import JSMyMessage from './JSMyMessage';
import JSMySent from './JSMySent';
import JsMyInbox from './JsMyInbox';

const JobSeekerLayout=()=> {
  const [activeKey,setActiveKey]=useState("");

  const renderComponents=()=>{
    switch(activeKey){
      case "jobseekeraccount":
        return <MyAccount/>
        case "jobmatches":
          return <JobMatches/>
          case "profilematches":
            return <ProfileMatches/>
            case "appliedjob":
              return <AppliedJob/>
              case "jschnagepassword":
                return <JSChangePassword/>
                case "jsmymessage":
                  return <JSMyMessage/>
                  case "jsmyinbox":
                    return <JsMyInbox/>
                  case "jsmysent":
                    return <JSMySent/>
    }
  }

  return (
    <div className='container border mt-2 vh-auto'> 
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
      <div className='row border mt-2 vh-auto'>
        <div className='form-group text-center border mt-1'>  
               <a href='#' onClick={()=>setActiveKey("jobseekeraccount")}>My Account</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("jobmatches")}>Job Matches</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("profilematches")}>Profile Matches</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("appliedjob")}>Applied Job</a> 
         </div>  
         <div className='form-group text-center border mt-1 mb-1'> 
                 <a href='#' onClick={()=>setActiveKey("jschnagepassword")}>Change Password</a> 
         </div> 
      </div>
     </div>


     <div className='col-6'>
       <div className='container border'>
        <div className='row text-center mb-2 border' style={{backgroundColor:"lightGray"}}>
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

         <div className='row border'> 
               {renderComponents()}               
         </div>

       </div>
     </div>
     <div className='col-3'>
     <div className='row border mt-2'>
        <div className='form-group text-center border mt-1'> 
                 <a href='/'>Log Out</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("jsmymessage")}>My Message</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("jsmyinbox")}>My Inbox</a> 
         </div> 
         <div className='form-group text-center border mt-1 mb-1'> 
                 <a href='#' onClick={()=>setActiveKey("jsmysent")}>My Sent</a> 
         </div>   
      </div>
     </div>
    </div>
   </div>
  )
}

export default JobSeekerLayout