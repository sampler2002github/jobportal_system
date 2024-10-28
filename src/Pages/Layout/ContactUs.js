import React, { useState } from 'react'

const ContactUs=()=> {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [mobile, setMobile]=useState("");
  const [message, setMessage]=useState("");
  
  const handelSubmit=async(e)=>{
    e.preventDefault();  

    const personDetails={
      name,email,mobile,message
    };
    try {
      const response=await fetch("https://localhost:7070/api/ContactUs/AddDetail",{
       method:"POST",
       headers:{
        "Content-Type":"application/json",
       },
       body:JSON.stringify(personDetails)
      });
      if (response.ok) {
        const result=await response.json();
        alert("Added Person details Successfully!!");
        console.log(result);
      } else {
        const errorData=await response.json();
        alert(errorData ,"Failed to Contact details!"); 
      }
    } catch (error) {
      alert("Network Error!!",error);
    }
  }

  return (
   <>
   <div className='container mt-3'>
   <form onSubmit={handelSubmit}>
        <div className='row'>
          <div className='col-4'></div>
          <div className='col-4 border bg-light'>  
             <div className='text-center mt-4'>
                  <h4>Contact Us</h4>
               </div>
               <hr/>
              <div className='row mb-2'>
                <div className='col-3'>
                <label htmlFor='name' className='form-label'>Name:</label>
                </div>
                <div className='col-9'>
                <input type='text' className='form-control' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} autoComplete='of'/>
                </div>
              </div>
              <div className='row mb-2'>
                <div className='col-3'>
                <label htmlFor='email' className='form-label'>Email:</label>
                </div>
                <div className='col-9'>
                <input type='text' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='mobile' className='form-label'>
                  Mobile:
                </label>
               </div>
                <div className='col-9'>
                <input type='text' className='form-control' value={mobile} onChange={(e)=>setMobile(e.target.value)} maxLength={10}/>
                </div>
              </div> 
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='message' className='form-label'>Message:</label>
               </div>
               <div className='col-9'>
               <textarea type='message' className='form-control' value={message} onChange={(e)=>setMessage(e.target.value)}/> 
               </div>
              </div> 
                
             <center> <button type='submit' className='btn btn-success mb-4 mt-2' >Submit</button></center>
              
             
          </div>
          <div className='col-4'></div>
        </div>
        </form> 
      </div>
   </>
  )
}

export default ContactUs