import "../../pages-css/JobDetailsPage.css";
import { Button, Container, Row, Col, Badge } from "react-bootstrap";
import dellImg from "../../assets/icons/jobscape/DellLogo.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SeekJobPage from "./SeekJobPage";
import JobAcceptedModal from "../../components/jobscape/JobAcceptedModal";
import UploadWorkModal from "../../components/jobscape/UploadWorkModal";

export default function JobDetailsPage(props) {
  // Now i need to make this connect with the job list page, this page will change the structure if it's taken
  const [saved, setSaved] = useState(false);
  const [jobAccepted, setJobAccepted] = useState(false);
  const [showAcceptedModal, setShowAcceptedModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const jobDetails = {
    title: "Web Development",
    companyName: "DELL Technology",
    category: "Tech & IT",
    filters: ["Web Dev", "Long Term", "Programming", "RM 8,000", "Remote"],
    postedTime: "2 hours ago",
    description: `We are looking for a talented web developer to join our team. As a web developer, you will be responsible for designing, coding, and modifying websites, from layout to function and according to a client's specifications. You will strive to create visually appealing sites that feature user-friendly design and clear navigation.`,
    duration: "Long Term",
    deadline: "Before August 2024",
    budget: 8000.0,
    requiredSkills: [
      "Proficiency in HTML, CSS, JavaScript, and other relevant web development languages",
      "Experience with front-end frameworks such as React.",
      "Familiarity with back-end development languages and frameworks, such as Node.js.",
    ],
    contactInfo: "+6 012 3456789 (Mr Lee)",
    additionalInfo: "-",
  };
  const navigate = useNavigate();
  const filters = ["Web Dev", "Long Term", "Programming", "RM 8,000", "Remote"];
  const toggleBookmark = () => {
    setSaved(!saved);
  };

  const handleUploadClick = () => {
    setShowUploadModal(true);
  };
  const handleSubmitClick = () => {
    setShowUploadModal(false);
  };
  const handleAcceptClick = () => {
    setShowAcceptedModal(true);
    setJobAccepted(true);
  };
  const onFileChange = (files) => {
    console.log(files);
  };
  return (
    <Container className="job-details-page-container">
      <Button className="back-btn" onClick={() => navigate(-1)}>
        <p>
          <i className="bi bi-chevron-left"></i>Back
        </p>
      </Button>
      <div className="job-details-body">
        <div className="job-title-block">
          <img src={dellImg} alt="" />
          <div className="title-texts">
            <div className="title-left">
              <h3>{jobDetails.title}</h3>
              <p className="CompanyInfo">
                By <span className="CompanyName">{jobDetails.companyName}</span>{" "}
                in {"  "}
                <span className="Category">{jobDetails.category}</span>
              </p>
            </div>
            <div className="title-right">
              {jobAccepted ? (
                <>
                  <h5>
                    Completion deadline: <br />
                    <span className="big-deadline">{jobDetails.deadline}</span>
                  </h5>
                </>
              ) : (
                <>
                  <div className="bookmark" onClick={toggleBookmark}>
                    {saved ? (
                      <i className="bi bi-bookmark-fill"></i>
                    ) : (
                      <i className="bi bi-bookmark"></i>
                    )}
                  </div>
                  <p>posted {jobDetails.postedTime}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="Filters">
          {Array.isArray(jobDetails.filters) &&
            jobDetails.filters.map((filter, index) => (
              <Badge key={index} className="FilterBadge">
                {filter}
              </Badge>
            ))}
        </div>
        <h5>Job Description:</h5>
        <div className="job-desc">
          <p>{jobDetails.description}</p>
        </div>
        <p>
          Project Duration:{" "}
          <span className="duration">{jobDetails.duration}</span>
        </p>
        <p>
          Deadline for completion:{" "}
          <span className="deadline">{jobDetails.deadline}</span>
        </p>
        <p>
          Project Budget: <span className="budget">RM{jobDetails.budget}</span>
        </p>
        <p>Required Skills:</p>
        <ul className="skill-list">
          {jobDetails.requiredSkills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
        <p>
          Contact Information: <br />
          <span className="contact">{jobDetails.contactInfo}</span>
        </p>
        <p>
          Additional Information: <br />
          <span className="additional">{jobDetails.additionalInfo}</span>
        </p>
        <div className="button-group">
          {jobAccepted ? (
            <Button className="accept" onClick={handleUploadClick}>
              Upload Work
            </Button>
          ) : (
            <>
              <Button className="accept" onClick={handleAcceptClick}>
                Accept Job
              </Button>
            </>
          )}

          <Button className="chat">
            <i className="bi bi-chat-dots" /> Chat with Requester
          </Button>
        </div>
      </div>
      <JobAcceptedModal
        show={showAcceptedModal}
        onHide={() => setShowAcceptedModal(false)}
      />
      <UploadWorkModal
        show={showUploadModal}
        onHide={() => setShowUploadModal(false)}
        onFileChange={onFileChange}
        onSubmitClick={handleSubmitClick}
      />
    </Container>
  );
}
