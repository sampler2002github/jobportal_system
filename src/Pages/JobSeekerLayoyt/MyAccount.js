import React, { useState } from 'react'

const MyAccount=()=> {
   const [firstName,setFirstName]=useState("");
   const [lastName,setLastName]=useState("");
   const [address,setAddress]=useState("");
   const [city,setCity]=useState("");
   const [pinCode,setPincode]=useState("");
   const [mobile,setMobile]=useState("");
   const [degree,setDegree]=useState("");
   const [skill,setSkill]=useState("");
   const [details,setDetail]=useState("");
   const [salary,setSalary]=useState("");
   const [experience,setExperience]=useState("");
   const [formErrors, setFormErrors] = useState({});

   const validateForm = () => {
      let errors = {};
      let isValid = true;
  
      // Name validation
      if (!firstName) {
        errors.firstName = 'Please enter your first name';
        isValid = false;
      } else if (firstName.length < 5) {
        errors.firstName = 'FirstName must be at least 5 characters';
        isValid = false;
      }
      if (!lastName) {
         errors.lastName = 'Please enter your last name';
         isValid = false;
       } else if (lastName.length < 5) {
         errors.lastName = 'Please enter vailed lastName';
         isValid = false;
       }
       if (!address) {
         errors.address = 'Please enter your Address';
         isValid = false;
       }  
       if (!pinCode) {
         errors.pinCode = 'Please enter your PinCode';
         isValid = false;
       } else if (pinCode.length < 6) {
         errors.pinCode = 'Please enter your pincode must be 6 digits';
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
      if (!salary) {
         errors.salary = 'Salary is required';
         isValid = false;
       }  

   if (!details) {
        errors.details = 'Details is required';
        isValid = false;
      } else if (details.length < 5) {
        errors.details = 'Please enter your vailed Details';
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
      const myAccountDetails={
         firstName,lastName,address,city,pinCode,mobile,degree,skill,details,salary,experience
      };
      try {
         const response=await fetch("https://localhost:7070/api/MyAccount/AddMyAccount",{
            method:"POST",
            headers:{
               "Content-Type":"application/json",
            },
            body:JSON.stringify(myAccountDetails)
         });
         if(response.ok){
            const result=await response.json();
            alert("Added Account Successfull!!");
            console.log(result);
            setFirstName('');
            setLastName('');
            setAddress('');
            setCity('');
            setDegree('');
            setSkill('');
            setDetail('');
            setExperience('');
            setPincode('');
            setMobile('');
            setSalary('');
         }else{
            const errorData=await response.json();
            alert(errorData,"Failed to Add details");
         }
      } catch (error) {
         alert("Error Account!",error);
      }
      
   }
   
  return (
    <>
   <div className='container bg-light'>
      <form onSubmit={handelSubmit}>
       <div className='row mt-2'>
         <div className='col-3'>
          <label htmlFor='name' className='form-label'>First Name:</label>
         </div>
         <div className='col-9'>
            <input type='text' className='form-control' placeholder='Enter First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            {formErrors.firstName && <div className='text-danger'>{formErrors.firstName}</div>}

          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='name' className='form-label'>Last Name:</label>
         </div>
         <div className='col-9'>
            <input type='text' className='form-control' placeholder='Enter Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            {formErrors.lastName && <div className='text-danger'>{formErrors.lastName}</div>}

          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='name' className='form-label'>Address:</label>
         </div>
         <div className='col-9'>
            <input type='text' className='form-control' placeholder='Enter Address' value={address} onChange={(e)=>setAddress(e.target.value)}/>
            {formErrors.address && <div className='text-danger'>{formErrors.address}</div>} 
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='name' className='form-label'>City:</label>
         </div>
         <div className='col-9'>
             <select  className='form-control' value={city} onChange={(e)=>setCity(e.target.value)}>
                <option>Select</option>
                <option>Lucknow</option>
                <option>Delhi</option>
                <option>Kanpur</option>
             </select>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='name' className='form-label'>Pincode:</label>
         </div>
         <div className='col-9'>
         <input type='text' className='form-control' placeholder='Enter Pincode' value={pinCode} onChange={(e)=>setPincode(e.target.value)}/>
         {formErrors.pinCode && <div className='text-danger'>{formErrors.pinCode}</div>} 
          </div>
       </div> 
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='mobile' className='form-label'>Mobile:</label>
         </div>
         <div className='col-9'>
         <input type='text' className='form-control' placeholder='Enter Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} maxLength={10} />
         {formErrors.mobile && <div className='text-danger'>{formErrors.mobile}</div>} 
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='degree' className='form-label'>Degree:</label>
         </div>
         <div className='col-9'>
         <select  className='form-control' value={degree} onChange={(e)=>setDegree(e.target.value)}>
                <option>Select</option>
                <option>12 Pass</option>
                <option>Graduate</option>
                <option>Masters</option>
                <option>PHD</option>
             </select>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='degree' className='form-label'>Skill:</label>
         </div>
         <div className='col-9'>
         <select  className='form-control' value={skill} onChange={(e)=>setSkill(e.target.value)}>
                <option>Select</option>
                <option>ASP .NET</option>
                <option>VB .NET</option>
                <option>Java</option>
                <option>PHP</option>
             </select>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='degree' className='form-label'>Details:</label>
         </div>
         <div className='col-9'>
         <textarea type='text' className='form-control' placeholder='Enter detail' value={details} onChange={(e)=>setDetail(e.target.value)}/>
         {formErrors.details && <div className='text-danger'>{formErrors.details}</div>}

          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='salary' className='form-label'>Salary:</label>
         </div>
         <div className='col-9'>
         <input type='text' className='form-control' placeholder='Enter Salary' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
         {formErrors.salary && <div className='text-danger'>{formErrors.salary}</div>}

          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-3'>
          <label htmlFor='experience' className='form-label'>Experience:</label>
         </div>
         <div className='col-9'>
         <select  className='form-control' value={experience} onChange={(e)=>setExperience(e.target.value)}>
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
             </select>
          </div>
       </div> 
       <center> <button type='submit' className='btn btn-success mt-2 mb-2 btn-sm'>Add Details</button> </center>
        </form>
    </div>
    </>
  )
}

export default MyAccount