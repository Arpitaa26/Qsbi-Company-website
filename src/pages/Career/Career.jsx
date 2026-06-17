import React from 'react';
import { Link } from "react-router-dom";
// eslint-disable-next-line react-refresh/only-export-components
export const career_data = [
  {
    id: 1,
    title: "Technical Support Specialist",
    location: "Bangalore",
    salary: "20,000 INR - 25,000 INR",
    badge: "PART-TIME",
    skill: ["MS Office", "ChatGPT", "Communication", "Ticketing Tools"],
    description: "Provide technical assistance to customers via email, chat, or phone. Troubleshoot issues related to hardware, software, and network systems. Escalate unresolved problems to higher technical teams."
  },
  {
    id: 2,
    title: "Frontend Developer",
    location: "Hyderabad",
    salary: "25,000 INR - 30,000 INR",
    badge: "FULL-TIME",
    skill: ["HTML", "CSS", "JavaScript", "React", "MS Office"],
    description: "Develop user interfaces using modern frontend technologies. Collaborate with designers and backend developers to deliver seamless user experiences."
  },
  {
    id: 3,
    title: "Backend Developer",
    location: "Chennai",
    salary: "30,000 INR - 35,000 INR",
    badge: "FULL-TIME",
    skill: ["Node.js", "Express", "MongoDB", "REST API", "Authentication"],
    description: "Design and develop scalable backend systems. Ensure secure and efficient data processing and storage with optimized APIs."
  },
  {
    id: 4,
    title: "UI/UX Designer",
    location: "Mumbai",
    salary: "35,000 INR - 40,000 INR",
    badge: "FULL-TIME",
    skill: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    description: "Create user-centric designs based on research and testing. Work closely with developers to implement effective UI/UX designs."
  },
  {
    id: 5,
    title: "Sales Representative",
    location: "Delhi",
    salary: "40,000 INR - 45,000 INR",
    badge: "FULL-TIME",
    skill: ["Negotiation", "CRM", "Lead Generation", "MS Excel"],
    description: "Identify potential clients, pitch products or services, and close sales. Maintain customer relationships and achieve sales targets."
  },
  {
    id: 6,
    title: "Marketing Manager",
    location: "Kolkata",
    salary: "45,000 INR - 50,000 INR",
    badge: "FULL-TIME",
    skill: ["Digital Marketing", "SEO", "Content Strategy", "Team Management"],
    description: "Plan and execute marketing campaigns across various channels. Analyze data and trends to optimize performance and ROI."
  }
];

 function Career() {
  return (
    <>
  {/* Hello world */}
  {/* Page Title */}
  <div className="page-title light-background">
    <div className="container">
      <h1>Career</h1>
    </div>
  </div>
  {/* End Page Title */}
  {/* Starter Section Section */}
  <section id="starter-section" className="starter-section section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <h2>Featured Jobs</h2>
      <p>
      Choose jobs from our Company
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" data-aos="fade-up">
      <div className="row g-4">
        {/* Job Card 1 */}
        {
          career_data.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="p-4 bg-light job-card position-relative">
                <h6 className="fw-bold">{item.title}</h6>
                <span className="job-badge badge-part-time">{item.badge}</span>
                <p className="text-muted mt-2 mb-1">Salary: {item.salary}</p>
                <p className="mb-1">
                  <i className="bi bi-geo-alt" /> {item.location}
                </p>
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-group d-flex">
                    <img src="https://i.pravatar.cc/30?img=1" alt="user" />
                    <img src="https://i.pravatar.cc/30?img=2" alt="user" />
                    <img src="https://i.pravatar.cc/30?img=3" alt="user" />
                  </div>
                  <small className="ms-2 text-muted">10+ applicants</small>
                </div>
                <div className="d-flex justify-content-between">
                  <Link to={`/job/${item.id}`} className="btn btn-outline-secondary btn-sm">
                    View details
                  </Link>
                  <button className="btn apply-btn btn-sm">Apply now</button>
                </div>
              </div>
            </div>
          ))
        }

        
      </div>
      <div className="text-center mt-4">
        <a href="#" className="view-all">
          View all
        </a>
      </div>

    </div>
  </section>
  {/* /Starter Section Section */}
</>

  )
}
export default Career;