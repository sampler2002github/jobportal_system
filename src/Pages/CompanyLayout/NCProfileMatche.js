import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProfileMatches = () => {
  const [jobList, setJobList] = useState([]); // All data from API
  const [selectedJob, setSelectedJob] = useState(null); // Selected job details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://localhost:7070/api/MyAccount/GetAllMyAccounts");

      if (Array.isArray(response.data)) {
        setJobList(response.data);
      } else {
        setError("Unexpected response format.");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleViewClick = (job) => {
    // Toggle detailed view for the selected job
    setSelectedJob((prevJob) => (prevJob?.id === job.id ? null : job));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {selectedJob ? (
            // Detailed view for the selected job
            <div className="card mb-3 mt-2" style={{ borderColor: '#0000FF' }}>
              <div className="card-header" style={{ backgroundColor: '#D1E7FF', textAlign: 'center' }}>
                <strong>:: Jobseeker Details ::</strong>
              </div>
              <div className="card-body">
                <p>
                  <strong>Jobseeker Name:</strong>{" "}
                  <span style={{ color: 'maroon' }}>{`${selectedJob.firstName} ${selectedJob.lastName}` || 'N/A'}</span>
                </p>
                <p>
                  <strong>Address:</strong>{" "}
                  <span style={{ color: 'maroon' }}>{selectedJob.address || 'N/A'}</span>
                </p>
                <p>
                  <strong>City:</strong>{" "}
                  <span style={{ color: 'maroon' }}>{selectedJob.city || 'N/A'}</span>
                </p>
                <p>
                  <strong>Pincode:</strong>{" "}
                  <span style={{ color: 'maroon' }}>{selectedJob.pinCode || 'N/A'}</span>
                </p>
                <p>
                  <strong>Mobile No:</strong>{" "}
                  <span style={{ color: 'maroon' }}>{selectedJob.mobile || 'N/A'}</span>
                </p>
                <p>
                  <strong>Degree:</strong>{" "}
                  <span style={{ color: 'maroon' }}>{selectedJob.degree || 'N/A'}</span>
                </p>
                <p>
                  <strong>Skill:</strong>{" "}
                  <span style={{ color: 'maroon' }}>{selectedJob.skill || 'N/A'}</span>
                </p>
                <p>
                  <strong>Experience:</strong>{" "}
                  <span style={{ color: 'maroon' }}>{selectedJob.experience || 'N/A'}</span>
                </p>
                <p className="mt-5">
                  <label htmlFor="message" className="form-label">
                    Send Message:
                  </label>
                  <textarea className="form-control"></textarea>
                </p>
                <button className="btn btn-primary btn-sm">Send</button>
                <button className="btn btn-secondary btn-sm ms-2" onClick={() => setSelectedJob(null)}>
                  Back
                </button>
              </div>
            </div>
          ) : (
            // Default view with all jobs
            jobList.map((job) => (
              <div className="card mb-3 mt-2" key={job.id} style={{ borderColor: '#008000' }}>
                <div className="card-header" style={{ backgroundColor: '#D1F3D1' }}>
                  <strong>Jobseeker Name:</strong>{" "}
                  <span style={{ color: '#990033' }}>{job.firstName || 'N/A'}</span>{" "}
                  <span style={{ color: '#990033' }}>{job.lastName || 'N/A'}</span>
                </div>
                <div className="card-body">
                  <p>
                    <strong>Degree:</strong> {job.degree || 'N/A'}
                  </p>
                  <p>
                    <strong>Skill:</strong> {job.skill || 'N/A'}
                  </p>
                  <p>
                    <strong>Experience:</strong> {job.experience || 'N/A'}
                  </p>
                  <button className="btn btn-primary btn-sm" onClick={() => handleViewClick(job)}>
                    View
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileMatches;
