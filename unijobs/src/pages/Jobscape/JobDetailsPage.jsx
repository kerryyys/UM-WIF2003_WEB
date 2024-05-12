import "../../pages-css/Jobscape/JobDetailsPage.css";
import { Button, Container, Row, Col, Badge } from "react-bootstrap";
import dellImg from "../../assets/icons/jobscape/DellLogo.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SeekJobPage from "./SeekJobPage";
import JobAcceptedModal from "../../components/jobscape/JobAcceptedModal";
import UploadWorkModal from "../../components/jobscape/UploadWorkModal";
import axios from "axios";

export default function JobDetailsPage(props) {
  const { projectId } = useParams();
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [jobAccepted, setJobAccepted] = useState(false);
  const [showAcceptedModal, setShowAcceptedModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    filters: [],
    requiredSkills: [],
  });
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
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/projects/${projectId}`
        );

        const project = response.data;
        const fetchedProject = {
          companyLogo: project.companyLogo,
          projectName: project.projectTitle,
          projectDesc: project.projectDesc,
          duration: project.duration,
          contactInfo: project.contactInfo,
          additionalInfo: project.additionalInfo,
          deadline: project.deadline,
          requiredSkills: project.requiredSkills,
          companyName: project.companyName,
          category: project.category,
          filters: project.filters,
          timePosted: calculateTimePosted(project.createdAt),
        };
        console.log(
          "Fetched project details: " + JSON.stringify(fetchedProject)
        );
        setProjectDetails(fetchedProject);
        setLoading(false);
      } catch (error) {
        console.log("Error occured: " + error.message);
        setLoading(false);
      }
    };
    fetchProjectDetails();
  }, []);
  const calculateTimePosted = (createdAt) => {
    const currentTime = new Date();
    const createdTime = new Date(createdAt);
    const diffInMs = currentTime - createdTime;
    const diffInSeconds = Math.floor(diffInMs / 1000); // Difference in seconds
    const diffInMinutes = Math.floor(diffInSeconds / 60); // Difference in minutes
    const diffInHours = Math.floor(diffInMinutes / 60); // Difference in hours

    if (diffInHours < 1) {
      return "Less than an hour ago";
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24); // Difference in days
      return `${diffInDays} days ago`;
    }
  };
  if (loading) {
    return <div>Loading...</div>; // Render loading indicator
  }
  return (
    <Container className="job-details-page-container">
      <Button className="back-btn" onClick={() => navigate(-1)}>
        <p>
          <i className="bi bi-chevron-left"></i>Back
        </p>
      </Button>
      <div className="job-details-body">
        <div className="job-title-block">
          <img src={projectDetails.companyLogo} alt="logo here" />
          <div className="title-texts">
            <div className="title-left">
              <h3>{projectDetails.projectName}</h3>
              <p className="CompanyInfo">
                By{" "}
                <span className="CompanyName">
                  {projectDetails.companyName}
                </span>{" "}
                in {"  "}
                <span className="Category">{projectDetails.category}</span>
              </p>
            </div>
            <div className="title-right">
              {jobAccepted ? (
                <>
                  <h5>
                    Completion deadline: <br />
                    <span className="big-deadline">
                      {projectDetails.deadline}
                    </span>
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
                  <p>posted {projectDetails.timePosted}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="Filters">
          {Array.isArray(projectDetails.filters) &&
            projectDetails.filters.map((filter, index) => (
              <Badge key={index} className="FilterBadge">
                {filter}
              </Badge>
            ))}
        </div>
        <h5>Job Description:</h5>
        <div className="job-desc">
          <p>{projectDetails.projectDesc}</p>
        </div>
        <p>
          Project Duration:{" "}
          <span className="duration">{projectDetails.duration}</span>
        </p>
        <p>
          Deadline for completion:{" "}
          <span className="deadline">{projectDetails.deadline}</span>
        </p>
        <p>
          Project Budget:{" "}
          <span className="budget">RM{projectDetails.budget}</span>
        </p>
        <p>Required Skills:</p>
        <ul className="skill-list">
          {Array.isArray(projectDetails.requiredSkills) &&
            projectDetails.requiredSkills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
        </ul>
        <p>
          Contact Information: <br />
          <span className="contact">{projectDetails.contactInfo}</span>
        </p>
        <p>
          Additional Information: <br />
          <span className="additional">{projectDetails.additionalInfo}</span>
        </p>
        <Container className="button-group">
          <Row className="button-row">
            <Col></Col>
            <Col>
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
            </Col>
            <Col className="to-job-list">
              <Link to="/YourJobs">
                <Button className="to-job-list-btn">
                  Go to Job List <i className="bi bi-chevron-double-right" />
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
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
