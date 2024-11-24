
import React, { useState } from 'react'

const NCMyAccount=()=> { 
    const [companyName,setCompanyName]=useState("");
    const [contactPerson,setContactPerson]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [pinCode,setPincode]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [type,setType]=useState("");
    const [detail,setDetail]=useState(""); 
    
    
    const handelSubmit=async(e)=>{
        e.preventDefault();
        
        const accountDetails={
         companyName,contactPerson,address,city,pinCode,mobile,email,type,detail
        };
        try {
          const response=await fetch("https://localhost:7070/api/NCMyAccount/AddAccount",{
            method:"POST",
            headers:{
               "Content-Type":"application/json", 
            },
            body:JSON.stringify(accountDetails)
          });
          if (response.ok) {
            const result=await response.json();
            alert("Added Account Successfully!!");
            console.log(result);
            setCompanyName('');
            setAddress('');
            setEmail('');
            setCity('');
            setContactPerson('');
            setMobile('');
            setDetail('');
            setPincode('');
            setType('');
          } else {
            const errorData=await response.json();
            alert(errorData ,"Failed to Upload details!"); 
          }

        } catch (error) {
         alert("Network Error!!",error);
        }
    }
    

  return (
    <>
   <div className='container vh-auto bg-light'>
    <form onSubmit={handelSubmit}>
       <div className='row mt-2'>
         <div className='col-4'>
          <label htmlFor='companyname' className='form-label'>Company Name:</label>
         </div>
         <div className='col-8'>
            <input type='text' className='form-control' placeholder='Enter Company Name' value={companyName} onChange={(e)=>setCompanyName(e.target.value)} autoComplete='of'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-4'>
          <label htmlFor='contactperson' className='form-label'>Contact Person:</label>
         </div>
         <div className='col-8'>
            <input type='text' className='form-control' placeholder='Enter Contact Person' value={contactPerson} onChange={(e)=>setContactPerson(e.target.value)} autoComplete='of'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-4'>
          <label htmlFor='address' className='form-label'>Address:</label>
         </div>
         <div className='col-8'>
            <textarea type='text' className='form-control' placeholder='Enter Address' value={address} onChange={(e)=>setAddress(e.target.value)} autoComplete='of'/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-4'>
          <label htmlFor='city' className='form-label'>City:</label>
         </div>
         <div className='col-8'>
             <select  className='form-control' value={city} onChange={(e)=>setCity(e.target.value)}>
                <option>Select</option>
                <option>Delhi</option>
                <option>Lucknow</option>
                <option>Noida</option>
                <option>Mohali</option> 
             </select>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-4'>
          <label htmlFor='pincode' className='form-label'>Pincode:</label>
         </div>
         <div className='col-8'>
         <input type='text' className='form-control' placeholder='Enter Pincode' value={pinCode} onChange={(e)=>setPincode(e.target.value)} autoComplete='of'/>
          </div>
       </div> 
       <div className='row mt-1'>
       <div className='col-4'>
          <label htmlFor='mobile' className='form-label'>Mobile:</label>
         </div>
         <div className='col-8'>
         <input type='text' className='form-control' placeholder='Enter Mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} autoComplete='of' maxLength={10}/>
          </div>
       </div>
       <div className='row mt-1'>
       <div className='col-4'>
          <label htmlFor='email' className='form-label'>Email:</label>
         </div>
         <div className='col-8'>
         <input type='email' className='form-control' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='of'/> 
       </div>
       </div>
       <div className='row mt-1'>
       <div className='col-4'>
          <label htmlFor='jobtype' className='form-label'>Type:</label>
         </div>
         <div className='col-8'>
         <select  className='form-control' value={type} onChange={(e)=>setType(e.target.value)}>
                <option>Select</option>
                <option>Software developer</option>
                <option>Full stack developer</option>
                <option>UX/UI designer</option>
                <option>Data scientist</option>
                <option>Web developer</option>
             </select>
          </div>
       </div>  
       <div className='row mt-1'>
       <div className='col-4'>
          <label htmlFor='detail' className='form-label'>Details:</label>
         </div>
         <div className='col-8'>
         <textarea type='text' className='form-control' placeholder='Enter Detail' value={detail} onChange={(e)=>setDetail(e.target.value)} autoComplete='of'/>
          </div>
       </div>
        <center><button type='submit' className='btn btn-success mt-2 mb-2 btn-sm'>Register</button></center>
        </form> 
    </div> 
    </>
  )
}

export default NCMyAccount