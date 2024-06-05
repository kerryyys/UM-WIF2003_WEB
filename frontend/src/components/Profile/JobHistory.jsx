import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../components-css/Profile/JobHistoryCSS.css";
import { useNavigate } from "react-router-dom";
import { getCompletedProjects } from "../../api/projectApi";
import { getPostedProjects } from "../../api/projectApi";
import noJob from "../../assets/profile/no_job.svg";

const JobHistory = ({ userId,role }) => {
  const [projects, setProject] = useState([]);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        if (role === "recruiter") {
          const response = await getPostedProjects(userId);
          setProject(response.postedProjects);
        } else if (role === "freelancer") {
          const response = await getCompletedProjects(userId);
          setProject(response.completedProjects);
        } else {
          console.error("Invalid user role:", role);
        }
      } catch (error) {
        console.error("Error: ", error.message);
        setError(error);
      }
    };

    fetchProjects();
  }, [userId, role]);
  
  const handleClick = (projectId) => {
    navigate(`/JobDetailsPage/${projectId}`);
  };

  if (error) {
    return <p>{error}</p>; 
  }

  if (projects.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img style={{ width: '150px', height: '150px' }} src={noJob} alt="No Job" />
      </div>
    );
  }

  return (
    <>
      {projects.map((jobInfo, index) => (
        <div key={index} className="job-history-card">
          <Row className="header">
            <Col xs={7} className="info-column">
              <h3 className="fs-5"><strong>{jobInfo.projectTitle}</strong></h3>
              <p>{jobInfo.companyName}</p>
            </Col>
            <Col xs={3} className="status-column fs-6">
              <p>{jobInfo.completed ? "Completed" : "Ongoing"}</p>
            </Col>
          </Row>
          <Row className="JobHistoryContent">
            <Col>
              <p>
                <strong>Project Description:</strong>
                <br />
                {jobInfo.projectDescription}
              </p>
              <p className="mt-2">
                <strong>Project Duration:</strong> {jobInfo.projectDuration}
              </p>
              <p className="mt-2">
                <strong>Deadline for completion:</strong> {new Date(jobInfo.deadline).toLocaleDateString()}
              </p>
              <p className="mt-2">
                <strong>Contact Information: </strong>
                {jobInfo.contactInformation}
              </p>
            </Col>
          </Row>
          <Row className="see-more" onClick={() => handleClick(jobInfo._id)}>
            <Col>
              <p className="mt-3">See More...</p>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default JobHistory;
