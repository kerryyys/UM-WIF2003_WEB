import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Dell from "../../assets/icons/jobscape/DellLogo.svg";
import BackButton from "../../assets/icons/profile/back_button.svg";
import { useNavigate } from "react-router-dom";

function JobHistoryDetails() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Profile");
  };

  const handleRateClick = () => {
    navigate("/ReviewProjectPage");
    //navigate to rate page
  };

  const jobInfo = {
    avatar: Dell,
    jobTitle: "Web Development",
    company: "Dell Technology",
    status: "Completed",
    description:
      "Worked on developing web applications using React and Node.js.",
    duration: "Long Term",
    deadline: "Before August",
    skills: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
    contact: "John Doe (john.doe@example.com)",
    additionalInfo: "Received Employee of the Month award in December 2023.",
    timeAccepted: "01/01/2023 8.30pm",
    timeCompletion: "25/07/2023 5.14pm",
    paymentTotal: "RM8000",
    paymentStatus: "Completed",
    paymentTime: "1/08/2023 2.30pm",
  };

  const {
    avatar,
    jobTitle,
    company,
    status,
    description,
    duration,
    deadline,
    skills,
    contact,
    additionalInfo,
    timeAccepted,
    timeCompletion,
    paymentTotal,
    paymentStatus,
    paymentTime,
  } = jobInfo;

  return (
    <>
      <Button variant="link" onClick={handleClick} style={{ margin: "30px 0 30px 10%" }}>
        <img src={BackButton} alt="Back" />
      </Button>
      <Container
        fluid
        className="d-flex flex-column align-items-center"
        style={{ maxWidth: "1000px" }}
      >
        <Row className="justify-content-center">
          <Col xs={2} className="avatar-column">
            <Image style={{ height: "70px" }} src={avatar} roundedCircle />
          </Col>
          <Col xs={8}>
            <div className="title-status-column">
              <h3>{jobTitle}</h3>
              <p>{company}</p>
            </div>
          </Col>
          <Col xs={2} className="avatar-column">
            <div className="status-column mt-2">
              <p>{status}</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-flex justify-content-center">
        <div
          className="JobHistoryDetailsContent"
          style={{ maxWidth: "800px", marginTop: "40px" }}
        >
          <p>
            <strong>Job Description:</strong>
            <br />
            {description}
          </p>
          <p>
            <strong>Project Duration:</strong> {duration}
          </p>
          <p>
            <strong>Deadline for completion:</strong> {deadline}
          </p>
          <p>
            <strong>Required Skills:</strong>
          </p>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p>
            <strong>Contact Information:</strong>
            <br /> {contact}
          </p>
          <p>
            <strong>Additional Information:</strong>
            <br /> {additionalInfo}
          </p>
          <p>
            <strong>Time Accepted:</strong> {timeAccepted}
          </p>
          <p>
            <strong>Time Completion:</strong> {timeCompletion}
          </p>
          <p>
            <strong>Payment Total:</strong> {paymentTotal}
          </p>
          <p>
            <strong>Payment Status:</strong> {paymentStatus}
          </p>
          <p>
            <strong>Payment Time:</strong> {paymentTime}
          </p>
          <Row className="justify-content-center mt-5">
            <Button
              onClick={handleRateClick}
              style={{ background: "#2D4777", width: "100px",border:"none" }}
            >
              Rate
            </Button>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default JobHistoryDetails;
