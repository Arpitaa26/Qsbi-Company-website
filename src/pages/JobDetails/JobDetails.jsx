import React from 'react';
import { useParams } from 'react-router-dom';
import {career_data} from '../Career/Career';


export default function JobDetails() {
    const { id } = useParams();
    const job = career_data.find((item) => item.id === parseInt(id)); 
  
    console.log(job);
  
    if (!job) {
      return (
        <div className="container mt-5">
          <h2>Job Not Found</h2>
          <p>No job details found for ID: {id}</p>
        </div>
      );
    }
  return (
    <>
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container">
          <h1>Job Details</h1>
        </div>
      </div>

      {/* Job Details Section */}
      <section id="job-details" className="starter-section section">
        <div className="container" data-aos="fade-up">
          <div className="job-card-expanded p-4 position-relative">
            <i className="bi bi-bookmark bookmark-icon" />
            <h5 className="fw-bold">{job.title}</h5>
            <span className="job-badge">{job.badge}</span>
            <p className="text-muted mt-2 mb-3">Salary: {job.salary}</p>

            <h6 className="fw-semibold">Project Overview</h6>
            <p className="text-muted">{job.description || 'No description available.'}</p>

            <h6 className="fw-semibold mt-4">Skills</h6>
            <div className="mb-3">
                {job.skill && job.skill.length > 0 ? (
                    job.skill.map((skill, index) => (
                    <span key={index} className="tag me-2">{skill}</span>
                    ))
                ) : (
                    <span className="text-muted">No skills listed.</span>
                )}
                </div>

            <h6 className="fw-semibold">Detail Project</h6>
            <p className="mb-1">
              <span className="me-2">
                <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path
                d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM16.2 16.2L11 13V7H12.5V12.2L17 14.9L16.2 16.2Z"
                fill="#5E6368" />
                </svg>
              </span>
              {job.badge}
            </p>

            <p className="mb-1">
              <span className="me-2">
                <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path d="M12 0C6.93398 0 2.8125 4.12148 2.8125 9.1875C2.8125 10.8091 3.24094 12.4034 4.05145 13.7979C4.24041 14.123 4.45162 14.4398 4.67934 14.7396L11.6008 24H12.3991L19.3207 14.7397C19.5483 14.4398 19.7595 14.1231 19.9485 13.7979C20.7591 12.4034 21.1875 10.8091 21.1875 9.1875C21.1875 4.12148 17.066 0 12 0ZM12 12.2344C10.32 12.2344 8.95312 10.8675 8.95312 9.1875C8.95312 7.50745 10.32 6.14062 12 6.14062C13.68 6.14062 15.0469 7.50745 15.0469 9.1875C15.0469 10.8675 13.68 12.2344 12 12.2344Z" fill="#5E6368"/>
                </svg>
              </span>
              {job.location}
            </p>

            <div className="d-flex align-items-center mb-3">
              <div className="avatar-group d-flex">
                <img src="https://i.pravatar.cc/30?img=7" alt="user" />
                <img src="https://i.pravatar.cc/30?img=8" alt="user" />
                <img src="https://i.pravatar.cc/30?img=9" alt="user" />
              </div>
              <small className="ms-2 text-muted">9+ applicants</small>
            </div>

            <div className="text-end">
              <button className="btn apply-btn">Apply now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

