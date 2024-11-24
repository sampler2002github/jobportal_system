import React, { useState } from 'react'

const FeedBack=()=> {
  const [name, setName]=useState("");
  const [mobile, setMobile]=useState("");
  const [email, setEmail]=useState("");
  const [feedBack,setFeedback]=useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Name validation
    if (!name) {
      errors.name = 'Please enter your name';
      isValid = false;
    } else if (name.length < 5) {
      errors.name = 'Name must be at least 5 characters';
      isValid = false;
    } 
    // Mobile validation
    if (!mobile) {
      errors.mobile = 'Mobile is required';
      isValid = false;
    } else if (mobile.length < 10) {
      errors.mobile = 'Mobile number must be 10 digits';
      isValid = false;
    }  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      errors.email = 'Enter a valid email';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const handelSubmit=async(e)=>{
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
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
        setName('');
        setMobile('');
        setEmail('');
        setFeedback('');
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
                <input type='text' className='form-control' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
                {formErrors.name && <div className='text-danger'>{formErrors.name}</div>}
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='mobile' className='form-label'>Mobile:</label>
               </div>
                <div className='col-9'>
                <input type='text' className='form-control' placeholder='Enter Your Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} maxLength={10} />
                {formErrors.mobile && <div className='text-danger'>{formErrors.mobile}</div>}
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='email' className='form-label'>Email:</label>
               </div>
                <div className='col-9'>
                <input type='email' className='form-control' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {formErrors.email && <div className='text-danger'>{formErrors.email}</div>}
                </div>
              </div>
              <div className='row mb-2'>
               <div className='col-3'>
               <label htmlFor='feedback' className='form-label'>FeedBack:</label>
               </div>
               <div className='col-9'>
               <textarea type='text' className='form-control' placeholder='Enter Your FeedBack' value={feedBack} onChange={(e)=>setFeedback(e.target.value)}/> 
                
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