import React, { useState } from 'react'

const FeedBack=()=> {
  const [name, setName]=useState("");
  const [mobile, setMobile]=useState("");
  const [email, setEmail]=useState("");
  const [feedBack,setFeedback]=useState("");

  const handelSubmit=async(e)=>{
    e.preventDefault();

    const feedBackdetails={
      name,mobile,email,feedBack
    };
    try {
       const response=await fetch("https://localhost:7070/api/Feedback/AddFeedBack",{
        method:"POST",
        headers:{
          "Content-Type":"application/json", 
        },
        body:JSON.stringify(feedBackdetails)
       });
       if(response.ok){
        const result=await response.json();
        alert("Feedback Send Successfully!!");
        console.log(result);
       }else{
        const errorData=await response.json();
        alert(errorData,"Failed to Send Feedback!!");
       }
    } catch (error) {
      alert("Network Error!!",error);
    }
     
  }

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
             <form onSubmit={handelSubmit}>
              <div className='row mb-2'>
                <div className='col-3'>
                <label htmlFor='name' className='form-label'>Name:</label>
                </div>
                <div className='col-9'>
                <input type='text' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='mobile' className='form-label'>Mobile:</label>
               </div>
                <div className='col-9'>
                <input type='text' className='form-control' value={mobile} onChange={(e)=>setMobile(e.target.value)} maxLength={10} />
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='email' className='form-label'>Email:</label>
               </div>
                <div className='col-9'>
                <input type='email' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='feedback' className='form-label'>FeedBack:</label>
               </div>
               <div className='col-9'>
               <textarea type='text' className='form-control' value={feedBack} onChange={(e)=>setFeedback(e.target.value)}/> 
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