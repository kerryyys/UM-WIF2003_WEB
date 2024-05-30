import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SmallTitle from "../../components/jobscape/SmallTitle";
import InProgressProjectTab from "../../components/jobscape/InProgressProjectTab";
import CompletedProjectTab from "../../components/jobscape/CompletedProjectTab";
import ProjectPostedTab from "../../components/jobscape/ProjectPostedTab";
import axios from "axios";
import "../../components-css/jobscape/Notification.css";
import "../../pages-css/Jobscape/ReviewProjectPage.css";

const ReviewProjectPage = () => {
  const navigate = useNavigate();
  const [ProjectPosted, setProjectPosted] = useState([]);
  const [inProgressProjects, setInProgressProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postedResponse = await axios.get(
          "http://localhost:5050/recruite/posted"
        );
        setProjectPosted(postedResponse.data);

        const inProgressResponse = await axios.get(
          "http://localhost:5050/recruite/in-progress"
        );
        setInProgressProjects(inProgressResponse.data);

        const completedResponse = await axios.get(
          "http://localhost:5050/recruite/completed"
        );
        setCompletedProjects(completedResponse.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className="ReviewProjectPage">
      {/* Back button */}
      <div className="ReviewBackBtn">
        <Button className="BackBtn"  onClick={() => (window.location.href = '/SeekTalentPage')}>
          <p>
            <i className="bi-chevron-left" />
            Back
          </p>
        </Button>
      </div>

      {/* Review header */}
      <div className="Reviewheader">
        <SmallTitle
          className="ReviewTitle"
          title="Review Your Recent Project"
          fontWeight="700"
          fontSize="36px"
        />
      </div>

      {/* Project Posted section */}
      <div className="ProjectPosted">
        <SmallTitle title="Project Posted" fontWeight="400" fontSize="32px" />
        <div className="ProjectPostedList">
          {ProjectPosted.map((project) => (
            <ProjectPostedTab
              key={project._id}
              projectId={project._id}
              projectTitle={project.projectTitle}
              due={new Date(project.deadline).toLocaleDateString("en-GB")}
              budget={project.projectBudget}
              postedDate={project.createdAt}
            />
          ))}
        </div>
      </div>

      {/* In Progress section */}
      <div className="InProgress">
        <SmallTitle title="In Progress" fontWeight="400" fontSize="32px" />
        <div className="InProgressList">
          {inProgressProjects.map((project) => (
            <InProgressProjectTab
              key={project._id}
              projectId={project._id}
              projectTitle={project.projectTitle}
              due={new Date(project.deadline).toLocaleDateString("en-GB")}
              budget={project.projectBudget}
              collaborator={project.serviceProvider}
            />
          ))}
        </div>
      </div>

      {/* Completed section */}
      <div>
        <SmallTitle title="Completed" fontWeight="400" fontSize="32px" />
        <div className="CompletedProjectList">
          {completedProjects.map((project) => (
            <CompletedProjectTab
              key={project._id}
              projectId={project._id}
              projectTitle={project.projectTitle}
              due={new Date(project.deadline).toLocaleDateString("en-GB")}
              budget={project.projectBudget}
              collaborator={project.serviceProvider}
              setShowNotification={setShowNotification}
            />
          ))}
        </div>
      </div>

      {showNotification && (
        <div className="overlay">
          <div className="post-project-notification">
            <p>Your review has been successfully submitted!</p>
            <button onClick={() => setShowNotification(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewProjectPage;
