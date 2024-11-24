import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NCMyPostedJob = () => {  
  const [jobs, setJobs] = useState([]); 
  const [selectedJobId, setSelectedJobId] = useState(null); 
  const [jobDetails, setJobDetails] = useState(null); 

  useEffect(() => {
    fetchJobs();  
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('https://localhost:7070/api/PostNewJob/GetAllNewJobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs!', error);
    }
  };

  const fetchJobDetails = async (jobId) => {
    try {
      const response = await axios.get(`https://localhost:7070/api/PostNewJob/GetNewJobById?id=${jobId}`);
      setJobDetails(response.data);
    } catch (error) {
      console.error('Error fetching job details!', error);
    }
  };

  const handleSelectJob = () => {
    if (selectedJobId) {
      fetchJobDetails(selectedJobId);
    }
  }; 

  const handleRemoveJob = (id) => {
    axios
      .delete(`https://localhost:7070/api/PostNewJob/DeleteNewJob?Id=${id}`)
      .then((result) => {
          console.log(result);
          alert("Job deleted successfully!");
          fetchJobs();  
          setJobDetails(null);  
      })
      .catch((error) => {
          console.error("Error deleting job", error);
      });
};

   

  return (
    <>
      <div className='container'>
        <div className='row p-3'>
          <div className='col-1'></div>
          <div className='col-3'> 
            <label htmlFor='selectjob' className='form-label'>Select Job:</label>
          </div>
          <div className='col-5'>
        <select   style={{width:'100%'}} value={selectedJobId} onChange={(e) => setSelectedJobId(e.target.value)}>
              <option value="">Select a job</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.jobTitle}
                </option>
              ))}
            </select>
          </div>
          <div className='col-2'>
            <button className="btn btn-success btn-sm" onClick={handleSelectJob}>
              Select
            </button>
          </div>
          <div className='col-1'></div>
        </div>
          
        {jobDetails && (
          <div className='row'>
            <div className='col-2'></div>
            <div className='col-8'>
            <div className="card-body">                   
                  <p><strong>Job Title :</strong>  <span style={{color:'maroon'}}>{jobDetails.jobTitle}</span></p>
                  <p><strong>Degree :</strong>  <span style={{color:'maroon'}}>{jobDetails.degree}</span></p>   
                  <p><strong>Skill :</strong>  <span style={{color:'maroon'}}>{jobDetails.skill}</span></p>
                  <p><strong>Salary :</strong>  <span style={{color:'maroon'}}>{jobDetails.salary}</span></p>
                  <p><strong>Experience :</strong>  <span style={{color:'maroon'}}>{jobDetails.experience}</span></p>
                  <p><strong>Vacancy :</strong>  <span style={{color:'maroon'}}>{jobDetails.noOfVacancy}</span></p>
                  <p><strong>Detail :</strong>  <span style={{color:'maroon'}}>{jobDetails.detail}</span></p> 
                </div>
              < button type = "button" className = "btn btn-danger btn-sm mb-3" onClick ={ () => handleRemoveJob(jobDetails.id)}>Remove Job</ button >
            </div>
            <div className='col-2'></div>
          </div>
        )}
      </div>
    </>
  );
}

export default NCMyPostedJob;
