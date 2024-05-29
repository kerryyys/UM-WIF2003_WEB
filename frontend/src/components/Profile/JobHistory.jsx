import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../components-css/Profile/JobHistoryCSS.css";
import { useNavigate } from "react-router-dom";

const JobHistory = ({ jobInfos=[] }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/JobHistoryDetails");
  };

  return (
    <>
      {jobInfos.map((jobInfo, index) => (
        <div key={index} className="job-history-card">
          <Row className="header">
            <Col xs={2} className="avatar-column">
              <Image
                src={jobInfo.avatar}
                roundedCircle
                style={{ width: "70px" }}
              />
            </Col>
            <Col xs={7} className="info-column">
              <h3 className="fs-5">{jobInfo.jobTitle}</h3>
              <p>{jobInfo.company}</p>
            </Col>
            <Col xs={3} className="status-column fs-6">
              <p>{jobInfo.status}</p>
            </Col>
          </Row>
          <Row className="JobHistoryContent">
            <Col>
              <p>
                <strong>Job Description:</strong>
                <br />
                {jobInfo.description}
              </p>
              <p>
                <strong>Project Duration:</strong> {jobInfo.duration}
              </p>
              <p>
                <strong>Deadline for completion:</strong> {jobInfo.deadline}
              </p>
              <p>
                <strong>Required Skills:</strong>
              </p>
              <ul>
                {jobInfo.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <p>
                <strong>Contact Information:</strong>
                <br /> {jobInfo.contact}
              </p>
              <p>
                <strong>Additional Information:</strong>
                <br /> {jobInfo.additionalInfo}
              </p>
            </Col>
          </Row>
          <Row className="see-more" onClick={handleClick}>
            <Col>
              <p>See More...</p>
            </Col>
          </Row>
        </div>
      ))}
    </>
  );
};

export default JobHistory;
