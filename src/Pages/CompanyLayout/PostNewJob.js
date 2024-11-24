import React, { useState } from 'react'

const PostNewJob=()=> {
    const [jobTitle,setJobTitle]=useState();
    const [degree,setDegree]=useState();
    const [skill,setSkill]=useState();
    const [salary,setSalary]=useState();
    const [experience,setExperience]=useState();
    const [noOfVacancy,setNoOfVacancy]=useState();
    const [detail,setDetail]=useState();
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
      let errors = {};
      let isValid = true;
  
      // Name validation
      if (!jobTitle) {
        errors.jobTitle = 'Please enter your jobTitle';
        isValid = false;
      } else if (jobTitle.length < 5) {
        errors.jobTitle = 'Please enter vailed jobTitle';
        isValid = false;
      }
       
      if (!salary) {
         errors.salary = 'Salary is required';
         isValid = false;
       }  

   if (!detail) {
        errors.detail = 'Details is required';
        isValid = false;
      } else if (detail.length < 5) {
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
            setJobTitle('');
            setDegree('');
            setSkill(''); 
            setSalary('');
            setExperience('');
            setNoOfVacancy('');
            setDetail('');
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
                {formErrors.jobTitle && <div className='text-danger'>{formErrors.jobTitle}</div>}

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
                {formErrors.salary && <div className='text-danger'>{formErrors.salary}</div>}

            </div>
         </div>
         <div className='row mt-1'>
            <div className='col-3'>
                <label htmlFor='experience' className='form-label'> Experience:</label>
            </div>
            <div className='col-9'>
              <select className='form-control' value={experience} onChange={(e)=>setExperience(e.target.value)} >
                <option>Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
                 
            </div>
         </div> 
         <div className='row mt-1'>
            <div className='col-3'>
                <label htmlFor='noofvacancy' className='form-label'>Vacancy:</label>
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
                {formErrors.detail && <div className='text-danger'>{formErrors.detail}</div>} 
            </div>
         </div>
        <center> <button type='submit' className='btn btn-success mt-2 mb-2 btn-sm'>Post JOB</button></center>
       </form>
     </div>
     </>
  )
}

export default PostNewJob