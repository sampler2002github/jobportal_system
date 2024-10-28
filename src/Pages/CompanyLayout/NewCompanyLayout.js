import React, { useState } from 'react'  
import PostNewJob from './PostNewJob';
import NCMyAccount from './NCMyAccount';
import NCMyPostedJob from './NCMyPostedJob';
import NCProfileMatche from './NCProfileMatche';
import NCAppliedJob from './NCAppliedJob';
import NCChangePassword from './NCChangePassword';
import NCMymessage from './NCMymessage';
import NCMyInbox from './NCMyInbox';
import NCMySent from './NCMySent';

const AdminLayout=()=> {
 const [activeKey,setActiveKey]=useState();

 const renderComponents=()=>{
        switch(activeKey){
          case "ncpostnewjob":
            return <PostNewJob/> 
            case "postedjob":
                return <NCMyPostedJob/>
          case "ncmyaccount":
            return <NCMyAccount/>
            case "ncprofilematche":
                return <NCProfileMatche/>
                case "ncappliedjob":
                return <NCAppliedJob/>
                case "ncchangepassword":
               return <NCChangePassword/>
               case "ncmymessage":
                return <NCMymessage/>
                case "ncmyinbox":
                        return <NCMyInbox/>
                        case "ncmysent":
                                return <NCMySent/>
        }
      }
        return (
    <div className='container border mt-2'>  
    <div className='row p-2'>
    <div className='col-3'>
      <div className='row border'>
      <div className='text-center mb-2 border'>
        <h5>Welcome</h5> 
        </div>  
        <p style={{textAlign:"center",color:"green"}}>Meera Academy</p>
      </div>
      <div className='row border mt-2'>
        <div className='form-group text-center border mt-1'> 
               <a href='#' onClick={()=>setActiveKey("ncpostnewjob")}>Post New Job</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("postedjob")}>My Posted Job</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("ncmyaccount")}>My Account</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("ncprofilematche")}>Profile Matche</a> 
         </div>  
         <div className='form-group text-center border mt-1 mb-1'> 
                 <a href='#' onClick={()=>setActiveKey("ncappliedjob")}>Applied Job</a> 
         </div>
         <div className='form-group text-center border mt-1 mb-1'> 
                 <a href='#' onClick={()=>setActiveKey("ncchangepassword")}>Change Password</a> 
         </div> 
         <div className='form-group text-center border mt-1 mb-1'> 
                 <a href='/to'>Log Out</a> 
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
           <option>VB .Net</option>
           <option>Java</option>
           <option>PHP</option>
           </select> 
         </div> 
         </div>
         <div className='row mt-2 mb-3'>
         <div className='col-3'>
           <label htmlFor='qualification' className='form-label'>Qualification:</label> 
         </div>
         <div className='col-4'>  
          <select className='form-control'>
           <option>Select</option>
           <option>12 Pass</option>
           <option>Graduate</option>
           <option>Diploma</option>
           <option>Degree</option>
           <option>Masters</option>
           <option>PHD</option>
           </select> 
         </div> 
         <div className='col-2'>
         <button type='submit' className='btn btn-success'>Search</button>  
         </div>
         </div>
         <div className='row border vh-auto'> 
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
                 <a href='#' onClick={()=>setActiveKey("ncmymessage")}>My Message</a> 
         </div> 
         <div className='form-group text-center border mt-1'> 
                 <a href='#' onClick={()=>setActiveKey("ncmyinbox")}>My Inbox</a> 
         </div> 
         <div className='form-group text-center border mt-1 mb-1'> 
                 <a href='#' onClick={()=>setActiveKey("ncmysent")}>My Sent</a> 
         </div>   
      </div>
     </div>
    </div>
   </div>
  )
}

export default AdminLayout