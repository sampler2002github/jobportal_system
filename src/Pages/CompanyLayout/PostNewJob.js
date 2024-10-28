import React, { useState } from 'react'

const PostNewJob=()=> {
    const [jobTitle,setJobTitle]=useState();
    const [degree,setDegree]=useState();
    const [skill,setSkill]=useState();
    const [salary,setSalary]=useState();
    const [experience,setExperience]=useState();
    const [noOfVacancy,setNoOfVacancy]=useState();
    const [detail,setDetail]=useState();
    
    const handelSubmit=async(e)=>{
        e.preventDefault();
        
        const postNewjob={
          jobTitle,degree,skill,salary,experience,noOfVacancy,detail
        };
        try {
          const response=await fetch("https://localhost:7070/api/PostNewJob/AddNewJob",{
            method:"POST",
            headers:{
               "Content-Type":"application/json", 
            },
            body:JSON.stringify(postNewjob)
          });
          if (response.ok) {
            const result=await response.json();
            alert("Post JOB Successfully!!");
            console.log(result);
          } else {
            const errorData=await response.json();
            alert(errorData ,"Failed to Post JOB!"); 
          }

        } catch (error) {
         alert("Network Error!!",error);
        }
    }

  return (
     <>
     <div className='container bg-light'>
       <form onSubmit={handelSubmit}>
         <div className='row mt-3'>
            <div className='col-3'>
                <label htmlFor='jobtitle' className='form-label'>Job Title:</label>
            </div>
            <div className='col-9'>
                <input type='text' className='form-control' placeholder='Enter Job Title' value={jobTitle} onChange={(e)=>setJobTitle(e.target.value)}/>
            </div>
         </div>
         <div className='row mt-1'>
            <div className='col-3'>
                <label htmlFor='degree' className='form-label'>Degree:</label>
            </div>
            <div className='col-9'>
              <select className='form-control' value={degree} onChange={(e)=>setDegree(e.target.value)}>
              <option>Select</option>
           <option>12 Pass</option>
           <option>Graduate</option>
           <option>Diploma</option> 
           <option>Masters</option>
           <option>PHD</option>
              </select>
            </div>
         </div>
         <div className='row mt-1'>
            <div className='col-3'>
                <label htmlFor='skill' className='form-label'>Skill:</label>
            </div>
            <div className='col-9'>
             <select className='form-control' value={skill} onChange={(e)=>setSkill(e.target.value)}>
               <option>Select</option>
               <option>ASP.Net</option>
               <option>VB .Net</option>
               <option>Java</option>
               <option>PHP</option>
             </select>
            </div> 
         </div>
         <div className='row mt-1'>
            <div className='col-3'>
                <label htmlFor='salary' className='form-label'>Salary:</label>
            </div>
            <div className='col-9'>
                <input type='text' className='form-control' placeholder='Enter Salary' value={salary} onChange={(e)=>setSalary(e.target.value)} />
            </div>
         </div>
         <div className='row mt-1'>
            <div className='col-3'>
                <label htmlFor='experience' className='form-label'> Experience:</label>
            </div>
            <div className='col-9'>
                <input type='text' className='form-control' placeholder='Enter Experience' value={experience} onChange={(e)=>setExperience(e.target.value)} />
            </div>
         </div> 
         <div className='row mt-1'>
            <div className='col-3'>
                <label htmlFor='noofvacancy' className='form-label'>No of vacancy:</label>
            </div>
            <div className='col-9'>
                <input type='text' className='form-control' placeholder='Enter No of Vacancy' value={noOfVacancy} onChange={(e)=>setNoOfVacancy(e.target.value)} />
            </div>
         </div>
         <div className='row mt-1'>
            <div className='col-3'>
                <label htmlFor='detail' className='form-label'>Detail:</label>
            </div>
            <div className='col-9'>
                <textarea type='text' className='form-control' placeholder='Enter Detail' value={detail} onChange={(e)=>setDetail(e.target.value)}/>
            </div>
         </div>
        <center> <button type='submit' className='btn btn-success mt-2 mb-2 btn-sm'>Post JOB</button></center>
       </form>
     </div>
     </>
  )
}

export default PostNewJob