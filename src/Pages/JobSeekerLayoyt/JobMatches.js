import axios from 'axios';
import React, { useEffect, useState } from 'react';

const JobMatches = () => {
  const [jobList, setJobList] = useState([]);  
  const [filtemaroonJobs, setFiltemaroonJobs] = useState([]); 
  const [selectedCompanyDetails, setSelectedCompanyDetails] = useState(null);  
  const [selectedid, setSelectedid] = useState(null);  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try { 
      const jobsResponse = await axios.get("https://localhost:7070/api/PostNewJob/GetAllNewJobs");
      const companiesResponse = await axios.get("https://localhost:7070/api/NCMyAccount/GetAllAccounts");

      const jobsData = jobsResponse.data;
      const companiesData = companiesResponse.data;

      // Merge jobs data with company data
      const mergedData = jobsData.map((job) => {
        const company = companiesData.find((c) => c.id === job.id);  
        return {
          ...job,  
          ...company,  
        };
      });

      setJobList(mergedData);
      setFiltemaroonJobs(mergedData);  
    } catch (error) {
      console.error("Error fetching data!", error);
    }
  };

  const handleViewClick = (id) => {
    // Filter jobs and find company details by id
    const relatedJobs = jobList.filter((job) => job.id === id);
    const companyDetails = relatedJobs[0]; // Since all jobs share the same company details

    setFiltemaroonJobs(relatedJobs);
    setSelectedCompanyDetails(companyDetails);
    setSelectedid(id);
  }; 

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12"> 
          {selectedid ? (
            <> 
              {selectedCompanyDetails && (
                <div className="card mb-3 mt-2" style={{ borderColor: '#0000FF' }}>
                  <div className="card-header" style={{ backgroundColor: '#D1E7FF', textAlign: 'center' }}>
                    <strong>:: Company Detail ::</strong>
                  </div>
                  <div className="card-body">
                    <p><strong>Company Name:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.companyName || "N/A"}</span></p>
                    <p><strong>Job Title:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.jobTitle || "N/A"}</span> </p>
                    <p><strong>Address:</strong>  <span style={{color:'maroon'}}> {selectedCompanyDetails.address || "N/A"}</span></p>
                    <p><strong>City:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.city || "N/A"}</span></p>
                    <p><strong>Pincode:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.pinCode || "N/A"}</span> </p>
                    <p><strong>Contact Person:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.contactPerson || "N/A"}</span> </p>
                    <p><strong>Mobile No:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.mobile || "N/A"}</span> </p>
                    <p><strong>Degree:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.degree || "N/A"}</span> </p>
                    <p><strong>Skill:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.skill || "N/A"}</span> </p>
                    <p><strong>Experience:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.experience || "N/A"}</span> </p>
                    <p><strong>Salary:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.salary || "N/A"}</span> </p>
                    <p><strong>Vacancy:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.noOfVacancy || "N/A"}</span> </p>
                    <p><strong>Detail:</strong>  <span style={{color:'maroon'}}>{selectedCompanyDetails.detail || "N/A"}</span> </p>    
                    <button className="btn btn-primary btn-sm">Apply to Job</button>
                    <p className='mt-5'> <label htmlFor='message' className='form-label'>
                    Send Message:
                    </label>  <textarea className='form-control'></textarea></p> 
                    <button className="btn btn-primary btn-sm">Send</button>
                  </div>
                  
                </div>
              )}
            </>
          ) : (
            // Default view with all jobs
            jobList.map((job) => (
              <div className="card mb-3 mt-2" key={job.id} style={{ borderColor: '#008000' }}>
                <div className="card-header" style={{ backgroundColor: '#D1F3D1' }}>
                  <strong>Company Name:</strong>{" "}
                  <span style={{ color: '#990033' }}>{job.companyName}</span>
                </div>
                <div className="card-body">
                  <p><strong>Job Title:</strong> {job.jobTitle || "N/A"}</p>
                  <p><strong>Degree:</strong> {job.degree || "N/A"}</p>
                  <p><strong>Skill:</strong> {job.skill || "N/A"}</p>
                  <p><strong>Experience:</strong> {job.experience || "N/A"}</p>
                  <p><strong>Salary:</strong> {job.salary || "N/A"}</p>
                  <button className="btn btn-primary btn-sm" onClick={() => handleViewClick(job.id)}>View</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JobMatches;
